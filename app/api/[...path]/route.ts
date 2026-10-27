import type {NextRequest} from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const BACKEND = 'https://groupfit-together-room.chisomaniefuna19.chatgpt.site';
const allowed = new Set(['room','media','tryon']);

async function proxy(req:NextRequest, context:{params:Promise<{path:string[]}>}) {
  const {path} = await context.params;
  if(path.length!==1 || !allowed.has(path[0])) return Response.json({error:'Not found.'},{status:404});
  const origin = req.headers.get('origin');
  if(req.method!=='GET' && origin && origin!==req.nextUrl.origin) {
    return Response.json({error:'Invalid request origin.'},{status:403});
  }
  const secret = process.env.GROUPFIT_BACKEND_TOKEN;
  if(!secret) return Response.json({error:'The event service is not configured.'},{status:503});
  const headers = new Headers({
    'OAI-Sites-Authorization':'Bearer '+secret,
    'Origin':BACKEND,
  });
  const cookie = req.headers.get('cookie')?.match(/(?:^|;\s*)(gf_session=[^;]+)/)?.[1];
  if(cookie) headers.set('cookie',cookie);
  const type = req.headers.get('content-type');
  if(type) headers.set('content-type',type);
  try {
    const body = req.method==='GET' ? undefined : await req.arrayBuffer();
    if(body && body.byteLength>4.25*1024*1024) return Response.json({error:'Please keep the two photos under 4 MB combined.'},{status:413});
    const upstream = await fetch(BACKEND+'/api/'+path[0]+req.nextUrl.search,{
      method:req.method,headers,body,redirect:'manual',cache:'no-store',signal:AbortSignal.timeout(55000),
    });
    if(upstream.status>=300 && upstream.status<400) {
      return Response.json({error:'The event service needs to be reconnected.'},{status:503});
    }
    const outgoing = new Headers({'Cache-Control':'private, no-store','X-Content-Type-Options':'nosniff'});
    const contentType = upstream.headers.get('content-type');
    if(!contentType?.includes('application/json') && !contentType?.startsWith('image/')) {
      return Response.json({error:'The event service is temporarily unavailable.'},{status:502});
    }
    outgoing.set('content-type',contentType);
    const session = upstream.headers.get('set-cookie');
    if(session?.startsWith('gf_session=')) outgoing.set('set-cookie',session);
    return new Response(upstream.body,{status:upstream.status,headers:outgoing});
  }catch {
    return Response.json({error:'The event service is temporarily unavailable. Your existing event is saved; please retry.'},{status:502});
  }
}
export const GET=proxy;
export const POST=proxy;

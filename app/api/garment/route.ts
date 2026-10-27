import {dressSVG} from '../../../lib/dress';
export async function GET(req:Request){return new Response(dressSVG(new URL(req.url).searchParams.get('id')||'g1'),{headers:{'Content-Type':'image/svg+xml','Cache-Control':'public, max-age=86400'}})}

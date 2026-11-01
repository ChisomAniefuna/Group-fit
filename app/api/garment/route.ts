import {garments} from '../../../lib/catalogue';
export async function GET(req:Request){const url=new URL(req.url);const garment=garments.find(g=>g.id===url.searchParams.get('id'))||garments[0];return Response.redirect(new URL(garment.photo,url.origin),307);}

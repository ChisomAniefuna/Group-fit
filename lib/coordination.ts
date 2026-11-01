import type {Room,Garment} from './catalogue';
export type PlanBlocker={member?:string;message:string};
export function getPlanBlockers(room:Room,catalogue:Garment[]):PlanBlocker[]{
 const blockers:PlanBlocker[]=[];
 if(room.members.length<3)blockers.push({message:'Invite at least three people in total before agreeing the plan.'});
 for(const m of room.members){
  if(!m.look?.shared){blockers.push({member:m.name,message:'Share a look with the group.'});continue;}
  const g=catalogue.find(g=>g.id===m.look?.garment);
  if(!g||!room.palette.includes(g.color))blockers.push({member:m.name,message:'Choose a look in the event palette.'});
  if(!m.look.budgetOK)blockers.push({member:m.name,message:'Resolve the budget preference.'});
  if(['Needs discussion','Prefer another silhouette'].includes(m.look.feedback||''))blockers.push({member:m.name,message:'Resolve the feedback on this look.'});
  if(!m.look.selected)blockers.push({member:m.name,message:'Confirm your outfit choice.'});
 }
 return blockers;
}

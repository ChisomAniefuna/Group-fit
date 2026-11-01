export const garments = [
 {id:'g1',name:'The Rosalie',brand:'THE OCCASION EDIT',price:125,color:'Dusty rose',hex:'#ba7f82',category:'Satin',cut:'Cowl neck · Maxi',shape:0},
 {id:'g2',name:'Champagne dreams',brand:'THE OCCASION EDIT',price:145,color:'Champagne',hex:'#c8b28d',category:'Satin',cut:'One shoulder · Maxi',shape:1},
 {id:'g3',name:'A little romance',brand:'THE OCCASION EDIT',price:110,color:'Dusty rose',hex:'#c59595',category:'Chiffon',cut:'Flutter sleeve · Midi',shape:2},
 {id:'g4',name:'The Olive',brand:'THE OCCASION EDIT',price:135,color:'Sage',hex:'#8e9a81',category:'Satin',cut:'Halter neck · Maxi',shape:3},
 {id:'g5',name:'Evening light',brand:'THE OCCASION EDIT',price:165,color:'Champagne',hex:'#d1bda4',category:'Chiffon',cut:'V neck · Maxi',shape:2},
 {id:'g6',name:'The Juliette',brand:'THE OCCASION EDIT',price:95,color:'Dusty rose',hex:'#a66f76',category:'Satin',cut:'Square neck · Midi',shape:0},
 {id:'g7',name:'Sage & sound',brand:'THE OCCASION EDIT',price:120,color:'Sage',hex:'#a5b09a',category:'Chiffon',cut:'One shoulder · Maxi',shape:1},
 {id:'g8',name:'Midnight muse',brand:'THE OCCASION EDIT',price:155,color:'Midnight',hex:'#343e4c',category:'Satin',cut:'Halter neck · Maxi',shape:3},
 {id:'g9',name:'Petal poetry',brand:'THE OCCASION EDIT',price:105,color:'Dusty rose',hex:'#d3a3a2',category:'Chiffon',cut:'V neck · Midi',shape:2},
 {id:'g10',name:'Golden hour',brand:'THE OCCASION EDIT',price:140,color:'Champagne',hex:'#b8a079',category:'Satin',cut:'Square neck · Maxi',shape:0},
];
export type Garment = typeof garments[number];
export type Member = {id:string;name:string;role:'host'|'member';budget?:number;look?:{garment:string;image?:string;shared:boolean;selected:boolean;budgetOK:boolean;feedback?:string};votes:string[]};
export type Room = {id:string;title:string;type:string;date:string;palette:string[];budget:number;currency:string;notes:string;status:'planning'|'agreed';members:Member[];inviteHash:string;inviteExpires:number;created:number};
export const demoRoom:Room={id:'demo',title:"Tola’s wedding party",type:'Wedding party',date:'2027-06-14',palette:['Dusty rose','Champagne','Sage'],budget:150,currency:'GBP',notes:'Formal dress code. Dusty rose, champagne and sage. Choose the silhouette and coverage you’re comfortable with.',status:'planning',inviteHash:'',inviteExpires:0,created:0,members:[{id:'you',name:'Tola',role:'host',votes:[],look:{garment:'g1',shared:true,selected:true,budgetOK:true}},{id:'ada',name:'Ada',role:'member',votes:[],look:{garment:'g2',shared:true,selected:true,budgetOK:true}},{id:'zara',name:'Zara',role:'member',votes:[],look:{garment:'g3',shared:true,selected:false,budgetOK:true}},{id:'ife',name:'Ife',role:'member',votes:[]}]};

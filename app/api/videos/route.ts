let videos=[{id:1,url:'/sample.mp4',likes:32,author:'flux'}];
export async function GET(){ return Response.json(videos); }
export async function POST(req:Request){
  const b=await req.json();
  videos.push({id:Date.now(),...b});
  return Response.json({ok:true});
}

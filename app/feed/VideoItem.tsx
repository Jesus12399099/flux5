export default function VideoItem({video}:any){
  return (
    <div style={{height:"100vh",scrollSnapAlign:"start",position:"relative"}}>
      <video src={video.url} autoPlay loop muted
        style={{width:"100%",height:"100%",objectFit:"cover"}}/>
      <div style={{position:"absolute",right:20,bottom:80,fontSize:24,color:"#00eaff"}}>
        ❤ {video.likes}
      </div>
    </div>
  );
}

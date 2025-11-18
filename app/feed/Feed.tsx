'use client';
import useSWR from 'swr';
import VideoItem from './VideoItem';
const fetcher=(url:string)=>fetch(url).then(r=>r.json());
export default function Feed(){
  const {data}=useSWR('/api/videos',fetcher);
  return <div style={{height:"100vh",overflowY:"scroll",scrollSnapType:"y mandatory"}}>
    {data?.map((v:any)=><VideoItem key={v.id} video={v}/>)}
  </div>;
}

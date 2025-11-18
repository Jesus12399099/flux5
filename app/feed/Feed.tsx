"use client";

import { useEffect, useState } from "react";
import VideoItem from "./VideoItem";

export default function Feed() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/videos");
      const data = await res.json();
      setVideos(data);
    };
    load();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        scrollSnapType: "y mandatory",
        overflowY: "scroll",
      }}
    >
      {videos.map((src, i) => (
        <div key={i} style={{ scrollSnapAlign: "start" }}>
          <VideoItem src={src} />
        </div>
      ))}
    </div>
  );
}

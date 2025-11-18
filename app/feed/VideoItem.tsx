"use client";

import { useRef, useEffect } from "react";

export default function VideoItem({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => video.play();
    playVideo();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
    />
  );
}

'use client';

import { Home, Users, Plus, MessageCircle, User } from "lucide-react";

export default function BottomBar() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "65px",
        background: "rgba(0,0,0,0.75)",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "white",
        zIndex: 999,
        backdropFilter: "blur(8px)",
      }}
    >
      <Home size={28} />
      <Users size={28} />
      <div
        style={{
          width: 60,
          height: 35,
          borderRadius: 8,
          background: "white",
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        +
      </div>
      <MessageCircle size={28} />
      <User size={28} />
    </div>
  );
}

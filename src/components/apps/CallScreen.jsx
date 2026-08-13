import React, { useState, useEffect } from "react";
import { Phone, PhoneOff, Mic, Volume2 } from "lucide-react";
import { C } from "../../theme/colors.js";

export default function CallScreen({ name, onEnd }) {
  const [status, setStatus] = useState("calling"); // calling | connected
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setStatus("connected"), 1600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (status !== "connected") return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [status]);

  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 50, background: "#1c1c1e", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", padding: "60px 24px 40px" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: 88, height: 88, borderRadius: "50%", background: "#3a3a3c", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 30, fontWeight: 600, margin: "0 auto 16px" }}>
          {name[0]}
        </div>
        <p style={{ color: "#fff", fontSize: 20, fontWeight: 600, margin: 0 }}>{name}</p>
        <p style={{ color: "#a1a1a6", fontSize: 13, marginTop: 6 }}>
          {status === "calling" ? "Calling..." : fmt(seconds)}
        </p>
      </div>

      {status === "connected" && (
        <div style={{ display: "flex", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#3a3a3c", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Mic size={22} color="#fff" />
            </div>
            <span style={{ color: "#a1a1a6", fontSize: 11 }}>Mute</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#3a3a3c", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Volume2 size={22} color="#fff" />
            </div>
            <span style={{ color: "#a1a1a6", fontSize: 11 }}>Speaker</span>
          </div>
        </div>
      )}

      <button
        onClick={() => onEnd(seconds)}
        style={{ width: 64, height: 64, borderRadius: "50%", background: C.red, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
      >
        <PhoneOff size={26} color="#fff" />
      </button>
    </div>
  );
}

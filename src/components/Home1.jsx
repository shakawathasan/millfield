import React from "react";
import { Image as ImageIcon, Cloud, CalendarDays, DollarSign, Clock as ClockIcon, Mic } from "lucide-react";
import AppIcon from "./AppIcon.jsx";
import { C } from "../theme/colors.js";
import { useCaseData } from "../context/CaseContext.jsx";

export default function Home1({ openApp }) {
  const { meta } = useCaseData();
  const cal = meta.calendar;

  return (
    <div style={{ padding: "12px 16px 0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <button onClick={() => openApp("photos")} style={{ borderRadius: 16, overflow: "hidden", height: 96, boxShadow: "0 3px 10px rgba(0,0,0,0.35)", border: "none", padding: 0, cursor: "pointer" }}>
            <img alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </button>
          <button onClick={() => openApp("weather")} style={{ borderRadius: 16, height: 64, background: "rgba(255,255,255,0.25)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 3px 10px rgba(0,0,0,0.35)", border: "none", cursor: "pointer" }}>
            <Cloud size={22} color="#fff" />
          </button>
        </div>
        <button onClick={() => openApp("calendar")} style={{ borderRadius: 16, background: "rgba(44,44,46,0.85)", backdropFilter: "blur(8px)", padding: 12, boxShadow: "0 3px 10px rgba(0,0,0,0.35)", height: 172, border: "none", cursor: "pointer", textAlign: "left" }}>
          <p style={{ fontSize: 9, color: C.amber, fontWeight: 600, lineHeight: 1.3, margin: "0 0 6px", overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
            {cal.noteText}
          </p>
          <p style={{ color: "#fff", fontSize: 10, fontWeight: 600, margin: "0 0 4px" }}>{cal.monthLabel.toUpperCase()}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", rowGap: 2, fontSize: 7, color: "rgba(255,255,255,0.7)" }}>
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <span key={i} style={{ textAlign: "center" }}>{d}</span>
            ))}
            {Array.from({ length: cal.daysInMonth }, (_, i) => i + 1).map((d) => (
              <span
                key={d}
                style={{
                  textAlign: "center",
                  borderRadius: "50%",
                  background: d === cal.highlightDay ? C.red : "transparent",
                  color: d === cal.highlightDay ? "#fff" : "rgba(255,255,255,0.8)",
                }}
              >
                {d}
              </span>
            ))}
          </div>
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", columnGap: 12, rowGap: 16, marginTop: 16 }}>
        <AppIcon label="Photos" icon={ImageIcon} bg="linear-gradient(135deg,#fa8a3c,#e34b9e,#7b5cf0)" onClick={() => openApp("photos")} />
        <AppIcon label="Weather" icon={Cloud} bg="linear-gradient(180deg,#5db8ee,#2f7fd6)" onClick={() => openApp("weather")} />
        <AppIcon label="Calendar" icon={CalendarDays} bg="#ffffff" iconColor={C.red} onClick={() => openApp("calendar")} />
        <AppIcon label="Bank" icon={DollarSign} bg="#f5f5f0" iconColor="#1c1c1e" onClick={() => openApp("bank")} />
        <AppIcon label="Clock" icon={ClockIcon} bg="#1c1c1e" onClick={() => openApp("clock")} />
        <AppIcon label="Voice Memos" icon={Mic} bg="linear-gradient(135deg,#e34b3c,#7b3fe4)" onClick={() => openApp("voicememos")} />
      </div>
    </div>
  );
}

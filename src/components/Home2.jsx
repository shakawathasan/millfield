import React from "react";
import { Cloud } from "lucide-react";
import AppIcon from "./AppIcon.jsx";
import { HOME2_APPS } from "../data/home2Apps.js";
import { useCaseData } from "../context/CaseContext.jsx";

export default function Home2({ openApp }) {
  const { meta } = useCaseData();
  const w = meta.weather;
  const hours = ["+1h", "+2h", "+3h"];

  return (
    <div style={{ padding: "12px 16px 0" }}>
      <button
        onClick={() => openApp("weather")}
        style={{ width: "100%", borderRadius: 16, background: "rgba(44,44,46,0.85)", backdropFilter: "blur(8px)", padding: 12, textAlign: "left", boxShadow: "0 3px 10px rgba(0,0,0,0.35)", border: "none", marginBottom: 16, cursor: "pointer" }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ color: "#fff", fontSize: 12, margin: 0 }}>{w.city}</p>
            <p style={{ color: "#fff", fontSize: 26, fontWeight: 600, margin: 0 }}>{w.temp}°</p>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, margin: 0 }}>{w.cond} · H:{w.hi}° L:{w.lo}°</p>
          </div>
          <Cloud size={30} color="#fff" />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontSize: 10, color: "rgba(255,255,255,0.8)" }}>
          {w.hourly.slice(1, 4).map((d, i) => (
            <span key={i}>{hours[i]} · {d}°</span>
          ))}
        </div>
      </button>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", columnGap: 12, rowGap: 16 }}>
        {HOME2_APPS.map((a) => (
          <AppIcon key={a.id} label={a.label} icon={a.icon} bg={a.bg} iconColor={a.iconColor} onClick={() => a.app && openApp(a.id)} />
        ))}
      </div>
    </div>
  );
}

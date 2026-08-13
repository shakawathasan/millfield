import React from "react";
import { Cloud, Droplets, Wind } from "lucide-react";
import AppShell from "../AppShell.jsx";
import { useCaseData } from "../../context/CaseContext.jsx";

export default function WeatherApp({ onBack }) {
  const { meta } = useCaseData();
  const w = meta.weather;
  const hours = ["Now", ...w.hourly.slice(1).map((_, i) => `+${i + 1}h`)];

  return (
    <AppShell title="Weather" onBack={onBack} dark>
      <div style={{ padding: "24px 20px", color: "#fff", textAlign: "center" }}>
        <p style={{ fontSize: 16, margin: 0 }}>{w.city}</p>
        <p style={{ fontSize: 56, fontWeight: 300, margin: "4px 0" }}>{w.temp}°</p>
        <p style={{ fontSize: 13, color: "#a1a1a6", margin: 0 }}>{w.cond}</p>
        <p style={{ fontSize: 13, color: "#a1a1a6", margin: "2px 0 24px" }}>H:{w.hi}° L:{w.lo}°</p>

        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 14, padding: "14px 8px", display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
          {w.hourly.map((d, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 11, color: "#a1a1a6" }}>{hours[i]}</span>
              <Cloud size={16} color="#fff" />
              <span style={{ fontSize: 12 }}>{d}°</span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.08)", borderRadius: 14, padding: 14, textAlign: "left" }}>
            <Droplets size={16} color="#5db8ee" />
            <p style={{ fontSize: 11, color: "#a1a1a6", margin: "8px 0 2px" }}>HUMIDITY</p>
            <p style={{ fontSize: 18, margin: 0 }}>68%</p>
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.08)", borderRadius: 14, padding: 14, textAlign: "left" }}>
            <Wind size={16} color="#a1a1a6" />
            <p style={{ fontSize: 11, color: "#a1a1a6", margin: "8px 0 2px" }}>WIND</p>
            <p style={{ fontSize: 18, margin: 0 }}>12 km/h</p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

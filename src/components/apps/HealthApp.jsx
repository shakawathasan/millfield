import React from "react";
import { Heart, Footprints, Moon } from "lucide-react";
import AppShell from "../AppShell.jsx";
import { C } from "../../theme/colors.js";

export default function HealthApp({ onBack }) {
  const stats = [
    { icon: Footprints, label: "Steps", value: "4,218", color: "#ff9500" },
    { icon: Heart, label: "Resting Heart Rate", value: "64 bpm", color: "#ff3b30" },
    { icon: Moon, label: "Sleep", value: "6h 12m", color: "#5e5ce6" },
  ];
  return (
    <AppShell title="Health" onBack={onBack}>
      <div style={{ padding: 16 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, background: C.iosCard, borderRadius: 12, padding: 14, marginBottom: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: "50%", background: `${s.color}22`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <s.icon size={18} color={s.color} />
            </div>
            <div>
              <p style={{ fontSize: 12, color: C.iosSub, margin: 0 }}>{s.label}</p>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.iosText, margin: 0 }}>{s.value}</p>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}

import React, { useState } from "react";
import { MapPin, X } from "lucide-react";
import AppShell from "../AppShell.jsx";
import { C } from "../../theme/colors.js";
import { useCaseData } from "../../context/CaseContext.jsx";

export default function MapsApp({ onBack }) {
  const { locations: LOCATIONS } = useCaseData();
  const [active, setActive] = useState(null);

  return (
    <AppShell title="Maps" onBack={onBack}>
      <div style={{ position: "relative", width: "100%", height: "100%", background: "#dfe6e0", overflow: "hidden" }}>
        {/* stylized map background: streets */}
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
          <rect width="100%" height="100%" fill="#dfe6e0" />
          {[10, 25, 40, 55, 70, 85].map((p) => (
            <line key={"h" + p} x1="0%" y1={p + "%"} x2="100%" y2={p + "%"} stroke="#c7d1c9" strokeWidth="6" />
          ))}
          {[15, 35, 55, 75].map((p) => (
            <line key={"v" + p} x1={p + "%"} y1="0%" x2={p + "%"} y2="100%" stroke="#c7d1c9" strokeWidth="6" />
          ))}
          <path d="M0,20 Q50,45 100,15" stroke="#a9c6e0" strokeWidth="10" fill="none" opacity="0.6" />
        </svg>

        {LOCATIONS.map((loc) => (
          <button
            key={loc.id}
            onClick={() => setActive(loc)}
            style={{
              position: "absolute", left: `${loc.x}%`, top: `${loc.y}%`, transform: "translate(-50%, -100%)",
              background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center",
            }}
          >
            <MapPin size={30} color={C.red} fill={active?.id === loc.id ? C.amber : C.red} />
          </button>
        ))}

        {active && (
          <div style={{ position: "absolute", left: 12, right: 12, bottom: 12, background: "#fff", borderRadius: 14, padding: 14, boxShadow: "0 6px 20px rgba(0,0,0,0.25)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: C.iosText, margin: 0 }}>{active.name}</p>
              <button onClick={() => setActive(null)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                <X size={16} color={C.iosSub} />
              </button>
            </div>
            <p style={{ fontSize: 12, color: C.iosSub, marginTop: 6, lineHeight: 1.5 }}>{active.note}</p>
          </div>
        )}

        {!active && (
          <p style={{ position: "absolute", left: 12, top: 12, fontSize: 11, color: C.iosSub, background: "rgba(255,255,255,0.85)", padding: "6px 10px", borderRadius: 8 }}>
            Tap a pin to see what it's connected to
          </p>
        )}
      </div>
    </AppShell>
  );
}

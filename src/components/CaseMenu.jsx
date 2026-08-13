import React, { useState } from "react";
import { Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { C } from "../theme/colors.js";
import { CASES } from "../data/cases.js";

export default function CaseMenu({ onLaunch }) {
  const [selected, setSelected] = useState(0);
  const current = CASES[selected];

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: C.ink, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.25,
        backgroundImage: "repeating-linear-gradient(100deg, transparent 0 40px, rgba(255,255,255,0.04) 40px 42px), repeating-linear-gradient(0deg, rgba(0,0,0,0.4) 0 8px, transparent 8px 60px)",
      }} />
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, rgba(0,0,0,0.6), transparent, ${C.ink})` }} />

      <div style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "flex-end", padding: "12px 16px 0" }}>
        <Settings size={18} color="rgba(255,255,255,0.7)" />
      </div>

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "8px 24px 0" }}>
        <h1 style={{ color: "#fff", fontSize: 24, fontWeight: 600, fontFamily: "Georgia, serif", margin: 0 }}>The Millfield Tapes</h1>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, marginTop: 8, lineHeight: 1.5 }}>
          Complete every chapter to uncover the truth hidden within the case.
        </p>
      </div>

      <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, width: "100%" }}>
          <button onClick={() => setSelected((s) => (s - 1 + CASES.length) % CASES.length)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", flexShrink: 0 }}>
            <ChevronLeft size={22} />
          </button>

          <div style={{ flex: 1, background: C.paper, padding: "8px 8px 28px", borderRadius: 2, boxShadow: "0 20px 40px rgba(0,0,0,0.5)", transform: "rotate(-1deg)" }}>
            <div style={{ aspectRatio: "4 / 5", width: "100%", background: "#2a2a2a", overflow: "hidden" }}>
              <img alt={current.name} src={current.img} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <p style={{ textAlign: "center", color: "#1c1c1e", fontSize: 14, marginTop: 12, fontFamily: "'Courier New', monospace" }}>
              {current.name} (Case #{current.num})
            </p>
          </div>

          <button onClick={() => setSelected((s) => (s + 1) % CASES.length)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", flexShrink: 0 }}>
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {current.id !== "noor" && (
        <p style={{ position: "relative", zIndex: 10, textAlign: "center", color: "rgba(255,255,255,0.5)", fontSize: 11, padding: "0 40px", marginTop: -16, marginBottom: 8 }}>
          {current.title}{current.sub ? ` — ${current.sub}` : ""}
        </p>
      )}

      <div style={{ position: "relative", zIndex: 10, padding: "0 24px 32px" }}>
        <button
          onClick={() => current.ready && onLaunch(current.id)}
          style={{
            width: "100%", borderRadius: 999, padding: "12px 0", fontSize: 13, fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.15em", border: "none",
            cursor: current.ready ? "pointer" : "default",
            background: current.ready ? "#fff" : "rgba(255,255,255,0.15)",
            color: current.ready ? C.ink : "rgba(255,255,255,0.5)",
          }}
        >
          {current.ready ? "Next" : "Case Files Not Yet Compiled"}
        </button>
      </div>
    </div>
  );
}

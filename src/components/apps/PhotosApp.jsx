import React from "react";
import { ChevronRight, Lock } from "lucide-react";
import AppShell from "../AppShell.jsx";
import { C } from "../../theme/colors.js";
import { useCaseData } from "../../context/CaseContext.jsx";

export default function PhotosApp({ onBack }) {
  const { albums: ALBUMS } = useCaseData();
  return (
    <AppShell title="Albums" onBack={onBack}>
      <div style={{ padding: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {ALBUMS.map((a, i) => (
            <div key={i}>
              <div style={{ aspectRatio: "1 / 1", borderRadius: 12, background: "linear-gradient(135deg,#d8d3c8,#a8a196)" }} />
              <p style={{ fontSize: 13, fontWeight: 600, color: C.iosText, margin: "4px 0 0" }}>{a.name}</p>
              <p style={{ fontSize: 12, color: C.iosSub, margin: 0 }}>{a.count}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, fontWeight: 600, color: C.iosText, margin: "20px 0 8px", display: "flex", alignItems: "center", gap: 4 }}>
          Utilities <ChevronRight size={14} />
        </p>
        <div style={{ background: C.iosCard, borderRadius: 12, overflow: "hidden" }}>
          {["Hidden", "Recently Deleted"].map((label, i) => (
            <div key={label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: i === 0 ? `1px solid ${C.iosBorder}` : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: C.iosSub, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Lock size={14} color="#fff" />
                </div>
                <span style={{ fontSize: 15, color: C.iosText }}>{label}</span>
              </div>
              <Lock size={14} color="#c7c7cc" />
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

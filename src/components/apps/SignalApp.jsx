import React from "react";
import { Lock } from "lucide-react";
import AppShell from "../AppShell.jsx";
import { C } from "../../theme/colors.js";
import { useCaseData } from "../../context/CaseContext.jsx";

export default function SignalApp({ onBack }) {
  const { meta } = useCaseData();
  const s = meta.signal;
  return (
    <AppShell title="Signal" onBack={onBack}>
      <div style={{ padding: 12 }}>
        <button
          style={{ width: "100%", textAlign: "left", display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: C.iosCard, borderRadius: 12, border: "none", cursor: "default" }}
        >
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#3a76f0", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 600 }}>{s.name[0]}</div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: C.iosText, margin: 0 }}>{s.name}</p>
            <p style={{ fontSize: 12, color: C.iosSub, display: "flex", alignItems: "center", gap: 4, margin: 0 }}>
              <Lock size={11} /> {s.subtitle}
            </p>
          </div>
        </button>
        <p style={{ fontSize: 12, color: C.iosFaint, textAlign: "center", marginTop: 20, lineHeight: 1.6, padding: "0 20px" }}>
          {s.note}
        </p>
      </div>
    </AppShell>
  );
}

import React from "react";
import { Archive } from "lucide-react";
import AppShell from "../AppShell.jsx";
import { useCaseData } from "../../context/CaseContext.jsx";

export default function InstagramApp({ onBack }) {
  const { meta } = useCaseData();
  const ig = meta.instagram;
  return (
    <AppShell title="Direct" onBack={onBack} dark>
      <div style={{ padding: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "#1c1c1e", borderRadius: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg,#f58529,#dd2a7b,#8134af)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 600 }}>{ig.name[0]}</div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: "#fff", margin: 0 }}>{ig.name}</p>
            <p style={{ fontSize: 12, color: "#8e8e93", display: "flex", alignItems: "center", gap: 4, margin: 0 }}>
              <Archive size={11} /> {ig.subtitle}
            </p>
          </div>
        </div>
        <p style={{ fontSize: 12, color: "#8e8e93", textAlign: "center", marginTop: 20, lineHeight: 1.6, padding: "0 20px" }}>
          {ig.note}
        </p>
      </div>
    </AppShell>
  );
}

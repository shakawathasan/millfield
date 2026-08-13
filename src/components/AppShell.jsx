import React from "react";
import { X } from "lucide-react";
import { C } from "../theme/colors.js";

export default function AppShell({ title, onBack, children, dark }) {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 30, display: "flex", flexDirection: "column", background: dark ? C.dark : C.iosBg }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px 8px", borderBottom: `1px solid ${dark ? C.darkBorder : C.iosBorder}` }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: dark ? "#fff" : C.iosText, cursor: "pointer", display: "flex" }}>
          <X size={20} />
        </button>
        <p style={{ fontSize: 14, fontWeight: 600, color: dark ? "#fff" : C.iosText, margin: 0 }}>{title}</p>
        <span style={{ width: 20 }} />
      </div>
      <div style={{ flex: 1, overflowY: "auto" }}>{children}</div>
    </div>
  );
}

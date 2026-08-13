import React from "react";

export default function AppIcon({ label, icon: Icon, bg, iconColor = "#fff", onClick }) {
  return (
    <button onClick={onClick} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer" }}>
      <div style={{ width: 56, height: 56, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 3px 10px rgba(0,0,0,0.35)", background: bg }}>
        <Icon size={24} color={iconColor} strokeWidth={2} />
      </div>
      <span style={{ color: "#fff", fontSize: 11, textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>{label}</span>
    </button>
  );
}

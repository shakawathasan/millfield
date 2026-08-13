import React, { useState } from "react";
import AppShell from "../AppShell.jsx";
import { C } from "../../theme/colors.js";

const ROWS = ["Airplane Mode", "Wi-Fi", "Bluetooth", "Notifications", "Sound & Haptics", "Face ID & Passcode", "Privacy & Security"];

function Toggle({ on, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ width: 44, height: 26, borderRadius: 13, border: "none", background: on ? "#34c759" : "#e5e5ea", position: "relative", cursor: "pointer", flexShrink: 0 }}
    >
      <div style={{ position: "absolute", top: 2, left: on ? 20 : 2, width: 22, height: 22, borderRadius: "50%", background: "#fff", transition: "left 0.15s", boxShadow: "0 1px 3px rgba(0,0,0,0.3)" }} />
    </button>
  );
}

export default function SettingsApp({ onBack }) {
  const [state, setState] = useState(Object.fromEntries(ROWS.map((r) => [r, r === "Wi-Fi" || r === "Notifications"])));
  return (
    <AppShell title="Settings" onBack={onBack}>
      <div style={{ padding: 12 }}>
        <div style={{ background: C.iosCard, borderRadius: 12, overflow: "hidden" }}>
          {ROWS.map((r, i) => (
            <div key={r} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: i < ROWS.length - 1 ? `1px solid ${C.iosBorder}` : "none" }}>
              <span style={{ fontSize: 15, color: C.iosText }}>{r}</span>
              <Toggle on={state[r]} onClick={() => setState((s) => ({ ...s, [r]: !s[r] }))} />
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}

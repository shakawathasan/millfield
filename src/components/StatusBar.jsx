import React from "react";
import { SignalHigh, Wifi, BatteryFull } from "lucide-react";

export default function StatusBar() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 20px 4px", color: "#fff", fontSize: 13, fontWeight: 600 }}>
      <span>11:21</span>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <SignalHigh size={13} color="#fff" />
        <Wifi size={13} color="#fff" />
        <BatteryFull size={15} color="#fff" />
      </div>
    </div>
  );
}

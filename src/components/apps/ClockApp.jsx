import React, { useState, useEffect, useRef } from "react";
import AppShell from "../AppShell.jsx";
import { C } from "../../theme/colors.js";

export default function ClockApp({ onBack }) {
  const [running, setRunning] = useState(false);
  const [ms, setMs] = useState(0);
  const laps = useRef([]);
  const [lapList, setLapList] = useState([]);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setMs((m) => m + 100), 100);
    return () => clearInterval(id);
  }, [running]);

  const fmt = (v) => {
    const s = Math.floor(v / 1000);
    const cs = Math.floor((v % 1000) / 100);
    return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}.${cs}`;
  };

  return (
    <AppShell title="Stopwatch" onBack={onBack} dark>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px" }}>
        <p style={{ color: "#fff", fontSize: 48, fontWeight: 300, fontVariantNumeric: "tabular-nums" }}>{fmt(ms)}</p>
        <div style={{ display: "flex", gap: 16, marginTop: 20 }}>
          <button
            onClick={() => { if (running) { setLapList((l) => [fmt(ms), ...l]); } }}
            disabled={!running}
            style={{ width: 64, height: 64, borderRadius: "50%", background: "#2c2c2e", border: "1px solid #3a3a3c", color: "#fff", fontSize: 12, cursor: running ? "pointer" : "default" }}
          >
            Lap
          </button>
          <button
            onClick={() => {
              if (running) { setRunning(false); }
              else { setRunning(true); }
            }}
            style={{ width: 64, height: 64, borderRadius: "50%", background: running ? "#3a1414" : "#0f2b16", border: `1px solid ${running ? "#5c2020" : "#1f4a28"}`, color: running ? C.red : "#4ade80", fontSize: 12, cursor: "pointer" }}
          >
            {running ? "Stop" : "Start"}
          </button>
          <button
            onClick={() => { setRunning(false); setMs(0); setLapList([]); }}
            style={{ width: 64, height: 64, borderRadius: "50%", background: "#2c2c2e", border: "1px solid #3a3a3c", color: "#fff", fontSize: 12, cursor: "pointer" }}
          >
            Reset
          </button>
        </div>

        {lapList.length > 0 && (
          <div style={{ width: "100%", marginTop: 24 }}>
            {lapList.map((l, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 4px", borderBottom: "1px solid #2c2c2e", color: "#a1a1a6", fontSize: 13 }}>
                <span>Lap {lapList.length - i}</span>
                <span style={{ fontVariantNumeric: "tabular-nums" }}>{l}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}

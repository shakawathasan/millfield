import React, { useState } from "react";
import AppShell from "../AppShell.jsx";
import { C } from "../../theme/colors.js";
import { useCaseData } from "../../context/CaseContext.jsx";

export default function CalendarApp({ onBack }) {
  const { meta } = useCaseData();
  const cal = meta.calendar;
  const [selected, setSelected] = useState(cal.highlightDay);

  return (
    <AppShell title={cal.monthLabel} onBack={onBack}>
      <div style={{ padding: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, fontSize: 11, color: C.iosSub, marginBottom: 8, textAlign: "center" }}>
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => <span key={i}>{d}</span>)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
          {Array.from({ length: cal.daysInMonth }, (_, i) => i + 1).map((d) => (
            <button
              key={d}
              onClick={() => setSelected(d)}
              style={{
                aspectRatio: "1/1", borderRadius: "50%", border: "none", fontSize: 13,
                background: selected === d ? C.red : "transparent",
                color: selected === d ? "#fff" : C.iosText,
                fontWeight: d === cal.highlightDay ? 700 : 400,
                cursor: "pointer",
              }}
            >
              {d}
            </button>
          ))}
        </div>

        <div style={{ marginTop: 24, background: C.iosCard, borderRadius: 12, padding: 16 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: C.iosText, margin: "0 0 4px" }}>{cal.monthLabel} {selected}</p>
          {selected === cal.highlightDay ? (
            <p style={{ fontSize: 13, color: C.amber, margin: 0 }}>{cal.noteText}</p>
          ) : (
            <p style={{ fontSize: 13, color: C.iosFaint, margin: 0 }}>No reminders</p>
          )}
        </div>
      </div>
    </AppShell>
  );
}

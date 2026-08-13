import React, { useState } from "react";
import { Phone, PhoneMissed } from "lucide-react";
import AppShell from "../AppShell.jsx";
import CallScreen from "./CallScreen.jsx";
import { C } from "../../theme/colors.js";
import { useCaseData } from "../../context/CaseContext.jsx";

export default function PhoneApp({ onBack }) {
  const { calls: CALLS } = useCaseData();
  const [calls, setCalls] = useState(CALLS);
  const [dialing, setDialing] = useState(null);

  const endCall = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    setCalls((c) => [
      { name: dialing, date: "Just now", time: "", status: seconds > 0 ? `${mins} min ${secs} sec` : undefined, missed: seconds === 0 },
      ...c,
    ]);
    setDialing(null);
  };

  if (dialing) return <CallScreen name={dialing} onEnd={endCall} />;

  return (
    <AppShell title="Recents" onBack={onBack}>
      <div>
        {calls.map((c, i) => (
          <button
            key={i}
            onClick={() => setDialing(c.name)}
            style={{ width: "100%", textAlign: "left", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "12px 16px", borderBottom: `1px solid ${C.iosBorder}`, background: "none", border: "none", cursor: "pointer" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {c.missed ? <PhoneMissed size={18} color={C.red} /> : <Phone size={18} color={C.iosSub} />}
              <div>
                <p style={{ fontSize: 15, fontWeight: 500, color: c.missed ? C.red : C.iosText, margin: 0 }}>{c.name}</p>
                <p style={{ fontSize: 12, color: C.iosFaint, margin: 0 }}>
                  {c.date}{c.time ? `, ${c.time}` : ""}{c.missed ? " (Missed)" : c.status ? ` - ${c.status}` : ""}
                </p>
              </div>
            </div>
            <Phone size={16} color={C.green} />
          </button>
        ))}
      </div>
    </AppShell>
  );
}

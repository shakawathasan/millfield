import React, { useState } from "react";
import { Lock } from "lucide-react";
import AppShell from "../AppShell.jsx";
import { C } from "../../theme/colors.js";
import { useCaseData } from "../../context/CaseContext.jsx";

export default function NotesApp({ onBack }) {
  const { notes: NOTES, passcode: PASSCODE } = useCaseData();
  const [open, setOpen] = useState(null);
  const [passcode, setPasscode] = useState("");
  const [status, setStatus] = useState(null); // null | 'wrong' | 'right'

  const tryDigit = (n) => {
    if (status === "right") return;
    setStatus(null);
    setPasscode((p) => {
      if (p.length >= 4) return p;
      const next = p + n;
      if (next.length === 4) {
        setTimeout(() => setStatus(next === PASSCODE ? "right" : "wrong"), 150);
      }
      return next;
    });
  };

  if (open === "incase") {
    const note = NOTES[0];
    return (
      <AppShell title="In Case" onBack={() => { setOpen(null); setPasscode(""); setStatus(null); }}>
        {status === "right" ? (
          <div style={{ padding: 20 }}>
            <p style={{ fontSize: 11, color: C.iosFaint, marginBottom: 12 }}>Unlocked</p>
            <p style={{ fontSize: 15, color: C.iosText, lineHeight: 1.6 }}>{note.full}</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "0 32px", textAlign: "center" }}>
            <Lock size={26} color={C.iosSub} style={{ marginBottom: 16 }} />
            <p style={{ fontSize: 14, fontWeight: 600, color: C.iosText, margin: "0 0 4px" }}>This note is locked</p>
            <p style={{ fontSize: 12, color: C.iosSub, margin: "0 0 24px" }}>Enter passcode to view</p>
            <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
              {[0, 1, 2, 3].map((i) => (
                <div key={i} style={{ width: 12, height: 12, borderRadius: "50%", border: `1px solid ${C.iosFaint}`, background: passcode.length > i ? C.iosText : "transparent" }} />
              ))}
            </div>
            {status === "wrong" && <p style={{ fontSize: 12, color: C.red, marginBottom: 12 }}>Incorrect passcode</p>}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, width: 224 }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "del"].map((n, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (n === "") return;
                    if (n === "del") return setPasscode((p) => p.slice(0, -1));
                    tryDigit(String(n));
                  }}
                  style={{ height: 48, borderRadius: 999, background: "#e5e5ea", color: C.iosText, fontSize: 18, fontWeight: 500, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: n === "" ? "default" : "pointer" }}
                >
                  {n === "del" ? "⌫" : n}
                </button>
              ))}
            </div>
          </div>
        )}
      </AppShell>
    );
  }

  const note = NOTES.find((n) => n.id === open);
  if (note) {
    return (
      <AppShell title={note.title} onBack={() => setOpen(null)}>
        <div style={{ padding: 20 }}>
          <p style={{ fontSize: 11, color: C.iosFaint, marginBottom: 12 }}>{note.date}</p>
          <p style={{ fontSize: 15, color: C.iosText, lineHeight: 1.6 }}>{note.preview}</p>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell title="Notes" onBack={onBack}>
      <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
        {NOTES.map((n) => (
          <button
            key={n.id}
            onClick={() => setOpen(n.id)}
            style={{ textAlign: "left", background: C.iosCard, borderRadius: 12, padding: "12px 16px", boxShadow: "0 1px 2px rgba(0,0,0,0.06)", border: "none", cursor: "pointer" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: C.iosText, margin: 0, display: "flex", alignItems: "center", gap: 6 }}>
                {n.locked && <Lock size={12} color={C.amber} />}
                {n.title}
              </p>
              {n.date && <span style={{ fontSize: 11, color: C.iosFaint }}>{n.date}</span>}
            </div>
            <p style={{ fontSize: 13, marginTop: 2, color: n.locked ? C.iosFaint : C.iosSub, fontStyle: n.locked ? "italic" : "normal" }}>
              {n.preview}
            </p>
          </button>
        ))}
      </div>
    </AppShell>
  );
}

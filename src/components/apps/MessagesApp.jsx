import React, { useState } from "react";
import { Send } from "lucide-react";
import AppShell from "../AppShell.jsx";
import { C } from "../../theme/colors.js";
import { useCaseData } from "../../context/CaseContext.jsx";

export default function MessagesApp({ onBack }) {
  const { messages: MESSAGES } = useCaseData();
  const [open, setOpen] = useState(null);
  const [threads, setThreads] = useState(() =>
    Object.fromEntries(MESSAGES.map((m) => [m.name, [{ mine: false, text: m.snippet, date: m.date }]]))
  );
  const [draft, setDraft] = useState("");

  const send = () => {
    if (!draft.trim() || !open) return;
    setThreads((t) => ({ ...t, [open]: [...t[open], { mine: true, text: draft, date: "" }] }));
    setDraft("");
  };

  if (open) {
    const thread = threads[open];
    return (
      <AppShell title={open} onBack={() => { setOpen(null); setDraft(""); }}>
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
            {thread.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.mine ? "flex-end" : "flex-start",
                  maxWidth: "75%",
                  background: m.mine ? C.purple1 : "#e5e5ea",
                  color: m.mine ? "#fff" : C.iosText,
                  fontSize: 14,
                  borderRadius: m.mine ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  padding: "8px 16px",
                }}
              >
                {m.text}
              </div>
            ))}
            {thread[thread.length - 1]?.mine && (
              <p style={{ fontSize: 10, color: C.iosFaint, alignSelf: "flex-end", marginTop: -4 }}>Delivered</p>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: 10, borderTop: `1px solid ${C.iosBorder}` }}>
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Text Message"
              style={{ flex: 1, background: "#f2f2f7", borderRadius: 999, border: "none", padding: "10px 16px", fontSize: 14, color: C.iosText, outline: "none" }}
            />
            <button onClick={send} style={{ width: 36, height: 36, borderRadius: "50%", background: C.purple1, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Send size={15} color="#fff" />
            </button>
          </div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell title="Messages" onBack={onBack}>
      <div>
        {MESSAGES.map((m, i) => {
          const thread = threads[m.name];
          const last = thread[thread.length - 1];
          return (
            <button
              key={i}
              onClick={() => setOpen(m.name)}
              style={{ width: "100%", textAlign: "left", display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderBottom: `1px solid ${C.iosBorder}`, background: "none", border: "none", cursor: "pointer" }}
            >
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#c7c7cc", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 600, flexShrink: 0 }}>
                {m.name[0]}
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <p style={{ fontSize: 15, fontWeight: 600, color: C.iosText, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{m.name}</p>
                  {m.date && <span style={{ fontSize: 11, color: C.iosFaint, flexShrink: 0, marginLeft: 8 }}>{m.date.split(",")[0]}</span>}
                </div>
                <p style={{ fontSize: 13, color: last.mine ? C.iosText : C.iosSub, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {last.mine ? `You: ${last.text}` : last.text}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </AppShell>
  );
}

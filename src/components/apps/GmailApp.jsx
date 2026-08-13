import React, { useState } from "react";
import { Plus, X, Send } from "lucide-react";
import AppShell from "../AppShell.jsx";
import { C } from "../../theme/colors.js";
import { useCaseData } from "../../context/CaseContext.jsx";

function Compose({ onClose, onSend, initialTo = "", initialSubject = "" }) {
  const [to, setTo] = useState(initialTo);
  const [subject, setSubject] = useState(initialSubject);
  const [body, setBody] = useState("");

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 45, background: "#fff", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: `1px solid ${C.iosBorder}` }}>
        <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer" }}>
          <X size={20} color={C.iosText} />
        </button>
        <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>New Message</p>
        <button
          onClick={() => { if (to.trim() && subject.trim()) onSend({ to, subject, body }); }}
          style={{ background: "none", border: "none", color: C.purple1, cursor: "pointer", display: "flex" }}
        >
          <Send size={18} />
        </button>
      </div>
      <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column" }}>
        <input value={to} onChange={(e) => setTo(e.target.value)} placeholder="To" style={inputStyle} />
        <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" style={inputStyle} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Compose email" rows={10} style={{ ...inputStyle, resize: "none", borderBottom: "none" }} />
      </div>
    </div>
  );
}

const inputStyle = { border: "none", borderBottom: `1px solid ${C.iosBorder}`, padding: "10px 0", fontSize: 14, color: C.iosText, outline: "none" };

export default function GmailApp({ onBack }) {
  const { emails: SEED_EMAILS } = useCaseData();
  const [emails, setEmails] = useState(SEED_EMAILS);
  const [open, setOpen] = useState(null);
  const [composing, setComposing] = useState(false);
  const [toast, setToast] = useState(false);

  const sendEmail = ({ to, subject, body }) => {
    setEmails((e) => [{ from: "Me", subject, snippet: body || "(no additional text)", date: "Just now", to }, ...e]);
    setComposing(false);
    setToast(true);
    setTimeout(() => setToast(false), 1800);
  };

  if (open !== null) {
    const e = emails[open];
    return (
      <AppShell title="Inbox" onBack={() => setOpen(null)}>
        <div style={{ padding: 20 }}>
          <p style={{ fontSize: 17, fontWeight: 600, color: C.iosText, margin: "0 0 4px" }}>{e.subject}</p>
          <p style={{ fontSize: 12, color: C.iosSub, margin: "0 0 16px" }}>{e.from} · {e.date}</p>
          {e.snippet && <p style={{ fontSize: 14, color: C.iosText, lineHeight: 1.6, marginBottom: 24 }}>{e.snippet}</p>}
          <button
            onClick={() => setComposing(true)}
            style={{ border: `1px solid ${C.iosBorder}`, background: "#fff", borderRadius: 8, padding: "8px 16px", fontSize: 13, color: C.iosText, cursor: "pointer" }}
          >
            Reply
          </button>
        </div>
        {composing && <Compose onClose={() => setComposing(false)} onSend={sendEmail} initialTo={e.from} initialSubject={`Re: ${e.subject}`} />}
      </AppShell>
    );
  }

  return (
    <AppShell title="Inbox" onBack={onBack}>
      <div style={{ position: "relative", height: "100%" }}>
        <div>
          {emails.map((e, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              style={{ width: "100%", textAlign: "left", display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 16px", borderBottom: `1px solid ${C.iosBorder}`, background: "none", border: "none", cursor: "pointer" }}
            >
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: e.from === "Me" ? C.purple1 : C.gmailRed, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>
                {e.from[0]}
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: C.iosText, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{e.from}</p>
                  <span style={{ fontSize: 11, color: C.iosFaint, flexShrink: 0, marginLeft: 8 }}>{e.date.split(",")[0]}</span>
                </div>
                <p style={{ fontSize: 13, color: C.iosText, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{e.subject}</p>
                {e.snippet && <p style={{ fontSize: 12, color: C.iosSub, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{e.snippet}</p>}
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={() => setComposing(true)}
          style={{ position: "absolute", right: 16, bottom: 16, width: 52, height: 52, borderRadius: "50%", background: C.purple1, border: "none", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 16px rgba(0,0,0,0.3)", cursor: "pointer" }}
        >
          <Plus size={22} color="#fff" />
        </button>

        {toast && (
          <div style={{ position: "absolute", left: "50%", bottom: 84, transform: "translateX(-50%)", background: "#1c1c1e", color: "#fff", fontSize: 12, padding: "8px 16px", borderRadius: 20 }}>
            Email sent
          </div>
        )}
      </div>
      {composing && <Compose onClose={() => setComposing(false)} onSend={sendEmail} />}
    </AppShell>
  );
}

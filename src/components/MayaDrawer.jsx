import React, { useState } from "react";
import { X, Check } from "lucide-react";
import { C } from "../theme/colors.js";
import { useCaseData } from "../context/CaseContext.jsx";

export default function MayaDrawer({ onClose }) {
  const { mayaQuestions: MAYA_QUESTIONS } = useCaseData();
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState(null);
  const [log, setLog] = useState([]);

  const question = MAYA_QUESTIONS[step];
  const done = step >= MAYA_QUESTIONS.length;

  const choose = (idx) => {
    if (picked !== null) return;
    setPicked(idx);
    const correct = idx === question.correct;
    setLog((l) => [...l, { text: question.options[idx], correct }]);
    setTimeout(() => {
      setPicked(null);
      setStep((s) => s + 1);
    }, 700);
  };

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 40, display: "flex", alignItems: "flex-end" }}>
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} onClick={onClose} />
      <div style={{ position: "relative", width: "100%", background: "#fff", borderRadius: "16px 16px 0 0", maxHeight: "78%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: `linear-gradient(90deg, ${C.purple1}, ${C.purple2})` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 700 }}>M</div>
            <span style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>Maya</span>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer" }}>
            <X size={18} />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
          {log.map((l, i) => (
            <React.Fragment key={i}>
              <div style={{ alignSelf: "flex-start", maxWidth: "85%", background: C.iosBg, color: C.iosText, fontSize: 14, borderRadius: "16px 16px 16px 4px", padding: "10px 14px" }}>
                {MAYA_QUESTIONS[i].q}
              </div>
              <div style={{ alignSelf: "flex-end", maxWidth: "85%", background: l.correct ? "#2E7D32" : "#8B3A2F", color: "#fff", fontSize: 14, borderRadius: "16px 16px 4px 16px", padding: "10px 14px", display: "flex", alignItems: "center", gap: 6 }}>
                {l.correct ? <Check size={14} /> : <X size={14} />}
                {l.text}
              </div>
              <p style={{ fontSize: 11, color: C.iosFaint, alignSelf: "flex-end", margin: "-4px 4px 0 0" }}>{MAYA_QUESTIONS[i].note}</p>
            </React.Fragment>
          ))}

          {!done && (
            <div style={{ alignSelf: "flex-start", maxWidth: "90%", background: C.iosBg, color: C.iosText, fontSize: 14, borderRadius: "16px 16px 16px 4px", padding: "10px 14px" }}>
              {question.q}
            </div>
          )}

          {done && (
            <div style={{ textAlign: "center", padding: "16px 8px" }}>
              <p style={{ fontSize: 13, color: C.iosSub }}>
                {log.filter((l) => l.correct).length} / {MAYA_QUESTIONS.length} correct — Maya nods slowly and puts her phone away.
              </p>
            </div>
          )}
        </div>

        {!done && (
          <div style={{ padding: 12, borderTop: `1px solid ${C.iosBorder}`, display: "flex", flexDirection: "column", gap: 8 }}>
            {question.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => choose(i)}
                disabled={picked !== null}
                style={{
                  textAlign: "left",
                  padding: "10px 14px",
                  borderRadius: 12,
                  border: `1px solid ${picked === i ? C.purple1 : "#e5e5ea"}`,
                  background: picked === i ? "#f3ecfd" : "#fff",
                  color: C.iosText,
                  fontSize: 13,
                  cursor: picked === null ? "pointer" : "default",
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

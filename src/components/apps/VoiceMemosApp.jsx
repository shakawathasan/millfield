import React, { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
import AppShell from "../AppShell.jsx";
import { C } from "../../theme/colors.js";
import { useCaseData } from "../../context/CaseContext.jsx";

export default function VoiceMemosApp({ onBack }) {
  const { meta } = useCaseData();
  const MEMOS = meta.voicememos;
  const [playing, setPlaying] = useState(null);
  const [progress, setProgress] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    if (playing === null) return;
    const memo = MEMOS.find((m) => m.id === playing);
    setProgress(0);
    const step = 100 / (memo.duration * 10);
    timer.current = setInterval(() => {
      setProgress((p) => {
        if (p + step >= 100) {
          clearInterval(timer.current);
          setPlaying(null);
          return 0;
        }
        return p + step;
      });
    }, 100);
    return () => clearInterval(timer.current);
  }, [playing]);

  return (
    <AppShell title="Voice Memos" onBack={onBack}>
      <div style={{ padding: 12 }}>
        {MEMOS.map((m) => (
          <div key={m.id} style={{ background: C.iosCard, borderRadius: 12, padding: 14, marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <p style={{ fontSize: 14, fontWeight: 600, color: C.iosText, margin: 0 }}>{m.name}</p>
              <button
                onClick={() => setPlaying((p) => (p === m.id ? null : m.id))}
                style={{ width: 32, height: 32, borderRadius: "50%", background: C.iosText, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              >
                {playing === m.id ? <Pause size={14} color="#fff" /> : <Play size={14} color="#fff" />}
              </button>
            </div>
            <div style={{ height: 3, background: "#e5e5ea", borderRadius: 2, marginTop: 10, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${playing === m.id ? progress : 0}%`, background: C.purple1, transition: "width 0.1s linear" }} />
            </div>
            <p style={{ fontSize: 11, color: C.iosFaint, marginTop: 6 }}>{m.duration}s</p>
          </div>
        ))}
      </div>
    </AppShell>
  );
}

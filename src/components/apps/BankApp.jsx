import React, { useState } from "react";
import { Lock } from "lucide-react";
import AppShell from "../AppShell.jsx";
import { C } from "../../theme/colors.js";
import { useCaseData } from "../../context/CaseContext.jsx";

export default function BankApp({ onBack }) {
  const { meta } = useCaseData();
  const [pw, setPw] = useState("");
  const [tried, setTried] = useState(false);

  return (
    <AppShell title={meta.bank.title} onBack={onBack} dark>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: "0 32px", textAlign: "center" }}>
        <Lock size={26} color="#a1a1a6" style={{ marginBottom: 16 }} />
        <p style={{ color: "#fff", fontSize: 15, fontWeight: 600, margin: "0 0 4px" }}>Account locked</p>
        <p style={{ color: "#a1a1a6", fontSize: 12, marginBottom: 20, lineHeight: 1.5 }}>{meta.bank.message}</p>
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="Password"
          style={{ width: "100%", background: "#2c2c2e", border: "1px solid #3a3a3c", borderRadius: 10, padding: "10px 14px", color: "#fff", fontSize: 14, marginBottom: 10, outline: "none" }}
        />
        <button
          onClick={() => setTried(true)}
          style={{ width: "100%", background: "#fff", border: "none", borderRadius: 10, padding: "10px 0", fontSize: 13, fontWeight: 600, cursor: "pointer" }}
        >
          Sign In
        </button>
        {tried && <p style={{ color: C.red, fontSize: 12, marginTop: 10 }}>Sign-in unavailable — verify identity from the original device.</p>}
      </div>
    </AppShell>
  );
}

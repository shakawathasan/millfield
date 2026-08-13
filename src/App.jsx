import React, { useState } from "react";
import { C } from "./theme/colors.js";
import CaseMenu from "./components/CaseMenu.jsx";
import PhoneInterface from "./components/PhoneInterface.jsx";
import { CaseProvider } from "./context/CaseContext.jsx";

export default function App() {
  const [activeCase, setActiveCase] = useState(null);

  return (
    <div style={{ minHeight: "100vh", background: C.bg, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 12px" }}>
      <div
        style={{
          position: "relative", background: "#000", borderRadius: 36, overflow: "hidden",
          boxShadow: "0 30px 60px rgba(0,0,0,0.6)", border: "6px solid #1c1c1c",
          width: "min(92vw, 380px)", height: "min(88vh, 800px)",
        }}
      >
        {!activeCase ? (
          <CaseMenu onLaunch={(caseId) => setActiveCase(caseId)} />
        ) : (
          <CaseProvider caseId={activeCase}>
            <PhoneInterface onExit={() => setActiveCase(null)} />
          </CaseProvider>
        )}
      </div>
    </div>
  );
}

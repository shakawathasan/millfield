import React, { useState } from "react";
import { Search, Globe } from "lucide-react";
import AppShell from "../AppShell.jsx";
import { C } from "../../theme/colors.js";
import { useCaseData } from "../../context/CaseContext.jsx";

export default function SafariApp({ onBack }) {
  const { meta } = useCaseData();
  const [url, setUrl] = useState("");
  const [loaded, setLoaded] = useState(null);

  return (
    <AppShell title="Safari" onBack={onBack}>
      <div style={{ padding: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, background: C.iosCard, borderRadius: 10, padding: "8px 12px", marginBottom: 16 }}>
          <Search size={14} color={C.iosSub} />
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && setLoaded(url)}
            placeholder="Search or enter website name"
            style={{ flex: 1, border: "none", outline: "none", fontSize: 13, color: C.iosText, background: "transparent" }}
          />
        </div>

        {loaded ? (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <Globe size={28} color={C.iosFaint} style={{ marginBottom: 10 }} />
            <p style={{ fontSize: 13, color: C.iosSub }}>Page unavailable offline</p>
            <p style={{ fontSize: 11, color: C.iosFaint, marginTop: 4 }}>{loaded}</p>
          </div>
        ) : (
          <>
            <p style={{ fontSize: 11, color: C.iosSub, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Bookmarks</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {meta.safariBookmarks.map((b) => (
                <button
                  key={b}
                  onClick={() => setLoaded(b)}
                  style={{ background: C.iosCard, borderRadius: 10, padding: "16px 10px", border: "none", cursor: "pointer", textAlign: "center" }}
                >
                  <Globe size={18} color={C.iosSub} style={{ marginBottom: 6 }} />
                  <p style={{ fontSize: 12, color: C.iosText, margin: 0 }}>{b}</p>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </AppShell>
  );
}

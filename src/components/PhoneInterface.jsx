import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Phone, MessageSquare, Mail } from "lucide-react";
import StatusBar from "./StatusBar.jsx";
import Home1 from "./Home1.jsx";
import Home2 from "./Home2.jsx";
import MayaDrawer from "./MayaDrawer.jsx";
import NotesApp from "./apps/NotesApp.jsx";
import PhoneApp from "./apps/PhoneApp.jsx";
import MessagesApp from "./apps/MessagesApp.jsx";
import GmailApp from "./apps/GmailApp.jsx";
import PhotosApp from "./apps/PhotosApp.jsx";
import WeatherApp from "./apps/WeatherApp.jsx";
import CalendarApp from "./apps/CalendarApp.jsx";
import BankApp from "./apps/BankApp.jsx";
import ClockApp from "./apps/ClockApp.jsx";
import VoiceMemosApp from "./apps/VoiceMemosApp.jsx";
import MapsApp from "./apps/MapsApp.jsx";
import SignalApp from "./apps/SignalApp.jsx";
import InstagramApp from "./apps/InstagramApp.jsx";
import SafariApp from "./apps/SafariApp.jsx";
import HealthApp from "./apps/HealthApp.jsx";
import SettingsApp from "./apps/SettingsApp.jsx";
import SnakeGame from "./apps/SnakeGame.jsx";
import TicTacToe from "./apps/TicTacToe.jsx";
import { C } from "../theme/colors.js";
import { useCaseData } from "../context/CaseContext.jsx";

const APP_COMPONENTS = {
  notes: NotesApp,
  phone: PhoneApp,
  messages: MessagesApp,
  gmail: GmailApp,
  photos: PhotosApp,
  weather: WeatherApp,
  calendar: CalendarApp,
  bank: BankApp,
  clock: ClockApp,
  voicememos: VoiceMemosApp,
  maps: MapsApp,
  signal: SignalApp,
  instagram: InstagramApp,
  safari: SafariApp,
  health: HealthApp,
  settings: SettingsApp,
  snake: SnakeGame,
  tictactoe: TicTacToe,
};

export default function PhoneInterface({ onExit }) {
  const { meta } = useCaseData();
  const [screen, setScreen] = useState(0);
  const [app, setApp] = useState(null);
  const [mayaOpen, setMayaOpen] = useState(false);
  const touchX = useRef(null);

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx < -40 && screen === 0) setScreen(1);
    if (dx > 40 && screen === 1) setScreen(0);
    touchX.current = null;
  };

  const ActiveApp = app ? APP_COMPONENTS[app] : null;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <img
        src={meta.wallpaper}
        alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.15)" }} />

      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", padding: "8px 16px 0" }}>
          <button onClick={onExit} style={{ display: "flex", alignItems: "center", gap: 2, background: "none", border: "none", color: "#fff", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>
            <ChevronLeft size={18} /> Cases
          </button>
        </div>
        <StatusBar />

        <div style={{ flex: 1, overflow: "hidden" }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div style={{ display: "flex", height: "100%", width: "200%", transition: "transform 0.3s", transform: `translateX(${screen === 0 ? "0%" : "-50%"})` }}>
            <div style={{ width: "50%", height: "100%", overflowY: "auto" }}>
              <Home1 openApp={setApp} />
            </div>
            <div style={{ width: "50%", height: "100%", overflowY: "auto" }}>
              <Home2 openApp={setApp} />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 6, paddingBottom: 8 }}>
          {[0, 1].map((i) => (
            <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: screen === i ? "#fff" : "rgba(255,255,255,0.4)" }} />
          ))}
        </div>

        <button
          onClick={() => setMayaOpen(true)}
          style={{ margin: "0 12px 8px", display: "flex", alignItems: "center", gap: 8, background: `linear-gradient(90deg, ${C.purple1}, ${C.purple2})`, borderRadius: 999, padding: "8px 12px", boxShadow: "0 4px 14px rgba(0,0,0,0.4)", border: "none", cursor: "pointer" }}
        >
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>M</div>
          <span style={{ color: "#fff", fontSize: 13, flex: 1, textAlign: "left" }}>Maya has a question</span>
          <ChevronRight size={15} color="#fff" />
        </button>

        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "8px 24px 16px" }}>
          <button onClick={() => setApp("phone")} style={{ width: 48, height: 48, borderRadius: "50%", background: C.green, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.3)", border: "none", cursor: "pointer" }}>
            <Phone size={20} color="#fff" fill="#fff" />
          </button>
          <button onClick={() => setApp("messages")} style={{ width: 48, height: 48, borderRadius: "50%", background: C.green, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.3)", border: "none", cursor: "pointer" }}>
            <MessageSquare size={20} color="#fff" fill="#fff" />
          </button>
          <button onClick={() => setApp("gmail")} style={{ width: 48, height: 48, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(0,0,0,0.3)", border: "none", cursor: "pointer" }}>
            <Mail size={20} color={C.gmailRed} />
          </button>
        </div>
      </div>

      {ActiveApp && <ActiveApp onBack={() => setApp(null)} />}
      {mayaOpen && <MayaDrawer onClose={() => setMayaOpen(false)} />}
    </div>
  );
}

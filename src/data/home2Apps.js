import { Map, MessageCircle, Camera, Compass, StickyNote, HeartPulse, Settings, Gamepad2, Hash } from "lucide-react";

export const HOME2_APPS = [
  { id: "maps", label: "Maps", icon: Map, bg: "#3fae5c", iconColor: "#fff", app: true },
  { id: "signal", label: "Signal", icon: MessageCircle, bg: "#3a76f0", iconColor: "#fff", app: true },
  { id: "instagram", label: "Instagram", icon: Camera, bg: "linear-gradient(135deg,#f58529,#dd2a7b,#8134af)", iconColor: "#fff", app: true },
  { id: "safari", label: "Safari", icon: Compass, bg: "#eef3fb", iconColor: "#3a76f0", app: true },
  { id: "notes", label: "Notes", icon: StickyNote, bg: "#f5c451", iconColor: "#7a5200", app: true },
  { id: "health", label: "Health", icon: HeartPulse, bg: "#ffffff", iconColor: "#ff3b30", app: true },
  { id: "settings", label: "Settings", icon: Settings, bg: "#8e8e93", iconColor: "#fff", app: true },
  { id: "snake", label: "Snake", icon: Gamepad2, bg: "#111111", iconColor: "#4ade80", app: true },
  { id: "tictactoe", label: "Tic Tac Toe", icon: Hash, bg: "#ffffff", iconColor: "#1c1c1e", app: true },
];

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import AppShell from "../AppShell.jsx";
import { C } from "../../theme/colors.js";

const SIZE = 14;
const START = [{ x: 6, y: 6 }, { x: 5, y: 6 }, { x: 4, y: 6 }];

function randomFood(snake) {
  let f;
  do {
    f = { x: Math.floor(Math.random() * SIZE), y: Math.floor(Math.random() * SIZE) };
  } while (snake.some((s) => s.x === f.x && s.y === f.y));
  return f;
}

export default function SnakeGame({ onBack }) {
  const [snake, setSnake] = useState(START);
  const [food, setFood] = useState(() => randomFood(START));
  const [dir, setDir] = useState({ x: 1, y: 0 });
  const [over, setOver] = useState(false);
  const [score, setScore] = useState(0);
  const dirRef = useRef(dir);
  dirRef.current = dir;

  const setDirection = useCallback((nx, ny) => {
    if (dirRef.current.x === -nx && dirRef.current.y === -ny) return;
    setDir({ x: nx, y: ny });
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowUp") setDirection(0, -1);
      if (e.key === "ArrowDown") setDirection(0, 1);
      if (e.key === "ArrowLeft") setDirection(-1, 0);
      if (e.key === "ArrowRight") setDirection(1, 0);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setDirection]);

  useEffect(() => {
    if (over) return;
    const id = setInterval(() => {
      setSnake((prev) => {
        const head = { x: prev[0].x + dirRef.current.x, y: prev[0].y + dirRef.current.y };
        if (head.x < 0 || head.y < 0 || head.x >= SIZE || head.y >= SIZE || prev.some((s) => s.x === head.x && s.y === head.y)) {
          setOver(true);
          return prev;
        }
        const ate = head.x === food.x && head.y === food.y;
        const next = [head, ...prev];
        if (ate) {
          setScore((s) => s + 1);
          setFood(randomFood(next));
        } else {
          next.pop();
        }
        return next;
      });
    }, 160);
    return () => clearInterval(id);
  }, [food, over]);

  const restart = () => {
    setSnake(START);
    setFood(randomFood(START));
    setDir({ x: 1, y: 0 });
    setOver(false);
    setScore(0);
  };

  const cell = 20;

  return (
    <AppShell title="Snake" onBack={onBack} dark>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 12px" }}>
        <p style={{ color: "#fff", fontSize: 13, marginBottom: 10 }}>Score: {score}</p>
        <div style={{ position: "relative", width: SIZE * cell, height: SIZE * cell, background: "#111", borderRadius: 8, overflow: "hidden", border: "1px solid #2a2a2a" }}>
          {snake.map((s, i) => (
            <div key={i} style={{ position: "absolute", left: s.x * cell, top: s.y * cell, width: cell, height: cell, background: i === 0 ? "#4ade80" : "#22c55e", borderRadius: 3 }} />
          ))}
          <div style={{ position: "absolute", left: food.x * cell, top: food.y * cell, width: cell, height: cell, background: C.red, borderRadius: "50%" }} />
          {over && (
            <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10 }}>
              <p style={{ color: "#fff", fontSize: 15, fontWeight: 600 }}>Game Over</p>
              <button onClick={restart} style={{ background: "#4ade80", border: "none", borderRadius: 8, padding: "8px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
                Restart
              </button>
            </div>
          )}
        </div>

        <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "repeat(3, 44px)", gridTemplateRows: "repeat(3, 44px)", gap: 6 }}>
          <span />
          <PadBtn onClick={() => setDirection(0, -1)}><ArrowUp size={18} /></PadBtn>
          <span />
          <PadBtn onClick={() => setDirection(-1, 0)}><ArrowLeft size={18} /></PadBtn>
          <span />
          <PadBtn onClick={() => setDirection(1, 0)}><ArrowRight size={18} /></PadBtn>
          <span />
          <PadBtn onClick={() => setDirection(0, 1)}><ArrowDown size={18} /></PadBtn>
          <span />
        </div>
      </div>
    </AppShell>
  );
}

function PadBtn({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ width: 44, height: 44, borderRadius: 10, background: "#262626", border: "1px solid #333", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
      {children}
    </button>
  );
}

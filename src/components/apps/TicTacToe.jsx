import React, { useState, useEffect } from "react";
import AppShell from "../AppShell.jsx";
import { C } from "../../theme/colors.js";

const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function winner(b) {
  for (const [a, b1, c] of LINES) {
    if (b[a] && b[a] === b[b1] && b[a] === b[c]) return b[a];
  }
  return b.every(Boolean) ? "draw" : null;
}

function computerMove(b) {
  const empty = b.map((v, i) => (v ? null : i)).filter((v) => v !== null);
  // try to win
  for (const i of empty) {
    const copy = [...b]; copy[i] = "O";
    if (winner(copy) === "O") return i;
  }
  // block player
  for (const i of empty) {
    const copy = [...b]; copy[i] = "X";
    if (winner(copy) === "X") return i;
  }
  return empty[Math.floor(Math.random() * empty.length)];
}

export default function TicTacToe({ onBack }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [score, setScore] = useState({ X: 0, O: 0, draw: 0 });

  const w = winner(board);

  useEffect(() => {
    if (w) {
      setScore((s) => ({ ...s, [w === "draw" ? "draw" : w]: s[w === "draw" ? "draw" : w] + 1 }));
      return;
    }
    if (turn === "O") {
      const id = setTimeout(() => {
        setBoard((b) => {
          const i = computerMove(b);
          const copy = [...b];
          copy[i] = "O";
          return copy;
        });
        setTurn("X");
      }, 450);
      return () => clearTimeout(id);
    }
  }, [turn, w]);

  const play = (i) => {
    if (board[i] || w || turn !== "X") return;
    const copy = [...board];
    copy[i] = "X";
    setBoard(copy);
    setTurn("O");
  };

  const restart = () => {
    setBoard(Array(9).fill(null));
    setTurn("X");
  };

  return (
    <AppShell title="Tic Tac Toe" onBack={onBack}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px 12px" }}>
        <p style={{ fontSize: 12, color: C.iosSub, marginBottom: 8 }}>You are X · computer is O</p>
        <p style={{ fontSize: 12, color: C.iosText, marginBottom: 14 }}>
          Wins {score.X} — Losses {score.O} — Draws {score.draw}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 72px)", gridTemplateRows: "repeat(3, 72px)", gap: 6 }}>
          {board.map((v, i) => (
            <button
              key={i}
              onClick={() => play(i)}
              style={{
                background: "#fff", borderRadius: 10, border: "1px solid #e5e5ea", fontSize: 30, fontWeight: 700,
                color: v === "X" ? C.purple1 : C.red, cursor: v || w ? "default" : "pointer",
              }}
            >
              {v}
            </button>
          ))}
        </div>

        {w && (
          <div style={{ marginTop: 18, textAlign: "center" }}>
            <p style={{ fontSize: 15, fontWeight: 600, color: C.iosText, marginBottom: 10 }}>
              {w === "draw" ? "It's a draw" : w === "X" ? "You win!" : "Computer wins"}
            </p>
            <button onClick={restart} style={{ background: C.purple1, color: "#fff", border: "none", borderRadius: 8, padding: "8px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>
              Play Again
            </button>
          </div>
        )}
      </div>
    </AppShell>
  );
}

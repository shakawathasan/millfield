export const NOTES = [
  {
    id: "incase",
    title: "In Case",
    date: "",
    locked: true,
    preview: "This note is locked. Enter passcode to view.",
    full: "The referral wasn't the only thing arranged without me. If you're reading this, you already know where to look — the same four numbers that started all of it.",
  },
  { id: "n1", title: "Things I Know", date: "Oct 23", preview: "Breakup timing - same week I downloaded the files" },
  { id: "n2", title: "Things I Do Not Understand", date: "Oct 22", preview: "Sara asked about Adam and work" },
  { id: "n3", title: "People I Trust", date: "Oct 14", preview: "J - Dr. Chen - Elena - no one else" },
  { id: "n4", title: "The Referral", date: "Oct 24", preview: "AR-2024-1018 - arranged without my knowledge" },
  { id: "n5", title: "Adam - Pattern", date: "Oct 16", preview: "He broke up with me on September 15. Four days after." },
  { id: "n6", title: "Sara - Something Changed", date: "Oct 21", preview: "She asked about Adam's work contacts" },
  { id: "n7", title: "The Numbers", date: "Oct 20", preview: "€380k confirmed - estimated total higher" },
  { id: "n8", title: "Dates", date: "Oct 15", preview: "Oct - things to keep track of" },
  { id: "n9", title: "Note from Elena", date: "Oct 21", preview: "She slipped this under my door" },
  { id: "n10", title: "Dr. Chen - Results", date: "Oct 25", preview: "All markers normal - no clinical basis" },
  { id: "n11", title: "J - Protocol", date: "Oct 20", preview: "Signal only - encrypted files only" },
];

// Passcode design note: no code was specified in the source material.
// "The Referral" note (AR-2024-1018) is the only numeric string in the case
// file, so the locked note's passcode is set to those four digits (1018).
// This is a design choice made to complete the mechanic, not a fact from
// the source — change PASSCODE below if you have the intended code.
export const PASSCODE = "1018";

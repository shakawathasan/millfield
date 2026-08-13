export const NOTES = [
  {
    id: "incase",
    title: "In Case",
    date: "",
    locked: true,
    preview: "This note is locked. Enter passcode to view.",
    full: "The ledger is real. Kenji's been skimming the door money for eight months and Aurora's lease renewal depends on covering it up. If I go quiet, ask him about the second set of books.",
  },
  { id: "n1", title: "The Numbers Don't Match", date: "Jun 11", preview: "Door take vs. bank deposit — off by ¥380,000 again this month" },
  { id: "n2", title: "Kenji", date: "Jun 9", preview: "Getting defensive whenever I bring up the books" },
  { id: "n3", title: "The Landlord's Deadline", date: "Jun 14", preview: "Lease renewal due June 20 — need clean financials to show" },
  { id: "n4", title: "Yuki's Warning", date: "Jun 13", preview: "\"Stop asking questions you already know the answer to\"" },
  { id: "n5", title: "Rooftop Event", date: "Jun 15", preview: "Investor showcase tonight — everyone who matters will be there" },
  { id: "n6", title: "Second Set of Books", date: "Jun 12", preview: "Found a second ledger in the office safe. Different numbers." },
];

// Passcode design note: no code was given, so this uses the amount from
// Rei's own note about the discrepancy (¥380,000 → 380) — the only number
// that recurs across her notes. Change PASSCODE if you write in a real one.
export const PASSCODE = "0380";

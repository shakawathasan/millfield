export const NOTES = [
  {
    id: "incase",
    title: "In Case",
    date: "",
    locked: true,
    preview: "This note is locked. Enter passcode to view.",
    full: "Source #3 confirmed it on record. The harbor contracts were falsified starting with permit 2209. If this note is being read, the draft never got published — check the cloud backup before anyone else does.",
  },
  { id: "n1", title: "Source #3", date: "Feb 8", preview: "Agreed to go on record. Scared, but agreed." },
  { id: "n2", title: "The Editor's Cold Feet", date: "Feb 10", preview: "Marcus wants more corroboration before we run it" },
  { id: "n3", title: "Permit 2209", date: "Feb 6", preview: "Falsified harbor inspection — same signature as three other permits" },
  { id: "n4", title: "Being Followed", date: "Feb 11", preview: "Same gray sedan outside the apartment two nights running" },
  { id: "n5", title: "Legal's Notes", date: "Feb 9", preview: "They want the story lawyered before publish — delays everything" },
  { id: "n6", title: "Draft Backup", date: "Feb 11", preview: "Uploaded the full draft to the cloud at 10:03 PM tonight" },
];

// Passcode design note: no code was given, so this uses the permit number
// referenced repeatedly in Danny's notes (2209) — the clearest numeric
// anchor in the case file. Change PASSCODE if you write in a real one.
export const PASSCODE = "2209";

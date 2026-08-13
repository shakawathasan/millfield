export const NOTES = [
  {
    id: "incase",
    title: "In Case",
    date: "",
    locked: true,
    preview: "This note is locked. Enter passcode to view.",
    full: "If something happens to me before Monday, the screenshot is already backed up. Dean Okafor has the deadline. Don't let Chase talk his way out of this one.",
  },
  { id: "n1", title: "The Leak", date: "Apr 3", preview: "Chase paid Reyes for the final. I have the Venmo screenshot." },
  { id: "n2", title: "Priya", date: "Apr 5", preview: "She says meet by the pool at midnight. Don't tell Chase." },
  { id: "n3", title: "Dean Okafor's Deadline", date: "Apr 6", preview: "Submit proof by Monday or the investigation closes." },
  { id: "n4", title: "Founders' Night", date: "Apr 7", preview: "Pledges running the bar. Beckett keeps refilling my cup." },
  { id: "n5", title: "The Recommendation", date: "Apr 4", preview: "Only one residency letter this year. Chase knows I could take it." },
  { id: "n6", title: "Blind Spot", date: "Apr 2", preview: "Pool camera's been \"broken\" since March. Convenient." },
  { id: "n7", title: "Screenshot Backup", date: "Apr 7", preview: "Sent the Venmo proof to my own email at 11:47 PM, just in case." },
];

// Passcode design note: no code was given, so this uses the timestamp Felix
// wrote down for his own backup email (11:47 PM) — the only number in his
// notes. Change PASSCODE if you write in a real one.
export const PASSCODE = "1147";

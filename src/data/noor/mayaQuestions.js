// Maya's questions: built from facts already present in the case file
// (notes, emails, call log) so nothing about the mystery's solution is
// invented here — this is a recall/connect-the-dots check, not a scripted
// plot reveal. Replace with real dialogue if you have the original script.
export const MAYA_QUESTIONS = [
  {
    q: "Maya: \"That referral you never asked for — do you remember the file number on it?\"",
    options: ["AR-2024-1018", "AR-2024-1810", "AR-2018-1024"],
    correct: 0,
    note: "From \"The Referral,\" Oct 24.",
  },
  {
    q: "Maya: \"You wrote down exactly three people you still trusted. Who were they?\"",
    options: ["Sara, Adam, Elena", "J, Dr. Chen, Elena", "Maya, J, Dr. Chen"],
    correct: 1,
    note: "From \"People I Trust,\" Oct 14.",
  },
  {
    q: "Maya: \"Sara emailed you after you died. What did she say Adam did?\"",
    options: [
      "He called her after you died",
      "He warned her about the audit",
      "He asked her to delete the files",
    ],
    correct: 0,
    note: "From Sara Okonkwo's email, Oct 28.",
  },
  {
    q: "Maya: \"Your notes say Adam ended things on September 15. How long after that did you download the files?\"",
    options: ["The same week", "A month later", "The next day"],
    correct: 0,
    note: "From \"Things I Know,\" Oct 23.",
  },
];

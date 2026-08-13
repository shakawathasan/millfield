import React, { createContext, useContext } from "react";
import { CASE_DATA } from "../data/registry.js";

const CaseContext = createContext(null);

export function CaseProvider({ caseId, children }) {
  const data = CASE_DATA[caseId];
  return <CaseContext.Provider value={data}>{children}</CaseContext.Provider>;
}

export function useCaseData() {
  const ctx = useContext(CaseContext);
  if (!ctx) throw new Error("useCaseData must be used inside a CaseProvider");
  return ctx;
}

import { NOTES as NOOR_NOTES, PASSCODE as NOOR_PASSCODE } from "./noor/notes.js";
import { CALLS as NOOR_CALLS } from "./noor/calls.js";
import { MESSAGES as NOOR_MESSAGES } from "./noor/messages.js";
import { EMAILS as NOOR_EMAILS } from "./noor/emails.js";
import { ALBUMS as NOOR_ALBUMS } from "./noor/albums.js";
import { LOCATIONS as NOOR_LOCATIONS } from "./noor/locations.js";
import { MAYA_QUESTIONS as NOOR_MAYA } from "./noor/mayaQuestions.js";
import { META as NOOR_META } from "./noor/meta.js";

import { NOTES as FELIX_NOTES, PASSCODE as FELIX_PASSCODE } from "./felix/notes.js";
import { CALLS as FELIX_CALLS } from "./felix/calls.js";
import { MESSAGES as FELIX_MESSAGES } from "./felix/messages.js";
import { EMAILS as FELIX_EMAILS } from "./felix/emails.js";
import { ALBUMS as FELIX_ALBUMS } from "./felix/albums.js";
import { LOCATIONS as FELIX_LOCATIONS } from "./felix/locations.js";
import { MAYA_QUESTIONS as FELIX_MAYA } from "./felix/mayaQuestions.js";
import { META as FELIX_META } from "./felix/meta.js";

import { NOTES as REI_NOTES, PASSCODE as REI_PASSCODE } from "./rei/notes.js";
import { CALLS as REI_CALLS } from "./rei/calls.js";
import { MESSAGES as REI_MESSAGES } from "./rei/messages.js";
import { EMAILS as REI_EMAILS } from "./rei/emails.js";
import { ALBUMS as REI_ALBUMS } from "./rei/albums.js";
import { LOCATIONS as REI_LOCATIONS } from "./rei/locations.js";
import { MAYA_QUESTIONS as REI_MAYA } from "./rei/mayaQuestions.js";
import { META as REI_META } from "./rei/meta.js";

import { NOTES as DANNY_NOTES, PASSCODE as DANNY_PASSCODE } from "./danny/notes.js";
import { CALLS as DANNY_CALLS } from "./danny/calls.js";
import { MESSAGES as DANNY_MESSAGES } from "./danny/messages.js";
import { EMAILS as DANNY_EMAILS } from "./danny/emails.js";
import { ALBUMS as DANNY_ALBUMS } from "./danny/albums.js";
import { LOCATIONS as DANNY_LOCATIONS } from "./danny/locations.js";
import { MAYA_QUESTIONS as DANNY_MAYA } from "./danny/mayaQuestions.js";
import { META as DANNY_META } from "./danny/meta.js";

export const CASE_DATA = {
  noor: { notes: NOOR_NOTES, passcode: NOOR_PASSCODE, calls: NOOR_CALLS, messages: NOOR_MESSAGES, emails: NOOR_EMAILS, albums: NOOR_ALBUMS, locations: NOOR_LOCATIONS, mayaQuestions: NOOR_MAYA, meta: NOOR_META },
  felix: { notes: FELIX_NOTES, passcode: FELIX_PASSCODE, calls: FELIX_CALLS, messages: FELIX_MESSAGES, emails: FELIX_EMAILS, albums: FELIX_ALBUMS, locations: FELIX_LOCATIONS, mayaQuestions: FELIX_MAYA, meta: FELIX_META },
  rei: { notes: REI_NOTES, passcode: REI_PASSCODE, calls: REI_CALLS, messages: REI_MESSAGES, emails: REI_EMAILS, albums: REI_ALBUMS, locations: REI_LOCATIONS, mayaQuestions: REI_MAYA, meta: REI_META },
  danny: { notes: DANNY_NOTES, passcode: DANNY_PASSCODE, calls: DANNY_CALLS, messages: DANNY_MESSAGES, emails: DANNY_EMAILS, albums: DANNY_ALBUMS, locations: DANNY_LOCATIONS, mayaQuestions: DANNY_MAYA, meta: DANNY_META },
};

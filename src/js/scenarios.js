const scenarios = [
  {
    text: "A student currently in a foster placement, identified through the state system.",
    correct: "yes",
    explanation: "Correct. Students actively identified through the official system may be included in Foster Youth reporting when all required conditions are met."
  },
  {
    text: "A student previously in foster care but no longer in placement.",
    correct: "no",
    explanation: "Correct. Former Foster Youth are not counted in the Foster Youth student group for Dashboard reporting in the same way as currently identified Foster Youth."
  },
  {
    text: "A student in an informal guardianship arrangement with a relative.",
    correct: "no",
    explanation: "Correct. Informal local understanding does not automatically translate into official Foster Youth student group identification."
  }
];

const inclusionFlipCards = [
  {
    text: "A student currently in a foster placement, identified through the state system.",
    correct: "yes",
    resultLabel: "Included",
    explanation:
      "Students actively identified through the official state system may be included in Foster Youth reporting when required conditions are met."
  },
  {
    text: "A student previously in foster care but no longer in placement.",
    correct: "no",
    resultLabel: "Not Included",
    explanation:
      "Former Foster Youth are not counted in the Foster Youth student group for Dashboard reporting in the same way as currently identified Foster Youth."
  },
  {
    text: "A student in an informal guardianship arrangement with a relative.",
    correct: "no",
    resultLabel: "Not Included",
    explanation:
      "Informal local understanding does not automatically translate into official Foster Youth student group identification."
  },
  {
    text: "A student known locally to staff, but not officially identified through state systems.",
    correct: "no",
    resultLabel: "Not Included",
    explanation:
      "Local awareness alone does not determine Foster Youth reporting. Official identification is what matters for inclusion."
  },
  {
    text: "A student identified through the CDSS/CALPADS match, even though site staff were not previously aware of the identification.",
    correct: "yes",
    resultLabel: "Included",
    explanation:
      "Students identified through the official CDSS/CALPADS match process are included in Foster Youth reporting, even if the site was not previously aware of the identification."
  },
  {
    text: "A student tracked locally as a concern, but not identified through the official state match or local foster match process.",
    correct: "no",
    resultLabel: "Not Included",
    explanation:
      "Students must be identified through the official state match or local foster match process to be included. Local tracking alone does not determine inclusion."
  }
];

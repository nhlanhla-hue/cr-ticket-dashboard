// ╔══════════════════════════════════════════════════════════════╗
// ║  C+R TICKET SALES DATA — UPDATE THIS FILE ONLY             ║
// ║  Last updated: 27 April 2026                                ║
// ║  Source: C_R_TICKET_SALES spreadsheet as of 27/04/2026      ║
// ╚══════════════════════════════════════════════════════════════╝

export const DATA = {
  lastUpdated: "27 April 2026",
  exchangeRate: 0.74,

  // ── PALM BEACH ──────────────────────────────────────────
  palmBeach: {
    title: "Palm Beach",
    subtitle: "April 25, 2026 — The Palm House Hotel",
    tickets: 32,
    gross: 7040,
    fees: 219.12,
    purchases: 27,
  },

  // ── IMPACT CHARLESTON ───────────────────────────────────
  charleston: {
    title: "Impact Charleston",
    subtitle: "April 23, 2026 — The Cooper Hotel",
    tickets: 23,
    gross: 5060,
    fees: 154.64,
    purchases: 17,
  },

  // ── MIAMI GRAND FINALE ──────────────────────────────────
  miami: {
    title: "Miami Grand Finale",
    subtitle: "April 26, 2026 — The Moore Club",
    tickets: 115,
    gross: 54250,
    fees: 1568.85,
    purchases: 51,
  },

  // ── TRANSFERS TO CASH & ROCKET ──────────────────────────
  transfers: [
    { ref: "SUM001", amount: 5358.67, gbp: 4013.64, rate: 0.749, date: "19/03/2026" },
    { ref: "SUM002", amount: 5182.22, gbp: 3910.99, rate: 0.75, date: "30/03/2026" },
    { ref: "SUM003", amount: 12873.27, gbp: 9654.95, rate: 0.75, date: "09/04/2026" },
    { ref: "SUM004", amount: 9097.31, gbp: 6732.01, rate: 0.74, date: "16/04/2026" },
    { ref: "SUM005", amount: 7926.18, gbp: 5865.37, rate: 0.74, date: "20/04/2026" },
    { ref: "SUM006", amount: 11277.60, gbp: 8345.42, rate: 0.74, date: "24/04/2026" },
    { ref: "SUM007", amount: 6677.28, gbp: 4941.19, rate: 0.74, date: "26/04/2026" },
    { ref: "SUM008", amount: 3081.16, gbp: 2280.06, rate: 0.74, date: "27/04/2026" },
  ],
};

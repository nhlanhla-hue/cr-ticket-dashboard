// ╔══════════════════════════════════════════════════════════════╗
// ║  C+R TICKET SALES DATA — UPDATE THIS FILE ONLY             ║
// ║  Last updated: 20 April 2026                                ║
// ║  Source: C_R_TICKET_SALES spreadsheet + SUM005 invoice      ║
// ╚══════════════════════════════════════════════════════════════╝

export const DATA = {
  lastUpdated: "20 April 2026",
  exchangeRate: 0.74,

  // ── PALM BEACH ──────────────────────────────────────────
  palmBeach: {
    title: "Palm Beach",
    subtitle: "April 25, 2026 — The Palm House Hotel",
    buyers: [
      { name: "Dana Barsky", tickets: 1, amount: 220, date: "01/04", fee: 7.70 },
      { name: "Linda Kochajewska", tickets: 1, amount: 220, date: "08/04", fee: 5.14 },
      { name: "Katie Weisz", tickets: 1, amount: 220, date: "08/04", fee: 7.70 },
      { name: "Emma Vernetti", tickets: 1, amount: 220, date: "07/04", fee: 7.34 },
      { name: "Mayi De La Vega", tickets: 2, amount: 440, date: "10/04", fee: 15.40 },
      { name: "Mayi De La Vega", tickets: 1, amount: 220, date: "10/04", fee: 7.70 },
      { name: "Doug Mcglynn", tickets: 1, amount: 220, date: "16/04", fee: 5.14 },
      { name: "Nicole Noonan", tickets: 2, amount: 440, date: "17/04", fee: 9.98 },
      { name: "Agi Smith", tickets: 1, amount: 220, date: "18/04", fee: 7.70 },
    ],
  },

  // ── IMPACT CHARLESTON ───────────────────────────────────
  charleston: {
    title: "Impact Charleston",
    subtitle: "April 23, 2026 — The Cooper Hotel",
    buyers: [
      { name: "Emma Vernetti", tickets: 1, amount: 220, date: "18/02", fee: 7.34 },
      { name: "Tara Bergaz", tickets: 1, amount: 220, date: "26/02", fee: 7.70 },
      { name: "Laura Khanna", tickets: 1, amount: 220, date: "17/03", fee: 5.14 },
      { name: "Tara Bergaz", tickets: 1, amount: 220, date: "17/03", fee: 7.70 },
      { name: "Anna Shuford", tickets: 1, amount: 220, date: "17/03", fee: 7.70 },
      { name: "Lauren Silverstein", tickets: 1, amount: 220, date: "02/04", fee: 5.14 },
      { name: "Emma Vernetti", tickets: 1, amount: 220, date: "07/04", fee: 7.34 },
      { name: "Katherine Tashjian", tickets: 2, amount: 440, date: "14/04", fee: 15.40 },
      { name: "Evelina Leviev", tickets: 1, amount: 220, date: "17/04", fee: 9.90 },
      { name: "Lauren Netter", tickets: 1, amount: 220, date: "20/04", fee: 5.14 },
    ],
  },

  // ── MIAMI GRAND FINALE ──────────────────────────────────
  miami: {
    title: "Miami Grand Finale",
    subtitle: "April 26, 2026 — The Moore Club",
    buyers: [
      { name: "Paige Genen", tickets: 1, amount: 450, date: "02/03", fee: 15.75 },
      { name: "Kelly Lehman", tickets: 8, amount: 4000, date: "10/03", fee: 140.00, vip: "VIP Table of 8" },
      { name: "Martha Duque", tickets: 1, amount: 450, date: "22/03", fee: 10.20 },
      { name: "David Wippich", tickets: 1, amount: 450, date: "26/03", fee: 15.75 },
      { name: "Daniel Beyda", tickets: 8, amount: 4000, date: "26/03", fee: 140.00, vip: "VIP Table of 8" },
      { name: "Karen Kennedy Page", tickets: 1, amount: 450, date: "26/03", fee: 10.20 },
      { name: "Sean Levine", tickets: 1, amount: 450, date: "31/03", fee: 15.75 },
      { name: "Carla Guilhem", tickets: 6, amount: 3000, date: "01/04", fee: 66.30, vip: "VIP Table of 6" },
      { name: "Barbara Lamar", tickets: 1, amount: 450, date: "03/04", fee: 15.75 },
      { name: "Barbara Lamar", tickets: 1, amount: 450, date: "03/04", fee: 15.75 },
      { name: "Jelena Khurana", tickets: 1, amount: 450, date: "08/04", fee: 10.20 },
      { name: "Linda Kochajewska", tickets: 1, amount: 450, date: "08/04", fee: 10.20 },
      { name: "Maciej Hanski", tickets: 2, amount: 900, date: "08/04", fee: 29.10 },
      { name: "Monique Kristine Pope", tickets: 1, amount: 450, date: "07/04", fee: 15.75 },
      { name: "Emma Vernetti", tickets: 1, amount: 450, date: "07/04", fee: 14.70 },
      { name: "Chaqroun Karim", tickets: 8, amount: 4000, date: "07/04", fee: 128.30, vip: "VIP Table of 8" },
      { name: "Monique Kristine Pope", tickets: 1, amount: 450, date: "06/04", fee: 10.20 },
      { name: "Tory Haskell", tickets: 1, amount: 450, date: "06/04", fee: 15.75 },
      { name: "Judy Schottenstein", tickets: 2, amount: 900, date: "09/04", fee: 31.50 },
      { name: "Mayi De La Vega", tickets: 2, amount: 900, date: "10/04", fee: 31.50 },
      { name: "Slanie de Choiseul", tickets: 8, amount: 4000, date: "13/04", fee: 88.30, vip: "VIP Table of 8" },
      { name: "Amit Jain", tickets: 1, amount: 450, date: "13/04", fee: 15.75 },
      { name: "James Bernstein", tickets: 3, amount: 1350, date: "13/04", fee: 47.25 },
      { name: "Hilda Kinross", tickets: 1, amount: 450, date: "15/04", fee: 14.75 },
      { name: "Aviva Sharp", tickets: 1, amount: 450, date: "16/04", fee: 10.20 },
      { name: "Stacey Cooper", tickets: 2, amount: 900, date: "17/04", fee: 31.50 },
      { name: "R Lee Krelstein Jr", tickets: 2, amount: 900, date: "19/04", fee: 20.10 },
      { name: "Nicole Thalacker", tickets: 2, amount: 900, date: "19/04", fee: 31.50 },
      { name: "Margarita Bravo", tickets: 2, amount: 900, date: "20/04", fee: 31.50 },
      { name: "Thomas F Shannon", tickets: 6, amount: 3000, date: "20/04", fee: 66.30, vip: "VIP Table of 6" },
    ],
  },

  // ── TRANSFERS TO C+R ────────────────────────────────────
  transfers: [
    { ref: "SUM001", amount: 5358.67, gbp: 4013.64, rate: 0.749, date: "19/03/26" },
    { ref: "SUM002", amount: 5182.22, gbp: 3910.99, rate: 0.75, date: "30/03/26" },
    { ref: "SUM003", amount: 12873.27, gbp: 9654.95, rate: 0.75, date: "09/04/26" },
    { ref: "SUM004", amount: 9097.31, gbp: 6732.01, rate: 0.74, date: "16/04/26" },
    { ref: "SUM005", amount: 7926.18, gbp: 5865.37, rate: 0.74, date: "20/04/26" },
  ],
};

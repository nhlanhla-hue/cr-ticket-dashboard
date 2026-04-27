import { useState, useEffect } from "react";
import { DATA } from "./data.js";

// ── HELPERS ─────────────────────────────────────────────
const fmt = (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fmtGBP = (n) => "£" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function computeStats(data) {
  const events = [data.palmBeach, data.charleston, data.miami];
  let totalTickets = 0, totalAmount = 0, totalFees = 0;
  events.forEach((ev) => {
    ev.buyers.forEach((b) => {
      totalTickets += b.tickets;
      totalAmount += b.amount;
      totalFees += b.fee;
    });
  });
  const totalTransferred = data.transfers.reduce((s, t) => s + t.amount, 0);
  const netReceived = totalAmount - totalFees;
  const held = netReceived - totalTransferred;
  return { totalTickets, totalAmount, totalFees, netReceived, totalTransferred, held };
}

function eventStats(ev) {
  let tickets = 0, amount = 0, fees = 0;
  ev.buyers.forEach((b) => { tickets += b.tickets; amount += b.amount; fees += b.fee; });
  return { tickets, amount, fees };
}

// ── COMPONENTS ──────────────────────────────────────────

function StatCard({ label, value, sub, accent }) {
  return (
    <div style={{
      background: "white", borderRadius: 12, padding: "20px 24px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)", border: "1px solid #e8ecf0",
      flex: 1, minWidth: 160,
    }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: "#8a919c", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 700, color: accent || "#1a2332", fontFamily: "'DM Sans', sans-serif" }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>{sub}</div>}
    </div>
  );
}

function TourCompleteBadge() {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      background: "rgba(45, 138, 78, 0.15)", border: "1px solid rgba(45, 138, 78, 0.3)",
      borderRadius: 20, padding: "5px 14px", marginTop: 8,
      animation: "fadeIn 1s ease-in-out",
    }}>
      <span style={{ fontSize: 12 }}>✓</span>
      <span style={{ fontSize: 11, fontWeight: 600, color: "#2d8a4e", letterSpacing: 0.5, textTransform: "uppercase" }}>Tour Complete</span>
    </div>
  );
}

function EventSection({ event, index, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const stats = eventStats(event);
  const colors = ["#2d8a4e", "#c4841d", "#b93535"];
  const bgs = ["#ecfdf3", "#fef9ec", "#fef2f2"];
  const icons = ["🌴", "🏛️", "🔥"];

  return (
    <div style={{ background: "white", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", border: "1px solid #e8ecf0", marginBottom: 16 }}>
      <div onClick={() => setOpen(!open)} style={{
        padding: "16px 20px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between",
        background: bgs[index], borderBottom: open ? "1px solid #e8ecf0" : "none",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 22 }}>{icons[index]}</span>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#1a2332", fontFamily: "'DM Sans', sans-serif" }}>{event.title}</span>
              <span style={{
                fontSize: 9, fontWeight: 700, color: "#2d8a4e",
                background: "rgba(45, 138, 78, 0.12)", padding: "2px 8px",
                borderRadius: 10, letterSpacing: 0.3, textTransform: "uppercase",
              }}>Complete</span>
            </div>
            <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>{event.subtitle}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: colors[index], fontFamily: "'DM Sans', sans-serif" }}>{fmt(stats.amount)}</div>
            <div style={{ fontSize: 11, color: "#6b7280" }}>{stats.tickets} tickets</div>
          </div>
          <span style={{ fontSize: 16, color: "#9ca3af", transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", display: "inline-block" }}>▼</span>
        </div>
      </div>
      {open && (
        <div style={{ padding: "0 20px 14px", overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #e8ecf0" }}>
                {["Buyer", "Tickets", "Amount", "Date"].map((h, i) => (
                  <th key={h} style={{ padding: "10px 6px", textAlign: i === 0 ? "left" : i === 1 ? "center" : "right", color: "#6b7280", fontWeight: 600, fontSize: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {event.buyers.map((b, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td style={{ padding: "9px 6px" }}>
                    <span style={{ fontWeight: 500, color: "#1a2332" }}>{b.name}</span>
                    {b.vip && <span style={{ marginLeft: 8, fontSize: 9, fontWeight: 700, background: colors[index] + "18", color: colors[index], padding: "2px 7px", borderRadius: 10 }}>{b.vip}</span>}
                  </td>
                  <td style={{ padding: "9px 6px", textAlign: "center", color: "#4b5563" }}>{b.tickets}</td>
                  <td style={{ padding: "9px 6px", textAlign: "right", fontWeight: 600, color: "#1a2332", fontFamily: "'DM Sans', sans-serif" }}>{fmt(b.amount)}</td>
                  <td style={{ padding: "9px 6px", textAlign: "right", color: "#9ca3af", fontSize: 12 }}>{b.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function TransfersSection({ transfers, held, rate }) {
  const [open, setOpen] = useState(false);
  const totalPaid = transfers.reduce((s, t) => s + t.amount, 0);

  return (
    <div style={{ background: "white", borderRadius: 12, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", border: "1px solid #e8ecf0" }}>
      <div onClick={() => setOpen(!open)} style={{
        padding: "16px 20px", background: "#f0f4ff", borderBottom: open ? "1px solid #e8ecf0" : "none",
        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 22 }}>💸</span>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#1a2332", fontFamily: "'DM Sans', sans-serif" }}>Transfers to Cash & Rocket</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#2d8a4e", fontFamily: "'DM Sans', sans-serif" }}>{fmt(totalPaid)}</div>
            <div style={{ fontSize: 11, color: "#6b7280" }}>{transfers.length} invoices</div>
          </div>
          <span style={{ fontSize: 16, color: "#9ca3af", transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", display: "inline-block" }}>▼</span>
        </div>
      </div>
      {open && (
        <div style={{ padding: "0 20px 14px", overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #e8ecf0" }}>
                {["Invoice", "USD", "GBP", "Date"].map((h, i) => (
                  <th key={h} style={{ padding: "10px 6px", textAlign: i === 0 ? "left" : "right", color: "#6b7280", fontWeight: 600, fontSize: 10, textTransform: "uppercase", letterSpacing: 0.5 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transfers.map((t, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td style={{ padding: "9px 6px", fontWeight: 600, color: "#1a2332" }}>{t.ref}</td>
                  <td style={{ padding: "9px 6px", textAlign: "right", fontWeight: 500, fontFamily: "'DM Sans', sans-serif" }}>{fmt(t.amount)}</td>
                  <td style={{ padding: "9px 6px", textAlign: "right", color: "#6b7280", fontFamily: "'DM Sans', sans-serif" }}>{fmtGBP(t.gbp)}</td>
                  <td style={{ padding: "9px 6px", textAlign: "right", color: "#9ca3af", fontSize: 12 }}>{t.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div style={{ padding: "0 20px 16px" }}>
        <div style={{ padding: "12px 14px", background: "#fef9ec", borderRadius: 8, border: "1px solid #fde68a", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontWeight: 600, color: "#92400e", fontSize: 13 }}>Amount Still Held</span>
          <div>
            <span style={{ fontWeight: 700, color: "#92400e", fontSize: 17, fontFamily: "'DM Sans', sans-serif" }}>{fmt(held)}</span>
            <span style={{ color: "#b45309", fontSize: 12, marginLeft: 8 }}>({fmtGBP(held * rate)})</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── MAIN APP ────────────────────────────────────────────
export default function App() {
  const data = DATA;
  const stats = computeStats(data);
  const events = [data.palmBeach, data.charleston, data.miami];

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", fontFamily: "'DM Sans', -apple-system, sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1a2332 0%, #2d3748 100%)", padding: "24px 0 20px", borderBottom: "3px solid #b93535" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#f87171", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 4 }}>Cash & Rocket</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "white", fontFamily: "'DM Sans', sans-serif" }}>USA Tour 2026 — Ticket Sales</div>
              <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 4 }}>Charleston → Palm Beach → Miami</div>
              <TourCompleteBadge />
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 10, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 0.5 }}>Last updated</div>
              <div style={{ fontSize: 13, color: "white", fontWeight: 500, marginTop: 2 }}>{data.lastUpdated}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ maxWidth: 900, margin: "-16px auto 20px", padding: "0 20px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <StatCard label="Total Tickets" value={stats.totalTickets} sub="across 3 events" accent="#1a2332" />
          <StatCard label="Gross Sales" value={fmt(stats.totalAmount)} sub={`Fees: ${fmt(stats.totalFees)}`} accent="#2563eb" />
          <StatCard label="Paid to C+R" value={fmt(stats.totalTransferred)} sub={`${data.transfers.length} invoices`} accent="#2d8a4e" />
          <StatCard label="Still Held" value={fmt(stats.held)} sub={`${fmtGBP(stats.held * data.exchangeRate)} @ $1:£${data.exchangeRate}`} accent="#c4841d" />
        </div>
      </div>

      {/* Events */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
        {events.map((ev, i) => (
          <EventSection key={i} event={ev} index={i} defaultOpen={i === 2} />
        ))}
      </div>

      {/* Transfers */}
      <div style={{ maxWidth: 900, margin: "20px auto", padding: "0 20px" }}>
        <TransfersSection transfers={data.transfers} held={stats.held} rate={data.exchangeRate} />
      </div>

      {/* Footer */}
      <div style={{ maxWidth: 900, margin: "20px auto 0", padding: "12px 20px 28px", textAlign: "center" }}>
        <div style={{ fontSize: 11, color: "#9ca3af" }}>
          Managed by Sumbandila Scholarship Trust • Stripe payments processed in USD
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";

const STATS = [
  { value: "6", label: "Platforms in the PRISM ecosystem" },
  { value: "1", label: "Nationwide FMCG sales network" },
  { value: "0→1", label: "Manual paper trail to mobile-first" },
  { value: "Live", label: "Real-time data visibility" },
];

export default function StatsStrip() {
  return (
    <section id="ecosystem" style={{ position: "relative", zIndex: 1, borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div
        className="container stats-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{
              padding: "34px 20px",
              borderLeft: i === 0 ? "none" : "1px solid var(--line)",
              textAlign: "center",
            }}
          >
            <div style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 700, color: "var(--cyan)" }}>
              {s.value}
            </div>
            <div className="mono" style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 8, lineHeight: 1.5 }}>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
      <style>{`
        @media (max-width: 700px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div:nth-child(3) { border-left: none !important; }
        }
      `}</style>
    </section>
  );
}

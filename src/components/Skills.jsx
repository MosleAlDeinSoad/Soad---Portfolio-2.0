import { motion } from "framer-motion";
import { skillGroups, certifications, research, education } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Stack readout</span>
          <h2 className="section-title">Tools I run on</h2>
          <p className="section-sub">The stack behind the delivery — from Agile process to the platforms and languages I work in daily.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "28px 32px", marginBottom: 64 }}>
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
            >
              <h3 className="mono" style={{ fontSize: 12, letterSpacing: "0.06em", color: "var(--text-faint)", textTransform: "uppercase", marginBottom: 12 }}>
                {group.label}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: 13,
                      padding: "6px 12px",
                      borderRadius: 6,
                      border: "1px solid var(--line-strong)",
                      color: "var(--text)",
                      background: "var(--panel)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 32 }} className="cert-grid">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            style={{ background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 12, padding: 26 }}
          >
            <span className="eyebrow" style={{ marginBottom: 10 }}>
              Research
            </span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, margin: "10px 0 6px", lineHeight: 1.4 }}>
              {research.title}
            </h3>
            <p className="mono" style={{ fontSize: 12, color: "var(--text-faint)", margin: "0 0 14px" }}>
              {research.org}
            </p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {research.points.map((pt) => (
                <li key={pt} style={{ fontSize: 14, color: "var(--text-dim)", lineHeight: 1.6, display: "flex", gap: 8 }}>
                  <span style={{ color: "var(--cyan)" }}>—</span>
                  {pt}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
              <span className="mono" style={{ fontSize: 11, color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Education
              </span>
              <p style={{ margin: "6px 0 0", fontSize: 14.5 }}>
                {education.degree} — <span style={{ color: "var(--text-dim)" }}>{education.school}</span>
              </p>
              <p className="mono" style={{ fontSize: 12, color: "var(--text-faint)", margin: "2px 0 0" }}>
                {education.start} – {education.end}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            style={{ background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 12, padding: 26 }}
          >
            <span className="eyebrow" style={{ marginBottom: 10 }}>
              Certifications
            </span>
            <ul style={{ margin: "14px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {certifications.map((c) => (
                <li key={c} style={{ fontSize: 13.5, color: "var(--text-dim)", lineHeight: 1.5, display: "flex", gap: 8 }}>
                  <span style={{ color: "var(--amber)", flexShrink: 0 }}>▸</span>
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

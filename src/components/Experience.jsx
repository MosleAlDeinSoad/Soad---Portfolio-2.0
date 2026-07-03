import { motion } from "framer-motion";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Deployment log</span>
          <h2 className="section-title">Where I've shipped</h2>
          <p className="section-sub">
            A running log of roles, structured the way I structure sprints — what changed, and why it mattered.
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: 7,
              top: 8,
              bottom: 8,
              width: 1,
              background: "var(--line-strong)",
            }}
          />
          {experience.map((job, i) => (
            <motion.div
              key={job.role + job.start}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              style={{ position: "relative", paddingLeft: 36, marginBottom: i === experience.length - 1 ? 0 : 52 }}
            >
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  left: 0,
                  top: 6,
                  width: 15,
                  height: 15,
                  borderRadius: "50%",
                  background: "var(--bg)",
                  border: `2px solid ${i === 0 ? "var(--cyan)" : "var(--line-strong)"}`,
                  boxShadow: i === 0 ? "0 0 10px 1px var(--cyan-dim)" : "none",
                }}
              />

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 14px" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 21, fontWeight: 600, margin: 0 }}>
                  {job.role}
                </h3>
                <span className="mono" style={{ fontSize: 12.5, color: i === 0 ? "var(--cyan)" : "var(--text-faint)" }}>
                  {job.start} — {job.end}
                </span>
              </div>
              <p style={{ margin: "4px 0 16px", color: "var(--text-dim)", fontSize: 14.5 }}>
                {job.org} · {job.place}
              </p>

              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {job.log.map((line, li) => (
                  <li key={li} style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.65, color: "var(--text)" }}>
                    <span className="mono" style={{ color: "var(--text-faint)", flexShrink: 0 }}>
                      {String(li + 1).padStart(2, "0")}
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

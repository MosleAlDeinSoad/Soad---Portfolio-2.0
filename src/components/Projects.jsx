import { motion } from "framer-motion";
import { projects } from "../data/content";

const tagColor = {
  PRODUCTION: "var(--cyan)",
  "IN BUILD": "var(--amber)",
  PERSONAL: "var(--text-dim)",
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Module registry</span>
          <h2 className="section-title">What's running in production</h2>
          <p className="section-sub">
            The platforms I've built and led delivery on — from nationwide enterprise systems to personal builds.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18,
          }}
        >
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4, borderColor: "var(--cyan)" }}
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line)",
                borderRadius: 12,
                padding: "22px 22px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                transition: "border-color 0.2s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span
                  className="mono"
                  style={{
                    fontSize: 10.5,
                    letterSpacing: "0.08em",
                    color: tagColor[p.tag] ?? "var(--text-dim)",
                    border: `1px solid ${tagColor[p.tag] ?? "var(--line-strong)"}`,
                    borderRadius: 4,
                    padding: "3px 7px",
                  }}
                >
                  {p.tag}
                </span>
                <span
                  aria-hidden
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: p.tag === "IN BUILD" ? "var(--amber)" : "var(--cyan)",
                    boxShadow: `0 0 6px 1px ${p.tag === "IN BUILD" ? "var(--amber-dim)" : "var(--cyan-dim)"}`,
                  }}
                />
              </div>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 600, margin: 0 }}>
                {p.name}
              </h3>
              <p className="mono" style={{ fontSize: 12, color: "var(--text-faint)", margin: 0 }}>
                {p.stack}
              </p>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "var(--text-dim)", margin: 0 }}>{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import EcosystemMap from "./EcosystemMap";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" style={{ position: "relative", zIndex: 1, paddingTop: 150, paddingBottom: 80 }}>
      <div className="container hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 560px", gap: 40, alignItems: "center" }}>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            System status: shipping
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5.4vw, 60px)",
              lineHeight: 1.06,
              fontWeight: 700,
              margin: "18px 0 0",
              letterSpacing: "-0.02em",
            }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--cyan)",
              fontSize: 15,
              marginTop: 14,
              letterSpacing: "0.01em",
            }}
          >
            {profile.role} — {profile.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            style={{ color: "var(--text-dim)", fontSize: 16.5, lineHeight: 1.7, marginTop: 22, maxWidth: 520 }}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}
          >
            <a
              href="#projects"
              className="focus-ring"
              style={{
                background: "var(--cyan)",
                color: "#06110f",
                fontFamily: "var(--font-mono)",
                fontSize: 13.5,
                fontWeight: 500,
                padding: "13px 22px",
                borderRadius: 7,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              View the modules ↓
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring"
              style={{
                border: "1px solid var(--line-strong)",
                color: "var(--text)",
                fontFamily: "var(--font-mono)",
                fontSize: 13.5,
                padding: "13px 22px",
                borderRadius: 7,
              }}
            >
              {profile.email}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <EcosystemMap />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

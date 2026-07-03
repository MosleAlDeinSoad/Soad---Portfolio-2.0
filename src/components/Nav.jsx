import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#experience", label: "Log" },
  { href: "#projects", label: "Modules" },
  { href: "#skills", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
        background: scrolled ? "rgba(10, 15, 28, 0.82)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      <nav
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        <a href="#top" className="focus-ring" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            aria-hidden
            style={{
              width: 10,
              height: 10,
              borderRadius: 3,
              background: "var(--cyan)",
              boxShadow: "0 0 10px 1px var(--cyan-dim)",
            }}
          />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, letterSpacing: "0.06em", color: "var(--text)" }}>
            SOAD<span style={{ color: "var(--text-faint)" }}>.SYS</span>
          </span>
        </a>

        <div className="nav-links" style={{ display: "flex", gap: 28 }}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12.5,
                letterSpacing: "0.04em",
                color: "var(--text-dim)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="nav-cta focus-ring"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12.5,
            padding: "8px 16px",
            border: "1px solid var(--line-strong)",
            borderRadius: 6,
            color: "var(--text)",
            transition: "border-color 0.2s ease, color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--cyan)";
            e.currentTarget.style.color = "var(--cyan)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--line-strong)";
            e.currentTarget.style.color = "var(--text)";
          }}
        >
          Let's talk →
        </a>

        <button
          className="nav-burger focus-ring"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          style={{
            display: "none",
            background: "none",
            border: "1px solid var(--line-strong)",
            borderRadius: 6,
            width: 38,
            height: 38,
            color: "var(--text)",
            fontFamily: "var(--font-mono)",
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden", borderTop: "1px solid var(--line)", background: "var(--bg)" }}
          >
            <div className="container" style={{ display: "flex", flexDirection: "column", padding: "16px 28px 24px", gap: 16 }}>
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--text-dim)" }}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--cyan)" }}>
                Let's talk →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 820px) {
          .nav-links, .nav-cta { display: none !important; }
          .nav-burger { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  );
}

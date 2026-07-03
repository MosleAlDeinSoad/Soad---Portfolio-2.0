import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer style={{ position: "relative", zIndex: 1, padding: "36px 0" }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="mono" style={{ fontSize: 12, color: "var(--text-faint)" }}>
          © {new Date().getFullYear()} {profile.name} — built with React &amp; shipped from Dhaka.
        </span>
        <span className="mono" style={{ fontSize: 12, color: "var(--text-faint)" }}>
          status: <span style={{ color: "var(--cyan)" }}>online</span>
        </span>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/content";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section" style={{ borderBottom: "none" }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Open channel</span>
          <h2 className="section-title">Let's build something</h2>
          <p className="section-sub">
            Have a platform to deliver, a team that needs structure, or a project that needs a technical PM? Send a message.
          </p>
        </div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <input type="hidden" name="form-name" value="contact" />

            <Field label="Name">
              <input required name="name" value={form.name} onChange={onChange} placeholder="Your name" style={inputStyle} />
            </Field>
            <Field label="Email">
              <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="you@company.com" style={inputStyle} />
            </Field>
            <Field label="Message">
              <textarea
                required
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="What are you building?"
                rows={5}
                style={{ ...inputStyle, resize: "vertical", fontFamily: "var(--font-body)" }}
              />
            </Field>

            <button
              type="submit"
              disabled={status === "sending"}
              className="focus-ring"
              style={{
                marginTop: 6,
                background: "var(--cyan)",
                color: "#06110f",
                fontFamily: "var(--font-mono)",
                fontSize: 13.5,
                fontWeight: 500,
                padding: "13px 22px",
                borderRadius: 7,
                border: "none",
                cursor: status === "sending" ? "wait" : "pointer",
                opacity: status === "sending" ? 0.7 : 1,
                width: "fit-content",
              }}
            >
              {status === "sending" ? "Sending…" : status === "sent" ? "Sent ✓" : "Send message →"}
            </button>
            {status === "sent" && (
              <p className="mono" style={{ fontSize: 12.5, color: "var(--cyan)" }}>
                Message received — I'll reply by email shortly.
              </p>
            )}
            {status === "error" && (
              <p className="mono" style={{ fontSize: 12.5, color: "var(--amber)" }}>
                Something went wrong — email me directly instead at {profile.email}.
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 12, padding: 26, height: "fit-content" }}
          >
            <span className="eyebrow" style={{ marginBottom: 16 }}>
              Direct lines
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 16 }}>
              <ContactLine label="Email" value={profile.email} href={`mailto:${profile.email}`} />
              <ContactLine label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
              <ContactLine label="LinkedIn" value="mosle-al-dein-soad" href={profile.linkedin} />
              <ContactLine label="GitHub" value="moslealdeinsoad" href={profile.github} />
              <ContactLine label="Location" value={profile.location} />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  background: "var(--panel)",
  border: "1px solid var(--line-strong)",
  borderRadius: 7,
  padding: "12px 14px",
  color: "var(--text)",
  fontSize: 14.5,
  outline: "none",
};

function Field({ label, children }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span className="mono" style={{ fontSize: 11.5, color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactLine({ label, value, href }) {
  const content = (
    <>
      <span className="mono" style={{ fontSize: 11, color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block" }}>
        {label}
      </span>
      <span style={{ fontSize: 14.5, color: "var(--text)" }}>{value}</span>
    </>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="focus-ring" style={{ display: "block" }}>
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

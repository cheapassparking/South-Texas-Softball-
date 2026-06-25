"use client";

import type { Metadata } from "next";
import { useState } from "react";

const contactMethods = [
  {
    icon: "✉️",
    title: "General Inquiries",
    description: "Questions, fan mail, or anything else — we'd love to hear from you.",
    value: "contact@southtexassoftball.com",
    href: "mailto:contact@southtexassoftball.com",
    label: "Send an Email",
  },
  {
    icon: "🏆",
    title: "Recruiting & Coaches",
    description: "College coaches and recruiters — reach out to connect with Emerson directly.",
    value: "contact@southtexassoftball.com",
    href: "mailto:contact@southtexassoftball.com?subject=Recruiting Inquiry — Emerson",
    label: "Contact for Recruiting",
  },
  {
    icon: "📸",
    title: "Media & Press",
    description: "Interviews, features, photography requests, or coverage opportunities.",
    value: "contact@southtexassoftball.com",
    href: "mailto:contact@southtexassoftball.com?subject=Media Inquiry",
    label: "Media Contact",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  }

  return (
    <>
      {/* ── PAGE HERO ── */}
      <div style={{ background: "var(--tx-blue)", padding: "3rem 1.5rem 2.5rem" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p className="section-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>
            📬 Get In Touch
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "0.03em",
              lineHeight: 1.1,
            }}
          >
            Contact <span style={{ color: "var(--gold-lt)" }}>Us</span>
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              marginTop: "0.75rem",
              maxWidth: "520px",
              lineHeight: 1.6,
              fontSize: "0.95rem",
            }}
          >
            Whether you&apos;re a coach, a fan, or media — we&apos;re happy to connect.
            Reach out and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </div>

      <div className="section-flag-stripe" />

      {/* ── CONTACT CARDS ── */}
      <section className="section section-white">
        <div className="section-inner">
          <p className="section-eyebrow">📋 How To Reach Us</p>
          <h2 className="section-title">Contact Options</h2>
          <div className="section-rule" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            {contactMethods.map((method) => (
              <div
                key={method.title}
                style={{
                  background: "#fff",
                  border: "2px solid var(--border)",
                  borderRadius: "var(--r-lg)",
                  padding: "1.75rem",
                  boxShadow: "var(--shadow)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  transition: "all .22s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--tx-red)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-lg)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow)";
                }}
              >
                <div style={{ fontSize: "2rem" }}>{method.icon}</div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "var(--navy-text)",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {method.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--gray)", lineHeight: 1.6 }}>
                    {method.description}
                  </p>
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "var(--tx-blue)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {method.value}
                </div>
                <a href={method.href} className="btn btn-red" style={{ marginTop: "auto", textAlign: "center", justifyContent: "center" }}>
                  {method.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── CONTACT FORM ── */}
      <section className="section section-off">
        <div className="section-inner">
          <p className="section-eyebrow">💬 Send a Message</p>
          <h2 className="section-title">Drop Us a Line</h2>
          <div className="section-rule" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Left — info panel */}
            <div>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--gray)", marginBottom: "1.5rem" }}>
                Fill out the form and we&apos;ll get back to you within 24–48 hours.
                For urgent recruiting inquiries, emailing directly is the fastest way to connect.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { icon: "⚾", title: "Recruiting", text: "We welcome outreach from college programs at all levels." },
                  { icon: "📷", title: "Media", text: "Feature stories, interviews, and photography requests welcome." },
                  { icon: "🙏", title: "Community", text: "Faith, family, and community are at the heart of this journey." },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      background: "#fff",
                      borderRadius: "var(--r)",
                      padding: "1rem 1.2rem",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: "0.88rem", color: "var(--navy-text)", marginBottom: "0.2rem" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: "0.82rem", color: "var(--gray)", lineHeight: 1.5 }}>
                        {item.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div
              style={{
                background: "#fff",
                borderRadius: "var(--r-lg)",
                padding: "2rem",
                boxShadow: "var(--shadow-lg)",
                border: "2px solid var(--border)",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎉</div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--navy-text)", marginBottom: "0.5rem" }}>
                    Message Received!
                  </h3>
                  <p style={{ color: "var(--gray)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    Thanks for reaching out. We&apos;ll get back to you at <strong>{formState.email}</strong> within 24–48 hours.
                  </p>
                  <button
                    className="btn btn-blue"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", reason: "", message: "" });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--navy-text)", marginBottom: "0.25rem" }}>
                    Send Us a Message
                  </h3>

                  {/* Name */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--navy-text)" }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="First and last name"
                      style={{
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--r)",
                        border: "2px solid var(--border)",
                        fontSize: "0.9rem",
                        fontFamily: "inherit",
                        color: "var(--navy-text)",
                        outline: "none",
                        transition: "border-color .2s",
                        width: "100%",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--tx-blue)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>

                  {/* Email */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--navy-text)" }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={{
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--r)",
                        border: "2px solid var(--border)",
                        fontSize: "0.9rem",
                        fontFamily: "inherit",
                        color: "var(--navy-text)",
                        outline: "none",
                        transition: "border-color .2s",
                        width: "100%",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--tx-blue)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>

                  {/* Reason */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--navy-text)" }}>
                      Reason for Contact
                    </label>
                    <select
                      name="reason"
                      value={formState.reason}
                      onChange={handleChange}
                      style={{
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--r)",
                        border: "2px solid var(--border)",
                        fontSize: "0.9rem",
                        fontFamily: "inherit",
                        color: formState.reason ? "var(--navy-text)" : "var(--gray)",
                        outline: "none",
                        background: "#fff",
                        transition: "border-color .2s",
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--tx-blue)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    >
                      <option value="">Select a reason...</option>
                      <option value="recruiting">🏆 Recruiting Inquiry</option>
                      <option value="media">📸 Media / Press</option>
                      <option value="general">💬 General Question</option>
                      <option value="fan">⭐ Fan Message</option>
                      <option value="other">📋 Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <label style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--navy-text)" }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us what's on your mind..."
                      rows={5}
                      style={{
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--r)",
                        border: "2px solid var(--border)",
                        fontSize: "0.9rem",
                        fontFamily: "inherit",
                        color: "var(--navy-text)",
                        outline: "none",
                        transition: "border-color .2s",
                        width: "100%",
                        resize: "vertical",
                        lineHeight: 1.6,
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--tx-blue)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>

                  <button
                    className="btn btn-red"
                    onClick={handleSubmit}
                    style={{
                      justifyContent: "center",
                      opacity: !formState.name || !formState.email || !formState.message ? 0.5 : 1,
                      cursor: !formState.name || !formState.email || !formState.message ? "not-allowed" : "pointer",
                    }}
                  >
                    Send Message
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                    </svg>
                  </button>

                  <p style={{ fontSize: "0.72rem", color: "var(--gray)", textAlign: "center", marginTop: "-0.5rem" }}>
                    * Required fields. We typically respond within 24–48 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── FAITH FOOTER BAND ── */}
      <section className="section section-blue">
        <div className="section-inner" style={{ textAlign: "center" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🙏</div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#fff", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
            Faith · Hustle · Heart · Family
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7, fontSize: "0.95rem" }}>
            Thank you for being part of Emerson&apos;s journey. Every message, every word of encouragement means the world to this team.
          </p>
        </div>
      </section>
    </>
  );
}

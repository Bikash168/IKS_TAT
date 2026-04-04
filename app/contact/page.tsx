"use client";

import { useState } from "react";
import Footer from "../components/Footer";

const teamMembers = [
  {
    role: "Principal Investigator",
    roleShort: "PI",
    name: "Dr. Munmun Mohanty",
    phone: "+91 87630 01410",
    email: "munmun.mohanty@tat.ac.in",
    icon: "👩‍🏫",
    color: "var(--saffron)",
  },
  {
    role: "Co-Principal Investigator",
    roleShort: "Co-PI",
    name: "Mr. Tushar Ranjan Panda",
    phone: "+91 94376 03536",
    email: "tushar.panda@tat.ac.in",
    icon: "👨‍🔬",
    color: "#b45309",
  },
  {
    role: "Co-Principal Investigator",
    roleShort: "Co-PI",
    name: "Dr. Sonam Priyadarshini",
    phone: "+91 94378 74351",
    email: "sonam.priyadarshini@tat.ac.in",
    icon: "👩‍🔬",
    color: "#92400e",
  },
];

const contactDetails = [
  { icon: "🏛️", label: "Institution",    value: "Trident Academy of Technology" },
  { icon: "📍", label: "Address",        value: "F2/A, Chandaka Industrial Estate, Bhubaneswar, Odisha – 751024" },
  { icon: "📞", label: "College Landline", value: "+91 674 274 0204" },
  { icon: "📠", label: "Fax",            value: "+91 674 274 0205" },
  { icon: "🌐", label: "Website",        value: "www.tat.ac.in" },
  { icon: "📧", label: "General Email",  value: "info@tat.ac.in" },
  { icon: "🔬", label: "Project",        value: "IKS-Sanctioned Research on Bhagabata Tungi & Social Harmony in Odisha" },
  { icon: "🏅", label: "Funded By",      value: "Indian Knowledge Systems (IKS) Mission, Ministry of Education, Govt. of India" },
];

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.78rem",
  fontWeight: 700,
  color: "var(--earth)",
  marginBottom: "0.4rem",
  letterSpacing: "0.04em",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.65rem 0.875rem",
  border: "1px solid rgba(92,45,0,0.15)",
  borderRadius: 8,
  fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
  color: "#3b1a00",
  background: "#faf8f4",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

/* ── Extracted hover handlers to avoid JSX parser confusion ── */
function onLinkEnter(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.background = "rgba(232,100,12,0.1)";
  e.currentTarget.style.color = "var(--earth)";
}
function onLinkLeave(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.background = "rgba(232,100,12,0.05)";
  e.currentTarget.style.color = "var(--muted)";
}
function onCardEnter(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = "translateY(-4px)";
  e.currentTarget.style.boxShadow = "0 12px 36px rgba(92,45,0,0.12)";
}
function onCardLeave(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = "";
  e.currentTarget.style.boxShadow = "0 4px 20px rgba(92,45,0,0.06)";
}
function onBtnEnter(e: React.MouseEvent<HTMLButtonElement>) {
  e.currentTarget.style.opacity = "0.9";
  e.currentTarget.style.transform = "translateY(-1px)";
}
function onBtnLeave(e: React.MouseEvent<HTMLButtonElement>) {
  e.currentTarget.style.opacity = "1";
  e.currentTarget.style.transform = "";
}
function onInputFocus(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = "var(--saffron)";
  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(232,100,12,0.08)";
}
function onInputBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = "rgba(92,45,0,0.15)";
  e.currentTarget.style.boxShadow = "none";
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  }

  return (
    <>
      {/* ── HERO ── */}
      <div style={{
        background: "linear-gradient(160deg, #1A0800 0%, #2D1200 50%, #1A0800 100%)",
        padding: "clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem) clamp(2.5rem, 6vw, 3.75rem)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(500px, 80vw)", height: "min(500px, 80vw)",
          border: "1px solid rgba(232,100,12,0.08)",
          borderRadius: "50%", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(300px, 50vw)", height: "min(300px, 50vw)",
          border: "1px solid rgba(232,100,12,0.13)",
          borderRadius: "50%", pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="section-tag" style={{ justifyContent: "center", animation: "fadeUp 0.6s ease both" }}>
            Get in Touch
          </div>
          <h1 className="section-title-lg" style={{ animation: "fadeUp 0.7s ease 0.15s both" }}>
            Contact Us
          </h1>
          <p className="section-body" style={{
            margin: "0 auto", textAlign: "center",
            maxWidth: "min(100%, 580px)",
            animation: "fadeUp 0.7s ease 0.3s both",
          }}>
            Reach out to the research team for queries, collaborations, or media inquiries related to the IKS project.
          </p>
        </div>
      </div>

      {/* ── TEAM CARDS ── */}
      <div style={{ background: "var(--cream)" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          padding: "clamp(2.5rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem) clamp(1rem, 3vw, 2rem)",
        }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>Research Team</div>
            <h2 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.4rem, 4vw, 2rem)",
              color: "var(--earth)", wordBreak: "break-word",
            }}>
              Meet the Investigators
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(1rem, 3vw, 1.5rem)",
          }}>
            {teamMembers.map((member, i) => (
              <div
                key={i}
                onMouseEnter={onCardEnter}
                onMouseLeave={onCardLeave}
                style={{
                  background: "#fff", borderRadius: 16, overflow: "hidden",
                  border: "1px solid rgba(232,100,12,0.1)",
                  boxShadow: "0 4px 20px rgba(92,45,0,0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                {/* Accent bar */}
                <div style={{
                  height: 6,
                  background: `linear-gradient(90deg, ${member.color}, transparent)`,
                }} />

                <div style={{ padding: "clamp(1.25rem, 3vw, 1.75rem)" }}>
                  {/* Avatar + badge */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                    <div style={{
                      width: "clamp(52px, 10vw, 64px)", height: "clamp(52px, 10vw, 64px)",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${member.color}22, ${member.color}44)`,
                      border: `2px solid ${member.color}55`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "clamp(1.4rem, 4vw, 1.75rem)", flexShrink: 0,
                    }}>
                      {member.icon}
                    </div>
                    <div>
                      <span style={{
                        display: "inline-block", fontSize: "0.65rem", fontWeight: 700,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        color: "#fff", background: member.color,
                        padding: "3px 10px", borderRadius: 20, marginBottom: 6,
                      }}>
                        {member.roleShort}
                      </span>
                      <div style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "clamp(0.72rem, 1.8vw, 0.8rem)",
                        color: "var(--muted)",
                      }}>
                        {member.role}
                      </div>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                    fontWeight: 700, color: "var(--earth)",
                    marginBottom: "1.25rem", lineHeight: 1.3,
                  }}>
                    {member.name}
                  </h3>

                  {/* Contact links */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    <a
                      href={"tel:" + member.phone.replace(/\s/g, "")}
                      onMouseEnter={onLinkEnter}
                      onMouseLeave={onLinkLeave}
                      style={{
                        display: "flex", alignItems: "center", gap: "0.6rem",
                        fontSize: "clamp(0.8rem, 2vw, 0.875rem)",
                        color: "var(--muted)", textDecoration: "none",
                        padding: "0.5rem 0.75rem", borderRadius: 8,
                        background: "rgba(232,100,12,0.05)",
                        border: "1px solid rgba(232,100,12,0.1)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <span>📞</span>
                      <span style={{ wordBreak: "break-all" }}>{member.phone}</span>
                    </a>

                    <a
                      href={"mailto:" + member.email}
                      onMouseEnter={onLinkEnter}
                      onMouseLeave={onLinkLeave}
                      style={{
                        display: "flex", alignItems: "center", gap: "0.6rem",
                        fontSize: "clamp(0.78rem, 2vw, 0.85rem)",
                        color: "var(--muted)", textDecoration: "none",
                        padding: "0.5rem 0.75rem", borderRadius: 8,
                        background: "rgba(232,100,12,0.05)",
                        border: "1px solid rgba(232,100,12,0.1)",
                        transition: "all 0.2s ease",
                        wordBreak: "break-all",
                      }}
                    >
                      <span>✉️</span>
                      <span>{member.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INSTITUTION + FORM ── */}
      <div style={{ background: "var(--cream)" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 4vw, 2rem) clamp(3rem, 6vw, 5rem)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(1.5rem, 4vw, 2.5rem)",
          alignItems: "start",
        }}>

          {/* Institution Details */}
          <div>
            <div style={{
              background: "var(--deep)", borderRadius: 16,
              padding: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1.25rem",
            }}>
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                color: "var(--gold-light)", marginBottom: "1.5rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid rgba(232,100,12,0.25)",
              }}>
                📚 Institution &amp; Project Details
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {contactDetails.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                    <div>
                      <div style={{
                        fontSize: "0.68rem", fontWeight: 700,
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        color: "var(--saffron)", marginBottom: 2,
                      }}>
                        {item.label}
                      </div>
                      <div style={{
                        fontSize: "clamp(0.78rem, 2vw, 0.85rem)",
                        color: "rgba(255,255,255,0.7)",
                        lineHeight: 1.55, wordBreak: "break-word",
                      }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div style={{
              borderRadius: 12, overflow: "hidden",
              border: "1px solid rgba(232,100,12,0.15)",
              height: "clamp(180px, 30vw, 220px)",
              background: "linear-gradient(135deg, #1A0800, #2D1200)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column", gap: "0.5rem",
            }}>
              <span style={{ fontSize: "2.5rem" }}>🗺️</span>
              <p style={{
                color: "rgba(255,255,255,0.4)", fontSize: "0.8rem",
                textAlign: "center", padding: "0 1rem",
              }}>
                Trident Academy of Technology<br />
                Chandaka, Bhubaneswar, Odisha
              </p>
              
              <a
                href="https://maps.google.com/?q=Trident+Academy+of+Technology+Bhubaneswar"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.72rem", color: "var(--saffron)",
                  textDecoration: "none", fontWeight: 600,
                  letterSpacing: "0.08em",
                  padding: "0.35rem 0.875rem",
                  border: "1px solid rgba(232,100,12,0.4)",
                  borderRadius: 20, marginTop: 4,
                }}
              >
                View on Google Maps ↗
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: "#fff", borderRadius: 16,
            padding: "clamp(1.5rem, 3vw, 2rem)",
            border: "1px solid rgba(232,100,12,0.1)",
            boxShadow: "0 4px 24px rgba(92,45,0,0.06)",
          }}>
            <h3 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
              color: "var(--earth)", marginBottom: "0.4rem",
            }}>
              Send a Message
            </h3>
            <p style={{
              fontSize: "clamp(0.8rem, 2vw, 0.85rem)",
              color: "var(--muted)", marginBottom: "1.5rem", lineHeight: 1.5,
            }}>
              For research inquiries, academic collaborations, or media queries.
            </p>

            {submitted && (
              <div style={{
                background: "#dcfce7", border: "1px solid #86efac",
                borderRadius: 8, padding: "0.75rem 1rem",
                marginBottom: "1.25rem",
                fontSize: "0.85rem", color: "#166534",
                display: "flex", alignItems: "center", gap: "0.5rem",
              }}>
                ✅ Message sent! We will get back to you shortly.
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={labelStyle}>Your Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Email Address *</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Subject</label>
                <input
                  type="text"
                  placeholder="e.g. Research Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Message *</label>
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
                  style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                />
              </div>

              <button
                onClick={handleSubmit}
                onMouseEnter={onBtnEnter}
                onMouseLeave={onBtnLeave}
                style={{
                  background: "linear-gradient(135deg, var(--earth), var(--saffron))",
                  color: "#fff", border: "none", borderRadius: 8,
                  padding: "clamp(0.7rem, 2vw, 0.875rem) 1.5rem",
                  fontSize: "clamp(0.85rem, 2vw, 0.9rem)",
                  fontWeight: 700, letterSpacing: "0.05em",
                  cursor: "pointer",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                  width: "100%",
                }}
              >
                Send Message ✉️
              </button>

              <p style={{
                fontSize: "0.72rem", color: "var(--muted)",
                textAlign: "center", lineHeight: 1.5,
              }}>
                * Required fields. We typically respond within 2–3 working days.
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        body { overflow-x: hidden; max-width: 100vw; }
        .section-title-lg {
          font-size: clamp(2rem, 6vw, 3.5rem) !important;
          word-break: break-word;
          color: #fff;
        }
        .section-body {
          font-size: clamp(0.95rem, 2.5vw, 1.15rem) !important;
          color: rgba(255,255,255,0.6);
        }
        input, textarea { font-family: inherit; }
      `}</style>
    </>
  );
}
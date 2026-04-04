"use client";

import Footer from "../components/Footer";

const sidebarFacts = [
  { icon: "🏛️", label: "Funding Body",            val: "Indian Knowledge Systems (IKS) Mission" },
  { icon: "👩‍🔬", label: "Principal Investigator", val: "Dr. Munmun Mohanty" },
  { icon: "🏫", label: "Institution",              val: "Trident Academy of Technology, Bhubaneswar" },
  { icon: "📍", label: "Study Area",               val: "Multiple districts of Odisha" },
  { icon: "🔬", label: "Methodology",              val: "Mixed methods: surveys, interviews, ethnographic observation" },
  { icon: "🎯", label: "Focus",                    val: "Socio-cultural impact on social harmony" },
];

const researchQuestions = [
  "How do Bhagabata Tungis promote social harmony across diverse communities?",
  "What role do they play in conflict resolution and community dialogue?",
  "How has their influence evolved in the context of modernization?",
  "What mechanisms ensure inclusive participation across caste and gender?",
];

const sections = [
  {
    heading: "Historical & Cultural Context",
    paras: [
      "Bhagabata Tungis have long been an important part of the socio-cultural life of Odisha. For centuries, these traditional community spaces have functioned as informal centers of religious learning, cultural interaction, and social bonding.",
      "In villages across the region, people gather in these spaces to listen to recitations and discussions of the Bhagabata, which strengthens moral values, encourages collective participation, and nurtures a shared cultural identity.",
      "In the contemporary era, rapid globalization and modernization have led to the gradual decline of many local traditions and indigenous practices. The study and revival of Bhagabata Tungis has therefore become increasingly important.",
    ],
  },
  {
    heading: "The Odia Bhagabata Tradition",
    paras: [
      "The tradition of Bhagabata Tungis is closely connected with the Odia Bhagabata, composed in the 15th century by the eminent poet Jagannath Dasa. This devotional text presents the Srimad Bhagavat Mahapurana in simple and poetic Odia language, making complex spiritual ideas accessible to common people.",
      `Jagannath Dasa was one of the celebrated Panchasakha—the five great Odia Bhakti poets—and earned the title "Atibadi" (the greatest) from Chaitanya Mahaprabhu. His work played a crucial role in shaping and standardizing the Odia language.`,
    ],
  },
  {
    heading: "Research Rationale",
    paras: [
      "Bhagabata Tungis represent a unique example of indigenous community-based learning systems. These spaces serve as gathering points where villagers assemble—often during the evening—to listen to readings and interpretations of the Bhagabata.",
      "The gatherings are inclusive, bringing together individuals from different castes, age groups, and social backgrounds. They foster social harmony, mutual respect, and community solidarity beyond their spiritual function.",
      "In addition to regular readings, they serve as venues for religious and cultural celebrations such as Krishna Janmashtami and Indu Purnima, strengthening their role in the cultural life of the village.",
      "The research contributes to the broader IKS Mission by highlighting a living example of how traditional knowledge can integrate education, spirituality, and social harmony in contemporary community life.",
    ],
  },
];

export default function ProjectPage() {
  return (
    <>
      {/* ── BANNER ── */}
      <div style={{
        background: "linear-gradient(135deg, var(--earth) 0%, var(--saffron) 100%)",
        padding: "clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Wave bottom edge */}
        <div style={{
          position: "absolute", bottom: -1, left: 0, right: 0, height: 60,
          background: "var(--cream)",
          clipPath: "ellipse(55% 60px at 50% 60px)",
        }} />

        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div
            className="section-tag"
            style={{
              justifyContent: "center",
              color: "rgba(255,255,255,0.7)",
              animation: "fadeUp 0.6s ease both",
            }}
          >
            IKS Research Project
          </div>
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1.6rem, 4vw, 3rem)",
            color: "#fff",
            fontWeight: 800,
            textShadow: "0 2px 20px rgba(0,0,0,0.2)",
            marginBottom: "1rem",
            animation: "fadeUp 0.7s ease 0.15s both",
            wordBreak: "break-word",
          }}>
            Bhagabata Tungi<br />Project Overview
          </h1>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.7,
            animation: "fadeUp 0.7s ease 0.3s both",
            padding: "0 clamp(0rem, 2vw, 2rem)",
          }}>
            &ldquo;The Impact of Bhagabata Tungi on Social Harmony in Odisha: A Socio-Cultural Analysis&rdquo;
          </p>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{ background: "var(--cream)", minHeight: "60vh" }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem) clamp(3rem, 6vw, 5rem)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(1.5rem, 4vw, 3rem)",
          alignItems: "start",
        }}>

          {/* ── Main text ── */}
          <div style={{ animation: "slideRight 0.8s ease 0.1s both" }}>
            {sections.map((section) => (
              <div key={section.heading} style={{ marginBottom: "2.5rem" }}>
                <h2 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(1.3rem, 3.5vw, 1.8rem)",
                  color: "var(--earth)",
                  marginBottom: "1.25rem",
                  wordBreak: "break-word",
                }}>
                  {section.heading}
                </h2>
                {section.paras.map((p, i) => (
                  <p key={i} style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                    lineHeight: 1.85,
                    color: "#4A2800",
                    marginBottom: "1.2rem",
                    textAlign: "justify",
                  }}>{p}</p>
                ))}
              </div>
            ))}
          </div>

          {/* ── Sidebar ── */}
          <div style={{ animation: "slideLeft 0.8s ease 0.2s both" }}>

            {/* Project Details card — sticky on desktop */}
            <div style={{
              background: "var(--deep)",
              borderRadius: 12,
              padding: "clamp(1.25rem, 3vw, 1.75rem)",
              position: "sticky",
              top: 80,
            }}>
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(0.85rem, 2vw, 1rem)",
                color: "var(--gold-light)",
                marginBottom: "1.25rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid rgba(232,100,12,0.3)",
              }}>
                Project Details
              </h3>
              {sidebarFacts.map((f, i) => (
                <div key={i} style={{
                  display: "flex",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                  alignItems: "flex-start",
                }}>
                  <span style={{ fontSize: "1.1rem", flexShrink: 0, marginTop: 2 }}>{f.icon}</span>
                  <div style={{
                    fontSize: "clamp(0.78rem, 2vw, 0.85rem)",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.55,
                  }}>
                    <strong style={{ color: "var(--saffron-light)", display: "block", marginBottom: 2 }}>
                      {f.label}
                    </strong>
                    {f.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Research Questions card — no sticky, flows naturally */}
            <div style={{
              background: "#fff",
              borderRadius: 12,
              padding: "clamp(1.25rem, 3vw, 1.75rem)",
              marginTop: "1.5rem",
              border: "1px solid rgba(232,100,12,0.12)",
            }}>
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                color: "var(--earth)",
                marginBottom: "1rem",
              }}>
                Key Research Questions
              </h3>
              {researchQuestions.map((q, i) => (
                <div key={i} style={{
                  display: "flex",
                  gap: "0.75rem",
                  marginBottom: "0.875rem",
                  alignItems: "flex-start",
                }}>
                  <span style={{ color: "var(--saffron)", fontWeight: 800, flexShrink: 0 }}>
                    0{i + 1}
                  </span>
                  <span style={{
                    fontSize: "clamp(0.78rem, 2vw, 0.85rem)",
                    color: "var(--muted)",
                    lineHeight: 1.55,
                  }}>{q}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <Footer />

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        body { overflow-x: hidden; max-width: 100vw; }

        /* Disable sticky sidebar on mobile/tablet so it flows normally */
        @media (max-width: 768px) {
          .project-sticky { position: static !important; }
        }
      `}</style>
    </>
  );
}
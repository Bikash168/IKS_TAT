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
        padding: "clamp(3rem, 8vw, 5rem) clamp(1.25rem, 5vw, 3rem)",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        boxSizing: "border-box",
      }}>
        {/* Wave bottom edge */}
        <div style={{
          position: "absolute", bottom: -1, left: 0, right: 0, height: 60,
          background: "var(--cream)",
          clipPath: "ellipse(55% 60px at 50% 60px)",
        }} />

        <div style={{
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          width: "100%",
          boxSizing: "border-box",
        }}>
          <div
            className="section-tag proj-tag"
            style={{ animation: "fadeUp 0.6s ease both" }}
          >
            IKS Research Project
          </div>
          <h1 className="proj-title" style={{ animation: "fadeUp 0.7s ease 0.15s both" }}>
            Bhagabata Tungi<br />Project Overview
          </h1>
          <p className="proj-subtitle" style={{ animation: "fadeUp 0.7s ease 0.3s both" }}>
            &ldquo;The Impact of Bhagabata Tungi on Social Harmony in Odisha: A Socio-Cultural Analysis&rdquo;
          </p>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{
        background: "var(--cream)",
        minHeight: "60vh",
        width: "100%",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}>
        <div className="project-grid">

          {/* ── Main text ── */}
          <div style={{ animation: "slideRight 0.8s ease 0.1s both", minWidth: 0, width: "100%", boxSizing: "border-box" }}>
            {sections.map((section) => (
              <div key={section.heading} style={{ marginBottom: "2.5rem" }}>
                <h2 className="proj-section-heading">{section.heading}</h2>
                {section.paras.map((p, i) => (
                  <p key={i} className="proj-body-text">{p}</p>
                ))}
              </div>
            ))}
          </div>

          {/* ── Sidebar ── */}
          <div style={{ animation: "slideLeft 0.8s ease 0.2s both", minWidth: 0, width: "100%", boxSizing: "border-box" }}>

            {/* Project Details card */}
            <div className="project-sticky sidebar-card sidebar-card--dark">
              <h3 className="sidebar-heading sidebar-heading--light">Project Details</h3>
              {sidebarFacts.map((f, i) => (
                <div key={i} className="sidebar-fact-row">
                  <span className="sidebar-icon">{f.icon}</span>
                  <div className="sidebar-fact-text">
                    <strong className="sidebar-fact-label">{f.label}</strong>
                    {f.val}
                  </div>
                </div>
              ))}
            </div>

            {/* Research Questions card */}
            <div className="sidebar-card sidebar-card--light" style={{ marginTop: "1.5rem" }}>
              <h3 className="sidebar-heading sidebar-heading--dark">Key Research Questions</h3>
              {researchQuestions.map((q, i) => (
                <div key={i} className="rq-row">
                  <span className="rq-num">0{i + 1}</span>
                  <span className="rq-text">{q}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <Footer />

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        /* ── Global guard ── */
        *, *::before, *::after { box-sizing: border-box; }
        html, body {
          max-width: 100vw;
          overflow-x: hidden;
        }

        /* ── Banner ── */
        .proj-tag {
          justify-content: center !important;
          color: rgba(255,255,255,0.7) !important;
        }
        .proj-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.5rem, 6vw, 3rem);
          color: #fff;
          font-weight: 800;
          text-shadow: 0 2px 20px rgba(0,0,0,0.2);
          margin-bottom: 1rem;
          word-break: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          line-height: 1.2;
          max-width: 100%;
        }
        .proj-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(0.9rem, 2.5vw, 1.2rem);
          font-style: italic;
          color: rgba(255,255,255,0.85);
          line-height: 1.7;
          padding: 0 clamp(0rem, 2vw, 2rem);
          margin: 0;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        /* ── Content grid ── */
        .project-grid {
          max-width: 1100px;
          margin: 0 auto;
          padding: clamp(2rem, 5vw, 3rem) clamp(1.25rem, 5vw, 2rem) clamp(3rem, 6vw, 5rem);
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: clamp(1.5rem, 4vw, 3rem);
          align-items: start;
          width: 100%;
          box-sizing: border-box;
        }
        .project-grid > * { min-width: 0; }

        /* ── Section text ── */
        .proj-section-heading {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.05rem, 3.5vw, 1.8rem);
          color: var(--earth);
          margin-bottom: 1.25rem;
          word-break: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          line-height: 1.25;
        }
        .proj-body-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(0.95rem, 2.5vw, 1.15rem);
          line-height: 1.85;
          color: #4A2800;
          margin-bottom: 1.2rem;
          text-align: justify;
          word-break: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          max-width: 100%;
        }

        /* ── Sidebar shared ── */
        .sidebar-card {
          border-radius: 12px;
          padding: clamp(1rem, 3vw, 1.75rem);
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }
        .sidebar-card--dark { background: var(--deep); }
        .sidebar-card--light {
          background: #fff;
          border: 1px solid rgba(232,100,12,0.12);
        }

        .project-sticky {
          position: sticky;
          top: 80px;
        }

        .sidebar-heading {
          font-family: 'Cinzel', serif;
          font-size: clamp(0.78rem, 2vw, 1rem);
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          word-break: break-word;
        }
        .sidebar-heading--light {
          color: var(--gold-light);
          border-bottom: 1px solid rgba(232,100,12,0.3);
        }
        .sidebar-heading--dark {
          color: var(--earth);
          border-bottom: 1px solid rgba(232,100,12,0.15);
        }

        /* Sidebar fact rows */
        .sidebar-fact-row {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1rem;
          align-items: flex-start;
        }
        .sidebar-icon {
          font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          flex-shrink: 0;
          margin-top: 2px;
          line-height: 1;
        }
        .sidebar-fact-text {
          font-size: clamp(0.74rem, 1.8vw, 0.85rem);
          color: rgba(255,255,255,0.65);
          line-height: 1.55;
          word-break: break-word;
          overflow-wrap: break-word;
          min-width: 0;
          flex: 1;
        }
        .sidebar-fact-label {
          color: var(--saffron-light);
          display: block;
          margin-bottom: 2px;
          font-weight: 600;
        }

        /* Research question rows */
        .rq-row {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 0.875rem;
          align-items: flex-start;
        }
        .rq-num {
          color: var(--saffron);
          font-weight: 800;
          flex-shrink: 0;
          font-size: clamp(0.78rem, 2vw, 0.9rem);
          line-height: 1.55;
        }
        .rq-text {
          font-size: clamp(0.74rem, 1.8vw, 0.85rem);
          color: var(--muted);
          line-height: 1.55;
          word-break: break-word;
          overflow-wrap: break-word;
          min-width: 0;
          flex: 1;
        }

        /* ── Tablet ── */
        @media (max-width: 900px) {
          .project-grid {
            grid-template-columns: 1fr 260px !important;
          }
        }

        /* ── Mobile: single column ── */
        @media (max-width: 640px) {
          .project-grid {
            grid-template-columns: 1fr !important;
          }
          .project-sticky {
            position: static !important;
          }
          .proj-body-text {
            text-align: left;
          }
        }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}

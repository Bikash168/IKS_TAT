"use client";

import Footer from "../components/Footer";
import { useInView } from "../components/useInView";
import { impactCards } from "../components/data";

const deeperDimensions = [
  { title: "Caste Integration",            body: "One of the most notable outcomes of Bhagabata Tungis is their role in facilitating caste integration. The shared devotional space creates an environment where caste distinctions are temporarily set aside, fostering direct social interaction across traditionally separated groups." },
  { title: "Rural Social Networks",        body: "Regular Tungi gatherings strengthen the web of social relationships within and between villages. These networks become especially important during times of community crisis, serving as informal support systems rooted in shared spiritual values." },
  { title: "Women's Participation",        body: "While historically male-dominated, contemporary Tungis increasingly include women as active participants and even facilitators. This shift represents a meaningful expansion of the institution's inclusive potential and its relevance to gender equity discourses." },
  { title: "Oral Knowledge Transmission",  body: "The nightly recitation of the Bhagabata represents a living tradition of oral knowledge transmission. Complex philosophical and ethical ideas are made accessible through storytelling, poetry, and communal discussion—bypassing the barriers of formal literacy." },
];

function ImpactCard({ card, delay }: { card: typeof impactCards[0]; delay: number }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`impact-card ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="impact-icon">{card.icon}</div>
      <h3>{card.title}</h3>
      <p>{card.desc}</p>
    </div>
  );
}

function FadeInBox({ item, delay }: { item: typeof deeperDimensions[0]; delay: number }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      style={{
        background: "#fff",
        borderRadius: 10,
        padding: "clamp(1.25rem, 3vw, 1.75rem) clamp(1.25rem, 3vw, 2rem)",
        marginBottom: "1rem",
        border: "1px solid rgba(232,100,12,0.1)",
        borderLeft: "3px solid var(--saffron)",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateX(-20px)",
        transition: `all 0.5s ease ${delay}ms`,
      }}
    >
      <h3 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
        color: "var(--earth)",
        marginBottom: "0.5rem",
      }}>
        {item.title}
      </h3>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
        lineHeight: 1.75,
        color: "#4A2800",
        margin: 0,
      }}>
        {item.body}
      </p>
    </div>
  );
}

export default function ImpactPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <div style={{
        background: "var(--deep)",
        padding: "clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem) clamp(2.5rem, 6vw, 4rem)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative rings — hidden on mobile to avoid overflow */}
        <div className="impact-ring impact-ring-lg" />
        <div className="impact-ring impact-ring-sm" />

        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="section-tag" style={{
            justifyContent: "center",
            animation: "fadeUp 0.5s ease both",
            display: "flex",
          }}>
            Research Outcomes
          </div>
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
            color: "#fff",
            animation: "fadeUp 0.7s ease 0.15s both",
            marginBottom: "1rem",
            wordBreak: "break-word",
          }}>
            Socio-Cultural Impact
          </h1>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.95rem, 2.5vw, 1.2rem)",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.5)",
            animation: "fadeUp 0.7s ease 0.3s both",
            maxWidth: 600,
            margin: "0 auto",
            padding: "0 clamp(0rem, 2vw, 1rem)",
          }}>
            How Bhagabata Tungis continue to shape community life, social values, and cultural identity across Odisha.
          </p>
        </div>
      </div>

      {/* ── IMPACT CARDS ── */}
      <div style={{ background: "var(--cream)" }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem)",
          display: "grid",
          // 2 cols on desktop/tablet, 1 col on mobile
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(1rem, 2.5vw, 1.5rem)",
        }}>
          {impactCards.map((card, i) => (
            <ImpactCard key={i} card={card} delay={i * 80} />
          ))}
        </div>
      </div>

      {/* ── QUOTE ── */}
      <div style={{
        background: "linear-gradient(160deg, var(--deep) 0%, #2D1200 100%)",
        padding: "clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)",
        overflow: "hidden",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(3rem, 8vw, 5rem)",
            color: "var(--saffron)",
            opacity: 0.3,
            lineHeight: 1,
            marginBottom: "-1rem",
          }}>
            "
          </div>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.7,
            marginBottom: "1.5rem",
            padding: "0 clamp(0rem, 2vw, 1rem)",
          }}>
            Bhagabata Tungis are not merely religious spaces but vibrant community institutions that preserve
            cultural heritage, promote ethical values, and strengthen social cohesion—making them indispensable
            to the fabric of Odia village life.
          </p>
          <div style={{
            fontSize: "clamp(0.7rem, 1.8vw, 0.8rem)",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--saffron-light)",
          }}>
            — Research Finding, IKS Study on Social Harmony
          </div>
        </div>
      </div>

      {/* ── DEEPER DIMENSIONS ── */}
      <div style={{
        background: "var(--cream)",
        padding: "clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem)",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>
              Deeper Dimensions
            </div>
            <h2 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.4rem, 4vw, 2rem)",
              color: "var(--earth)",
              wordBreak: "break-word",
            }}>
              Beyond Religious Practice
            </h2>
          </div>
          {deeperDimensions.map((item, i) => (
            <FadeInBox key={i} item={item} delay={i * 80} />
          ))}
        </div>
      </div>

      <Footer />

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        body { overflow-x: hidden; max-width: 100vw; }

        /* Decorative rings */
        .impact-ring {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          pointer-events: none;
          border: 1px solid rgba(232,100,12,0.12);
        }
        .impact-ring-lg { width: min(600px, 90vw); height: min(600px, 90vw); }
        .impact-ring-sm { width: min(400px, 60vw); height: min(400px, 60vw); border-color: rgba(232,100,12,0.18); }

        /* Impact card animation */
        .impact-card {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .impact-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Force single column on small mobile */
        @media (max-width: 480px) {
          .impact-ring { display: none; }
        }
      `}</style>
    </>
  );
}
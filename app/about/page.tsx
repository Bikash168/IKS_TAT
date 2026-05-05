"use client";

import Footer from "../components/Footer";
import Mandala from "../components/Mandala";
import { useInView } from "../components/useInView";
import { timelineData } from "../components/data";

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <div style={{
        background: "linear-gradient(160deg, #1A0800 0%, #2D1200 50%, #1A0800 100%)",
        padding: "clamp(40px, 8vw, 80px) clamp(1.25rem, 5vw, 3rem) clamp(40px, 6vw, 60px)",
        position: "relative",
        overflow: "hidden",
        width: "100%",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "absolute", top: "-50%", right: "-10%",
          width: "min(600px, 80vw)", height: "min(600px, 80vw)",
          background: "radial-gradient(circle, rgba(232,100,12,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="hero-mandala" style={{
          position: "absolute", top: "50%", right: "5%",
          transform: "translateY(-50%) rotate(20deg)",
        }}>
          <Mandala size={280} opacity={0.1} />
        </div>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          width: "100%",
          boxSizing: "border-box",
        }}>
          <div className="section-tag" style={{ animation: "slideRight 0.7s ease both" }}>
            Indian Knowledge Systems
          </div>
          <h1 className="section-title-lg" style={{ animation: "slideRight 0.7s ease 0.15s both" }}>
            About the<br />Research Initiative
          </h1>
          <p className="section-body" style={{
            animation: "slideRight 0.7s ease 0.3s both",
            maxWidth: "min(100%, 680px)",
          }}>
            A systematic effort to document, digitize, and analyze the living tradition of Bhagabata Tungis—
            community institutions that have sustained social harmony in Odisha for centuries.
          </p>
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div style={{
        background: "var(--cream)",
        minHeight: "60vh",
        width: "100%",
        overflowX: "hidden",
        boxSizing: "border-box",
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "clamp(2rem, 5vw, 5rem) clamp(1.25rem, 5vw, 2rem)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(2rem, 4vw, 4rem)",
          alignItems: "start",
          boxSizing: "border-box",
          width: "100%",
        }}>

          {/* ── Left: text ── */}
          <div style={{
            animation: "slideRight 0.8s ease 0.1s both",
            minWidth: 0,
            width: "100%",
            boxSizing: "border-box",
          }}>
            <h3 className="about-section-heading">
              Indian Knowledge Systems
            </h3>

            {[
              "Indian Knowledge Systems (IKS) represent a rich and well-structured body of knowledge developed in India over centuries through observation, experience, and intergenerational wisdom. These systems encompass insights into society, culture, philosophy, health, environment, and community life.",
              "Because this knowledge forms an important part of India's intellectual and cultural heritage, it is essential to document and digitally preserve it. Systematic archiving ensures these traditions remain accessible and relevant for future generations.",
            ].map((p, i) => (
              <p key={i} className="about-body-text">{p}</p>
            ))}

            <blockquote className="about-blockquote">
              &ldquo;Bridging traditional knowledge with modern research methods enhances its relevance
              in today&apos;s world—making IKS more meaningful and applicable in addressing
              present-day social and cultural challenges.&rdquo;
            </blockquote>

            <h3 className="about-section-heading" style={{ marginTop: "2rem" }}>
              The Research Project
            </h3>

            {[
              `The IKS-sanctioned research project "The Impact of Bhagabata Tungi on Social Harmony in Odisha: A Socio-Cultural Analysis," led by Dr. Munmun Mohanty, studies the role of Bhagabata Tungis in shaping social values and strengthening community relationships across Odisha.`,
              "By examining how devotional practices influence social harmony and collective life, the project highlights the continuing importance of traditional bhakti-based community institutions in promoting unity and cultural continuity.",
            ].map((p, i) => (
              <p key={i} className="about-body-text">{p}</p>
            ))}
          </div>

          {/* ── Right: PI card + timeline ── */}
          <div style={{
            animation: "slideLeft 0.8s ease 0.2s both",
            minWidth: 0,
            width: "100%",
            boxSizing: "border-box",
          }}>

            {/* PI Card */}
            <div className="pi-card">
              <h3 className="pi-card-label">Principal Investigator</h3>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", flexWrap: "wrap" }}>
                <div className="pi-avatar">👩‍🏫</div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{
                    color: "#fff",
                    fontWeight: 700,
                    marginBottom: 4,
                    wordBreak: "break-word",
                    fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                  }}>
                    Dr. Munmun Mohanty
                  </div>
                  <div style={{
                    fontSize: "clamp(0.72rem, 1.8vw, 0.8rem)",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.5,
                  }}>
                    Trident Academy of Technology<br />Bhubaneswar, Odisha
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline heading */}
            <h3 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
              color: "var(--earth)",
              marginBottom: "1.25rem",
            }}>
              Historical Timeline
            </h3>

            {/* Timeline items */}
            <div>
              {timelineData.map((item, i) => (
                <TimelineItem
                  key={i}
                  item={item}
                  index={i}
                  isLast={i === timelineData.length - 1}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />

      {/* ── ALL RESPONSIVE STYLES ── */}
      <style>{`
        /* ── Global overflow guard ── */
        *, *::before, *::after {
          box-sizing: border-box;
        }
        html, body {
          max-width: 100vw;
          overflow-x: hidden;
        }

        /* ── Hero ── */
        .section-tag {
          font-size: clamp(0.65rem, 2vw, 0.75rem);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--saffron);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          word-break: break-word;
        }
        .section-tag::before {
          content: '';
          display: inline-block;
          width: 2rem;
          height: 1.5px;
          background: var(--saffron);
          flex-shrink: 0;
        }
        .section-title-lg {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.8rem, 7vw, 3.5rem) !important;
          word-break: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          line-height: 1.15;
          max-width: 100%;
          color: #fff;
          margin: 0 0 1.25rem;
          padding: 0;
        }
        .section-body {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(0.9rem, 2.5vw, 1.15rem) !important;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.75);
          word-break: break-word;
          overflow-wrap: break-word;
        }
        @media (max-width: 600px) {
          .hero-mandala { display: none !important; }
        }

        /* ── Text blocks ── */
        .about-section-heading {
          font-family: 'Cinzel', serif;
          font-size: clamp(1rem, 3vw, 1.5rem);
          font-weight: 600;
          color: var(--earth);
          margin-bottom: 1rem;
          word-break: break-word;
        }
        .about-body-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(0.95rem, 2.5vw, 1.15rem);
          line-height: 1.8;
          color: #4A2800;
          margin-bottom: 1.25rem;
          text-align: justify;
          word-break: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
          max-width: 100%;
        }

        /* ── Blockquote ── */
        .about-blockquote {
          background: var(--deep);
          border-left: 3px solid var(--saffron);
          padding: clamp(0.875rem, 3vw, 1.5rem) clamp(0.875rem, 3vw, 1.75rem);
          margin: 1.5rem 0;
          border-radius: 0 8px 8px 0;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(0.88rem, 2.2vw, 1.1rem);
          font-style: italic;
          color: var(--gold-light);
          line-height: 1.7;
          word-break: break-word;
          overflow-wrap: break-word;
          max-width: 100%;
        }

        /* ── PI Card ── */
        .pi-card {
          background: var(--deep);
          border-radius: 16px;
          padding: clamp(1rem, 3vw, 2rem);
          margin-bottom: 1.5rem;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }
        .pi-card-label {
          font-family: 'Cinzel', serif;
          font-size: clamp(0.78rem, 2vw, 1rem);
          color: var(--gold-light);
          margin-bottom: 1.25rem;
          margin-top: 0;
        }
        .pi-avatar {
          width: clamp(44px, 8vw, 56px);
          height: clamp(44px, 8vw, 56px);
          background: var(--saffron);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(1.2rem, 4vw, 1.5rem);
          flex-shrink: 0;
        }

        /* ── Timeline ── */
        .timeline-item {
          display: flex;
          gap: clamp(0.75rem, 2vw, 1rem);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          width: 100%;
          box-sizing: border-box;
        }
        .timeline-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .timeline-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }
        .timeline-dot {
          width: clamp(30px, 6vw, 36px);
          height: clamp(30px, 6vw, 36px);
          background: var(--deep);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(0.85rem, 2vw, 1rem);
          flex-shrink: 0;
          border: 2px solid var(--saffron);
        }
        .timeline-line {
          width: 2px;
          flex: 1;
          min-height: 24px;
          background: linear-gradient(to bottom, var(--saffron), transparent);
          margin: 4px 0;
        }
        .timeline-content {
          padding-bottom: clamp(1rem, 3vw, 1.5rem);
          min-width: 0;
          flex: 1;
        }
        .timeline-content h4 {
          font-family: 'Cinzel', serif;
          font-size: clamp(0.78rem, 2vw, 0.9rem);
          color: var(--earth);
          margin: 0 0 4px;
          word-break: break-word;
        }
        .timeline-content p {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(0.82rem, 2vw, 0.92rem);
          color: #6B3A00;
          line-height: 1.6;
          margin: 0;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        /* ── Mobile overrides ── */
        @media (max-width: 480px) {
          .about-body-text {
            text-align: left;
          }
          .about-blockquote {
            margin-left: 0;
            margin-right: 0;
          }
        }

        /* ── Animations ── */
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

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: { icon: string; year: string; title: string; desc: string };
  index: number;
  isLast: boolean;
}) {
  const { ref, visible } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`timeline-item ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="timeline-left">
        <div className="timeline-dot">{item.icon}</div>
        {!isLast && <div className="timeline-line" />}
      </div>
      <div className="timeline-content">
        <div style={{
          fontSize: "clamp(0.65rem, 1.5vw, 0.7rem)",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--saffron)",
          marginBottom: 4,
        }}>
          {item.year}
        </div>
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </div>
    </div>
  );
}

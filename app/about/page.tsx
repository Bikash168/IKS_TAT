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
        padding: "clamp(40px, 8vw, 80px) clamp(1rem, 4vw, 2rem) clamp(40px, 6vw, 60px)",
        position: "relative",
        overflow: "hidden",
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
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
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
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "clamp(2rem, 5vw, 5rem) clamp(1rem, 4vw, 2rem)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap: "clamp(2rem, 4vw, 4rem)",
          alignItems: "start",
        }}>

          {/* Left: text */}
          <div style={{ animation: "slideRight 0.8s ease 0.1s both" }}>
            <h3 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
              fontWeight: 600,
              color: "var(--earth)",
              marginBottom: "1rem",
            }}>
              Indian Knowledge Systems
            </h3>

            {[
              "Indian Knowledge Systems (IKS) represent a rich and well-structured body of knowledge developed in India over centuries through observation, experience, and intergenerational wisdom. These systems encompass insights into society, culture, philosophy, health, environment, and community life.",
              "Because this knowledge forms an important part of India's intellectual and cultural heritage, it is essential to document and digitally preserve it. Systematic archiving ensures these traditions remain accessible and relevant for future generations.",
            ].map((p, i) => (
              <p key={i} style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                lineHeight: 1.8,
                color: "#4A2800",
                marginBottom: "1.25rem",
                textAlign: "justify",
              }}>{p}</p>
            ))}

            <div style={{
              background: "var(--deep)",
              borderLeft: "3px solid var(--saffron)",
              padding: "1.5rem 1.75rem",
              margin: "1.5rem 0",
              borderRadius: "0 8px 8px 0",
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)",
                fontStyle: "italic",
                color: "var(--gold-light)",
                lineHeight: 1.7,
                margin: 0,
              }}>
                &ldquo;Bridging traditional knowledge with modern research methods enhances its relevance
                in today&apos;s world—making IKS more meaningful and applicable in addressing
                present-day social and cultural challenges.&rdquo;
              </p>
            </div>

            <h3 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
              fontWeight: 600,
              color: "var(--earth)",
              marginBottom: "1rem",
              marginTop: "2rem",
            }}>
              The Research Project
            </h3>

            {[
              `The IKS-sanctioned research project "The Impact of Bhagabata Tungi on Social Harmony in Odisha: A Socio-Cultural Analysis," led by Dr. Munmun Mohanty, studies the role of Bhagabata Tungis in shaping social values and strengthening community relationships across Odisha.`,
              "By examining how devotional practices influence social harmony and collective life, the project highlights the continuing importance of traditional bhakti-based community institutions in promoting unity and cultural continuity.",
            ].map((p, i) => (
              <p key={i} style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                lineHeight: 1.8,
                color: "#4A2800",
                marginBottom: "1.25rem",
                textAlign: "justify",
              }}>{p}</p>
            ))}
          </div>

          {/* Right: PI card + timeline */}
          <div style={{ animation: "slideLeft 0.8s ease 0.2s both" }}>
            <div style={{
              background: "var(--deep)",
              borderRadius: 16,
              padding: "clamp(1.25rem, 3vw, 2rem)",
              marginBottom: "1.5rem",
            }}>
              <h3 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(0.85rem, 2vw, 1rem)",
                color: "var(--gold-light)",
                marginBottom: "1.25rem",
              }}>Principal Investigator</h3>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  width: 56, height: 56,
                  background: "var(--saffron)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.5rem", flexShrink: 0,
                }}>👩‍🏫</div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 700, marginBottom: 4 }}>
                    Dr. Munmun Mohanty
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
                    Trident Academy of Technology<br />Bhubaneswar, Odisha
                  </div>
                </div>
              </div>
            </div>

            <h3 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
              color: "var(--earth)",
              marginBottom: "1.25rem",
            }}>Historical Timeline</h3>

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

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        /* Hide mandala on small screens to prevent overflow */
        @media (max-width: 600px) {
          .hero-mandala { display: none !important; }
        }

        /* Prevent horizontal overflow */
        *, *::before, *::after { box-sizing: border-box; }

        /* Timeline animation */
        .timeline-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .timeline-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Responsive title */
        .section-title-lg {
          font-size: clamp(2rem, 6vw, 3.5rem) !important;
          word-break: break-word;
        }

        /* Responsive body */
        .section-body {
          font-size: clamp(0.95rem, 2.5vw, 1.15rem) !important;
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
          fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "var(--saffron)", marginBottom: 4,
        }}>
          {item.year}
        </div>
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </div>
    </div>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Ticker from "./components/Ticker";
import Footer from "./components/Footer";
import Mandala from "./components/Mandala";
import { useInView } from "./components/useInView";

export default function HomePage() {
  const { ref: statsRef, visible: statsVisible } = useInView(0.2);
  const [count, setCount] = useState({ a: 0, b: 0, c: 0, d: 0 });

  useEffect(() => {
    if (!statsVisible) return;
    const targets = { a: 609, b: 6, c: 15, d: 94 };
    const duration = 1800;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount({
        a: Math.round(targets.a * ease),
        b: Math.round(targets.b * ease),
        c: Math.round(targets.c * ease),
        d: Math.round(targets.d * ease),
      });
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [statsVisible]);

  const collections = [
    { icon: "🎥", title: "Video Interviews",  desc: "Field recordings with community members, scholars, and practitioners", href: "/interviews" },
    { icon: "📸", title: "Photo Archive",     desc: "Visual documentation of Tungi spaces, rituals, and gatherings",        href: "/gallery" },
    { icon: "📊", title: "Research Analysis", desc: "Quantitative and qualitative findings from field surveys",             href: "/analysis" },
    { icon: "📜", title: "Project Overview",  desc: "Background, methodology, and theoretical framework",                   href: "/project" },
  ];

  return (
    <>
      <main style={{ fontFamily: "'Lato', sans-serif" }}>

        {/* ── HERO ── */}
        <section style={{
          minHeight: "100vh", background: "var(--deep)",
          position: "relative", overflow: "hidden",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {/* Background gradients */}
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(circle at 20% 50%, rgba(232,100,12,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(201,134,12,0.08) 0%, transparent 40%)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(232,100,12,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(232,100,12,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          {/* Mandalas — hidden on mobile via CSS, same as About page */}
          <div className="hero-mandala" style={{
            position: "absolute", top: "10%", right: "8%",
            animation: "mandalaRotate 60s linear infinite",
          }}>
            <Mandala size={320} opacity={0.06} />
          </div>
          <div className="hero-mandala" style={{
            position: "absolute", bottom: "15%", left: "4%",
            animation: "mandalaRotate 90s linear infinite reverse",
          }}>
            <Mandala size={200} opacity={0.04} />
          </div>

          {/* Hero content */}
          <div style={{
            position: "relative", zIndex: 2, textAlign: "center",
            padding: "clamp(5rem, 10vw, 8rem) clamp(1rem, 4vw, 2rem) clamp(4rem, 8vw, 6rem)",
            maxWidth: 900, width: "100%",
          }}>
            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              fontFamily: "'Lato', sans-serif",
              fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)",
              fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase",
              color: "var(--saffron-light)", marginBottom: "1.5rem",
              animation: "fadeUp 0.6s ease 0.2s both",
              flexWrap: "wrap", justifyContent: "center",
            }}>
              <span style={{ width: 32, height: 1, background: "var(--saffron-light)", display: "block" }} />
              Indian Knowledge Systems · IKS Digital Repository
              <span style={{ width: 32, height: 1, background: "var(--saffron-light)", display: "block" }} />
            </div>

            {/* Title */}
            <h1 className="section-title-lg" style={{
              fontFamily: "'Cinzel', serif",
              fontWeight: 800, color: "#fff", lineHeight: 1.1,
              marginBottom: "1rem", animation: "fadeUp 0.8s ease 0.4s both",
            }}>
              Bhagabata Tungi<br />
              <span style={{
                background: "linear-gradient(135deg, var(--saffron), var(--gold-light), var(--saffron))",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 3s linear infinite",
              }}>
                Digital Archive
              </span>
            </h1>

            {/* Subtitle */}
            <p className="section-body" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic", color: "rgba(255,255,255,0.6)",
              marginBottom: "2.5rem", animation: "fadeUp 0.8s ease 0.6s both",
            }}>
              Preserving the Living Heritage of Social Harmony &amp; Devotional Knowledge in Odisha
            </p>

            {/* CTA buttons */}
            <div className="hero-cta" style={{
              display: "flex", gap: "1rem", justifyContent: "center",
              flexWrap: "wrap", animation: "fadeUp 0.8s ease 0.8s both",
            }}>
              <Link href="/about"><button className="btn-primary">Explore Project</button></Link>
              <Link href="/gallery"><button className="btn-secondary">View Gallery</button></Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
            color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", letterSpacing: "0.15em",
            textTransform: "uppercase", animation: "float 2s ease-in-out infinite",
          }}>
            <span>Scroll</span>
            <div style={{ width: 24, height: 24, borderRight: "1px solid", borderBottom: "1px solid", transform: "rotate(45deg)", marginTop: -4, opacity: 0.5 }} />
          </div>
        </section>

        <Ticker />

        {/* ── STATS ── */}
        <div className="stats-row" ref={statsRef}>
          <div className="stats-inner">
            {[
              { n: `${count.a}+`, l: "Participants Surveyed" },
              { n: `${count.b}+`, l: "Districts Studied" },
              { n: `${count.c}th`, l: "Century Origins" },
              { n: `${count.d}%`, l: "Positive Impact Reported" },
            ].map((s, i) => (
              <div key={i} className="stat-card">
                <span className="stat-number">{s.n}</span>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── COLLECTIONS ── */}
        <div style={{ background: "var(--cream)", padding: "clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2rem)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="section-tag" style={{ justifyContent: "center" }}>What We Preserve</div>
              <h2 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(1.5rem, 3vw, 2.8rem)",
                color: "var(--earth)",
              }}>
                Archive Collections
              </h2>
            </div>

            <div className="collections-grid">
              {collections.map((c, i) => (
                <Link key={i} href={c.href} style={{ textDecoration: "none" }}>
                  <div
                    className="collection-card"
                    style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{c.icon}</div>
                    <h3 style={{
                      fontFamily: "'Cinzel', serif", fontSize: "0.95rem",
                      color: "var(--earth)", marginBottom: "0.5rem",
                    }}>{c.title}</h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.6 }}>{c.desc}</p>
                    <div style={{
                      marginTop: "1rem", fontSize: "0.75rem",
                      fontWeight: 700, color: "var(--saffron)", letterSpacing: "0.1em",
                    }}>
                      Explore →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </main>

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        /* Prevent horizontal overflow — matches About page */
        *, *::before, *::after { box-sizing: border-box; }

        /* Hide mandalas on small screens — matches About page */
        @media (max-width: 600px) {
          .hero-mandala { display: none !important; }
        }

        /* Responsive title — reuses About page class */
        .section-title-lg {
          font-size: clamp(2rem, 6vw, 5rem) !important;
          word-break: break-word;
        }

        /* Responsive body — reuses About page class */
        .section-body {
          font-size: clamp(1rem, 2.5vw, 1.4rem) !important;
        }

        /* ── Collections grid ── */
        .collections-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.25rem;
        }
        @media (max-width: 420px) {
          .collections-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Collection card — CSS hover instead of JS handlers */
        .collection-card {
          background: #fff;
          border-radius: 12px;
          padding: clamp(1.25rem, 3vw, 2rem);
          border: 1px solid rgba(232,100,12,0.1);
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
          animation: fadeUp 0.6s ease both;
          height: 100%;
        }
        .collection-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(232,100,12,0.12);
          border-color: var(--saffron);
        }

        /* ── Stats: 4 col → 2 col → compact 2 col ── */
        .stats-inner {
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
          gap: 1rem;
          padding: 0 clamp(1rem, 4vw, 2rem);
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .stats-inner {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 400px) {
          .stats-inner { gap: 0.75rem; }
          .stat-number { font-size: clamp(1.4rem, 5vw, 2rem) !important; }
          .stat-label  { font-size: 0.65rem !important; }
        }

        /* ── Hero CTA: stack full-width on very small screens ── */
        @media (max-width: 380px) {
          .hero-cta {
            flex-direction: column;
            align-items: center;
          }
          .hero-cta a,
          .hero-cta button { width: 100%; }
        }
      `}</style>
    </>
  );
}

"use client";

import Footer from "../components/Footer";
import { useInView } from "../components/useInView";
import { videoData } from "../components/data";

function VideoCard({ v, index }: { v: typeof videoData[0]; index: number }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`video-card ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Thumbnail */}
      <div style={{
        position: "relative",
        paddingTop: "56.25%",
        background: "var(--deep)",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center",
          justifyContent: "center", flexDirection: "column", gap: "1rem",
          background: "linear-gradient(135deg, #1A0800, #2D1200)",
        }}>
          <div className="play-btn">
            <div style={{
              width: 0, height: 0,
              borderLeft: "18px solid #fff",
              borderTop: "11px solid transparent",
              borderBottom: "11px solid transparent",
              marginLeft: 4,
            }} />
          </div>
          <div style={{
            fontSize: "0.7rem", fontWeight: 700,
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.5)",
          }}>
            {v.duration}
          </div>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "clamp(0.875rem, 2vw, 1.25rem)" }}>
        <div style={{
          fontSize: "0.65rem", fontWeight: 700,
          letterSpacing: "0.12em", textTransform: "uppercase",
          color: "var(--saffron)", marginBottom: "0.5rem",
        }}>
          {v.tag}
        </div>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
          fontWeight: 600, color: "var(--text)",
          marginBottom: "0.4rem", lineHeight: 1.4,
        }}>
          {v.title}
        </h3>
        <p style={{
          fontSize: "clamp(0.75rem, 1.8vw, 0.8rem)",
          color: "var(--muted)", lineHeight: 1.5,
        }}>
          {v.desc}
        </p>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginTop: "1rem", paddingTop: "0.75rem",
          borderTop: "1px solid rgba(92,45,0,0.1)",
          fontSize: "clamp(0.65rem, 1.5vw, 0.72rem)",
          color: "var(--muted)",
          flexWrap: "wrap", gap: "0.25rem",
        }}>
          <span>📍 {v.location}</span>
          <span>🎬 {v.duration}</span>
        </div>
      </div>
    </div>
  );
}

export default function InterviewsPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <div style={{
        background: "linear-gradient(135deg, var(--earth) 0%, var(--saffron) 100%)",
        padding: "clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem) clamp(2.5rem, 6vw, 4rem)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.15)" }} />
        <div style={{
          maxWidth: 800, margin: "0 auto",
          textAlign: "center", position: "relative", zIndex: 2,
        }}>
          <div className="section-tag" style={{
            justifyContent: "center",
            color: "rgba(255,255,255,0.75)",
            animation: "fadeUp 0.5s ease both",
            display: "flex",
          }}>
            Field Documentation
          </div>
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1.6rem, 4vw, 3rem)",
            color: "#fff",
            marginBottom: "1rem",
            animation: "fadeUp 0.7s ease 0.15s both",
            wordBreak: "break-word",
          }}>
            Video Interviews<br />&amp; Recordings
          </h1>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
            color: "rgba(255,255,255,0.8)",
            fontStyle: "italic", lineHeight: 1.7,
            animation: "fadeUp 0.7s ease 0.3s both",
            padding: "0 clamp(0rem, 2vw, 1rem)",
          }}>
            Primary source material gathered during field research—community voices, scholarly perspectives,
            and living documentation of Bhagabata Tungi traditions.
          </p>
        </div>
      </div>

      {/* ── VIDEO GRID ── */}
      <div style={{ background: "var(--cream)", minHeight: "60vh" }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          padding: "clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem) clamp(3rem, 6vw, 5rem)",
          display: "grid",
          // 3 cols desktop → 2 cols tablet → 1 col mobile
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: "clamp(1rem, 2.5vw, 1.5rem)",
        }}>
          {videoData.map((v, i) => (
            <VideoCard key={i} v={v} index={i} />
          ))}
        </div>
      </div>

      {/* ── NOTE ── */}
      <div style={{
        background: "var(--saffron-pale)",
        padding: "clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem)",
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
          fontStyle: "italic",
          color: "var(--muted)",
          maxWidth: 600,
          margin: "0 auto",
        }}>
          Upload video files to /public/videos/ directory — name them video1.mp4, video2.mp4, etc. to enable playback.
        </p>
      </div>

      <Footer />

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        body { overflow-x: hidden; max-width: 100vw; }

        /* Video card animation */
        .video-card {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(92,45,0,0.08);
        }
        .video-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Force 2 cols on tablet, 1 col on small mobile */
        @media (max-width: 640px) {
          .video-card h3 {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </>
  );
}
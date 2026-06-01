"use client";

import { useState, useEffect } from "react";
import Footer from "../components/Footer";

// ── Extract YouTube video ID from URL ──
function getYouTubeId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&?/]+)/);
  return match ? match[1] : "";
}

// ── Video metadata with YouTube URLs ──
const allVideos = [
  { src: "https://youtu.be/dVGhVpFRjMw", label: "Video 1",  category: "Field Documentation" },
  { src: "https://youtu.be/tQuIaHnJjck", label: "Video 2",  category: "Community Life" },
  { src: "https://youtu.be/GCAaas-PpWs", label: "Video 4",  category: "Field Documentation" },
  { src: "https://youtu.be/qS0u9o32Zec", label: "Video 7",  category: "Interviews" },
  { src: "https://youtu.be/RBSbNnMTuhM", label: "Video 8",  category: "Interviews" },
  { src: "https://youtu.be/RBEm6uuX-Oc", label: "Video 10", category: "Community Life" },
  { src: "https://youtu.be/H5QH4aUqNlg", label: "Video 12", category: "Community Life" },
  { src: "https://youtu.be/jqpc1gar5Gc", label: "Video 13", category: "Community Life" },
  { src: "https://youtu.be/iDFt1LIrlx4", label: "Video 18", category: "Community Life" },
  { src: "https://youtu.be/jdQQIRsKdF0", label: "Video 19", category: "Community Life" },
 { src: "https://youtu.be/DPjc_PwAlQQ", label: "Video 20", category: "Interviews" },
{ src: "https://youtu.be/VrJW-gsUCvc", label: "Video 21",  category: "Interviews" },
];

export default function VideosPage() {
  const [lightbox, setLightbox]       = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Keyboard nav in lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  setLightbox((l) => l === null ? null : (l - 1 + allVideos.length) % allVideos.length);
      if (e.key === "ArrowRight") setLightbox((l) => l === null ? null : (l + 1) % allVideos.length);
      if (e.key === "Escape")     setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const closeLightbox = () => setLightbox(null);
  const prevVideo = () => setLightbox((l) => l === null ? null : (l - 1 + allVideos.length) % allVideos.length);
  const nextVideo = () => setLightbox((l) => l === null ? null : (l + 1) % allVideos.length);

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
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 50% 100%, rgba(232,100,12,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-tag" style={{ justifyContent: "center", animation: "fadeUp 0.6s ease both" }}>
            Visual Media
          </div>
          <h1 className="section-title-lg" style={{
            fontFamily: "'Cinzel', serif",
            color: "#fff",
            margin: "0.5rem 0 1rem",
            animation: "fadeUp 0.7s ease 0.15s both",
          }}>
            Video Archive
          </h1>
          <p className="section-body" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.55)",
            margin: "0 auto",
            maxWidth: "min(100%, 560px)",
            animation: "fadeUp 0.7s ease 0.3s both",
          }}>
            A curated collection of field documentation, community life, and cultural recordings from Odisha.
          </p>
        </div>
      </div>

      {/* ── GRID ── */}
      <div style={{ background: "var(--deep)", minHeight: "50vh" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 4vw, 2rem) clamp(3rem, 6vw, 4rem)",
        }}>
          <div className="video-grid">
            {allVideos.map((vid, i) => {
              const ytId = getYouTubeId(vid.src);
              const thumb = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
              return (
                <div
                  key={vid.src}
                  className="video-card"
                  style={{ animationDelay: `${Math.min(i * 60, 500)}ms` }}
                  onClick={() => setLightbox(i)}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Thumbnail — YouTube auto-generated */}
                  <div className="video-thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={thumb}
                      alt={vid.label}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                    <div className="thumb-overlay" />
                    <div className={`play-btn ${hoveredCard === i ? "hovered" : ""}`}>
                      <div className="play-triangle" />
                    </div>
                    <div className="thumb-category">{vid.category}</div>
                  </div>

                  {/* Info bar */}
                  <div className="video-info">
                    <div className="video-title">{vid.label}</div>
                    <div className="video-meta">
                      <span className="play-label">▶ Play</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && allVideos[lightbox] && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <button className="lb-close" onClick={closeLightbox} aria-label="Close">✕</button>
          <div className="lb-counter">{lightbox + 1} / {allVideos.length}</div>

          <div className="lb-content" onClick={(e) => e.stopPropagation()}>
            {/* YouTube iframe */}
            <div className="lb-video-wrap">
              <iframe
                key={allVideos[lightbox].src}
                src={`https://www.youtube.com/embed/${getYouTubeId(allVideos[lightbox].src)}?autoplay=1`}
                title={allVideos[lightbox].label}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: "none", borderRadius: 8 }}
              />
            </div>

            <div className="lb-caption">
              <div className="lb-caption-left">
                <div className="lb-title">{allVideos[lightbox].label}</div>
                <div className="lb-category">{allVideos[lightbox].category}</div>
              </div>
              <div className="lb-nav">
                <button className="lb-arrow" onClick={(e) => { e.stopPropagation(); prevVideo(); }} aria-label="Previous">‹</button>
                <button className="lb-arrow" onClick={(e) => { e.stopPropagation(); nextVideo(); }} aria-label="Next">›</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

      {/* ── STYLES ── */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        body { overflow-x: hidden; }

        .section-title-lg { font-size: clamp(2rem, 6vw, 3.5rem) !important; word-break: break-word; }
        .section-body     { font-size: clamp(0.95rem, 2.5vw, 1.15rem) !important; }

        /* ── Video grid: 3 → 2 → 1 ── */
        .video-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(0.75rem, 2vw, 1.25rem);
        }
        @media (max-width: 900px)  { .video-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px)  { .video-grid { grid-template-columns: 1fr; } }

        /* ── Video card ── */
        .video-card {
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          background: #110400;
          border: 1px solid rgba(232,100,12,0.1);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          animation: fadeUp 0.45s ease both;
        }
        .video-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 36px rgba(232,100,12,0.18);
          border-color: rgba(232,100,12,0.4);
        }

        /* Thumbnail */
        .video-thumb {
          position: relative;
          aspect-ratio: 16 / 9;
          background: #1a0a00;
          overflow: hidden;
        }
        .thumb-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(10,3,0,0.7) 0%, rgba(0,0,0,0.15) 60%, transparent 100%);
          transition: background 0.25s ease;
        }
        .video-card:hover .thumb-overlay {
          background: linear-gradient(to top, rgba(10,3,0,0.55) 0%, rgba(0,0,0,0.1) 60%, transparent 100%);
        }

        /* Play button */
        .play-btn {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) scale(1);
          width: clamp(40px, 7vw, 52px);
          height: clamp(40px, 7vw, 52px);
          border-radius: 50%;
          background: rgba(232,100,12,0.85);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 20px rgba(232,100,12,0.45);
          transition: transform 0.25s ease, background 0.2s ease;
        }
        .play-btn.hovered {
          transform: translate(-50%, -50%) scale(1.12);
          background: var(--saffron);
        }
        .play-triangle {
          width: 0; height: 0;
          border-left: clamp(10px, 2vw, 14px) solid #fff;
          border-top: clamp(6px, 1.2vw, 9px) solid transparent;
          border-bottom: clamp(6px, 1.2vw, 9px) solid transparent;
          margin-left: 3px;
        }

        /* Category pill */
        .thumb-category {
          position: absolute;
          bottom: 8px; left: 8px;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          border-radius: 12px;
          padding: 3px 9px;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.7);
        }

        /* Info bar */
        .video-info {
          padding: clamp(0.65rem, 2vw, 0.9rem) clamp(0.75rem, 2vw, 1rem);
          border-top: 1px solid rgba(232,100,12,0.12);
          background: #110400;
        }
        .video-title {
          color: #fff;
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: clamp(0.78rem, 2vw, 0.9rem);
          margin-bottom: 5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .video-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: clamp(0.65rem, 1.5vw, 0.72rem);
          color: rgba(255,255,255,0.35);
          font-weight: 600;
          letter-spacing: 0.06em;
        }
        .play-label {
          color: var(--saffron);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        /* ── Lightbox ── */
        .lightbox-backdrop {
          position: fixed; inset: 0; z-index: 2000;
          background: rgba(0,0,0,0.96);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: clamp(1rem, 4vw, 2rem);
        }
        .lb-close {
          position: absolute;
          top: clamp(0.75rem, 2vw, 1.25rem);
          right: clamp(0.75rem, 2vw, 1.25rem);
          width: clamp(32px, 4vw, 40px);
          height: clamp(32px, 4vw, 40px);
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: none; color: #fff;
          font-size: clamp(0.8rem, 2vw, 1rem);
          cursor: pointer; z-index: 2002;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .lb-close:hover { background: rgba(255,255,255,0.22); }
        .lb-counter {
          position: absolute;
          top: clamp(0.75rem, 2vw, 1.25rem);
          left: 50%; transform: translateX(-50%);
          font-size: 0.72rem; font-weight: 700;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.15em;
          white-space: nowrap;
        }
        .lb-content { width: min(860px, 92vw); }
        .lb-video-wrap {
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 8px;
          overflow: hidden;
          background: #000;
        }
        .lb-caption {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-top: 0.9rem;
          flex-wrap: wrap;
        }
        .lb-caption-left { flex: 1; min-width: 0; }
        .lb-title {
          color: #fff;
          font-family: 'Cinzel', serif;
          font-size: clamp(0.85rem, 2.5vw, 1rem);
          font-weight: 600;
          margin-bottom: 4px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .lb-category {
          font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--saffron);
          text-transform: uppercase;
        }
        .lb-nav { display: flex; gap: 0.5rem; flex-shrink: 0; }
        .lb-arrow {
          width: clamp(36px, 5vw, 44px);
          height: clamp(36px, 5vw, 44px);
          border-radius: 50%;
          background: rgba(232,100,12,0.85);
          border: none; color: #fff;
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .lb-arrow:hover { background: var(--saffron); }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

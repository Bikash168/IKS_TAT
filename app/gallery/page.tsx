"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Footer from "../components/Footer";

// Generate all 81 images
const galleryImages = Array.from({ length: 81 }, (_, i) => ({
  src: `/Iks image/${i + 1}.jpg`,
  index: i + 1,
}));

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [broken, setBroken] = useState<Set<number>>(new Set());

  const handleError = (index: number) => {
    setBroken((prev) => new Set(prev).add(index));
  };

  const visibleImages = galleryImages.filter((img) => !broken.has(img.index));

  const prev = useCallback(() => {
    setLightbox((l) => (l === null ? null : (l - 1 + visibleImages.length) % visibleImages.length));
  }, [visibleImages.length]);

  const next = useCallback(() => {
    setLightbox((l) => (l === null ? null : (l + 1) % visibleImages.length));
  }, [visibleImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, prev, next]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

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
        {/* Subtle background glow */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 50% 100%, rgba(232,100,12,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="section-tag" style={{ justifyContent: "center", animation: "fadeUp 0.6s ease both" }}>
            Visual Archive
          </div>
          <h1 className="section-title-lg" style={{
            fontFamily: "'Cinzel', serif",
            color: "#fff",
            animation: "fadeUp 0.7s ease 0.15s both",
            margin: "0.5rem 0 1rem",
          }}>
            Photo Gallery
          </h1>
          <p className="section-body" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.55)",
            margin: "0 auto 1.5rem",
            maxWidth: "min(100%, 560px)",
            animation: "fadeUp 0.7s ease 0.3s both",
          }}>
            A visual record of community life, ritual, and cultural heritage across Odisha.
          </p>

        </div>
      </div>

      {/* ── GRID ── */}
      <div style={{ background: "var(--deep)", minHeight: "60vh" }}>
        <div style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(0.75rem, 3vw, 1.5rem) clamp(2rem, 5vw, 4rem)",
        }}>
          <div className="gallery-grid">
            {galleryImages.filter((img) => !broken.has(img.index)).map((img, i) => (
              <div
                key={img.src}
                className="gallery-cell"
                style={{ animationDelay: `${Math.min(i * 30, 600)}ms` }}
                onClick={() => setLightbox(i)}
                role="button"
                tabIndex={0}
                aria-label={`View photo ${img.index}`}
                onKeyDown={(e) => e.key === "Enter" && setLightbox(i)}
              >
                <Image
                  src={img.src}
                  alt={`Photo ${img.index}`}
                  width={300}
                  height={220}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={() => handleError(img.index)}
                />
                {/* Hover overlay */}
                <div className="cell-overlay">
                  <span className="cell-num">{img.index}</span>
                  <span className="cell-zoom">⊕</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button className="lb-btn lb-close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>

          {/* Counter */}
          <div className="lb-counter">{lightbox + 1} / {visibleImages.length}</div>

          {/* Prev */}
          <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">‹</button>

          {/* Image */}
          <div className="lb-image-wrap" onClick={(e) => e.stopPropagation()}>
            <Image
              src={visibleImages[lightbox].src}
              alt={`Photo ${visibleImages[lightbox].index}`}
              width={1200}
              height={800}
              style={{
                width: "100%", height: "100%",
                objectFit: "contain",
                borderRadius: 6,
              }}
              priority
            />
          </div>

          {/* Next */}
          <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">›</button>

          {/* Thumbnail strip */}
          <div className="lb-strip" onClick={(e) => e.stopPropagation()}>
            {visibleImages.map((img, i) => (
              <div
                key={img.src}
                className={`lb-thumb ${i === lightbox ? "active" : ""}`}
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={img.src}
                  alt=""
                  width={80}
                  height={56}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />

      {/* ── STYLES ── */}
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        body { overflow-x: hidden; }

        .section-title-lg {
          font-size: clamp(2rem, 6vw, 3.5rem) !important;
          word-break: break-word;
        }
        .section-body {
          font-size: clamp(0.95rem, 2.5vw, 1.15rem) !important;
        }

        /* ── GRID: 6 → 4 → 3 → 2 cols ── */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: clamp(4px, 1vw, 8px);
        }
        @media (max-width: 1024px) {
          .gallery-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 640px) {
          .gallery-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 380px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* ── CELL ── */
        .gallery-cell {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 4px;
          cursor: pointer;
          animation: fadeIn 0.4s ease both;
          background: rgba(255,255,255,0.04);
        }
        .gallery-cell:hover img {
          transform: scale(1.06);
          transition: transform 0.4s ease;
        }
        img { transition: transform 0.4s ease; }

        .cell-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(26,8,0,0.75) 0%, rgba(26,8,0,0.1) 60%, transparent 100%);
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 6px 8px;
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .gallery-cell:hover .cell-overlay,
        .gallery-cell:focus .cell-overlay {
          opacity: 1;
        }
        @media (hover: none) {
          .cell-overlay { opacity: 1; }
        }
        .cell-num {
          font-size: 0.6rem;
          font-weight: 700;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.1em;
        }
        .cell-zoom {
          font-size: 1rem;
          color: var(--saffron);
          line-height: 1;
        }

        /* ── LIGHTBOX ── */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(0,0,0,0.96);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        .lb-image-wrap {
          width: min(860px, 88vw);
          height: min(560px, 62vh);
          flex-shrink: 0;
        }

        .lb-btn {
          position: absolute;
          background: rgba(232,100,12,0.85);
          border: none;
          color: #fff;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 2002;
          flex-shrink: 0;
        }
        .lb-btn:hover { background: var(--saffron); }

        .lb-prev {
          left: clamp(0.5rem, 2.5vw, 1.5rem);
          top: 50%;
          transform: translateY(-50%);
          width: clamp(36px, 5vw, 48px);
          height: clamp(36px, 5vw, 48px);
          font-size: clamp(1.2rem, 3vw, 1.75rem);
        }
        .lb-next {
          right: clamp(0.5rem, 2.5vw, 1.5rem);
          top: 50%;
          transform: translateY(-50%);
          width: clamp(36px, 5vw, 48px);
          height: clamp(36px, 5vw, 48px);
          font-size: clamp(1.2rem, 3vw, 1.75rem);
        }
        .lb-close {
          top: clamp(0.75rem, 2vw, 1.25rem);
          right: clamp(0.75rem, 2vw, 1.25rem);
          width: clamp(32px, 4vw, 40px);
          height: clamp(32px, 4vw, 40px);
          font-size: clamp(0.8rem, 2vw, 1rem);
          background: rgba(255,255,255,0.12);
        }
        .lb-close:hover { background: rgba(255,255,255,0.25); }

        .lb-counter {
          position: absolute;
          top: clamp(0.75rem, 2vw, 1.25rem);
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.75rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.15em;
          font-weight: 600;
          white-space: nowrap;
        }

        /* Thumbnail strip */
        .lb-strip {
          display: flex;
          gap: 4px;
          overflow-x: auto;
          padding: 10px clamp(3rem, 8vw, 5rem);
          margin-top: 10px;
          width: 100%;
          scrollbar-width: thin;
          scrollbar-color: rgba(232,100,12,0.4) transparent;
          flex-shrink: 0;
        }
        .lb-strip::-webkit-scrollbar { height: 3px; }
        .lb-strip::-webkit-scrollbar-thumb { background: rgba(232,100,12,0.4); border-radius: 2px; }

        .lb-thumb {
          width: clamp(44px, 6vw, 72px);
          height: clamp(30px, 4vw, 50px);
          flex-shrink: 0;
          border-radius: 3px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0.4;
          border: 2px solid transparent;
          transition: opacity 0.2s, border-color 0.2s;
        }
        .lb-thumb:hover { opacity: 0.75; }
        .lb-thumb.active {
          opacity: 1;
          border-color: var(--saffron);
        }

        /* Hide thumbnail strip on very small screens */
        @media (max-width: 480px) {
          .lb-strip { display: none; }
          .lb-image-wrap {
            width: 92vw;
            height: 58vh;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}

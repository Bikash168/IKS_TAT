"use client";

import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Mandala from "../components/Mandala";
import { barData, findings } from "../components/data";
import QuestionnaireTab from "../components/QuestionnaireSection";

type TabId = "questionnaire" | "respondents" | "caretaker";

/* ── Main page ─────────────────────────────────────────────────────────── */
export default function AnalysisPage() {
  const [tab, setTab] = useState<TabId>("questionnaire");

  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
      {/* ── HERO ── */}
      <div
        style={{
          background: "var(--deep)",
          padding: "5rem 1.5rem 4rem",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "5%",
            transform: "translateY(-50%) rotate(15deg)",
          }}
        >
          <Mandala size={280} opacity={0.07} />
        </div>

        <div
          className="section-tag"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Research Data
        </div>

        <h1
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Survey & Field Analysis
        </h1>

        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.6)" }}>
          Quantitative and qualitative outcomes from field research
        </p>
      </div>

      {/* ── CONTENT ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1.25rem" }}>

        {/* ── Main Tabs ── */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            borderBottom: "1px solid rgba(92,45,0,0.15)",
            marginBottom: "2rem",
          }}
        >
          {(
            [
              { id: "questionnaire", label: "Questionnaire" },
              { id: "respondents",   label: "Respondents Analysis" },
              { id: "caretaker",     label: "Care Taker Analysis" },
            ] as { id: TabId; label: string }[]
          ).map(({ id, label }) => (
            <button
              key={id}
              className={`analysis-tab ${tab === id ? "active" : ""}`}
              onClick={() => setTab(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ── Tab: Questionnaire ── */}
        {tab === "questionnaire" && <QuestionnaireTab />}

        {/* ── Tab: Respondents Questionnaire Analysis ── */}
        {tab === "respondents" && (
          <div>
            <div className="q-intro-card">
              <strong>Respondents Questionnaire Analysis</strong> — This
              flipbook covers survey responses from community members and
              regular participants of Bhagabata Tungis, capturing their
              experiences, perceptions of social cohesion, and views on
              cultural continuity.
            </div>
            <div className="q-flip-frame">
              <iframe
                src="https://heyzine.com/flip-book/bf5747fbf9.html#page/1"
                allowFullScreen
                allow="clipboard-write"
                scrolling="no"
                title="Respondents Questionnaire Flipbook"
                loading="lazy"
              />
            </div>
            <p className="q-note">
              Use the controls inside the flipbook to navigate pages. For the
              best experience, use the fullscreen button.
            </p>
          </div>
        )}

        {/* ── Tab: Care Taker Questionnaire Analysis ── */}
        {tab === "caretaker" && (
          <div>
            <div className="q-intro-card">
              <strong>Care Taker Questionnaire Analysis</strong> — This
              flipbook presents structured questionnaire responses collected
              from Bhagabata Tungi caretakers across multiple districts of
              Odisha, examining their roles, motivations, and perspectives on
              the institution's function.
            </div>
            <div className="q-flip-frame">
              <iframe
                src="https://heyzine.com/flip-book/0be753795c.html"
                allowFullScreen
                allow="clipboard-write"
                scrolling="no"
                title="Care Taker Questionnaire Flipbook"
                loading="lazy"
              />
            </div>
            <p className="q-note">
              Use the controls inside the flipbook to navigate pages. For the
              best experience, use the fullscreen button.
            </p>
          </div>
        )}
      </div>

      <Footer />

      {/* Shared styles for flipbook panels */}
      <style>{`
        .q-intro-card {
          background: #fff8f0;
          border: 1px solid rgba(92,45,0,0.1);
          border-radius: 12px;
          padding: 1rem 1.25rem;
          margin-bottom: 1.25rem;
          font-size: 0.88rem;
          color: var(--muted, #777);
          line-height: 1.7;
        }
        .q-intro-card strong { color: var(--earth, #5c2d00); }
        .q-flip-frame {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(92,45,0,0.12);
          background: #faf7f3;
          width: 100%;
          box-sizing: border-box;
        }
        .q-flip-frame iframe {
          display: block;
          width: 100%;
          height: 600px;
          border: none;
        }
        @media (max-width: 640px) {
          .q-flip-frame iframe { height: 420px; }
        }
        .q-note {
          font-size: 0.72rem;
          color: var(--muted, #aaa);
          text-align: center;
          margin-top: 0.625rem;
        }
      `}</style>
    </main>
  );
}
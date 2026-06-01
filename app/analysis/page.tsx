"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Mandala from "../components/Mandala";
import QuestionnaireTab from "../components/QuestionnaireSection";

type TabId = "history" | "questionnaire" | "respondents" | "caretaker";

const TABS: { id: TabId; label: string; shortLabel: string }[] = [
  { id: "history", label: "History",           shortLabel: "History" },
  { id: "questionnaire", label: "Questionnaire",           shortLabel: "Questionnaire" },
  { id: "respondents",   label: "Respondents Analysis",    shortLabel: "Respondents Analysis" },
  { id: "caretaker",     label: "Care Taker Analysis",     shortLabel: "Care Taker Analysis" },
];

/* ── Main page ─────────────────────────────────────────────────────────── */
export default function AnalysisPage() {
  const [tab, setTab] = useState<TabId>("questionnaire");

  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <div
        style={{
          background: "var(--deep)",
          padding: "clamp(3rem, 8vw, 5rem) 1.25rem clamp(2.5rem, 6vw, 4rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "clamp(-60px, 5%, 5%)",
            transform: "translateY(-50%) rotate(15deg)",
            pointerEvents: "none",
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
            fontSize: "clamp(1.5rem, 5vw, 3rem)",
            color: "#fff",
            textAlign: "center",
            margin: "0.5rem 0",
            lineHeight: 1.2,
          }}
        >
          Survey & Field Analysis
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.6)",
            fontSize: "clamp(0.82rem, 2vw, 1rem)",
            margin: "0.5rem 0 0",
          }}
        >
          Quantitative and qualitative outcomes from field research
        </p>
      </div>

      {/* ── CONTENT ── */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "clamp(1.5rem, 4vw, 3rem) clamp(1rem, 4vw, 1.25rem)",
        }}
      >

        {/* ── Main Tabs ── */}
        <div
          style={{
            display: "flex",
            gap: 0,
            borderBottom: "1px solid rgba(92,45,0,0.15)",
            marginBottom: "2rem",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch" as any,
            scrollbarWidth: "none" as any,
            msOverflowStyle: "none" as any,
          }}
        >
          {TABS.map(({ id, label, shortLabel }) => (
            <button
              key={id}
              className={`analysis-tab ${tab === id ? "active" : ""}`}
              onClick={() => setTab(id)}
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
            >
              <span className="tab-label-full">{label}</span>
              <span className="tab-label-short">{shortLabel}</span>
            </button>
          ))}
        </div>
  {/* ── Tab: History ── */}
        {tab === "history" && (
          <div>
            <div className="q-intro-card">
              <strong>History</strong> — This
              flipbook covers History of Bhagabata Tungis, The historical development of Bhagavata Tungi is closely associated with the Bhakti Movement in odisha.
            </div>
            <div className="q-flip-frame">
              <iframe
                src="https://heyzine.com/flip-book/be0a3bc134.html"
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

      {/* ── Responsive styles ── */}
      <style>{`
        /* Hide scrollbar on tab strip */
        div::-webkit-scrollbar { display: none; }

        /* Tab label switching */
        .tab-label-short { display: none; }
        .tab-label-full  { display: inline; }

        @media (max-width: 480px) {
          .tab-label-full  { display: none; }
          .tab-label-short { display: inline; }
        }

        /* Intro card */
        .q-intro-card {
          background: #fff8f0;
          border: 1px solid rgba(92,45,0,0.1);
          border-radius: 12px;
          padding: clamp(0.75rem, 3vw, 1rem) clamp(0.875rem, 3vw, 1.25rem);
          margin-bottom: 1.25rem;
          font-size: clamp(0.8rem, 2vw, 0.88rem);
          color: var(--muted, #777);
          line-height: 1.7;
        }
        .q-intro-card strong { color: var(--earth, #5c2d00); }

        /* Flipbook frame */
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
          height: clamp(320px, 55vw, 700px);
          border: none;
        }

        /* Note text */
        .q-note {
          font-size: clamp(0.68rem, 1.8vw, 0.72rem);
          color: var(--muted, #aaa);
          text-align: center;
          margin-top: 0.625rem;
          padding: 0 1rem;
        }

        /* analysis-tab base (inherits from global, patch responsive) */
        @media (max-width: 480px) {
          .analysis-tab {
            font-size: 0.68rem !important;
            padding: 8px 10px !important;
            letter-spacing: 0.04em !important;
          }
        }
      `}</style>
    </main>
  );
}
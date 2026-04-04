"use client";

import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Mandala from "../components/Mandala";
import { barData, findings } from "../components/data";
import QuestionnaireTab from "../components/QuestionnaireSection";

type TabId = "findings" | "data" | "questionnaire";

/* ── Thematic findings ─────────────────────────────────────────────────── */
const thematicFindings = [
  {
    title: "Social Cohesion",
    text: "The research confirms that Bhagabata Tungis serve as primary spaces for building and maintaining social cohesion. Regular attendance correlates strongly with participants' sense of community belonging and trust in neighbors.",
  },
  {
    title: "Ethical Value Transmission",
    text: "Through narrative recitation and communal discussion of the Bhagabata, participants internalize principles of dharma and righteous conduct.",
  },
  {
    title: "Inclusivity Metrics",
    text: "Participation across caste boundaries is higher than in other institutions, and women's roles are expanding.",
  },
  {
    title: "Modernization Pressures",
    text: "Urbanization and migration trends are impacting participation levels, indicating need for revitalization.",
  },
];

/* ── Bar chart ─────────────────────────────────────────────────────────── */
function BarChart() {
  const chartRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={chartRef}
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: "2rem",
        marginBottom: "2rem",
        boxShadow: "0 4px 20px rgba(92,45,0,0.06)",
      }}
    >
      <h3
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "1.05rem",
          color: "var(--earth)",
          marginBottom: "1.5rem",
        }}
      >
        Survey Outcomes — % of Respondents Reporting Positive Impact
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
        {barData.map((b: { label: string; value: number }, i: number) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                fontSize: "0.78rem",
                color: "var(--muted)",
                width: 180,
                textAlign: "right",
              }}
            >
              {b.label}
            </div>

            <div className="bar-track" style={{ flex: 1 }}>
              <div
                className="bar-fill"
                style={{
                  width: visible ? `${b.value}%` : "0%",
                  transitionDelay: `${i * 120}ms`,
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "var(--deep)",
                  }}
                >
                  {b.value}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main page ─────────────────────────────────────────────────────────── */
export default function AnalysisPage() {
  const [tab, setTab] = useState<TabId>("findings");

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

        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Quantitative and qualitative outcomes from field research
        </p>
      </div>

      {/* ── CONTENT ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1.25rem" }}>
        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            borderBottom: "1px solid rgba(92,45,0,0.15)",
            marginBottom: "2rem",
          }}
        >
          {(["findings", "data", "questionnaire"] as TabId[]).map((t) => (
            <button
              key={t}
              className={`analysis-tab ${tab === t ? "active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t === "findings"
                ? "Key Findings"
                : t === "data"
                ? "Survey Data"
                : "Questionnaire"}
            </button>
          ))}
        </div>

        {/* FINDINGS */}
        {tab === "findings" && (
          <div>
            <div style={{ display: "grid", gap: "1rem" }}>
              {findings.map((f: any, i: number) => (
                <div key={i} style={{ background: "#fff", padding: "1.5rem", borderRadius: 10 }}>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>

            <h2 style={{ marginTop: "2rem" }}>Thematic Analysis</h2>
            {thematicFindings.map((item, i) => (
              <div key={i} style={{ background: "#fff", padding: "1.5rem", marginTop: "1rem" }}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* DATA */}
        {tab === "data" && (
          <div>
            <BarChart />
          </div>
        )}

        {/* ✅ QUESTIONNAIRE (UPDATED) */}
        {tab === "questionnaire" && (
          <div>
            {/* Optional Intro */}
            <div
              style={{
                background: "#fff8f0",
                padding: "1.5rem",
                borderRadius: 12,
                marginBottom: "1.5rem",
              }}
            >
              <p>
                This questionnaire was conducted across multiple districts of
                Odisha to understand the impact of Bhagabata Tungi.
              </p>
            </div>

            {/* Reusable Component */}
            <QuestionnaireTab />
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
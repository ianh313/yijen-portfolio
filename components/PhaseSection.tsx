"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";

interface PhaseSectionProps {
  phaseNumber: string;
  phaseEnLabel: string;
  phaseZhLabel: string;
  phaseId: string;
  period: string;
  company: string;
  role: string;
  location?: string;
  workAreas: string[];
  insight?: string;
  detail: React.ReactNode;
  isDetailOpen: boolean;
  onExplore: () => void;
  onClose: () => void;
}

export default function PhaseSection({
  phaseNumber, phaseEnLabel, phaseZhLabel, phaseId,
  period, company, role, location,
  workAreas, insight,
  detail,
  isDetailOpen, onExplore, onClose,
}: PhaseSectionProps) {
  const closeRef   = useRef<HTMLButtonElement>(null);
  const exploreRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isDetailOpen) {
      setTimeout(() => closeRef.current?.focus(), 60);
    }
  }, [isDetailOpen]);

  return (
    <section
      id={phaseId}
      className={`phase-section${isDetailOpen ? " detail-open" : ""}`}
      data-chapter={phaseId}
      aria-label={`Phase ${phaseNumber}: ${phaseEnLabel}`}
    >
      <div
        className="j-node"
        data-node={phaseId}
        style={{ top: "30%", left: "clamp(1rem,3vw,2.5rem)", position: "absolute" }}
      />

      {/* OVERVIEW — experience-first */}
      <div className="phase-overview">

        {/* Phase label — quiet orientation */}
        <Reveal delay={0}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.5rem",
                letterSpacing: "0.18em",
                color: "var(--muted)",
                opacity: 0.45,
              }}
            >
              {phaseNumber}
            </span>
            <span
              style={{
                width: "1.25rem",
                height: "1px",
                background: "var(--accent)",
                opacity: 0.3,
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.5rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent)",
                opacity: 0.7,
              }}
            >
              {phaseEnLabel}
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.625rem",
                color: "var(--muted)",
                opacity: 0.35,
              }}
            >
              {phaseZhLabel}
            </span>
          </div>
        </Reveal>

        {/* Company — dominant visual anchor */}
        <Reveal delay={40}>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.875rem,4.5vw,3rem)",
              fontWeight: 300,
              color: "var(--fg)",
              lineHeight: 1.25,
              marginBottom: "0.75rem",
            }}
          >
            {company}
          </p>
        </Reveal>

        {/* Role — strong secondary */}
        <Reveal delay={80}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(0.8125rem,1.5vw,1rem)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--fg)",
              opacity: 0.75,
              marginBottom: "0.4rem",
            }}
          >
            {role}
          </p>
        </Reveal>

        {/* Meta: period + location */}
        <Reveal delay={100}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8125rem",
              color: "var(--muted)",
              opacity: 0.55,
              marginBottom: "2.5rem",
            }}
          >
            {period}{location ? ` · ${location}` : ""}
          </p>
        </Reveal>

        {/* Work areas — factual, clean list */}
        <Reveal delay={140}>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              marginBottom: "2.5rem",
            }}
          >
            {workAreas.map((area, i) => (
              <li
                key={i}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem",
                  color: "var(--fg)",
                  lineHeight: 1.75,
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.6rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "3px",
                    height: "3px",
                    borderRadius: "9999px",
                    background: "var(--accent)",
                    flexShrink: 0,
                    marginTop: "0.55rem",
                  }}
                  aria-hidden="true"
                />
                {area}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Insight — small, quiet, annotative */}
        {insight && (
          <Reveal delay={210}>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "0.875rem",
                fontStyle: "italic",
                color: "var(--muted)",
                lineHeight: 1.9,
                opacity: 0.7,
                whiteSpace: "pre-line",
                marginBottom: "0.5rem",
              }}
            >
              {insight}
            </p>
          </Reveal>
        )}

        {!isDetailOpen && (
          <Reveal delay={280}>
            <button
              ref={exploreRef}
              onClick={onExplore}
              className="explore-btn"
              style={{ marginTop: insight ? "1.75rem" : "2rem" }}
              aria-expanded="false"
              aria-controls={`${phaseId}-detail`}
            >
              <span>EXPLORE THIS PHASE</span>
              <span className="explore-btn-arrow" aria-hidden="true" />
            </button>
          </Reveal>
        )}
      </div>

      {/* DETAIL */}
      <div
        id={`${phaseId}-detail`}
        className={`detail-expand${isDetailOpen ? " open" : ""}`}
        role="region"
        aria-label={`${phaseEnLabel} details`}
        aria-hidden={!isDetailOpen}
      >
        <div className="detail-expand-inner">
          <div className="detail-panel">
            <button
              ref={closeRef}
              onClick={onClose}
              className="back-btn"
              aria-label="Close detail panel"
            >
              ← BACK
            </button>
            {detail}
          </div>
        </div>
      </div>
    </section>
  );
}

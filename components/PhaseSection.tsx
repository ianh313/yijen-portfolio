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
  mainStatement: string;
  supportingLine?: string;
  detail: React.ReactNode;
  isDetailOpen: boolean;
  onExplore: () => void;
  onClose: () => void;
}

export default function PhaseSection({
  phaseNumber, phaseEnLabel, phaseZhLabel, phaseId,
  period, company, role, location,
  mainStatement, supportingLine,
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

      {/* OVERVIEW — sparse, one main idea */}
      <div className="phase-overview">
        <Reveal delay={0}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.5rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--muted)",
                opacity: 0.6,
              }}
            >
              {phaseNumber}
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.5625rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              {phaseEnLabel}
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.6875rem",
                color: "var(--muted)",
                opacity: 0.45,
              }}
            >
              {phaseZhLabel}
            </span>
          </div>
        </Reveal>

        <Reveal delay={40}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8125rem",
              color: "var(--muted)",
              opacity: 0.55,
              letterSpacing: "0.02em",
              lineHeight: 1.6,
              marginBottom: "2.5rem",
            }}
          >
            {period}
            {location ? ` · ${location}` : ""}
            {" · "}{company}
            {" · "}{role}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem,3.75vw,2.25rem)",
              fontWeight: 300,
              color: "var(--fg)",
              lineHeight: 1.45,
              whiteSpace: "pre-line",
              marginBottom: "1.75rem",
            }}
          >
            {mainStatement}
          </p>
        </Reveal>

        {supportingLine && (
          <Reveal delay={180}>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1rem,2vw,1.1875rem)",
                color: "var(--muted)",
                lineHeight: 1.8,
                whiteSpace: "pre-line",
                marginBottom: "0.5rem",
              }}
            >
              {supportingLine}
            </p>
          </Reveal>
        )}

        {!isDetailOpen && (
          <Reveal delay={260}>
            <button
              ref={exploreRef}
              onClick={onExplore}
              className="explore-btn"
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

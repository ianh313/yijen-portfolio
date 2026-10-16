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
  metaNote?: string;
  visual?: React.ReactNode;
  detail: React.ReactNode;
  isDetailOpen: boolean;
  onExplore: () => void;
  onClose: () => void;
}

export default function PhaseSection({
  phaseNumber, phaseEnLabel, phaseZhLabel, phaseId,
  period, company, role, location,
  mainStatement, supportingLine, metaNote,
  visual, detail,
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
      {/* Journey line node */}
      <div
        className="j-node"
        data-node={phaseId}
        style={{ top: "30%", left: "clamp(1rem,3vw,2.5rem)", position: "absolute" }}
      />

      {/* OVERVIEW */}
      <div className="phase-overview">
        <Reveal delay={0}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.5625rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              {phaseNumber}
            </span>
            <span className="chapter-label">{phaseEnLabel}</span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                color: "var(--muted)",
                opacity: 0.6,
              }}
            >
              {phaseZhLabel}
            </span>
          </div>
        </Reveal>

        <Reveal delay={50}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              color: "var(--muted)",
              letterSpacing: "0.03em",
              lineHeight: 1.6,
              marginBottom: "1.25rem",
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
              fontSize: "clamp(1.375rem,3.5vw,2rem)",
              fontWeight: 300,
              color: "var(--fg)",
              lineHeight: 1.45,
              whiteSpace: "pre-line",
              marginBottom: "1rem",
            }}
          >
            {mainStatement}
          </p>
        </Reveal>

        {supportingLine && (
          <Reveal delay={160}>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(0.9375rem,2vw,1.125rem)",
                color: "var(--muted)",
                lineHeight: 1.75,
                whiteSpace: "pre-line",
                marginBottom: "0.75rem",
              }}
            >
              {supportingLine}
            </p>
          </Reveal>
        )}

        {metaNote && (
          <Reveal delay={200}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                color: "var(--muted)",
                opacity: 0.55,
                letterSpacing: "0.04em",
                marginTop: "0.5rem",
              }}
            >
              {metaNote}
            </p>
          </Reveal>
        )}

        {visual && (
          <Reveal delay={220}>
            <div className="diagram-container">{visual}</div>
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

      {/* DETAIL (expandable) */}
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

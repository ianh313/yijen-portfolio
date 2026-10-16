"use client";

import { useState, useEffect, useCallback } from "react";
import Hero from "./Hero";
import JourneyLine from "./JourneyLine";
import ThemeToggle from "./ThemeToggle";
import PhaseRail from "./PhaseRail";
import MobilePhaseIndicator from "./MobilePhaseIndicator";
import PhaseSection from "./PhaseSection";
import BreakpointSequence from "./BreakpointSequence";
import TrackingPayoff from "./TrackingPayoff";
import MethodSection from "./MethodSection";
import FutureSection from "./FutureSection";
import ClosingSection from "./ClosingSection";

import ConnectionDiagram  from "./visuals/ConnectionDiagram";
import TranslationDiagram from "./visuals/TranslationDiagram";
import BreakpointDiagram  from "./visuals/BreakpointDiagram";
import CrossingDiagram    from "./visuals/CrossingDiagram";
import SystemDiagram      from "./visuals/SystemDiagram";

import { ch1, ch2, ch3, ch4, ch5, phaseDetails, PHASES, PhaseId } from "@/content/chapters";

// ── Shared detail primitives ────────────────────────────────────────────────

function DSectionHeading({ children }: { children: React.ReactNode }) {
  return <div className="detail-section-heading">{children}</div>;
}

function DBody({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--fg)", lineHeight: 1.8 }}>
      {children}
    </p>
  );
}

function EvidenceList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item, i) => (
        <li key={i} className="evidence-item" style={{ marginBottom: "0.65rem" }}>
          <span className="evidence-dot" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Insight rendered as a small annotation — clearly subordinate to evidence
function InsightAnnotation({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: "0.875rem",
        fontStyle: "italic",
        color: "var(--muted)",
        lineHeight: 1.9,
        borderLeft: "2px solid var(--accent)",
        paddingLeft: "1rem",
        opacity: 0.72,
        whiteSpace: "pre-line",
      }}
    >
      {children}
    </p>
  );
}

function DiagramBlock({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem", opacity: 0.88 }}>
      {children}
    </div>
  );
}

// ── Per-phase detail panels — EXPERIENCE first, insight second ───────────────

function ConnectionDetail() {
  const d = phaseDetails.connection;
  return (
    <>
      {/* Evidence — primary, prominent */}
      <DSectionHeading>EVIDENCE</DSectionHeading>
      <EvidenceList items={d.evidence as string[]} />

      {/* Process — factual work narrative */}
      <DSectionHeading>PROCESS</DSectionHeading>
      <DBody>{d.process}</DBody>

      {/* Narrative from ch1 — "誰會停下來" */}
      <DSectionHeading>REFLECTION</DSectionHeading>
      <DBody>{ch1.narrative}</DBody>

      {/* Diagram */}
      <DSectionHeading>DIAGRAM</DSectionHeading>
      <DiagramBlock><ConnectionDiagram /></DiagramBlock>

      {/* Insight — annotation, smallest weight */}
      <div style={{ marginTop: "2rem" }}>
        <InsightAnnotation>{d.insight}</InsightAnnotation>
      </div>

      {/* Shift */}
      <div style={{ marginTop: "1.5rem" }}>
        <InsightAnnotation>{d.shift}</InsightAnnotation>
      </div>
    </>
  );
}

function TranslationDetail() {
  const d = phaseDetails.translation;
  return (
    <>
      <DSectionHeading>EVIDENCE</DSectionHeading>
      <EvidenceList items={d.evidence as string[]} />

      <DSectionHeading>PROCESS</DSectionHeading>
      <DBody>{d.process}</DBody>

      <DSectionHeading>DIAGRAM — 比例轉換</DSectionHeading>
      <DiagramBlock><TranslationDiagram /></DiagramBlock>

      <div style={{ marginTop: "2rem" }}>
        <InsightAnnotation>{d.insight}</InsightAnnotation>
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <InsightAnnotation>{d.shift}</InsightAnnotation>
      </div>
    </>
  );
}

function BreakpointDetail() {
  const d = phaseDetails.breakpoint;
  return (
    <>
      <DSectionHeading>EVIDENCE</DSectionHeading>
      <EvidenceList items={d.evidence as string[]} />

      <DSectionHeading>PROCESS</DSectionHeading>
      <DBody>{d.process}</DBody>

      <DSectionHeading>DIAGRAM — 資訊斷鏈</DSectionHeading>
      <DiagramBlock><BreakpointDiagram /></DiagramBlock>

      <div style={{ marginTop: "2rem" }}>
        <InsightAnnotation>{d.insight}</InsightAnnotation>
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <InsightAnnotation>{d.shift}</InsightAnnotation>
      </div>
    </>
  );
}

function CrossingDetail() {
  const d = phaseDetails.crossing;
  return (
    <>
      <DSectionHeading>EVIDENCE</DSectionHeading>
      <EvidenceList items={d.evidence as string[]} />

      <DSectionHeading>PROCESS</DSectionHeading>
      <DBody>{d.process}</DBody>

      <DSectionHeading>DIAGRAM — 邊界跨越</DSectionHeading>
      <DiagramBlock><CrossingDiagram /></DiagramBlock>

      <div style={{ marginTop: "2rem" }}>
        <InsightAnnotation>{d.insight}</InsightAnnotation>
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <InsightAnnotation>{d.shift}</InsightAnnotation>
      </div>
    </>
  );
}

function SystemDetail() {
  const d = phaseDetails.system;
  return (
    <>
      {/* All 5 work sections — experience is the main content */}
      {d.sections.map((section, i) => (
        <div key={i}>
          <DSectionHeading>{section.label} — {section.zh}</DSectionHeading>
          <EvidenceList items={section.facts} />
        </div>
      ))}

      {/* Diagram */}
      <DSectionHeading>DIAGRAM — 追蹤鏈</DSectionHeading>
      <DiagramBlock><SystemDiagram /></DiagramBlock>

      {/* Outcome */}
      <DSectionHeading>OUTCOME</DSectionHeading>
      <DBody>{d.shift}</DBody>

      {/* Tags */}
      <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {d.tags.map((tag) => (
          <span key={tag} className="skill-tag">{tag}</span>
        ))}
      </div>

      {/* Insight annotation — last, smallest */}
      <div style={{ marginTop: "2.5rem" }}>
        <InsightAnnotation>{d.insight}</InsightAnnotation>
      </div>
    </>
  );
}

// ── Main SiteContent ─────────────────────────────────────────────────────────

const PHASE_IDS = PHASES.map((p) => p.id) as PhaseId[];

export default function SiteContent() {
  const [openPhaseId, setOpenPhaseId]     = useState<PhaseId | null>(null);
  const [activePhaseId, setActivePhaseId] = useState<PhaseId>(PHASE_IDS[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    PHASE_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActivePhaseId(id); },
        { threshold: 0.25, rootMargin: "-5% 0px -5% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      history.replaceState(null, "", `#${activePhaseId}`);
    }
  }, [activePhaseId]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && openPhaseId) setOpenPhaseId(null);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [openPhaseId]);

  const navigateToPhase = useCallback((id: PhaseId) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleExplore = useCallback((id: PhaseId) => {
    setOpenPhaseId((prev) => (prev === id ? null : id));
  }, []);

  const handleClose = useCallback(() => {
    setOpenPhaseId(null);
  }, []);

  return (
    <main className="relative" style={{ background: "var(--bg)", color: "var(--fg)", overflowX: "hidden" }}>
      <ThemeToggle />
      <JourneyLine />
      <PhaseRail activePhaseId={activePhaseId} openPhaseId={openPhaseId} onNavigate={navigateToPhase} />
      <MobilePhaseIndicator activePhaseId={activePhaseId} />

      <Hero />

      {/* Phase 01: CONNECTION */}
      <PhaseSection
        phaseNumber="01"
        phaseEnLabel={ch1.chapterLabel}
        phaseZhLabel="連結"
        phaseId="connection"
        period={ch1.period}
        company={ch1.company}
        role={ch1.role}
        workAreas={ch1.workAreas}
        insight={ch1.overviewInsight}
        detail={<ConnectionDetail />}
        isDetailOpen={openPhaseId === "connection"}
        onExplore={() => handleExplore("connection")}
        onClose={handleClose}
      />

      {/* Phase 02: TRANSLATION */}
      <PhaseSection
        phaseNumber="02"
        phaseEnLabel={ch2.chapterLabel}
        phaseZhLabel="轉譯"
        phaseId="translation"
        period={ch2.period}
        company={ch2.company}
        location={ch2.location}
        role={ch2.role}
        workAreas={ch2.workAreas}
        insight={ch2.overviewInsight}
        detail={<TranslationDetail />}
        isDetailOpen={openPhaseId === "translation"}
        onExplore={() => handleExplore("translation")}
        onClose={handleClose}
      />

      {/* Cinematic breakpoint scroll sequence */}
      <BreakpointSequence />

      {/* Phase 03: BREAKPOINT */}
      <PhaseSection
        phaseNumber="03"
        phaseEnLabel={ch3.chapterLabel}
        phaseZhLabel="斷點"
        phaseId="breakpoint"
        period={ch3.period}
        company={ch3.company}
        role={ch3.role}
        workAreas={ch3.workAreas}
        insight={ch3.overviewInsight}
        detail={<BreakpointDetail />}
        isDetailOpen={openPhaseId === "breakpoint"}
        onExplore={() => handleExplore("breakpoint")}
        onClose={handleClose}
      />

      {/* Phase 04: CROSSING */}
      <PhaseSection
        phaseNumber="04"
        phaseEnLabel={ch4.chapterLabel}
        phaseZhLabel="跨界"
        phaseId="crossing"
        period={ch4.period}
        company={ch4.company}
        location={ch4.location}
        role={ch4.role}
        workAreas={ch4.workAreas}
        insight={ch4.overviewInsight}
        detail={<CrossingDetail />}
        isDetailOpen={openPhaseId === "crossing"}
        onExplore={() => handleExplore("crossing")}
        onClose={handleClose}
      />

      {/* Phase 05: SYSTEM */}
      <PhaseSection
        phaseNumber="05"
        phaseEnLabel="SYSTEM"
        phaseZhLabel="系統"
        phaseId="system"
        period={ch5.period}
        company="ArkiTeki"
        role={ch5.role}
        workAreas={ch5.workAreas}
        insight={ch5.overviewInsight}
        detail={<SystemDetail />}
        isDetailOpen={openPhaseId === "system"}
        onExplore={() => handleExplore("system")}
        onClose={handleClose}
      />

      <TrackingPayoff />
      <MethodSection />
      <FutureSection />
      <ClosingSection />
    </main>
  );
}

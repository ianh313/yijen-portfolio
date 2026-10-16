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

// ── Shared detail primitives ─────────────────────────────────────────────────

function DSectionHeading({ children }: { children: React.ReactNode }) {
  return <div className="detail-section-heading">{children}</div>;
}

function DText({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "0.9375rem",
        color: "var(--fg)",
        lineHeight: 1.8,
      }}
    >
      {children}
    </p>
  );
}

function DSerif({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: "0.9375rem",
        color: "var(--fg)",
        lineHeight: 1.85,
      }}
    >
      {children}
    </p>
  );
}

function DMuted({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "0.9375rem",
        color: "var(--muted)",
        lineHeight: 1.8,
        fontStyle: "italic",
      }}
    >
      {children}
    </p>
  );
}

function EvidenceList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item, i) => (
        <li key={i} className="evidence-item" style={{ marginBottom: "0.55rem" }}>
          <span className="evidence-dot" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ── Per-phase detail panels ──────────────────────────────────────────────────

function ConnectionDetail() {
  const d = phaseDetails.connection;
  return (
    <>
      <DSectionHeading>INSIGHT</DSectionHeading>
      <DSerif>{d.insight}</DSerif>
      <DSectionHeading>EVIDENCE</DSectionHeading>
      <EvidenceList items={d.evidence as string[]} />
      <DSectionHeading>PROCESS</DSectionHeading>
      <DText>{d.process}</DText>
      <DSectionHeading>SHIFT →</DSectionHeading>
      <DMuted>{d.shift}</DMuted>
    </>
  );
}

function TranslationDetail() {
  const d = phaseDetails.translation;
  return (
    <>
      <DSectionHeading>INSIGHT</DSectionHeading>
      <DSerif>{d.insight}</DSerif>
      <DSectionHeading>EVIDENCE</DSectionHeading>
      <EvidenceList items={d.evidence as string[]} />
      <DSectionHeading>PROCESS</DSectionHeading>
      <DText>{d.process}</DText>
      <DSectionHeading>VISUAL — 比例轉換</DSectionHeading>
      <div className="diagram-container"><TranslationDiagram /></div>
      <DSectionHeading>SHIFT →</DSectionHeading>
      <DMuted>{d.shift}</DMuted>
    </>
  );
}

function BreakpointDetail() {
  const d = phaseDetails.breakpoint;
  return (
    <>
      <DSectionHeading>INSIGHT</DSectionHeading>
      <DSerif>{d.insight}</DSerif>
      <DSectionHeading>VISUAL — 資訊斷鏈</DSectionHeading>
      <div className="diagram-container"><BreakpointDiagram /></div>
      <DSectionHeading>EVIDENCE</DSectionHeading>
      <EvidenceList items={d.evidence as string[]} />
      <DSectionHeading>PROCESS</DSectionHeading>
      <DText>{d.process}</DText>
      <DSectionHeading>SHIFT →</DSectionHeading>
      <DMuted>{d.shift}</DMuted>
    </>
  );
}

function CrossingDetail() {
  const d = phaseDetails.crossing;
  return (
    <>
      <DSectionHeading>INSIGHT</DSectionHeading>
      <DSerif>{d.insight}</DSerif>
      <DSectionHeading>VISUAL — 邊界跨越</DSectionHeading>
      <div className="diagram-container"><CrossingDiagram /></div>
      <DSectionHeading>EVIDENCE</DSectionHeading>
      <EvidenceList items={d.evidence as string[]} />
      <DSectionHeading>PROCESS</DSectionHeading>
      <DText>{d.process}</DText>
      <DSectionHeading>SHIFT →</DSectionHeading>
      <DMuted>{d.shift}</DMuted>
    </>
  );
}

function SystemDetail() {
  const d = phaseDetails.system;
  return (
    <>
      <DSectionHeading>INSIGHT</DSectionHeading>
      <DSerif>{d.insight}</DSerif>
      <DSectionHeading>VISUAL — 追蹤鏈</DSectionHeading>
      <div className="diagram-container"><SystemDiagram /></div>
      {d.sections.map((section, i) => (
        <div key={i}>
          <DSectionHeading>{section.label} — {section.zh}</DSectionHeading>
          <EvidenceList items={section.facts} />
        </div>
      ))}
      <DSectionHeading>OUTCOME</DSectionHeading>
      <DMuted>{d.shift}</DMuted>
      <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {d.tags.map((tag) => (
          <span key={tag} className="skill-tag">{tag}</span>
        ))}
      </div>
    </>
  );
}

// ── Main SiteContent ─────────────────────────────────────────────────────────

const PHASE_IDS = PHASES.map((p) => p.id) as PhaseId[];

export default function SiteContent() {
  const [openPhaseId, setOpenPhaseId]     = useState<PhaseId | null>(null);
  const [activePhaseId, setActivePhaseId] = useState<PhaseId>(PHASE_IDS[0]);

  // Active phase via IntersectionObserver
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

  // Hash update on active phase
  useEffect(() => {
    if (typeof window !== "undefined") {
      history.replaceState(null, "", `#${activePhaseId}`);
    }
  }, [activePhaseId]);

  // ESC closes detail
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
    <main
      className="relative"
      style={{ background: "var(--bg)", color: "var(--fg)", overflowX: "hidden" }}
    >
      <ThemeToggle />
      <JourneyLine />
      <PhaseRail
        activePhaseId={activePhaseId}
        openPhaseId={openPhaseId}
        onNavigate={navigateToPhase}
      />
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
        mainStatement={ch1.openStatement}
        supportingLine={ch1.narrative}
        metaNote={ch1.insight}
        visual={<ConnectionDiagram />}
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
        mainStatement={`${ch2.fullScreenA}\n${ch2.fullScreenB}`}
        supportingLine={ch2.subStatement}
        metaNote={ch2.narrative}
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
        mainStatement={ch3.breakpointStatement}
        supportingLine={ch3.narrative}
        metaNote={ch3.insight}
        visual={<BreakpointDiagram />}
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
        mainStatement={ch4.openQuestion}
        supportingLine={`${ch4.pivot}\n\n${ch4.keyInsight}`}
        metaNote={ch4.context}
        visual={<CrossingDiagram />}
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
        company={ch5.company}
        role={ch5.role}
        mainStatement={ch5.newQuestion}
        supportingLine={ch5.pivot}
        metaNote={ch5.context}
        visual={<SystemDiagram />}
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

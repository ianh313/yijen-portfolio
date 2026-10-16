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

function DText({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--fg)", lineHeight: 1.8 }}>
      {children}
    </p>
  );
}

function DSerif({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ fontFamily: "var(--font-serif)", fontSize: "0.9375rem", color: "var(--fg)", lineHeight: 1.85, whiteSpace: "pre-line", ...style }}>
      {children}
    </p>
  );
}

function DPullQuote({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(1.25rem,2.5vw,1.625rem)",
        fontWeight: 300,
        color: "var(--fg)",
        lineHeight: 1.55,
        marginBottom: "1.5rem",
      }}
    >
      {children}
    </p>
  );
}

function DMuted({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--muted)", lineHeight: 1.8, fontStyle: "italic" }}>
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

function DiagramBlock({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem", opacity: 0.9 }}>
      {children}
    </div>
  );
}

// ── Per-phase detail panels ──────────────────────────────────────────────────

function ConnectionDetail() {
  const d = phaseDetails.connection;
  return (
    <>
      <DiagramBlock><ConnectionDiagram /></DiagramBlock>
      <DSerif>{ch1.narrative}</DSerif>
      <div style={{ marginTop: "1.25rem", marginBottom: "2rem" }}>
        <DMuted>{ch1.insight}</DMuted>
      </div>
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
      <DiagramBlock><TranslationDiagram /></DiagramBlock>
      <DSerif>{d.insight}</DSerif>
      <div style={{ marginTop: "2rem" }}>
        <DSectionHeading>EVIDENCE</DSectionHeading>
        <EvidenceList items={d.evidence as string[]} />
        <DSectionHeading>PROCESS</DSectionHeading>
        <DText>{d.process}</DText>
        <DSectionHeading>SHIFT →</DSectionHeading>
        <DMuted>{d.shift}</DMuted>
      </div>
    </>
  );
}

function BreakpointDetail() {
  const d = phaseDetails.breakpoint;
  return (
    <>
      <DiagramBlock><BreakpointDiagram /></DiagramBlock>
      <DSerif>{d.insight}</DSerif>
      <div style={{ marginTop: "2rem" }}>
        <DSectionHeading>EVIDENCE</DSectionHeading>
        <EvidenceList items={d.evidence as string[]} />
        <DSectionHeading>PROCESS</DSectionHeading>
        <DText>{d.process}</DText>
        <DSectionHeading>SHIFT →</DSectionHeading>
        <DMuted>{d.shift}</DMuted>
      </div>
    </>
  );
}

function CrossingDetail() {
  const d = phaseDetails.crossing;
  return (
    <>
      <DiagramBlock><CrossingDiagram /></DiagramBlock>
      <DSerif>{d.insight}</DSerif>
      <div style={{ marginTop: "2rem" }}>
        <DSectionHeading>EVIDENCE</DSectionHeading>
        <EvidenceList items={d.evidence as string[]} />
        <DSectionHeading>PROCESS</DSectionHeading>
        <DText>{d.process}</DText>
        <DSectionHeading>SHIFT →</DSectionHeading>
        <DMuted>{d.shift}</DMuted>
      </div>
    </>
  );
}

function SystemDetail() {
  const d = phaseDetails.system;
  // insight starts with "不是帶著答案回去，而是帶著問題回去。\n\n..."
  const insightParts = d.insight.split("\n\n");
  return (
    <>
      <DPullQuote>{insightParts[0]}</DPullQuote>
      {insightParts[1] && <DSerif>{insightParts[1]}</DSerif>}
      <div style={{ marginTop: "2rem", marginBottom: "2.5rem" }}>
        <DiagramBlock><SystemDiagram /></DiagramBlock>
      </div>
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
        mainStatement={ch1.openStatement}
        supportingLine={ch1.insight}
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
        supportingLine="是不是有些事情，本來不應該這麼容易消失？"
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
        supportingLine={ch4.pivot}
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

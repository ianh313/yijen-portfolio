"use client";

import { PHASES, PhaseId } from "@/content/chapters";

interface PhaseRailProps {
  activePhaseId: PhaseId | null;
  openPhaseId: PhaseId | null;
  onNavigate: (id: PhaseId) => void;
}

export default function PhaseRail({ activePhaseId, openPhaseId, onNavigate }: PhaseRailProps) {
  return (
    <nav className="phase-rail" aria-label="Career phases">
      {PHASES.map((phase) => {
        const isActive = activePhaseId === phase.id;
        const isOpen   = openPhaseId   === phase.id;
        return (
          <button
            key={phase.id}
            onClick={() => onNavigate(phase.id as PhaseId)}
            className={`phase-rail-item${isActive ? " active" : ""}${isOpen ? " detail-open" : ""}`}
            aria-label={`${phase.en} — ${phase.zh}`}
            aria-current={isActive ? "true" : undefined}
          >
            <span className="phase-rail-dot" aria-hidden="true" />
            <span className="phase-rail-num">{phase.number}</span>
            <span className="phase-rail-label">{phase.en}</span>
          </button>
        );
      })}
    </nav>
  );
}

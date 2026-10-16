import { PHASES, PhaseId } from "@/content/chapters";

interface MobilePhaseIndicatorProps {
  activePhaseId: PhaseId | null;
}

export default function MobilePhaseIndicator({ activePhaseId }: MobilePhaseIndicatorProps) {
  const index = PHASES.findIndex((p) => p.id === activePhaseId);
  const phase = PHASES[index];
  if (!phase || index < 0) return null;

  return (
    <div className="mobile-phase-indicator" aria-hidden="true">
      <span className="mobile-phase-num">
        {String(index + 1).padStart(2, "0")} / {String(PHASES.length).padStart(2, "0")}
      </span>
      <span className="mobile-phase-label">{phase.en}</span>
    </div>
  );
}

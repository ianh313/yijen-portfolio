export default function TranslationDiagram() {
  return (
    <svg
      viewBox="0 0 280 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: "280px" }}
      aria-hidden="true"
    >
      {/* Building outline (small, left) */}
      <rect x="10" y="30" width="55" height="90" stroke="var(--fg)" strokeWidth="0.75" opacity="0.35" />
      <rect x="22" y="55" width="10" height="14" stroke="var(--fg)" strokeWidth="0.5" opacity="0.3" />
      <rect x="38" y="55" width="10" height="14" stroke="var(--fg)" strokeWidth="0.5" opacity="0.3" />
      <rect x="22" y="78" width="10" height="14" stroke="var(--fg)" strokeWidth="0.5" opacity="0.3" />
      <rect x="38" y="78" width="10" height="14" stroke="var(--fg)" strokeWidth="0.5" opacity="0.3" />
      <rect x="28" y="100" width="14" height="20" stroke="var(--fg)" strokeWidth="0.5" opacity="0.3" />
      {/* Zoom lines */}
      <line x1="65" y1="55" x2="100" y2="28" stroke="var(--accent)" strokeWidth="0.75" opacity="0.4" />
      <line x1="65" y1="85" x2="100" y2="132" stroke="var(--accent)" strokeWidth="0.75" opacity="0.4" />
      {/* Detail panel (large, right) */}
      <rect x="100" y="22" width="168" height="116" stroke="var(--fg)" strokeWidth="0.75" opacity="0.35" />
      {/* Window detail */}
      <rect x="128" y="42" width="50" height="76" stroke="var(--fg)" strokeWidth="1" opacity="0.5" />
      <line x1="153" y1="42" x2="153" y2="118" stroke="var(--fg)" strokeWidth="0.5" opacity="0.35" />
      <line x1="128" y1="80" x2="178" y2="80" stroke="var(--fg)" strokeWidth="0.5" opacity="0.35" />
      {/* Dimension annotation – vertical */}
      <line x1="186" y1="42" x2="186" y2="118" stroke="var(--muted)" strokeWidth="0.5" opacity="0.45" />
      <line x1="183" y1="42"  x2="189" y2="42"  stroke="var(--muted)" strokeWidth="0.5" opacity="0.45" />
      <line x1="183" y1="118" x2="189" y2="118" stroke="var(--muted)" strokeWidth="0.5" opacity="0.45" />
      <text x="191" y="84" fontSize="6" fill="var(--muted)" fontFamily="var(--font-inter)">76mm</text>
      {/* Dimension annotation – horizontal */}
      <line x1="128" y1="128" x2="178" y2="128" stroke="var(--muted)" strokeWidth="0.5" opacity="0.45" />
      <line x1="128" y1="125" x2="128" y2="131" stroke="var(--muted)" strokeWidth="0.5" opacity="0.45" />
      <line x1="178" y1="125" x2="178" y2="131" stroke="var(--muted)" strokeWidth="0.5" opacity="0.45" />
      <text x="137" y="142" fontSize="6" fill="var(--muted)" fontFamily="var(--font-inter)">50mm</text>
      {/* Scale note */}
      <text x="100" y="155" fontSize="6" fill="var(--muted)" fontFamily="var(--font-inter)" letterSpacing="0.08em">
        1:100  →  1:5
      </text>
    </svg>
  );
}

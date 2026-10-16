export default function CrossingDiagram() {
  return (
    <svg
      viewBox="0 0 280 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: "280px" }}
      aria-hidden="true"
    >
      {/* Left zone: DESIGN */}
      <rect x="8" y="8" width="116" height="144" stroke="var(--fg)" strokeWidth="0.5" opacity="0.12" />
      <text x="16" y="23" fontSize="6" fill="var(--muted)" fontFamily="var(--font-inter)" letterSpacing="0.12em" opacity="0.7">DESIGN</text>
      <line x1="20" y1="38"  x2="80"  y2="38"  stroke="var(--fg)" strokeWidth="0.5" opacity="0.2" />
      <line x1="20" y1="52"  x2="100" y2="52"  stroke="var(--fg)" strokeWidth="0.5" opacity="0.2" />
      <line x1="20" y1="66"  x2="70"  y2="66"  stroke="var(--fg)" strokeWidth="0.5" opacity="0.2" />
      <line x1="20" y1="80"  x2="90"  y2="80"  stroke="var(--fg)" strokeWidth="0.5" opacity="0.2" />
      <rect x="20" y="95" width="30" height="40" stroke="var(--fg)" strokeWidth="0.5" opacity="0.2" />
      <rect x="58" y="100" width="50" height="35" stroke="var(--fg)" strokeWidth="0.5" opacity="0.2" />

      {/* Boundary */}
      <line x1="140" y1="8" x2="140" y2="152" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />

      {/* Right zone: MARKET */}
      <rect x="156" y="8" width="116" height="144" stroke="var(--fg)" strokeWidth="0.5" opacity="0.12" />
      <text x="164" y="23" fontSize="6" fill="var(--muted)" fontFamily="var(--font-inter)" letterSpacing="0.12em" opacity="0.7">MARKET</text>
      <path d="M 164 40 Q 192 48 232 40 Q 252 35 266 44" stroke="var(--fg)" strokeWidth="0.5" opacity="0.2" />
      <path d="M 164 62 Q 202 72 242 60 Q 258 55 266 64" stroke="var(--fg)" strokeWidth="0.5" opacity="0.2" />
      <circle cx="186" cy="96" r="18" stroke="var(--fg)" strokeWidth="0.5" opacity="0.15" />
      <circle cx="236" cy="112" r="24" stroke="var(--fg)" strokeWidth="0.5" opacity="0.15" />
      <circle cx="210" cy="82" r="12" stroke="var(--fg)" strokeWidth="0.5" opacity="0.15" />

      {/* Crossing arrow (forward) */}
      <path d="M 98 76 C 118 76 128 80 145 80" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <polygon points="142,77 148,80 142,83" fill="var(--accent)" opacity="0.7" />
      {/* Return arrow (dashed) */}
      <path d="M 145 100 C 130 100 120 96 104 96" stroke="var(--accent)" strokeWidth="1" strokeLinecap="round" opacity="0.35" strokeDasharray="3 2" />
      <polygon points="107,93 101,96 107,99" fill="var(--accent)" opacity="0.35" />

      <text x="8" y="157" fontSize="6" fill="var(--muted)" fontFamily="var(--font-inter)" letterSpacing="0.08em">
        TWO LANGUAGES — ONE TRANSLATION
      </text>
    </svg>
  );
}

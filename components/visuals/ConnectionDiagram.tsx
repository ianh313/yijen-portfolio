export default function ConnectionDiagram() {
  return (
    <svg
      viewBox="0 0 280 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: "280px" }}
      aria-hidden="true"
    >
      {/* Rooms */}
      <rect x="10"  y="10"  width="70" height="55" stroke="var(--fg)" strokeWidth="0.75" opacity="0.3" />
      <rect x="100" y="10"  width="70" height="55" stroke="var(--fg)" strokeWidth="0.75" opacity="0.3" />
      <rect x="55"  y="90"  width="70" height="55" stroke="var(--fg)" strokeWidth="0.75" opacity="0.3" />
      <rect x="200" y="50"  width="70" height="80" stroke="var(--fg)" strokeWidth="0.75" opacity="0.3" />
      {/* Openings */}
      <line x1="80"  y1="30" x2="80"  y2="45" stroke="var(--bg)" strokeWidth="4" />
      <line x1="100" y1="30" x2="100" y2="45" stroke="var(--bg)" strokeWidth="4" />
      <line x1="125" y1="65" x2="140" y2="65" stroke="var(--bg)" strokeWidth="4" />
      <line x1="170" y1="65" x2="185" y2="65" stroke="var(--bg)" strokeWidth="4" />
      {/* Movement paths */}
      <path d="M 45 37 C 65 37 80 37 100 37" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 2" opacity="0.65" />
      <path d="M 135 65 C 135 78 125 90 95 90" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 2" opacity="0.65" />
      <path d="M 170 65 C 178 68 188 64 200 70" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 2" opacity="0.65" />
      {/* People nodes */}
      <circle cx="28"  cy="37"  r="4" fill="var(--accent)" opacity="0.75" />
      <circle cx="135" cy="37"  r="4" fill="var(--accent)" opacity="0.75" />
      <circle cx="90"  cy="118" r="4" fill="var(--accent)" opacity="0.75" />
      <circle cx="235" cy="90"  r="4" fill="var(--accent)" opacity="0.75" />
      <text x="10" y="155" fontSize="6" fill="var(--muted)" fontFamily="var(--font-inter)" letterSpacing="0.1em">
        SPACE ARRANGES ENCOUNTER
      </text>
    </svg>
  );
}

export default function BreakpointDiagram() {
  const nodes = [
    { cx: 28,  label: "MEETING", fade: 1.0 },
    { cx: 98,  label: "DRAWING", fade: 0.75 },
    { cx: 168, label: "PHONE",   fade: 0.5 },
    { cx: 238, label: "NOTE",    fade: 0.3 },
  ];

  return (
    <svg
      viewBox="0 0 280 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: "280px" }}
      aria-hidden="true"
    >
      {/* Solid connection: node 0 → node 1 */}
      <line x1="44" y1="40" x2="82" y2="40" stroke="var(--accent)" strokeWidth="1" opacity="0.55" />

      {/* Break connector 1→2 */}
      <line x1="114" y1="40" x2="128" y2="40" stroke="var(--accent)" strokeWidth="1" opacity="0.35" strokeDasharray="2 2" />
      <line x1="133" y1="33" x2="137" y2="47" stroke="var(--accent)" strokeWidth="1.5" opacity="0.55" />
      <line x1="139" y1="33" x2="143" y2="47" stroke="var(--accent)" strokeWidth="1.5" opacity="0.55" />
      <line x1="148" y1="40" x2="152" y2="40" stroke="var(--accent)" strokeWidth="1" opacity="0.25" strokeDasharray="2 2" />

      {/* Break connector 2→3 */}
      <line x1="184" y1="40" x2="198" y2="40" stroke="var(--accent)" strokeWidth="1" opacity="0.25" strokeDasharray="2 2" />
      <line x1="203" y1="33" x2="207" y2="47" stroke="var(--accent)" strokeWidth="1.5" opacity="0.45" />
      <line x1="209" y1="33" x2="213" y2="47" stroke="var(--accent)" strokeWidth="1.5" opacity="0.45" />
      <line x1="218" y1="40" x2="222" y2="40" stroke="var(--accent)" strokeWidth="1" opacity="0.15" strokeDasharray="2 2" />

      {/* ??? node */}
      <circle cx="263" cy="40" r="14" stroke="var(--accent)" strokeWidth="0.75" opacity="0.18" strokeDasharray="2 2" />
      <text x="258" y="44" fontSize="9" fill="var(--muted)" fontFamily="var(--font-inter)" opacity="0.3">???</text>

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy="40" r="14" fill="var(--bg)" stroke="var(--accent)" strokeWidth="1" opacity={n.fade * 0.85} />
          <text
            x={n.cx}
            y="43"
            fontSize="4.5"
            textAnchor="middle"
            fill="var(--fg)"
            fontFamily="var(--font-inter)"
            letterSpacing="0.06em"
            opacity={n.fade}
          >
            {n.label}
          </text>
        </g>
      ))}

      <text x="0" y="94" fontSize="6" fill="var(--muted)" fontFamily="var(--font-inter)" letterSpacing="0.08em">
        INFORMATION BREAKS AT EVERY TRANSFER
      </text>
    </svg>
  );
}

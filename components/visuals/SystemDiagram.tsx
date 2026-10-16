export default function SystemDiagram() {
  const nodes = [
    { cx: 140, cy: 80,  r: 20, label: "DECISION", main: true  },
    { cx: 58,  cy: 44,  r: 14, label: "MEETING",  main: false },
    { cx: 222, cy: 44,  r: 14, label: "DRAWING",  main: false },
    { cx: 58,  cy: 120, r: 14, label: "ISSUE",    main: false },
    { cx: 222, cy: 120, r: 14, label: "UPDATE",   main: false },
    { cx: 140, cy: 150, r: 11, label: "NEXT",     main: false },
  ];
  const edges: [number, number][] = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [3, 4],
  ];

  return (
    <svg
      viewBox="0 0 280 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", maxWidth: "280px" }}
      aria-hidden="true"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke="var(--accent)"
          strokeWidth="0.75"
          opacity="0.28"
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="var(--bg)"
            stroke="var(--accent)"
            strokeWidth={n.main ? 1.5 : 1}
            opacity={n.main ? 1 : 0.65}
          />
          <text
            x={n.cx}
            y={n.cy + 2}
            fontSize={n.main ? 5.5 : 4.5}
            textAnchor="middle"
            fill={n.main ? "var(--accent)" : "var(--fg)"}
            fontFamily="var(--font-inter)"
            letterSpacing="0.06em"
            opacity={n.main ? 1 : 0.75}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

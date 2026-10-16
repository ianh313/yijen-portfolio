"use client";

import { useEffect, useRef, useCallback } from "react";

const NODE_IDS = [
  "hero",
  "connection",
  "translation",
  "breakpoint-seq",
  "breakpoint",
  "crossing",
  "arkiteki",
  "tracking-payoff",
  "method",
  "future",
  "closing",
];

const BREAK_NODES = new Set(["breakpoint-seq", "breakpoint"]);

export default function JourneyLine() {
  const svgRef  = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const rafRef  = useRef<number>(0);
  const totalRef = useRef(0);

  const buildPath = useCallback(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const scrollY = window.scrollY;
    const isMobile = window.innerWidth < 768;

    const pts: { x: number; y: number; id: string }[] = [];
    NODE_IDS.forEach((id) => {
      const el = document.querySelector(`[data-node="${id}"]`) as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      pts.push({
        x: r.left + r.width / 2,
        y: r.top + r.height / 2 + scrollY,
        id,
      });
    });

    if (pts.length < 2) return;

    const baseX = isMobile ? 28 : 40;
    const amp = isMobile ? 16 : 60;

    const snapped = pts.map((p, i) => ({
      ...p,
      x: isMobile ? baseX : baseX + (i % 2 === 0 ? 0 : amp),
    }));

    let d = `M ${snapped[0].x} ${snapped[0].y}`;
    for (let i = 1; i < snapped.length; i++) {
      const prev = snapped[i - 1];
      const curr = snapped[i];
      const midY = (prev.y + curr.y) / 2;
      const isBreak = BREAK_NODES.has(prev.id) || BREAK_NODES.has(curr.id);
      const cpOffset = isBreak ? amp * 0.25 : amp * 0.6;
      d += ` C ${prev.x + cpOffset} ${midY}, ${curr.x - cpOffset} ${midY}, ${curr.x} ${curr.y}`;
    }

    const path = pathRef.current;
    if (!path) return;
    path.setAttribute("d", d);
    totalRef.current = path.getTotalLength();
    path.style.strokeDasharray = `${totalRef.current}`;
    if (window.scrollY === 0) {
      path.style.strokeDashoffset = `${totalRef.current}`;
    }
  }, []);

  const updateScroll = useCallback(() => {
    const path = pathRef.current;
    if (!path || totalRef.current === 0) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
    const drawn = totalRef.current * progress;
    path.style.strokeDashoffset = `${totalRef.current - drawn}`;
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(() => {
          updateScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    const onResize = () => {
      buildPath();
      updateScroll();
    };

    const timer = setTimeout(() => {
      buildPath();
      updateScroll();
    }, 300);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [buildPath, updateScroll]);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 5,
        overflow: "visible",
      }}
    >
      <path
        ref={pathRef}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.35"
        style={{ strokeDasharray: "0", strokeDashoffset: "0" }}
      />
    </svg>
  );
}

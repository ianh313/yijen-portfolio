"use client";

import { useEffect, useRef, useCallback } from "react";

const NODE_IDS = ["hero", "origin", "crab", "archi", "uhomes", "arkiteki", "method", "closing"];

export default function TrajectoryLine() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const animFrameRef = useRef<number>(0);
  const totalLengthRef = useRef(0);

  const buildPath = useCallback(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const svgRect = svg.getBoundingClientRect();
    const scrollY = window.scrollY;

    const points: { x: number; y: number }[] = [];

    NODE_IDS.forEach((id) => {
      const el = document.querySelector(`[data-node="${id}"]`) as HTMLElement | null;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2 - svgRect.left;
      const cy = rect.top + rect.height / 2 - svgRect.top + scrollY;
      points.push({ x: cx, y: cy });
    });

    if (points.length < 2) return;

    const isMobile = window.innerWidth < 768;
    const amplitude = isMobile ? 28 : 80;

    // Build smooth cubic bezier through points
    let d = `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const midY = (prev.y + curr.y) / 2;

      // Alternate horizontal offset for serpentine
      const offset = i % 2 === 0 ? amplitude : -amplitude;
      const cx1 = prev.x + offset;
      const cy1 = midY;
      const cx2 = curr.x - offset;
      const cy2 = midY;

      d += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${curr.x} ${curr.y}`;
    }

    const path = pathRef.current;
    if (!path) return;
    path.setAttribute("d", d);
    totalLengthRef.current = path.getTotalLength();
    path.style.strokeDasharray = `${totalLengthRef.current}`;
  }, []);

  const updateScroll = useCallback(() => {
    const path = pathRef.current;
    if (!path || totalLengthRef.current === 0) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollTop / docHeight, 1);
    const drawn = totalLengthRef.current * progress;
    path.style.strokeDashoffset = `${totalLengthRef.current - drawn}`;
  }, []);

  // Highlight nodes as they enter viewport
  const updateNodes = useCallback(() => {
    NODE_IDS.forEach((id) => {
      const el = document.querySelector(`[data-node="${id}"]`) as HTMLElement | null;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.8;
      el.classList.toggle("node-active", inView);
    });
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        animFrameRef.current = requestAnimationFrame(() => {
          updateScroll();
          updateNodes();
          ticking = false;
        });
        ticking = true;
      }
    };

    const onResize = () => {
      buildPath();
      updateScroll();
    };

    // Give DOM time to render fully before measuring
    const timer = setTimeout(() => {
      buildPath();
      updateScroll();
      updateNodes();
    }, 200);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [buildPath, updateScroll, updateNodes]);

  return (
    <svg
      ref={svgRef}
      className="trajectory-svg"
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        pointerEvents: "none",
        zIndex: 5,
        // Height will be set by content
        height: "100%",
      }}
    >
      <path
        ref={pathRef}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.5"
        style={{
          strokeDasharray: "0",
          strokeDashoffset: "0",
        }}
      />
    </svg>
  );
}

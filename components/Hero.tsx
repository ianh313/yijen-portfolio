"use client";

import { useEffect, useRef } from "react";
import { hero } from "@/content/chapters";
import Reveal from "./Reveal";

export default function Hero() {
  const pointRef = useRef<SVGCircleElement>(null);
  const lineRef  = useRef<SVGLineElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const progress = Math.min(window.scrollY / (window.innerHeight * 0.5), 1);
      if (lineRef.current) {
        lineRef.current.style.opacity = String(progress * 0.35);
        lineRef.current.setAttribute("y2", String(40 + progress * 60));
      }
      if (pointRef.current) {
        pointRef.current.style.opacity = String(1 - progress * 0.3);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center"
      style={{
        paddingLeft: "clamp(1.5rem, 8vw, 7rem)",
        paddingRight: "clamp(1.5rem, 8vw, 7rem)",
        paddingTop: "6rem",
        paddingBottom: "5rem",
      }}
    >
      {/* Journey line origin node */}
      <div
        className="j-node"
        data-node="hero"
        style={{ top: "50%", left: "clamp(1.5rem,4vw,3rem)" }}
      />

      {/* Seed: a single point that becomes a line */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "clamp(1.5rem,4vw,3rem)",
          transform: "translateY(-50%)",
        }}
        aria-hidden="true"
      >
        <svg width="4" height="110" viewBox="0 0 4 110" overflow="visible">
          <line
            ref={lineRef}
            x1="2"
            y1="40"
            x2="2"
            y2="40"
            stroke="var(--accent)"
            strokeWidth="1"
            opacity="0"
            strokeLinecap="round"
          />
          <circle
            ref={pointRef}
            cx="2"
            cy="52"
            r="2.5"
            fill="var(--accent)"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Name label */}
      <Reveal delay={0}>
        <p className="chapter-label mb-8 md:mb-10" style={{ color: "var(--muted)" }}>
          {hero.nameLabel}
        </p>
      </Reveal>

      {/* Opening question */}
      <Reveal delay={100}>
        <h1
          className="statement max-w-xl mb-10 md:mb-14"
          style={{ fontSize: "clamp(1.875rem, 5.5vw, 3.75rem)", color: "var(--fg)" }}
        >
          {hero.openQuestion}
        </h1>
      </Reveal>

      {/* Bridge */}
      <Reveal delay={220}>
        <p
          className="font-serif mb-10"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "var(--muted)",
            lineHeight: "1.8",
            maxWidth: "34rem",
          }}
        >
          {hero.bridge}
        </p>
      </Reveal>

      {/* Practical subtitle */}
      <Reveal delay={320}>
        <p className="chapter-label" style={{ color: "var(--accent)" }}>
          {hero.subtitle}
        </p>
      </Reveal>

      {/* Scroll hint */}
      <Reveal delay={420}>
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "var(--muted)" }}
          aria-hidden="true"
        >
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "var(--accent)",
              opacity: 0.3,
            }}
          />
        </div>
      </Reveal>
    </section>
  );
}

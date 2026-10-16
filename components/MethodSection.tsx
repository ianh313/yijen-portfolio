"use client";

import { useRef, useEffect, useState } from "react";
import { method } from "@/content/chapters";
import Reveal from "./Reveal";

export default function MethodSection() {
  const [activeStep, setActiveStep] = useState(-1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep((prev) => Math.max(prev, i));
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      id="method"
      className="relative"
      style={{
        paddingTop: "clamp(5rem,12vh,9rem)",
        paddingBottom: "clamp(5rem,12vh,9rem)",
      }}
      data-chapter="method"
    >
      <div
        className="j-node"
        data-node="method"
        style={{ top: "20%", left: "clamp(1.5rem,4vw,3rem)" }}
      />

      <div
        style={{
          paddingLeft: "clamp(1.5rem,8vw,7rem)",
          paddingRight: "clamp(1.5rem,8vw,7rem)",
          maxWidth: "42rem",
        }}
      >
        <Reveal delay={0}>
          <div className="flex items-center gap-4 mb-8">
            <span className="chapter-label">METHOD</span>
            <div className="section-divider flex-1" />
          </div>
          <p
            className="font-serif mb-12"
            style={{
              fontSize: "clamp(1rem,2vw,1.25rem)",
              color: "var(--fg)",
              lineHeight: 1.8,
              whiteSpace: "pre-line",
            }}
          >
            {method.intro}
          </p>
        </Reveal>

        <div className="relative">
          <div
            style={{
              position: "absolute",
              left: "19px",
              top: "12px",
              bottom: "12px",
              width: "1px",
              background: "var(--accent)",
              opacity: 0.15,
            }}
            aria-hidden="true"
          />

          <div className="space-y-10">
            {method.steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="relative pl-14"
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "2px",
                    width: "38px",
                    height: "38px",
                    borderRadius: "9999px",
                    border: "1px solid var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.6rem",
                    letterSpacing: "0.14em",
                    fontFamily: "var(--font-inter)",
                    color: i <= activeStep ? "var(--bg)" : "var(--accent)",
                    background: i <= activeStep ? "var(--accent)" : "transparent",
                    transition: "background 0.5s ease, color 0.5s ease",
                  }}
                >
                  {i + 1}
                </div>

                <Reveal delay={i * 50}>
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="chapter-label">{step.label}</span>
                      <span
                        className="font-sans text-sm"
                        style={{ color: "var(--muted)" }}
                      >
                        {step.zh}
                      </span>
                    </div>
                    <p
                      className="font-sans"
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--fg)",
                        lineHeight: 1.8,
                      }}
                    >
                      {step.story}
                    </p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <p
            className="font-serif mt-16 pt-10"
            style={{
              fontSize: "clamp(1rem,2vw,1.1875rem)",
              color: "var(--accent)",
              lineHeight: 1.85,
              borderTop: "1px solid var(--accent)",
            }}
          >
            {method.conclusion}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

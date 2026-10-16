"use client";

import { useEffect, useRef, useState } from "react";
import { methodSteps, methodConclusion } from "@/content/chapters";
import Reveal from "./Reveal";

export default function MethodSteps() {
  const [activeStep, setActiveStep] = useState(-1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep((prev) => Math.max(prev, i));
          }
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
      className="relative py-24 md:py-40 px-6 md:px-16 lg:px-24"
      data-chapter="method"
    >
      <div className="trajectory-node" data-node="method" />

      <div className="max-w-3xl mx-auto">
        <Reveal>
          <p
            className="font-sans text-xs tracking-widest uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            方法
          </p>
          <h2
            className="font-serif font-light mb-12"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", color: "var(--fg)" }}
          >
            我怎麼推動改變
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p
            className="font-serif mb-16"
            style={{
              fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
              color: "var(--fg)",
              lineHeight: "1.9",
            }}
          >
            用一個真實的轉變走一次：會議從紙本圖說，變成在系統中註記與追蹤。
          </p>
        </Reveal>

        {/* Steps */}
        <div className="relative">
          {/* Vertical branch line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: "var(--accent)", opacity: 0.2 }}
            aria-hidden="true"
          />

          <div className="space-y-12">
            {methodSteps.map((step, i) => (
              <div
                key={i}
                ref={(el) => { stepRefs.current[i] = el; }}
                className="relative pl-16"
              >
                {/* Node dot */}
                <div
                  className="absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center text-sm font-sans transition-all duration-500"
                  style={{
                    border: `1px solid var(--accent)`,
                    color: i <= activeStep ? "var(--bg)" : "var(--accent)",
                    background: i <= activeStep ? "var(--accent)" : "transparent",
                    transition: "background 0.5s ease, color 0.5s ease",
                  }}
                >
                  {step.number}
                </div>

                <Reveal delay={i * 60}>
                  <div>
                    {/* Method tag */}
                    <span
                      className="font-sans text-xs tracking-widest uppercase block mb-1"
                      style={{ color: "var(--accent)" }}
                    >
                      {step.methodTag}
                    </span>

                    {/* Story */}
                    <p
                      className="font-sans"
                      style={{
                        fontSize: "1rem",
                        color: "var(--fg)",
                        lineHeight: "1.85",
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

        {/* Conclusion */}
        <Reveal delay={200}>
          <p
            className="font-serif mt-20 pt-10 border-t"
            style={{
              fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
              color: "var(--accent)",
              borderColor: "var(--accent)",
              lineHeight: "1.9",
              opacity: 0.9,
            }}
          >
            {methodConclusion}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect } from "react";
import { ch3Sequence, ch3 } from "@/content/chapters";

function SequenceLine({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.unobserve(el);
        }
      },
      { threshold: 0.3, rootMargin: "-5% 0px -15% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isLast = index === ch3Sequence.length - 1;

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        minHeight: isLast ? "40vh" : "28vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 clamp(1.5rem,8vw,7rem)",
      }}
    >
      <p
        className="font-serif text-center"
        style={{
          fontSize: isLast
            ? "clamp(1.375rem, 4vw, 2.5rem)"
            : "clamp(1.125rem, 3vw, 1.75rem)",
          color: isLast ? "var(--fg)" : "var(--muted)",
          fontWeight: 300,
          lineHeight: 1.5,
          whiteSpace: "pre-line",
          maxWidth: "20rem",
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default function BreakpointSequence() {
  const statementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statementRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0) scale(1)";
          obs.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="breakpoint-seq"
      className="relative"
      style={{ paddingTop: "10vh", paddingBottom: "5vh" }}
      data-chapter="breakpoint-seq"
    >
      <div
        className="j-node"
        data-node="breakpoint-seq"
        style={{ top: "50%", left: "clamp(1.5rem,4vw,3rem)" }}
      />

      <div
        className="break-marker"
        id="break-marker-a"
        style={{
          top: "35%",
          position: "absolute",
          left: "clamp(0.75rem,2.5vw,2rem)",
        }}
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>

      {ch3Sequence.map((sentence, i) => (
        <SequenceLine key={i} text={sentence} index={i} />
      ))}

      {/* The strong breakpoint statement */}
      <div
        className="flex items-center justify-center"
        style={{ minHeight: "50vh", padding: "0 clamp(1.5rem,8vw,7rem)" }}
      >
        <div
          ref={statementRef}
          style={{
            opacity: 0,
            transform: "translateY(20px) scale(0.98)",
            transition: "opacity 0.9s ease-out, transform 0.9s ease-out",
            textAlign: "center",
          }}
        >
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(1.75rem, 5.5vw, 3.25rem)",
              color: "var(--accent)",
              fontWeight: 300,
              lineHeight: 1.3,
            }}
          >
            {ch3.breakpointStatement}
          </p>
          <div
            className="flex justify-center mt-8 gap-1"
            aria-hidden="true"
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: "20px",
                  height: "1px",
                  background: "var(--accent)",
                  opacity: 0.4,
                  transform: `rotate(${(i - 1) * 15}deg)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

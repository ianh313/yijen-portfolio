import Reveal from "./Reveal";
import { future } from "@/content/chapters";

export default function FutureSection() {
  return (
    <section
      id="future"
      className="relative"
      style={{
        paddingTop: "clamp(6rem,15vh,11rem)",
        paddingBottom: "clamp(6rem,15vh,11rem)",
      }}
      data-chapter="future"
    >
      <div
        className="j-node"
        data-node="future"
        style={{ top: "30%", left: "clamp(1.5rem,4vw,3rem)" }}
      />

      <div
        style={{
          paddingLeft: "clamp(1.5rem,8vw,7rem)",
          paddingRight: "clamp(1.5rem,8vw,7rem)",
          maxWidth: "42rem",
          marginLeft: "auto",
        }}
      >
        <Reveal delay={0}>
          <p
            className="statement mb-14"
            style={{
              fontSize: "clamp(1.75rem,5vw,3rem)",
              color: "var(--fg)",
              whiteSpace: "pre-line",
            }}
          >
            {future.opening}
          </p>
        </Reveal>

        {future.progression.map((line, i) => (
          <Reveal key={i} delay={80 + i * 60}>
            <p
              className="font-serif mb-3"
              style={{
                fontSize: "clamp(1rem,2vw,1.1875rem)",
                color: "var(--muted)",
                lineHeight: 1.8,
              }}
            >
              {line}
            </p>
          </Reveal>
        ))}

        <Reveal delay={220}>
          <ul className="mt-8 mb-12 space-y-2">
            {future.abilities.map((a, i) => (
              <li key={i} className="evidence-item">
                <span className="evidence-dot" />
                <span
                  className="font-sans"
                  style={{ fontSize: "0.9375rem", color: "var(--fg)" }}
                >
                  {a}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={300}>
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(1rem,2vw,1.125rem)",
              color: "var(--fg)",
              lineHeight: 1.9,
              whiteSpace: "pre-line",
            }}
          >
            {future.redefine}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import { closing } from "@/content/chapters";

export default function ClosingSection() {
  return (
    <section
      id="closing"
      className="relative"
      style={{
        paddingTop: "clamp(8rem,18vh,14rem)",
        paddingBottom: "clamp(8rem,18vh,14rem)",
      }}
      data-chapter="closing"
    >
      <div
        className="j-node"
        data-node="closing"
        style={{ top: "40%", left: "clamp(1.5rem,4vw,3rem)" }}
      />

      <div
        style={{
          paddingLeft: "clamp(1.5rem,8vw,7rem)",
          paddingRight: "clamp(1.5rem,8vw,7rem)",
          maxWidth: "36rem",
        }}
      >
        <Reveal delay={0}>
          <p
            className="statement mb-14"
            style={{
              fontSize: "clamp(2rem,6vw,3.75rem)",
              color: "var(--fg)",
              whiteSpace: "pre-line",
            }}
          >
            {closing.anchor}
          </p>
        </Reveal>

        {closing.progression.map((line, i) => (
          <Reveal key={i} delay={80 + i * 80}>
            <p
              className="font-serif mb-2"
              style={{
                fontSize: "clamp(1rem,2vw,1.25rem)",
                color: "var(--muted)",
                lineHeight: 1.8,
              }}
            >
              {line}
            </p>
          </Reveal>
        ))}

        <Reveal delay={320}>
          <p
            className="font-serif mt-10 mb-16"
            style={{
              fontSize: "clamp(1rem,2vw,1.25rem)",
              color: "var(--fg)",
              lineHeight: 1.8,
            }}
          >
            {closing.final}
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div
            style={{
              borderTop: "1px solid var(--accent)",
              paddingTop: "2.5rem",
              opacity: 0.7,
            }}
          >
            <a
              href={`mailto:${closing.email}`}
              className="font-sans block mb-3 hover:opacity-80 transition-opacity"
              style={{
                fontSize: "1rem",
                color: "var(--accent)",
                letterSpacing: "0.04em",
              }}
            >
              {closing.email}
            </a>
            {closing.tools.map((t, i) => (
              <p
                key={i}
                className="font-sans text-sm"
                style={{ color: "var(--muted)", lineHeight: 1.75 }}
              >
                {t}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={480}>
          <div className="mt-16 flex justify-start" aria-hidden="true">
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "9999px",
                background: "var(--accent)",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

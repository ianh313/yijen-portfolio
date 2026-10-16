import Reveal from "./Reveal";
import { ch5 } from "@/content/chapters";

export default function ArkitekiChapter() {
  return (
    <section
      id="arkiteki"
      className="relative"
      style={{
        paddingTop: "clamp(5rem, 12vh, 9rem)",
        paddingBottom: "clamp(5rem, 12vh, 9rem)",
      }}
      data-chapter="arkiteki"
    >
      <div
        className="j-node"
        data-node="arkiteki"
        style={{ top: "20%", left: "clamp(1.5rem,4vw,3rem)" }}
      />

      {/* Opening: old question → new question */}
      <div
        style={{
          paddingLeft: "clamp(1.5rem, 8vw, 7rem)",
          paddingRight: "clamp(1.5rem, 8vw, 7rem)",
          paddingBottom: "clamp(3rem, 7vh, 5rem)",
          maxWidth: "42rem",
        }}
      >
        <Reveal delay={0}>
          <div className="flex items-center gap-4 mb-6">
            <span className="chapter-label">{ch5.chapterLabel}</span>
            <div className="section-divider flex-1" />
          </div>
        </Reveal>

        <Reveal delay={60}>
          <p className="font-sans text-sm mb-2" style={{ color: "var(--muted)" }}>
            {ch5.period} · {ch5.company} · {ch5.role}
          </p>
          <p
            className="font-sans text-sm mb-8"
            style={{ color: "var(--muted)", opacity: 0.7 }}
          >
            {ch5.context}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <p
            className="font-serif mb-2"
            style={{
              fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              color: "var(--muted)",
              fontStyle: "italic",
            }}
          >
            以前的問題：{ch5.oldQuestion}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <p
            className="statement mb-6"
            style={{ fontSize: "clamp(1.375rem, 3.5vw, 2rem)", color: "var(--fg)" }}
          >
            {ch5.newQuestion}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <p
            className="font-serif mb-0"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "var(--accent)",
              lineHeight: 1.7,
            }}
          >
            {ch5.pivot}
          </p>
        </Reveal>
      </div>

      {/* Five evidence sections */}
      <div
        style={{
          paddingLeft: "clamp(1.5rem, 8vw, 7rem)",
          paddingRight: "clamp(1.5rem, 8vw, 7rem)",
        }}
      >
        {ch5.sections.map((section, si) => (
          <Reveal key={si} delay={si * 60}>
            <div
              style={{
                paddingTop: "clamp(2.5rem, 5vh, 3.5rem)",
                paddingBottom: "clamp(2.5rem, 5vh, 3.5rem)",
                borderTop: "1px solid var(--faint)",
                maxWidth: "42rem",
              }}
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.6875rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase" as const,
                    color: "var(--accent)",
                  }}
                >
                  {section.label}
                </span>
                <span className="font-sans text-sm" style={{ color: "var(--muted)" }}>
                  {section.sublabel}
                </span>
              </div>
              <ul className="space-y-3">
                {section.facts.map((f, fi) => (
                  <li key={fi} className="evidence-item">
                    <span className="evidence-dot" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        <Reveal delay={300}>
          <div className="flex flex-wrap gap-2 pt-8 max-w-xl">
            {ch5.tags.map((t) => (
              <span key={t} className="skill-tag">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

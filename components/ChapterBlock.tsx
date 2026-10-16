import Reveal from "./Reveal";

interface ChapterBlockProps {
  id: string;
  chapterLabel: string;
  themeLabel: string;
  period: string;
  company: string;
  location?: string;
  role: string;
  narrative: string;
  insight?: string;
  facts: string[];
  tags?: string[];
  alignRight?: boolean;
  children?: React.ReactNode;
}

export default function ChapterBlock({
  id,
  chapterLabel,
  themeLabel,
  period,
  company,
  location,
  role,
  narrative,
  insight,
  facts,
  tags,
  alignRight = false,
  children,
}: ChapterBlockProps) {
  return (
    <section
      id={id}
      className="relative"
      style={{
        paddingTop: "clamp(5rem, 12vh, 9rem)",
        paddingBottom: "clamp(5rem, 12vh, 9rem)",
      }}
      data-chapter={id}
    >
      <div
        className="j-node"
        data-node={id}
        style={{
          top: "30%",
          left: alignRight ? "auto" : "clamp(1.5rem,4vw,3rem)",
          right: alignRight ? "clamp(1.5rem,4vw,3rem)" : "auto",
        }}
      />

      <div
        style={{
          maxWidth: "42rem",
          paddingLeft: "clamp(1.5rem, 8vw, 7rem)",
          paddingRight: "clamp(1.5rem, 8vw, 7rem)",
          marginLeft: alignRight ? "auto" : undefined,
          marginRight: alignRight ? undefined : "auto",
        }}
      >
        {/* Chapter label */}
        <Reveal delay={0}>
          <div className="flex items-center gap-4 mb-6">
            <span className="chapter-label">{chapterLabel}</span>
            <div className="section-divider flex-1" />
          </div>
        </Reveal>

        {/* Theme + metadata */}
        <Reveal delay={60}>
          <p
            className="font-serif mb-3"
            style={{
              fontSize: "clamp(1.375rem, 3.5vw, 1.875rem)",
              color: "var(--fg)",
              fontWeight: 300,
              lineHeight: 1.4,
            }}
          >
            {themeLabel}
          </p>
          <p
            className="font-sans text-sm mb-6"
            style={{ color: "var(--muted)", letterSpacing: "0.04em" }}
          >
            {period} · {[company, location, role].filter(Boolean).join(" · ")}
          </p>
        </Reveal>

        {/* Narrative */}
        <Reveal delay={120}>
          <p
            className="font-serif mb-5"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.1875rem)",
              color: "var(--fg)",
              lineHeight: 1.85,
            }}
          >
            {narrative}
          </p>
        </Reveal>

        {/* Insight */}
        {insight && (
          <Reveal delay={180}>
            <p
              className="font-serif mb-8"
              style={{
                fontSize: "clamp(0.9375rem, 1.8vw, 1.0625rem)",
                color: "var(--muted)",
                lineHeight: 1.8,
                paddingLeft: "1rem",
                borderLeft: "2px solid var(--accent)",
              }}
            >
              {insight}
            </p>
          </Reveal>
        )}

        {/* Facts */}
        {facts.length > 0 && (
          <Reveal delay={220}>
            <ul className="space-y-3 mb-6">
              {facts.map((f, i) => (
                <li key={i} className="evidence-item">
                  <span className="evidence-dot" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <Reveal delay={280}>
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((t) => (
                <span key={t} className="skill-tag">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        )}

        {children}
      </div>
    </section>
  );
}

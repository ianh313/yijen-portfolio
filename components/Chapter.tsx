import { Chapter as ChapterType } from "@/content/chapters";
import Reveal from "./Reveal";

interface ChapterProps {
  chapter: ChapterType;
  index: number;
  hasBreakpoints?: boolean; // ch3 & ch4 show fractured line segments
  isReconnect?: boolean;    // ch5 reconnects
}

// Consistent tag colors per skill
const tagColorMap: Record<string, string> = {
  "跨部門協調": "skill-tag",
  "需求整合": "skill-tag",
  "實地訪查": "skill-tag",
  "需求分析": "skill-tag",
  "商業端理解": "skill-tag",
  "流程梳理": "skill-tag",
  "系統與資料": "skill-tag",
  "AI 應用與快速驗證": "skill-tag",
  "專案推進與導入": "skill-tag",
  "成效驗證": "skill-tag",
};

export default function Chapter({ chapter, index, hasBreakpoints = false }: ChapterProps) {
  // Alternate layout on desktop: odd chapters shift right
  const isRight = index % 2 === 1;

  return (
    <section
      id={chapter.id}
      className="relative py-24 md:py-36"
      data-chapter={chapter.id}
    >
      {/* Node marker for trajectory line */}
      <div className="trajectory-node" data-node={chapter.id} />

      {/* Breakpoint visual markers (ch3, ch4) */}
      {hasBreakpoints && (
        <div
          className="absolute left-4 md:left-8 top-1/3 flex flex-col gap-1 opacity-40"
          aria-hidden="true"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-px w-6"
              style={{ background: "var(--accent)" }}
            />
          ))}
        </div>
      )}

      <div
        className={`px-6 md:px-16 lg:px-24 max-w-3xl ${
          isRight ? "ml-auto" : "mr-auto"
        }`}
      >
        {/* Year anchor */}
        <div className="year-anchor mb-2" aria-hidden="true">
          {chapter.year}
        </div>

        <Reveal delay={0}>
          <div className="mb-1">
            <span
              className="font-sans text-xs tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              {chapter.period}
            </span>
          </div>
          <h2
            className="font-serif font-light leading-snug mb-1"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", color: "var(--fg)" }}
          >
            {chapter.title}
          </h2>
          <p className="font-sans text-sm mb-6" style={{ color: "var(--muted)" }}>
            {[chapter.company, chapter.location, chapter.role]
              .filter(Boolean)
              .join("・")}
          </p>
        </Reveal>

        {/* Narrative (serif, poetic) */}
        <Reveal delay={80}>
          <p
            className="font-serif leading-loose mb-4"
            style={{
              fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
              color: "var(--fg)",
              lineHeight: "1.9",
            }}
          >
            {chapter.narrative}
          </p>
        </Reveal>

        {/* Seen */}
        {chapter.seen && (
          <Reveal delay={140}>
            <p
              className="font-serif mb-8 pl-4 border-l-2"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
                color: "var(--muted)",
                borderColor: "var(--accent)",
                lineHeight: "1.85",
              }}
            >
              {chapter.seen}
            </p>
          </Reveal>
        )}

        {/* Bullet groups */}
        {chapter.bulletGroups && chapter.bulletGroups.length > 0 && (
          <div className="space-y-6">
            {chapter.bulletGroups.map((group, gi) => (
              <Reveal key={gi} delay={160 + gi * 80}>
                <div>
                  {group.label && (
                    <p
                      className="font-sans text-xs tracking-widest uppercase mb-2"
                      style={{ color: "var(--accent)" }}
                    >
                      {group.label}
                    </p>
                  )}
                  <ul className="space-y-2">
                    {group.items.map((item, ii) => (
                      <li
                        key={ii}
                        className="font-sans flex gap-3"
                        style={{ fontSize: "1rem", color: "var(--fg)", lineHeight: "1.8" }}
                      >
                        <span
                          className="mt-2 shrink-0 w-1 h-1 rounded-full"
                          style={{ background: "var(--accent)" }}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* Skill tags */}
        {chapter.tags && chapter.tags.length > 0 && (
          <Reveal delay={240}>
            <div className="flex flex-wrap gap-2 mt-8">
              {chapter.tags.map((tag) => (
                <span key={tag} className={tagColorMap[tag] || "skill-tag"}>
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

import { hero } from "@/content/chapters";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-20 pb-32 md:px-16 lg:px-24"
    >
      {/* Node marker for trajectory line */}
      <div className="trajectory-node" data-node="hero" />

      <Reveal delay={0}>
        <h1
          className="font-serif font-light leading-tight tracking-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", color: "var(--fg)" }}
        >
          {hero.name}
        </h1>
      </Reveal>

      <Reveal delay={80}>
        <p
          className="font-sans text-base md:text-lg mb-10 tracking-widest uppercase"
          style={{ color: "var(--accent)", letterSpacing: "0.12em" }}
        >
          {hero.subtitle}
        </p>
      </Reveal>

      <Reveal delay={160}>
        <p
          className="font-serif max-w-2xl leading-relaxed"
          style={{
            fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
            color: "var(--fg)",
            lineHeight: "1.9",
          }}
        >
          {hero.proposition}
        </p>
      </Reveal>

      <Reveal delay={280}>
        <div className="mt-16 flex items-center gap-3" style={{ color: "var(--muted)" }}>
          <span className="font-sans text-sm tracking-wider">{hero.scrollHint}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-bounce"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </Reveal>
    </section>
  );
}

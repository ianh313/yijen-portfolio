import { closing } from "@/content/chapters";
import Reveal from "./Reveal";

export default function Closing() {
  return (
    <section
      id="closing"
      className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24"
      data-chapter="closing"
    >
      <div className="trajectory-node" data-node="closing" />

      <div className="max-w-2xl mx-auto">
        {/* Pull quote */}
        <Reveal>
          <blockquote
            className="font-serif font-light leading-snug mb-16 text-center"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              color: "var(--fg)",
              lineHeight: "1.6",
            }}
          >
            「{closing.quote}」
          </blockquote>
        </Reveal>

        <Reveal delay={100}>
          <p
            className="font-serif mb-8"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              color: "var(--fg)",
              lineHeight: "1.9",
            }}
          >
            {closing.interpretation}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <p
            className="font-serif mb-16"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              color: "var(--fg)",
              lineHeight: "1.9",
            }}
          >
            {closing.callToAction}
          </p>
        </Reveal>

        {/* Contact */}
        <Reveal delay={220}>
          <div
            className="pt-10 border-t"
            style={{ borderColor: "var(--accent)", opacity: 0.5 }}
          />
          <div className="pt-8 space-y-3">
            <a
              href={`mailto:${closing.email}`}
              className="font-sans block text-base tracking-wide hover:opacity-80 transition-opacity"
              style={{ color: "var(--accent)" }}
            >
              {closing.email}
            </a>
            {closing.tools.map((t, i) => (
              <p
                key={i}
                className="font-sans text-sm"
                style={{ color: "var(--muted)" }}
              >
                {t}
              </p>
            ))}
          </div>
        </Reveal>

        {/* Terminal node: converging circle */}
        <Reveal delay={300}>
          <div className="mt-20 flex justify-center" aria-hidden="true">
            <div
              className="w-4 h-4 rounded-full border-2 transition-all duration-700"
              style={{ borderColor: "var(--accent)", background: "var(--accent)" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

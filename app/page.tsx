import Hero from "@/components/Hero";
import ChapterBlock from "@/components/ChapterBlock";
import BreakpointSequence from "@/components/BreakpointSequence";
import ArkitekiChapter from "@/components/ArkitekiChapter";
import TrackingPayoff from "@/components/TrackingPayoff";
import MethodSection from "@/components/MethodSection";
import FutureSection from "@/components/FutureSection";
import ClosingSection from "@/components/ClosingSection";
import ThemeToggle from "@/components/ThemeToggle";
import JourneyLine from "@/components/JourneyLine";
import { ch1, ch2, ch3, ch4 } from "@/content/chapters";

export default function Home() {
  return (
    <main
      className="relative"
      style={{ background: "var(--bg)", color: "var(--fg)", overflowX: "hidden" }}
    >
      <ThemeToggle />
      <JourneyLine />

      <Hero />

      {/* Ch1: Connection */}
      <ChapterBlock
        id={ch1.id}
        chapterLabel={ch1.chapterLabel}
        themeLabel={ch1.themeLabel}
        period={ch1.period}
        company={ch1.company}
        role={ch1.role}
        narrative={ch1.narrative}
        insight={ch1.insight}
        facts={ch1.facts}
      />

      {/* Full-screen statement before Ch2 */}
      <section
        className="flex items-center justify-center"
        style={{
          minHeight: "70vh",
          paddingLeft: "clamp(1.5rem,8vw,7rem)",
          paddingRight: "clamp(1.5rem,8vw,7rem)",
        }}
      >
        <div style={{ maxWidth: "28rem", textAlign: "center" }}>
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(1.5rem,4.5vw,2.75rem)",
              color: "var(--fg)",
              fontWeight: 300,
              lineHeight: 1.4,
            }}
          >
            {ch2.fullScreenA}
            <br />
            {ch2.fullScreenB}
          </p>
          <p
            className="font-serif mt-5"
            style={{
              fontSize: "clamp(0.9375rem,2vw,1.125rem)",
              color: "var(--muted)",
              lineHeight: 1.7,
            }}
          >
            {ch2.subStatement}
          </p>
        </div>
      </section>

      {/* Ch2: Translation */}
      <ChapterBlock
        id={ch2.id}
        chapterLabel={ch2.chapterLabel}
        themeLabel={ch2.themeLabel}
        period={ch2.period}
        company={ch2.company}
        location={ch2.location}
        role={ch2.role}
        narrative={ch2.narrative}
        facts={ch2.facts}
        alignRight
      />

      {/* Ch3 scroll sequence + breakpoint moment */}
      <BreakpointSequence />

      {/* Ch3 evidence */}
      <ChapterBlock
        id={ch3.id}
        chapterLabel={ch3.chapterLabel}
        themeLabel={ch3.themeLabel}
        period={ch3.period}
        company={ch3.company}
        role={ch3.role}
        narrative={ch3.narrative}
        insight={ch3.insight}
        facts={ch3.facts}
        tags={ch3.tags}
      />

      {/* Ch4 opening question */}
      <section
        className="flex items-center justify-center"
        style={{
          minHeight: "65vh",
          paddingLeft: "clamp(1.5rem,8vw,7rem)",
          paddingRight: "clamp(1.5rem,8vw,7rem)",
        }}
      >
        <div style={{ maxWidth: "28rem" }}>
          <p
            className="font-serif mb-6"
            style={{
              fontSize: "clamp(1.375rem,4vw,2.5rem)",
              color: "var(--fg)",
              fontWeight: 300,
              lineHeight: 1.45,
              whiteSpace: "pre-line",
            }}
          >
            {ch4.openQuestion}
          </p>
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(1rem,2.5vw,1.5rem)",
              color: "var(--accent)",
              fontWeight: 300,
            }}
          >
            {ch4.pivot}
          </p>
        </div>
      </section>

      {/* Ch4: Crossing */}
      <ChapterBlock
        id={ch4.id}
        chapterLabel={ch4.chapterLabel}
        themeLabel={ch4.themeLabel}
        period={ch4.period}
        company={ch4.company}
        location={ch4.location}
        role={ch4.role}
        narrative={ch4.narrative}
        facts={ch4.facts}
        tags={ch4.tags}
        alignRight
      />

      {/* Key insight from Ch4 */}
      <section
        className="flex items-center justify-center"
        style={{
          minHeight: "55vh",
          paddingLeft: "clamp(1.5rem,8vw,7rem)",
          paddingRight: "clamp(1.5rem,8vw,7rem)",
          textAlign: "center",
        }}
      >
        <p
          className="font-serif"
          style={{
            fontSize: "clamp(1.25rem,3.5vw,2.25rem)",
            color: "var(--fg)",
            fontWeight: 300,
            lineHeight: 1.5,
            maxWidth: "26rem",
          }}
        >
          {ch4.keyInsight}
        </p>
      </section>

      {/* Ch5: ArkiTeki */}
      <ArkitekiChapter />

      {/* Tracking Chain Payoff */}
      <TrackingPayoff />

      {/* Method */}
      <MethodSection />

      {/* Future / AI */}
      <FutureSection />

      {/* Closing */}
      <ClosingSection />
    </main>
  );
}

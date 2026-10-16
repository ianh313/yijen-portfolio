import Hero from "@/components/Hero";
import Chapter from "@/components/Chapter";
import MethodSteps from "@/components/MethodSteps";
import Closing from "@/components/Closing";
import ThemeToggle from "@/components/ThemeToggle";
import TrajectoryLine from "@/components/TrajectoryLine";
import { chapters } from "@/content/chapters";

export default function Home() {
  return (
    <main
      className="relative min-h-screen"
      style={{ background: "var(--bg)", color: "var(--fg)" }}
    >
      {/* Fixed UI */}
      <ThemeToggle />

      {/* Trajectory SVG — positioned absolute inside relative main */}
      <TrajectoryLine />

      {/* Content */}
      <Hero />

      {chapters.map((chapter, i) => (
        <Chapter
          key={chapter.id}
          chapter={chapter}
          index={i}
          hasBreakpoints={chapter.id === "archi" || chapter.id === "uhomes"}
          isReconnect={chapter.id === "arkiteki"}
        />
      ))}

      <MethodSteps />
      <Closing />
    </main>
  );
}

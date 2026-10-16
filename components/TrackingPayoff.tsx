import { trackingPayoff } from "@/content/chapters";
import Reveal from "./Reveal";

function NetworkSVG() {
  return (
    <svg
      width="200"
      height="120"
      viewBox="0 0 200 120"
      fill="none"
      aria-hidden="true"
      style={{ opacity: 0.65 }}
    >
      <line x1="20"  y1="60"  x2="80"  y2="30"  stroke="var(--accent)" strokeWidth="1" />
      <line x1="20"  y1="60"  x2="80"  y2="90"  stroke="var(--accent)" strokeWidth="1" />
      <line x1="80"  y1="30"  x2="140" y2="60"  stroke="var(--accent)" strokeWidth="1" />
      <line x1="80"  y1="90"  x2="140" y2="60"  stroke="var(--accent)" strokeWidth="1" />
      <line x1="140" y1="60"  x2="180" y2="60"  stroke="var(--accent)" strokeWidth="1.5" />
      {([[20,60],[80,30],[80,90],[140,60],[180,60]] as [number,number][]).map(([cx,cy],i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={i === 4 ? 5 : 3.5}
          fill="var(--bg)"
          stroke="var(--accent)"
          strokeWidth={i === 4 ? 2 : 1.5}
        />
      ))}
    </svg>
  );
}

export default function TrackingPayoff() {
  return (
    <section
      id="tracking-payoff"
      className="relative flex items-center justify-center"
      style={{
        minHeight: "80vh",
        paddingLeft: "clamp(1.5rem, 8vw, 7rem)",
        paddingRight: "clamp(1.5rem, 8vw, 7rem)",
        paddingTop: "clamp(4rem, 10vh, 7rem)",
        paddingBottom: "clamp(4rem, 10vh, 7rem)",
      }}
      data-chapter="tracking-payoff"
    >
      <div
        className="j-node"
        data-node="tracking-payoff"
        style={{ top: "50%", left: "clamp(1.5rem,4vw,3rem)" }}
      />

      <div style={{ maxWidth: "32rem", textAlign: "center" }}>
        <Reveal delay={0}>
          <p
            className="font-serif mb-2"
            style={{
              fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
              color: "var(--muted)",
              lineHeight: 1.7,
            }}
          >
            {trackingPayoff.line1}
          </p>
          <p
            className="font-serif mb-2"
            style={{
              fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
              color: "var(--muted)",
              lineHeight: 1.7,
            }}
          >
            {trackingPayoff.line2}
          </p>
          <p
            className="font-serif mb-10"
            style={{
              fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
              color: "var(--fg)",
              fontWeight: 400,
              lineHeight: 1.7,
            }}
          >
            {trackingPayoff.line3}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex justify-center mb-10">
            <NetworkSVG />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "var(--accent)",
              lineHeight: 1.8,
            }}
          >
            {trackingPayoff.line4}
            <br />
            {trackingPayoff.line5}
            <br />
            {trackingPayoff.line6}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

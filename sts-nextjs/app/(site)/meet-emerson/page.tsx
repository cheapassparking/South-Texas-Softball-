import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import StoryCard from "@/components/StoryCard";
import StatPill from "@/components/StatPill";
import FeatureQuote from "@/components/FeatureQuote";
import MediaCard from "@/components/MediaCard";

export const metadata: Metadata = {
  title: "Meet Emerson | South Texas Softball",
  description:
    "Second baseman. Right-handed slapper. Strykers Mata 2K13. Get to know Emerson before the jersey comes on.",
};

export default function MeetEmersonPage() {
  return (
    <>
      <Hero rightPhoto="/images/emerson-fielding.jpg">
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          <span className="hero-badge-txt">South Texas Softball &nbsp;·&nbsp; Est. 2026</span>
        </div>
        <h1 className="hero-title">
          <span className="ht-south">Meet</span>
          <span className="ht-texas">Emerson</span>
        </h1>
        <div className="hero-rule" />
        <div className="hero-pills">
          <span className="hero-pill">2B</span>
          <span className="hero-pill">#22</span>
          <span className="hero-pill">Right-Handed Slapper</span>
        </div>
        <p className="hero-sub">
          Second baseman. Right-handed slapper. Strykers Mata 2K13. Know who she is before the
          jersey comes on.
        </p>
        <div className="hero-btns">
          <Link href="/softball-journey" className="hbtn hbtn-red">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Her Softball Journey
          </Link>
          <Link href="/training" className="hbtn hbtn-blue">
            Her Training
          </Link>
        </div>
      </Hero>

      <div className="section-flag-stripe" />

      {/* ── MEET EMERSON FEATURE ── */}
      <section className="section section-off" id="emerson">
        <div className="section-inner">
          <div className="feature-wrap">
            <div className="feature-photo-frame">
              <Image
                src="/images/emerson-fielding.jpg"
                alt="Emerson fielding at second base"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div className="feature-photo-badge">
                <div className="feature-num">#22</div>
                <div className="feature-pos">
                  <div className="pos">Strykers Mata 2K13</div>
                  <div className="name">Emerson</div>
                  <div className="pos" style={{ marginTop: "2px" }}>
                    2B · Right-Handed Slapper
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-text">
              <p className="section-eyebrow">🌟 Who She Is</p>
              <h2 className="section-title">The Girl Behind the Glove</h2>
              <div className="section-rule" />
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--gray)", marginBottom: "1rem" }}>
                Hi, my name is Emerson and softball is one of my biggest passions in life.
                I&apos;m 13 years old, I play for Strykers Mata 2K13, and I genuinely show up
                every single day for this game. I play second base, I&apos;m developing as a
                right-handed slapper, and I&apos;m chasing a dream to play at the college level.
              </p>
              <FeatureQuote>
                &quot;I have a Bible verse on my bat that I look at every time before I bat. When
                I step on that field, nothing&apos;s gonna work against me. I just go.&quot;
              </FeatureQuote>
              <div className="stats-row">
                <StatPill value="2B" label="Position" />
                <StatPill value="R" label="Slapper" />
                <StatPill value="#22" label="Number" />
                <StatPill value="TX" label="Home" />
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                <Link href="#fun-facts" className="btn btn-red">
                  Fun Facts
                </Link>
                <Link href="/training" className="btn btn-outline">
                  Her Training
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── FUN FACTS ── */}
      <section className="section section-white" id="fun-facts">
        <div className="section-inner">
          <p className="section-eyebrow">⚡ My Pre-At-Bat Ritual</p>
          <h2 className="section-title">Fun Facts About Emerson</h2>
          <div className="section-rule" />
          <div className="stories-grid">
            <StoryCard
              tag=""
              title="⭐ Second Base, Every Play"
              excerpt="I play second base and I love being involved in every single play — no pitch goes by where I'm not locked in."
            />
            <StoryCard
              tag=""
              title="⭐ Right-Handed Slapper"
              excerpt="I am a right-handed slapper — I use my speed to get on base and help my team score."
            />
            <StoryCard
              tag=""
              title="⭐ Number 22, Forever"
              excerpt="My favorite number is 22. Always has been, always will be. ⚾"
            />
            <StoryCard
              tag=""
              title="⭐ Bible Verse on My Bat"
              excerpt="I have a Bible verse on my bat that I look at every time before I bat. It's my anchor."
            />
          </div>
          <FeatureQuote style={{ marginTop: "2rem", maxWidth: "680px" }}>
            &quot;Hard work beats talent when talent doesn&apos;t work hard.&quot; ⚾🔥
          </FeatureQuote>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── FAMILY & SUPPORT ── */}
      <section className="section section-blue" id="family">
        <div className="section-inner">
          <p className="section-eyebrow">❤️ The Foundation</p>
          <h2 className="section-title">Family &amp; Support System</h2>
          <div className="section-rule" />
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem", maxWidth: "680px" }}>
            I literally could not do any of this without my family. My parents have driven me to
            so many practices, paid for so many tournaments, and stayed in the bleachers in
            100-degree South Texas heat without complaining. My family is my biggest motivation.
            I play for them as much as I play for myself.
          </p>
          <div className="media-grid">
            <MediaCard variant="fb" icon="👩" name="Mom" handle="Never misses a game" />
            <MediaCard variant="tiktok" icon="👨" name="Dad" handle="Extra BP, every time" />
            <MediaCard variant="ig" icon="👨‍👩‍👧‍👦" name="Siblings" handle="Loudest in the stands" />
          </div>
          <div className="view-all-row">
            <Link
              href="/softball-journey"
              className="btn btn-outline"
              style={{ borderColor: "#fff", color: "#fff" }}
            >
              My Softball Journey
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import StoryCard from "@/components/StoryCard";
import StatPill from "@/components/StatPill";
import FeatureQuote from "@/components/FeatureQuote";

export const metadata: Metadata = {
  title: "Softball Journey | South Texas Softball",
  description:
    "From the first time Emerson picked up a glove to second base, slapping, and team journey with Strykers Mata 2K13.",
};

export default function SoftballJourneyPage() {
  return (
    <>
      <Hero leftPhoto="/images/santafe-team.jpg">
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          <span className="hero-badge-txt">South Texas Softball &nbsp;·&nbsp; Est. 2026</span>
        </div>
        <h1 className="hero-title">
          <span className="ht-texas">Softball</span>
          <span className="ht-south">Journey</span>
        </h1>
        <div className="hero-rule" />
        <div className="hero-pills">
          <span className="hero-pill">Second Base</span>
          <span className="hero-pill">Slapper</span>
          <span className="hero-pill">Team</span>
        </div>
        <p className="hero-sub">
          From the first time I picked up a glove to where I am now — this is the full story.
        </p>
        <div className="hero-btns">
          <Link href="/training" className="hbtn hbtn-red">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            My Training
          </Link>
          <Link href="/goals" className="hbtn hbtn-blue">
            My Goals
          </Link>
        </div>
      </Hero>

      <div className="section-flag-stripe" />

      {/* ── HOW I STARTED ── */}
      <section className="section section-white" id="started">
        <div className="section-inner">
          <p className="section-eyebrow">📖 The Beginning</p>
          <h2 className="section-title">How I Started Playing Softball</h2>
          <div className="section-rule" />
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--gray)", maxWidth: "740px", marginBottom: "1.5rem" }}>
            Okay so the way I got into softball is kind of funny because I didn&apos;t really
            plan it. I just kind of ended up at a field one day and something about it just
            clicked. I remember watching the older girls play and thinking wow, that looks so
            cool. My parents signed me up and I honestly was terrible at first lol. But I
            didn&apos;t care because I just loved being there.
          </p>
          <FeatureQuote>
            &quot;I didn&apos;t start because I was good. I started because I loved it. The good
            part came from showing up every single day.&quot;
          </FeatureQuote>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── WHY I LOVE SOFTBALL ── */}
      <section className="section section-off" id="love">
        <div className="section-inner">
          <p className="section-eyebrow">❤️ Passion</p>
          <h2 className="section-title">Why I Love Softball</h2>
          <div className="section-rule" />
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--gray)", maxWidth: "740px" }}>
            I love softball for like a million reasons but the main one is the feeling I get
            right before a big play. Everything gets quiet in your head, your body just knows
            what to do. I also love how it&apos;s a team sport but also super personal at the
            same time.
          </p>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── SECOND BASE ── */}
      <section className="section section-white" id="second-base">
        <div className="section-inner">
          <p className="section-eyebrow">🧤 My Position</p>
          <h2 className="section-title">Second Base</h2>
          <div className="section-rule" />
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--gray)", maxWidth: "740px", marginBottom: "1.5rem" }}>
            Second base is honestly one of the most underrated positions on the whole field. You
            get so many balls hit your way, you have to know the situation before every pitch. I
            love the mental part of it just as much as the physical part.
          </p>
          <div className="stats-row" style={{ maxWidth: "600px" }}>
            <StatPill value="⚡" label="First Step" />
            <StatPill value="🧠" label="IQ Play" />
            <StatPill value="🤝" label="SS Combo" />
          </div>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── SLAPPER ── */}
      <section className="section section-blue" id="slapper">
        <div className="section-inner">
          <p className="section-eyebrow">⚡ Offense</p>
          <h2 className="section-title">Slapper</h2>
          <div className="section-rule" />
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "740px", marginBottom: "1.5rem" }}>
            Being a slapper is one of the coolest things I&apos;ve ever worked on. It&apos;s
            super technical and requires a lot of confidence. You&apos;re literally running
            before the ball even leaves your bat, and you have to read the gaps in the defense
            before the pitch is even thrown.
          </p>
          <FeatureQuote style={{ background: "rgba(255,255,255,0.08)", borderColor: "var(--gold-lt)", color: "#fff", maxWidth: "680px" }}>
            &quot;The defense can&apos;t practice for what they can&apos;t predict. That&apos;s
            the slapper&apos;s power.&quot;
          </FeatureQuote>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── TEAM JOURNEY ── */}
      <section className="section section-white" id="team">
        <div className="section-inner">
          <p className="section-eyebrow">🥎 Team</p>
          <h2 className="section-title">My Team Journey</h2>
          <div className="section-rule" />
          <div className="stories-grid">
            <StoryCard
              image="/images/champions-team.jpg"
              tag="Champions"
              title="Super Regionals Champions"
              excerpt="Strykers Mata 2K13 takes the title under the lights — a night nobody on this team will forget."
            />
            <StoryCard
              image="/images/finalist-team.jpg"
              tag="Finalists"
              title="Tournament Finalists"
              excerpt="The full team earns plaques — proof that the work we put in pays off."
            />
          </div>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--gray)", maxWidth: "740px", marginTop: "1.5rem" }}>
            Playing for Strykers Mata 2K13 isn&apos;t just playing softball — it&apos;s being
            part of something bigger than yourself. My team is my family.
          </p>
          <div className="view-all-row">
            <Link href="/training" className="btn btn-red">
              My Training
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

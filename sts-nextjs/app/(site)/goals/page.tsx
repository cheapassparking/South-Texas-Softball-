import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import StoryCard from "@/components/StoryCard";
import FeatureQuote from "@/components/FeatureQuote";

export const metadata: Metadata = {
  title: "Goals | South Texas Softball",
  description:
    "Emerson's goals for this season, her dream for the future, and the Colorado trip goals with Strykers Mata 2K13.",
};

export default function GoalsPage() {
  return (
    <>
      <Hero>
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          <span className="hero-badge-txt">South Texas Softball &nbsp;·&nbsp; Est. 2026</span>
        </div>
        <h1 className="hero-title">
          <span className="ht-softball">Goals</span>
        </h1>
        <div className="hero-rule" />
        <div className="hero-pills">
          <span className="hero-pill">Season</span>
          <span className="hero-pill">Future</span>
          <span className="hero-pill">Colorado</span>
        </div>
        <p className="hero-sub">
          Goals aren&apos;t wishes. They&apos;re commitments. Here&apos;s what I&apos;m chasing
          this season and beyond.
        </p>
        <div className="hero-btns">
          <Link href="/schedule" className="hbtn hbtn-red">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            View Schedule
          </Link>
          <Link href="/thank-you" className="hbtn hbtn-blue">
            Thank You
          </Link>
        </div>
      </Hero>

      <div className="section-flag-stripe" />

      {/* ── GOALS THIS SEASON ── */}
      <section className="section section-white" id="season">
        <div className="section-inner">
          <p className="section-eyebrow">🎯 This Season</p>
          <h2 className="section-title">Goals for This Season</h2>
          <div className="section-rule" />
          <div className="stories-grid">
            <StoryCard
              tag=""
              title="01 · Lock In My Slap Game"
              excerpt="Get my slap percentage up significantly. I want to be a threat every single time I step into the box."
            />
            <StoryCard
              tag=""
              title="02 · Zero Mental Errors"
              excerpt="Physical errors happen. Mental errors are not okay. IQ-locked on defense this season."
            />
            <StoryCard
              tag=""
              title="03 · Win a Championship"
              excerpt="The whole team goal. Go deep in the bracket and bring something home together."
            />
          </div>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── DREAM FOR THE FUTURE ── */}
      <section className="section section-blue" id="future">
        <div className="section-inner">
          <p className="section-eyebrow">🌠 The Vision</p>
          <h2 className="section-title">My Dream for the Future</h2>
          <div className="section-rule" />
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.78, maxWidth: "740px" }}>
            My dream is to play college softball. I want to put on a college jersey and compete
            at that level and prove that all these early mornings and weekends of tournaments
            meant something.
          </p>
          <FeatureQuote style={{ background: "rgba(255,255,255,0.08)", borderColor: "var(--gold-lt)", color: "#fff", maxWidth: "680px", marginTop: "1.5rem" }}>
            &quot;The version of me that plays college softball is built right now, in practice,
            when no one is watching.&quot;
          </FeatureQuote>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── COLORADO TRIP GOALS ── */}
      <section className="section section-off" id="colorado">
        <div className="section-inner">
          <p className="section-eyebrow">🏔️ The Dream Trip</p>
          <h2 className="section-title">Colorado Trip Goals</h2>
          <div className="section-rule" />
          <div className="feature-wrap">
            <div className="feature-photo-frame" style={{ aspectRatio: "16/10", maxHeight: "340px" }}>
              <Image src="/images/santafe-team.jpg" alt="Tournament travel" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="feature-text">
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--gray)" }}>
                Colorado is my number one dream tournament destination. This season it&apos;s
                actually happening — TC Colorado Sparkler Juniors, June 29 – July 5 in Colorado
                Springs!
              </p>
              <div className="view-all-row" style={{ justifyContent: "flex-start", marginTop: "1rem" }}>
                <Link href="/schedule#travel" className="btn btn-red">
                  Tournament Travel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

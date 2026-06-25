import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import StoryCard from "@/components/StoryCard";
import StatPill from "@/components/StatPill";
import FeatureQuote from "@/components/FeatureQuote";
import MediaCard from "@/components/MediaCard";
import { practiceSchedule } from "@/lib/schedule-data";

export const metadata: Metadata = {
  title: "Training | South Texas Softball",
  description:
    "Weekly practice schedule, speed and agility training, favorite drills, game day routine, and recovery for Emerson.",
};

export default function TrainingPage() {
  return (
    <>
      <Hero>
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          <span className="hero-badge-txt">South Texas Softball &nbsp;·&nbsp; Est. 2026</span>
        </div>
        <h1 className="hero-title">
          <span className="ht-softball">Training</span>
        </h1>
        <div className="hero-rule" />
        <div className="hero-pills">
          <span className="hero-pill">Speed</span>
          <span className="hero-pill">Agility</span>
          <span className="hero-pill">Recovery</span>
        </div>
        <p className="hero-sub">
          Champions aren&apos;t built on game days. They&apos;re built on Tuesday nights when
          nobody&apos;s watching.
        </p>
        <div className="hero-btns">
          <Link href="/schedule" className="hbtn hbtn-red">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            View Schedule
          </Link>
          <Link href="/goals" className="hbtn hbtn-blue">
            My Goals
          </Link>
        </div>
      </Hero>

      <div className="section-flag-stripe" />

      {/* ── WEEKLY SCHEDULE ── */}
      <section className="section section-white" id="weekly">
        <div className="section-inner">
          <p className="section-eyebrow">📅 The Grind</p>
          <h2 className="section-title">Weekly Practice Schedule</h2>
          <div className="section-rule" />
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--gray)", maxWidth: "740px", marginBottom: "1.5rem" }}>
            My week is honestly pretty packed but I love it. I&apos;m not someone who sits around
            wishing things would happen — I want to be in the gym, on the field, in the cage,
            doing the work. Consistency is everything.
          </p>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Focus</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {practiceSchedule.map((row) => (
                <tr key={row.date}>
                  <td>{row.date}</td>
                  <td>{row.event}</td>
                  <td>{row.badges[0]?.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <FeatureQuote style={{ marginTop: "2rem", maxWidth: "680px" }}>
            &quot;Six days of work. One day of recovery. Repeat until the dream arrives.&quot;
          </FeatureQuote>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── SPEED & AGILITY ── */}
      <section className="section section-blue" id="agility">
        <div className="section-inner">
          <p className="section-eyebrow">💨 Speed Work</p>
          <h2 className="section-title">Speed &amp; Agility Training</h2>
          <div className="section-rule" />
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "740px", marginBottom: "2rem" }}>
            Speed training is one of my favorite parts of my whole week. The faster I get, the
            more dangerous I am as a slapper, and the more ground I can cover at second base.
          </p>
          <div className="media-grid">
            <MediaCard variant="fb" icon="🏃‍♀️" name="40-Yard Sprints" handle="Pure acceleration" />
            <MediaCard variant="tiktok" icon="🪜" name="Ladder Drills" handle="First-step quickness" />
            <MediaCard variant="ig" icon="🔁" name="Cone Drills" handle="Change of direction" />
            <MediaCard variant="yt" icon="💪" name="Resistance Bands" handle="Explosive strength" />
          </div>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── FAVORITE DRILLS ── */}
      <section className="section section-white" id="drills">
        <div className="section-inner">
          <p className="section-eyebrow">⚙️ The Work</p>
          <h2 className="section-title">My Favorite Drills</h2>
          <div className="section-rule" />
          <div className="stories-grid">
            <StoryCard
              tag=""
              title="💫 Short Hop Drill"
              excerpt="Partner fires short hops at forehand and backhand from 15 feet. Game changer for 2B."
            />
            <StoryCard
              tag=""
              title="⚡ Drop Step Drill"
              excerpt="Ball goes behind me, drop step, sprint, make the catch."
            />
            <StoryCard
              tag=""
              title="🎯 Slap Tee Drill"
              excerpt="Tee at front of box, running slap motion to build muscle memory."
            />
            <StoryCard
              tag=""
              title="🔥 Rapid Fire Fielding"
              excerpt="Coach hits five ground balls in rapid succession. No time to think. Just react."
            />
          </div>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── GAME DAY ROUTINE ── */}
      <section className="section section-off" id="game-day">
        <div className="section-inner">
          <p className="section-eyebrow">🎮 Game Day</p>
          <h2 className="section-title">Game Day Routine</h2>
          <div className="section-rule" />
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--gray)", maxWidth: "740px" }}>
            Game day is my favorite day of the week. From breakfast to warm-up to prayer with the
            team before we take the field — every step gets me locked in and ready to compete.
          </p>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── RECOVERY & NUTRITION ── */}
      <section className="section section-white" id="recovery">
        <div className="section-inner">
          <p className="section-eyebrow">🥗 Body &amp; Mind</p>
          <h2 className="section-title">Recovery &amp; Nutrition</h2>
          <div className="section-rule" />
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--gray)", maxWidth: "740px", marginBottom: "1.5rem" }}>
            Sleep, hydration, real food, and stretching. When I take care of my body, I can tell
            the difference on the field.
          </p>
          <div className="stats-row" style={{ maxWidth: "600px" }}>
            <StatPill value="😴" label="8-9 Hrs Sleep" />
            <StatPill value="💧" label="Hydration" />
            <StatPill value="🥗" label="Real Food" />
          </div>
          <div className="view-all-row">
            <Link href="/schedule" className="btn btn-red">
              View Schedule
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

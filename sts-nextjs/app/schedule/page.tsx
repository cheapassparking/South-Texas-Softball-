import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import ScheduleTable from "@/components/ScheduleTable";
import { tournamentSchedule, calendarPracticeDates } from "@/lib/schedule-data";

export const metadata: Metadata = {
  title: "Spring 2026 Schedule | South Texas Softball",
  description:
    "Emerson's full Spring 2026 tournament schedule and practice dates with Strykers Mata 2K13.",
};

export default function SchedulePage() {
  return (
    <>
      <Hero>
        <div className="hero-badge">
          <div className="hero-badge-dot" />
          <span className="hero-badge-txt">South Texas Softball &nbsp;·&nbsp; Est. 2026</span>
        </div>
        <h1 className="hero-title">
          <span className="ht-south">South</span>
          <span className="ht-texas">Texas</span>
          <span className="ht-softball">Softball</span>
        </h1>
        <div className="hero-rule" />
        <div className="hero-pills">
          <span className="hero-pill">Heart</span>
          <span className="hero-pill">Hustle</span>
          <span className="hero-pill">Faith</span>
          <span className="hero-pill">Family</span>
        </div>
        <p className="hero-sub">Built on Texas pride, team culture, and the love of the game.</p>
        <div className="hero-btns">
          <Link href="/softball-journey" className="hbtn hbtn-red">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Explore the Journey
          </Link>
          <Link href="/meet-emerson" className="hbtn hbtn-blue">
            Meet Emerson
          </Link>
        </div>
      </Hero>

      <div className="section-flag-stripe" />

      {/* ── SCHEDULE ── */}
      <section className="section section-white" id="schedule">
        <div className="section-inner">
          <p className="section-eyebrow">📅 Season</p>
          <h2 className="section-title">Spring 2026 Schedule</h2>
          <div className="section-rule" />
          <ScheduleTable tournaments={tournamentSchedule} practiceDates={calendarPracticeDates} />
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── TOURNAMENT TRAVEL ── */}
      <section className="section section-off" id="travel">
        <div className="section-inner">
          <p className="section-eyebrow">✈️ On the Road</p>
          <h2 className="section-title">Tournament Travel</h2>
          <div className="section-rule" />
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--gray)", maxWidth: "740px" }}>
            Tournament travel is one of my favorite things about playing travel ball. Being on
            the road with your team, sharing hotel rooms, staying up too late laughing — it
            bonds you together. This season&apos;s biggest trip: Colorado Springs for the TC
            Colorado Sparkler Juniors tournament!
          </p>
          <div className="view-all-row">
            <Link href="/goals#colorado" className="btn btn-red">
              Colorado Trip Goals
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

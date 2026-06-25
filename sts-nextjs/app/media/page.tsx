import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import StoryCard from "@/components/StoryCard";
import MediaCard from "@/components/MediaCard";

export const metadata: Metadata = {
  title: "Media | South Texas Softball",
  description:
    "Follow Emerson's softball journey on TikTok, Instagram, Facebook, and YouTube — drills, tournament vlogs, and highlights.",
};

export default function MediaPage() {
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

      {/* ── MEDIA ── */}
      <section className="section section-blue" id="media">
        <div className="section-inner">
          <p className="section-eyebrow">📲 Find Us Online</p>
          <h2 className="section-title">South Texas Softball Media</h2>
          <div className="section-rule" />
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "2rem", maxWidth: "560px", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Follow Emerson&apos;s softball journey across social media — drills, tournament
            vlogs, highlights, and real behind-the-scenes content.
          </p>
          <div className="media-grid">
            <MediaCard variant="tiktok" icon="🎵" name="TikTok" handle="@southtexassoftball" href="#" />
            <MediaCard variant="fb" icon="📘" name="Facebook" handle="South Texas Softball" href="#" />
            <MediaCard variant="ig" icon="📸" name="Instagram" handle="@southtexassoftball" href="#" />
            <MediaCard variant="yt" icon="▶️" name="YouTube" handle="South Texas Softball" href="#" />
          </div>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── FAVORITE VIDEOS ── */}
      <section className="section section-white" id="videos">
        <div className="section-inner">
          <p className="section-eyebrow">🎬 Content</p>
          <h2 className="section-title">Favorite Videos</h2>
          <div className="section-rule" />
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--gray)", maxWidth: "740px", marginBottom: "1.5rem" }}>
            I spend a lot of time on YouTube watching college softball highlights, slapper
            breakdowns, and training videos. When I make my own content I try to make stuff I
            would want to watch — actual stories that show what this journey really looks and
            feels like.
          </p>
          <div className="stories-grid">
            <StoryCard
              tag=""
              title="🏟️ Tournament Vlogs"
              excerpt="Full weekend breakdowns — from first pitch of pool play to the last out of bracket."
            />
            <StoryCard
              tag=""
              title="🎯 Drill Breakdowns"
              excerpt="Showing exactly what I work on and why. For athletes who want to train smarter."
            />
            <StoryCard
              tag=""
              title="🔥 Highlight Reels"
              excerpt="My best plays, best at-bats, and biggest moments compiled together."
            />
          </div>
          <div className="view-all-row">
            <Link href="/gallery" className="btn btn-red">
              View Photo Galleries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

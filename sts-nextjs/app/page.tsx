import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import StoryCard from "@/components/StoryCard";
import StatPill from "@/components/StatPill";
import FeatureQuote from "@/components/FeatureQuote";
import MediaCard from "@/components/MediaCard";

export const metadata: Metadata = {
  title: "South Texas Softball | Emerson's Journey",
  description:
    "Heart, Hustle, Faith, Family. Follow Emerson's softball journey with Strykers Mata 2K13 — second base, right-handed slapper, chasing the dream of college softball.",
};

export default function HomePage() {
  return (
    <>
      <Hero leftPhoto="/images/team-prayer.jpg" rightPhoto="/images/emerson-fielding.jpg">
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
          <Link href="#stories" className="hbtn hbtn-red">
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

      {/* ── TOP STORIES ── */}
      <section className="section section-white" id="stories">
        <div className="section-inner">
          <p className="section-eyebrow">⚾ Latest Stories</p>
          <h2 className="section-title">Top Stories</h2>
          <div className="section-rule" />
          <div className="stories-grid">
            <StoryCard
              image="/images/finalist-team.jpg"
              tag="Tournament"
              title="Strykers Named Tournament Finalists — Full Team Earns Plaques"
              excerpt="The South Texas Strykers showed up and competed hard, earning finalist honors and proving they belong on any stage."
              href="/softball-journey#team"
            />
            <StoryCard
              image="/images/champions-team.jpg"
              tag="Championship"
              title="Super Regionals Champions — Strykers Take the Title Under the Lights"
              excerpt="A night game championship that no one on this team will ever forget. South Texas Strykers — Super Regionals Champions."
              href="/softball-journey#team"
            />
            <StoryCard
              image="/images/santafe-team.jpg"
              tag="Team"
              title="Competing at Santa Fe — A Game-Day to Remember"
              excerpt="Competing at one of Texas's elite softball venues, the Strykers brought the energy and competed at the highest level."
              href="/schedule"
            />
            <StoryCard
              image="/images/team-prayer.jpg"
              imagePosition="center 30%"
              tag="Faith"
              title="Faith Before the Game — A Team That Prays Together, Wins Together"
              excerpt="Kneeling on the turf before competition. This is where South Texas Softball starts — grounded in faith and united as a team."
              href="/meet-emerson#family"
            />
          </div>
          <div className="view-all-row">
            <Link href="/softball-journey" className="btn btn-outline">
              View All Stories
            </Link>
          </div>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── MEET EMERSON PREVIEW ── */}
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
              <p className="section-eyebrow">🌟 Featured Athlete</p>
              <h2 className="section-title">Meet Emerson</h2>
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
                <Link href="/meet-emerson" className="btn btn-red">
                  Her Full Story
                </Link>
                <Link href="/training" className="btn btn-outline">
                  Training Routine
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── SCHEDULE PREVIEW ── */}
      <section className="section section-white" id="schedule">
        <div className="section-inner">
          <p className="section-eyebrow">📅 Season</p>
          <h2 className="section-title">Schedule &amp; Results</h2>
          <div className="section-rule" />
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jan 14, 2026</td>
                <td>Spring Tryout</td>
                <td>Centennial Park</td>
                <td>
                  <span className="badge-upcoming">Upcoming</span>
                </td>
              </tr>
              <tr>
                <td>Mar 20–22, 2026</td>
                <td>USFA Super Regionals 14U</td>
                <td>Pearland or Houston</td>
                <td>
                  <span className="badge-local">Local Team</span>
                </td>
              </tr>
              <tr>
                <td>Jun 29–Jul 5, 2026</td>
                <td>TC Colorado Sparkler Juniors</td>
                <td>Colorado Springs, CO 🏔️</td>
                <td>
                  <span className="badge-upcoming">Goal Trip</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="view-all-row">
            <Link href="/schedule" className="btn btn-blue">
              View Full Schedule
            </Link>
          </div>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── GALLERY PREVIEW ── */}
      <section className="section section-off" id="gallery">
        <div className="section-inner">
          <p className="section-eyebrow">📷 Visual Stories</p>
          <h2 className="section-title">Photo Galleries</h2>
          <div className="section-rule" />
          <div className="gallery-grid">
            <div className="g-thumb">
              <Image src="/images/champions-team.jpg" alt="Super Regionals Champions" fill style={{ objectFit: "cover" }} />
              <div className="g-cap">Super Regionals Champs 🏆</div>
            </div>
            <div className="g-thumb">
              <Image src="/images/finalist-team.jpg" alt="Finalist team photo" fill style={{ objectFit: "cover" }} />
              <div className="g-cap">Tournament Finalists</div>
            </div>
            <div className="g-thumb">
              <Image src="/images/team-prayer.jpg" alt="Team prayer" fill style={{ objectFit: "cover" }} />
              <div className="g-cap">Faith Before the Game 🙏</div>
            </div>
          </div>
          <div className="view-all-row" style={{ marginTop: "1.5rem" }}>
            <Link href="/gallery" className="btn btn-blue">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <div className="section-flag-stripe" />

      {/* ── MEDIA ── */}
      <section className="section section-blue" id="media">
        <div className="section-inner">
          <p className="section-eyebrow">📲 Find Us Online</p>
          <h2 className="section-title">South Texas Softball Media</h2>
          <div className="section-rule" />
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "2rem", maxWidth: "560px", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Follow Emerson&apos;s softball journey across social media — drills, tournament vlogs,
            highlights, and real behind-the-scenes content.
          </p>
          <div className="media-grid">
            <MediaCard variant="tiktok" icon="🎵" name="TikTok" handle="@southtexassoftball" href="#" />
            <MediaCard variant="fb" icon="📘" name="Facebook" handle="South Texas Softball" href="#" />
            <MediaCard variant="ig" icon="📸" name="Instagram" handle="@southtexassoftball" href="#" />
            <MediaCard variant="yt" icon="▶️" name="YouTube" handle="South Texas Softball" href="#" />
          </div>
        </div>
      </section>
    </>
  );
}

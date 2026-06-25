import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import GalleryTabs from "@/components/GalleryTabs";
import { practicesGallery, tournamentsGallery, memoriesGallery } from "@/lib/gallery-data";

export const metadata: Metadata = {
  title: "Photo Gallery | South Texas Softball",
  description:
    "Practice photos, tournament moments, and team memories from Emerson's softball journey.",
};

export default function GalleryPage() {
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

      {/* ── GALLERIES ── */}
      <section className="section section-off" id="gallery">
        <div className="section-inner">
          <p className="section-eyebrow">📷 Visual Stories</p>
          <h2 className="section-title">Photo Galleries</h2>
          <div className="section-rule" />
          <GalleryTabs
            practices={practicesGallery}
            tournaments={tournamentsGallery}
            memories={memoriesGallery}
          />
        </div>
      </section>
    </>
  );
}

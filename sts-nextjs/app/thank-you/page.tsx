import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Thank You | South Texas Softball",
  description:
    "Thank you for following Emerson's softball journey with South Texas Softball.",
};

export default function ThankYouPage() {
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
    </>
  );
}

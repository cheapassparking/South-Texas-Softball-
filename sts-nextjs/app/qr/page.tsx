import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import heroPhoto from "../../images/emerson-hero.jpg";
import {
  activeDonationMethods,
  activeSocialLinks,
  donationFallback,
  type SocialPlatform,
} from "@/lib/links";
import styles from "./qr.module.css";

export const metadata: Metadata = {
  title: "Faith Over Fear | South Texas Softball",
  description:
    "Emerson, number 22. Faith Over Fear. Follow South Texas Softball on TikTok, Instagram, and Facebook, and support her softball journey.",
  alternates: { canonical: "/qr" },
  openGraph: {
    title: "Faith Over Fear | South Texas Softball",
    description:
      "Emerson in her South Texas Softball #22 jersey. Follow along and support her journey.",
    url: "/qr",
    siteName: "South Texas Softball",
    type: "website",
    images: [
      {
        url: "/images/emerson-og.jpg",
        width: 1200,
        height: 630,
        alt: "Emerson in her South Texas Softball number 22 jersey, with the words Faith Over Fear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faith Over Fear | South Texas Softball",
    description:
      "Emerson in her South Texas Softball #22 jersey. Follow along and support her journey.",
    images: ["/images/emerson-og.jpg"],
  },
};

const quickLinks = [
  { href: "/schedule", label: "Schedule" },
  { href: "/meet-emerson", label: "Meet Emerson" },
  { href: "/gallery", label: "Gallery" },
];

function SocialIcon({ id }: { id: SocialPlatform }) {
  if (id === "tiktok") {
    return (
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14.1 3h2.2a5.5 5.5 0 0 0 3.8 3.6v2.3a7.6 7.6 0 0 1-3.8-1.1v6.7a6 6 0 1 1-6-6c.32 0 .64.03.95.08v2.45a3.6 3.6 0 1 0 2.55 3.46V3z"
        />
      </svg>
    );
  }
  if (id === "instagram") {
    return (
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10A2.2 2.2 0 0 0 19.2 17V7A2.2 2.2 0 0 0 17 4.8zM12 8.1A3.9 3.9 0 1 1 8.1 12 3.9 3.9 0 0 1 12 8.1zm0 1.7A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.35 6.4a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05z"
        />
      </svg>
    );
  }
  if (id === "facebook") {
    return (
      <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M14.2 8.4V6.9c0-.7.4-.9 1.1-.9H17V3.4h-2.2C12.1 3.4 11 4.6 11 6.7v1.7H9v2.7h2V20.5h3.2v-9.4h2.2l.4-2.7h-2.6z"
        />
      </svg>
    );
  }
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M10 8.5v7l6-3.5-6-3.5z" />
      <path
        fill="currentColor"
        d="M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9zm-2 0a7 7 0 1 0-7 7 7 7 0 0 0 7-7z"
      />
    </svg>
  );
}

export default function QrPage() {
  const social = activeSocialLinks();
  const donations = activeDonationMethods();

  return (
    <div className={styles.page}>
      <div className={styles.stage}>
      <header className={styles.bar}>
        <Link href="/" className={styles.brand}>
          <span className={styles.mark}>STS</span>
          <span className={styles.brandText}>
            <span className={styles.line1}>Est. 2026</span>
            <span className={styles.line2}>South Texas Softball</span>
          </span>
        </Link>
        <span className={styles.barNumber}>#22</span>
      </header>
      <div className={styles.stripe} />

      <div className={styles.layout}>
        <div className={styles.hero}>
          <Image
            src={heroPhoto}
            alt="Emerson in her South Texas Softball number 22 jersey, holding a bat in the dugout at sunset"
            fill
            priority
            placeholder="blur"
            quality={75}
            sizes="(max-width: 959px) 100vw, 46vw"
            className={styles.heroImage}
          />
          <div className={styles.scrim} />
          <div className={styles.badge}>#22</div>
        </div>

        <div className={styles.copy}>
          <p className={styles.kicker}>South Texas Softball</p>
          <div className={styles.rule} />
          <h1 className={styles.title}>
            <span className={styles.faith}>Faith</span>
            <span className={styles.over}>Over Fear</span>
          </h1>
          <p className={styles.sub}>Emerson · Second base · Strykers Mata 2K13</p>
        </div>

        <div className={styles.panel}>
          {social.length > 0 ? (
            <section aria-labelledby="qr-follow">
              <p className={styles.eyebrow}>Follow along</p>
              <h2 id="qr-follow" className={styles.sectionTitle}>
                Find Emerson
              </h2>
              <div className={styles.socialList}>
                {social.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    className={`${styles.socialBtn} ${styles[link.id]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon id={link.id} />
                    <span className={styles.socialText}>
                      <span className={styles.socialName}>{link.name}</span>
                      <span className={styles.socialHandle}>{link.handle}</span>
                    </span>
                    <span className={styles.go} aria-hidden="true">
                      ↗
                    </span>
                    <span className={styles.srOnly}> (opens in a new tab)</span>
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          <section className={styles.donate} aria-labelledby="qr-donate">
            <p className={styles.eyebrow}>Give back</p>
            <h2 id="qr-donate" className={styles.donateTitle}>
              Support Emerson&apos;s Journey
            </h2>
            <p className={styles.donateCopy}>
              Tournament weekends, travel, and training add up. Every bit of support
              keeps Emerson on the field.
            </p>
            {donations.length > 0 ? (
              <div className={styles.methods}>
                {donations.map((method) => (
                  <a
                    key={method.id}
                    href={method.url}
                    className={styles.method}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Donate with {method.label}
                    <span className={styles.srOnly}> (opens in a new tab)</span>
                  </a>
                ))}
              </div>
            ) : (
              <Link href={donationFallback.href} className={styles.fallback}>
                {donationFallback.label}
              </Link>
            )}
          </section>

          <section className={styles.explore} aria-labelledby="qr-site">
            <h2 id="qr-site" className={styles.srOnly}>
              Explore the website
            </h2>
            <Link href="/" className={styles.visit}>
              Visit the full website
            </Link>
            <div className={styles.quick}>
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.quickLink}>
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
      </div>

      <footer className={styles.foot}>
        <p className={styles.footLine}>Heart · Hustle · Faith · Family</p>
        <p className={styles.footMeta}>South Texas Softball · Est. 2026</p>
      </footer>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { navDropdowns, mobileNavSections } from "@/lib/nav-data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* ── UTILITY BAR ── */}
      <div className="utility-bar">
        <span>🥎 South Texas Softball &nbsp;|&nbsp; Est. 2026</span>
        <div>
          <Link href="/media">TikTok</Link>
          <Link href="/media">Instagram</Link>
          <Link href="/media">YouTube</Link>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <nav className="main-nav">
        <div className="nav-inner">
          <Link className="nav-brand" href="/">
            <div className="nav-brand-mark">STS</div>
            <div className="nav-brand-text">
              <span className="line1">Est. 2026</span>
              <span className="line2">South Texas Softball</span>
            </div>
          </Link>

          <ul className="nav-menu">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>

            {navDropdowns.map((dropdown) => (
              <li className="nav-item" key={dropdown.label}>
                <button className="nav-link">
                  {dropdown.label}{" "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <ul className="dropdown">
                  {dropdown.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            <li className="nav-item">
              <Link className="nav-link" href="/thank-you">
                Thank You
              </Link>
            </li>
          </ul>

          <button
            className={`hamburger ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        {mobileNavSections.map((section) => (
          <div className="mob-section" key={section.label}>
            <div className="mob-section-title">{section.label}</div>
            {section.links.map((link) => (
              <Link
                key={link.href}
                className="mob-link"
                href={link.href}
                onClick={closeMobile}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
        <Link
          className="mob-link"
          href="/thank-you"
          onClick={closeMobile}
          style={{ color: "var(--tx-red)", fontWeight: 800 }}
        >
          Thank You ❤️
        </Link>
      </div>
    </>
  );
}

import Link from "next/link";
import { footerLinks } from "@/lib/nav-data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        South <span>Texas</span> Softball
      </div>
      <div className="footer-tagline">Heart · Hustle · Faith · Family</div>
      <div className="footer-links">
        {footerLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
      <hr className="footer-divider" />
      <div className="footer-copy">
        © 2026 South Texas Softball · Emerson&apos;s Journey · Built with ❤️
        and a lot of dirt on my cleats
      </div>
    </footer>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

type MediaCardProps = {
  variant: "tiktok" | "fb" | "ig" | "yt";
  icon: string;
  name: string;
  handle: string;
  href?: string;
};

export default function MediaCard({ variant, icon, name, handle, href }: MediaCardProps) {
  const variantClass = `mc-${variant}`;
  const content: ReactNode = (
    <>
      <div className="media-icon">{icon}</div>
      <div className="media-name">{name}</div>
      <div className="media-handle">{handle}</div>
    </>
  );

  if (href) {
    const external = href.startsWith("http://") || href.startsWith("https://");
    if (external) {
      return (
        <a
          href={href}
          className={`media-card ${variantClass}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`media-card ${variantClass}`}>
        {content}
      </Link>
    );
  }

  return (
    <div className={`media-card ${variantClass}`} style={{ cursor: "default" }}>
      {content}
    </div>
  );
}

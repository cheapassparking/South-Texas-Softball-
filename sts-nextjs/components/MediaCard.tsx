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

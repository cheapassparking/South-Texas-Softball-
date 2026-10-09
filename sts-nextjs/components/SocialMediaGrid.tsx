import MediaCard from "@/components/MediaCard";
import { activeSocialLinks, type SocialPlatform } from "@/lib/links";

const presentation: Record<
  SocialPlatform,
  { variant: "tiktok" | "fb" | "ig" | "yt"; icon: string }
> = {
  tiktok: { variant: "tiktok", icon: "🎵" },
  instagram: { variant: "ig", icon: "📸" },
  facebook: { variant: "fb", icon: "📘" },
  youtube: { variant: "yt", icon: "▶️" },
};

export default function SocialMediaGrid() {
  return (
    <div className="media-grid">
      {activeSocialLinks().map((link) => {
        const look = presentation[link.id];
        return (
          <MediaCard
            key={link.id}
            variant={look.variant}
            icon={look.icon}
            name={link.name}
            handle={link.handle}
            href={link.url}
          />
        );
      })}
    </div>
  );
}

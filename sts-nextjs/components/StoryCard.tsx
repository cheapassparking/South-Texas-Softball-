import Link from "next/link";

type StoryCardProps = {
  image?: string;
  imagePosition?: string;
  tag: string;
  title: string;
  excerpt: string;
  href?: string;
};

export default function StoryCard({
  image,
  imagePosition,
  tag,
  title,
  excerpt,
  href,
}: StoryCardProps) {
  return (
    <div className="story-card">
      {image && (
        <div
          className="story-img"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: imagePosition || "center",
          }}
        >
          <div className="story-img-overlay" />
          <span className="story-tag">{tag}</span>
        </div>
      )}
      <div className="story-body">
        <h3 className="story-title">{title}</h3>
        <p className="story-excerpt">{excerpt}</p>
        {href && (
          <Link href={href} className="story-link">
            Read More{" "}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}

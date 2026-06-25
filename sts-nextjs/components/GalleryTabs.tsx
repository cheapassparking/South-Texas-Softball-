"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/lib/gallery-data";

type GalleryTabsProps = {
  practices: GalleryItem[];
  tournaments: GalleryItem[];
  memories: GalleryItem[];
};

type TabKey = "practices" | "tournaments" | "memories";

export default function GalleryTabs({ practices, tournaments, memories }: GalleryTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("practices");

  const data: Record<TabKey, GalleryItem[]> = {
    practices,
    tournaments,
    memories,
  };

  const tabs: { key: TabKey; label: string }[] = [
    { key: "practices", label: "Practices" },
    { key: "tournaments", label: "Tournaments" },
    { key: "memories", label: "Team Memories" },
  ];

  return (
    <>
      <div className="gallery-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`g-tab ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {data[activeTab].map((item, i) => (
          <div className="g-thumb" key={i}>
            {item.image ? (
              <>
                <Image
                  src={item.image}
                  alt={item.alt || item.caption}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="g-cap">{item.caption}</div>
              </>
            ) : (
              <div className="g-placeholder">
                <span>{item.placeholderEmoji}</span>
                {item.caption}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

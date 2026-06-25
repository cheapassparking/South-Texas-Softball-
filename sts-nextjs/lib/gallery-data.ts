export type GalleryItem = {
  image?: string;
  alt?: string;
  caption: string;
  placeholderEmoji?: string;
};

export const practicesGallery: GalleryItem[] = [
  { image: "/images/emerson-fielding.jpg", alt: "Emerson at second base", caption: "Emerson — 2B Ready" },
  { placeholderEmoji: "🏏", caption: "Batting Practice" },
  { placeholderEmoji: "⚡", caption: "Speed Drills" },
  { placeholderEmoji: "🧤", caption: "Fielding Reps" },
  { placeholderEmoji: "🎯", caption: "Slap Tee Work" },
  { placeholderEmoji: "💪", caption: "Agility Training" },
];

export const tournamentsGallery: GalleryItem[] = [
  { image: "/images/champions-team.jpg", alt: "Super Regionals Champions", caption: "Super Regionals Champs 🏆" },
  { image: "/images/finalist-team.jpg", alt: "Finalist team photo", caption: "Tournament Finalists" },
  { image: "/images/santafe-team.jpg", alt: "Santa Fe field", caption: "Santa Fe — Game Day" },
  { placeholderEmoji: "🏟️", caption: "Bracket Play" },
  { placeholderEmoji: "🎉", caption: "Win Celebration" },
  { placeholderEmoji: "📣", caption: "Dugout Energy" },
];

export const memoriesGallery: GalleryItem[] = [
  { image: "/images/team-prayer.jpg", alt: "Team prayer", caption: "Faith Before the Game 🙏" },
  { placeholderEmoji: "🍦", caption: "Post-Game Treats" },
  { placeholderEmoji: "🌙", caption: "Hotel Memories" },
  { placeholderEmoji: "🚌", caption: "Tournament Road Trip" },
  { placeholderEmoji: "🎵", caption: "Dugout Music" },
  { placeholderEmoji: "📸", caption: "Candid Moments" },
];

// ══════════════════════════════════════════════════════════
// NAVIGATION DATA
// Single source of truth for the nav dropdowns, mobile drawer,
// and footer links. Edit here once — every page picks it up.
// ══════════════════════════════════════════════════════════

export type NavLink = {
  href: string;
  label: string;
};

export type NavDropdown = {
  label: string;
  links: NavLink[];
};

export const navDropdowns: NavDropdown[] = [
  {
    label: "About",
    links: [
      { href: "/meet-emerson", label: "Meet Emerson" },
      { href: "/meet-emerson#fun-facts", label: "Fun Facts" },
      { href: "/meet-emerson#family", label: "Family & Support" },
    ],
  },
  {
    label: "Softball Journey",
    links: [
      { href: "/softball-journey#started", label: "How I Started" },
      { href: "/softball-journey#love", label: "Why I Love Softball" },
      { href: "/softball-journey#second-base", label: "Second Base" },
      { href: "/softball-journey#slapper", label: "Slapper" },
      { href: "/softball-journey#team", label: "Team Journey" },
    ],
  },
  {
    label: "Training",
    links: [
      { href: "/training#weekly", label: "Weekly Schedule" },
      { href: "/training#agility", label: "Speed & Agility" },
      { href: "/training#drills", label: "Favorite Drills" },
      { href: "/training#game-day", label: "Game Day Routine" },
      { href: "/training#recovery", label: "Recovery & Nutrition" },
    ],
  },
  {
    label: "Media",
    links: [
      { href: "/media", label: "South Texas Softball" },
      { href: "/media#videos", label: "Favorite Videos" },
      { href: "/gallery#practices", label: "Photo Gallery: Practices" },
      { href: "/gallery#tournaments", label: "Photo Gallery: Tournaments" },
    ],
  },
  {
    label: "Travel & Goals",
    links: [
      { href: "/schedule#travel", label: "Tournament Travel" },
      { href: "/goals#colorado", label: "Colorado Trip Goals" },
      { href: "/goals#season", label: "Goals This Season" },
      { href: "/goals#future", label: "Dream for the Future" },
    ],
  },
];

export const footerLinks: NavLink[] = [
  { href: "/meet-emerson", label: "About" },
  { href: "/softball-journey", label: "Softball Journey" },
  { href: "/schedule", label: "Schedule" },
  { href: "/gallery", label: "Gallery" },
  { href: "/media", label: "Media" },
  { href: "/goals", label: "Goals" },
  { href: "/thank-you", label: "Thank You" },
];

export const mobileNavSections: NavDropdown[] = navDropdowns;

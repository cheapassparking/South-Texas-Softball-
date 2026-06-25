// ══════════════════════════════════════════════════════════
// SCHEDULE DATA
// Spring 2026 tournament and practice schedule.
// Badge values map directly to CSS classes in globals.css:
// upcoming | cancelled | paid | local | payevent
// ══════════════════════════════════════════════════════════

export type BadgeType = "upcoming" | "cancelled" | "paid" | "local" | "payevent";

export type ScheduleRow = {
  date: string;
  event: string;
  location: string;
  badges: { label: string; type: BadgeType }[];
};

export const tournamentSchedule: ScheduleRow[] = [
  { date: "Jan 14, 2026", event: "Spring Tryout", location: "Centennial Park", badges: [{ label: "7:30–9:30 PM", type: "upcoming" }] },
  { date: "Jan 17, 2026", event: "Strykers Organization Day", location: "Santa Fe High School", badges: [{ label: "1:00–5:00 PM", type: "upcoming" }] },
  { date: "Feb 7–8, 2026", event: "USFA College Classic", location: "Scrapyard, Conroe", badges: [{ label: "Cancelled", type: "cancelled" }] },
  { date: "Feb 20–22, 2026", event: "USFA Ballpark Blast", location: "League City or Pearland", badges: [{ label: "Upcoming", type: "upcoming" }] },
  { date: "Feb 28–Mar 1, 2026", event: "TC Bombers Shootout", location: "College Station", badges: [{ label: "Local Team", type: "local" }] },
  { date: "Mar 7–8, 2026", event: "TC Southwest", location: "College Station", badges: [{ label: "Cancelled", type: "cancelled" }, { label: "Local Team", type: "local" }] },
  { date: "Mar 20–22, 2026", event: "USFA Super Regionals 14U", location: "Pearland or Houston", badges: [{ label: "Local Team", type: "local" }] },
  { date: "Apr 10–12, 2026", event: "USFA Gold Cup 3 14U", location: "Pearland or League City", badges: [{ label: "Paid", type: "paid" }] },
  { date: "Apr 17–19, 2026", event: "USFA Angels for Autism 14U", location: "Rosenberg or Sugar Land", badges: [{ label: "Pay at Event", type: "payevent" }] },
  { date: "May 8–10, 2026", event: "PG TX Elite Kickoff 14U", location: "Pearland", badges: [{ label: "Paid", type: "paid" }] },
  { date: "May 15–17, 2026", event: "USFA State 12U", location: "Rosenberg", badges: [{ label: "Local Team", type: "local" }] },
  { date: "May 23, 2026", event: "TC Spring Klein RR 12U", location: "Spring Klein", badges: [{ label: "Local Team", type: "local" }] },
  { date: "Jun 5–7, 2026", event: "Triple Crown State 12U", location: "Plano", badges: [{ label: "Upcoming", type: "upcoming" }] },
  { date: "Jun 12–14, 2026", event: "USFA Road to WS", location: "Splendora or Rosenberg", badges: [{ label: "Pay at Event", type: "payevent" }] },
  { date: "Jun 20–21, 2026", event: "Two-A-Days Practice", location: "TBD", badges: [{ label: "TBD", type: "upcoming" }] },
  { date: "Jun 29–Jul 5, 2026", event: "TC Colorado Sparkler Juniors", location: "Colorado Springs, CO 🏔️", badges: [{ label: "Goal Trip", type: "upcoming" }] },
  { date: "Jul 9–12, 2026", event: "TC Southwest Nationals", location: "Greater Houston Area", badges: [{ label: "Local Team", type: "local" }] },
  { date: "Jul 16–19, 2026", event: "USA Select WFC Championship", location: "Scrapyard or League City", badges: [{ label: "Upcoming", type: "upcoming" }] },
  { date: "Jul 26–Aug 2, 2026", event: "PGF National Championships", location: "California", badges: [{ label: "Upcoming", type: "upcoming" }] },
];

export const practiceSchedule: ScheduleRow[] = [
  { date: "Monday", event: "Self Practice", location: "—", badges: [{ label: "Flexible", type: "upcoming" }] },
  { date: "Tuesday", event: "Lessons with Coach", location: "—", badges: [{ label: "8:00 PM", type: "upcoming" }] },
  { date: "Wednesday", event: "Team Practice", location: "Friendswood", badges: [{ label: "6:30–9:30 PM", type: "upcoming" }] },
  { date: "Thursday", event: "Self Practice / Agility / Gym", location: "—", badges: [{ label: "Flexible", type: "upcoming" }] },
  { date: "Friday", event: "Tournament Prep", location: "—", badges: [{ label: "Flexible", type: "upcoming" }] },
  { date: "Saturday", event: "Tournament", location: "Varies", badges: [{ label: "All Day", type: "upcoming" }] },
  { date: "Sunday", event: "Tournament", location: "Varies", badges: [{ label: "All Day", type: "upcoming" }] },
];

// Specific calendar practice dates shown on the Schedule page's "Practice Dates" tab
// (distinct from the recurring weekly routine above, which lives on the Training page)
export const calendarPracticeDates: ScheduleRow[] = [
  { date: "Jan 21, 2026", event: "First Spring Practice", location: "TBD", badges: [{ label: "TBD", type: "upcoming" }] },
  { date: "Feb 8, 2026", event: "Practice", location: "TBD", badges: [{ label: "12:00–2:00 PM", type: "upcoming" }] },
  { date: "Feb 4 – Jul 22, 2026", event: "Weekly Practice", location: "Friendswood", badges: [{ label: "Every Wed, 6:30–9:30 PM", type: "upcoming" }] },
];

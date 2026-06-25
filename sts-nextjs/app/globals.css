@tailwind base;
@tailwind components;
@tailwind utilities;

/* ══════════════════════════════════════════════════════════
   SOUTH TEXAS SOFTBALL — DESIGN SYSTEM
   This is the exact, unmodified visual design from the original
   site (v0.1), preserved here as global CSS so the v0.2 React/
   Next.js rebuild looks pixel-identical. Do not change colors,
   fonts, spacing, or animations here without explicit approval —
   this file IS the brand.
══════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════
   TOKENS
══════════════════════════════════════════ */
:root {
  --tx-blue:   #002868;
  --tx-red:    #BF0A30;
  --tx-red-h:  #a00827;
  --white:     #FFFFFF;
  --off-white: #F6F8FA;
  --tan:       #F2EAD8;
  --gold:      #C9973A;
  --gold-lt:   #F5C518;
  --navy-text: #001A4A;
  --gray:      #4A5568;
  --gray-lt:   #E8ECF2;
  --border:    #D6DCE8;
  --shadow:    0 2px 16px rgba(0,40,104,0.10);
  --shadow-lg: 0 8px 40px rgba(0,40,104,0.16);
  --r:         8px;
  --r-lg:      14px;
}
*,*::before,*::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { font-family: 'Arial', 'Helvetica Neue', sans-serif; background:var(--off-white); color:var(--navy-text); overflow-x:hidden; }

/* ══════════════════════════════════════════
   TOP UTILITY BAR
══════════════════════════════════════════ */
.utility-bar {
  background: var(--tx-blue);
  padding: 0.3rem 1.5rem;
  display: flex; align-items:center; justify-content:space-between;
  font-size:0.72rem; color:rgba(255,255,255,0.8);
  letter-spacing:0.06em; text-transform:uppercase;
}
.utility-bar a { color:rgba(255,255,255,0.75); text-decoration:none; margin-left:1rem; transition:color .2s; }
.utility-bar a:hover { color:#fff; }

/* ══════════════════════════════════════════
   MAIN NAV
══════════════════════════════════════════ */
.main-nav {
  position:sticky; top:0; z-index:900;
  background:#fff;
  border-bottom: 3px solid var(--tx-red);
  box-shadow: 0 2px 12px rgba(0,40,104,0.10);
}
.nav-inner {
  max-width:1180px; margin:0 auto;
  display:flex; align-items:center; justify-content:space-between;
  padding:0 1.5rem; height:64px;
}
.nav-brand {
  display:flex; align-items:center; gap:0.75rem; text-decoration:none;
}
.nav-brand-mark {
  width:44px; height:44px; border-radius:50%;
  background: var(--tx-blue);
  display:flex; align-items:center; justify-content:center;
  font-size:1.3rem; font-weight:900; color:var(--gold-lt);
  font-style:italic; letter-spacing:-1px;
  flex-shrink:0;
  border: 2px solid var(--tx-red);
}
.nav-brand-text {
  line-height:1.1;
}
.nav-brand-text .line1 {
  font-size:0.72rem; font-weight:700; letter-spacing:0.18em;
  text-transform:uppercase; color:var(--tx-red);
}
.nav-brand-text .line2 {
  font-size:1.05rem; font-weight:900; letter-spacing:0.04em;
  text-transform:uppercase; color:var(--tx-blue);
}
.nav-menu {
  display:flex; align-items:center; gap:0; list-style:none;
}
.nav-item {
  position:relative;
}
.nav-link {
  display:flex; align-items:center; gap:0.3rem;
  padding:0 1.05rem; height:64px;
  font-size:0.8rem; font-weight:700; letter-spacing:0.06em; text-transform:uppercase;
  color:var(--navy-text); text-decoration:none;
  border-bottom:3px solid transparent;
  transition:all .2s;
  white-space:nowrap;
  cursor:pointer;
  background:none; border:none; border-bottom:3px solid transparent;
  font-family:inherit;
}
.nav-link:hover, .nav-item:hover > .nav-link {
  color:var(--tx-red); border-bottom-color:var(--tx-red);
}
.nav-link svg { transition:transform .2s; }
.nav-item:hover > .nav-link svg { transform:rotate(180deg); }

/* Dropdown */
.dropdown {
  display:none;
  position:absolute; top:calc(100% + 3px); left:0;
  min-width:210px;
  background:#fff;
  border-top:3px solid var(--tx-red);
  border-radius:0 0 var(--r) var(--r);
  box-shadow: var(--shadow-lg);
  list-style:none; z-index:999;
  animation: dropIn .18s ease;
}
@keyframes dropIn { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
.nav-item:hover > .dropdown { display:block; }
.dropdown li a {
  display:block; padding:0.65rem 1.2rem;
  font-size:0.82rem; font-weight:600; color:var(--navy-text); text-decoration:none;
  border-left:3px solid transparent;
  transition:all .18s;
}
.dropdown li a:hover {
  color:var(--tx-red); border-left-color:var(--tx-red);
  background:var(--off-white);
}
.dropdown li:last-child a { border-radius:0 0 var(--r) var(--r); }

/* Hamburger */
.hamburger { display:none; background:none; border:none; cursor:pointer; padding:8px; }
.hamburger span { display:block; width:24px; height:2px; background:var(--navy-text); margin:5px 0; transition:all .3s; border-radius:2px; }
.hamburger.open span:nth-child(1) { transform:translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity:0; }
.hamburger.open span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }

/* Mobile drawer */
.mobile-drawer {
  display:none; position:fixed; top:0; left:0; right:0; bottom:0; z-index:800;
  background:#fff; overflow-y:auto; padding:80px 1.5rem 2rem;
  transform:translateX(-100%); transition:transform .3s cubic-bezier(.4,0,.2,1);
}
.mobile-drawer.open { transform:translateX(0); }
.mob-section { margin-bottom:1.2rem; }
.mob-section-title {
  font-size:0.65rem; font-weight:700; letter-spacing:0.2em; text-transform:uppercase;
  color:var(--tx-red); padding:0.5rem 0; border-bottom:1px solid var(--border);
  margin-bottom:0.3rem;
}
.mob-link {
  display:block; padding:0.6rem 0.5rem;
  font-size:0.92rem; font-weight:600; color:var(--navy-text); text-decoration:none;
  border-left:3px solid transparent; transition:all .18s;
}
.mob-link:hover { color:var(--tx-red); border-left-color:var(--tx-red); }

/* ══════════════════════════════════════════
   HERO
══════════════════════════════════════════ */
.hero {
  position:relative; overflow:hidden;
  min-height:100vh;
  display:flex; align-items:center; justify-content:center;
  background: linear-gradient(160deg, #001A4A 0%, #002868 45%, #0A3580 100%);
}

/* Texas flag ghost */
.hero-flag {
  position:absolute; inset:0; z-index:1; pointer-events:none;
}
.hero-flag svg { width:100%; height:100%; }

/* Turf stripes */
.hero-turf {
  position:absolute; inset:0; z-index:2; pointer-events:none; opacity:0.35;
  background:
    repeating-linear-gradient(180deg,
      rgba(10,60,20,0.45) 0px, rgba(10,60,20,0.45) 48px,
      rgba(5,40,12,0.45)  48px, rgba(5,40,12,0.45)  96px
    );
  animation:turfScroll 30s linear infinite;
}
@keyframes turfScroll { from{background-position:0 0} to{background-position:0 192px} }

/* Seam pattern */
.hero-seams {
  position:absolute; inset:0; z-index:3; pointer-events:none; opacity:0.15;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cpath d='M60 20 Q200 -30 340 20' fill='none' stroke='%23BF0A30' stroke-width='2'/%3E%3Cpath d='M60 380 Q200 430 340 380' fill='none' stroke='%23BF0A30' stroke-width='2'/%3E%3Ccircle cx='200' cy='200' r='160' fill='none' stroke='rgba(255,255,255,0.07)' stroke-width='1'/%3E%3C/svg%3E");
  background-size:400px 400px;
  animation:seamDrift 60s linear infinite;
}
@keyframes seamDrift { from{background-position:0 0} to{background-position:400px 400px} }

/* Stadium glow */
.hero-glow {
  position:absolute; inset:0; z-index:4; pointer-events:none;
  background:
    radial-gradient(ellipse 70% 50% at 10% 0%, rgba(201,151,58,0.18) 0%, transparent 65%),
    radial-gradient(ellipse 70% 50% at 90% 0%, rgba(201,151,58,0.18) 0%, transparent 65%),
    radial-gradient(ellipse 60% 80% at 50% 100%, rgba(191,10,48,0.12) 0%, transparent 60%);
}

/* Photo layers */
.hero-photo {
  position:absolute; z-index:5; pointer-events:none;
  background-size:cover; background-position:center;
  opacity:0;
  animation:photoFade 10s ease-in-out infinite;
}
.hp-left  { top:0; left:0; width:30%; height:100%; animation-delay:0s;
             mask-image:linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 100%);
             -webkit-mask-image:linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 100%); }
.hp-right { top:0; right:0; width:30%; height:100%; animation-delay:5s;
             mask-image:linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 100%);
             -webkit-mask-image:linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 100%); }
@keyframes photoFade {
  0%,100%{opacity:0} 20%{opacity:0.35} 50%{opacity:0.45} 80%{opacity:0.35}
}

/* Overlay */
.hero-overlay {
  position:absolute; inset:0; z-index:6;
  background:
    linear-gradient(to bottom, rgba(0,26,74,0.38) 0%, rgba(0,26,74,0.18) 50%, rgba(0,26,74,0.55) 100%),
    radial-gradient(ellipse 50% 60% at 50% 50%, transparent 30%, rgba(0,26,74,0.45) 100%);
}

/* Hero canvas for particles */
.hero-particles-canvas { position:absolute; inset:0; z-index:7; pointer-events:none; }

/* Hero content */
.hero-content {
  position:relative; z-index:10;
  text-align:center; padding:2rem 1.5rem;
  max-width:780px; width:100%;
  margin:0 auto;
  left:0; right:0;
}
.hero-badge {
  display:inline-flex; align-items:center; gap:0.5rem;
  background:rgba(191,10,48,0.18);
  border:1px solid rgba(191,10,48,0.45);
  border-radius:100px; padding:0.35rem 1.1rem; margin-bottom:1.8rem;
  backdrop-filter:blur(8px);
}
.hero-badge-dot { width:7px; height:7px; border-radius:50%; background:#BF0A30; animation:dotPulse 1.6s ease-in-out infinite; }
@keyframes dotPulse { 0%,100%{box-shadow:0 0 0 0 rgba(191,10,48,0.7)} 50%{box-shadow:0 0 0 5px rgba(191,10,48,0)} }
.hero-badge-txt { font-size:0.68rem; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:rgba(255,255,255,0.85); }

.hero-title {
  font-size:clamp(3rem, 10vw, 7.5rem);
  font-weight:900; font-style:italic; line-height:0.88;
  text-transform:uppercase; letter-spacing:-0.01em;
  text-shadow:0 4px 32px rgba(0,0,0,0.7);
  margin-bottom:0.2em;
}
.ht-south   { display:block; color:#BF0A30; text-shadow:0 0 60px rgba(191,10,48,0.45),0 4px 8px rgba(0,0,0,0.8); }
.ht-texas   { display:block; color:#5B9BD5; text-shadow:0 0 60px rgba(91,155,213,0.4),0 4px 8px rgba(0,0,0,0.8); }
.ht-softball{ display:block; color:#FFFFFF; text-shadow:0 0 60px rgba(255,255,255,0.35),0 4px 8px rgba(0,0,0,0.8); letter-spacing:0.03em; }

.hero-rule { width:0; height:3px; background:linear-gradient(90deg,transparent,#C9973A,transparent); margin:1rem auto; border-radius:2px; animation:ruleExpand 1.2s ease 0.8s forwards; }
@keyframes ruleExpand{ to{width:100px} }

.hero-pills { display:flex; flex-wrap:wrap; justify-content:center; gap:0.5rem; margin-bottom:1.4rem; }
.hero-pill {
  font-size:clamp(0.78rem,2vw,0.95rem); font-weight:700; letter-spacing:0.14em; text-transform:uppercase;
  color:#F5C518; background:rgba(245,197,24,0.08); border:1px solid rgba(245,197,24,0.3);
  border-radius:100px; padding:0.28rem 0.9rem; backdrop-filter:blur(6px);
}
.hero-sub {
  color:rgba(255,255,255,0.72); font-size:clamp(0.88rem,2vw,1.05rem); line-height:1.75;
  max-width:520px; margin:0 auto 2rem;
}
.hero-btns { display:flex; gap:0.9rem; flex-wrap:wrap; justify-content:center; }
.hbtn {
  display:inline-flex; align-items:center; gap:0.45rem;
  padding:0.85rem 2rem; border-radius:5px;
  font-size:0.82rem; font-weight:800; letter-spacing:0.07em; text-transform:uppercase;
  cursor:pointer; border:none; text-decoration:none; transition:all .22s;
}
.hbtn-red  { background:var(--tx-red); color:#fff; box-shadow:0 4px 20px rgba(191,10,48,0.4); }
.hbtn-red:hover  { background:var(--tx-red-h); transform:translateY(-2px); box-shadow:0 8px 28px rgba(191,10,48,0.5); }
.hbtn-blue { background:rgba(255,255,255,0.12); color:#fff; border:2px solid rgba(255,255,255,0.35); backdrop-filter:blur(6px); }
.hbtn-blue:hover { background:rgba(255,255,255,0.2); border-color:#fff; transform:translateY(-2px); }

/* Scroll arrow */
.hero-scroll {
  position:absolute; bottom:1.8rem; left:50%; transform:translateX(-50%); z-index:10;
  color:rgba(255,255,255,0.4); font-size:0.62rem; font-weight:700; letter-spacing:0.2em;
  text-transform:uppercase; text-align:center;
  animation:scrollBob 2.5s ease-in-out 2s infinite;
}
@keyframes scrollBob { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(7px)} }
.hero-scroll svg { display:block; margin:0.3rem auto 0; stroke:rgba(245,197,24,0.5); }

/* ══════════════════════════════════════════
   PAGE SECTIONS
══════════════════════════════════════════ */
.section { padding:4.5rem 1.5rem; }
.section-inner { max-width:1180px; margin:0 auto; }
.section-white  { background:#fff; }
.section-off    { background:var(--off-white); }
.section-blue   { background:var(--tx-blue); color:#fff; }
.section-tan    { background:var(--tan); }

.section-eyebrow {
  font-size:0.68rem; font-weight:700; letter-spacing:0.22em; text-transform:uppercase;
  color:var(--tx-red); margin-bottom:0.5rem;
}
.section-title {
  font-size:clamp(1.6rem,4vw,2.5rem); font-weight:900; font-style:italic;
  text-transform:uppercase; letter-spacing:0.02em; color:var(--tx-blue);
  margin-bottom:0.5rem;
}
.section-blue .section-eyebrow { color:var(--gold-lt); }
.section-blue .section-title { color:#fff; }
.section-rule {
  width:48px; height:3px; background:var(--tx-red); border-radius:2px; margin:0.75rem 0 2rem;
}
.section-blue .section-rule { background:var(--gold-lt); }

/* ── TOP STORIES ── */
.stories-grid {
  display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1.4rem;
}
.story-card {
  background:#fff; border-radius:var(--r-lg);
  border:1px solid var(--border); overflow:hidden;
  box-shadow:var(--shadow); transition:all .22s; display:flex; flex-direction:column;
}
.story-card:hover { transform:translateY(-5px); box-shadow:var(--shadow-lg); }
.story-img {
  height:200px; background-size:cover; background-position:center;
  position:relative; overflow:hidden;
}
.story-img-overlay {
  position:absolute; inset:0;
  background:linear-gradient(to top, rgba(0,26,74,0.6) 0%, transparent 60%);
}
.story-tag {
  position:absolute; top:0.75rem; left:0.75rem;
  background:var(--tx-red); color:#fff;
  font-size:0.6rem; font-weight:700; letter-spacing:0.14em; text-transform:uppercase;
  padding:0.25rem 0.65rem; border-radius:100px;
}
.story-body { padding:1.2rem; flex:1; display:flex; flex-direction:column; }
.story-title { font-size:1rem; font-weight:800; color:var(--navy-text); margin-bottom:0.4rem; line-height:1.3; }
.story-excerpt { font-size:0.85rem; color:var(--gray); line-height:1.6; flex:1; margin-bottom:1rem; }
.story-link {
  display:inline-flex; align-items:center; gap:0.35rem;
  font-size:0.75rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase;
  color:var(--tx-red); text-decoration:none; transition:gap .2s;
}
.story-link:hover { gap:0.6rem; }

/* ── EMERSON FEATURE ── */
.feature-wrap {
  display:grid; grid-template-columns:1fr 1fr; gap:3rem; align-items:center;
}
.feature-photo-frame {
  position:relative; border-radius:var(--r-lg); overflow:hidden;
  aspect-ratio:3/4; max-height:520px;
  box-shadow:var(--shadow-lg);
  border:3px solid var(--tx-red);
}
.feature-photo-frame img { width:100%; height:100%; object-fit:cover; display:block; }
.feature-photo-badge {
  position:absolute; bottom:1.2rem; left:1.2rem; right:1.2rem;
  background:rgba(0,26,74,0.88); backdrop-filter:blur(8px);
  border-radius:var(--r); padding:0.9rem 1.1rem;
  display:flex; align-items:center; gap:1rem;
}
.feature-num {
  font-size:2.8rem; font-weight:900; font-style:italic; color:var(--gold-lt);
  line-height:1; flex-shrink:0;
}
.feature-pos { color:#fff; }.feature-pos .pos { font-size:0.65rem; font-weight:700; letter-spacing:0.15em; text-transform:uppercase; color:rgba(255,255,255,0.55); }
.feature-pos .name { font-size:1.1rem; font-weight:800; }
.feature-text { }
.feature-text .section-title { margin-bottom:1rem; }
.feature-quote {
  background:var(--off-white); border-left:4px solid var(--tx-red);
  border-radius:0 var(--r) var(--r) 0; padding:1.1rem 1.3rem; margin:1.5rem 0;
  font-size:1rem; font-style:italic; color:var(--navy-text); line-height:1.6;
}
.stats-row { display:flex; gap:1.2rem; flex-wrap:wrap; margin:1.5rem 0; }
.stat-pill {
  background:var(--tx-blue); color:#fff;
  border-radius:var(--r); padding:0.75rem 1.2rem; text-align:center; flex:1; min-width:90px;
}
.stat-pill .sv { font-size:1.6rem; font-weight:900; color:var(--gold-lt); display:block; line-height:1; }
.stat-pill .sl { font-size:0.62rem; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:rgba(255,255,255,0.65); margin-top:0.2rem; }

/* ── SCHEDULE ── */
.schedule-tabs { display:flex; gap:0; border-bottom:2px solid var(--border); margin-bottom:2rem; }
.s-tab {
  padding:0.7rem 1.4rem; font-size:0.78rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase;
  cursor:pointer; border-bottom:3px solid transparent; margin-bottom:-2px;
  color:var(--gray); transition:all .2s; background:none; border:none; border-bottom:3px solid transparent; font-family:inherit;
}
.s-tab.active { color:var(--tx-red); border-bottom-color:var(--tx-red); }
.schedule-table { width:100%; border-collapse:collapse; }
.schedule-table th {
  background:var(--tx-blue); color:#fff; font-size:0.72rem; font-weight:700;
  letter-spacing:0.12em; text-transform:uppercase; padding:0.85rem 1rem; text-align:left;
}
.schedule-table td { padding:0.85rem 1rem; font-size:0.88rem; border-bottom:1px solid var(--border); }
.schedule-table tr:hover td { background:rgba(0,40,104,0.03); }
.result-w { color:#16a34a; font-weight:800; }
.result-l { color:var(--tx-red); font-weight:800; }
.badge-upcoming { background:rgba(0,40,104,0.08); color:var(--tx-blue); font-size:0.65rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; padding:0.2rem 0.65rem; border-radius:100px; }
.badge-cancelled { background:rgba(191,10,48,0.1); color:var(--tx-red); font-size:0.65rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; padding:0.2rem 0.65rem; border-radius:100px; }
.badge-paid { background:rgba(22,163,74,0.1); color:#16a34a; font-size:0.65rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; padding:0.2rem 0.65rem; border-radius:100px; }
.badge-local { background:rgba(201,151,58,0.15); color:#8a6800; font-size:0.65rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; padding:0.2rem 0.65rem; border-radius:100px; }
.badge-payevent { background:rgba(245,197,24,0.15); color:#8a6800; font-size:0.65rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; padding:0.2rem 0.65rem; border-radius:100px; }
.badge-row { display:flex; flex-wrap:wrap; gap:0.3rem; }

/* ── GALLERIES ── */
.gallery-tabs { display:flex; gap:0.6rem; margin-bottom:1.5rem; flex-wrap:wrap; }
.g-tab {
  padding:0.5rem 1.1rem; font-size:0.75rem; font-weight:700; letter-spacing:0.08em; text-transform:uppercase;
  cursor:pointer; border-radius:100px; transition:all .2s; border:2px solid var(--border); color:var(--gray);
  background:none; font-family:inherit;
}
.g-tab.active { background:var(--tx-red); color:#fff; border-color:var(--tx-red); }
.gallery-grid {
  display:grid; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); gap:1rem;
}
.g-thumb {
  aspect-ratio:4/3; border-radius:var(--r); overflow:hidden;
  background:var(--tx-blue); position:relative; cursor:pointer;
  box-shadow:var(--shadow); transition:all .22s;
}
.g-thumb:hover { transform:scale(1.03); box-shadow:var(--shadow-lg); }
.g-thumb img { width:100%; height:100%; object-fit:cover; display:block; transition:transform .4s; }
.g-thumb:hover img { transform:scale(1.06); }
.g-thumb .g-cap {
  position:absolute; bottom:0; left:0; right:0;
  background:linear-gradient(to top,rgba(0,26,74,0.85),transparent);
  padding:1.5rem 0.75rem 0.65rem;
  font-size:0.72rem; font-weight:700; color:rgba(255,255,255,0.9);
  letter-spacing:0.06em; text-transform:uppercase;
  opacity:0; transition:opacity .2s;
}
.g-thumb:hover .g-cap { opacity:1; }
.g-placeholder {
  width:100%; height:100%; display:flex; flex-direction:column;
  align-items:center; justify-content:center; gap:0.4rem;
  color:rgba(255,255,255,0.25); font-size:0.7rem; font-weight:700;
  letter-spacing:0.1em; text-transform:uppercase;
}
.g-placeholder span { font-size:2rem; }

/* ── MEDIA / SOCIAL ── */
.media-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1.2rem; }
.media-card {
  border-radius:var(--r-lg); padding:1.75rem 1.5rem; text-align:center;
  transition:all .22s; cursor:pointer; text-decoration:none; display:block;
  border:1px solid rgba(255,255,255,0.15);
}
.media-card:hover { transform:translateY(-4px); box-shadow:0 8px 32px rgba(0,0,0,0.3); }
.mc-tiktok  { background:linear-gradient(135deg,#010101 0%,#2C2C2C 100%); }
.mc-fb      { background:linear-gradient(135deg,#1877F2 0%,#0D5BB5 100%); }
.mc-ig      { background:linear-gradient(135deg,#E1306C 0%,#833AB4 50%,#F77737 100%); }
.mc-yt      { background:linear-gradient(135deg,#FF0000 0%,#C00 100%); }
.media-icon { font-size:2.4rem; margin-bottom:0.75rem; }
.media-name { font-size:1rem; font-weight:800; color:#fff; margin-bottom:0.25rem; }
.media-handle { font-size:0.78rem; color:rgba(255,255,255,0.65); }

/* ── FOOTER ── */
.footer {
  background:var(--tx-blue); color:rgba(255,255,255,0.7);
  padding:3rem 1.5rem 1.5rem; text-align:center;
}
.footer-brand {
  font-size:1.6rem; font-weight:900; font-style:italic; text-transform:uppercase;
  color:#fff; letter-spacing:0.04em; margin-bottom:0.3rem;
}
.footer-brand span { color:var(--gold-lt); }
.footer-tagline { font-size:0.78rem; letter-spacing:0.16em; text-transform:uppercase; color:rgba(255,255,255,0.5); margin-bottom:2rem; }
.footer-links { display:flex; flex-wrap:wrap; justify-content:center; gap:0.3rem 1.5rem; margin-bottom:2rem; }
.footer-links a { color:rgba(255,255,255,0.6); text-decoration:none; font-size:0.78rem; transition:color .2s; }
.footer-links a:hover { color:#fff; }
.footer-divider { border:none; border-top:1px solid rgba(255,255,255,0.1); margin:1.5rem 0; }
.footer-copy { font-size:0.72rem; color:rgba(255,255,255,0.35); }

/* ── BUTTONS ── */
.btn { display:inline-flex; align-items:center; gap:0.4rem; padding:0.75rem 1.6rem; border-radius:5px; font-size:0.8rem; font-weight:800; letter-spacing:0.07em; text-transform:uppercase; cursor:pointer; border:none; text-decoration:none; transition:all .22s; font-family:inherit; }
.btn-red  { background:var(--tx-red);  color:#fff; box-shadow:0 3px 14px rgba(191,10,48,0.35); }
.btn-red:hover  { background:var(--tx-red-h); transform:translateY(-2px); }
.btn-blue { background:var(--tx-blue); color:#fff; box-shadow:0 3px 14px rgba(0,40,104,0.25); }
.btn-blue:hover { background:#001A4A; transform:translateY(-2px); }
.btn-outline { background:transparent; color:var(--tx-blue); border:2px solid var(--tx-blue); }
.btn-outline:hover { background:var(--tx-blue); color:#fff; }

/* ── VIEW ALL ROW ── */
.view-all-row { display:flex; justify-content:flex-end; margin-top:1.5rem; }

/* ── SECTION DIVIDERS ── */
.section-flag-stripe {
  height:6px;
  background:linear-gradient(90deg, var(--tx-red) 0%, var(--tx-red) 33%, #fff 33%, #fff 66%, var(--tx-blue) 66%);
}

/* ══ RESPONSIVE ══ */
@media(max-width:768px){
  .nav-menu,.utility-extra{ display:none; }
  .hamburger{ display:flex; flex-direction:column; }
  .mobile-drawer{ display:block; }
  .feature-wrap{ grid-template-columns:1fr; }
  .feature-photo-frame{ max-height:320px; aspect-ratio:16/9; }
}
@media(max-width:540px){
  .stories-grid{ grid-template-columns:1fr; }
  .gallery-grid{ grid-template-columns:repeat(2,1fr); }
  .media-grid{ grid-template-columns:repeat(2,1fr); }
  .stats-row{ gap:0.6rem; }
}

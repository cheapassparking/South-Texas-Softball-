// Single source of truth for social profiles and donation links.
// The QR landing page (/qr) and the existing media cards both read this file.
//
// A url is "filled" only when it is an http(s) or same-site path.
// Empty strings hide that button so the site never links to "#".

export type SocialPlatform = "tiktok" | "instagram" | "facebook" | "youtube";

export type SocialLink = {
  id: SocialPlatform;
  name: string;
  handle: string;
  /** Public profile URL. Leave "" to hide the button. */
  url: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: "tiktok",
    name: "TikTok",
    handle: "@southtexassoftball",
    url: "https://www.tiktok.com/@southtexassoftball",
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@southtexassoftball",
    url: "https://www.instagram.com/southtexassoftball",
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "South Texas Softball",
    url: "https://www.facebook.com/southtexassoftball",
  },
  {
    id: "youtube",
    name: "YouTube",
    handle: "South Texas Softball",
    // TODO (owner): paste the YouTube channel URL. No channel URL was in the repo.
    // Leave "" and the YouTube card stays hidden.
    url: "",
  },
];

export type DonationMethodId = "venmo" | "cashapp" | "paypal" | "gofundme";

export type DonationMethod = {
  id: DonationMethodId;
  label: string;
  /**
   * Payment URL. Leave "" to hide this method.
   * TODO (owner): fill any of these to replace the contact fallback with real donate buttons.
   *   venmo    — https://venmo.com/u/USERNAME
   *   cashapp  — https://cash.app/$CASHTAG
   *   paypal   — https://paypal.me/USERNAME
   *   gofundme — https://www.gofundme.com/f/CAMPAIGN
   */
  url: string;
};

export const donationMethods: DonationMethod[] = [
  {
    id: "venmo",
    label: "Venmo",
    url: "https://venmo.com/code?user_id=4565378873164956255&created=1791576782.075017&printed=1",
  },
  { id: "cashapp", label: "Cash App", url: "" },
  { id: "paypal", label: "PayPal", url: "" },
  { id: "gofundme", label: "GoFundMe", url: "" },
];

/** Used on /qr when every donationMethods url is empty. */
export const donationFallback = {
  label: "Contact us to donate",
  // Live site has no /contact route. /thank-you is the existing contact-adjacent page.
  href: "/thank-you",
};

export function isFilledUrl(value: string): boolean {
  const url = value.trim();
  if (!url || url === "#") return false;
  return url.startsWith("https://") || url.startsWith("http://") || url.startsWith("/");
}

export function activeSocialLinks(): SocialLink[] {
  return socialLinks.flatMap((link) => {
    const url = link.url.trim();
    return isFilledUrl(url) ? [{ ...link, url }] : [];
  });
}

export function activeDonationMethods(): DonationMethod[] {
  return donationMethods.flatMap((method) => {
    const url = method.url.trim();
    return isFilledUrl(url) ? [{ ...method, url }] : [];
  });
}

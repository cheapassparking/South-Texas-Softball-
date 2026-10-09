import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.southtexassoftball.com"),
  title: "South Texas Softball",
  description:
    "Emerson's softball journey — Strykers Mata 2K13, second base, right-handed slapper, Faith Speed Work Ethic Heart.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

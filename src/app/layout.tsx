import { site } from "@/lib/content";
import { siteUrl } from "@/lib/metadata";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-body-face",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-hero-face",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — UI/UX Product Designer`,
    template: `%s · ${site.name}`,
  },
  description:
    "UI/UX designer in Mumbai. Case studies, experience, and contact for product, web, and mobile design.",
  openGraph: { type: "website", locale: "en_IN", siteName: site.name },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full font-[family-name:var(--font-body-face)] font-light">
        {children}
      </body>
    </html>
  );
}

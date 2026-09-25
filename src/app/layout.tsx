import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import MotionProvider from "@/components/MotionProvider";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://prakashsankapal.dev";
const title = "Prakash Satish Sankapal | Software Engineer Portfolio";
const description =
  "Portfolio of Prakash Satish Sankapal, a Computer Science & Engineering student focused on software development, DSA, AI/ML and practical engineering projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Prakash Satish Sankapal",
    "Software Engineer",
    "Computer Science",
    "C++",
    "Data Structures and Algorithms",
    "AI/ML",
    "Backend Developer",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Computer Science & Engineering Student",
  url: siteUrl,
  sameAs: [profile.links.github, profile.links.linkedin, profile.links.leetcode],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

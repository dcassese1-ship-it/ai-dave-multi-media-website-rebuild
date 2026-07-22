import type { Metadata } from "next";
import { Chakra_Petch, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const chakra = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "AI Dave | Multimedia Universe",
  description:
    "AI Dave's Multimedia Universe — AI-generated music, storytelling, and cinematic visuals. Chronicles of the Neon Highway: a post-apocalyptic sci-fi novella and 21-song concept album.",
  metadataBase: new URL("https://www.aidavemultimediauniverse.com"),
  openGraph: {
    title: "AI Dave | Multimedia Universe",
    description:
      "Music, stories, and cinematic AI art from the Neon Highway universe.",
    url: "https://www.aidavemultimediauniverse.com",
    siteName: "AI Dave Multimedia Universe",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chakra.variable} ${inter.variable} ${jetbrains.variable} antialiased bg-void text-ink`}
      >
        {children}
      </body>
    </html>
  );
}

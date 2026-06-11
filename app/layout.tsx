import { MotionProvider } from "@/components/MotionProvider";
import { HERO_PHOTO } from "@/lib/photography";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lemon & Sugar Project | LemonandSugarProject.com",
  description:
    "Turning life's sour moments into strength, healing, and growth. S.U.G.A.R. toolkit—Support, Unburdening, Grace, Affirmation, and Resilience for young people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href={HERO_PHOTO.src}
          type="image/webp"
        />
      </head>
      <body className="flex min-h-full flex-col bg-[#fffdfb] font-sans">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}

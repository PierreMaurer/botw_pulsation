import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/layout";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SYNC Studio",
  description: "YOUR DANCE, EVERY WHERE, EVERY TIME",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${plusJakarta.variable} antialiased overflow-x-hidden min-w-0 w-full`}
      >
        <SmoothScroll>
          <div className="overflow-x-hidden min-w-0 w-full">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}

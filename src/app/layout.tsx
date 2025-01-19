import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Bodoni_Moda, Montserrat, Playfair_Display, Source_Sans_3, Libre_Baskerville, Josefin_Sans, EB_Garamond } from 'next/font/google';
import localFont from 'next/font/local';

// Initialize all Google fonts with their configurations
const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-bodoni',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
});

const baskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-baskerville',
});

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add Editors Note local font
const editorsNote = localFont({
  src: '../fonts/EditorsNote-Regular.otf',
  variable: '--font-editors-note'
});

// Add Alacrity Sans local font
const alacritySans = localFont({
  src: '../fonts/AlacritySans-Regular.ttf',
  variable: '--font-alacrity'
});

// Add the local font imports
const violetJWSans = localFont({
  src: '../fonts/VioletJWSans-Regular.otf',
  variable: '--font-violet-sans'
});

const violetJWSerif = localFont({
  src: '../fonts/VioletJWSerif-Regular.otf',
  variable: '--font-violet-serif'
});

// Add this with the other local font declarations
const testSohneBuch = localFont({
  src: '../fonts/TestSöhne-Buch.otf',
  variable: '--font-sohne-buch'
});

const univers = localFont({
  src: '../fonts/UniversRegular.ttf',
  variable: '--font-univers'
});

const caslon = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-caslon'
});

export const metadata: Metadata = {
  title: "Font Showcase",
  description: "A showcase of beautiful font combinations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bodoni.variable} ${montserrat.variable} ${playfair.variable} ${sourceSans.variable} ${baskerville.variable} ${josefin.variable} ${editorsNote.variable} ${alacritySans.variable} ${violetJWSans.variable} ${violetJWSerif.variable} ${testSohneBuch.variable} ${univers.variable} ${caslon.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

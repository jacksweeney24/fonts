'use client';

import { Source_Sans_3 } from 'next/font/google';
import localFont from 'next/font/local';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

// Initialize only the fonts we're actually using
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
});

// Initialize local fonts we're actually using
const sloopScript = localFont({
  src: [
    {
      path: '../fonts/NTSomic-Regular.otf',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-somic-regular'
});

const univers = localFont({
  src: '../fonts/UniversRegular.ttf',
  variable: '--font-univers'
});

// Define interface for font entries with description
interface FontEntry {
  id: string;
  name: string;
  subtext: string;
  titleFont: string;
  subtextFont: string;
  description: string;
}

// Rest of your code remains the same, starting from:
export default function Home() {
  const [selectedPrimary, setSelectedPrimary] = useState<string>('');
  const [selectedSecondary, setSelectedSecondary] = useState<string>('');

  // Array of font pairings with descriptions
  const fonts: FontEntry[] = [
    {
      id: '1',
      name: 'Söhne-Buch',
      subtext: 'SOURCE SANS 3',
      titleFont: 'var(--font-sohne-buch)',
      subtextFont: 'var(--font-source-sans)',
      description: 'A contemporary grotesque that combines Swiss precision with modern sensibilities. Söhne-Buch offers exceptional readability while maintaining a distinctive character.'
    },
    {
      id: '2',
      name: 'Bodoni Moda',
      subtext: 'MONTSERRAT',
      titleFont: 'var(--font-bodoni)',
      subtextFont: 'var(--font-montserrat)',
      description: 'A classic serif-sans pairing that balances luxury with modernity. Bodoni Moda brings dramatic contrast and elegance.'
    },
    {
      id: '3',
      name: 'NT Somic',
      subtext: 'HELVETICA',
      titleFont: 'var(--font-somic-regular)',
      subtextFont: 'Helvetica, Arial, sans-serif',
      description: 'A bold contemporary pairing that marries expressive display type with timeless neutrality.'
    },
    {
      id: '4',
      name: 'Playfair Display',
      subtext: 'SOURCE SANS 3',
      titleFont: 'var(--font-playfair)',
      subtextFont: 'var(--font-source-sans)',
      description: 'An elegant serif paired with a modern humanist sans-serif, perfect for editorial and luxury branding.'
    },
    {
      id: '5',
      name: 'Libre Baskerville',
      subtext: 'MONTSERRAT',
      titleFont: 'var(--font-baskerville)',
      subtextFont: 'var(--font-montserrat)',
      description: 'A refined serif with excellent readability paired with geometric clarity.'
    },
    {
      id: '6',
      name: 'Josefin Sans',
      subtext: 'SOURCE SANS 3',
      titleFont: 'var(--font-josefin)',
      subtextFont: 'var(--font-source-sans)',
      description: 'A geometric sans-serif with distinctive character, balanced with a neutral companion.'
    },
    {
      id: '7',
      name: 'Editors Note',
      subtext: 'GEIST',
      titleFont: 'var(--font-editors-note)',
      subtextFont: 'var(--font-geist-sans)',
      description: 'A modern display face paired with contemporary sans-serif for digital-first design.'
    },
    {
      id: '8',
      name: 'Alacrity Sans',
      subtext: 'SOURCE SANS 3',
      titleFont: 'var(--font-alacrity)',
      subtextFont: 'var(--font-source-sans)',
      description: 'A fresh geometric sans-serif duo combining distinctive character with refined readability.'
    },
    {
      id: '9',
      name: 'Violet JW Serif',
      subtext: 'VIOLET JW SANS',
      titleFont: 'var(--font-violet-serif)',
      subtextFont: 'var(--font-violet-sans)',
      description: 'A contemporary interpretation of classic typeface principles, perfect for editorial design.'
    },
    {
      id: '10',
      name: 'Univers',
      subtext: 'EB GARAMOND',
      titleFont: 'var(--font-univers)',
      subtextFont: 'var(--font-caslon)',
      description: 'A masterpiece of Swiss typography paired with classical elegance.'
    }
  ];

  // Helper function to get font variable from name
  const getFontVariable = (fontName: string): string => {
    const font = fonts.find(f => f.name === fontName);
    return font ? font.titleFont : 'system-ui';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="p-4 md:p-12 mb-16 md:mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="mb-6 leading-[0.9]">
              {/* Reduced text size on mobile, maintaining large size on desktop */}
              <span 
                className="block text-6xl sm:text-8xl md:text-9xl lg:text-[12rem]" 
                style={{ fontFamily: 'var(--font-univers)' }}
              >
                JACK'S
              </span>
              <span 
                className="block text-6xl sm:text-8xl md:text-9xl lg:text-[12rem]" 
                style={{ fontFamily: 'var(--font-univers)' }}
              >
                FONT
              </span>
              <span 
                className="block text-6xl sm:text-8xl md:text-9xl lg:text-[12rem]" 
                style={{ fontFamily: 'var(--font-univers)' }}
              >
                COLLECTION.
              </span>
            </h1>
            <p 
              className="text-lg md:text-xl text-gray-600" 
              style={{ fontFamily: 'var(--font-somic-regular)' }}
            >
              A curated collection of beautiful font pairings for modern web design. Create, preview, and save your own combinations.
            </p>
          </div>
        </div>
      </div>

      {/* Existing Sections */}
      <div className="p-4 md:p-12">
        {/* Pairing Creator Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 mb-32">
          <div className="sticky top-12 h-fit">
            <h2 className="font-geist-sans text-sm text-gray-500 uppercase tracking-wider">
              Pairing Creator
            </h2>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Create Font Pairing</CardTitle>
              <CardDescription>Select two fonts to create a new pairing.</CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {/* Primary Font Selection */}
                <div className="space-y-2">
                  <Label>Primary Font</Label>
                  <Select value={selectedPrimary} onValueChange={setSelectedPrimary}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a font" />
                    </SelectTrigger>
                    <SelectContent>
                      {fonts.map(font => (
                        <SelectItem key={font.id} value={font.name}>
                          {font.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Secondary Font Selection */}
                <div className="space-y-2">
                  <Label>Secondary Font</Label>
                  <Select value={selectedSecondary} onValueChange={setSelectedSecondary}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a font" />
                    </SelectTrigger>
                    <SelectContent>
                      {fonts.map(font => (
                        <SelectItem key={font.id} value={font.name}>
                          {font.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Preview Area with larger text */}
              <Card className="bg-muted">
                <CardHeader>
                  <CardTitle className="text-sm">Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedPrimary && selectedSecondary ? (
                    <div className="space-y-6">
                      <h1 
                        className="text-6xl md:text-7xl mb-4 transition-all duration-300"
                        style={{ fontFamily: getFontVariable(selectedPrimary) }}
                      >
                        {selectedPrimary}
                      </h1>
                      <p 
                        className="text-2xl md:text-3xl tracking-widest"
                        style={{ fontFamily: getFontVariable(selectedSecondary) }}
                      >
                        {selectedSecondary}
                      </p>
                    </div>
                  ) : (
                    <div className="h-48 flex items-center justify-center border border-dashed border-muted-foreground/50 rounded-lg">
                      <p className="text-muted-foreground">Select fonts to preview pairing</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>

        {/* Existing Pairings Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
          {/* Left Column - Title */}
          <div className="sticky top-12 h-fit">
            <h2 className="font-geist-sans text-sm text-gray-500 uppercase tracking-wider">
              Pairings
            </h2>
          </div>

          {/* Right Column - Font Pairings */}
          <div className="flex flex-col gap-20">
            {fonts.map((font, index) => (
              <div key={font.id} className="group">
                <div className="md:grid md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <h1 
                      className="text-5xl md:text-6xl mb-4 transition-all duration-300 hover:scale-105" 
                      style={{ fontFamily: font.titleFont }}
                    >
                      {font.name}
                    </h1>
                    <p 
                      className="text-xl md:text-2xl tracking-widest mb-6 md:mb-0" 
                      style={{ fontFamily: font.subtextFont }}
                    >
                      {font.subtext}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p 
                      className="text-gray-600 leading-relaxed text-lg"
                      style={{ fontFamily: font.subtextFont }}
                    >
                      {font.description}
                    </p>
                  </div>
                </div>
                {index < fonts.length - 1 && (
                  <div className="h-0.5 bg-gray-200 mt-20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-32 py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Using Geist Sans for clean, modern footer text */}
          <p className="font-geist-sans text-sm text-gray-600">
            Made by{" "}
            <a 
              href="https://www.jacksweeney.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              Jack
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

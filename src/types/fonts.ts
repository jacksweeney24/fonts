// Types for managing font data and pairings
export interface Font {
  name: string;
  category: 'serif' | 'sans-serif' | 'display' | 'monospace';
  weights: number[];
  styles: ('normal' | 'italic')[];
  googleFontName?: string; // Name used in Google Fonts API
}

export interface FontPairing {
  id: string;
  heading: Font;
  body: Font;
  description: string;
} 
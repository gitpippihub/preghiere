// Types for the prayer application

export interface Prayer {
  id: string;
  title: string;
  content: PrayerSection[];
  category?: string;
}

export interface PrayerSection {
  type: 'title' | 'paragraph' | 'italic' | 'response';
  content: string;
  level?: number; // for titles (h1, h2, h3, etc.)
}

export interface PrayerCategory {
  id: string;
  name: string;
  description?: string;
  prayers: Prayer[];
}

export interface RosaryMystery {
  type: 'gioiosi' | 'luminosi' | 'dolorosi' | 'gloriosi';
  name: string;
  mysteries: string[];
}

export interface Route {
  path: string;
  handler: () => void;
}

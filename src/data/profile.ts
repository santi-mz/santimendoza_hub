export type ProjectCategory = "mobile" | "desktop" | "library" | "game" | "misc";

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  repo: string;
  live?: string;
  liveLabel?: string;
}

export const profile = {
  name: "Santiago Mendoza",
  role: "Backend Engineer",
  tagline: "APIs, systems, and small tools that solve a real problem for someone.",
  bio: "I write backend systems and the tools around them \u2014 APIs, small libraries, the occasional Android app. Most of what's below started as something I needed and kept because it turned out useful. Off-screen: video games, ping pong, and more push-ups than my back asks for.",
  cvUrl: "/cv.pdf",
  skills: ["Java", "Rust", "C#", "Android", "Backend", "API Design"],
};

export const social = {
  github: "https://github.com/santi-mz",
  linkedin: "https://linkedin.com/in/david-santiago-mendoza-yasno",
  email: "santiagoyasno@gmail.com",
  emailAlt: "santiagoyasno@santimendoza.com",
};

export const projects: Project[] = [
  {
    id: "matema",
    name: "MateMa",
    description: "Android app that walks high schoolers through common math operations, step by step.",
    tech: ["Android", "Java"],
    category: "mobile",
    repo: "https://github.com/santi-mz/matema",
    live: "https://play.google.com/store/apps/details?id=com.matema",
    liveLabel: "Play Store",
  },
  {
    id: "matrixma",
    name: "MatrixMa",
    description: "Desktop app for solving matrix operations and systems of equations.",
    tech: ["Java", "Desktop"],
    category: "desktop",
    repo: "https://github.com/santi-mz/matrixma",
  },
  {
    id: "apodoguest",
    name: "ApodoGuest",
    description: "Console number-guessing game with a handful of extra rules to keep it interesting.",
    tech: ["C#", "Console"],
    category: "game",
    repo: "https://github.com/santi-mz/apodoguest",
  },
  {
    id: "musicmatchapi",
    name: "MusicMatchApi",
    description: "Node library wrapping the Musixmatch API for track info and lyrics.",
    tech: ["Node.js", "API"],
    category: "library",
    repo: "https://github.com/santi-mz/musicmatch",
    live: "https://www.npmjs.com/package/musicmatch",
    liveLabel: "npm",
  },
  {
    id: "musiclyrics",
    name: "MusicLyrics",
    description: "C# library for fetching song lyrics from a single call.",
    tech: ["C#", "Library"],
    category: "library",
    repo: "https://github.com/santi-mz/musiclyrics",
    live: "https://www.nuget.org/packages/musiclyrics",
    liveLabel: "NuGet",
  },
  {
    id: "junkcode",
    name: "JunkCode",
    description: "Where snippets, half-finished ideas, and test code go to live.",
    tech: ["Various"],
    category: "misc",
    repo: "https://github.com/santi-mz/junkcode",
  },
];

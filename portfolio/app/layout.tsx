import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

// EDIT THIS — page title & description shown in search results and browser tabs
export const metadata: Metadata = {
  title: "Vince Wendell S. Tee — Developer",
  description:
    "Portfolio of Vince Wendell S. Tee, developer focused on backend systems and web applications.",
};

// A small, clearly-visible line-art scene of someone working at a desk,
// rendered as a direct sibling of the page content at the <body> level so
// no ancestor's overflow/positioning can ever clip or bury it. Pure CSS
// animation (see globals.css) — blinking cursor, sequential "typing" lines,
// rising coffee steam, and a softly pulsing desk lamp. Hidden on small
// screens so it never competes with mobile content.
function WorkingScene() {
  return (
    <div
      className="hidden md:block fixed bottom-6 right-6 z-0 w-[240px] opacity-90 pointer-events-none"
      aria-hidden="true"
    >
      <svg viewBox="0 0 240 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="10" y1="150" x2="230" y2="150" stroke="#0B1F3A" strokeWidth="2" />
        <circle cx="70" cy="90" r="14" stroke="#0B1F3A" strokeWidth="2" />
        <path
          d="M50 148 C 50 115, 60 104, 78 104 C 96 104, 104 118, 100 138"
          stroke="#0B1F3A"
          strokeWidth="2"
        />
        <path d="M46 150 L46 108" stroke="#0B1F3A" strokeWidth="2" />
        <path d="M95 150 L150 150 L145 140 L100 140 Z" stroke="#0B1F3A" strokeWidth="2" />
        <rect x="100" y="108" width="42" height="32" rx="2" stroke="#0B1F3A" strokeWidth="2" />
        <rect className="type-line type-line-1" x="105" y="115" width="20" height="2.5" fill="#0B1F3A" />
        <rect className="type-line type-line-2" x="105" y="121" width="28" height="2.5" fill="#0B1F3A" />
        <rect className="type-line type-line-3" x="105" y="127" width="16" height="2.5" fill="#0B1F3A" />
        <rect className="cursor-blink" x="105" y="133" width="6" height="2.5" fill="#B9812F" />
        <path d="M170 132 L170 148 L188 148 L188 132 Z" stroke="#0B1F3A" strokeWidth="2" />
        <path d="M188 135 Q196 135 196 140 Q196 145 188 145" stroke="#0B1F3A" strokeWidth="2" />
        <path
          className="steam steam-1"
          d="M174 128 Q170 120 174 114 Q178 108 174 100"
          stroke="#0B1F3A"
          strokeWidth="1.5"
        />
        <path
          className="steam steam-2"
          d="M182 128 Q178 120 182 114 Q186 108 182 100"
          stroke="#0B1F3A"
          strokeWidth="1.5"
        />
        <path d="M40 60 L40 40 L20 30" stroke="#0B1F3A" strokeWidth="2" />
        <circle className="lamp-glow" cx="20" cy="30" r="7" fill="#B9812F" />
      </svg>
    </div>
  );
}

// Someone presenting next to a small live-looking bar chart — bars grow and
// shrink on a loop, pointer arm sways gently. Tucked in the top-left,
// only on larger screens so it never competes with the hero text.
function ChartScene() {
  return (
    <div
      className="hidden lg:block fixed top-24 left-6 z-0 w-[170px] opacity-90 pointer-events-none"
      aria-hidden="true"
    >
      <svg viewBox="0 0 170 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="10" y1="130" x2="160" y2="130" stroke="#0B1F3A" strokeWidth="2" />
        <circle cx="38" cy="40" r="11" stroke="#0B1F3A" strokeWidth="2" />
        <path d="M38 51 L38 100 M38 62 L20 90 M38 62 L48 78" stroke="#0B1F3A" strokeWidth="2" />
        <path d="M20 130 L38 100 L56 130" stroke="#0B1F3A" strokeWidth="2" />
        <g className="pointer-sway">
          <path d="M48 78 L64 62" stroke="#B9812F" strokeWidth="2" />
        </g>
        <rect className="bar bar-1" x="90" y="80" width="16" height="50" fill="#0B1F3A" fillOpacity="0.75" />
        <rect className="bar bar-2" x="114" y="60" width="16" height="70" fill="#B9812F" fillOpacity="0.8" />
        <rect className="bar bar-3" x="138" y="95" width="16" height="35" fill="#0B1F3A" fillOpacity="0.75" />
      </svg>
    </div>
  );
}

// Someone walking with a laptop folder tucked under one arm — legs alternate
// and the whole figure has a soft bob, suggesting motion. Placed on the
// left edge, only on extra-large screens to keep things uncluttered.
function WalkingScene() {
  return (
    <div
      className="hidden xl:block fixed top-1/2 left-6 -translate-y-1/2 z-0 w-[110px] opacity-90 pointer-events-none"
      aria-hidden="true"
    >
      <svg viewBox="0 0 110 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="bob">
        <circle cx="55" cy="26" r="11" stroke="#0B1F3A" strokeWidth="2" />
        <path d="M55 37 L55 85" stroke="#0B1F3A" strokeWidth="2" />
        <path d="M55 50 L38 65" stroke="#0B1F3A" strokeWidth="2" />
        <rect x="20" y="58" width="20" height="14" rx="1.5" stroke="#B9812F" strokeWidth="2" />
        <path d="M55 50 L72 60" stroke="#0B1F3A" strokeWidth="2" />
        <g className="leg-a" style={{ transformOrigin: "55px 85px" }}>
          <path d="M55 85 L45 122" stroke="#0B1F3A" strokeWidth="2" />
        </g>
        <g className="leg-b" style={{ transformOrigin: "55px 85px" }}>
          <path d="M55 85 L68 122" stroke="#0B1F3A" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <body className="font-sans">
        {/* Faint blueprint grid, direct body-level sibling so nothing can clip it */}
        <div className="fixed inset-0 z-0 bg-grid-drift pointer-events-none" aria-hidden="true" />
        <WorkingScene />
        <ChartScene />
        <WalkingScene />
        {/* Real page content, explicitly stacked above the decorative layers */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

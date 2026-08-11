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

// A small deploy terminal that types out a real-looking git push / build /
// deploy sequence on a loop, blinking cursor included. Styled like actual
// developer tooling rather than an illustration — signals engineering
// craft directly rather than through a decorative scene. Pure CSS
// (width-reveal + steps()), no JavaScript, works fully offline.
function TerminalScene() {
  return (
    <div
      className="hidden md:block fixed bottom-6 right-6 z-0 w-[270px] opacity-95 pointer-events-none"
      aria-hidden="true"
    >
      <div className="rounded-lg border border-ink/10 bg-ink shadow-xl overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="field-note text-[9px] text-white/40 ml-2">deploy.sh</span>
        </div>
        <div className="px-3.5 py-3.5 font-mono text-[11px] leading-[1.9]">
          <div className="term-line term-line-1 text-white/65">$ git push origin main</div>
          <div className="term-line term-line-2 text-amber-soft">✓ build passed · 3 tests</div>
          <div className="term-line term-line-3 text-white">→ deployed to vercel.app</div>
          <span className="cursor-blink inline-block w-[6px] h-[12px] bg-amber align-middle" />
        </div>
      </div>
    </div>
  );
}

// A small live system-status panel — response times per service, softly
// pulsing status dots, and a redrawing sparkline. Reads like real
// monitoring tooling rather than decoration, tucked top-left on larger
// screens only so it never competes with the hero content.
function MetricsScene() {
  const rows = [
    { label: "api", value: "142ms", delay: "0s" },
    { label: "database", value: "18ms", delay: "0.4s" },
    { label: "cache", value: "4ms", delay: "0.8s" },
  ];
  return (
    <div
      className="hidden lg:block fixed top-24 left-6 z-0 w-[190px] opacity-95 pointer-events-none"
      aria-hidden="true"
    >
      <div className="rounded-lg border border-ink/10 bg-ink shadow-xl overflow-hidden">
        <div className="px-3 py-2 border-b border-white/10">
          <span className="field-note text-[9px] text-white/40">system status</span>
        </div>
        <div className="px-3.5 py-3.5 font-mono text-[10px] space-y-2.5">
          {rows.map((r) => (
            <div key={r.label} className="flex items-center justify-between text-white/65">
              <span className="flex items-center gap-2">
                <span
                  className="status-dot w-1.5 h-1.5 rounded-full bg-amber inline-block"
                  style={{ animationDelay: r.delay }}
                />
                {r.label}
              </span>
              <span>{r.value}</span>
            </div>
          ))}
        </div>
        <svg viewBox="0 0 190 34" className="block">
          <path
            className="sparkline"
            d="M0 26 L22 20 L44 24 L66 10 L88 16 L110 6 L132 13 L154 5 L176 12 L190 4"
            stroke="#B9812F"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}

// A small SQL query console — types out a query and returns a result count,
// same visual language as the deploy terminal so the whole set reads as one
// coherent "engineer's toolkit" rather than separate decorations. Reuses
// the existing term-line/cursor-blink CSS, so no new keyframes needed.
// Bottom-left, on larger screens only.
function QueryScene() {
  return (
    <div
      className="hidden md:block fixed bottom-6 left-6 z-0 w-[260px] opacity-95 pointer-events-none"
      aria-hidden="true"
    >
      <div className="rounded-lg border border-ink/10 bg-ink shadow-xl overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="field-note text-[9px] text-white/40 ml-2">query.sql</span>
        </div>
        <div className="px-3.5 py-3.5 font-mono text-[11px] leading-[1.9]">
          <div className="term-line term-line-1 text-white/65">$ select * from orders</div>
          <div className="term-line term-line-2 text-white/65">where status = &apos;paid&apos;</div>
          <div className="term-line term-line-3 text-amber-soft">✓ 342 rows · 6ms</div>
          <span className="cursor-blink inline-block w-[6px] h-[12px] bg-amber align-middle" />
        </div>
      </div>
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
        <TerminalScene />
        <MetricsScene />
        <QueryScene />
        {/* Real page content, explicitly stacked above the decorative layers */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

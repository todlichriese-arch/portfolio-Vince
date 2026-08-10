"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// =========================================================================
// EDIT THIS SECTION — everything you need to personalize lives here.
// =========================================================================
const CONTENT = {
  fileNo: "FILE NO. 2026-06",
  name: "Vince Wendell S. Tee",
  role: "developer",
  thesis:
    "I build backend systems and developer tools that stay fast under real load, and I write the docs that make them easy to trust.",
  location: "13B clover street, Dona Manuela Subdivision, Pamplona Tres, Las pinas city, PH",
  email: "vincetee622@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/todlichriese-arch" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vince-wendell-tee-56132b393?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { label: "Resume", href: "/resume.pdf" },
  ],
  about: [
    "I am a recent Bachelor of Science in Information Systems graduate passionate about software development and creating technology that solves real-world business challenges. My experience includes developing secure web applications, designing databases, and building systems that automate workflows, improve productivity, and provide better user experiences.",
    "My goal is to begin my career as a Programmer, where I can contribute to developing innovative software solutions, continuously improve my technical skills, and help organizations achieve their goals through efficient, scalable, and reliable applications.",
  ],
  skills: [
    { group: "Languages", items: ["JavaScript", "Java", "PHP", "SQL"] },
    { group: "Systems", items: ["PostgreSQL"] },
    { group: "Frameworks", items: ["Next.js", "Node.js"] },
    { group: "Practice", items: ["Testing", "Code review"] },
  ],
  projects: [
    {
      title: "Ninedwarfs",
      role: "Solo Developer",
      stack: "PHP · SQL · HTML · CSS · JavaScript",
      impact:
        "The system was developed to improve the efficiency and accuracy of commission-related processes. By automating these tasks, the application reduces processing time, minimizes human error, and improves overall reliability. Overall, the project enhances the productivity of commission personnel by streamlining daily operations.",
      description:
        "A settlement-optimizing API for group expenses. The core problem was minimizing the number of payments needed to settle a group's debts — solved with a graph-reduction algorithm that cut average payments per group by 60%.",
      live: "https://ninedwarfs.kesug.com/ninedwarfs/Landing.php",
    },
    {
      title: "Zarate student registration and automated grading system",
      role: "Team of 3, Backend developer",
      stack: "Next.js · Javascript · PHP · SQL · HTML · CSS",
      impact: "Cut average doc-lookup time from ~6 min to under 30 sec",
      description:
        "Semantic search over a 4,000-page internal knowledge base. I owned the ingestion pipeline and ranking logic, and set up eval tooling so retrieval quality could be measured on every change instead of judged by feel.",
      live: "https://example.com",
      code: "https://github.com/yourhandle/fieldnotes",
    },
    {
      title: "Josefa LMS with code compilers and Live quiz sessions system",
      role: "Solo Developer",
      stack: "PHP · Next.js · JavaScript · HTML · CSS · SQL · API",
      impact: "In active use by a 15-person retail team",
      description:
        "Shift scheduling for small teams, built after watching a friend manage a whole store's roster in a spreadsheet. Constraint-based auto-fill handles availability and overtime rules; managers just approve or adjust.",
      live: "https://example.com",
      code: "https://github.com/yourhandle/shiftboard",
    },
  ],
  experience: [
    {
      period: "2026",
      role: "Intern developer",
      org: "Zarate Hospital and College",
      detail: "Developed their registration system with automated grading with a team, focused mostly on backend.",
    },
  ],
};
// =========================================================================
// End of editable content.
// =========================================================================

const NAV = [
  { id: "about", label: "About" },
  { id: "work", label: "Selected Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

// Wraps a section so it fades + slides up the first time it scrolls into view.
function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-paper text-ink overflow-x-hidden">
      {/* Faint animated blueprint grid, sits behind everything */}
      <div className="fixed inset-0 -z-10 bg-grid-drift pointer-events-none" aria-hidden="true" />

      <header className="sticky top-0 z-10 bg-paper/90 backdrop-blur border-b border-line">
        <nav className="max-w-dossier mx-auto px-6 sm:px-8 h-14 flex items-center justify-between">
          <a href="#top" className="field-note text-xs text-ink-soft">
            {CONTENT.name}
          </a>
          <ul className="hidden sm:flex gap-6">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="field-note text-[11px] text-ink-soft hover:text-amber transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero / cover page — staggered entrance on load */}
      <section id="top" className="max-w-dossier mx-auto px-6 sm:px-8 pt-16 sm:pt-24 pb-16">
        <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-10">
          <div className="max-w-xl">
            <p
              className="field-note text-xs text-amber mb-6 animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              {CONTENT.fileNo} — ENGINEERING PORTFOLIO
            </p>
            <h1
              className="font-serif text-5xl sm:text-7xl leading-[1.05] mb-6 animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              {CONTENT.name}
            </h1>
            <p
              className="font-serif italic text-xl sm:text-2xl text-ink-soft mb-8 animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              {CONTENT.role} — {CONTENT.thesis}
            </p>
            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-2 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              {CONTENT.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="field-note text-xs border-b border-ink pb-0.5 hover:text-amber hover:border-amber transition-colors"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
            <p
              className="field-note text-xs text-ink-soft mt-3 animate-fade-up"
              style={{ animationDelay: "320ms" }}
            >
              {CONTENT.location}
            </p>
          </div>

          <div
            className="shrink-0 self-center sm:self-start animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            <div className="w-40 sm:w-48 border border-ink p-1.5 transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg">
              <div className="relative w-full aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src="/photo.jpg"
                  alt={CONTENT.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <p className="field-note text-[10px] text-ink-soft mt-2 text-center">{CONTENT.fileNo}</p>
          </div>
        </div>
      </section>

      <div className="rule max-w-dossier mx-auto" />

      {/* About */}
      <Reveal>
        <section id="about" className="max-w-dossier mx-auto px-6 sm:px-8 py-16">
          <SectionLabel n="01" label="About" />
          <div className="space-y-4 max-w-2xl">
            {CONTENT.about.map((para, i) => (
              <p key={i} className="font-serif text-2xl sm:text-3xl leading-snug">
                {para}
              </p>
            ))}
          </div>
        </section>
      </Reveal>

      <div className="rule max-w-dossier mx-auto" />

      {/* Work */}
      <Reveal>
        <section id="work" className="max-w-dossier mx-auto px-6 sm:px-8 py-16">
          <SectionLabel n="02" label="Selected Work" />
          <div className="space-y-14">
            {CONTENT.projects.map((p) => (
              <article
                key={p.title}
                className="group transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="field-note text-[11px] text-amber mb-2">
                  {p.role} &nbsp;·&nbsp; {p.stack}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl mb-2 transition-colors group-hover:text-amber">
                  {p.title}
                </h3>
                <p className="field-note text-[11px] text-ink-soft mb-3">{p.impact}</p>
                <p className="text-ink-soft leading-relaxed max-w-2xl mb-4">{p.description}</p>
                <div className="flex gap-5">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="field-note text-xs border-b border-ink pb-0.5 hover:text-amber hover:border-amber transition-colors"
                    >
                      Live ↗
                    </a>
                  )}
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="field-note text-xs border-b border-ink pb-0.5 hover:text-amber hover:border-amber transition-colors"
                    >
                      Code ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <div className="rule max-w-dossier mx-auto" />

      {/* Experience */}
      <Reveal>
        <section id="experience" className="max-w-dossier mx-auto px-6 sm:px-8 py-16">
          <SectionLabel n="03" label="Experience" />
          <div className="space-y-8">
            {CONTENT.experience.map((e) => (
              <div key={e.role + e.org} className="sm:flex sm:gap-8">
                <p className="field-note text-[11px] text-ink-soft w-32 shrink-0 mb-1 sm:mb-0">
                  {e.period}
                </p>
                <div>
                  <h4 className="font-serif text-xl">
                    {e.role} <span className="text-ink-soft">— {e.org}</span>
                  </h4>
                  <p className="text-ink-soft mt-1 max-w-xl">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <div className="rule max-w-dossier mx-auto" />

      {/* Skills */}
      <Reveal>
        <section id="skills" className="max-w-dossier mx-auto px-6 sm:px-8 py-16">
          <SectionLabel n="04" label="Skills" />
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {CONTENT.skills.map((s) => (
              <div key={s.group}>
                <p className="field-note text-[11px] text-amber mb-3">{s.group}</p>
                <ul className="space-y-1.5">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="text-ink-soft transition-transform duration-200 hover:translate-x-1 hover:text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <div className="rule max-w-dossier mx-auto" />

      {/* Contact */}
      <Reveal>
        <section id="contact" className="max-w-dossier mx-auto px-6 sm:px-8 py-16">
          <SectionLabel n="05" label="Contact" />
          <p className="font-serif text-2xl sm:text-3xl leading-snug max-w-xl mb-8">
            Open to backend and full-stack roles. The fastest way to reach me is email.
          </p>
          <a
            href={`mailto:${CONTENT.email}`}
            className="field-note text-sm border-b border-ink pb-0.5 hover:text-amber hover:border-amber transition-colors"
          >
            {CONTENT.email} ↗
          </a>
        </section>
      </Reveal>

      <footer className="max-w-dossier mx-auto px-6 sm:px-8 py-10">
        <p className="field-note text-[10px] text-ink-soft">
          {CONTENT.name} — {CONTENT.fileNo}
        </p>
      </footer>
    </main>
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <p className="field-note text-xs text-ink-soft mb-6">
      {n} — {label}
    </p>
  );
}

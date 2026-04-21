import React from "react";
import { Play, Youtube, Instagram, Linkedin, Video, ArrowUpRight } from "lucide-react";
import { profile, navLinks } from "../mock";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Big CTA block */}
        <div className="glass-strong rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-28 right-[-80px] h-80 w-80 rounded-full bg-teal-400/15 blur-[100px]" />
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-[11px] font-mono tracking-[0.22em] text-teal-300 mb-4">— READY WHEN YOU ARE</div>
              <h3 className="font-display text-4xl sm:text-5xl text-white leading-[1.05]">
                Your footage deserves <br /> a <span className="italic text-teal-200">better editor.</span>
              </h3>
            </div>
            <div className="flex lg:justify-end">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-teal-300 text-slate-950 px-6 py-4 font-medium text-[15px] hover:bg-teal-200 transition-colors"
              >
                Start a project
                <span className="h-8 w-8 rounded-full bg-slate-950 text-teal-300 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 accent-line" />

        {/* Columns */}
        <div className="mt-10 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <Play className="h-3.5 w-3.5 text-teal-300" fill="currentColor" />
              </span>
              <span className="font-display text-sm tracking-[0.22em] text-white">{profile.name}</span>
            </div>
            <p className="mt-5 text-[14px] text-slate-400 max-w-sm leading-relaxed">
              {profile.tagline}
            </p>
            <div className="mt-5 text-[12px] font-mono text-slate-500">
              {profile.location}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] font-mono tracking-widest text-slate-500 mb-4">NAVIGATE</div>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[13.5px] text-slate-300 hover:text-teal-200 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11px] font-mono tracking-widest text-slate-500 mb-4">ELSEWHERE</div>
            <div className="flex flex-wrap gap-2">
              {[
                { href: profile.socials.youtube, icon: Youtube, label: "YouTube" },
                { href: profile.socials.instagram, icon: Instagram, label: "Instagram" },
                { href: profile.socials.vimeo, icon: Video, label: "Vimeo" },
                { href: profile.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 h-9 text-[12.5px] text-slate-300 hover:text-teal-200 hover:border-teal-300/40 transition-colors"
                >
                  <s.icon className="h-3.5 w-3.5" /> {s.label}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-block text-[13.5px] text-white hover:text-teal-200 transition-colors underline underline-offset-4 decoration-teal-300/50"
            >
              {profile.email}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-3 text-[11px] font-mono text-slate-500">
          <span>© {year} {profile.name} — All rights reserved.</span>
          <span>Designed + edited in LA.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

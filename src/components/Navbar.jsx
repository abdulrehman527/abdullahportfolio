import React, { useEffect, useState } from "react";
import { Menu, X, Play } from "lucide-react";
import { navLinks, profile } from "../mock";
import { Button } from "./ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,border-color] duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav
          className={`glass rounded-2xl px-4 sm:px-5 py-3 flex items-center justify-between ${
            scrolled ? "glass-strong" : ""
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => handleNav("#top")}
            className="flex items-center gap-3 focus-ring"
            aria-label="Go to top"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
              <Play className="h-3.5 w-3.5 text-teal-300" fill="currentColor" />
              <span className="absolute -inset-[2px] rounded-lg border border-teal-300/20 spin-slow" />
            </span>
            <span className="font-display text-sm tracking-[0.22em] text-white">
              {profile.name}
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleNav(l.href)}
                  className="px-3 py-2 text-[13px] tracking-wide text-slate-300 hover:text-white transition-colors duration-200 rounded-lg focus-ring"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="flex items-center gap-2 text-[11px] font-mono text-teal-300/90">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
              </span>
              AVAILABLE · Q3
            </span>
            <Button
              onClick={() => handleNav("#contact")}
              className="bg-teal-300 text-slate-950 hover:bg-teal-200 rounded-full h-9 px-4 font-medium text-[13px]"
            >
              Start a project
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center h-9 w-9 rounded-lg border border-white/10 bg-white/5 text-white focus-ring"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-3 fade-up">
            <ul className="flex flex-col">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className="w-full text-left px-4 py-3 text-sm text-slate-200 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="px-2 pt-2">
              <Button
                onClick={() => handleNav("#contact")}
                className="w-full bg-teal-300 text-slate-950 hover:bg-teal-200 rounded-full"
              >
                Start a project
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

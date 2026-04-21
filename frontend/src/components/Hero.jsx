import React from "react";
import { ArrowDownRight, Play, Film, Sparkles } from "lucide-react";
import { profile, clients } from "../mock";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
      {/* Backdrop accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-24 -left-24 h-[480px] w-[480px] rounded-full bg-teal-400/10 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-80px] h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.06]"
             style={{
               backgroundImage:
                 "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
               backgroundSize: "64px 64px",
               maskImage: "radial-gradient(ellipse at center, black 45%, transparent 75%)",
             }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          {/* Left: headline */}
          <div className="lg:col-span-8 fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] font-mono tracking-[0.14em] text-teal-200 mb-8">
              <Sparkles className="h-3 w-3" />
              VIDEO EDITOR — COLORIST — STORY CUTTER - SOCIAL MEDIA MANAGER
            </div>
            <h1 className="font-display text-[44px] sm:text-[68px] lg:text-[92px] leading-[0.95] text-white">
              Frames that
              <br />
              <span className="italic font-[500] text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-cyan-300 to-sky-300">
                feel inevitable.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-[15px] sm:text-[17px] leading-relaxed text-slate-300/90">
              {profile.longTagline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button
                onClick={() => scrollTo("#showreel")}
                className="group rounded-full h-12 px-6 bg-teal-300 text-slate-950 hover:bg-teal-200 font-medium text-sm"
              >
                <Play className="mr-2 h-4 w-4" fill="currentColor" />
                Watch the showreel
              </Button>
              <Button
                onClick={() => scrollTo("#work")}
                variant="outline"
                className="group rounded-full h-12 px-6 bg-white/5 text-white border-white/15 hover:bg-white/10 hover:text-white font-medium text-sm"
              >
                See selected work
                <ArrowDownRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </Button>
            </div>
          </div>

          {/* Right: floating card */}
          <div className="lg:col-span-4 fade-up" style={{ animationDelay: "120ms" }}>
            <div className="glass-strong rounded-3xl p-5 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-teal-400/15 blur-3xl" />
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-xl overflow-hidden ring-1 ring-white/10">
                  <img src={profile.portraitUrl} alt="Portrait" className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="text-[13px] text-white font-medium">{profile.firstName} {profile.lastName}</div>
                  <div className="text-[11px] font-mono text-slate-400">{profile.role}</div>
                </div>
              </div>
              <div className="mt-5 accent-line" />
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 p-3">
                  <div className="text-[11px] text-slate-400 font-mono">EXPERIENCE</div>
                  <div className="mt-1 text-white text-sm font-medium">{profile.experience}</div>
                </div>
                <div className="rounded-xl border border-white/10 p-3">
                  <div className="text-[11px] text-slate-400 font-mono">LOCATION</div>
                  <div className="mt-1 text-white text-sm font-medium">Los Angeles</div>
                </div>
                <div className="col-span-2 rounded-xl border border-teal-300/25 bg-teal-300/5 p-3 flex items-center gap-3">
                  <Film className="h-4 w-4 text-teal-300" />
                  <div className="text-[12px] text-teal-100">{profile.availability}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client marquee */}
        <div className="mt-20 relative">
          <div className="text-[11px] font-mono tracking-[0.2em] text-slate-500 mb-5">TRUSTED BY —</div>
          <div className="relative overflow-hidden"
               style={{ maskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)" }}>
            <div className="flex gap-14 marquee-track whitespace-nowrap">
              {[...clients, ...clients].map((c, i) => (
                <span key={i} className="font-display text-2xl sm:text-3xl text-slate-500/70 hover:text-teal-200 transition-colors">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

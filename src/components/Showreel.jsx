import React, { useState } from "react";
import { Play, ExternalLink, Youtube } from "lucide-react";
import { profile } from "../mock";
import { Button } from "./ui/button";

const Showreel = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="showreel" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <div className="text-[11px] font-mono tracking-[0.22em] text-teal-300 mb-4">— REEL 2025</div>
            <h2 className="font-display text-4xl sm:text-5xl text-white">Showreel.</h2>
          </div>
          <a
            href={profile.showreelChannel}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[13px] text-slate-300 hover:text-teal-200 transition-colors"
          >
            <Youtube className="h-4 w-4" /> View all on YouTube
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="relative glass-strong rounded-3xl overflow-hidden border border-white/10">
          <div className="relative aspect-video">
            {!playing ? (
              <button
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 w-full h-full focus-ring"
                aria-label="Play showreel"
              >
                <img
                  src="https://images.unsplash.com/photo-1579109652910-99b9be06aaec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHw0fHx2aWRlbyUyMGVkaXRvcnxlbnwwfHx8fDE3NzY3NTg3NjF8MA&ixlib=rb-4.1.0&q=85"
                  alt="Showreel preview"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/40" />

                {/* Timecode chip */}
                <div className="absolute top-5 left-5 glass rounded-full px-3 py-1.5 text-[11px] font-mono text-teal-200">
                  01:24:06:12 · REEL.MOV
                </div>
                <div className="absolute top-5 right-5 glass rounded-full px-3 py-1.5 text-[11px] font-mono text-slate-300">
                  4K · 23.976
                </div>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="relative flex h-24 w-24 items-center justify-center rounded-full glass-strong border border-teal-300/30 transition-transform duration-500 group-hover:scale-105">
                    <span className="absolute inset-0 rounded-full border border-teal-300/20 spin-slow" />
                    <Play className="h-8 w-8 text-teal-200 translate-x-0.5" fill="currentColor" />
                  </span>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 tracking-widest">AUTO LEVELS · REEL · 25</div>
                    <div className="mt-1 font-display text-2xl sm:text-3xl text-white">A two-minute argument for cinema.</div>
                  </div>
                  <div className="hidden sm:block text-[11px] font-mono text-slate-400">02:14</div>
                </div>
              </button>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                title="Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button
            onClick={() => window.open(profile.showreelChannel, "_blank")}
            variant="outline"
            className="rounded-full bg-white/5 border-white/15 text-white hover:bg-white/10 hover:text-white"
          >
            <Youtube className="mr-2 h-4 w-4" /> Watch channel
          </Button>
          <span className="text-[11px] font-mono text-slate-500">
            TIP — Best viewed with sound on.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Showreel;

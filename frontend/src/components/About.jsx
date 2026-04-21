import React from "react";
import { CheckCircle2, MapPin, Mail } from "lucide-react";
import { profile } from "../mock";

const About = () => {
  const highlights = [
    "Feature-length narrative + episodic experience",
    "Colorist certified workflow in DaVinci Resolve",
    "Sound-first approach — collaborate with designers",
    "Remote review via Frame.io · Timecoded notes",
  ];

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img src={profile.workspaceUrl} alt="Workspace" className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_10px] shadow-teal-300" />
                <span className="text-[12px] font-mono text-slate-200">STUDIO · LOS ANGELES · 2025</span>
              </div>
            </div>
            <div className="hidden lg:block absolute -bottom-8 -right-8 glass-strong rounded-2xl p-4 w-56">
              <div className="text-[11px] font-mono text-slate-400">CURRENTLY EDITING</div>
              <div className="text-white font-display text-lg mt-1">“Midnight Static”</div>
              <div className="text-[11px] text-teal-300 mt-1 font-mono">FINE CUT · R3</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="text-[11px] font-mono tracking-[0.22em] text-teal-300 mb-5">
              — ABOUT THE EDITOR
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.02] text-white">
              I edit for the <span className="italic text-teal-200">feeling</span> of a film, not the shot list.
            </h2>
            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-slate-300/90 max-w-2xl">
              <p>
                I’m {profile.firstName} — an editor and colorist with {profile.experience} shaping films and campaigns for
                studios, labels and independent directors. My work sits at the intersection of rhythm and restraint:
                cutting for emotion, grading for intention, and always leaving room for silence.
              </p>
              <p>
                I came up through music videos, got sharpened on commercials, and now split time between long-form
                narrative and brand films. I care about the second after the cut as much as the frame before it.
              </p>
            </div>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 glass rounded-xl px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-teal-300 shrink-0" />
                  <span className="text-[13.5px] text-slate-200">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-[13px] text-slate-300">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-teal-300" /> {profile.location}</span>
              <span className="h-3 w-px bg-white/10" />
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-teal-200 transition-colors">
                <Mail className="h-4 w-4 text-teal-300" /> {profile.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

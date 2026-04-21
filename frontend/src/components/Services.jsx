import React from "react";
import { Film, Clapperboard, Palette, Music2, PlayCircle, Type, ArrowUpRight } from "lucide-react";
import { services } from "../mock";

const ICONS = { Film, Clapperboard, Palette, Music2, PlayCircle, Type };

const Services = () => {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <div className="text-[11px] font-mono tracking-[0.22em] text-teal-300 mb-4">— SERVICES</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
              Built for the edit bay — <br />
              <span className="italic text-teal-200">shipped on deadline.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-slate-300 text-[15px] leading-relaxed">
            A tight range of services, each done with care. I work as a hired editor, embedded collaborator, or
            lead a small post team depending on the scope.
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, idx) => {
            const Icon = ICONS[s.icon] || Film;
            return (
              <div
                key={s.title}
                className="group glass glass-hover rounded-2xl p-6 relative overflow-hidden fade-up"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-teal-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start justify-between">
                  <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-teal-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">0{idx + 1}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl text-white">{s.title}</h3>
                <p className="mt-2 text-[14px] text-slate-300/90 leading-relaxed">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[13px] text-slate-400">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-teal-300" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono tracking-widest text-slate-500">ENQUIRE</span>
                  <a
                    href="#contact"
                    className="h-9 w-9 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-teal-200 transition-all duration-300 group-hover:bg-teal-300 group-hover:text-slate-950 group-hover:border-teal-300"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import { tools } from "../mock";

const Tools = () => {
  return (
    <section id="tools" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-10">
          <div className="lg:col-span-7">
            <div className="text-[11px] font-mono tracking-[0.22em] text-teal-300 mb-4">— TOOLS OF THE TRADE</div>
            <h2 className="font-display text-4xl sm:text-5xl text-white">
              The rig. <span className="italic text-teal-200">Honestly rated.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-slate-300 text-[15px] leading-relaxed">
            I’m platform-agnostic but opinionated. These ratings reflect years of real project hours — not tutorials.
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-6 sm:p-8">
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
            {tools.map((t, idx) => (
              <div key={t.name} className="fade-up" style={{ animationDelay: `${idx * 40}ms` }}>
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-lg text-white">{t.name}</span>
                    <span className="text-[10.5px] font-mono tracking-widest text-slate-500">{t.group.toUpperCase()}</span>
                  </div>
                  <span className="font-mono text-sm text-teal-300">{t.level}%</span>
                </div>
                <div className="mt-3 relative h-[3px] rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-teal-300 to-cyan-400"
                    style={{ width: `${t.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;

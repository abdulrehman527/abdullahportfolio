import React from "react";
import { stats } from "../mock";

const Stats = () => {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="glass-strong rounded-3xl p-8 sm:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {stats.map((s, idx) => (
              <div key={s.label} className="fade-up" style={{ animationDelay: `${idx * 80}ms` }}>
                <div className="font-display text-5xl sm:text-6xl text-white leading-none">
                  {s.value}
                </div>
                <div className="mt-3 text-[11px] font-mono tracking-[0.2em] text-slate-400">
                  {s.label.toUpperCase()}
                </div>
                <div className="mt-4 h-px bg-gradient-to-r from-teal-300/60 via-teal-300/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

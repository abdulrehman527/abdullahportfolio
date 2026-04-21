import React from "react";
import { processSteps } from "../mock";

const Process = () => {
  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="text-[11px] font-mono tracking-[0.22em] text-teal-300 mb-4">— PROCESS</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
            From raw drive to <span className="italic text-teal-200">final master.</span>
          </h2>
          <p className="mt-5 text-[15px] text-slate-300 leading-relaxed">
            A clear, collaborative workflow. Transparent revisions, locked deliverables, zero mystery.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] sm:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-px hidden sm:block" />

          <ol className="space-y-5">
            {processSteps.map((s, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <li key={s.step} className="relative sm:grid sm:grid-cols-2 sm:gap-10 items-stretch">
                  <div className={`${isLeft ? "sm:pr-10" : "sm:col-start-2 sm:pl-10"}`}>
                    <div className="glass glass-hover rounded-2xl p-6 sm:p-7 relative fade-up" style={{ animationDelay: `${idx * 60}ms` }}>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[12px] tracking-widest text-teal-300">STEP {s.step}</span>
                        <span className="h-8 w-8 rounded-full flex items-center justify-center text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300">
                          {idx + 1}/{processSteps.length}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-2xl text-white">{s.title}</h3>
                      <p className="mt-2 text-[14px] text-slate-300/90 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <span className="absolute left-[14px] sm:left-1/2 top-8 h-2.5 w-2.5 rounded-full bg-teal-300 shadow-[0_0_14px] shadow-teal-300/70 -translate-x-1/2" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Process;

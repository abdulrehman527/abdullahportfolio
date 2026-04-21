import React from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import { journal } from "../mock";

const Journal = () => {
  return (
    <section id="journal" className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="text-[11px] font-mono tracking-[0.22em] text-teal-300 mb-4">— JOURNAL</div>
            <h2 className="font-display text-4xl sm:text-5xl text-white">
              Notes from the <span className="italic text-teal-200">edit bay.</span>
            </h2>
          </div>
          <a href="#journal" className="text-[13px] text-slate-300 hover:text-teal-200 transition-colors inline-flex items-center gap-2">
            All writing <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {journal.map((j, idx) => (
            <article key={j.id} className="group glass glass-hover rounded-2xl p-6 fade-up" style={{ animationDelay: `${idx * 60}ms` }}>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full border border-teal-300/25 bg-teal-300/5 px-2.5 py-1 text-[10.5px] font-mono tracking-widest text-teal-200">
                  {j.tag.toUpperCase()}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                  <Clock className="h-3 w-3" /> {j.readTime}
                </span>
              </div>
              <h3 className="mt-5 font-display text-[22px] text-white leading-snug group-hover:text-teal-100 transition-colors">
                {j.title}
              </h3>
              <p className="mt-3 text-[13.5px] text-slate-300/85 leading-relaxed">{j.excerpt}</p>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">{j.date}</span>
                <span className="h-9 w-9 rounded-full flex items-center justify-center border border-white/10 bg-white/5 text-teal-200 transition-all duration-300 group-hover:bg-teal-300 group-hover:text-slate-950 group-hover:border-teal-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;

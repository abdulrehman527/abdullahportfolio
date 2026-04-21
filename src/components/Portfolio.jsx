import React, { useMemo, useState } from "react";
import { ArrowUpRight, Filter } from "lucide-react";
import { projects, categories } from "../mock";

const Portfolio = () => {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <div className="text-[11px] font-mono tracking-[0.22em] text-teal-300 mb-4">— SELECTED WORK</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white">
              Recent cuts, <span className="italic text-teal-200">real footage.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <Filter className="h-3.5 w-3.5" /> {visible.length} PROJECTS
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => {
            const isActive = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 h-9 rounded-full text-[12.5px] tracking-wide transition-colors duration-200 border focus-ring ${
                  isActive
                    ? "bg-teal-300 text-slate-950 border-teal-300"
                    : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p, idx) => (
            <article
              key={p.id}
              className="group glass glass-hover rounded-2xl overflow-hidden fade-up"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-[10.5px] font-mono tracking-widest text-teal-200">
                  {p.category.toUpperCase()}
                </div>
                <div className="absolute top-3 right-3 glass rounded-full px-3 py-1 text-[10.5px] font-mono text-slate-300">
                  {p.duration}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3 className="font-display text-[22px] text-white leading-tight">{p.title}</h3>
                      <p className="text-[12px] text-slate-300 mt-1">{p.client} · {p.year}</p>
                    </div>
                    <span className="h-10 w-10 rounded-full flex items-center justify-center bg-teal-300/10 border border-teal-300/30 text-teal-200 transition-transform duration-300 group-hover:bg-teal-300 group-hover:text-slate-950 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">{p.role.toUpperCase()}</span>
                <span className="text-[11px] font-mono text-slate-500">PROJECT · {p.id.toUpperCase()}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

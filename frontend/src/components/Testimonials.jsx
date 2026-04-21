import React, { useState, useEffect } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "../mock";

const Testimonials = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((p) => (p + 1) % testimonials.length);

  const t = testimonials[i];

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="text-[11px] font-mono tracking-[0.22em] text-teal-300 mb-6 text-center">— KIND WORDS</div>
        <div className="glass-strong rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-20 -left-20 h-60 w-60 rounded-full bg-teal-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

          <Quote className="h-10 w-10 text-teal-300/60" />
          <blockquote className="mt-5 font-display text-2xl sm:text-3xl lg:text-4xl text-white leading-[1.25]">
            “{t.quote}”
          </blockquote>

          <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-white font-medium">{t.name}</div>
              <div className="text-[12px] font-mono text-slate-400">{t.role}</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-teal-200 transition-colors focus-ring flex items-center justify-center"
                aria-label="Previous"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-teal-200 transition-colors focus-ring flex items-center justify-center"
                aria-label="Next"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  idx === i ? "w-10 bg-teal-300" : "w-5 bg-white/15 hover:bg-white/25"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

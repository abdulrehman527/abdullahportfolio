import React from "react";
import { Check, Sparkles } from "lucide-react";
import { pricingTiers } from "../mock";
import { Button } from "./ui/button";

const Pricing = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="text-[11px] font-mono tracking-[0.22em] text-teal-300 mb-4">— ENGAGEMENT</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05]">
            Transparent pricing. <span className="italic text-teal-200">No surprises.</span>
          </h2>
          <p className="mt-5 text-[15px] text-slate-300 leading-relaxed">
            Starting points, not ceilings. Every project is scoped to footage volume, deliverables and timeline.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pricingTiers.map((tier, idx) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-7 fade-up ${
                tier.highlight
                  ? "glass-strong border border-teal-300/30"
                  : "glass glass-hover"
              }`}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {tier.highlight && (
                <div className="absolute -top-3 right-6 inline-flex items-center gap-1.5 glass-strong rounded-full px-3 py-1 text-[11px] font-mono text-teal-200 border border-teal-300/40">
                  <Sparkles className="h-3 w-3" /> MOST BOOKED
                </div>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl text-white">{tier.name}</h3>
                <span className="text-[11px] font-mono text-slate-500">0{idx + 1}</span>
              </div>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-5xl text-white">{tier.price}</span>
                {tier.unit && <span className="text-sm text-slate-400">{tier.unit}</span>}
              </div>
              <p className="mt-3 text-[13.5px] text-slate-300/90">{tier.blurb}</p>

              <div className="my-6 accent-line" />
              <ul className="space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[13.5px] text-slate-200">
                    <span className="mt-0.5 h-5 w-5 rounded-full flex items-center justify-center bg-teal-300/15 text-teal-300">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                className={`mt-7 w-full rounded-full h-11 font-medium text-sm ${
                  tier.highlight
                    ? "bg-teal-300 text-slate-950 hover:bg-teal-200"
                    : "bg-white/8 text-white hover:bg-white/12 border border-white/15"
                }`}
              >
                {tier.price === "Custom" ? "Request a quote" : "Start this project"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, Youtube, Instagram, Linkedin, Video } from "lucide-react";
import { profile } from "../mock";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";

const budgets = ["< $2k", "$2k – $5k", "$5k – $15k", "$15k+", "Not sure yet"];
const types = ["Commercial / Brand", "Music Video", "Documentary", "Short Film", "Trailer", "Color Grade Only", "Other"];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", type: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Frontend-only for now — store in local for demo
    const existing = JSON.parse(localStorage.getItem("al_enquiries") || "[]");
    localStorage.setItem("al_enquiries", JSON.stringify([...existing, { ...form, at: new Date().toISOString() }]));
    setSubmitted(true);
    toast.success("Message sent · I'll reply within 24h.", {
      description: "Thanks for reaching out.",
    });
    setForm({ name: "", email: "", type: "", budget: "", message: "" });
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left */}
          <div className="lg:col-span-5">
            <div className="text-[11px] font-mono tracking-[0.22em] text-teal-300 mb-4">— LET’S TALK</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.03] text-white">
              Got footage? <br />
              <span className="italic text-teal-200">Let’s make it sing.</span>
            </h2>
            <p className="mt-5 text-[15px] text-slate-300 leading-relaxed max-w-md">
              Tell me about the project — I read every message and usually reply within a day.
            </p>

            <div className="mt-8 space-y-3">
              <a href={`mailto:${profile.email}`} className="glass glass-hover rounded-2xl p-4 flex items-center gap-4 group">
                <span className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-200 group-hover:bg-teal-300 group-hover:text-slate-950 transition-colors">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">EMAIL</div>
                  <div className="text-white text-sm">{profile.email}</div>
                </div>
              </a>
              <a href={`tel:${profile.phone}`} className="glass glass-hover rounded-2xl p-4 flex items-center gap-4 group">
                <span className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-teal-200 group-hover:bg-teal-300 group-hover:text-slate-950 transition-colors">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">PHONE</div>
                  <div className="text-white text-sm">{profile.phone}</div>
                </div>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2">
              {[
                { href: profile.socials.youtube, icon: Youtube, label: "YouTube" },
                { href: profile.socials.instagram, icon: Instagram, label: "Instagram" },
                { href: profile.socials.vimeo, icon: Video, label: "Vimeo" },
                { href: profile.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:text-teal-200 hover:border-teal-300/40 transition-colors"
                  aria-label={s.label}
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="glass-strong rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono tracking-widest text-slate-400">NAME</label>
                  <Input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-slate-500 h-12 rounded-xl focus-visible:ring-teal-300/40 focus-visible:border-teal-300/50"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono tracking-widest text-slate-400">EMAIL</label>
                  <Input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@studio.com"
                    className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-slate-500 h-12 rounded-xl focus-visible:ring-teal-300/40 focus-visible:border-teal-300/50"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono tracking-widest text-slate-400">PROJECT TYPE</label>
                  <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v })}>
                    <SelectTrigger className="mt-2 bg-white/5 border-white/10 text-white h-12 rounded-xl">
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-950 border-white/10 text-white">
                      {types.map((t) => (
                        <SelectItem key={t} value={t} className="focus:bg-white/10">{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-[11px] font-mono tracking-widest text-slate-400">BUDGET</label>
                  <Select value={form.budget} onValueChange={(v) => setForm({ ...form, budget: v })}>
                    <SelectTrigger className="mt-2 bg-white/5 border-white/10 text-white h-12 rounded-xl">
                      <SelectValue placeholder="Select a range" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-950 border-white/10 text-white">
                      {budgets.map((b) => (
                        <SelectItem key={b} value={b} className="focus:bg-white/10">{b}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono tracking-widest text-slate-400">TELL ME ABOUT THE PROJECT</label>
                <Textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Timeline, footage volume, deliverables, references…"
                  className="mt-2 bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-xl resize-none focus-visible:ring-teal-300/40 focus-visible:border-teal-300/50"
                />
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
                <div className="text-[11px] font-mono text-slate-500">
                  By sending, you agree to a reply via email.
                </div>
                <Button
                  type="submit"
                  disabled={submitted}
                  className="rounded-full h-12 px-6 bg-teal-300 text-slate-950 hover:bg-teal-200 font-medium text-sm"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" /> Sent
                    </>
                  ) : (
                    <>
                      Send message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

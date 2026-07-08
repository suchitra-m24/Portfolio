"use client";

import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";
import { education } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Education() {
  const timeline = [
    {
      icon: GraduationCap,
      title: education.degree,
      subtitle: education.field,
      place: education.institution,
      period: education.period,
      result: `CGPA ${education.cgpa}`,
      highlight: true,
    },
    ...education.history.map((h) => ({
      icon: School,
      title: h.credential,
      subtitle: undefined as string | undefined,
      place: h.school,
      period: h.period,
      result: h.result,
      highlight: false,
    })),
  ];

  return (
    <section id="education" className="relative py-24 md:py-32 bg-slate-50/60">
      <div className="section-container">
        <SectionHeading eyebrow="Education" title="Academic foundation." />

        <div className="mt-12 relative max-w-2xl space-y-6">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-indigo via-brand-purple to-transparent" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex gap-6"
            >
              <div
                className={`relative shrink-0 grid place-items-center w-14 h-14 rounded-2xl text-white ${
                  item.highlight ? "bg-brand-gradient shadow-glow" : "bg-slate-300"
                }`}
              >
                <item.icon size={22} />
              </div>

              <div className="flex-1 rounded-2xl bg-white border border-slate-100 shadow-card p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                  <span className="text-xs font-semibold text-brand-indigo bg-brand-gradient-soft rounded-full px-3 py-1">
                    {item.result}
                  </span>
                </div>
                {item.subtitle && <p className="mt-1.5 text-sm text-slate-600">{item.subtitle}</p>}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-medium text-slate-500">{item.place}</p>
                  <p className="text-xs text-slate-400">{item.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

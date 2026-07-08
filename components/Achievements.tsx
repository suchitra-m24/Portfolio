"use client";

import { motion } from "framer-motion";
import { Trophy, Code2 } from "lucide-react";
import { achievements } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const icons = [Trophy, Code2];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Achievements"
          title="Outside the classroom."
          description="A few things I've built and solved beyond coursework."
        />

        <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-4xl">
          {achievements.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-white border border-slate-100 p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                <div className="absolute top-0 left-6 right-6 h-px bg-brand-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="grid place-items-center w-11 h-11 rounded-xl bg-brand-gradient-soft text-brand-indigo mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

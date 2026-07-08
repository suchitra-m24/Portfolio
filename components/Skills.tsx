"use client";

import { motion } from "framer-motion";
import { Code2, LayoutPanelLeft, Server, Database, Wrench, Boxes, LucideIcon } from "lucide-react";
import { skillCategories } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const categoryIcons: Record<string, LucideIcon> = {
  Programming: Code2,
  Frontend: LayoutPanelLeft,
  Backend: Server,
  Database: Database,
  Tools: Wrench,
  Concepts: Boxes,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-slate-50/60">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="The tools I reach for to ship a full-stack idea."
          description="From backend services to the interfaces on top of them, here's what I use to take a project from concept to a working product."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, i) => {
            const Icon = categoryIcons[category.title] ?? Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl bg-white border border-slate-100 p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                <div className="absolute top-0 left-6 right-6 h-px bg-brand-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <div className="grid place-items-center w-11 h-11 rounded-xl bg-brand-gradient-soft text-brand-indigo mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon size={20} />
                </div>

                <h3 className="text-base font-semibold text-slate-900">{category.title}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1.5 transition-colors duration-200 group-hover:border-brand-indigo/20 group-hover:text-brand-indigo"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

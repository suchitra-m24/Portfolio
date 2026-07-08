"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            eyebrow="Projects"
            title="Things I've built end to end."
            description="Each project pairs a Java Spring Boot backend with a React frontend, built around a real, role-based problem."
          />
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-3xl border border-slate-100 bg-white shadow-card overflow-hidden transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1.5"
            >
              <div
                className={`relative h-36 bg-gradient-to-br ${project.accent} overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-90 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="absolute top-4 left-4 grid place-items-center w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm text-white transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                  <Layers size={18} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/10">
                  <span className="text-white text-sm font-medium tracking-wide flex items-center gap-1.5">
                    <Github size={15} /> View code <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                  {project.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-100 rounded-md px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles, Code2, BrainCircuit, Server, Target } from "lucide-react";
import { profile } from "@/lib/data";
import TypingText from "./TypingText";

const floatingBadges = [
  { label: "Java Full Stack", icon: Code2, className: "top-4 -left-6 sm:-left-10", delay: 0 },
  { label: "AI & ML", icon: BrainCircuit, className: "top-1/3 -right-6 sm:-right-12", delay: 0.4 },
  { label: "Backend Dev", icon: Server, className: "bottom-24 -left-8 sm:-left-14", delay: 0.8 },
  { label: "Problem Solving", icon: Target, className: "bottom-2 right-2 sm:right-4", delay: 1.2 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden"
    >
      <div className="section-container grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-10 items-center">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-brand-indigo shadow-card"
          >
            <Sparkles size={13} />
            Open to Internship Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.08] text-slate-900"
          >
            Hi, I&apos;m {profile.name.split(" ")[0]}{" "}
            <span className="text-gradient">M</span>.
            <br />
            I build software that{" "}
            <span className="text-gradient">solves real problems.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 h-7 text-lg font-medium text-slate-500"
          >
            <TypingText words={profile.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex items-center gap-2 rounded-full bg-brand-gradient text-white text-sm font-medium px-6 py-3 shadow-glow transition-transform duration-300 hover:scale-[1.03] overflow-hidden"
            >
              <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.35),transparent)] bg-[length:200%_100%] animate-shimmer" />
              <span className="relative">View Projects</span>
              <ArrowRight size={16} className="relative transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-medium px-6 py-3 transition-all duration-300 hover:border-brand-indigo/40 hover:text-brand-indigo hover:shadow-card"
            >
              <Download size={16} />
              Download Resume
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full text-slate-700 text-sm font-medium px-4 py-3 transition-colors duration-300 hover:text-brand-indigo"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-wider text-slate-400"
          >
            <span>Java · Spring Boot</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300" />
            <span>React · MySQL</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300" />
            <span>Machine Learning</span>
          </motion.div>
        </div>

        {/* Right column: profile card */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative z-10 rounded-[28px] glass shadow-card p-7 sm:p-8 animate-float"
          >
            <div className="absolute -inset-px rounded-[28px] bg-brand-gradient opacity-[0.06] pointer-events-none" />

            <div className="relative flex items-center gap-4">
              <svg viewBox="0 0 80 80" className="w-16 h-16 rounded-2xl shrink-0" role="img" aria-label="Suchitra M monogram avatar">
                <defs>
                  <linearGradient id="avatarGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4F46E5" />
                    <stop offset="50%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                <rect width="80" height="80" rx="20" fill="url(#avatarGrad)" />
                <text x="40" y="49" textAnchor="middle" fontSize="28" fontWeight="600" fill="white" fontFamily="var(--font-geist-sans), sans-serif">
                  SM
                </text>
              </svg>
              <div>
                <p className="text-base font-semibold text-slate-900">{profile.name}</p>
                <p className="text-sm text-slate-500">Bengaluru, India</p>
                <div className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open to work
                </div>
              </div>
            </div>

            <div className="relative mt-6 pt-6 border-t border-slate-100">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400 mb-3">
                Focus areas
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-100 rounded-full px-3 py-1.5"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mt-6 pt-6 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-lg font-semibold text-slate-900">2</p>
                <p className="text-[11px] text-slate-500">Projects</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900">7.1</p>
                <p className="text-[11px] text-slate-500">CGPA</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900">60+</p>
                <p className="text-[11px] text-slate-500">LeetCode</p>
              </div>
            </div>
          </motion.div>

          {/* Floating badges */}
          {floatingBadges.map(({ label, icon: Icon, className, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + delay }}
              className={`hidden sm:flex absolute z-20 items-center gap-1.5 rounded-2xl glass shadow-card px-3 py-2 text-xs font-medium text-slate-700 ${className}`}
              style={{ animation: `float 6s ease-in-out ${delay}s infinite` }}
            >
              <Icon size={14} className="text-brand-indigo" />
              {label}
            </motion.div>
          ))}

          <div className="absolute -inset-6 -z-10 rounded-[40px] bg-brand-gradient-soft blur-2xl" />
        </div>
      </div>
    </section>
  );
}

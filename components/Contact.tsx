"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/suchitra-m24",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/suchitra-m24",
    href: profile.github,
    icon: Github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Let's build something together."
          description="I'm actively looking for internship opportunities. Reach out through any of these — I'll get back to you quickly."
        />

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {contactLinks.map(({ label, value, href, icon: Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col items-center text-center rounded-2xl bg-white border border-slate-100 shadow-card p-7 transition-shadow duration-300 hover:shadow-card-hover"
            >
              <span className="absolute top-4 right-4 text-slate-300 transition-all duration-300 group-hover:text-brand-indigo group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight size={16} />
              </span>
              <div className="grid place-items-center w-12 h-12 rounded-2xl bg-brand-gradient-soft text-brand-indigo transition-transform duration-300 group-hover:scale-110">
                <Icon size={20} />
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-900">{label}</p>
              <p className="mt-1 text-xs text-slate-500 break-all">{value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

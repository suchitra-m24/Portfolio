import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const socials = [
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Github, href: profile.github, label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-100 py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2.5">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-brand-gradient text-white text-xs font-semibold">
            {profile.initials}
          </span>
          <span className="text-sm text-slate-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="grid place-items-center w-9 h-9 rounded-full text-slate-500 border border-transparent hover:border-slate-200 hover:text-brand-indigo hover:bg-slate-50 transition-all duration-300"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

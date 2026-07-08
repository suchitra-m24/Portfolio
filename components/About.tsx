import { about, stats } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import AnimatedCounter from "./AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="About"
          title="Grounded in fundamentals, building toward the full stack."
        />

        <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-slate-600 leading-relaxed text-[15px] sm:text-base">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-3xl glass shadow-card p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
                Snapshot
              </p>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl sm:text-3xl font-semibold text-gradient">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1.5 text-[11px] sm:text-xs text-slate-500 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-6 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Currently</span>
                  <span className="font-medium text-slate-800">Seeking Internships</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Focus</span>
                  <span className="font-medium text-slate-800">Full Stack + AI/ML</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Based in</span>
                  <span className="font-medium text-slate-800">Bengaluru, India</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

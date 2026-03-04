import { motion } from 'motion/react';
import { resumeData } from '../data';
import { useState } from 'react';
import { ChevronDown, Trophy } from 'lucide-react';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Internships</h2>
          <div className="w-20 h-1 bg-white/20 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {resumeData.experience.map((exp, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                  isExpanded ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/[0.07]'
                }`}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className="w-full text-left p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                    <div className="text-white/60 text-lg">{exp.company}</div>
                  </div>
                  <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
                    <div className="text-sm font-mono text-white/40 text-left md:text-right">
                      <div>{exp.dates}</div>
                      <div>{exp.location}</div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-white/40 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 md:p-8 pt-0 border-t border-white/5">
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-3 text-white/70">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

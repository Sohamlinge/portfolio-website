import { motion } from 'motion/react';
import { resumeData } from '../data';
import { BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-white/20 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {resumeData.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 relative"
            >
              {/* Timeline line */}
              {i !== resumeData.education.length - 1 && (
                <div className="absolute left-[19px] top-10 bottom-[-24px] w-[1px] bg-white/10" />
              )}
              
              <div className="mt-1 shrink-0">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white/60" />
                </div>
              </div>
              
              <div className="pb-6">
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <div className="text-white/60 mt-1">{edu.institution}</div>
                <div className="text-sm font-mono text-white/40 mt-2">{edu.dates}</div>
                {edu.details && edu.details.length > 0 && (
                  <div className="mt-3 text-sm text-white/70">
                    {edu.details.map((detail, j) => (
                      <span key={j} className="inline-block px-2 py-1 rounded bg-white/5 border border-white/5 mr-2">
                        {detail}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

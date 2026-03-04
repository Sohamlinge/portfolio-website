import { motion } from 'motion/react';
import { resumeData } from '../data';
import { FileText } from 'lucide-react';

export default function Extra() {
  if (!resumeData.extra || resumeData.extra.length === 0) return null;

  return (
    <section id="extra" className="py-24 px-6 relative z-10 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Additional</h2>
          <div className="w-20 h-1 bg-white/20 rounded-full" />
        </motion.div>

        <div className="grid gap-6">
          {resumeData.extra.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4 items-start"
            >
              <div className="p-3 rounded-xl bg-white/5 shrink-0">
                <FileText className="w-6 h-6 text-white/60" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

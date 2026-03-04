import { motion } from 'motion/react';
import { resumeData } from '../data';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-white/20 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {resumeData.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, j) => (
                    <span key={j} className="px-3 py-1 text-xs font-mono rounded-full bg-black/30 text-white/70 border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {project.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-white/60 text-sm">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-white/30 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {project.links && project.links.length > 0 && (
                <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-white/10 mt-auto">
                  {project.links.map((link: any, j: number) => (
                    <a key={j} href={link.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                      {link.name.toLowerCase().includes('github') ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

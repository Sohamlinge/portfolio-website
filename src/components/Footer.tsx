import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 relative z-10 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">Let's Connect</h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
            <a href={`mailto:${resumeData.basics.email}`} className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
              <span>{resumeData.basics.email}</span>
            </a>
            
            <div className="flex items-center gap-4">
              <a href={`tel:${resumeData.basics.phone}`} className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              {resumeData.basics.links.map((link, i) => {
                const isGithub = link.name.toLowerCase().includes('github');
                const isLinkedin = link.name.toLowerCase().includes('linkedin');
                return (
                  <a key={i} href={link.url} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                    {isGithub ? <Github className="w-5 h-5" /> : isLinkedin ? <Linkedin className="w-5 h-5" /> : link.name}
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="pt-16 flex items-center justify-center gap-2 text-white/40 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{resumeData.basics.location}</span>
          </div>
          
          <div className="text-white/30 text-xs font-mono mt-8">
            © {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

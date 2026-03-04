import { motion } from 'motion/react';
import { resumeData } from '../data';
import { ArrowDown, Download, ChevronRight } from 'lucide-react';

export default function Hero() {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-5xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-white/80 uppercase tracking-wider">Available for work</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
            {resumeData.basics.name.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>
          
          <h2 className="text-xl md:text-3xl text-white/60 font-light tracking-tight max-w-2xl">
            {resumeData.basics.title}
          </h2>
          
          <p className="text-base md:text-lg text-white/40 max-w-xl leading-relaxed">
            {resumeData.basics.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-8">
            <button 
              onClick={scrollToExperience}
              className="group relative px-6 py-3 bg-white text-black rounded-full font-medium flex items-center gap-2 overflow-hidden transition-transform hover:scale-105"
            >
              <span>View Experience</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button className="group px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium flex items-center gap-2 transition-all hover:scale-105">
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xs font-mono uppercase tracking-widest rotate-90 mb-4">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}

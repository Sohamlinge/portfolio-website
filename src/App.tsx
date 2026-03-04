/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Splash from './components/Splash';
import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Extra from './components/Extra';
import Footer from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white selection:bg-emerald-500/30 font-sans">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <Splash key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <div key="content" className="relative">
            <AnimatedBackground />
            <Navigation />
            <main>
              <Hero />
              <Experience />
              <Projects />
              <Skills />
              <Education />
              <Extra />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

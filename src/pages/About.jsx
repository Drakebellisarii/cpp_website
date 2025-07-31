import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-100 p-10 text-slate-700 font-serif">
      <motion.h2 
        className="text-5xl font-light text-center italic mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        About Central Point Partners
      </motion.h2>
      <motion.p 
        className="max-w-3xl mx-auto text-lg font-light leading-relaxed text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}>
        Central Point Partners is committed to nurturing transformation and guiding individuals, teams, and organizations toward their peak potential. With a philosophy rooted in presence, clarity, and intentional growth, we believe that each journey is unique—and deserves care, attention, and wisdom. 
        <br /><br />
        Whether you're stepping into personal coaching, aligning your career, or fostering team synergy, we walk alongside you with purpose.
      </motion.p>
    </div>
  );
}

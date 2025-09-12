import React from "react";
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-purple-50 text-slate-700 font-serif overflow-x-hidden">
      {/* Animated Watercolor background elements */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-blue-200/60 via-purple-200/40 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
        </motion.div>
        <motion.div 
          className="absolute top-40 right-0 w-80 h-80 bg-gradient-radial from-pink-200/50 via-orange-200/30 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 0.8, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
        </motion.div>
        <motion.div 
          className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-radial from-green-200/40 via-blue-200/30 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 0.9, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 25, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}>
        </motion.div>
      </div>

      <header className="relative py-2 px-6 flex justify-between items-center bg-white/80 backdrop-blur-sm shadow-lg top-0 z-50 border-b border-slate-200/50">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <img 
            src="/new-GPP.svg" 
            alt="Guided Peak Potential" 
            className="h-16 w-auto object-contain"
          />
        </motion.div>
        <nav className="space-x-8 flex items-center">
        {['Home', 'About', 'Contact'].map((item, i) => {
  const isAbout = item === 'About';
  const isContact = item === 'Contact';
  const isHome = item === 'Home';
  const baseProps = {
    className: "text-slate-500 hover:text-slate-700 text-lg font-light tracking-wide transition-all duration-300 hover:underline decoration-2 decoration-blue-300 underline-offset-2 decoration-blue-300 underline-offset-4",
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: i * 0.1 + 0.3 }
  };

  if (isHome) {
    return (
      <motion.a key={item} href="/" {...baseProps}>
        Home
      </motion.a>
    );
  } else if (isAbout) {
    return (
      <motion.a key={item} href="/about" {...baseProps}>
        About
      </motion.a>
    );
  } else if (isContact) {
    return (
      <motion.a key={item} href="/contact" {...baseProps}>
        Contact
      </motion.a>
    );
  }
})}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[70vh] px-4 overflow-hidden bg-cover bg-center bg-no-repeat"
       style={{backgroundImage: "url('/boat.jpeg')"}}>
        {/* Animated Mountain layers */}
        <div className="absolute bottom-0 left-0 right-0 h-full">
          <motion.div 
            className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-slate-300/30 to-transparent" 
            style={{
              clipPath: 'polygon(0% 100%, 20% 70%, 35% 85%, 50% 60%, 65% 80%, 80% 65%, 100% 90%, 100% 100%)'
            }}
            animate={{ 
              opacity: [0.3, 0.5, 0.3],
              y: [0, -1, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <motion.h1 
            className="text-5xl md:text-6xl font-light text-slate-600 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            About 
            <span className="block text-6xl md:text-7xl font-extralight italic text-slate-700 mt-2">
              Guided Peak Potential
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl font-light text-slate-500 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}>
            Committed to nurturing transformation and guiding individuals
            toward their peak potential. With a philosophy rooted in presence, clarity, and intentional growth, 
            we believe that each journey is unique—and deserves care, attention, and wisdom.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-white/70 to-blue-50/70">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-slate-200/30"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              <h2 className="text-4xl font-light text-slate-600 italic mb-6">Our Mission</h2>
              <p className="text-lg font-light text-slate-600 leading-relaxed mb-4">
                To empower individuals to discover, develop, and achieve their highest potential 
                through personalized coaching, strategic guidance, and unwavering support. We create transformative 
                experiences that honor each client's unique journey while providing the tools, insights, and 
                accountability needed for sustainable growth.
              </p>
              <p className="text-lg font-light text-slate-600 leading-relaxed">
                Whether you're navigating career transitions, seeking personal breakthrough, or building 
                organizational excellence, we walk alongside you with purpose, clarity, and deep commitment 
                to your success.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              className="bg-gradient-to-br from-yellow-50/80 to-orange-50/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-yellow-200/30"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}>
              <h2 className="text-4xl font-light text-yellow-600 italic mb-6">Our Vision</h2>
              <p className="text-lg font-light text-slate-600 leading-relaxed mb-4">
                A world where every individual and organization operates from their authentic peak potential, 
                creating ripple effects of positive transformation that extend far beyond themselves. We envision 
                communities of empowered leaders, fulfilled professionals, and thriving organizations that 
                contribute meaningfully to the world.
              </p>
              <p className="text-lg font-light text-slate-600 leading-relaxed">
                Through our work, we aim to be the catalyst that turns potential into reality, dreams into 
                achievements, and challenges into stepping stones toward greatness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-purple-50/70 to-pink-50/70">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-5xl font-light text-center mb-16 text-slate-600 italic tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            Why Choose Guided Peak Potential?
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "Personalized Approach",
                description: "Every coaching relationship is as unique as you are. We take time to understand your challenges and aspirations, creating a completely customized coaching experience that honors your individual journey and accelerates your growth.",
                highlight: "100% Tailored to You"
              },
              
              {
                title: "Holistic Development",
                description: "We don't just focus on one area of your life. Our approach integrates personal growth, professional development, relationships, and well-being to create sustainable transformation that elevates every aspect of your existence.",
                highlight: "Complete Life Integration"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-slate-200/30"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-2xl font-light text-slate-600 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 font-light leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
                      {feature.highlight}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Promise Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-slate-600 to-slate-700 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-5xl font-light mb-12 italic"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            Our Promise to You
          </motion.h2>

          <motion.div 
            className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}>
            
            <blockquote className="text-2xl font-light leading-relaxed mb-8 italic">
              "We promise to show up fully present, completely committed to your success, and 
              unwavering in our belief in your potential. Your dreams matter to us, your growth 
              is our priority, and your transformation is our shared victory. Together, we will 
              navigate every challenge, celebrate every breakthrough, and ensure that you not 
              only reach your peak potential but discover heights you never knew were possible."
            </blockquote>
            
            <div className="text-2xl font-light italic">
              — Constance Bellisari, Founder
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-400 bg-white/60 backdrop-blur-sm border-t border-slate-200/30">
        <div className="font-light">
          © {new Date().getFullYear()} Guided Peak Potential. Nurturing transformation with gentle wisdom.
        </div>
      </footer>
    </div>
  );
}
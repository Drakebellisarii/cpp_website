import React, { useState } from "react";
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-purple-50 text-slate-700 font-serif overflow-x-hidden flex flex-col">
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

      {/* Header */}
      <header className="relative p-6 flex justify-between items-center bg-white/80 backdrop-blur-sm shadow-lg top-0 z-50 border-b border-slate-200/50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <a 
            href="/"
            className="text-3xl font-light tracking-wide text-slate-600 italic hover:text-slate-700 transition-colors duration-300">
            Guided Peak Potential
          </a>
        </motion.div>
        <nav className="space-x-8 flex items-center">
          {['Home', 'About'].map((item, i) => {
            const baseProps = {
              className: "text-slate-500 hover:text-slate-700 text-lg font-light tracking-wide transition-all duration-300 hover:underline decoration-2 decoration-blue-300 underline-offset-4",
              initial: { opacity: 0, y: -10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: i * 0.1 + 0.3 }
            };

            const href = item === 'Home' ? '/' : 
                        item === 'About' ? '/about' : 
                        `/#${item.toLowerCase()}`;

            return (
              <motion.a key={item} href={href} {...baseProps}>
                {item}
              </motion.a>
            );
          })}
          <motion.span 
            className="text-yellow-400 text-lg font-light tracking-wide"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}>
            Contact
          </motion.span>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[50vh] px-4 overflow-hidden">
        {/* Background image container - you can add your background here */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/hero_contact.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Hero Content */}
        <motion.div 
          className="relative z-10 max-w-4xl bg-black/40 backdrop-blur-sm rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight">
            Let's Begin Your
            <span className="block text-5xl md:text-6xl font-extralight italic text-yellow-350 mt-2">
              transformative journey
            </span>
          </h1>
          <p className="text-lg font-light text-white max-w-xl mx-auto leading-relaxed">
            Every great transformation begins with a single conversation. Share your story and let's explore how we can guide you toward your peak potential.
          </p>
        </motion.div>
      </section>

      {/* Main Content - Contact Form */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <motion.div 
          className="w-full max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}>

          {/* Contact Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-slate-200/30 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}>
            
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light text-slate-600 italic mb-2">
                Connect With Us
              </h2>
              <p className="text-slate-500 font-light">
                Share your story and let's begin this journey together
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Full Name *
                </label>
                <input 
                  className="w-full px-6 py-4 text-lg border border-slate-200 rounded-2xl bg-white/90 placeholder:text-slate-400 font-light focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all" 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name" 
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Email Address *
                </label>
                <input 
                  className="w-full px-6 py-4 text-lg border border-slate-200 rounded-2xl bg-white/90 placeholder:text-slate-400 font-light focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all" 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com" 
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Tell Us About Your Journey *
                </label>
                <textarea 
                  className="w-full px-6 py-4 text-lg border border-slate-200 rounded-2xl bg-white/90 placeholder:text-slate-400 font-light focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all resize-none" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share what brings you here today. What peaks are you looking to reach? What challenges are you facing? We'd love to learn about your unique story and goals..." 
                  rows="6"
                  required>
                </textarea>
              </div>
            </div>

            <motion.button 
              type="submit"
              className="w-full text-lg px-8 py-4 bg-slate-500/80 text-white rounded-2xl hover:bg-slate-600 transition-all duration-300 font-light tracking-wide shadow-lg backdrop-blur-sm"
              whileHover={{ 
                y: -2,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.98 }}>
              Begin the Conversation
            </motion.button>

            <p className="text-xs text-slate-400 text-center font-light">
              We respect your privacy and will never share your information. 
              Your journey starts with trust, and that begins here.
            </p>
          </motion.form>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-400 bg-white/60 backdrop-blur-sm border-t border-slate-200/30">
        <div className="font-light">
          © {new Date().getFullYear()} Guided Peak Potential. Nurturing transformation with gentle wisdom.
        </div>
      </footer>
    </div>
  );
}
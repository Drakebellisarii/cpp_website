import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react"
import { ChevronLeft, ChevronRight } from 'lucide-react';
const MotionLink = motion(Link);



export default function CentralPointPartnersWebsite() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Constance is great",
      author: "Drake B.",
      role: "Son"
    },
    {
      quote: "Constance is awesome",
      author: "Roman B.",
      role: "Son"
    },
    {
      quote: "Constance helped a lot",
      author: "Keenan B.",
      role: "Creative Director"
    },
    {
      quote: "Constance is super helpful",
      author: "Jessie B.",
      role: "Dog"
    },
    {
      quote: "Constance is very qualified",
      author: "Muck 1",
      role: "Dog"
    },
    {
      quote: "Constance is a great friend",
      author: "Muck 2",
      role: "Dog"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <>
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
        <motion.div 
          className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-radial from-purple-200/50 via-pink-200/30 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 0.7, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
            x: [0, -10, 0],
            y: [0, 10, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
        </motion.div>
      </div>

      <header className="relative p-6 flex justify-between items-center bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-slate-200/50">
        <motion.h1 
          className="text-3xl font-light tracking-wide text-slate-600 italic"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          Guided Peak Potential
        </motion.h1>
        <nav className="space-x-8 flex items-center">
  {['About', 'Services', 'Contact'].map((item, i) => {
    const isAbout = item === 'About';
    const baseProps = {
      className:
        "text-slate-500 hover:text-slate-700 text-lg font-light tracking-wide transition-all duration-300 hover:underline decoration-2 decoration-blue-300 underline-offset-4",
      initial: { opacity: 0, y: -10 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: i * 0.1 + 0.3 }
    };

    return isAbout ? (
      <MotionLink key={item} to="/about" {...baseProps}>
        About
      </MotionLink>
    ) : (
      <motion.a key={item} href={`#${item.toLowerCase()}`} {...baseProps}>
        {item}
      </motion.a>
    );
  })}
</nav>
      </header>

      {/* Hero Section with Mountain Silhouettes */}
      <section 
  className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/Header.png')" }}  // adjust this path!
>
        {/* Animated Mountain layers */}
        <div className="absolute bottom-0 left-0 right-0 h-full">
          {/* Back mountains */}
          <motion.div 
            className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-slate-300/40 to-transparent" 
            style={{
              clipPath: 'polygon(0% 100%, 20% 60%, 35% 80%, 50% 40%, 65% 70%, 80% 50%, 100% 90%, 100% 100%)'
            }}
            animate={{ 
              opacity: [0.4, 0.6, 0.4],
              y: [0, -2, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}>
          </motion.div>
          {/* Middle mountains */}
          <motion.div 
            className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-slate-400/50 to-transparent" 
            style={{
              clipPath: 'polygon(0% 100%, 15% 70%, 30% 50%, 45% 85%, 60% 45%, 75% 75%, 90% 55%, 100% 100%)'
            }}
            animate={{ 
              opacity: [0.5, 0.7, 0.5],
              y: [0, -1, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
          </motion.div>
          {/* Front mountains */}
          <motion.div 
            className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-slate-500/60 to-transparent" 
            style={{
              clipPath: 'polygon(0% 100%, 25% 40%, 40% 70%, 55% 30%, 70% 60%, 85% 45%, 100% 80%, 100% 100%)'
            }}
            animate={{ 
              opacity: [0.6, 0.8, 0.6],
              y: [0, -0.5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-4xl">

        <motion.div 
  className="mb-8"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}>
  
  <motion.h2 className="text-5xl md:text-7xl font-light text-slate-200 mb-4 leading-tight">
    {/* "Reclaim your Career" comes in from left */}
    <motion.span
      className="block"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 3, ease: "easeOut" }}
      onAnimationComplete={() => {
        // This triggers after "Reclaim your Career" animation completes
      }}>
      Reclaim your Path
    </motion.span>
    
    {/* "redefine your peak" comes in from right after delay */}
    <motion.span
      className="block text-6xl md:text-8xl font-extralight italic text-slate-900 mt-2"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 3, 
        ease: "easeOut",
        delay: 1 // Starts after "Reclaim your Career" finishes
      }}>
      redefine your peak
    </motion.span>
  </motion.h2>
</motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1.2, duration: 1 }}>
            <motion.button 
              className="px-8 py-3 bg-white/70 backdrop-blur-sm text-slate-600 rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg font-light tracking-wide border border-slate-200/50 hover:shadow-xl"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.98 }}
              animate={{
                y: [0, -1, 0],
                boxShadow: [
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  "0 15px 20px -3px rgba(0, 0, 0, 0.15)",
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              Begin Your Journey
            </motion.button>
            <motion.button 
              className="px-8 py-3 bg-black/70 text-slate-100 rounded-full hover:bg-slate-500/30 transition-all duration-300 shadow-lg font-light tracking-wide border border-slate-300/50"
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                backgroundColor: "rgba(100, 116, 139, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              animate={{
                y: [0, -1, 0],
                backgroundColor: [
                  "rgba(100, 116, 139, 0.2)",
                  "rgba(100, 116, 139, 0.25)",
                  "rgba(100, 116, 139, 0.2)"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
              Explore Services
            </motion.button>
          </motion.div>
        </div>

        {/* Enhanced floating watercolor elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/60 rounded-full blur-sm"
          animate={{ 
            y: [0, -30, 0, -20, 0],
            x: [0, 10, -5, 0],
            opacity: [0.6, 1, 0.4, 0.8, 0.6],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400/60 rounded-full blur-sm"
          animate={{ 
            y: [0, -25, 0, -15, 0],
            x: [0, -8, 12, 0],
            opacity: [0.5, 0.9, 0.3, 0.7, 0.5],
            scale: [1, 0.7, 1.3, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/3 w-4 h-4 bg-pink-300/50 rounded-full blur-sm"
          animate={{ 
            y: [0, -20, 0, -35, 0],
            x: [0, 15, -10, 0],
            opacity: [0.4, 0.8, 0.2, 0.6, 0.4],
            scale: [1, 1.5, 0.6, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}>
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-1/4 w-2 h-2 bg-green-400/60 rounded-full blur-sm"
          animate={{ 
            y: [0, -18, 0, -28, 0],
            x: [0, -12, 8, 0],
            opacity: [0.6, 1, 0.3, 0.9, 0.6],
            scale: [1, 0.8, 1.4, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
        </motion.div>
        <motion.div
          className="absolute top-2/3 left-1/2 w-3 h-3 bg-orange-300/50 rounded-full blur-sm"
          animate={{ 
            y: [0, -22, 0, -32, 0],
            x: [0, 18, -6, 0],
            opacity: [0.5, 0.8, 0.2, 0.7, 0.5],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}>
        </motion.div>
      </section>

       {/* New Change Your Life Now Animation + Buckets Section */}
       <section className="py-20 px-6 bg-white/20 backdrop-blur-sm">
        <motion.h2
          className="text-5xl text-center font-light text-slate-600 italic mb-12"
          animate={{ y: [0, -4, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          Change Your Life Now
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11 max-w-7xl mx-auto">
          {[
            {
              title: "Reach for the Peak",
              subtitle: "Dream Big",
              text: "Visualize your highest self and pursue that vision fearlessly.",
              img: "/Dream.png"
            },
            {
              title: "Overcome Obstacles",
              subtitle: "Break Through",
              text: "Face challenges with resilience and turn adversity into strength.",
              img: "/Challenge.png"
            },
            {
              title: "Redifine Yourself",
              subtitle: "Transform",
              text: "Embrace growth, change your mindset, and shift your path.",
              img: "/Transform.png"
            },
            {
              title: "Stay Accountable",
              subtitle: "Keep Climbing",
              text: "Build habits, track progress, and celebrate every step.",
              img: "/Birds.png"
            }
          ].map((bucket, i) => (
            <motion.div
              key={i}
              className="bg-white/70 border border-slate-200/30 rounded-3xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}>
              <img src={bucket.img} alt={bucket.title} className="w-full h-40 object-cover rounded-xl mb-4" />
              <h4 className="text-xl font-light text-slate-600 italic mb-1">{bucket.title}</h4>
              <h5 className="text-md font-light text-slate-500 mb-2">{bucket.subtitle}</h5>
              <p className="text-sm font-light text-slate-500">{bucket.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

            {/* Work with Connie Bellisari Section */}
<section className="relative py-24 px-6 bg-gradient-to-br from-slate-100/70 to-blue-100/70 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <motion.h2 
      className="text-5xl font-light text-center mb-6 text-black/100 tracking-wide"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}>
      Work With Constance Bellisari
    </motion.h2>
    
    <motion.h3 
      className="text-2xl font-light text-center mb-16 text-slate-600"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}>
      Certified Life Coach and Business Strategy Consultant
    </motion.h3>

    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Photo with background */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}>
        
        {/* Background decoration */}
        <div className="absolute -inset-4 bg-gradient-to-br from-yellow-100/60 via-orange-50/40 to-pink-100/60 rounded-3xl blur-xl"></div>
        
        {/* Photo container */}
        <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-2xl border border-white/50">
          <div className="aspect-[4/5] bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden shadow-lg">   
            <img 
              src="/Connie-headshot.JPG"
              alt="Connie Bellisari"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Optional decorative elements */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-200 rounded-full opacity-70"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-orange-200 rounded-full opacity-60"></div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="space-y-3"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}>
        
        <div className="prose prose-lg text-slate-600 font-light leading-relaxed">
          <p>
            Business coaching is strategy focused. Each session together is your time 
            to focus on your business vision and growth path. You have the opportunity to 
            take the time to create a business strategy that is in alignment with your 
            strengths, values, and market opportunities. As we work together, that vision can 
            become a reality.
          </p>
        </div>

        <motion.h4 
          className="text-3xl font-light text-yellow-400 mt-12 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}>
          My promise to you as your business coach...
        </motion.h4>

        <div className="space-y-4 text-slate-600 font-light leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}>
            I offer strategic questioning and analysis, which allow you to find new 
            opportunities and innovative solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}>
            I listen and give you space to strategize, reflect, and plan.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}>
            I guide you to recognize and move past limiting beliefs and obstacles that may 
            be slowing your business progress, and help you reframe or adjust what is not 
            serving your growth.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}>
            I will challenge you to think beyond what you thought was possible 
            for your business and support you to reach your new vision.
          </motion.p>
        </div>

        <motion.div 
          className="mt-8 space-y-4 text-slate-600 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          viewport={{ once: true }}>
          <p>I will not give advice, my opinions, or offer information and resources unless requested.</p>
          <p>I will be your strategic partner, sounding board, and someone that will help you hold yourself accountable.</p>
          <p>Let's work together to move toward a business where you are truly living your entrepreneurial vision.</p>
        </motion.div>

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}>
          <h5 className="text-2xl font-light text-yellow-400 mb-2">I believe in you...</h5>
          <div className="text-4xl font-light text-slate-500 italic">
            Connie Bellisari
          </div>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>
      {/* About Section */}
      <section 
        className="relative flex items-center justify-center min-h-[75vh] px-6 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/whale.jpg')" }}>
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 60 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 6 }}
          viewport={{ once: true }}>
          <motion.h3 
            className="text-4xl font-light mb-8 text-slate-900 italic"
            whileInView={{
              y: [0, -3, 0],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
            My Philosophy
          </motion.h3>
          <motion.div 
            className="backdrop-blur-sm p-5 rounded-3xl shadow-lg border border-slate-200/30"
            whileInView={{ scale: [0.98, 1, 0.98] }}
            transition={{ duration: 8, repeat: onscroll, ease: "easeInOut" }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}>
            <motion.p 
              className="text-lg font-light leading-relaxed text-slate-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}>
              The summit calls, not because it promises ease, but because it promises you. Every great peak scaled begins with a single step into the unknown, where courage meets possibility and dreams transform into destiny. At Guided Peak Potential, we don't just guide you up the mountain—we awaken the climber within you, the one who has always known that your greatest adventures lie beyond your comfort zone.
              This isn't about reaching someone else's definition of success. This is about discovering the breathtaking view that can only be seen from your own personal summit. Every challenge you face becomes a stepping stone, every setback a lesson in resilience, every breakthrough a celebration of your expanding potential. The path may be steep, but the joy found in each hard-won step, each moment of clarity, each breakthrough barrier—this is where life truly begins.
              Your mountain is waiting. Not just the destination, but the magnificent journey of becoming who you were always meant to be. The air is thinner at the top, but the view is limitless, and the person you'll discover along the way will astound you. Together, we'll turn your potential into your reality, one intentional step at a time.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>


      {/* Section 1: Pathways to Growth */}
      <section id="services" className="relative py-24 px-6 bg-gradient-to-br from-purple-50/70 to-pink-50/70 overflow-hidden">
        {/* Background floating gradient blobs */}
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-30 z-0"
          animate={{ scale: [1, 1.5, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 z-0"
          animate={{ scale: [1, 1.4, 1], x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <h3 className="relative z-10 text-5xl font-light text-center mb-20 text-slate-600 italic tracking-wide">
          Pathways to Growth
        </h3>

        {/* Services Grid */}
        <div className="relative z-10 grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {[
            {
              title: "Personal Coaching",
              desc: "One-on-one sessions that honor your unique journey, offering guidance as you navigate toward your authentic self.",
              color: "from-blue-100/50 to-purple-100/50",
              icon: "🌱",
            },
            {
              title: "Career Guidance",
              desc: "Collaborative experiences where shared wisdom creates a tapestry of growth, connection, and mutual support.",
              color: "from-purple-100/50 to-pink-100/50",
              icon: "🎯",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className={`group relative bg-gradient-to-br ${service.color} backdrop-blur-sm p-12 rounded-3xl shadow-xl border border-white/30 overflow-hidden`}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="absolute -top-10 -right-10 text-8xl opacity-10 group-hover:opacity-20 transition-all duration-500"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                {service.icon}
              </motion.div>

              <h4 className="text-3xl font-semibold text-slate-700 mb-6 group-hover:text-purple-600 transition-colors duration-300">
                {service.title}
              </h4>
              <p className="text-slate-600 font-light leading-relaxed text-lg">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2: Testimonials */}
      <section 
  className="relative py-24 px-6 bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: "url('/bears.png')" }}
>
  {/* Dark overlay for text readability */}
  <div className="absolute inset-0 backdrop-blur-[2px] bg-black/20 z-10"></div>
        
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64  rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.05, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h3 
            className="text-5xl font-light text-center mb-20 text-white italic tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Voices of Transformation
          </motion.h3>

           {/* Testimonial Carousel */}
           <div className="relative">
            {/* Navigation Buttons
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 text-2xl font-bold"
            >
              ‹
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 text-2xl font-bold"
            >
              ›
            </button>
 */}
            {/* Testimonial Cards */}
            <div className="flex items-center justify-center min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="max-w-4xl mx-auto px-8"
                >
                  <div className="bg-black/40 backdrop-blur-xl rounded-3xl border border-white/20 p-12 text-center shadow-2xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <blockquote className="text-2xl font-light text-white mb-8 leading-relaxed italic">
                        "{testimonials[currentTestimonial].quote}"
                      </blockquote>
                      <div className="border-t border-white/20 pt-6">
                        <p className="text-white font-semibold text-lg mb-1">
                          {testimonials[currentTestimonial].author}
                        </p>
                        <p className="text-white/70 text-sm">
                          {testimonials[currentTestimonial].role}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-white scale-125'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Pricing */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-purple-50/70 to-pink-50/70 overflow-hidden">
        {/* Background floating gradient blobs */}
        <motion.div
          className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-30 z-0"
          animate={{ scale: [1, 1.5, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 z-0"
          animate={{ scale: [1, 1.4, 1], x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h4 
            className="text-5xl font-light text-center mb-16 text-slate-600 italic tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Investment in Your Journey
          </motion.h4>

          {/* Individual Sessions */}
          <div className="mb-16">
            <motion.h5 
              className="text-2xl font-medium text-center mb-8 text-slate-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Individual Sessions
            </motion.h5>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { duration: "30 Minutes", price: "$100", delay: 0.3 },
                { duration: "60 Minutes", price: "$150", delay: 0.4 },
              ].map((session, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white/60 to-purple-50/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/40 text-center group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: session.delay }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h6 className="text-xl font-semibold text-slate-700 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {session.duration}
                  </h6>
                  <div className="text-3xl font-light text-purple-600 mb-2">{session.price}</div>
                  <p className="text-slate-500 text-sm">per session</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bundle Packages */}
          <div>
            <motion.h5 
              className="text-2xl font-medium text-center mb-8 text-slate-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Bundle Packages
            </motion.h5>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { 
                  duration: "8 Sessions - 30 Minutes", 
                  price: "$650", 
                  savings: "Save $150",
                  delay: 0.6,
                  gradient: "from-blue-100/60 to-purple-100/60"
                },
                { 
                  duration: "8 Sessions - 60 Minutes", 
                  price: "$900", 
                  savings: "Save $300",
                  delay: 0.7,
                  gradient: "from-purple-100/60 to-pink-100/60"
                },
              ].map((bundle, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${bundle.gradient} backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-white/40 text-center group hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: bundle.delay }}
                  whileHover={{ scale: 1.03 }}
                >
                  <motion.div
                    className="absolute top-4 right-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: bundle.delay + 0.3 }}
                  >
                    {bundle.savings}
                  </motion.div>
                  
                  <h6 className="text-xl font-semibold text-slate-700 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    {bundle.duration}
                  </h6>
                  <div className="text-4xl font-light text-purple-600 mb-2">{bundle.price}</div>
                  <p className="text-slate-500 text-sm mb-4">complete package</p>
                  <div className="text-sm text-slate-600 bg-white/40 rounded-lg p-3">
                    Commit to your growth journey with our comprehensive packages
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section 
        className="relative flex items-center justify-center min-h-[69vh] px-6 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/Backdrop-pic.jpg')" }}>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}>
          
          <motion.blockquote 
            className="text-3xl md:text-4xl font-light text-white mb-8 leading-relaxed italic"
            animate={{ 
              y: [0, -3, 0],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
            "Your time is limited, so don’t waste it living someone else’s life."
          </motion.blockquote>
          
          <motion.div 
            className="w-16 h-px bg-white/60 mx-auto mb-6"
            animate={{ 
              width: [64, 80, 64],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          </motion.div>
          
          <motion.cite 
            className="text-lg font-light text-white/80 not-italic tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}>
            — Steve Jobs
          </motion.cite>
        </motion.div>
        
        {/* Floating quote marks decoration */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-6xl text-white/20 font-serif"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}>
          "
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 text-6xl text-white/20 font-serif rotate-180"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.2, 0.4, 0.2],
            rotate: [180, 185, 180]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
          "
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"></section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Subtle mountain backdrop */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-200/30 to-transparent"
             style={{
               clipPath: 'polygon(0% 100%, 30% 40%, 60% 70%, 100% 20%, 100% 100%)'
             }}></div>
        
        <motion.div 
          className="max-w-2xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}>
          <h3 className="text-4xl font-light mb-8 text-slate-600 italic">
            Connect With Us
          </h3>
          <p className="mb-12 text-lg font-light text-slate-500 leading-relaxed">
            Ready to begin your journey of transformation? We'd love to hear from you 
            and explore how we can support your path to growth and clarity.
          </p>
          <div className="space-y-6 bg-white/70 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-slate-200/30">
            <input 
              className="w-full px-6 py-4 text-lg border border-slate-200 rounded-2xl bg-white/80 placeholder:text-slate-400 font-light focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all" 
              type="text" 
              placeholder="Your name" 
            />
            <input 
              className="w-full px-6 py-4 text-lg border border-slate-200 rounded-2xl bg-white/80 placeholder:text-slate-400 font-light focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all" 
              type="email" 
              placeholder="Your email" 
            />
            <textarea 
              className="w-full px-6 py-4 text-lg border border-slate-200 rounded-2xl bg-white/80 placeholder:text-slate-400 font-light focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-all resize-none" 
              placeholder="Tell us about your journey..." 
              rows="5">
            </textarea>
            <motion.button 
              className="w-full text-lg px-8 py-4 bg-slate-500/80 text-white rounded-2xl hover:bg-slate-600 transition-all duration-300 font-light tracking-wide shadow-lg backdrop-blur-sm"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}>
              Send Message
            </motion.button>
          </div>
        </motion.div>
      </section>

      <footer className="text-center py-8 text-slate-400 bg-white/60 backdrop-blur-sm border-t border-slate-200/30">
        <div className="font-light">
          © {new Date().getFullYear()} Central Point Partners. Nurturing transformation with gentle wisdom.
        </div>
      </footer>
    </div>
    <Analytics />
    </>
  );
}
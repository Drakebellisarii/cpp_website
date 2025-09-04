import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react"

const MotionLink = motion(Link);
export default function CentralPointPartnersWebsite() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Trying to manage a team and heal from a broken marriage felt impossible. GPP gave me space to breathe, tools to lead, and the strength to thrive. I'm proud if who I'm becoming.",
      author: "TM",
      role: "Buisness Owner - Westerville, Ohio"
    },
    {
      quote: "After my divorce, I didn't recognize my life or myself. Guided Peak Potential helped me reconnect who I really am - not just as a business owner, but as a woman. I'm stronger, clearer, and finally leading with confidence.",
      author: "JC",
      role: "Co-owner - Dublin, Ohio"
    },
    {
      quote: "I met Constance at a networking event, and I didn't think coaching could shift my mindset. But after just a few sessions, I was able to start rethinking my choices and was able to guide myself into a positive productive space. She is a good listener and a great guide. and asked me the right questions to nmake me dig deeper into what I was tryingt to suppress.",
      author: "DR",
      role: "Buisness Co-owner - Jacksonville, FL"
    },
    {
      quote: "I was reffered to Constance by my mom and glad I reached out. Her coaching is part strategy, part soul work. She was able to help me establish boundaries in my buisness, peace in my personal life, and a renewed sense of purpose.",
      author: "AL",
      role: "Rakki practitioner and life coach - Columbus, OH"
    },
    {
      quote:" I reached out to Constance after announcing my divorce. It was harder than I realized as I was trying to navigate a new career, and new life, after sending my son off to college. I still work with her and have reduced our sessions to bimonthly, as she still helps to keep me grounded and live a life that has meaning.",
      author: "MC",
      role: "Mother - Columbus, OH"
    },
    {
      quote: "Working with Constance helped me reconnect with the version of myself I had buried under years of stress and obligation. She didn;t just offer guidence, she gave me clarity, tools, and confidence to rewrite my story. I'm finally livin",
      author: "DB",
      role: "Buisness Owner - Portland, ME"
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

  const services = [
    {
      title: "Personal Coaching",
      desc: "One-on-one sessions that honor your unique journey, offering personalized guidance as you navigate toward your authentic self and unlock your fullest potential.",
      features: ["Individual sessions", "Personalized approach", "Goal-oriented", "Flexible scheduling"],
      icon: (
        <svg 
          viewBox="-8 2 28 28" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className="w-full h-full"
        >
            <path d="M12.4472 2.10557c-.2815-.14076-.6129-.14076-.8944 0L5.90482 4.92956l.37762.11119c.01131.00333.02257.00687.03376.0106L12 6.94594l5.6808-1.89361.3927-.13363-5.6263-2.81313ZM5 10V6.74803l.70053.20628L7 7.38747V10c0 .5523-.44772 1-1 1s-1-.4477-1-1Zm3-1c0-.42413.06601-.83285.18832-1.21643l3.49538 1.16514c.2053.06842.4272.06842.6325 0l3.4955-1.16514C15.934 8.16715 16 8.57587 16 9c0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4Z"/>
            <path d="M14.2996 13.2767c.2332-.2289.5636-.3294.8847-.2692C17.379 13.4191 19 15.4884 19 17.6488v2.1525c0 1.2289-1.0315 2.1428-2.2 2.1428H7.2c-1.16849 0-2.2-.9139-2.2-2.1428v-2.1525c0-2.1409 1.59079-4.1893 3.75163-4.6288.32214-.0655.65589.0315.89274.2595l2.34883 2.2606 2.3064-2.2634Z"/>
        </svg>
      )
    },
    {
      title: "Buisness Strategy Coaching", 
      desc: "Strategic career development that aligns your professional path with your values, helping you create meaningful work that fulfills both your ambitions and purpose.",
      features: ["Career strategy", "Professional growth", "Industry insights", "Network building"],
      icon: (
        <svg 
          viewBox="-6 2 28 28" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          className="w-full h-full"
        >    
        <path d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"/>
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
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
        {['About', 'Services', 'Contact'].map((item, i) => {
  const isAbout = item === 'About';
  const isContact = item === 'Contact';
  const baseProps = {
    className: "text-slate-500 hover:text-slate-700 text-lg font-light tracking-wide transition-all duration-300 hover:underline decoration-2 decoration-blue-300 underline-offset-2 decoration-blue-300 underline-offset-4",
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: i * 0.1 + 0.3 }
  };

  if (isAbout) {
    return (
      <MotionLink key={item} to="/about" {...baseProps}>
        About
      </MotionLink>
    );
  } else if (isContact) {
    return (
      <MotionLink key={item} to="/contact" {...baseProps}>
        Contact
      </MotionLink>
    );
  } else {
    return (
      <motion.a key={item} href={`#${item.toLowerCase()}`} {...baseProps}>
        {item}
      </motion.a>
    );
  }
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
  transition={{ duration: 0.5, delay: 0.3 }}>
  
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
           <motion.a 
              href="/contact"
              className="inline-block px-8 py-3 bg-white/70 backdrop-blur-sm text-slate-600 rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg font-light tracking-wide border border-slate-200/50 hover:shadow-xl"
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
            </motion.a>
            <motion.a 
              href="#services"
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
            </motion.a>
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
<section className="py-16 px-6 bg-gradient-to-b from-slate-400/60 via-slate-700/80 to-slate-700 relative overflow-hidden group">
        
<motion.h2
    className="text-5xl text-center font-light text-white italic mb-12"
    animate={{ y: [0, -4, 0], opacity: [0.8, 1, 0.8] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
    Change Your Life Now
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
    {[
      {
        title: "Reach for the Peak",
        subtitle: "Dream Big & Bold",
        description: "Visualize your highest self and pursue that vision fearlessly. Break free from limiting beliefs and step into the extraordinary life you were meant to live.",
        features: [
          "Clarify your deepest desires and aspirations",
          "Create a compelling vision for your future",
          "Develop unshakeable confidence in your abilities",
          "Design actionable steps toward your dreams"
        ],
        accent: "from-amber-400 via-yellow-300 to-orange-400",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13.006 15.265l2.117-3.14m0 0l.251-.37a1.637 1.637 0 0 1 2.861.234l2.596 5.541c.536 1.142-.27 2.47-1.497 2.47H4.666c-1.224 0-2.03-1.32-1.501-2.462l5.808-12.56a1.641 1.641 0 0 1 3.015.03z"/>
          </svg>
        )
      },
      {
        title: "Overcome Obstacles",
        subtitle: "Break Through Barriers",
        description: "Face challenges with resilience and turn adversity into strength. Transform your struggles into stepping stones toward success.",
        features: [
          "Identify and dismantle limiting beliefs",
          "Develop mental toughness and resilience",
          "Turn setbacks into opportunities for growth",
          "Build emotional strength and stability"
        ],
        accent: "from-purple-400 via-pink-300 to-red-400",
        icon: (
          <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14v3m4-6V7a3 3 0 1 1 6 0v4M5 11h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"/>
          </svg>
        )
      },
      {
        title: "Redefine Yourself",
        subtitle: "Transform & Evolve",
        description: "Embrace growth, change your mindset, and shift your path. Become the person you've always wanted to be.",
        features: [
          "Discover your authentic self and values",
          "Transform negative thought patterns",
          "Embrace change and personal evolution",
          "Align your actions with your true purpose"
        ],
        accent: "from-blue-400 via-cyan-300 to-teal-400",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 48 48">
          <g fill="none">
              <path d="M31 20v7L10 39l-6-4V13l6-4l14 8l-6.5 3.5L10 16v16l21-12Z"/>
              <path fill="currentColor" d="m31 27l.992 1.736A2 2 0 0 0 33 27h-2Zm0-7h2v-3.446l-2.992 1.71L31 20ZM10 32H8a2 2 0 0 0 2.992 1.736L10 32Zm0-16l1.029-1.715A2 2 0 0 0 8 16h2Zm7.5 4.5l-1.029 1.715a2 2 0 0 0 1.977.046L17.5 20.5ZM24 17l.948 1.76a2 2 0 0 0 .044-3.497L24 17ZM10 9l.992-1.736a2 2 0 0 0-2.101.072L10 9Zm-6 4l-1.11-1.664A2 2 0 0 0 2 13h2Zm0 22H2a2 2 0 0 0 .89 1.664L4 35Zm6 4l-1.11 1.664a2 2 0 0 0 2.102.072L10 39Zm23-12v-7h-4v7h4Zm-2.992-8.736l-21 12l1.984 3.473l21-12l-1.984-3.473ZM12 32V16H8v16h4ZM8.971 17.715l7.5 4.5l2.058-3.43l-7.5-4.5l-2.058 3.43Zm9.477 4.546l6.5-3.5l-1.896-3.522l-6.5 3.5l1.896 3.522Zm6.544-6.997l-14-8l-1.984 3.472l14 8l1.984-3.473ZM8.891 7.336l-6 4l2.218 3.328l6-4l-2.218-3.328ZM2 13v22h4V13H2Zm.89 23.664l6 4l2.22-3.328l-6-4l-2.22 3.328Zm8.102 4.072l21-12l-1.984-3.473l-21 12l1.984 3.474Z"/>
              <path d="M17 28v-7L38 9l6 4v22l-6 4l-14-8l6.5-3.5L38 32V16L17 28Z"/>
              <path fill="currentColor" d="m17 21l-.992-1.736A2 2 0 0 0 15 21h2Zm0 7h-2v3.446l2.992-1.71L17 28Zm21-12h2a2 2 0 0 0-2.992-1.736L38 16Zm0 16l-1.029 1.715A2 2 0 0 0 40 32h-2Zm-7.5-4.5l1.029-1.715a2 2 0 0 0-1.977-.046L30.5 27.5ZM24 31l-.948-1.76a2 2 0 0 0-.044 3.497L24 31Zm14 8l-.992 1.736a2 2 0 0 0 2.101-.072L38 39Zm6-4l1.11 1.664A2 2 0 0 0 46 35h-2Zm0-22h2a2 2 0 0 0-.89-1.664L44 13Zm-6-4l1.11-1.664a2 2 0 0 0-2.102-.072L38 9ZM15 21v7h4v-7h-4Zm2.992 8.736l21-12l-1.984-3.473l-21 12l1.984 3.473ZM36 16v16h4V16h-4Zm3.029 14.285l-7.5-4.5l-2.058 3.43l7.5 4.5l2.058-3.43Zm-9.477-4.546l-6.5 3.5l1.896 3.522l6.5-3.5l-1.896-3.522Zm-6.544 6.997l14 8l1.984-3.472l-14-8l-1.984 3.473Zm16.101 7.928l6-4l-2.218-3.328l-6 4l2.218 3.328ZM46 35V13h-4v22h4Zm-.89-23.664l-6-4l-2.22 3.328l6 4l2.22-3.328Zm-8.102-4.072l-21 12l1.984 3.473l21-12l-1.984-3.473Z"/>
          </g>
      </svg>
        )
      },
      {
        title: "Stay Accountable",
        subtitle: "Keep Climbing Higher",
        description: "Build sustainable habits, track your progress, and celebrate every step forward. Create lasting change that transforms your life.",
        features: [
          "Establish powerful daily routines",
          "Track progress and celebrate wins",
          "Build lasting habits and systems",
          "Maintain momentum and consistency"
        ],
        accent: "from-green-400 via-emerald-300 to-teal-400",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="34" viewBox="0 0 16 16">
          <path fill="currentColor" d="M14 1v3h-3V1H5v3H2V1H0v15h16V1h-2zM3 15H1v-2h2v2zm0-3H1v-2h2v2zm0-3H1V7h2v2zm3 6H4v-2h2v2zm0-3H4v-2h2v2zm0-3H4V7h2v2zm3 6H7v-2h2v2zm0-3H7v-2h2v2zm0-3H7V7h2v2zm3 6h-2v-2h2v2zm0-3h-2v-2h2v2zm0-3h-2V7h2v2zm3 6h-2v-2h2v2zm0-3h-2v-2h2v2zm0-3h-2V7h2v2z"/>
          <path fill="currentColor" d="M3 0h1v3H3V0zm9 0h1v3h-1V0z"/>
          </svg>
        )
      }
    ].map((bucket, i) => (
      <motion.div
        key={i}
        className="relative group cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03, y: -12, rotateY: 2 }}
        transition={{ delay: i * 0.1, duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}>
        
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${bucket.accent} opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm scale-110`}></div>
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${bucket.accent} opacity-20 group-hover:opacity-50 transition-all duration-200`}></div>
        </div>
        
        {/* Card Content */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-5 text-center transition-all duration-300 group-hover:shadow-xl border border-white/20 h-full flex flex-col">
          
          {/* Icon and Title Section */}
          <div className="flex flex-col items-center mb-4">
            <div className="mb-3 group-hover:scale-110 transition-transform duration-200 text-slate-600 group-hover:text-slate-800">
              {bucket.icon}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-1 group-hover:text-slate-900 transition-colors duration-300">
                {bucket.title}
              </h4>
              <h5 className="text-sm font-medium text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                {bucket.subtitle}
              </h5>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            {bucket.description}
          </p>
          

          
          {/* Hover Effect Overlay */}
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${bucket.accent} opacity-0 group-hover:opacity-8 transition-opacity duration-200`}></div>
        </div>
      </motion.div>
    ))}
  </div>


</section>
 <section className="py-20 px-6 bg-white relative overflow-hidden">
       {/* Subtle background element */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30"></div>
       
       <div className="max-w-6xl mx-auto relative">
         <div className="grid lg:grid-cols-12 gap-12 items-center">
           
           {/* Left Side - Photo */}
           <motion.div 
             className="lg:col-span-5 relative"
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}>
             
             {/* Photo container with creative framing */}
             <div className="relative">
               {/* Blue accent frame */}
               <div className="absolute -top-3 -left-3 w-full h-full border-2 border-blue-500 -z-10"></div>
               
               {/* Main photo */}
               <div className="w-full h-[480px] bg-gray-100 shadow-xl relative overflow-hidden flex items-center justify-center">
                 <img 
                   src="/Connie-headshot.JPG"
                   alt="Connie Bellisari"
                   className="max-w-full max-h-full object-contain"
                 />
                 
                 {/* Blue overlay strip */}
                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"></div>
               </div>
               
               {/* Floating signature card */}
               <motion.div
                 className="absolute -bottom-4 -right-4 bg-white shadow-lg px-4 py-3 border-l-4 border-blue-500"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.4 }}
                 viewport={{ once: true }}>
                 <p className="text-xs text-gray-600 font-light">Certified Life Coach</p>
                 <p className="text-lg font-light text-gray-800 italic">Connie Bellisari</p>
               </motion.div>
             </div>
           </motion.div>

           {/* Right Side - Content */}
           <motion.div 
             className="lg:col-span-7 space-y-6"
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}>
             
             {/* Header with creative typography */}
             <div className="space-y-4">
               <div className="flex items-center space-x-3 mb-2">
                 <div className="w-8 h-[1px] bg-blue-500"></div>
                 <span className="text-xs tracking-wider text-blue-500 font-medium uppercase">Strategy Consultant</span>
               </div>
               
               <h2 className="text-4xl font-light text-gray-900 leading-tight">
                 Work With
                 <span className="block text-5xl text-blue-500 font-normal mt-1">
                   Constance Bellisari
                 </span>
               </h2>
             </div>

             {/* Description */}
             <div className="space-y-3">
               <div className="w-16 h-[2px] bg-blue-500"></div>
               <p className="text-base text-gray-700 font-light leading-relaxed max-w-lg">
                 Business coaching is strategy focused. Each session together is your time 
                 to focus on your business vision and growth path. Create a business strategy 
                 that aligns with your strengths, values, and market opportunities.
               </p>
             </div>

             {/* Promise Section */}
             <div className="space-y-4">
               <h4 className="text-xl font-light text-gray-900 relative">
                 My promise to you
                 <span className="absolute -bottom-1 left-0 w-12 h-[2px] bg-blue-500"></span>
               </h4>

               <div className="grid gap-3">
                 {[
                   "Strategic questioning and analysis to find new opportunities and innovative solutions",
                   "Listen and give you space to strategize, reflect, and plan",
                   "Guide you to recognize and move past limiting beliefs slowing your progress",
                   "Challenge you to think beyond what you thought was possible"
                 ].map((promise, index) => (
                   <motion.div
                     key={index}
                     className="flex items-start space-x-3 group"
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                     viewport={{ once: true }}>
                     <div className="w-1 h-6 bg-blue-500 flex-shrink-0 mt-1 group-hover:bg-blue-600 transition-colors"></div>
                     <p className="text-sm text-gray-700 font-light leading-relaxed">{promise}</p>
                   </motion.div>
                 ))}
               </div>
             </div>

             {/* Partnership statement */}
             <motion.div
               className="bg-blue-50/50 p-6 relative"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.7 }}
               viewport={{ once: true }}>
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
               <div className="space-y-2 text-gray-700 font-light leading-relaxed pl-4">
                 <p className="text-sm">I will be your strategic partner, sounding board, and someone that will help you hold yourself accountable.</p>
                 <p className="text-base italic text-blue-600">
                   "Let's work together to move toward a business where you are truly living your entrepreneurial vision."
                 </p>
               </div>
             </motion.div>

             {/* Belief statement */}
             <motion.div
               className="text-right"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.9 }}
               viewport={{ once: true }}>
               <p className="text-xl font-light text-blue-500 mb-1">I believe in you...</p>
               <div className="w-20 h-[1px] bg-blue-500 ml-auto"></div>
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
          transition={{ duration: 2 }}
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
            className="backdrop-blur-md p-5 rounded-3xl shadow-lg border border-slate-200/30 bg-white/60"
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

  {/*Pathways to growth section*/}
    <section id="services" className="relative py-24 px-6 bg-white overflow-hidden group">
      {/* GPP Logo Watermark - Top Left */}
      <div className="absolute top-8 left-8 pointer-events-none z-0">
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-extralight text-slate-800 mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pathways to 
            <span className="block bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent font-light">
              Growth
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover transformative approaches designed to meet you exactly where you are on your journey
          </motion.p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover={{ 
                y: -20,
                scale: 1.05,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              {/* Card container */}
              <div className="relative bg-white/60 backdrop-blur-sm p-10 rounded-3xl shadow-lg border border-blue-200/50 overflow-hidden group-hover:bg-blue-50/80 group-hover:shadow-2xl group-hover:border-blue-300/70 transition-all duration-500">
                
                {/* Subtle hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-blue-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                {/* Enhanced border glow on hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-300/0 group-hover:border-blue-400/50 transition-all duration-500" />

                {/* Floating icon */}
                <motion.div
                  className="absolute -top-6 -right-6 text-7xl opacity-10 group-hover:opacity-30 transition-all duration-500"
                  whileHover={{
                    scale: 1.2,
                    rotate: 15,
                    transition: { duration: 0.3 }
                  }}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h3 
                    className="text-4xl font-semibold text-slate-700 mb-6 group-hover:text-blue-700 group-hover:scale-105 transition-all duration-300"
                    whileHover={{ x: 8 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <p className="text-slate-600 font-light leading-relaxed text-lg mb-8 group-hover:text-slate-700 transition-colors duration-300">
                    {service.desc}
                  </p>

                  {/* Feature list */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center text-slate-500 group-hover:text-blue-600 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + (idx * 0.1) }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-blue-300 rounded-full mr-3 group-hover:bg-blue-500 group-hover:scale-150 transition-all duration-300"
                          whileHover={{ 
                            scale: 2,
                            boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)"
                          }}
                        />
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

               
              </div>

              {/* Enhanced external glow effect */}
              <div className="absolute inset-0 bg-blue-200/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10 scale-110" />
            </motion.div>
          ))}
        </motion.div>

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

      <section className="relative py-20 px-6 bg-white overflow-hidden group">
        {/* GPP Logo Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <img
            src="/new-GPP.svg"
            alt=""
            className="w-80 h-80 opacity-6 group-hover:opacity-12 transition-opacity duration-500"
          />
        </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero text */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-extralight text-slate-800 mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your
            <span className="block bg-gradient-to-r from-blue-500 via-navy-400 to-navy-600 bg-clip-text text-transparent font-light">
              Inner World
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Choose the path that resonates with your journey toward healing and self-discovery
          </motion.p>
        </motion.div>

        {/* Pricing cards container */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Quick Connect - 30 min */}
          <motion.div
            className="group relative bg-gradient-to-br from-slate-50 to-slate-100/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 transition-all duration-300 ease-out"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.8 }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {/* Hover overlay with smooth transition */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
            
            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-3xl border border-blue-400/0 group-hover:border-blue-400/30 transition-all duration-300" />
            
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-medium text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300">Quick Connect</h3>
                <p className="text-slate-600 text-sm">Perfect for focused check-ins</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-light text-slate-800">$100</span>
                  <span className="ml-2 text-slate-600">/ 30 min</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-slate-700">
                  <motion.div 
                    className="w-2 h-2 bg-blue-500 rounded-full mr-3"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-sm">Focused session format</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <motion.div 
                    className="w-2 h-2 bg-blue-500 rounded-full mr-3"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-sm">Immediate support</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <motion.div 
                    className="w-2 h-2 bg-blue-500 rounded-full mr-3"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-sm">Flexible scheduling</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Deep Dive - 60 min (Featured) */}
          <motion.div
            className="group relative bg-gradient-to-br from-blue-50 to-indigo-100/70 backdrop-blur-xl rounded-3xl p-8 border-2 border-blue-300 transition-all duration-300 ease-out transform scale-105"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.9 }}
            whileHover={{ 
              y: -8,
              scale: 1.05, // Keep the same scale to prevent tag movement
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {/* Most Popular tag with fixed positioning */}
            <motion.div 
              className="absolute -top-4 left-1/3 transform -translate-x-1/2 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="bg-gradient-to-r bg-center from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg ">
                Most Popular
              </div>
            </motion.div>

            {/* Enhanced hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-indigo-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
            
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/0 group-hover:border-blue-400/50 transition-all duration-300" />
            
            <div className="relative z-10 pt-4">
              <div className="mb-6">
                <h3 className="text-2xl font-medium text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300">Deep Dive</h3>
                <p className="text-slate-700 text-sm">Complete therapeutic experience</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline mb-2">
                  <motion.span 
                    className="text-6xl font-light text-slate-800"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    $150
                  </motion.span>
                  <span className="ml-2 text-slate-600">/ 60 min</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-slate-700">
                  <motion.div 
                    className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-sm">Full therapeutic hour</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <motion.div 
                    className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-sm">Comprehensive exploration</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <motion.div 
                    className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-sm">Personalized strategies</span>
                </div>
                <div className="flex items-center text-slate-700">
                  <motion.div 
                    className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="text-sm">Follow-up resources</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bundle packages combined */}
          <motion.div
            className="group relative bg-gradient-to-br from-slate-50 to-slate-100/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 transition-all duration-300 ease-out"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1.0 }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
            
            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-3xl border border-blue-400/0 group-hover:border-blue-400/30 transition-all duration-300" />
            
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-medium text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300">Commitment Packages</h3>
                <p className="text-slate-600 text-sm">Sustained growth & transformation</p>
              </div>
              
              <div className="space-y-6 mb-8">
                <motion.div 
                  className="p-4 bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl border border-slate-300 group-hover:from-blue-50 group-hover:to-indigo-50 group-hover:border-blue-200 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 font-medium">8 × 30min Sessions</span>
                    <div className="bg-green-500/20 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      Save $150
                    </div>
                  </div>
                  <div className="text-3xl font-light text-slate-800">$650</div>
                  <div className="text-slate-600 text-xs">$81.25 per session</div>
                </motion.div>

                <motion.div 
                  className="p-4 bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl border border-slate-300 group-hover:from-blue-50 group-hover:to-indigo-50 group-hover:border-blue-200 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 font-medium">8 × 60min Sessions</span>
                    <div className="bg-green-500/20 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      Save $300
                    </div>
                  </div>
                  <div className="text-3xl font-light text-slate-800">$900</div>
                  <div className="text-slate-600 text-xs">$112.50 per session</div>
                  </motion.div>
              </div>
            </div>
             </motion.div>
          </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Every journey begins with a single step. Choose the option that feels right for where you are today.
          </p>
          <motion.div 
            className="inline-flex items-center text-navy-600 hover:text-navy-500 transition-colors duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <span className="mr-2">Not sure which is right for you?</span>
            <motion.a href="/contact">
              <span className="font-medium underline">Let's talk</span>
            </motion.a>
          </motion.div>
        </motion.div>
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

      <footer className="text-center py-8 text-slate-400 bg-white/60 backdrop-blur-sm border-t border-slate-200/30">
        <div className="font-light">
          © {new Date().getFullYear()} Guided Peak Potential. Nurturing transformation with gentle wisdom.
        </div>
      </footer>
    </div>
    <Analytics />
    </>
  );
}
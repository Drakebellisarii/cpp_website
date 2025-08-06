import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react"

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

  const services = [
    {
      title: "Personal Coaching",
      desc: "One-on-one sessions that honor your unique journey, offering personalized guidance as you navigate toward your authentic self and unlock your fullest potential.",
      features: ["Individual sessions", "Personalized approach", "Goal-oriented", "Flexible scheduling"],
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
    },
    {
      title: "Career Guidance", 
      desc: "Strategic career development that aligns your professional path with your values, helping you create meaningful work that fulfills both your ambitions and purpose.",
      features: ["Career strategy", "Professional growth", "Industry insights", "Network building"],
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

      <header className="relative p-6 flex justify-between items-center bg-white/80 backdrop-blur-sm shadow-lg top-0 z-50 border-b border-slate-200/50">
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
<section className="py-20 px-6 bg-gradient-to-b from-slate-400/60 via-slate-700/80 to-slate-700">
<motion.h2
    className="text-6xl text-center font-light text-white italic mb-12"
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
        className="relative group cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.2 }}
        transition={{ delay: i * 0.2, duration: 0.4 }}
        viewport={{ once: true }}>
        
        {/* Animated Gold Border Sliver */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-transparent via-yellow-400 to-transparent bg-clip-border animate-border-spin opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Card Content */}
        <div className="relative bg-white rounded-3xl shadow-lg p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl">
          <img src={bucket.img} alt={bucket.title} className="w-full h-40 object-cover rounded-xl mb-4" />
          <h4 className="text-xl font-light text-slate-600 italic mb-1">{bucket.title}</h4>
          <h5 className="text-md font-light text-slate-500 mb-2">{bucket.subtitle}</h5>
          <p className="text-sm font-light text-slate-500">{bucket.text}</p>
        </div>
      </motion.div>
    ))}
  </div>

  <style jsx>{`
    @keyframes border-spin {
      0% {
        transform: rotate(0deg);
        background: conic-gradient(from 0deg, transparent 70%, #facc15 85%, #f59e0b 90%, #facc15 95%, transparent 100%);
      }
      100% {
        transform: rotate(360deg);
        background: conic-gradient(from 360deg, transparent 70%, #facc15 85%, #f59e0b 90%, #facc15 95%, transparent 100%);
      }
    }
    
    .animate-border-spin {
      animation: border-spin 2s linear infinite;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: xor;
      padding: 2px;
    }
  `}</style>
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
            className="backdrop-blur-sm p-5 rounded-3xl shadow-lg border border-slate-200/30"
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
    <section id="services" className="relative py-24 px-6 bg-white overflow-hidden">
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

      <section className="relative py-20 px-6 bg-white overflow-hidden">
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
          © {new Date().getFullYear()} Central Point Partners. Nurturing transformation with gentle wisdom.
        </div>
      </footer>
    </div>
    <Analytics />
    </>
  );
}
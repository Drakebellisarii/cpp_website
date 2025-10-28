import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react"

const MotionLink = motion(Link);
export default function CentralPointPartnersWebsite() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      quote: "Trying to manage a team and heal from a broken marriage felt impossible. GPP gave me space to breathe, tools to lead, and the strength to thrive. I'm proud of who I'm becoming.",
      author: "TM",
      role: "Business Owner - Westerville, Ohio"
    },
    {
      quote: "After my divorce, I didn't recognize my life or myself. Guided Peak Potential helped me reconnect with who I really am - not just as a business owner, but as a woman. I'm stronger, clearer, and finally leading with confidence.",
      author: "JC",
      role: "Co-owner - Dublin, Ohio"
    },
    {
      quote: "I met Constance at a networking event, and I didn't think coaching could shift my mindset. But after just a few sessions, I was able to start rethinking my choices and guide myself into a positive productive space. She is a good listener and a great guide, and asked me the right questions to make me dig deeper into what I was trying to suppress.",
      author: "DR",
      role: "Business Co-owner - Jacksonville, FL"
    },
    {
      quote: "I was referred to Constance by my mom and glad I reached out. Her coaching is part strategy, part soul work. She was able to help me establish boundaries in my business, peace in my personal life, and a renewed sense of purpose.",
      author: "AL",
      role: "Reiki practitioner and life coach - Columbus, OH"
    },
    {
      quote: "I reached out to Constance after announcing my divorce. It was harder than I realized as I was trying to navigate a new career, and new life, after sending my son off to college. I still work with her and have reduced our sessions to bimonthly, as she still helps to keep me grounded and live a life that has meaning.",
      author: "MC",
      role: "Mother - Columbus, OH"
    },
    {
      quote: "Working with Constance helped me reconnect with the version of myself I had buried under years of stress and obligation. She didn't just offer guidance, she gave me clarity, tools, and confidence to rewrite my story. I'm finally living.",
      author: "DB",
      role: "Business Owner - Portland, ME"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);
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
      desc: "One-on-one sessions that honor your unique journey, offering personalized guidance and supportive insight as you navigate the path toward your authentic self, unlocking your fullest potential and creating a life aligned with meaning and growth.",
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
      title: "Business Coaching",
      desc: "Strategic career development or business strategy that aligns your professional path with your values, helping you establish business boundaries and objectives or helping you create meaningful work that fulfills your ambition and purpose.",
      features: ["Career strategy", "Professional growth", "Business objectives", "Network building"],
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

  return (
    <>
    <div className="min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden">

      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/95 backdrop-blur-md shadow-md'
          : 'py-4 bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            <img
              src="/new-GPP.svg"
              alt="Guided Peak Potential"
              className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-14'} w-auto object-contain`}
            />
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {['About', 'Services', 'Contact'].map((item, i) => {
              const isAbout = item === 'About';
              const isContact = item === 'Contact';

              if (isAbout) {
                return (
                  <MotionLink
                    key={item}
                    to="/about"
                    className="text-slate-600 hover:text-slate-900 text-sm font-medium tracking-wide transition-colors duration-200"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    whileHover={{ y: -2 }}
                  >
                    About
                  </MotionLink>
                );
              } else if (isContact) {
                return (
                  <MotionLink
                    key={item}
                    to="/contact"
                    className="text-slate-600 hover:text-slate-900 text-sm font-medium tracking-wide transition-colors duration-200"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    whileHover={{ y: -2 }}
                  >
                    Contact
                  </MotionLink>
                );
              } else {
                return (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-slate-600 hover:text-slate-900 text-sm font-medium tracking-wide transition-colors duration-200"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    whileHover={{ y: -2 }}
                  >
                    {item}
                  </motion.a>
                );
              }
            })}

            <motion.a
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Consultation
            </motion.a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/Header.png')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

        <div className="relative z-10 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight tracking-tight">
              Reclaim Your Path
              <span className="block text-6xl md:text-8xl font-extralight italic text-slate-100 mt-3">
                Redefine Your Peak
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Transform your life through personalized coaching that honors your unique journey
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/contact"
                className="px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-50 transition-all duration-300 shadow-lg font-medium text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Begin Your Journey
              </motion.a>

              <motion.a
                href="#services"
                className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all duration-300 font-medium text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
              Your Path to Transformation
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Four core principles that guide your journey to peak potential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Reach for the Peak",
                subtitle: "Dream Big & Bold",
                description: "Visualize your highest self and pursue that vision fearlessly. Break free from limiting beliefs and step into the extraordinary life you were meant to live.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-blue-600">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13.006 15.265l2.117-3.14m0 0l.251-.37a1.637 1.637 0 0 1 2.861.234l2.596 5.541c.536 1.142-.27 2.47-1.497 2.47H4.666c-1.224 0-2.03-1.32-1.501-2.462l5.808-12.56a1.641 1.641 0 0 1 3.015.03z"/>
                  </svg>
                )
              },
              {
                title: "Overcome Obstacles",
                subtitle: "Break Through Barriers",
                description: "Face challenges with resilience and turn adversity into strength. Transform your struggles into stepping stones toward success.",
                icon: (
                  <svg className="w-8 h-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14v3m4-6V7a3 3 0 1 1 6 0v4M5 11h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"/>
                  </svg>
                )
              },
              {
                title: "Redefine Yourself",
                subtitle: "Transform & Evolve",
                description: "Embrace growth, change your mindset, and shift your path. Become the person you've always wanted to be.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48" className="text-teal-600">
                    <path fill="currentColor" d="M31 20v7L10 39l-6-4V13l6-4l14 8l-6.5 3.5L10 16v16l21-12Z"/>
                    <path d="M17 28v-7L38 9l6 4v22l-6 4l-14-8l6.5-3.5L38 32V16L17 28Z" fill="currentColor"/>
                  </svg>
                )
              },
              {
                title: "Stay Accountable",
                subtitle: "Keep Climbing Higher",
                description: "Build sustainable habits, track your progress, and celebrate every step forward. Create lasting change that transforms your life.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16" className="text-green-600">
                    <path fill="currentColor" d="M14 1v3h-3V1H5v3H2V1H0v15h16V1h-2zM3 15H1v-2h2v2zm0-3H1v-2h2v2zm0-3H1V7h2v2zm3 6H4v-2h2v2zm0-3H4v-2h2v2zm0-3H4V7h2v2zm3 6H7v-2h2v2zm0-3H7v-2h2v2zm0-3H7V7h2v2zm3 6h-2v-2h2v2zm0-3h-2v-2h2v2zm0-3h-2V7h2v2zm3 6h-2v-2h2v2zm0-3h-2v-2h2v2zm0-3h-2V7h2v2z"/>
                  </svg>
                )
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <h4 className="text-sm font-medium text-slate-500 mb-4">
                    {pillar.subtitle}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Constance Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Photo */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-500 -z-10"></div>
                <div className="relative overflow-hidden bg-slate-100 shadow-xl">
                  <img
                    src="/Connie-headshot.JPG"
                    alt="Constance Bellisari"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"></div>
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white shadow-lg px-6 py-4 border-l-4 border-blue-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="text-xs text-slate-600 font-medium">Certified Life Coach</p>
                  <p className="text-lg text-slate-800 italic">Constance Bellisari</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-0.5 bg-blue-500"></div>
                    <span className="text-xs tracking-widest text-blue-600 font-semibold uppercase">Strategy Consultant</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-2">
                    Work With
                  </h2>
                  <h3 className="text-5xl md:text-6xl text-blue-600 font-normal mb-6">
                    Constance Bellisari
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="w-20 h-0.5 bg-blue-500"></div>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Business coaching is strategy focused. Each session together is your time
                    to focus on your business vision and growth path. Create a business strategy
                    that aligns with your strengths, values, and market opportunities.
                  </p>
                </div>

                <div className="space-y-4 pt-6">
                  <h4 className="text-xl font-medium text-slate-900">
                    My Promise to You
                    <span className="block w-16 h-0.5 bg-blue-500 mt-2"></span>
                  </h4>

                  <div className="space-y-3">
                    {[
                      "Strategic questioning to find new opportunities and innovative solutions",
                      "Listen and give you space to strategize, reflect, and plan",
                      "Guide you to recognize and move past limiting beliefs slowing your progress",
                      "Challenge you to think beyond what you thought was possible"
                    ].map((promise, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-1 h-6 bg-blue-500 flex-shrink-0 mt-1"></div>
                        <p className="text-slate-700 leading-relaxed">{promise}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-6 border-l-4 border-blue-500 mt-8">
                  <p className="text-slate-700 leading-relaxed mb-3">
                    I will be your strategic partner, sounding board, and someone that will help you hold yourself accountable.
                  </p>
                  <p className="text-lg italic text-blue-700 font-medium">
                    "Let's work together to move toward a business where you are truly living your entrepreneurial vision."
                  </p>
                </div>

                <div className="text-right pt-4">
                  <p className="text-xl text-blue-600 font-light italic">I believe in you...</p>
                  <div className="w-24 h-0.5 bg-blue-500 ml-auto mt-2"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        className="relative flex items-center justify-center min-h-[80vh] px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/whale.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

        <motion.div
          className="relative z-10 max-w-4xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl md:text-5xl font-light mb-8 text-white italic">
            My Philosophy
          </h3>
          <div className="bg-white/95 backdrop-blur-md p-10 rounded-2xl shadow-2xl">
            <p className="text-lg text-slate-700 leading-relaxed text-left space-y-4">
              <span className="block">
                The summit calls, not because it promises ease, but because it promises you. Every great peak scaled begins with a single step into the unknown, where courage meets possibility and dreams transform into destiny. At Guided Peak Potential, we don't just guide you up the mountain—we awaken the climber within you, the one who has always known that your greatest adventures lie beyond your comfort zone.
              </span>
              <span className="block">
                This isn't about reaching someone else's definition of success. This is about discovering the breathtaking view that can only be seen from your own personal summit. Every challenge you face becomes a stepping stone, every setback a lesson in resilience, every breakthrough a celebration of your expanding potential.
              </span>
              <span className="block">
                Your mountain is waiting. Not just the destination, but the magnificent journey of becoming who you were always meant to be. Together, we'll turn your potential into your reality, one intentional step at a time.
              </span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
              Pathways to <span className="text-blue-600 font-normal">Growth</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover transformative approaches designed to meet you exactly where you are on your journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border border-slate-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 text-blue-600 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-8">
                  {service.desc}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-slate-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="relative py-24 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/bears.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h3
            className="text-4xl md:text-5xl font-light text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Voices of Transformation
          </motion.h3>

          <div className="relative">
            <div className="flex items-center justify-center min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-4xl mx-auto px-8"
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-12 shadow-2xl">
                    <blockquote className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed italic">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    <div className="border-t border-slate-200 pt-6">
                      <p className="text-slate-900 font-semibold text-lg mb-1">
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="text-slate-600 text-sm">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-12 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
              Transform Your <span className="text-blue-600 font-normal">Inner World</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Choose the path that resonates with your journey toward healing and self-discovery
            </p>

            {/* Free Consultation Badge */}
            <motion.div
              className="inline-flex items-center bg-white border border-blue-200 rounded-full px-8 py-4 shadow-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <Link to="/contact" className="text-slate-700 font-medium">
                Start with a <span className="text-blue-600 font-semibold">free 15-minute</span> discovery call
              </Link>
              <svg className="w-5 h-5 ml-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Quick Connect */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">Quick Connect</h3>
                <p className="text-slate-600 text-sm">Perfect for focused check-ins</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-light text-slate-900">$100</span>
                  <span className="ml-2 text-slate-600">/ 30 min</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "Focused session format",
                  "Immediate support",
                  "Flexible scheduling"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center text-slate-700">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Commitment Package - Featured */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border-2 border-blue-300 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md">
                  Most Popular
                </div>
              </div>

              <div className="mb-6 pt-4">
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">Commitment Package</h3>
                <p className="text-slate-700 text-sm">Sustained growth & transformation</p>
              </div>

              <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-slate-800 font-semibold text-lg">8 × 30min Sessions</span>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    Save $150
                  </div>
                </div>
                <div className="text-5xl font-light text-slate-900 mb-1">$650</div>
                <div className="text-slate-600 text-sm">Only $81.25 per session</div>
              </div>

              <div className="space-y-3">
                {[
                  "Consistent therapeutic support",
                  "Long-term progress tracking",
                  "Personalized strategies",
                  "Priority booking"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center text-slate-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Extended Support */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">Extended Support</h3>
                <p className="text-slate-600 text-sm">Comprehensive transformation journey</p>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-slate-800 font-semibold text-lg">12 × 30min Sessions</span>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    Save $300
                  </div>
                </div>
                <div className="text-5xl font-light text-slate-900 mb-1">$900</div>
                <div className="text-slate-600 text-sm">Only $75 per session</div>
              </div>

              <div className="space-y-3">
                {[
                  "Extended therapeutic journey",
                  "Deep transformation work",
                  "Ongoing resource library",
                  "Priority support access"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center text-slate-700">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Every journey begins with a single step. Start with your complimentary 15-minute discovery call to find the perfect path forward.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <span className="mr-2">Ready to begin your transformation?</span>
              <span className="underline">Schedule your free consultation</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section
        className="relative flex items-center justify-center min-h-[60vh] px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/Backdrop-pic.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-3xl md:text-4xl font-light text-white mb-8 leading-relaxed">
            "Your time is limited, so don't waste it living someone else's life."
          </blockquote>
          <div className="w-20 h-px bg-white/60 mx-auto mb-6"></div>
          <cite className="text-lg text-white/90 not-italic">— Steve Jobs</cite>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-slate-600 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm">
            © {new Date().getFullYear()} Guided Peak Potential. Nurturing transformation with gentle wisdom.
          </p>
        </div>
      </footer>
    </div>
    <Analytics />
    </>
  );
}

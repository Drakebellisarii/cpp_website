import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react"

const MotionLink = motion(Link);

export default function CentralPointPartnersWebsite() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrolled, setScrolled] = useState(false);

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
      role: "Business Owner — Westerville, Ohio"
    },
    {
      quote: "After my divorce, I didn't recognize my life or myself. Guided Peak Potential helped me reconnect with who I really am - not just as a business owner, but as a woman. I'm stronger, clearer, and finally leading with confidence.",
      author: "JC",
      role: "Co-owner — Dublin, Ohio"
    },
    {
      quote: "I met Constance at a networking event, and I didn't think coaching could shift my mindset. But after just a few sessions, I was able to start rethinking my choices and guide myself into a positive productive space. She is a good listener and a great guide, and asked me the right questions to make me dig deeper into what I was trying to suppress.",
      author: "DR",
      role: "Business Co-owner — Jacksonville, FL"
    },
    {
      quote: "I was referred to Constance by my mom and glad I reached out. Her coaching is part strategy, part soul work. She was able to help me establish boundaries in my business, peace in my personal life, and a renewed sense of purpose.",
      author: "AL",
      role: "Reiki practitioner and life coach — Columbus, OH"
    },
    {
      quote: "I reached out to Constance after announcing my divorce. It was harder than I realized as I was trying to navigate a new career, and new life, after sending my son off to college. I still work with her and have reduced our sessions to bimonthly, as she still helps to keep me grounded and live a life that has meaning.",
      author: "MC",
      role: "Mother — Columbus, OH"
    },
    {
      quote: "Working with Constance helped me reconnect with the version of myself I had buried under years of stress and obligation. She didn't just offer guidance, she gave me clarity, tools, and confidence to rewrite my story. I'm finally living.",
      author: "DB",
      role: "Business Owner — Portland, ME"
    }
  ];

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
        <svg viewBox="-8 2 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
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
        <svg viewBox="-6 2 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"/>
        </svg>
      )
    }
  ];

  const pillars = [
    {
      num: "01",
      title: "Reach for the Peak",
      subtitle: "Dream Big & Bold",
      description: "Visualize your highest self and pursue that vision fearlessly. Break free from limiting beliefs and step into the extraordinary life you were meant to live.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13.006 15.265l2.117-3.14m0 0l.251-.37a1.637 1.637 0 0 1 2.861.234l2.596 5.541c.536 1.142-.27 2.47-1.497 2.47H4.666c-1.224 0-2.03-1.32-1.501-2.462l5.808-12.56a1.641 1.641 0 0 1 3.015.03z"/>
        </svg>
      )
    },
    {
      num: "02",
      title: "Overcome Obstacles",
      subtitle: "Break Through Barriers",
      description: "Face challenges with resilience and turn adversity into strength. Transform your struggles into stepping stones toward success.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 14v3m4-6V7a3 3 0 1 1 6 0v4M5 11h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"/>
        </svg>
      )
    },
    {
      num: "03",
      title: "Redefine Yourself",
      subtitle: "Transform & Evolve",
      description: "Embrace growth, change your mindset, and shift your path. Become the person you've always wanted to be.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48">
          <path fill="currentColor" d="M31 20v7L10 39l-6-4V13l6-4l14 8l-6.5 3.5L10 16v16l21-12Z"/>
          <path d="M17 28v-7L38 9l6 4v22l-6 4l-14-8l6.5-3.5L38 32V16L17 28Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      num: "04",
      title: "Stay Accountable",
      subtitle: "Keep Climbing Higher",
      description: "Build sustainable habits, track your progress, and celebrate every step forward. Create lasting change that transforms your life.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16">
          <path fill="currentColor" d="M14 1v3h-3V1H5v3H2V1H0v15h16V1h-2zM3 15H1v-2h2v2zm0-3H1v-2h2v2zm0-3H1V7h2v2zm3 6H4v-2h2v2zm0-3H4v-2h2v2zm0-3H4V7h2v2zm3 6H7v-2h2v2zm0-3H7v-2h2v2zm0-3H7V7h2v2zm3 6h-2v-2h2v2zm0-3h-2v-2h2v2zm0-3h-2V7h2v2zm3 6h-2v-2h2v2zm0-3h-2v-2h2v2zm0-3h-2V7h2v2z"/>
        </svg>
      )
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-brand-cream text-brand-navy font-sans overflow-x-hidden">

      {/* ── Header ── */}
      <header className={`fixed w-full top-0 z-50 transition-[background-color,padding,box-shadow] duration-300 ${
        scrolled
          ? 'py-3 bg-white/[0.98] backdrop-blur-md shadow-[0_1px_0_rgba(10,22,40,0.06),0_4px_20px_rgba(10,22,40,0.06)]'
          : 'py-5 bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            <img
              src="/new-GPP.svg"
              alt="Guided Peak Potential"
              className={`transition-[height] duration-300 ${scrolled ? 'h-10' : 'h-12'} w-auto object-contain`}
            />
          </motion.div>

          <nav className="hidden md:flex items-center space-x-10">
            {['About', 'Services', 'Contact'].map((item, i) => {
              const isAbout = item === 'About';
              const isContact = item === 'Contact';

              if (isAbout) {
                return (
                  <MotionLink
                    key={item}
                    to="/about"
                    className="text-brand-navy/55 hover:text-brand-navy text-[11px] font-medium tracking-[0.18em] uppercase transition-[color] duration-200"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    About
                  </MotionLink>
                );
              } else if (isContact) {
                return (
                  <MotionLink
                    key={item}
                    to="/contact"
                    className="text-brand-navy/55 hover:text-brand-navy text-[11px] font-medium tracking-[0.18em] uppercase transition-[color] duration-200"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    Contact
                  </MotionLink>
                );
              } else {
                return (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-brand-navy/55 hover:text-brand-navy text-[11px] font-medium tracking-[0.18em] uppercase transition-[color] duration-200"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    {item}
                  </motion.a>
                );
              }
            })}

            <motion.a
              href="/contact"
              className="ml-4 px-7 py-2.5 bg-brand-blue text-white text-[11px] font-medium tracking-[0.18em] uppercase rounded-sm hover:bg-brand-navy transition-[background-color] duration-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Consultation
            </motion.a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/Header.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/55 via-brand-navy/35 to-brand-navy/65"></div>

        <div className="relative z-10 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-brand-gold text-[10px] tracking-[0.4em] uppercase font-medium mb-10">
              Guided Peak Potential
            </p>

            <h1 className="font-serif text-5xl md:text-7xl font-light text-white leading-[1.05] tracking-tight">
              Reclaim Your Path
              <span className="block font-serif text-6xl md:text-8xl font-extralight italic text-white/80 mt-2">
                Redefine Your Peak
              </span>
            </h1>

            <div className="w-16 h-px bg-brand-gold mx-auto my-10"></div>

            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Transform your life through personalized coaching that honors your unique journey
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/contact"
                className="px-10 py-4 bg-brand-gold text-brand-navy rounded-sm font-medium text-[11px] tracking-[0.22em] uppercase hover:bg-[#b8963e] transition-[background-color] duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Begin Your Journey
              </motion.a>

              <motion.a
                href="#services"
                className="px-10 py-4 bg-transparent text-white border border-white/35 rounded-sm font-medium text-[11px] tracking-[0.22em] uppercase hover:bg-white/10 transition-[background-color] duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Core Pillars ── */}
      <section className="py-28 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-gold text-[10px] tracking-[0.4em] uppercase font-medium mb-5">The Foundation</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-navy">
              Your Path to Transformation
            </h2>
            <div className="w-12 h-px bg-brand-gold mx-auto mt-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-sm p-8 shadow-[0_2px_4px_rgba(10,22,40,0.05),0_8px_28px_rgba(10,22,40,0.06)] hover:shadow-[0_4px_8px_rgba(26,79,214,0.07),0_16px_44px_rgba(26,79,214,0.11)] border border-brand-border transition-[transform,box-shadow] duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
              >
                <span className="font-serif text-3xl text-brand-gold font-light block mb-6">{pillar.num}</span>
                <div className="text-brand-blue mb-5 w-[22px] h-[22px]">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-xl font-medium text-brand-navy mb-1">
                  {pillar.title}
                </h3>
                <p className="text-[10px] text-brand-muted tracking-[0.18em] uppercase mb-5">{pillar.subtitle}</p>
                <div className="w-8 h-px bg-brand-gold mb-5"></div>
                <p className="text-brand-navy/60 leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet Constance ── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-full h-full border border-brand-blue/25 -z-10"></div>
                <div className="relative overflow-hidden bg-brand-cream shadow-[0_4px_8px_rgba(10,22,40,0.08),0_20px_50px_rgba(10,22,40,0.12)]">
                  <img
                    src="/Connie-headshot.JPG"
                    alt="Constance Bellisari"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold"></div>
                </div>
                <motion.div
                  className="absolute -bottom-5 -right-5 bg-white shadow-[0_4px_8px_rgba(10,22,40,0.10),0_12px_30px_rgba(10,22,40,0.08)] px-6 py-4 border-l-2 border-brand-gold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="text-[10px] text-brand-muted tracking-[0.2em] uppercase">Certified Life Coach</p>
                  <p className="font-serif text-lg text-brand-navy italic mt-1">Constance Bellisari</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-px bg-brand-gold"></div>
                    <span className="text-[10px] tracking-[0.35em] text-brand-gold font-medium uppercase">Strategy Consultant</span>
                  </div>

                  <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-navy mb-2">
                    Work With
                  </h2>
                  <h3 className="font-serif text-5xl md:text-6xl text-brand-blue font-normal mb-8">
                    Constance Bellisari
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="w-16 h-px bg-brand-border"></div>
                  <p className="text-base text-brand-navy/65 leading-relaxed">
                    Business coaching is strategy focused. Each session together is your time
                    to focus on your business vision and growth path. Create a business strategy
                    that aligns with your strengths, values, and market opportunities.
                  </p>
                </div>

                <div className="space-y-5 pt-2">
                  <h4 className="font-serif text-xl font-medium text-brand-navy">
                    My Promise to You
                  </h4>
                  <div className="w-12 h-px bg-brand-gold"></div>
                  <div className="space-y-4">
                    {[
                      "Strategic questioning to find new opportunities and innovative solutions",
                      "Listen and give you space to strategize, reflect, and plan",
                      "Guide you to recognize and move past limiting beliefs slowing your progress",
                      "Challenge you to think beyond what you thought was possible"
                    ].map((promise, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-px h-5 bg-brand-gold flex-shrink-0 mt-1"></div>
                        <p className="text-brand-navy/65 leading-relaxed text-sm">{promise}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-brand-cream p-8 border-l-2 border-brand-gold">
                  <p className="text-brand-navy/70 leading-relaxed mb-4 text-sm">
                    I will be your strategic partner, sounding board, and someone that will help you hold yourself accountable.
                  </p>
                  <p className="font-serif text-lg italic text-brand-blue">
                    "Let's work together to move toward a business where you are truly living your entrepreneurial vision."
                  </p>
                </div>

                <div className="text-right pt-2">
                  <p className="font-serif text-xl text-brand-blue font-light italic">I believe in you...</p>
                  <div className="w-20 h-px bg-brand-gold ml-auto mt-3"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section
        className="relative flex items-center justify-center min-h-[80vh] px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/whale.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/50 via-brand-navy/35 to-brand-navy/55"></div>

        <motion.div
          className="relative z-10 max-w-4xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-brand-gold text-[10px] tracking-[0.4em] uppercase font-medium mb-6">Our Approach</p>
          <h3 className="font-serif text-4xl md:text-5xl font-light mb-10 text-white italic">
            My Philosophy
          </h3>
          <div className="bg-white/[0.97] backdrop-blur-md p-10 md:p-14 rounded-sm shadow-[0_8px_16px_rgba(10,22,40,0.15),0_32px_80px_rgba(10,22,40,0.22)]">
            <p className="text-sm text-brand-navy/75 leading-loose text-left">
              <span className="block">
                The summit calls, not because it promises ease, but because it promises you. Every great peak scaled begins with a single step into the unknown, where courage meets possibility and dreams transform into destiny. At Guided Peak Potential, we don't just guide you up the mountain—we awaken the climber within you, the one who has always known that your greatest adventures lie beyond your comfort zone.
              </span>
              <span className="block mt-5">
                This isn't about reaching someone else's definition of success. This is about discovering the breathtaking view that can only be seen from your own personal summit. Every challenge you face becomes a stepping stone, every setback a lesson in resilience, every breakthrough a celebration of your expanding potential.
              </span>
              <span className="block mt-5">
                Your mountain is waiting. Not just the destination, but the magnificent journey of becoming who you were always meant to be. Together, we'll turn your potential into your reality, one intentional step at a time.
              </span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-28 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-gold text-[10px] tracking-[0.4em] uppercase font-medium mb-5">What We Offer</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-navy">
              Pathways to <span className="italic">Growth</span>
            </h2>
            <div className="w-12 h-px bg-brand-gold mx-auto mt-8 mb-8"></div>
            <p className="text-base text-brand-navy/55 max-w-2xl mx-auto">
              Discover transformative approaches designed to meet you exactly where you are on your journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-sm p-10 shadow-[0_2px_4px_rgba(10,22,40,0.05),0_8px_28px_rgba(10,22,40,0.07)] hover:shadow-[0_4px_8px_rgba(26,79,214,0.07),0_16px_44px_rgba(26,79,214,0.11)] border border-brand-border transition-[transform,box-shadow] duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -6 }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 text-brand-blue flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-3xl font-light text-brand-navy">
                    {service.title}
                  </h3>
                </div>

                <div className="w-10 h-px bg-brand-gold mb-6"></div>

                <p className="text-brand-navy/60 leading-relaxed mb-8 text-sm">
                  {service.desc}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-brand-navy/65">
                      <div className="w-1 h-1 bg-brand-gold rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        className="relative py-28 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/bears.png')" }}
      >
        <div className="absolute inset-0 bg-brand-navy/72"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-gold text-[10px] tracking-[0.4em] uppercase font-medium mb-5">Client Stories</p>
            <h3 className="font-serif text-4xl md:text-5xl font-light text-white">
              Voices of Transformation
            </h3>
            <div className="w-12 h-px bg-brand-gold mx-auto mt-8"></div>
          </motion.div>

          <div className="relative">
            <div className="flex items-center justify-center min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-4xl mx-auto px-4"
                >
                  <div className="bg-white/[0.97] backdrop-blur-sm rounded-sm p-12 shadow-[0_8px_16px_rgba(10,22,40,0.18),0_32px_80px_rgba(10,22,40,0.28)]">
                    <blockquote className="font-serif text-xl md:text-2xl text-brand-navy mb-8 leading-relaxed italic">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    <div className="border-t border-brand-border pt-6 flex items-center justify-between">
                      <div>
                        <p className="text-brand-navy font-semibold text-sm tracking-wide">
                          {testimonials[currentTestimonial].author}
                        </p>
                        <p className="text-brand-muted text-xs tracking-[0.08em] mt-1">
                          {testimonials[currentTestimonial].role}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={prevTestimonial}
                          className="w-8 h-8 border border-brand-border rounded-sm flex items-center justify-center text-brand-muted hover:text-brand-navy hover:border-brand-navy transition-[color,border-color] duration-200"
                          aria-label="Previous"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6"/>
                          </svg>
                        </button>
                        <button
                          onClick={nextTestimonial}
                          className="w-8 h-8 border border-brand-border rounded-sm flex items-center justify-center text-brand-muted hover:text-brand-navy hover:border-brand-navy transition-[color,border-color] duration-200"
                          aria-label="Next"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-10 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-0.5 rounded-full transition-[width,background-color] duration-300 ${
                    index === currentTestimonial
                      ? 'bg-brand-gold w-8'
                      : 'bg-white/25 hover:bg-white/45 w-4'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-gold text-[10px] tracking-[0.4em] uppercase font-medium mb-5">Investment</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-navy">
              Transform Your <span className="italic">Inner World</span>
            </h2>
            <div className="w-12 h-px bg-brand-gold mx-auto mt-8 mb-8"></div>
            <p className="text-base text-brand-navy/55 max-w-xl mx-auto mb-10">
              Choose the path that resonates with your journey toward healing and self-discovery
            </p>

            <motion.div
              className="inline-flex items-center bg-brand-cream border border-brand-border rounded-sm px-8 py-4"
              whileHover={{ scale: 1.01 }}
            >
              <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-3"></div>
              <Link to="/contact" className="text-brand-navy/65 text-sm">
                Start with a <span className="text-brand-blue font-semibold">free 15-minute</span> discovery call
              </Link>
              <svg className="w-4 h-4 ml-3 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {/* Quick Connect */}
            <motion.div
              className="bg-brand-cream rounded-sm p-8 shadow-[0_2px_4px_rgba(10,22,40,0.05),0_8px_28px_rgba(10,22,40,0.06)] border border-brand-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <p className="text-[10px] text-brand-muted tracking-[0.18em] uppercase mb-2">Starter</p>
              <h3 className="font-serif text-2xl font-light text-brand-navy mb-1">Quick Connect</h3>
              <p className="text-brand-muted text-xs mb-8">Perfect for focused check-ins</p>

              <div className="flex items-baseline mb-8">
                <span className="font-serif text-5xl font-light text-brand-navy">$100</span>
                <span className="ml-2 text-brand-muted text-sm">/ 30 min</span>
              </div>

              <div className="w-full h-px bg-brand-border mb-8"></div>

              <div className="space-y-3">
                {[
                  "Focused session format",
                  "Immediate support",
                  "Flexible scheduling"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center text-brand-navy/65">
                    <div className="w-1 h-1 bg-brand-gold rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Commitment Package — Featured */}
            <motion.div
              className="bg-brand-navy rounded-sm p-8 shadow-[0_8px_16px_rgba(10,22,40,0.18),0_28px_64px_rgba(10,22,40,0.28)] relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {/* Gold top border */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-gold rounded-t-sm"></div>

              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                <div className="bg-brand-gold text-brand-navy px-5 py-1.5 rounded-sm text-[10px] font-semibold tracking-[0.12em] uppercase">
                  Most Popular
                </div>
              </div>

              <div className="mb-6 pt-4">
                <p className="text-[10px] text-white/35 tracking-[0.18em] uppercase mb-2">Best Value</p>
                <h3 className="font-serif text-2xl font-light text-white mb-1">Commitment Package</h3>
                <p className="text-white/45 text-xs">Sustained growth & transformation</p>
              </div>

              <div className="bg-white/[0.07] rounded-sm p-6 mb-6 border border-white/10">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white/75 text-sm">8 × 30min Sessions</span>
                  <div className="bg-brand-gold/20 text-brand-gold px-3 py-1 rounded-sm text-[10px] font-semibold tracking-wide">
                    Save $150
                  </div>
                </div>
                <div className="font-serif text-5xl font-light text-white mb-1">$650</div>
                <div className="text-white/35 text-xs">Only $81.25 per session</div>
              </div>

              <div className="space-y-3">
                {[
                  "Consistent therapeutic support",
                  "Long-term progress tracking",
                  "Personalized strategies",
                  "Priority booking"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center text-white/65">
                    <div className="w-1 h-1 bg-brand-gold rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Extended Support */}
            <motion.div
              className="bg-brand-cream rounded-sm p-8 shadow-[0_2px_4px_rgba(10,22,40,0.05),0_8px_28px_rgba(10,22,40,0.06)] border border-brand-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <p className="text-[10px] text-brand-muted tracking-[0.18em] uppercase mb-2">Premium</p>
              <h3 className="font-serif text-2xl font-light text-brand-navy mb-1">Extended Support</h3>
              <p className="text-brand-muted text-xs mb-8">Comprehensive transformation journey</p>

              <div className="bg-white rounded-sm p-6 mb-6 border border-brand-border">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-brand-navy text-sm">12 × 30min Sessions</span>
                  <div className="bg-brand-gold/15 text-brand-gold px-3 py-1 rounded-sm text-[10px] font-semibold tracking-wide">
                    Save $300
                  </div>
                </div>
                <div className="font-serif text-5xl font-light text-brand-navy mb-1">$900</div>
                <div className="text-brand-muted text-xs">Only $75 per session</div>
              </div>

              <div className="w-full h-px bg-brand-border mb-6"></div>

              <div className="space-y-3">
                {[
                  "Extended therapeutic journey",
                  "Deep transformation work",
                  "Ongoing resource library",
                  "Priority support access"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center text-brand-navy/65">
                    <div className="w-1 h-1 bg-brand-gold rounded-full mr-3 flex-shrink-0"></div>
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
            <p className="text-brand-navy/45 mb-6 max-w-xl mx-auto text-sm">
              Every journey begins with a single step. Start with your complimentary 15-minute discovery call to find the perfect path forward.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center text-brand-blue hover:text-brand-navy font-medium text-sm transition-[color] duration-200"
            >
              <span className="mr-2">Ready to begin your transformation?</span>
              <span className="underline underline-offset-4">Schedule your free consultation</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Inspirational Quote ── */}
      <section
        className="relative flex items-center justify-center min-h-[60vh] px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/Backdrop-pic.jpg')" }}
      >
        <div className="absolute inset-0 bg-brand-navy/58"></div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-brand-gold text-[10px] tracking-[0.4em] uppercase font-medium mb-8">Words to Live By</p>
          <blockquote className="font-serif text-3xl md:text-4xl font-light text-white mb-10 leading-relaxed italic">
            "Your time is limited, so don't waste it living someone else's life."
          </blockquote>
          <div className="w-16 h-px bg-brand-gold mx-auto mb-6"></div>
          <cite className="text-[11px] text-white/50 not-italic tracking-[0.2em] uppercase">Steve Jobs</cite>
        </motion.div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-brand-navy py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-8 h-px bg-brand-gold mx-auto mb-6"></div>
          <p className="text-white/35 text-[11px] tracking-[0.12em]">
            © {new Date().getFullYear()} Guided Peak Potential. Nurturing transformation with gentle wisdom.
          </p>
        </div>
      </footer>
    </div>
    <Analytics />
    </>
  );
}

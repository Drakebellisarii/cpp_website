import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react"
import ScrollExpandMedia from './components/ui/scroll-expansion-hero';
import Header from './components/Header';
import { CategoryList } from './components/ui/category-list';

export default function CentralPointPartnersWebsite() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

      <Header currentPage="home" initialDark={true} />

      {/* ── Hero ── */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/Burt-sun.mp4"
        bgImageSrc="/beautiful-mtn.jpg"
        title="Reclaim Your Peak"
        date="Guided Peak Potential"
        scrollToExpand="Scroll to expand"
        videoLabel="Work With"
        videoName="Constance Bellisari"
      />

      {/* ── Core Pillars ── */}
      <CategoryList
        categories={pillars.map((p) => ({
          id: p.num,
          title: p.title,
          subtitle: p.description,
          icon: <div className="w-6 h-6">{p.icon}</div>,
          featured: p.num === '01',
        }))}
        className="pt-20 pb-24"
      />

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

      {/* ── Footer ── */}
      <footer className="bg-brand-navy py-12 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="font-serif text-base text-white/40 italic">
            "Your time is limited, so don't waste it living someone else's life."
          </p>
          <p className="text-white/25 text-[10px] tracking-[0.25em] uppercase">Steve Jobs</p>
          <div className="w-8 h-px bg-brand-gold/40 mx-auto !mt-6"></div>
          <p className="text-white/25 text-[11px] tracking-[0.12em] !mt-4">
            © {new Date().getFullYear()} Guided Peak Potential. Nurturing transformation with gentle wisdom.
          </p>
        </div>
      </footer>
    </div>
    <Analytics />
    </>
  );
}

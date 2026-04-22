import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function AboutPage() {
  const values = [
    {
      title: "Authentic Presence",
      description: "Every session, I show up fully — no scripts, no formulas. Your story deserves complete attention and honest engagement, creating the space where real breakthroughs become possible."
    },
    {
      title: "Strategic Clarity",
      description: "We cut through noise and confusion to find what actually matters, building a path that is uniquely yours and deeply aligned with your values, strengths, and vision."
    },
    {
      title: "Sustained Growth",
      description: "Transformation isn't a moment — it's a practice. I help you build habits and mindsets that create lasting change long after our sessions end, turning growth into a permanent way of being."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy font-sans overflow-x-hidden">
      <Header currentPage="about" initialDark={true} />

      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/boat.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/55 to-brand-navy/15" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 pb-16 md:pb-28 pt-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-px bg-brand-gold" />
              <span className="text-[10px] tracking-[0.4em] text-brand-gold font-medium uppercase">Our Story</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-white leading-[0.95] mb-8">
              Guided<br />
              <span className="italic text-white/75">Peak Potential</span>
            </h1>
            <p className="text-white/55 text-sm sm:text-base max-w-lg leading-relaxed font-light">
              Committed to nurturing transformation and guiding individuals toward their authentic summit — one intentional step at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Constance's Story ── */}
      <section className="bg-brand-cream py-16 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">

              {/* Photo */}
              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center lg:block">
                  <div className="w-[260px] sm:w-[300px] lg:w-full overflow-hidden lg:h-[660px] shadow-[0_4px_8px_rgba(10,22,40,0.08),0_24px_64px_rgba(10,22,40,0.14)]">
                    <img
                      src="/Connie-headshot.JPG"
                      alt="Constance Bellisari"
                      className="w-full h-auto lg:h-full lg:object-cover lg:object-[center_8%]"
                    />
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-6 h-px bg-brand-gold flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-brand-muted tracking-[0.22em] uppercase">Certified Life Coach</p>
                    <p className="font-serif text-lg text-brand-navy italic mt-0.5">Constance Bellisari</p>
                  </div>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                className="lg:col-span-7 lg:pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-7">
                  <div className="w-8 h-px bg-brand-gold" />
                  <span className="text-[10px] tracking-[0.35em] text-brand-gold font-medium uppercase">Founder &amp; Lead Coach</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-light text-brand-navy/35 mb-1 leading-none">Meet</h2>
                <h3 className="font-serif text-4xl sm:text-5xl text-brand-blue font-normal mb-8 leading-tight">Constance Bellisari</h3>

                <div className="w-full h-px bg-brand-border mb-8" />

                <p className="text-brand-navy/65 text-base leading-relaxed mb-6">
                  Constance Bellisari is a certified life and business coach whose work sits at the intersection of strategy and soul. With a background in entrepreneurship and a deep commitment to personal growth, she brings clarity, courage, and practical tools to every coaching relationship.
                </p>
                <p className="text-brand-navy/65 text-base leading-relaxed mb-6">
                  Having navigated the complexities of building a business, managing relationships, and redefining personal identity, Constance coaches from a place of lived experience — not theory. She understands what it means to stand at the foot of an overwhelming summit and choose to climb anyway.
                </p>
                <p className="text-brand-navy/65 text-base leading-relaxed mb-10">
                  Her approach blends strategic thinking with deep listening, creating a space where clients feel safe to be honest, challenged to grow, and supported every step of the way.
                </p>

                <div className="border-l-2 border-brand-gold pl-6 bg-white py-5 pr-6 mb-8">
                  <p className="font-serif text-lg italic text-brand-blue leading-relaxed">
                    "I don't just guide you to the top — I help you discover the climber you've always been."
                  </p>
                  <p className="text-brand-muted text-xs tracking-[0.12em] mt-3 uppercase">— Constance Bellisari</p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-3 group"
                >
                  <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-brand-blue group-hover:text-brand-navy transition-[color] duration-300">Book a Discovery Call</span>
                  <div className="w-8 h-px bg-brand-blue group-hover:w-12 transition-[width] duration-300" />
                </Link>
              </motion.div>

            </div>
          </div>
      </section>

      {/* ── Mission, Vision & Values ── */}
      <section className="py-16 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">

          <motion.div
            className="flex items-end justify-between pb-8 md:pb-12 border-b border-brand-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-brand-gold text-[10px] tracking-[0.4em] uppercase font-medium mb-4">What Drives Us</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-navy">
                Mission &amp; <span className="italic">Values</span>
              </h2>
            </div>
            <p className="text-brand-navy/20 font-serif text-sm tracking-widest hidden lg:block pb-1">Our Foundation</p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="grid lg:grid-cols-12 gap-6 lg:gap-8 py-10 md:py-16 border-b border-brand-border group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:col-span-4">
              <span className="font-serif text-7xl md:text-8xl font-light text-brand-gold/12 block leading-none mb-3 select-none">01</span>
              <h3 className="font-serif text-2xl font-light text-brand-navy group-hover:text-brand-blue transition-[color] duration-300">Our Mission</h3>
            </div>
            <div className="lg:col-span-8 lg:pt-14">
              <p className="text-brand-navy/60 text-sm leading-loose mb-4">
                To empower individuals to discover, develop, and achieve their highest potential through personalized coaching, strategic guidance, and unwavering support. We create transformative experiences that honor each client's unique journey while providing the tools, insights, and accountability needed for sustainable growth.
              </p>
              <p className="text-brand-navy/60 text-sm leading-loose">
                Whether you're navigating career transitions, seeking personal breakthrough, or building organizational excellence — we walk alongside you with purpose, clarity, and deep commitment to your success.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="grid lg:grid-cols-12 gap-6 lg:gap-8 py-10 md:py-16 border-b border-brand-border group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="lg:col-span-4">
              <span className="font-serif text-7xl md:text-8xl font-light text-brand-gold/12 block leading-none mb-3 select-none">02</span>
              <h3 className="font-serif text-2xl font-light text-brand-navy group-hover:text-brand-blue transition-[color] duration-300">Our Vision</h3>
            </div>
            <div className="lg:col-span-8 lg:pt-14">
              <p className="text-brand-navy/60 text-sm leading-loose">
                A world where every individual operates from their authentic peak potential — creating ripple effects of transformation that extend far beyond themselves. We envision communities of empowered leaders, fulfilled professionals, and thriving individuals who contribute meaningfully to the world and live with full intention.
              </p>
            </div>
          </motion.div>

          {/* Core Values */}
          {values.map((val, i) => (
            <motion.div
              key={i}
              className="grid lg:grid-cols-12 gap-6 lg:gap-8 py-10 md:py-16 border-b border-brand-border last:border-0 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="lg:col-span-4">
                <span className="font-serif text-7xl md:text-8xl font-light text-brand-gold/12 block leading-none mb-3 select-none">
                  {String(i + 3).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-2xl font-light text-brand-navy group-hover:text-brand-blue transition-[color] duration-300">
                  {val.title}
                </h3>
              </div>
              <div className="lg:col-span-8 lg:pt-14">
                <p className="text-brand-navy/60 text-sm leading-loose">{val.description}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ── Promise ── */}
      <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bears.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/50" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 py-16 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* Left heading */}
              <div>
                <p className="text-brand-gold text-[10px] tracking-[0.4em] uppercase font-medium mb-8">Our Promise</p>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-white italic leading-[1.05]">
                  A Commitment<br />to Your Growth
                </h2>
                <div className="w-14 h-px bg-brand-gold mt-10" />
              </div>

              {/* Right glass panel */}
              <div className="bg-brand-navy/[0.55] backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(10,22,40,0.3)] p-5 sm:p-8 lg:p-10">
                <p className="text-white text-sm leading-loose pb-6 border-b border-white/15">
                  We promise to show up fully present, completely committed to your success, and unwavering in our belief in your potential. Your dreams matter to us — your growth is our priority, and your transformation is our shared victory.
                </p>
                <p className="text-white text-sm leading-loose pt-6">
                  Together, we will navigate every challenge, celebrate every breakthrough, and ensure that you not only reach your peak potential but discover heights you never knew were possible.
                </p>
                <div className="mt-8 flex items-center space-x-3">
                  <div className="w-6 h-px bg-brand-gold flex-shrink-0" />
                  <p className="font-serif text-sm text-brand-gold italic">— Constance Bellisari, Founder</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-gold text-[10px] tracking-[0.4em] uppercase font-medium mb-6">Begin Your Journey</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-brand-navy mb-4">
              Ready to Reach<br />
              <span className="italic">Your Peak?</span>
            </h2>
            <div className="w-12 h-px bg-brand-gold mx-auto mb-8" />
            <p className="text-brand-navy/55 text-base max-w-xl mx-auto mb-10 leading-relaxed">
              Start with a complimentary 15-minute discovery call to explore how we can support your transformation.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-brand-blue text-white text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-brand-navy transition-[background-color] duration-300 shadow-[0_4px_16px_rgba(26,79,214,0.25)]"
            >
              Schedule Your Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-brand-navy py-12 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="font-serif text-base text-white/40 italic">
            "Your time is limited, so don't waste it living someone else's life."
          </p>
          <p className="text-white/25 text-[10px] tracking-[0.25em] uppercase">Steve Jobs</p>
          <div className="w-8 h-px bg-brand-gold/40 mx-auto !mt-6" />
          <p className="text-white/25 text-[11px] tracking-[0.12em] !mt-4">
            © {new Date().getFullYear()} Guided Peak Potential. Nurturing transformation with gentle wisdom.
          </p>
        </div>
      </footer>
    </div>
  );
}

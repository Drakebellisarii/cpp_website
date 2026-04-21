import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden">

      <Header currentPage="about" initialDark={true} />

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[70vh] px-6 pt-24 bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: "url('/boat.jpeg')"}}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

        <div className="relative z-10 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
              About
              <span className="block text-6xl md:text-8xl font-extralight italic text-slate-100 mt-3">
                Guided Peak Potential
              </span>
            </h1>

            <p className="text-xl text-slate-100 max-w-3xl mx-auto font-light leading-relaxed">
              Committed to nurturing transformation and guiding individuals
              toward their peak potential. With a philosophy rooted in presence, clarity, and intentional growth,
              we believe that each journey is unique—and deserves care, attention, and wisdom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              className="bg-white rounded-2xl p-10 shadow-sm border border-slate-200"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-0.5 bg-blue-500"></div>
                <h2 className="text-3xl font-light text-slate-900">Our Mission</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                To empower individuals to discover, develop, and achieve their highest potential
                through personalized coaching, strategic guidance, and unwavering support. We create transformative
                experiences that honor each client's unique journey while providing the tools, insights, and
                accountability needed for sustainable growth.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Whether you're navigating career transitions, seeking personal breakthrough, or building
                organizational excellence, we walk alongside you with purpose, clarity, and deep commitment
                to your success.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-10 shadow-sm border border-blue-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-0.5 bg-blue-600"></div>
                <h2 className="text-3xl font-light text-blue-900">Our Vision</h2>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                A world where every individual and organization operates from their authentic peak potential,
                creating ripple effects of positive transformation that extend far beyond themselves. We envision
                communities of empowered leaders, fulfilled professionals, and thriving organizations that
                contribute meaningfully to the world.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Through our work, we aim to be the catalyst that turns potential into reality, dreams into
                achievements, and challenges into stepping stones toward greatness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
              Why Choose <span className="text-blue-600 font-normal">Guided Peak Potential?</span>
            </h2>
          </motion.div>

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
                className="bg-slate-50 rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold">
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
      <section className="relative py-24 px-6 bg-gradient-to-br from-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-12">
              Our Promise to You
            </h2>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 shadow-2xl">
              <blockquote className="text-2xl font-light leading-relaxed mb-8 italic">
                "We promise to show up fully present, completely committed to your success, and
                unwavering in our belief in your potential. Your dreams matter to us, your growth
                is our priority, and your transformation is our shared victory. Together, we will
                navigate every challenge, celebrate every breakthrough, and ensure that you not
                only reach your peak potential but discover heights you never knew were possible."
              </blockquote>

              <div className="border-t border-white/20 pt-6">
                <p className="text-xl font-light">
                  — Constance Bellisari, Founder
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Start with a complimentary 15-minute discovery call to explore how we can support your transformation.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Schedule Your Free Consultation
            </Link>
          </motion.div>
        </div>
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
  );
}

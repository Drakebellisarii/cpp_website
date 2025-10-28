import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_replyto', formData.email);

      const response = await fetch('https://formspree.io/f/xwpnzpdp', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert('Thank you for your message! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Oops! There was a problem sending your message. Please try again.');
      }
    } catch (error) {
      alert('Oops! There was a problem sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden flex flex-col">
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
            <Link to="/">
              <img
                src="/new-GPP.svg"
                alt="Guided Peak Potential"
                className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-14'} w-auto object-contain`}
              />
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Contact'].map((item, i) => {
              const isHome = item === 'Home';
              const isAbout = item === 'About';

              if (isHome) {
                return (
                  <MotionLink
                    key={item}
                    to="/"
                    className="text-slate-600 hover:text-slate-900 text-sm font-medium tracking-wide transition-colors duration-200"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    whileHover={{ y: -2 }}
                  >
                    Home
                  </MotionLink>
                );
              } else if (isAbout) {
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
              } else {
                return (
                  <motion.span
                    key={item}
                    className="text-blue-600 text-sm font-semibold tracking-wide"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    {item}
                  </motion.span>
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
        className="relative flex flex-col items-center justify-center min-h-[50vh] px-6 pt-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero_contact.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>

        <motion.div
          className="relative z-10 max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
            Let's Begin Your
            <span className="block text-5xl md:text-7xl font-extralight italic text-slate-100 mt-3">
              Transformative Journey
            </span>
          </h1>
          <p className="text-xl text-slate-100 max-w-2xl mx-auto font-light leading-relaxed">
            Every great transformation begins with a single conversation. Share your story and let's explore how we can guide you toward your peak potential.
          </p>
        </motion.div>
      </section>

      {/* Main Content - Contact Form */}
      <main className="flex-1 flex items-center justify-center px-6 py-24 bg-slate-50">
        <motion.div
          className="w-full max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-10 shadow-sm border border-slate-200 space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light text-slate-900 mb-2">
                Connect With Us
              </h2>
              <p className="text-slate-600">
                Share your story and let's begin this journey together
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-4 py-3 text-base border border-slate-300 rounded-lg bg-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-4 py-3 text-base border border-slate-300 rounded-lg bg-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Tell Us About Your Journey <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full px-4 py-3 text-base border border-slate-300 rounded-lg bg-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all resize-none"
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
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
              whileHover={!isSubmitting ? { y: -2 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? 'Sending...' : 'Begin the Conversation'}
            </motion.button>

            <p className="text-xs text-slate-500 text-center">
              We respect your privacy and will never share your information.
              Your journey starts with trust, and that begins here.
            </p>
          </form>
        </motion.div>
      </main>

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


import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero3D from '../components/Hero3D';

const Index = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Mugunthan1305', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/mugunthan', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const downloadResume = () => {
    // This would trigger download of your resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would add your resume PDF to public folder
    link.download = 'Mugunthan_R_Resume.pdf';
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center relative pt-20 md:pt-0"
    >
      {/* Gradient Background Blurs */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              >
                <span className="text-gradient">Mugunthan R</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Full-Stack Developer & Problem Solver
              </motion.p>
              <motion.p 
                className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                Passionate about building scalable, real-time applications with modern technologies. 
                Experienced in React, Node.js, and cloud technologies.
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <Link to="/projects">
                <motion.button
                  className="gradient-blur px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 animate-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
              </Link>
              
              <motion.button
                onClick={downloadResume}
                className="glass-morphism px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center gap-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-morphism p-3 rounded-full hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column - 3D Animation */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="hidden md:block"
          >
            <Hero3D />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-gray-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;

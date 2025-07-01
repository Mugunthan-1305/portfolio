
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, FolderOpen, FileText, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/skills', label: 'Skills', icon: Code },
    { path: '/projects', label: 'Projects', icon: FolderOpen },
    { path: '/articles', label: 'Articles', icon: FileText },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 p-6 hidden md:block"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="glass-morphism rounded-full px-8 py-4 flex items-center justify-between backdrop-blur-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/" className="text-2xl font-bold text-gradient">
              Mugunthan R
            </Link>
            <div className="flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative"
                  >
                    <motion.div
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                        isActive ? 'text-primary' : 'text-gray-300 hover:text-white'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </motion.div>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="fixed top-6 left-6 z-50 md:hidden"
      >
        <motion.button
          className="glass-morphism p-3 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 w-80 glass-morphism z-40 md:hidden"
          >
            <div className="p-8 pt-20">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gradient">Mugunthan R</h2>
                <p className="text-gray-400 text-sm">Full-Stack Developer</p>
              </div>
              <nav className="space-y-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block"
                    >
                      <motion.div
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                          isActive ? 'bg-primary/10 text-primary' : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={20} />
                        <span>{item.label}</span>
                      </motion.div>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;

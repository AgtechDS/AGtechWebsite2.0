
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Chiudi il menu mobile quando cambia la route
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Effetto dello sfondo della navbar durante lo scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card shadow-glow-blue py-3"
          : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo con effetti avanzati */}
        <NavLink to="/" className="flex items-center group">
          <motion.div
            className="relative mr-3"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/agtech-uploads/05117b04-9b40-4413-bcca-0c6d768d3e0e.png"
              alt="AgTechDesigne Logo"
              className="h-12 w-auto relative z-10"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-agtech-blue-500 to-agtech-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className={`text-2xl font-display font-bold transition-all duration-300 ${
              scrolled ? "gradient-text" : "text-white"
            }`}>
              AgTech
            </span>
            <span className={`text-2xl font-display font-light transition-all duration-300 ${
              scrolled ? "text-agtech-purple-600" : "text-agtech-green-400"
            }`}>
              Designe
            </span>
          </motion.div>
        </NavLink>

        {/* Desktop Navigation con effetti moderni */}
        <nav className="hidden md:flex items-center space-x-2">
          {[
            { to: "/", label: "Home" },
            { to: "/servizi", label: "Servizi" },
            { to: "/chi-siamo", label: "Chi Siamo" },
            { to: "/contatti", label: "Contatti" }
          ].map((item, index) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.5 }}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                    isActive
                      ? scrolled
                        ? "text-agtech-blue bg-agtech-blue/10"
                        : "text-agtech-green-400 bg-white/10"
                      : scrolled
                        ? "text-gray-700 hover:text-agtech-blue hover:bg-agtech-blue/5"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-agtech-blue-500/20 to-agtech-purple-500/20 rounded-lg"
                        layoutId="activeTab"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-agtech-blue-500/10 to-agtech-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="ml-4"
          >
            <NavLink
              to="/contatti"
              className="primary-button flex items-center gap-2 text-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Inizia ora</span>
            </NavLink>
          </motion.div>
        </nav>

        {/* Mobile Menu Button con animazioni */}
        <motion.button
          className="md:hidden p-2 rounded-lg focus:outline-none transition-all duration-300 hover:bg-white/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className={`w-6 h-6 ${scrolled ? "text-agtech-blue dark:text-white" : "text-white"}`} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className={`w-6 h-6 ${scrolled ? "text-agtech-blue dark:text-white" : "text-white"}`} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-40 bg-agtech-blue bg-opacity-95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-white text-2xl focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X />
            </button>
          </div>
          <nav className="flex flex-col items-center text-center space-y-6 pt-10">
            <NavLink
              to="/"
              className="text-white text-xl hover:text-agtech-green transition-colors duration-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/servizi"
              className="text-white text-xl hover:text-agtech-green transition-colors duration-300"
            >
              Servizi
            </NavLink>
            <NavLink
              to="/chi-siamo"
              className="text-white text-xl hover:text-agtech-green transition-colors duration-300"
            >
              Chi Siamo
            </NavLink>
            <NavLink
              to="/contatti"
              className="text-white text-xl hover:text-agtech-green transition-colors duration-300"
            >
              Contatti
            </NavLink>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;

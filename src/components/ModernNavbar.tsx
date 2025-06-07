import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Shield, Cpu, Database } from "lucide-react";

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { to: "/", label: "HOME", icon: Zap },
    { to: "/servizi", label: "SERVICES", icon: Cpu },
    { to: "/chi-siamo", label: "ABOUT", icon: Shield },
    { to: "/contatti", label: "CONTACT", icon: Database }
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "neural-card backdrop-blur-xl border-b border-cyan-500/20"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo Futuristico */}
            <NavLink to="/" className="flex items-center group">
              <motion.div
                className="relative mr-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 neural-card flex items-center justify-center relative overflow-hidden">
                  <motion.img
                    src="/agtech-uploads/05117b04-9b40-4413-bcca-0c6d768d3e0e.png"
                    alt="AgtechDesigne Logo"
                    className="w-10 h-10 object-contain"
                    animate={{
                      filter: [
                        "drop-shadow(0 0 5px #00d4ff)",
                        "drop-shadow(0 0 20px #00d4ff)",
                        "drop-shadow(0 0 5px #00d4ff)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Anelli orbitali */}
                  <motion.div
                    className="absolute inset-0 border border-cyan-400/30 rounded-lg"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    style={{ scale: 1.2 }}
                  />
                  <motion.div
                    className="absolute inset-0 border border-purple-400/20 rounded-lg"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    style={{ scale: 1.4 }}
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="font-cyber"
              >
                <div className="text-2xl font-bold text-white">
                  AGTECHDESIGNE
                </div>
                <div className="text-xs text-cyan-400 tracking-widest">
                  DIGITAL INNOVATION
                </div>
              </motion.div>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.5 }}
                >
                  <NavLink 
                    to={item.to}
                    className={({ isActive }) => 
                      `relative px-6 py-3 font-cyber text-sm font-bold tracking-wider transition-all duration-300 group ${
                        isActive 
                          ? "text-cyan-400" 
                          : "text-gray-300 hover:text-cyan-400"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-2">
                          <item.icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </div>
                        
                        {/* Cyber underline */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
                          initial={{ width: 0 }}
                          animate={{ width: isActive ? "100%" : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                        
                        {/* Cyber corners */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                className="ml-6"
              >
                <NavLink
                  to="/contatti"
                  className="cyber-button"
                >
                  INIZIA ORA
                </NavLink>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden neural-card p-3 hover:bg-cyan-400/10 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
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
                    <X className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
            <motion.div
              className="relative h-full flex flex-col justify-center items-center space-y-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <NavLink
                    to={item.to}
                    className="cyber-button text-2xl px-8 py-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-6 h-6" />
                      {item.label}
                    </div>
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModernNavbar;

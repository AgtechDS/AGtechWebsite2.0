
import { NavLink } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin, Phone, Sparkles, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-agtech-blue-900 via-agtech-blue-800 to-agtech-purple-900 text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-agtech-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-agtech-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo e informazioni aziendali */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center group">
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
                <div className="absolute inset-0 bg-gradient-to-r from-agtech-green-500 to-agtech-blue-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </motion.div>
              <div>
                <span className="text-2xl font-display font-bold gradient-text">AgTech</span>
                <span className="text-2xl font-display font-light text-agtech-green-400">Designe</span>
              </div>
            </div>

            <p className="text-gray-300 max-w-md leading-relaxed">
              Trasformiamo le tue idee in soluzioni digitali innovative. Specializzati in intelligenza artificiale,
              sviluppo software personalizzato e automazione avanzata per il futuro del tuo business.
            </p>

            <div className="flex flex-wrap gap-3">
              {['AI Computing', 'Software Development', 'Data Automation'].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Link utili */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-agtech-green-400" />
              Navigazione
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/servizi", label: "Servizi" },
                { to: "/chi-siamo", label: "Chi Siamo" },
                { to: "/contatti", label: "Contatti" }
              ].map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <NavLink
                    to={link.to}
                    className="group flex items-center text-gray-300 hover:text-agtech-green-400 transition-all duration-300"
                  >
                    <div className="w-1 h-1 bg-agtech-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contatti e social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Mail className="w-5 h-5 text-agtech-blue-400" />
              Contatti
            </h3>
            <div className="space-y-4">
              <motion.a
                href="mailto:info@agtechdesigne.com"
                className="group flex items-center text-gray-300 hover:text-agtech-green-400 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-white/10 rounded-lg mr-3 group-hover:bg-agtech-green-400/20 transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="font-medium">info@agtechdesigne.com</div>
                </div>
              </motion.a>

              <motion.div
                className="group flex items-center text-gray-300"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-white/10 rounded-lg mr-3">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Sede</div>
                  <div className="font-medium">Italia</div>
                </div>
              </motion.div>

              <div className="pt-4">
                <h4 className="text-sm font-semibold mb-3 text-gray-400">Seguici</h4>
                <div className="flex space-x-3">
                  {[
                    { href: "https://instagram.com/agtechdesigne", icon: Instagram, label: "Instagram", color: "hover:text-pink-400" },
                    { href: "https://facebook.com/Agtechdesigne", icon: Facebook, label: "Facebook", color: "hover:text-blue-400" }
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/10 rounded-xl text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                      aria-label={social.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright e scroll to top */}
        <motion.div
          className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left text-sm text-gray-400 mb-4 md:mb-0">
            <p>&copy; {currentYear} AgTechDesigne. Tutti i diritti riservati.</p>
            <p className="mt-1">Realizzato con ❤️ e tecnologie all'avanguardia</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500">Made with React + TypeScript</span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 bg-agtech-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        className={`fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-agtech-blue-600 to-agtech-purple-600 text-white rounded-full shadow-glow-blue transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;

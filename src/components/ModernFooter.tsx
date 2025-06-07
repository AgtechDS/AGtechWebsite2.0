import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Phone,
  ArrowUp,
  Zap,
  Shield,
  Cpu,
  Database,
  ExternalLink,
  Lock,
  Cookie
} from "lucide-react";
import { useState, useEffect } from "react";
import CookieSettings from "./CookieSettings";

const ModernFooter = () => {
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

  const footerSections = [
    {
      title: "SERVIZI",
      links: [
        { to: "/servizi/ai-computing", label: "AI & Computing", icon: Cpu },
        { to: "/servizi/sviluppo-software", label: "Software Dev", icon: Zap },
        { to: "/servizi/automazione-dati", label: "Data Automation", icon: Database },
      ]
    },
    {
      title: "AZIENDA",
      links: [
        { to: "/chi-siamo", label: "Chi Siamo", icon: Shield },
        { to: "/contatti", label: "Contatti", icon: Mail },
        { to: "/servizi", label: "Tutti i Servizi", icon: ExternalLink },
      ]
    },
    {
      title: "PRIVACY",
      links: [
        { to: "/privacy-policy", label: "Privacy Policy", icon: Lock },
        { to: "/cookie-policy", label: "Cookie Policy", icon: Cookie },
      ]
    }
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/agtechdesigne/",
      icon: Instagram,
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    {
      href: "https://www.facebook.com/profile.php?id=61557097110988",
      icon: Facebook,
      label: "Facebook",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <footer className="relative cyber-container py-20 mt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <motion.div
                className="w-16 h-16 neural-card flex items-center justify-center mr-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="hologram-text text-2xl font-cyber font-bold">AG</div>
              </motion.div>
              
              <div>
                <div className="text-3xl font-cyber font-bold hologram-text">
                  AGTECH
                </div>
                <div className="text-cyan-400 text-sm tracking-widest">
                  DIGITAL INNOVATION
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
              Trasformiamo il futuro attraverso l'intelligenza artificiale, 
              lo sviluppo software avanzato e l'automazione intelligente. 
              Il domani inizia oggi.
            </p>
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['AI/ML', 'React', 'Python', 'Cloud', 'Automation'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="neural-card px-3 py-1 text-xs font-cyber text-cyan-400"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <div className="neural-card p-2">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">EMAIL</div>
                  <div className="font-mono">info@agtechdesigne.com</div>
                </div>
              </motion.div>
              
              <motion.div
                className="flex items-center gap-3 text-gray-300"
                whileHover={{ x: 5 }}
              >
                <div className="neural-card p-2">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">LOCATION</div>
                  <div className="font-mono">Italia</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-cyber font-bold text-cyan-400 mb-8 tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, index) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <NavLink 
                      to={link.to} 
                      className="group flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-all duration-300"
                    >
                      <div className="neural-card p-1 group-hover:bg-cyan-400/20 transition-colors duration-300">
                        <link.icon className="w-3 h-3" />
                      </div>
                      <span className="font-mono text-sm">{link.label}</span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`neural-card p-4 text-gray-300 ${social.color} transition-all duration-300 hover:scale-110`}
              aria-label={social.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.9 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-cyan-400/20 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left text-gray-400 mb-4 md:mb-0">
            <p className="font-mono text-sm">
              &copy; {currentYear} AGTECHDESIGNE. ALL RIGHTS RESERVED.
            </p>
            <p className="font-mono text-xs mt-1">
              POWERED BY INNOVATION & ARTIFICIAL INTELLIGENCE
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <NavLink
                to="/privacy-policy"
                className="font-mono text-xs text-gray-500 hover:text-cyan-400 transition-colors duration-300"
              >
                Privacy Policy
              </NavLink>
              <span className="text-gray-600">•</span>
              <NavLink
                to="/cookie-policy"
                className="font-mono text-xs text-gray-500 hover:text-cyan-400 transition-colors duration-300"
              >
                Cookie Policy
              </NavLink>
              <span className="text-gray-600">•</span>
              <CookieSettings />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="font-mono text-xs text-gray-500">
              SYSTEM STATUS: ONLINE
            </div>
            <button
              onClick={() => {
                sessionStorage.removeItem('agtech-intro-seen');
                window.location.reload();
              }}
              className="font-mono text-xs text-gray-500 hover:text-cyan-400 transition-colors duration-300"
              title="Reset intro for testing"
            >
              RESET INTRO
            </button>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
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

      {/* Scroll to Top Button */}
      <motion.button
        className={`fixed bottom-8 right-8 z-50 neural-card p-4 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-cyan-400" />
      </motion.button>
    </footer>
  );
};

export default ModernFooter;

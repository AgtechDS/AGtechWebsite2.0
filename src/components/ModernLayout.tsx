import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModernNavbar from "./ModernNavbar";
import ModernFooter from "./ModernFooter";
import RoseChatbot from "./RoseChatbot";
import CyberCursor from "./CyberCursor";
import NeuralBackground from "./NeuralBackground";
import CookieBanner from "./CookieBanner";

const ModernLayout = () => {
  const location = useLocation();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Effetto per transizioni di pagina
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-x-hidden">
      {/* Neural Background */}
      <NeuralBackground />
      
      {/* Cyber Cursor */}
      <CyberCursor />
      
      {/* Modern Navbar */}
      <ModernNavbar />
      
      {/* Page Transition Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <div className="neural-loader mx-auto mb-6"></div>
              <motion.div
                className="hologram-text text-2xl font-bold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                LOADING...
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 1.02 }}
            transition={{ 
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Modern Footer */}
      <ModernFooter />
      
      {/* Rose AI Chatbot */}
      <RoseChatbot isOpen={isChatOpen} onToggle={toggleChat} />

      {/* Cookie Banner */}
      <CookieBanner />

      {/* Floating Action Elements */}
      <div className="fixed bottom-6 left-6 z-40">
        <motion.div
          className="neural-card p-4 backdrop-blur-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="text-xs text-cyan-400 font-mono">
            AGTECH_SYSTEM_ONLINE
          </div>
          <div className="text-xs text-green-400 font-mono">
            STATUS: OPERATIONAL
          </div>
        </motion.div>
      </div>

      {/* Cyber Grid Overlay */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none z-0"></div>
      
      {/* Ambient Lighting Effects */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none z-0 animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none z-0 animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default ModernLayout;

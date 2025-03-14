
import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AiComputing from "./pages/AiComputing";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import DataAutomation from "./pages/DataAutomation";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simula il caricamento delle risorse
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence>
          {loading ? (
            <motion.div 
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 flex items-center justify-center bg-agtech-blue z-50"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <img 
                  src="/agtech-uploads/05117b04-9b40-4413-bcca-0c6d768d3e0e.png" 
                  alt="AgTechDesigne Logo" 
                  className="w-24 h-24"
                />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Index />} />
                    <Route path="servizi" element={<Services />} />
                    <Route path="chi-siamo" element={<About />} />
                    <Route path="contatti" element={<Contact />} />
                    <Route path="servizi/ai-computing" element={<AiComputing />} />
                    <Route path="servizi/sviluppo-software" element={<SoftwareDevelopment />} />
                    <Route path="servizi/automazione-dati" element={<DataAutomation />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </motion.div>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

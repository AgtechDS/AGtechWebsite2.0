
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ModernLayout from "./components/ModernLayout";
import Index from "./pages/Index";
import ModernIndex from "./pages/ModernIndex";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AiComputing from "./pages/AiComputing";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import DataAutomation from "./pages/DataAutomation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import AIDrivenDemo from "./pages/AIDrivenDemo";


const queryClient = new QueryClient();

const App = () => {
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
                <Routes>
                  {/* Nuovo Layout Moderno */}
                  <Route path="/" element={<ModernLayout />}>
                    <Route index element={<ModernIndex />} />
                    <Route path="servizi" element={<Services />} />
                    <Route path="chi-siamo" element={<About />} />
                    <Route path="contatti" element={<Contact />} />
                    <Route path="servizi/ai-computing" element={<AiComputing />} />
                    <Route path="servizi/sviluppo-software" element={<SoftwareDevelopment />} />
                    <Route path="servizi/automazione-dati" element={<DataAutomation />} />
                    <Route path="demo-ai-driven" element={<AIDrivenDemo />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="cookie-policy" element={<CookiePolicy />} />
                    <Route path="*" element={<NotFound />} />
                  </Route>

                  {/* Layout Classico (opzionale) */}
                  <Route path="/classic" element={<Layout />}>
                    <Route index element={<Index />} />
                    <Route path="servizi" element={<Services />} />
                    <Route path="chi-siamo" element={<About />} />
                    <Route path="contatti" element={<Contact />} />
                    <Route path="servizi/ai-computing" element={<AiComputing />} />
                    <Route path="servizi/sviluppo-software" element={<SoftwareDevelopment />} />
                    <Route path="servizi/automazione-dati" element={<DataAutomation />} />
                  </Route>
                </Routes>
              </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

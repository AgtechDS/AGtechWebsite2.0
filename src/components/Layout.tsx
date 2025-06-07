
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RoseChatbot from "./RoseChatbot";

const Layout = () => {
  const location = useLocation();
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Effetto per far scorrare la pagina all'inizio quando cambia route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Rose AI Chatbot */}
      <RoseChatbot isOpen={isChatOpen} onToggle={toggleChat} />
    </div>
  );
};

export default Layout;

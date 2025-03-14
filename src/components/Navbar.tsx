
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-agtech-blue/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/lovable-uploads/05117b04-9b40-4413-bcca-0c6d768d3e0e.png"
            alt="AgTechDesigne Logo"
            className="h-10 w-auto mr-2"
          />
          <span className={`text-xl font-serif font-bold transition-colors duration-300 ${
            scrolled ? "text-agtech-blue dark:text-white" : "text-white"
          }`}>
            AgTechDesigne
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''} ${
                scrolled ? "text-agtech-blue dark:text-white" : "text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/servizi" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''} ${
                scrolled ? "text-agtech-blue dark:text-white" : "text-white"
              }`
            }
          >
            Servizi
          </NavLink>
          <NavLink 
            to="/chi-siamo" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''} ${
                scrolled ? "text-agtech-blue dark:text-white" : "text-white"
              }`
            }
          >
            Chi Siamo
          </NavLink>
          <NavLink 
            to="/contatti" 
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''} ${
                scrolled ? "text-agtech-blue dark:text-white" : "text-white"
              }`
            }
          >
            Contatti
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className={scrolled ? "text-agtech-blue dark:text-white" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-agtech-blue dark:text-white" : "text-white"} />
          )}
        </button>

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
    </header>
  );
};

export default Navbar;


import { NavLink } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-agtech-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e informazioni aziendali */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/05117b04-9b40-4413-bcca-0c6d768d3e0e.png"
                alt="AgTechDesigne Logo"
                className="h-10 w-auto mr-2"
              />
              <span className="text-xl font-serif font-bold">AgTechDesigne</span>
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              Soluzioni digitali avanzate per il tuo successo. Intelligenza artificiale, sviluppo software personalizzato, automazione dati e computing distribuito.
            </p>
          </div>

          {/* Link utili */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Utili</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-agtech-green transition-colors duration-300">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/servizi" className="text-gray-300 hover:text-agtech-green transition-colors duration-300">
                  Servizi
                </NavLink>
              </li>
              <li>
                <NavLink to="/chi-siamo" className="text-gray-300 hover:text-agtech-green transition-colors duration-300">
                  Chi Siamo
                </NavLink>
              </li>
              <li>
                <NavLink to="/contatti" className="text-gray-300 hover:text-agtech-green transition-colors duration-300">
                  Contatti
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-gray-300 hover:text-agtech-green transition-colors duration-300">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contatti e social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <div className="space-y-3">
              <a 
                href="mailto:agtechdesigne@gmail.com" 
                className="flex items-center text-gray-300 hover:text-agtech-green transition-colors duration-300"
              >
                <Mail className="h-5 w-5 mr-2" />
                agtechdesigne@gmail.com
              </a>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="https://instagram.com/agtechdesigne" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-agtech-green transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://facebook.com/Agtechdesigne" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-agtech-green transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} AgTechDesigne. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

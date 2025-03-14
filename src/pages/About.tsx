
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Lightbulb, Users, Shield } from "lucide-react";

const About = () => {
  // Refs per le animazioni
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  // Stati per le animazioni
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isValuesVisible, setIsValuesVisible] = useState(false);
  const [isTeamVisible, setIsTeamVisible] = useState(false);

  // Effect per gestire l'intersezione
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === headerRef.current) {
            setIsHeaderVisible(true);
          } else if (entry.target === contentRef.current) {
            setIsContentVisible(true);
          } else if (entry.target === valuesRef.current) {
            setIsValuesVisible(true);
          } else if (entry.target === teamRef.current) {
            setIsTeamVisible(true);
          }

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);
    if (teamRef.current) observer.observe(teamRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (valuesRef.current) observer.unobserve(valuesRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section with Particles */}
      <section className="relative py-28 bg-gradient-to-b from-agtech-blue to-agtech-purple text-white overflow-hidden">
        {/* Animated particles for background effect */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 20 + 5,
                height: Math.random() * 20 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100 - 50],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div 
          ref={headerRef}
          className="container mx-auto px-4 md:px-6 text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Chi Siamo
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
              Conoscici meglio: la nostra storia, i nostri valori e la nostra missione.
            </p>
          </motion.div>
        </div>
        
        {/* Replacing wave SVG with gradient transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* La Nostra Storia */}
      <section 
        ref={contentRef}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isContentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-8 relative inline-block">
                La Nostra Storia
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-agtech-blue rounded-full"></span>
              </h2>
              
              <div className="text-lg text-gray-700 space-y-6">
                <p>
                  AgTechDesigne è un team di esperti sviluppatori e consulenti IT appassionati di innovazione tecnologica. Fondata con l'obiettivo di rendere accessibili le tecnologie più avanzate alle aziende di ogni dimensione, la nostra società combina competenze tecniche di alto livello con una profonda comprensione delle esigenze aziendali.
                </p>
                <p>
                  Nati dalla passione per la tecnologia e l'innovazione, abbiamo deciso di mettere le nostre competenze al servizio delle imprese che desiderano affrontare la trasformazione digitale con soluzioni su misura, efficaci e all'avanguardia.
                </p>
                <p>
                  Il nostro team multidisciplinare vanta esperienza in diversi settori tecnologici, dall'intelligenza artificiale allo sviluppo software, dall'automazione dei dati al computing distribuito. Questa varietà di competenze ci permette di affrontare progetti complessi con un approccio integrato e completo.
                </p>
                <p>
                  Collaboriamo a stretto contatto con i nostri clienti, ascoltando le loro esigenze e progettando soluzioni personalizzate che rispondano in modo puntuale alle loro specifiche necessità. Il nostro obiettivo è costruire partnership durature basate sulla fiducia e sui risultati concreti.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* I Nostri Valori */}
      <section 
        ref={valuesRef}
        className="py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-serif font-bold mb-6 relative inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              I Nostri Valori
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-agtech-blue rounded-full"></span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I principi che guidano il nostro lavoro e definiscono chi siamo.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isValuesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-agtech-blue/10 p-4 rounded-full mb-6">
                <Lightbulb className="w-10 h-10 text-agtech-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovazione Continua</h3>
              <p className="text-gray-700">
                Ci impegniamo a rimanere all'avanguardia nel campo tecnologico, studiando e implementando costantemente nuove soluzioni che possano apportare valore ai nostri clienti.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isValuesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-agtech-purple/10 p-4 rounded-full mb-6">
                <Shield className="w-10 h-10 text-agtech-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Qualità e Affidabilità</h3>
              <p className="text-gray-700">
                Ogni soluzione che sviluppiamo risponde ai più alti standard di qualità, sicurezza e prestazioni. La fiducia dei nostri clienti è il nostro bene più prezioso.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isValuesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-agtech-green/10 p-4 rounded-full mb-6">
                <Target className="w-10 h-10 text-agtech-green" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Trasparenza e Collaborazione</h3>
              <p className="text-gray-700">
                Crediamo nel potere della collaborazione aperta e trasparente. Lavoriamo a stretto contatto con i nostri clienti, condividendo conoscenze e obiettivi per raggiungere insieme i migliori risultati.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* La Nostra Missione */}
      <section 
        ref={teamRef}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={isTeamVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-agtech-blue/20 rounded-lg transform -rotate-2 z-0"></div>
                <img 
                  src="/lovable-uploads/05117b04-9b40-4413-bcca-0c6d768d3e0e.png" 
                  alt="AgTechDesigne Team" 
                  className="relative z-10 rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={isTeamVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6 relative inline-block">
                La Nostra Missione
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-agtech-blue rounded-full"></span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                La nostra missione è democratizzare l'accesso alle tecnologie avanzate, rendendo l'innovazione digitale disponibile a imprese di ogni dimensione. Crediamo che ogni azienda meriti soluzioni tecnologiche su misura che possano realmente fare la differenza nel proprio settore.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Ci proponiamo di essere un partner tecnologico affidabile e lungimirante, in grado di guidare i nostri clienti attraverso il processo di trasformazione digitale con competenza, trasparenza e un approccio orientato ai risultati.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/servizi" className="bg-gradient-to-r from-agtech-blue to-agtech-purple hover:from-agtech-blue/90 hover:to-agtech-purple/90 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                  Scopri i nostri servizi
                </Link>
                <Link to="/contatti" className="border border-agtech-blue text-agtech-blue hover:bg-agtech-blue/5 font-medium px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                  Contattaci
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-agtech-blue to-agtech-purple text-white relative">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Pronti a innovare insieme?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Scopri come possiamo aiutarti a trasformare la tua visione in realtà con soluzioni tecnologiche all'avanguardia.
            </p>
            <Link to="/contatti" className="bg-white text-agtech-blue hover:bg-opacity-90 font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2">
              Parliamo del tuo progetto
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 relative inline-block">
                Cosa Dicono di Noi
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-agtech-blue rounded-full"></span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Le opinioni dei nostri clienti sono la testimonianza più sincera del nostro impegno per l'eccellenza.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "AgTechDesigne ha trasformato completamente il nostro approccio alla gestione dei dati. La loro soluzione personalizzata ha aumentato la nostra efficienza del 40%.",
                  author: "Marco Bianchi",
                  role: "CTO, TechInnovate"
                },
                {
                  quote: "Collaborare con AgTechDesigne è stata un'esperienza straordinaria. Il team è altamente professionale e sempre disponibile a trovare soluzioni innovative.",
                  author: "Laura Rossi",
                  role: "CEO, Digital Solutions"
                },
                {
                  quote: "Grazie ad AgTechDesigne abbiamo implementato un sistema di intelligenza artificiale che ha rivoluzionato il nostro servizio clienti. Risultati eccezionali in tempi record.",
                  author: "Giovanni Verdi",
                  role: "Direttore IT, Global Services"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <svg className="w-10 h-10 text-agtech-blue/30" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8c-2.2 0-4 1.8-4 4v10h10V12h-6c0-1.1 0.9-2 2-2h2V8h-4zm12 0c-2.2 0-4 1.8-4 4v10h10V12h-6c0-1.1 0.9-2 2-2h2V8h-4z"/>
                      </svg>
                    </div>
                    <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 relative inline-block">
              I Nostri Partner
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-agtech-blue rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Collaboriamo con aziende leader per offrire soluzioni tecnologiche integrate e all'avanguardia.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-80">
            {/* Placeholder for partner logos */}
            {[1, 2, 3, 4, 5].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-4"
              >
                <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-400 font-medium">Partner {item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

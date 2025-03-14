
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Globe, Database, Layers, GitBranch } from "lucide-react";

const SoftwareDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-agtech-purple to-agtech-blue py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('/agtech-uploads/photo-1498050108023-c5249f4df085.jpeg')] bg-cover bg-center bg-no-repeat filter blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Sviluppo Software Personalizzato
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Software su misura sviluppato con tecnologie all'avanguardia
              per soddisfare le specifiche esigenze del tuo business.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1 space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold">
              Soluzioni Software su Misura
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Il nostro team di sviluppatori esperti progetta e implementa soluzioni software 
              personalizzate utilizzando un'ampia gamma di tecnologie e linguaggi di programmazione, 
              tra cui Python, JavaScript, C++, Rust e Go.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Che si tratti di applicazioni web, software desktop, sistemi embedded o API per 
              l'integrazione di sistemi, sviluppiamo prodotti robusti, scalabili e facili da mantenere 
              che rispondono perfettamente alle vostre esigenze operative.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <img
              src="/agtech-uploads/photo-1461749280684-dccba630e2f6.jpeg"
              alt="Software Development"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Technologies */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">
              Le nostre competenze
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Utilizziamo tecnologie moderne e consolidate per sviluppare software di qualità superiore.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Sviluppo Web",
                description:
                  "Applicazioni web responsive, progressive web apps (PWA) e siti web ad alte prestazioni con React, Vue, Angular e Node.js."
              },
              {
                icon: Code,
                title: "Desktop & Mobile",
                description:
                  "Applicazioni desktop multipiattaforma e app mobili native utilizzando tecnologie come Electron, React Native e Flutter."
              },
              {
                icon: Database,
                title: "Database & Backend",
                description:
                  "Architetture backend robuste con Python, Go o Node.js e gestione database ottimizzata con SQL e NoSQL."
              },
              {
                icon: Layers,
                title: "System Integration",
                description:
                  "Integrazione di sistemi esistenti, sviluppo API e middleware per connettere diverse piattaforme e servizi."
              },
              {
                icon: GitBranch,
                title: "DevOps & CI/CD",
                description:
                  "Implementazione di pipeline di integrazione e distribuzione continua, containerizzazione e orchestrazione con Docker e Kubernetes."
              },
              {
                icon: Code,
                title: "Low-Level & Embedded",
                description:
                  "Sviluppo di software per sistemi embedded, IoT e applicazioni che richiedono elevate prestazioni con C++, Rust e Go."
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass-card p-6 hover:bg-agtech-purple/5 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <tech.icon className="w-8 h-8 mr-3 text-agtech-purple" />
                  <h3 className="text-xl font-bold">{tech.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">
            I nostri progetti
          </h2>

          <div className="space-y-16">
            {/* Project 1 */}
            <div className="bg-gray-50 dark:bg-gray-800/30 p-8 rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <img
                    src="/agtech-uploads/photo-1486312338219-ce68d2c6f44d.jpeg"
                    alt="Web Platform"
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                </div>
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-serif font-bold mb-4">Piattaforma di gestione aziendale</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Abbiamo sviluppato una piattaforma web completa per una media impresa del settore
                    manifatturiero, integrando gestione ordini, inventario, CRM e reportistica.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-agtech-blue/10 text-agtech-blue rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">PostgreSQL</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Docker</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-50 dark:bg-gray-800/30 p-8 rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-serif font-bold mb-4">Sistema IoT per smart building</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Progettazione e implementazione di un sistema completo per il monitoraggio
                    energetico e ambientale di edifici commerciali, con dashboard di visualizzazione
                    dati e algoritmi di ottimizzazione.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Vue.js</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">MQTT</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">TensorFlow</span>
                  </div>
                </div>
                <div className="lg:col-span-1">
                  <img
                    src="/agtech-uploads/photo-1581091226825-a6a2a5aee158.jpeg"
                    alt="IoT System"
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-agtech-purple to-agtech-blue py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              Hai un'idea per un software personalizzato?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Contattaci per discutere del tuo progetto e scoprire come possiamo aiutarti
              a trasformare la tua idea in realtà.
            </p>
            <a
              href="/contatti"
              className="bg-white text-agtech-purple hover:bg-opacity-90 font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] inline-block"
            >
              Richiedi una consulenza
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;

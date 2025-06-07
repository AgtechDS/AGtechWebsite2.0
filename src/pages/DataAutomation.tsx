
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Database, BarChart, FileSpreadsheet, RefreshCw, LineChart, Zap, Brain, ArrowRight, Shield, Cpu } from "lucide-react";
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";

const DataAutomation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section Neural */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-teal-900/20 text-white overflow-hidden">
        {/* Neural Network Background */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={25}
            variant="data"
            className="opacity-60"
          />
        </div>

        {/* Gradient overlay per migliore leggibilità */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80 z-10"></div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Neural badge */}
            <motion.div
              className="inline-flex items-center gap-3 neural-card px-8 py-4 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Database className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-400 font-cyber text-lg tracking-wider">DATA NEURAL</span>
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-cyber font-black text-white mb-8 leading-tight">
              DATA <span className="hologram-text">AUTOMATION</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Soluzioni <span className="text-cyan-400 font-semibold">Excel personalizzate</span> e
              <span className="text-green-400 font-semibold">automazioni avanzate</span> per trasformare
              l'analisi e la gestione dei <span className="text-purple-400 font-semibold">dati aziendali</span>
              in insights intelligenti.
            </p>
          </motion.div>
        </div>

        {/* Smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
      </section>

      {/* Main Content Neural */}
      <section className="py-32 bg-gray-900 relative -mt-16">
        {/* Background neural network */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={15}
            variant="software"
            className="opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Section con Neural Frame */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              {/* Neural frame effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

              <div className="relative neural-card p-4 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-500">
                <img
                  src="/agtech-uploads/photo-1581090464777-f3220bbe1b8b.jpeg"
                  alt="Data Automation Neural"
                  className="rounded-lg w-full h-auto object-cover"
                />

                {/* Data overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/10 via-transparent to-teal-600/10 rounded-lg"></div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Neural badge */}
              <motion.div
                className="inline-flex items-center gap-2 neural-card px-6 py-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <BarChart className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-cyber text-sm tracking-wider">DATA TRANSFORMATION</span>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-cyber font-bold text-white">
                TRASFORMA I TUOI <span className="hologram-text">DATI</span> IN VALORE
              </h2>

              <div className="space-y-6">
                <motion.div
                  className="neural-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Molte aziende possiedono enormi quantità di dati ma faticano a sfruttarli efficacemente.
                    Le nostre <span className="text-cyan-400 font-semibold">soluzioni di automazione dati</span> permettono di
                    raccogliere, elaborare e visualizzare i dati in modo automatico, fornendo
                    <span className="text-green-400 font-semibold"> insight preziosi</span> per decisioni più informate.
                  </p>
                </motion.div>

                <motion.div
                  className="neural-card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Siamo specializzati nello sviluppo di <span className="text-cyan-400 font-semibold">soluzioni Excel avanzate</span>,
                    <span className="text-purple-400 font-semibold">macro VBA personalizzate</span> e
                    <span className="text-green-400 font-semibold">dashboard interattive</span> che automatizzano processi ripetitivi,
                    riducono gli errori e liberano tempo prezioso per attività a maggior valore aggiunto.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Neural Services Section */}
      <section className="py-32 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background neural network */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={18}
            variant="data"
            className="opacity-40"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-20"
          >
            {/* Neural badge */}
            <motion.div
              className="inline-flex items-center gap-2 neural-card px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-cyber text-sm tracking-wider">NEURAL SERVICES</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-8">
              SERVIZI DI <span className="hologram-text">AUTOMAZIONE</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Offriamo un'ampia gamma di <span className="text-cyan-400 font-semibold">soluzioni neurali</span> per automatizzare
              la gestione e l'<span className="text-green-400 font-semibold">analisi dei dati aziendali</span> con
              <span className="text-purple-400 font-semibold">intelligenza avanzata</span>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: FileSpreadsheet,
                title: "MACRO & VBA NEURAL",
                description: "Creazione di macro personalizzate e soluzioni VBA per automatizzare attività ripetitive, generare report e implementare logiche di business complesse in Excel.",
                color: "text-cyan-400"
              },
              {
                icon: BarChart,
                title: "DASHBOARD INTERATTIVE",
                description: "Progettazione di dashboard visivamente accattivanti per monitorare KPI, analizzare trend e visualizzare dati aziendali in modo chiaro ed efficace.",
                color: "text-green-400"
              },
              {
                icon: Database,
                title: "GESTIONE DATI AVANZATA",
                description: "Implementazione di sistemi di gestione dati con funzionalità di convalida, analisi statistica e integrazione con database esterni o sistemi ERP/CRM.",
                color: "text-purple-400"
              },
              {
                icon: RefreshCw,
                title: "AUTOMAZIONE PROCESSI",
                description: "Creazione di flussi di lavoro automatizzati per estrazione dati, elaborazione e distribuzione di report, riducendo drasticamente tempo e errori.",
                color: "text-cyan-400"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="neural-card p-8 group hover:scale-105 transition-all duration-500 hover:shadow-glow-cyan"
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 neural-card flex items-center justify-center mr-6 group-hover:shadow-glow-cyan transition-all duration-300">
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className={`text-xl font-cyber font-bold ${service.color}`}>{service.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neural Case Studies Section */}
      <section className="py-32 bg-gradient-to-br from-gray-800 via-teal-900/20 to-gray-900 relative overflow-hidden">
        {/* Background neural network */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={20}
            variant="data"
            className="opacity-35"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {/* Neural badge */}
            <motion.div
              className="inline-flex items-center gap-2 neural-card px-6 py-3 mb-8 mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <Shield className="w-5 h-5 text-teal-400" />
              <span className="text-teal-400 font-cyber text-sm tracking-wider">SUCCESS STORIES</span>
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-cyber font-bold text-white mb-16 text-center">
              NEURAL <span className="hologram-text">CASE STUDIES</span>
            </h2>

            <div className="space-y-20">
              {/* Case Study 1 - Financial Dashboard */}
              <motion.div
                className="neural-card p-8 border border-teal-400/30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                  <div className="lg:col-span-2 relative group">
                    {/* Neural frame effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                    <div className="relative neural-card p-3 border border-teal-400/30 group-hover:border-teal-400/60 transition-all duration-500">
                      <img
                        src="/agtech-uploads/photo-1605810230434-7631ac76ec81.jpeg"
                        alt="Financial Dashboard Neural"
                        className="rounded-lg w-full h-auto"
                      />

                      {/* Data overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/10 via-transparent to-cyan-600/10 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-2xl md:text-3xl font-cyber font-bold text-teal-400 mb-6">
                      DASHBOARD FINANZIARIA RETAIL
                    </h3>
                    <div className="space-y-4">
                      <motion.div
                        className="neural-card p-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                      >
                        <p className="text-lg text-gray-300 leading-relaxed">
                          Abbiamo sviluppato una <span className="text-teal-400 font-semibold">dashboard finanziaria interattiva</span> per un gruppo retail con
                          <span className="text-cyan-400 font-semibold"> 35 punti vendita</span>. Il sistema raccoglie automaticamente dati di vendita giornalieri,
                          li analizza e genera <span className="text-green-400 font-semibold">report personalizzati</span> per il management.
                        </p>
                      </motion.div>

                      <motion.div
                        className="neural-card p-4 border border-green-400/30"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                      >
                        <p className="text-lg text-gray-300 leading-relaxed">
                          <span className="text-green-400 font-cyber font-bold">RISULTATI NEURAL:</span> Riduzione del
                          <span className="text-green-400 font-semibold"> 70%</span> del tempo dedicato all'analisi dati,
                          <span className="text-cyan-400 font-semibold">reportistica in tempo reale</span> e aumento del
                          <span className="text-teal-400 font-semibold">15%</span> nelle performance di vendita grazie a decisioni più informate.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Case Study 2 - HR Automation */}
              <motion.div
                className="neural-card p-8 border border-cyan-400/30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                  <div className="lg:col-span-3">
                    <h3 className="text-2xl md:text-3xl font-cyber font-bold text-cyan-400 mb-6">
                      AUTOMAZIONE PROCESSI HR
                    </h3>
                    <div className="space-y-4">
                      <motion.div
                        className="neural-card p-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                      >
                        <p className="text-lg text-gray-300 leading-relaxed">
                          Per un'azienda con <span className="text-cyan-400 font-semibold">200+ dipendenti</span>, abbiamo automatizzato i processi HR creando un
                          <span className="text-purple-400 font-semibold"> sistema integrato</span> in Excel per la gestione di ferie, permessi,
                          <span className="text-green-400 font-semibold">valutazioni delle performance</span> e reportistica avanzata.
                        </p>
                      </motion.div>

                      <motion.div
                        className="neural-card p-4 border border-green-400/30"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.9 }}
                      >
                        <p className="text-lg text-gray-300 leading-relaxed">
                          <span className="text-green-400 font-cyber font-bold">RISULTATI NEURAL:</span> Riduzione degli errori di inserimento dati dell'
                          <span className="text-green-400 font-semibold">85%</span>, risparmio di
                          <span className="text-cyan-400 font-semibold">20+ ore settimanali</span> per il team HR e miglioramento della
                          <span className="text-purple-400 font-semibold">soddisfazione dei dipendenti</span> grazie a processi più efficienti.
                        </p>
                      </motion.div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 relative group">
                    {/* Neural frame effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                    <div className="relative neural-card p-3 border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-500">
                      <img
                        src="/agtech-uploads/photo-1519389950473-47ba0277781c.jpeg"
                        alt="HR Automation Neural"
                        className="rounded-lg w-full h-auto"
                      />

                      {/* HR overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/10 via-transparent to-blue-600/10 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neural Data Analysis Section */}
      <section className="py-32 bg-gray-900 relative overflow-hidden">
        {/* Background neural network */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={12}
            variant="ai"
            className="opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="neural-card p-12 border border-green-400/30"
          >
            <div className="text-center mb-12">
              {/* Neural badge */}
              <motion.div
                className="inline-flex items-center gap-2 neural-card px-6 py-3 mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <Brain className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-cyber text-sm tracking-wider">NEURAL ANALYTICS</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </motion.div>

              <div className="w-20 h-20 neural-card flex items-center justify-center mx-auto mb-6">
                <LineChart className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-3xl md:text-4xl font-cyber font-bold text-white mb-6">
                ANALISI DATI <span className="hologram-text">AVANZATA</span>
              </h3>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Le nostre soluzioni non si limitano all'automazione, ma includono anche
                <span className="text-green-400 font-semibold"> analisi dati avanzate</span> per scoprire
                <span className="text-cyan-400 font-semibold">trend nascosti</span> e
                <span className="text-purple-400 font-semibold">opportunità strategiche</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Analisi predittiva", color: "text-green-400", icon: Brain },
                { name: "Segmentazione clienti", color: "text-cyan-400", icon: Database },
                { name: "Forecasting", color: "text-purple-400", icon: BarChart },
                { name: "Ottimizzazione inventario", color: "text-green-400", icon: RefreshCw },
                { name: "Analisi costi", color: "text-cyan-400", icon: LineChart },
                { name: "ROI marketing", color: "text-purple-400", icon: Zap }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="neural-card p-6 text-center group hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 neural-card flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow-green transition-all duration-300">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <p className={`font-cyber font-bold ${item.color} text-sm`}>{item.name.toUpperCase()}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neural CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-teal-900/20 text-white relative overflow-hidden">
        {/* Advanced Neural Background */}
        <div className="absolute inset-0 z-0">
          <NeuralNetworkBackground
            nodeCount={25}
            variant="data"
            className="opacity-50"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/80 z-10"></div>

        <div className="container mx-auto px-4 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Neural badge */}
            <motion.div
              className="inline-flex items-center gap-3 neural-card px-8 py-4 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Database className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-400 font-cyber text-lg tracking-wider">DATA OPTIMIZATION</span>
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-cyber font-black text-white mb-8">
              OTTIMIZZA I TUOI <span className="hologram-text">PROCESSI</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Contattaci oggi per scoprire come le nostre <span className="text-cyan-400 font-semibold">soluzioni di automazione dati</span>
              possono trasformare il modo in cui la tua azienda utilizza i <span className="text-green-400 font-semibold">dati intelligenti</span>
              per <span className="text-purple-400 font-semibold">decisioni strategiche</span>.
            </p>

            {/* Neural action button */}
            <motion.a
              href="/contatti"
              className="cyber-button text-lg px-12 py-4 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                RICHIEDI DEMO GRATUITA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.a>

            {/* Neural stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { number: "70%", label: "TIME SAVED", color: "text-cyan-400" },
                { number: "85%", label: "ERROR REDUCTION", color: "text-green-400" },
                { number: "∞", label: "SCALABILITY", color: "text-purple-400" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-cyber font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-gray-400 text-sm font-cyber tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DataAutomation;

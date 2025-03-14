
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Database, BarChart, FileSpreadsheet, RefreshCw, LineChart } from "lucide-react";

const DataAutomation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-agtech-green to-agtech-blue py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('/agtech-uploads/photo-1460925895917-afdab827c52f.jpeg')] bg-cover bg-center bg-no-repeat filter blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Automazione Dati & Excel Solutions
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Soluzioni Excel personalizzate e automazioni per migliorare 
              l'analisi e la gestione dei dati aziendali.
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
          >
            <img
              src="/agtech-uploads/photo-1581090464777-f3220bbe1b8b.jpeg"
              alt="Data Automation"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold">
              Trasforma i tuoi dati in valore
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Molte aziende possiedono enormi quantità di dati ma faticano a sfruttarli 
              efficacemente. Le nostre soluzioni di automazione dati permettono di raccogliere, 
              elaborare e visualizzare i dati in modo automatico, fornendo insight preziosi 
              per decisioni più informate.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Siamo specializzati nello sviluppo di soluzioni Excel avanzate, macro VBA personalizzate 
              e dashboard interattive che automatizzano processi ripetitivi, riducono gli errori 
              e liberano tempo prezioso per attività a maggior valore aggiunto.
            </p>
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">
              I nostri servizi di automazione
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Offriamo un'ampia gamma di soluzioni per automatizzare la gestione 
              e l'analisi dei dati aziendali.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: FileSpreadsheet,
                title: "Sviluppo Macro e VBA",
                description:
                  "Creazione di macro personalizzate e soluzioni VBA per automatizzare attività ripetitive, generare report e implementare logiche di business complesse in Excel."
              },
              {
                icon: BarChart,
                title: "Dashboard Interattive",
                description:
                  "Progettazione di dashboard visivamente accattivanti per monitorare KPI, analizzare trend e visualizzare dati aziendali in modo chiaro ed efficace."
              },
              {
                icon: Database,
                title: "Gestione Dati Avanzata",
                description:
                  "Implementazione di sistemi di gestione dati con funzionalità di convalida, analisi statistica e integrazione con database esterni o sistemi ERP/CRM."
              },
              {
                icon: RefreshCw,
                title: "Automazione Processi",
                description:
                  "Creazione di flussi di lavoro automatizzati per estrazione dati, elaborazione e distribuzione di report, riducendo drasticamente tempo e errori."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass-card p-6 hover:bg-agtech-green/5 transition-colors duration-300"
              >
                <div className="flex items-center mb-6">
                  <service.icon className="w-10 h-10 text-agtech-green mr-4" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">
            Case Studies
          </h2>

          <div className="space-y-16">
            {/* Case Study 1 */}
            <div className="bg-gray-50 dark:bg-gray-800/30 p-8 rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2">
                  <img
                    src="/agtech-uploads/photo-1605810230434-7631ac76ec81.jpeg"
                    alt="Financial Dashboard"
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                </div>
                <div className="lg:col-span-3">
                  <h3 className="text-2xl font-serif font-bold mb-4">Dashboard finanziaria per gruppo retail</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Abbiamo sviluppato una dashboard finanziaria interattiva per un gruppo retail con 35 punti vendita. 
                    Il sistema raccoglie automaticamente dati di vendita giornalieri, li analizza e genera report 
                    personalizzati per il management.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    <strong>Risultati:</strong> Riduzione del 70% del tempo dedicato all'analisi dati, reportistica 
                    in tempo reale e aumento del 15% nelle performance di vendita grazie a decisioni più informate.
                  </p>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gray-50 dark:bg-gray-800/30 p-8 rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <h3 className="text-2xl font-serif font-bold mb-4">Automazione processi HR</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Per un'azienda con 200+ dipendenti, abbiamo automatizzato i processi HR creando un sistema 
                    integrato in Excel per la gestione di ferie, permessi, valutazioni delle performance e reportistica.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    <strong>Risultati:</strong> Riduzione degli errori di inserimento dati dell'85%, risparmio di 
                    20+ ore settimanali per il team HR e miglioramento della soddisfazione dei dipendenti grazie 
                    a processi più efficienti.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <img
                    src="/agtech-uploads/photo-1519389950473-47ba0277781c.jpeg"
                    alt="HR Automation"
                    className="rounded-lg w-full h-auto shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Data Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-24 p-8 border border-gray-200 dark:border-gray-700 rounded-lg"
        >
          <div className="text-center mb-8">
            <LineChart className="w-16 h-16 mx-auto text-agtech-green mb-4" />
            <h3 className="text-2xl font-serif font-bold">Analisi dati avanzata</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Le nostre soluzioni non si limitano all'automazione, ma includono anche analisi 
              dati avanzate per scoprire trend nascosti e opportunità.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {["Analisi predittiva", "Segmentazione clienti", "Forecasting", "Ottimizzazione inventario", "Analisi costi", "ROI marketing"].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-agtech-green to-agtech-blue py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold text-white mb-6">
              Ottimizza i tuoi processi aziendali
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Contattaci oggi per scoprire come le nostre soluzioni di automazione dati 
              possono trasformare il modo in cui la tua azienda utilizza i dati.
            </p>
            <a
              href="/contatti"
              className="bg-white text-agtech-green hover:bg-opacity-90 font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] inline-block"
            >
              Richiedi una demo gratuita
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DataAutomation;

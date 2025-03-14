"use client";

import { useState, ReactNode, useRef } from "react";
import { CheckCircle2, Mail, Phone, MapPin, Send, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact() {
  // State management remains the same
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handlers remain the same
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulazione dell'invio del messaggio (sostituire con un'API reale se necessario)
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Messaggio inviato!",
        description: (
          <div className="flex items-center text-green-600">
            <CheckCircle2 className="h-5 w-5 mr-2" />
            <span>Ti risponderemo al più presto.</span>
          </div>
        ) as ReactNode,
      });

      // Resetta il form dopo l'invio
      setFormData({ name: "", email: "", subject: "", message: "" });
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 1000);
  };

  return (
    <div className="pt-16">
      {/* Enhanced Hero Section with Particles */}
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
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Contattaci
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90">
              Siamo sempre disponibili per rispondere alle tue domande e discutere dei tuoi progetti.
            </p>
          </motion.div>
        </div>
        
        {/* Removing the wave SVG and replacing with a subtle gradient transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Redesigned Form and Contact Info Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info Card - Now on the left */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-xl p-8 h-full border border-gray-100"
                >
                  <h2 className="text-3xl font-serif font-bold mb-8 relative">
                    Contatti
                    <span className="absolute bottom-0 left-0 w-16 h-1 bg-agtech-blue rounded-full"></span>
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-agtech-blue/10 p-3 rounded-full flex-shrink-0">
                        <Mail className="w-6 h-6 text-agtech-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Email</h3>
                        <a href="mailto:agtechdesigne@gmail.com" className="text-gray-600 hover:text-agtech-blue transition-colors">
                          agtechdesigne@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-agtech-purple/10 p-3 rounded-full flex-shrink-0">
                        <Phone className="w-6 h-6 text-agtech-purple" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Social Media</h3>
                        <div className="mt-2 space-y-2">
                          <a href="https://instagram.com/agtechdesigne" target="_blank" rel="noopener noreferrer" 
                             className="flex items-center gap-2 text-gray-600 hover:text-agtech-purple transition-colors">
                            <Instagram className="w-4 h-4" />
                            <span>@agtechdesigne</span>
                          </a>
                          <a href="https://facebook.com/Agtechdesigne" target="_blank" rel="noopener noreferrer"
                             className="flex items-center gap-2 text-gray-600 hover:text-agtech-purple transition-colors">
                            <Facebook className="w-4 h-4" />
                            <span>Agtechdesigne</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-agtech-green/10 p-3 rounded-full flex-shrink-0">
                        <MapPin className="w-6 h-6 text-agtech-green" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Orari</h3>
                        <p className="text-gray-600">Lunedì - Venerdì: 9:00 - 18:00</p>
                        <p className="text-gray-600">Sabato - Domenica: Chiuso</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Form - Now on the right and wider */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
                >
                  <h2 className="text-3xl font-serif font-bold mb-8 relative">
                    Inviaci un messaggio
                    <span className="absolute bottom-0 left-0 w-16 h-1 bg-agtech-blue rounded-full"></span>
                  </h2>
                  
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Nome completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agtech-blue focus:border-transparent outline-none transition bg-gray-50"
                          placeholder="Il tuo nome"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agtech-blue focus:border-transparent outline-none transition bg-gray-50"
                          placeholder="La tua email"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Oggetto *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agtech-blue focus:border-transparent outline-none transition bg-gray-50"
                        placeholder="Oggetto del messaggio"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Messaggio *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-agtech-blue focus:border-transparent outline-none transition bg-gray-50"
                        placeholder="Il tuo messaggio..."
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-agtech-blue to-agtech-purple hover:from-agtech-blue/90 hover:to-agtech-purple/90 text-white font-medium px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 w-full md:w-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Invio in corso...
                          </>
                        ) : (
                          <>
                            Invia messaggio
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced CTA Section with Background Image */}
      <section className="py-24 bg-gradient-to-r from-agtech-blue to-agtech-purple text-white relative">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Pronti a trasformare il tuo business?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Contattaci oggi per scoprire come possiamo aiutarti a raggiungere i tuoi obiettivi tecnologici.
            </p>
            <a href="/servizi" className="bg-white text-agtech-blue hover:bg-opacity-90 font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
              Scopri i nostri servizi
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Domande Frequenti</h2>
              <p className="text-lg text-gray-600">
                Ecco alcune risposte alle domande più comuni. Non trovi quello che cerchi? Contattaci direttamente.
              </p>
            </motion.div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Quali servizi offrite?",
                  answer: "Offriamo una vasta gamma di servizi tecnologici, tra cui sviluppo software, AI computing, automazione dei dati e consulenza IT. Visita la nostra pagina dei servizi per maggiori dettagli."
                },
                {
                  question: "Quanto tempo ci vuole per completare un progetto?",
                  answer: "I tempi di completamento variano in base alla complessità del progetto. Dopo una consultazione iniziale, saremo in grado di fornirti una stima più precisa. Ci impegniamo a rispettare le scadenze concordate."
                },
                {
                  question: "Lavorate con aziende di tutte le dimensioni?",
                  answer: "Sì, collaboriamo con aziende di ogni dimensione, dalle startup alle grandi imprese. Adattiamo i nostri servizi alle esigenze specifiche di ogni cliente."
                },
                {
                  question: "Come iniziare una collaborazione con voi?",
                  answer: "Puoi contattarci tramite il modulo di contatto su questa pagina, inviarci un'email o seguirci sui social media. Ti risponderemo il prima possibile per discutere del tuo progetto."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                >
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map or Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">La Nostra Presenza Digitale</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Siamo un'azienda digitale che opera in tutta Italia e oltre. Seguici sui social per rimanere aggiornato sulle nostre attività.
              </p>
            </motion.div>
            
            <div className="bg-gray-100 rounded-2xl p-8 md:p-12 shadow-inner">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-xl shadow-md"
                >
                  <div className="w-16 h-16 bg-agtech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Instagram className="w-8 h-8 text-agtech-blue" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Instagram</h3>
                  <p className="text-gray-600 mb-4">Seguici per contenuti visivi e aggiornamenti quotidiani</p>
                  <a 
                    href="https://instagram.com/agtechdesigne" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-agtech-blue hover:text-agtech-purple transition-colors font-medium"
                  >
                    @agtechdesigne
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-xl shadow-md"
                >
                  <div className="w-16 h-16 bg-agtech-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Facebook className="w-8 h-8 text-agtech-purple" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Facebook</h3>
                  <p className="text-gray-600 mb-4">Connettiti con noi per notizie e aggiornamenti</p>
                  <a 
                    href="https://facebook.com/Agtechdesigne" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-agtech-purple hover:text-agtech-blue transition-colors font-medium"
                  >
                    Agtechdesigne
                  </a>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white rounded-xl shadow-md"
                >
                  <div className="w-16 h-16 bg-agtech-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-agtech-green" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Email</h3>
                  <p className="text-gray-600 mb-4">Contattaci direttamente per richieste e informazioni</p>
                  <a 
                    href="mailto:agtechdesigne@gmail.com" 
                    className="text-agtech-green hover:text-agtech-blue transition-colors font-medium"
                  >
                    agtechdesigne@gmail.com
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

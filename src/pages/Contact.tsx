"use client";

import { useState, ReactNode, useRef } from "react";
import { CheckCircle2, Mail, Phone, MapPin, Send, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

export default function Contatto() {
  // Gestione dello stato
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    oggetto: "",
    messaggio: "",
  });

  // Gestori di eventi
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Invia il modulo tramite EmailJS
    if (formRef.current) {
      emailjs.sendForm(
        'service_agtech', // ID del servizio EmailJS
        'template_contact', // ID del template EmailJS
        formRef.current,
        'Ts44-OGlmsSUV73rR' // La tua chiave pubblica
      )
        .then((result) => {
          console.log('Email inviata con successo!', result.text);
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

          // Resetta il modulo dopo l'invio
          setFormData({ nome: "", email: "", oggetto: "", messaggio: "" });
          if (formRef.current) {
            formRef.current.reset();
          }
        }, (error) => {
          console.error('Errore nell\'invio dell\'email:', error.text);
          setIsSubmitting(false);
          toast({
            title: "Errore",
            description: "Si è verificato un errore nell'invio del messaggio. Riprova più tardi.",
            variant: "destructive",
          });
        });
    }
  };

  return (
    <div className="pt-16">
      {/* Sezione Hero migliorata con Particelle */}
      <section className="relative py-28 bg-gradient-to-b from-agtech-blue to-agtech-purple text-white overflow-hidden">
        {/* Particelle animate per effetto di sfondo */}
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

        {/* Rimuovere la wave SVG e sostituirla con una sottile transizione di gradiente */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Sezione modulo e informazioni di contatto */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Card delle informazioni di contatto - Ora a sinistra */}
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

              {/* Modulo - Ora a destra e più ampio */}
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
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                          Nome completo *
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agtech-blue"
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
                          required
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agtech-blue"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="oggetto" className="block text-sm font-medium text-gray-700 mb-1">
                        Oggetto *
                      </label>
                      <input
                        type="text"
                        id="oggetto"
                        name="oggetto"
                        value={formData.oggetto}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agtech-blue"
                      />
                    </div>

                    <div>
                      <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-1">
                        Messaggio *
                      </label>
                      <textarea
                        id="messaggio"
                        name="messaggio"
                        value={formData.messaggio}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agtech-blue"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white bg-agtech-blue hover:bg-agtech-darkblue transition-colors 
                          ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        {isSubmitting ? (
                          <div className="spinner-border animate-spin border-4 rounded-full border-t-4 border-white w-5 h-5" />
                        ) : (
                          <>
                            Invia <Send className="w-4 h-4" />
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
    </div>
  );
}

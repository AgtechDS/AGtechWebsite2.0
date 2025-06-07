import { useState, ReactNode, useRef } from "react";
import { CheckCircle2, Mail, Phone, MapPin, Send, Instagram, Facebook, MessageSquare, BrandTelegram, Zap, Shield, Cpu } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

// Definisci il tipo per formData
interface FormData {
  name: string;  // Changed from from_name to name
  email: string; // Changed from reply_to to email
  subject: string;
  message: string;
}

export default function Contatto() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",     // Changed from from_name to name
    email: "",    // Changed from reply_to to email
    subject: "",
    message: "",
  });

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
        'service_hbn7rog',    // ID del servizio EmailJS
        'template_oe1iwxq',   // Nuovo template ID
        formRef.current,
        'Ts44-OGlmsSUV73rR'   // ID dell'utente EmailJS
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
          setFormData({ name: "", email: "", subject: "", message: "" });
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
    <div className="min-h-screen">
      {/* Hero Section Futuristico */}
      <section className="relative py-32 cyber-container text-white overflow-hidden">
        {/* Neural Communication Network */}
        <div className="absolute inset-0 z-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`contact-node-${i}`}
              className="absolute"
              style={{
                left: `${15 + (i % 3) * 35}%`,
                top: `${20 + Math.floor(i / 3) * 25}%`,
              }}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              <div className="neural-card p-4 flex items-center justify-center">
                <Mail className="w-4 h-4 text-cyan-400" />
              </div>

              {/* Connection lines */}
              {i < 7 && (
                <motion.div
                  className="absolute top-1/2 left-full w-16 h-0.5 bg-gradient-to-r from-cyan-400/60 to-transparent"
                  animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Cyber grid pattern */}
        <div className="cyber-grid absolute inset-0 opacity-15"></div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-cyber font-black mb-8">
              <span className="hologram-text">CONTATTACI</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-cyan-300 leading-relaxed font-light">
              Siamo sempre <span className="text-green-400 font-semibold">online</span> e pronti a
              <span className="text-purple-400 font-semibold"> trasformare</span> le tue idee in
              <span className="text-cyan-400 font-semibold">realtà digitale</span>.
            </p>

            {/* Contact Methods */}
            <motion.div
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { icon: Mail, label: "EMAIL", desc: "INSTANT", color: "text-cyan-400" },
                { icon: MessageSquare, label: "CHAT", desc: "REAL-TIME", color: "text-green-400" },
                { icon: Send, label: "DIRECT", desc: "CONNECT", color: "text-purple-400" }
              ].map((method, index) => (
                <motion.div
                  key={index}
                  className="neural-card p-4 text-center group hover:scale-105 transition-transform duration-300"
                  whileHover={{ y: -5 }}
                >
                  <method.icon className={`w-6 h-6 ${method.color} mx-auto mb-2`} />
                  <div className={`text-sm font-cyber font-bold ${method.color}`}>{method.label}</div>
                  <div className="text-xs text-gray-400 font-mono">{method.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* Sezione modulo e informazioni di contatto */}
      <section className="py-24 bg-gray-900 relative -mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Card delle informazioni di contatto */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="neural-card p-8 h-full"
                >
                  <h2 className="text-3xl font-cyber font-bold mb-8 hologram-text">
                    CONTACT INFO
                  </h2>

                  <div className="space-y-8">
                    <motion.div
                      className="flex items-start gap-4 group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="neural-card p-3 flex-shrink-0 group-hover:shadow-glow-cyan transition-all duration-300">
                        <Mail className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-cyber font-bold text-lg text-white mb-1">EMAIL</h3>
                        <a href="mailto:agtechdesigne@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors font-mono text-sm">
                          agtechdesigne@gmail.com
                        </a>
                      </div>
                    </motion.div>

                    {/* WhatsApp Contact */}
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">WhatsApp</h3>
                        <a 
                          href="https://wa.me/393278028502" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-green-600 transition-colors"
                        >
                          +39 3278028502
                        </a>
                      </div>
                    </div>

                    {/* Telegram Contact */}
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                        <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.2647 2.42778C21.98 2.19091 21.6364 2.03567 21.2704 1.97858C20.9045 1.92149 20.5299 1.96469 20.1866 2.10278L2.26566 9.33778C1.88241 9.49102 1.55618 9.75478 1.33033 10.0956C1.10448 10.4364 0.989256 10.8377 0.999659 11.2458C1.01006 11.6538 1.14554 12.0478 1.38349 12.3752C1.62144 12.7026 1.95611 12.9475 2.34566 13.0788L5.72666 14.1968L7.86566 20.5788C7.88238 20.6288 7.90566 20.6748 7.92666 20.7208C7.93331 20.7359 7.94066 20.7498 7.94766 20.7648L8.50666 20.2078L12.4137 18.3943L14.5073 16.8328L15.2947 14.4108C15.3527 14.1263 15.4492 13.8788 15.5771 13.6848C15.7051 13.4908 15.8609 13.3482 16.0407 13.2676C16.2206 13.1869 16.4177 13.0704 16.6276 12.9318C16.8376 12.7933 17.0659 12.6234 17.2987 12.4278C17.5314 12.2322 17.7675 12.0258 18.0087 11.8268L22.2647 2.42778Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Telegram</h3>
                        <a
                          href="https://t.me/AgTechDesigne"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          @AgTechDesigne
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Modulo di contatto */}
              <div className="lg:col-span-2">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 gap-6 lg:grid-cols-2"
                  >
                    <div>
                      <label className="text-sm font-cyber font-bold text-cyan-400 tracking-wider" htmlFor="name">
                        NOME
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full px-4 py-3 text-sm neural-card border-0 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono"
                        placeholder="Il tuo nome..."
                      />
                    </div>

                    <div>
                      <label className="text-sm font-cyber font-bold text-cyan-400 tracking-wider" htmlFor="email">
                        EMAIL
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full px-4 py-3 text-sm neural-card border-0 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono"
                        placeholder="la.tua@email.com"
                      />
                    </div>
                  </motion.div>

                  <div>
                    <label className="text-sm font-medium text-gray-600" htmlFor="subject">
                      Oggetto
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agtech-blue"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600" htmlFor="message">
                      Messaggio
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-2 w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agtech-blue"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="cyber-button w-full py-4 text-lg disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Send className="w-5 h-5" />
                      {isSubmitting ? "INVIO IN CORSO..." : "INVIA MESSAGGIO"}
                      <Zap className="w-5 h-5" />
                    </div>
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

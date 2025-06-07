import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
  rating?: number;
  company?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  image,
  rating = 5,
  company,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Card principale */}
      <div className="relative glass-card p-8 h-full overflow-hidden group-hover:shadow-glow-blue transition-all duration-500">
        {/* Quote icon decorativa */}
        <motion.div
          className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
          whileHover={{ scale: 1.1, rotate: 15 }}
        >
          <Quote className="w-12 h-12 text-agtech-blue-500" />
        </motion.div>

        {/* Effetto di luce che segue il mouse */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-agtech-blue-500/20 to-agtech-purple-500/20" />

        {/* Rating stars */}
        <motion.div 
          className="flex gap-1 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.2 }}
          viewport={{ once: true }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ 
                delay: delay + 0.3 + i * 0.1,
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
            >
              <Star 
                className={`w-5 h-5 ${
                  i < rating 
                    ? 'text-yellow-400 fill-yellow-400' 
                    : 'text-gray-300'
                }`} 
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Contenuto testimonial */}
        <motion.blockquote 
          className="text-lg text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.4 }}
          viewport={{ once: true }}
        >
          "{content}"
        </motion.blockquote>

        {/* Profilo utente */}
        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.5 }}
          viewport={{ once: true }}
        >
          {/* Avatar con effetti */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-agtech-blue-500/30 relative z-10">
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Anello orbitale */}
            <motion.div
              className="absolute inset-0 border-2 border-agtech-green-400/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{ scale: 1.2 }}
            />
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-agtech-blue-500 to-agtech-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </motion.div>

          {/* Info utente */}
          <div className="flex-1">
            <motion.h4 
              className="text-lg font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: delay + 0.6 }}
              viewport={{ once: true }}
            >
              {name}
            </motion.h4>
            
            <motion.p 
              className="text-agtech-blue-600 dark:text-agtech-blue-400 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: delay + 0.7 }}
              viewport={{ once: true }}
            >
              {role}
            </motion.p>
            
            {company && (
              <motion.p 
                className="text-sm text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: delay + 0.8 }}
                viewport={{ once: true }}
              >
                {company}
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-agtech-blue-500 to-agtech-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

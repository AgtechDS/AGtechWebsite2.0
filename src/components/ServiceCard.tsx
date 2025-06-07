
import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { LucideIcon, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  hoverColor?: string;
  link: string;
  delay?: number;
  badge?: string;
  badgeColor?: string;
  features?: string[];
  gradient?: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  hoverColor = "hover:bg-agtech-purple/10",
  link,
  delay = 0,
  badge,
  badgeColor = "bg-agtech-blue/20 text-agtech-blue",
  features = [],
  gradient = "from-agtech-blue-500 to-agtech-purple-500"
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: delay * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      {/* Card principale con effetti avanzati */}
      <div className="relative h-full glass-card p-8 flex flex-col overflow-hidden group-hover:shadow-glow-blue transition-all duration-500">
        {/* Effetto di luce che segue il mouse */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mouseX.get() + 200}px ${mouseY.get() + 200}px, rgba(0,255,255,0.3) 0%, transparent 50%)`
          }}
        />

        {/* Badge con animazione */}
        {badge && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay * 0.1 + 0.3 }}
            className="absolute top-4 right-4"
          >
            <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full ${badgeColor}`}>
              <Sparkles className="w-3 h-3" />
              {badge}
            </span>
          </motion.div>
        )}

        {/* Icona con effetti 3D */}
        <motion.div
          className="relative mb-6 self-center"
          whileHover={{
            scale: 1.1,
            rotateY: 180,
            transition: { duration: 0.6 }
          }}
        >
          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-3d group-hover:shadow-glow-blue transition-all duration-300`}>
            <Icon className="w-10 h-10 text-white" />
          </div>

          {/* Anelli orbitali */}
          <motion.div
            className="absolute inset-0 border-2 border-agtech-blue-400/30 rounded-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ scale: 1.2 }}
          />
          <motion.div
            className="absolute inset-0 border border-agtech-purple-400/20 rounded-2xl"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ scale: 1.4 }}
          />
        </motion.div>

        {/* Contenuto */}
        <div className="flex-grow text-center">
          <h3 className="text-2xl font-serif font-bold mb-4 gradient-text">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{description}</p>

          {/* Features list */}
          {features.length > 0 && (
            <ul className="text-sm text-gray-500 dark:text-gray-400 mb-6 space-y-1">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: delay * 0.1 + 0.5 + index * 0.1 }}
                  className="flex items-center justify-center gap-2"
                >
                  <div className="w-1 h-1 bg-agtech-green-500 rounded-full" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA Button */}
        <Link to={link} className="group/btn relative overflow-hidden">
          <motion.div
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-agtech-blue-600 to-agtech-purple-600 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-glow-blue"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Scopri di più</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

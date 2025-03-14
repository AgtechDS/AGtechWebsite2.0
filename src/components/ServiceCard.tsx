
import { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
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
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  hoverColor = "hover:bg-agtech-purple/10",
  link,
  delay = 0,
  badge,
  badgeColor = "bg-agtech-blue/20 text-agtech-blue"
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className={`glass-card p-6 flex flex-col items-center text-center h-full ${hoverColor} transition-all duration-300 hover:shadow-lg`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {badge && (
        <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full mb-4 ${badgeColor}`}>
          {badge}
        </span>
      )}
      
      <div className="relative mb-4 p-4">
        <div className="absolute inset-0 bg-agtech-blue/10 rounded-full transform scale-0 transition-transform duration-300 ease-in-out" 
          style={{ transform: isHovered ? 'scale(1)' : 'scale(0)' }} 
        />
        <Icon className="w-10 h-10 text-agtech-blue relative z-10" />
      </div>
      <h3 className="text-xl font-serif font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
      <Link 
        to={link}
        className="text-agtech-blue hover:text-agtech-green flex items-center justify-center transition-colors duration-300 font-medium"
      >
        Scopri di più
        <svg 
          className={`ml-1 transform transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 3.33334L12.6667 8.00001L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;

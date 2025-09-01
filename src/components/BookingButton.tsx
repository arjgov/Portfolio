"use client";
import { motion } from "motion/react";
import { Calendar } from "lucide-react";

interface BookingButtonProps {
  onClick: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}

export const BookingButton = ({ 
  onClick, 
  variant = "primary", 
  size = "md", 
  className = "",
  children 
}: BookingButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 relative group";
  
  const variantClasses = {
    primary: "bg-white text-black hover:bg-gray-200 shadow-lg hover:shadow-xl",
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black"
  };
  
  const sizeClasses = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg"
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Calendar className="w-5 h-5 mr-2" />
      <span className="relative z-10">
        {children || "Book a Meeting"}
      </span>
    </motion.button>
  );
};

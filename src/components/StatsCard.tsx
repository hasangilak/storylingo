import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface TagColor {
  bg: string;
  text: string;
}

interface StatsCardProps {
  icon: ReactNode;
  iconBg: string;
  value: string;
  label: string;
  badge: string;
  tags: { text: string; color: TagColor }[];
}

export default function StatsCard({ icon, iconBg, value, label, badge, tags }: StatsCardProps) {
  // Animated number counter
  const [displayValue, setDisplayValue] = useState('0');
  useEffect(() => {
    if (/\d/.test(value)) {
      const num = parseInt(value.replace(/\D/g, ''));
      let current = 0;
      const increment = Math.ceil(num / 40);
      const interval = setInterval(() => {
        current += increment;
        if (current >= num) {
          setDisplayValue(value);
          clearInterval(interval);
        } else {
          setDisplayValue(value.replace(/\d+/, current.toString()));
        }
      }, 20);
      return () => clearInterval(interval);
    } else {
      setDisplayValue(value);
    }
  }, [value]);

  return (
    <motion.div
      className="bg-white/5 rounded-2xl px-6 py-6 sm:px-8 sm:py-8 border border-white/10 flex flex-col items-center shadow-xl backdrop-blur-lg transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-brand-blue active:scale-95"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <motion.div
        className={`w-16 h-16 ${iconBg} rounded-full flex items-center justify-center mb-2`}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        {icon}
      </motion.div>
      <div className="font-bold text-3xl text-white mb-1">{displayValue}</div>
      <div className="text-gray-200 text-sm mb-2">{label}</div>
      <div className="text-xs px-3 py-1 rounded-full font-semibold mb-1" style={{ background: 'rgba(255,255,255,0.05)', color: '#a5b4fc' }}>{badge}</div>
      <div className="flex items-center space-x-2 mt-2">
        {tags.map((tag, i) => (
          <span key={i} className={`text-xs px-2 py-1 rounded-full font-semibold`} style={{ background: tag.color.bg, color: tag.color.text }}>{tag.text}</span>
        ))}
      </div>
    </motion.div>
  );
} 
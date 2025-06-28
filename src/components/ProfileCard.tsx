import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ProfileCardProps {
  name: string;
  username: string;
  avatar: string;
  level: string;
  streak: string;
  stories: number;
  words: number;
  hours: number;
  progress: number;
  nextGoal: string;
  daysActive: number;
  hoursPerWeek: number;
}

export default function ProfileCard({
  name,
  username,
  avatar,
  level,
  streak,
  stories,
  words,
  hours,
  progress,
  nextGoal,
  daysActive,
  hoursPerWeek,
}: ProfileCardProps) {
  // Animated counters
  const [displayStories, setDisplayStories] = useState(0);
  const [displayWords, setDisplayWords] = useState(0);
  const [displayHours, setDisplayHours] = useState(0);
  useEffect(() => {
    const storiesInterval = setInterval(() => {
      setDisplayStories((prev) => (prev < stories ? prev + 1 : stories));
    }, 15);
    const wordsInterval = setInterval(() => {
      setDisplayWords((prev) => (prev < words ? prev + 5 : words));
    }, 5);
    const hoursInterval = setInterval(() => {
      setDisplayHours((prev) => (prev < hours ? prev + 1 : hours));
    }, 50);
    return () => {
      clearInterval(storiesInterval);
      clearInterval(wordsInterval);
      clearInterval(hoursInterval);
    };
  }, [stories, words, hours]);

  return (
    <motion.div
      className="bg-white/5 rounded-2xl px-6 py-6 sm:px-8 sm:py-8 border border-white/10 flex flex-col items-center shadow-xl backdrop-blur-lg transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-brand-blue active:scale-95"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <img src={avatar} alt={name} className="w-16 h-16 rounded-full mb-2 border-4 border-purple-500/40" />
      <div className="font-semibold text-white">{name}</div>
      <div className="text-xs text-gray-200 mb-2">@{username}</div>
      <div className="flex items-center space-x-2 mb-2">
        <span className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full font-semibold relative group cursor-pointer">
          {level}
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max bg-black/90 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">
            Your current learning level
          </span>
        </span>
        <span className="bg-yellow-400/20 text-yellow-300 text-xs px-2 py-1 rounded-full font-semibold animate-pulse">
          {streak}
        </span>
      </div>
      <div className="flex space-x-4 mb-2">
        <div className="text-center">
          <div className="font-bold text-lg text-white">{displayStories}</div>
          <div className="text-xs text-gray-200">Stories</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-lg text-white">{displayWords}</div>
          <div className="text-xs text-gray-200">Words</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-lg text-white">{displayHours}</div>
          <div className="text-xs text-gray-200">Hours</div>
        </div>
      </div>
      <div className="w-full mt-2">
        <div className="text-xs text-gray-200 mb-1">Spanish Progress (B1 Level)</div>
        <motion.div
          className="w-full bg-gray-700/40 rounded-full h-2 mb-1"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="bg-blue-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          />
        </motion.div>
        <div className="flex justify-between text-xs text-gray-200">
          <span>{nextGoal} Next Goal</span>
          <span>{daysActive} Days Active</span>
          <span>{hoursPerWeek} Hrs/Week</span>
        </div>
      </div>
    </motion.div>
  );
} 
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CommunityChatPreviewProps {
  userAvatar: string;
  username: string;
  question: string;
  answer: string;
}

export default function CommunityChatPreview({ userAvatar, username, question, answer }: CommunityChatPreviewProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowAnswer(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="max-w-md mx-auto mb-12"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="bg-white/5 rounded-2xl px-6 py-6 sm:px-8 sm:py-8 border border-white/10 shadow-lg transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-brand-blue active:scale-95">
        <div className="flex items-center mb-2">
          <img src={userAvatar} alt={username} className="w-8 h-8 rounded-full mr-2" />
          <span className="font-semibold text-white">{username}</span>
          <span className="ml-auto text-xs text-gray-200">Community Q&A</span>
        </div>
        <div className="space-y-2 text-left">
          <motion.div
            className="bg-purple-600/80 text-white rounded-xl px-3 py-2 self-end w-fit ml-auto"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {question}
          </motion.div>
          {showAnswer ? (
            <motion.div
              className="bg-white/10 text-gray-100 rounded-xl px-3 py-2 w-fit"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {answer} <span className='text-blue-400 cursor-pointer'>Read more</span>
            </motion.div>
          ) : (
            <motion.div
              className="bg-white/10 text-gray-100 rounded-xl px-3 py-2 w-fit flex items-center"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-bounce mr-1" style={{ animationDelay: '0ms' }} />
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-bounce mr-1" style={{ animationDelay: '150ms' }} />
              <span className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
} 
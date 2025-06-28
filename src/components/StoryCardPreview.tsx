import { motion } from 'framer-motion';
import { useState } from 'react';

interface StoryCardPreviewProps {
  image: string;
  tags: { text: string; color: string }[];
  title: string;
  audioInfo: string;
  progress: number;
  currentTime: string;
  duration: string;
  description: string;
}

export default function StoryCardPreview({
  image,
  tags,
  title,
  audioInfo,
  progress,
  currentTime,
  duration,
  description,
}: StoryCardPreviewProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <motion.div
      className="relative max-w-2xl mx-auto mb-12 transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-brand-blue active:scale-95"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-0 overflow-hidden flex flex-col md:flex-row shadow-xl">
        <div className="md:w-1/3 w-full h-40 md:h-auto bg-gradient-to-tr from-purple-700 to-blue-700 flex items-center justify-center relative">
          {/* Shimmer effect */}
          {!imgLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-700/30 via-gray-500/10 to-gray-700/30 z-10" />
          )}
          <img
            src={image}
            alt={title}
            className={`object-cover w-full h-full transition-opacity duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
          />
        </div>
        <div className="flex-1 flex flex-col px-6 py-6 sm:px-8 sm:py-8">
          <div className="flex items-center mb-2 space-x-2">
            {tags.map((tag, i) => (
              <span key={i} className={`text-xs px-2 py-1 rounded-full font-semibold`} style={{ background: tag.color }}>{tag.text}</span>
            ))}
          </div>
          <h3 className="font-semibold text-lg text-white">{title}</h3>
          <p className="text-sm text-gray-200 mb-2">{audioInfo}</p>
          <div className="mb-2">
            <div className="w-full bg-gray-700/40 rounded-full h-2 mb-1">
              <motion.div
                className="bg-purple-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
            <div className="flex items-center space-x-2">
              <motion.button
                className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center hover:scale-110 focus:scale-110 transition-transform shadow-lg focus:ring-2 focus:ring-brand-purple active:scale-95"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v18l15-9-15-9z" /></svg>
              </motion.button>
              <span className="text-xs text-gray-200">{currentTime} / {duration}</span>
            </div>
          </div>
          <div className="text-sm text-gray-200">{description}</div>
        </div>
      </div>
    </motion.div>
  );
} 
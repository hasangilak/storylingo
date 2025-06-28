import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import StoryCardPreview from './StoryCardPreview';
import { motion } from 'framer-motion';

export default function StartLearningPage() {
  // Demo card stack (reuse from landing)
  const [storyCards, setStoryCards] = useState([
    {
      id: 1,
      image: '/src/assets/demo1.jpg',
      tags: [
        { text: 'Beginner', color: 'bg-blue-500/20 text-blue-300' },
        { text: 'Classic', color: 'bg-purple-500/20 text-purple-300' }
      ],
      title: 'Alice in Wonderland',
      audioInfo: '10 min audio · English - French',
      progress: 30,
      currentTime: '3:00',
      duration: '10:00',
      description: 'Alice followed the white rabbit down the hole and found herself in a strange new world...'
    },
    {
      id: 2,
      image: '/src/assets/demo2.jpg',
      tags: [
        { text: 'Advanced', color: 'bg-green-500/20 text-green-300' },
        { text: 'Fable', color: 'bg-yellow-500/20 text-yellow-300' }
      ],
      title: 'The Little Prince',
      audioInfo: '12 min audio · English - German',
      progress: 60,
      currentTime: '7:12',
      duration: '12:00',
      description: 'The little prince asked the pilot to draw him a sheep and learned about love and loss on his journey.'
    },
    {
      id: 3,
      image: '/src/assets/demo3.jpg',
      tags: [
        { text: 'Intermediate', color: 'bg-purple-500/20 text-purple-300' },
        { text: 'Popular', color: 'bg-pink-500/20 text-pink-300' }
      ],
      title: 'The Alchemist',
      audioInfo: '15 min audio · English - Spanish',
      progress: 80,
      currentTime: '12:00',
      duration: '15:00',
      description: 'Santiago, an Andalusian shepherd boy, has a dream about finding a treasure and travels from Spain to Egypt.'
    },
  ]);

  // Stacking transforms for 3 cards (bottom to top)
  const stackTransforms = [
    'z-10 -translate-y-16 scale-90 -rotate-3 opacity-70',
    'z-20 -translate-y-8 scale-95 rotate-2 opacity-85',
    'z-30 translate-y-0 scale-100 rotate-0 opacity-100',
  ];
  const stackRing = [
    'focus:ring-blue-400',
    'focus:ring-purple-400',
    'focus:ring-green-400',
  ];

  const handleCardClick = (idx: number) => {
    if (idx === storyCards.length - 1) return;
    // Bring clicked card to top
    setStoryCards((prev) => {
      const newStack = [...prev];
      const [card] = newStack.splice(idx, 1);
      newStack.push(card);
      return newStack;
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-green-900/20" />
      <div className="fixed inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
      <Header />
      {/* Hero Section */}
      <main className="relative z-10 px-4 sm:px-6 pt-20 pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl sm:max-w-4xl mx-auto px-2 sm:px-0">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="text-sm">Start Your Language Journey</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Begin Learning with
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent"> StoryLingo</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Choose your path, try an interactive story, and see how fast you can progress. Every journey starts with a single story!
            </p>
            {/* --- Animated Story Card Stack (StoryCardPreview) --- */}
            <div className="relative flex flex-col items-center mb-8 min-h-[420px] w-full max-w-2xl mx-auto mt-12">
              {storyCards.map((card, idx) => (
                <motion.div
                  key={card.id}
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  className={`absolute left-0 right-0 mx-auto w-full max-w-2xl cursor-pointer shadow-2xl transition-all duration-500 ease-in-out ${stackTransforms[idx]} ${stackRing[idx]} focus:outline-none ` +
                    (idx === 0 ? 'hover:-translate-y-24 hover:scale-95 hover:z-20' : idx === 1 ? 'hover:-translate-y-12 hover:scale-98 hover:z-30' : '')}
                  tabIndex={0}
                  aria-label={`Preview story: ${card.title}`}
                  onClick={() => handleCardClick(idx)}
                >
                  <StoryCardPreview
                    image={card.image}
                    tags={card.tags}
                    title={card.title}
                    audioInfo={card.audioInfo}
                    progress={card.progress}
                    currentTime={card.currentTime}
                    duration={card.duration}
                    description={card.description}
                  />
                </motion.div>
              ))}
            </div>
            {/* --- End Card Stack --- */}
            {/* --- (Optional) Add more immersive/interactive elements here --- */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 
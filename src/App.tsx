import { useState, useEffect } from 'react';
import { Play, BookOpen, Volume2, Languages, Sparkles, Download, Users, ChevronUp } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard';
import StatsCard from './components/StatsCard';
import CommunityChatPreview from './components/CommunityChatPreview';
import StoryCardPreview from './components/StoryCardPreview';
import { motion } from 'framer-motion';
import TestimonialsSection from './components/TestimonialsSection';
import { Routes, Route, Link } from 'react-router-dom';
import StartLearningPage from './components/StartLearningPage';

function LandingPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Dynamic stack for story cards (now using StoryCardPreview)
  const [storyCards, setStoryCards] = useState([
    {
      id: 'alice',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      tags: [
        { text: 'Classic', color: 'rgba(250,204,21,0.2)' },
        { text: 'Beginner', color: 'rgba(34,197,94,0.2)' },
      ],
      title: 'Alice in Wonderland',
      audioInfo: '10 min audio · English - French',
      progress: 30,
      currentTime: '3:00',
      duration: '10:00',
      description: 'Alice followed the white rabbit down the hole and found herself in a strange new world...'
    },
    {
      id: 'prince',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80',
      tags: [
        { text: 'Fable', color: 'rgba(96,165,250,0.2)' },
        { text: 'Advanced', color: 'rgba(168,85,247,0.2)' },
      ],
      title: 'The Little Prince',
      audioInfo: '12 min audio · English - German',
      progress: 60,
      currentTime: '7:12',
      duration: '12:00',
      description: 'The little prince asked the pilot to draw him a sheep and learned about love and loss on his journey.'
    },
    {
      id: 'alchemist',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      tags: [
        { text: 'Popular', color: 'rgba(250,204,21,0.2)' },
        { text: 'Intermediate', color: 'rgba(192,132,252,0.2)' },
      ],
      title: 'The Alchemist',
      audioInfo: '15 min audio · English - Spanish',
      progress: 80,
      currentTime: '12:00',
      duration: '15:00',
      description: 'Santiago, an Andalusian shepherd boy, has a dream about finding a treasure and travels from Spain to Egypt.'
    },
  ]);

  const handleCardClick = (idx: number) => {
    setStoryCards((prev) => {
      const newCards = [...prev];
      const [clicked] = newCards.splice(idx, 1);
      newCards.push(clicked); // Move clicked card to top
      return newCards;
    });
  };

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Stacking transforms for 3 cards (bottom to top) - more spread
  const stackTransforms = [
    'z-10 -translate-y-16 scale-90 -rotate-3 opacity-70', // bottom card
    'z-20 -translate-y-8 scale-95 rotate-2 opacity-85',   // middle card
    'z-30 translate-y-0 scale-100 rotate-0 opacity-100',  // top card
  ];
  const stackRing = [
    'focus:ring-blue-400',
    'focus:ring-purple-400',
    'focus:ring-green-400',
  ];

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

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="relative z-10 px-4 sm:px-6 pt-20 pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl sm:max-w-4xl mx-auto px-2 sm:px-0">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">Learn Languages Through Stories</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Master Languages with
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent"> Epic Stories</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Dive into classic novels and engaging stories while learning vocabulary, grammar, 
              and conversation skills. Each story comes with audio narration and line-by-line translations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/start-learning" className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 ripple">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Start Learning</span>
              </Link>
              <button className="border border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/5 transition-all duration-300 flex items-center justify-center space-x-2 ripple">
                <Download className="w-5 h-5" />
                <span>Download App</span>
              </button>
            </div>

            {/* --- Animated Story Card Stack (StoryCardPreview) --- */}
            <div className="relative flex flex-col items-center mb-8 min-h-[420px] w-full max-w-2xl mx-auto mt-62">
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

            {/* --- Community Q&A Chat Preview --- */}
            <div className="mt-8">
              <CommunityChatPreview
                userAvatar="https://randomuser.me/api/portraits/men/32.jpg"
                username="StoryLingo"
                question="I'm reading 'The Alchemist' and I don't understand the phrase 'maktub'. What does it mean?"
                answer="Great question! 'Maktub' is an Arabic word that means 'it is written' or 'it is destined'..."
              />
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-4 sm:px-6 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">StoryLingo?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our unique approach combines the joy of storytelling with proven language learning techniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Classic Literature</h3>
              <p className="text-gray-300">Learn from timeless stories across different genres - from romance to mystery, fantasy to historical fiction.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Audio Narration</h3>
              <p className="text-gray-300">Listen to professional narrators bring stories to life while improving your pronunciation and listening skills.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Languages className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Line-by-Line Translation</h3>
              <p className="text-gray-300">Compare original text with your native language translations to understand context and build vocabulary naturally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            {/* --- Profile/Stats Card (like mobile) --- */}
            <ProfileCard
              name="Emma Mitchell"
              username="emmamitchell"
              avatar="https://randomuser.me/api/portraits/women/44.jpg"
              level="Intermediate"
              streak="28 Day Streak"
              stories={42}
              words={628}
              hours={18.5}
              progress={68}
              nextGoal="B2"
              daysActive={32}
              hoursPerWeek={4.2}
            />
            {/* --- End Profile/Stats Card --- */}
            {/* --- Active Learners Card --- */}
            <StatsCard
              icon={<Users className="w-8 h-8 text-white" />}
              iconBg="bg-gradient-to-r from-blue-500 to-purple-600"
              value="50K+"
              label="Active Learners"
              badge="Global Community"
              tags={[
                { text: 'Growing Fast', color: { bg: 'bg-green-400/20', text: 'text-green-300' } },
                { text: '4.9★ Rating', color: { bg: 'bg-yellow-400/20', text: 'text-yellow-300' } },
              ]}
            />
            {/* --- Stories Available Card --- */}
            <StatsCard
              icon={<BookOpen className="w-8 h-8 text-white" />}
              iconBg="bg-gradient-to-r from-purple-500 to-blue-500"
              value="200+"
              label="Stories Available"
              badge="Classic & Modern"
              tags={[
                { text: 'Audio & Text', color: { bg: 'bg-blue-400/20', text: 'text-blue-300' } },
                { text: 'New Weekly', color: { bg: 'bg-green-400/20', text: 'text-green-300' } },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="relative z-10 px-4 sm:px-6 py-20 sm:py-32">
        <div className="max-w-2xl sm:max-w-4xl mx-auto text-center px-2 sm:px-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Language Journey?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of learners who are mastering new languages through the power of storytelling
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 ripple">
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Download Now</span>
            </button>
            <button className="border border-white/20 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/5 transition-all duration-300 ripple">
              Try Free Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-3 shadow-lg hover:scale-110 focus:scale-110 transition-transform ripple"
        style={{ display: showScrollTop ? 'block' : 'none' }}
        initial={{ opacity: 0, y: 40 }}
        animate={showScrollTop ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/start-learning" element={<StartLearningPage />} />
    </Routes>
  );
}
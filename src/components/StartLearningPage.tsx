import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import StoryCardPreview from './StoryCardPreview';
import { motion, AnimatePresence } from 'framer-motion';

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
];
const LEVELS = [
  { key: 'beginner', label: 'Beginner' },
  { key: 'intermediate', label: 'Intermediate' },
  { key: 'advanced', label: 'Advanced' },
];
const GOALS = [
  { key: 'travel', label: 'Travel' },
  { key: 'work', label: 'Work' },
  { key: 'school', label: 'School' },
  { key: 'fun', label: 'Fun' },
];
const QUICK_TIPS = [
  { icon: '📖', title: 'Read', desc: 'Follow the story line by line.' },
  { icon: '🔊', title: 'Listen', desc: 'Hear native audio and repeat.' },
  { icon: '📝', title: 'Practice', desc: 'Answer questions and review.' },
];
const BADGES = [
  { icon: '🔥', label: 'Day 1' },
  { icon: '⭐', label: 'First Story' },
  { icon: '🏆', label: 'Streak: 0' },
];

const FEATURED_STORY = {
  image: '/src/assets/demo1.jpg',
  tags: [
    { text: 'Beginner', color: 'bg-blue-500/20 text-blue-300' },
    { text: 'Classic', color: 'bg-purple-500/20 text-purple-300' }
  ],
  title: 'Alice in Wonderland',
  audioInfo: '10 min audio · English - French',
  progress: 0,
  currentTime: '0:00',
  duration: '10:00',
  description: 'Alice followed the white rabbit down the hole and found herself in a strange new world...'
};

export default function StartLearningPage() {
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('');
  const [level, setLevel] = useState('');
  const [goal, setGoal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const canContinue = name.trim() && language && level;

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
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 py-12">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="onboarding"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="w-full max-w-lg mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-10 flex flex-col items-center"
              aria-label="Personalized Onboarding"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent drop-shadow-xl text-center">
                Let's get you started!
              </h1>
              <p className="text-lg text-gray-200 mb-8 text-center max-w-md">
                Personalize your learning journey. We'll use this to tailor your experience.
              </p>
              {/* Name Input */}
              <label htmlFor="name" className="w-full text-left font-medium mb-1 text-white/80">Your Name</label>
              <input
                id="name"
                type="text"
                className="w-full mb-6 px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition-all"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
                autoComplete="given-name"
                minLength={2}
                maxLength={32}
                required
              />
              {/* Language Selection */}
              <div className="w-full mb-6">
                <div className="font-medium mb-2 text-white/80">Choose a Language</div>
                <div className="grid grid-cols-3 gap-3">
                  {LANGUAGES.map(l => (
                    <button
                      key={l.code}
                      type="button"
                      className={`flex flex-col items-center justify-center px-3 py-3 rounded-xl border transition-all text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 ${language === l.code ? 'bg-blue-500/20 border-blue-400 scale-105' : 'bg-white/10 border-white/10 hover:bg-blue-500/10'}`}
                      aria-pressed={language === l.code}
                      onClick={() => setLanguage(l.code)}
                      tabIndex={0}
                    >
                      <span className="text-2xl mb-1" aria-hidden="true">{l.flag}</span>
                      <span>{l.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              {/* Level Selection */}
              <div className="w-full mb-6">
                <div className="font-medium mb-2 text-white/80">Your Level</div>
                <div className="flex gap-3">
                  {LEVELS.map(l => (
                    <button
                      key={l.key}
                      type="button"
                      className={`px-5 py-2 rounded-full border font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${level === l.key ? 'bg-purple-500/20 border-purple-400 scale-105 text-purple-200' : 'bg-white/10 border-white/10 hover:bg-purple-500/10 text-white'}`}
                      aria-pressed={level === l.key}
                      onClick={() => setLevel(l.key)}
                      tabIndex={0}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
              {/* Goal Selection (optional) */}
              <div className="w-full mb-8">
                <div className="font-medium mb-2 text-white/80">Your Main Goal <span className="text-xs text-gray-400">(optional)</span></div>
                <div className="flex gap-3 flex-wrap">
                  {GOALS.map(g => (
                    <button
                      key={g.key}
                      type="button"
                      className={`px-4 py-2 rounded-full border font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${goal === g.key ? 'bg-green-500/20 border-green-400 scale-105 text-green-200' : 'bg-white/10 border-white/10 hover:bg-green-500/10 text-white'}`}
                      aria-pressed={goal === g.key}
                      onClick={() => setGoal(g.key)}
                      tabIndex={0}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>
              <button
                className={`w-full py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${canContinue ? 'hover:scale-105' : 'opacity-60 cursor-not-allowed'}`}
                disabled={!canContinue}
                onClick={() => setSubmitted(true)}
                tabIndex={0}
              >
                Continue
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-10 flex flex-col items-center"
              aria-label="Learning Dashboard"
            >
              {/* Personalized Welcome */}
              <div className="flex flex-col items-center mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{LANGUAGES.find(l => l.code === language)?.flag}</span>
                  <span className="text-lg font-bold text-white/90">{name}</span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 text-sm font-semibold ml-2">{LEVELS.find(l => l.key === level)?.label}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent drop-shadow-xl text-center mb-2">
                  Welcome! Ready to start your first story?
                </h2>
                <div className="w-full max-w-xs mx-auto mt-2 mb-2">
                  <div className="flex justify-between text-xs text-white/60 mb-1">
                    <span>Progress</span>
                    <span>0%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500" style={{ width: '0%' }} />
                  </div>
                </div>
                {/* Badges */}
                <div className="flex gap-3 mt-3">
                  {BADGES.map(b => (
                    <div key={b.label} className="flex flex-col items-center px-3 py-1 rounded-xl bg-white/10 border border-white/10 text-sm">
                      <span className="text-xl mb-1">{b.icon}</span>
                      <span className="text-white/80">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Featured Story Card */}
              <div className="w-full flex flex-col items-center mb-8">
                <StoryCardPreview
                  image={FEATURED_STORY.image}
                  tags={FEATURED_STORY.tags}
                  title={FEATURED_STORY.title}
                  audioInfo={FEATURED_STORY.audioInfo}
                  progress={FEATURED_STORY.progress}
                  currentTime={FEATURED_STORY.currentTime}
                  duration={FEATURED_STORY.duration}
                  description={FEATURED_STORY.description}
                />
                <div className="flex gap-4 mt-4">
                  <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Start Story
                  </button>
                  <button className="px-8 py-3 rounded-full border border-white/20 text-white font-bold text-lg shadow-xl hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Try Another Story
                  </button>
                </div>
              </div>
              {/* Quick Tips */}
              <div className="w-full flex flex-col md:flex-row gap-4 mb-6 justify-center items-center">
                {QUICK_TIPS.map(tip => (
                  <div key={tip.title} className="flex flex-col items-center px-6 py-4 rounded-2xl bg-white/10 border border-white/10 text-center max-w-xs">
                    <span className="text-2xl mb-2">{tip.icon}</span>
                    <span className="font-bold text-white/90 mb-1">{tip.title}</span>
                    <span className="text-white/70 text-sm">{tip.desc}</span>
                  </div>
                ))}
              </div>
              {/* Support/FAQ Link */}
              <div className="w-full text-center mt-2">
                <a href="#" className="text-blue-300 underline hover:text-blue-400 text-sm">Need help? See our quick guide.</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
} 
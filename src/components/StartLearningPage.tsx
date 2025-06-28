import { useState } from 'react';

export default function StartLearningPage() {
  // TODO: Replace with real user data and progress
  const userName = 'Learner';
  const progress = 40; // percent, placeholder

  // Learning Path Selector data
  const learningPaths = [
    {
      key: 'story',
      title: 'Story Mode',
      description: 'Learn through immersive, interactive stories tailored to your level.',
      icon: '📖',
    },
    {
      key: 'quick',
      title: 'Quick Practice',
      description: 'Short, focused exercises for busy days. Practice anytime.',
      icon: '⚡',
    },
    {
      key: 'custom',
      title: 'Custom Path',
      description: 'Choose your own adventure and set your learning goals.',
      icon: '🛤️',
    },
  ];
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-brand-purple/70 via-brand-blue/60 to-brand-bg/90 text-white flex flex-col overflow-x-hidden">
      {/* Accent blurred shapes for depth */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-purple/30 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl z-0" />
      {/* Hero Section */}
      <section className="relative w-full px-4 sm:px-8 pt-16 pb-10 mb-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent drop-shadow-xl">
            Welcome{userName ? `, ${userName}` : ''}!
          </h1>
          <p className="text-2xl md:text-3xl text-brand-textSecondary mb-6 drop-shadow">
            Master a new language through stories. Your journey starts here.
          </p>
          {/* Progress Bar (placeholder) */}
          <div className="w-full max-w-md mx-auto mt-4">
            <div className="flex justify-between text-sm text-brand-textSecondary mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-3 bg-gradient-to-r from-brand-purple to-brand-blue rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Learning Path Selector */}
      <section className="relative w-full max-w-4xl mx-auto px-4 sm:px-8 mb-12 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent drop-shadow-xl">Choose Your Learning Path</h2>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-stretch">
          {learningPaths.map((path) => (
            <button
              key={path.key}
              onClick={() => setSelectedPath(path.key)}
              className={`flex-1 bg-white/10 backdrop-blur-xl border-2 transition-all duration-200 rounded-3xl p-8 flex flex-col items-center shadow-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue/70 hover:scale-105 hover:shadow-2xl
                ${selectedPath === path.key ? 'border-brand-blue bg-brand-blue/30 scale-105 ring-2 ring-brand-blue' : 'border-white/10'}`}
              aria-pressed={selectedPath === path.key}
              style={{ minWidth: 220 }}
            >
              <span className="text-5xl mb-4" aria-hidden="true">{path.icon}</span>
              <span className="text-xl font-semibold mb-2 bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent drop-shadow">{path.title}</span>
              <span className="text-brand-textSecondary text-base text-center drop-shadow">{path.description}</span>
            </button>
          ))}
        </div>
        {selectedPath && (
          <div className="flex justify-center mt-8">
            <button
              className="px-10 py-4 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue text-white font-bold shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue text-lg"
              // TODO: Implement navigation/logic for continuing with selected path
            >
              Continue
            </button>
          </div>
        )}
      </section>
      {/* Story Demo Section */}
      <section className="relative w-full max-w-3xl mx-auto px-4 sm:px-8 mb-16 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent drop-shadow-xl">Try a Story Demo</h2>
        <div className="flex justify-center">
          <StoryDemoPreview />
        </div>
      </section>
      {/* TODO: Add the rest of the Start Learning page sections here */}
      <div className="flex-1 flex flex-col items-center justify-center z-10">
        <p className="text-lg text-brand-textSecondary">This is the new Start Learning page. (TODO: Implement full design and features.)</p>
      </div>
    </div>
  );
}

// Inline demo component for the Start Learning page
function StoryDemoPreview() {
  // Sample story data
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const storyLine = {
    original: '¿Cómo te llamas?',
    translation: 'What is your name?',
    options: ['How old are you?', 'What is your name?', 'Where are you from?'],
    correct: 1,
  };
  return (
    <div className="bg-white/10 backdrop-blur-2xl border-2 border-brand-blue/30 rounded-3xl p-10 shadow-2xl max-w-md w-full flex flex-col items-center transition-all duration-300">
      <div className="mb-4 text-2xl text-white text-center font-semibold drop-shadow">{storyLine.original}</div>
      <div className="mb-2 text-blue-200 text-center text-base italic">{storyLine.translation}</div>
      <div className="flex flex-col gap-4 w-full mt-4">
        {storyLine.options.map((opt, i) => (
          <button
            key={i}
            className={`w-full px-4 py-3 rounded-xl font-semibold transition-all border-2 focus:outline-none focus:ring-2 focus:ring-brand-blue/70 text-lg
              ${selected === i
                ? i === storyLine.correct
                  ? 'bg-green-500/30 border-green-400 text-green-200'
                  : 'bg-red-500/30 border-red-400 text-red-200'
                : 'bg-brand-surface/60 border-white/10 text-white hover:bg-brand-blue/20'}`}
            onClick={() => {
              setSelected(i);
              setFeedback(i === storyLine.correct ? 'Correct! 🎉' : 'Try again!');
            }}
            disabled={selected !== null}
            aria-pressed={selected === i}
          >
            {opt}
          </button>
        ))}
      </div>
      {feedback && (
        <div className={`mt-6 text-center font-bold text-xl ${feedback.startsWith('Correct') ? 'text-green-400' : 'text-red-400'}`}>{feedback}</div>
      )}
      <div className="mt-8 text-xs text-gray-300">This is a sample of how interactive stories work in StoryLingo.</div>
    </div>
  );
} 
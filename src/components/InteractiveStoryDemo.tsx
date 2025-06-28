import React, { useState, useRef } from 'react';

interface StoryDemoProps {
  coverImage: string;
  title: string;
  level: string;
  audioInfo: string;
  audioSrc: string;
  lines: { original: string; translation: string }[];
}

const InteractiveStoryDemo: React.FC<StoryDemoProps> = ({
  coverImage,
  title,
  level,
  audioInfo,
  audioSrc,
  lines,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranslation, setShowTranslation] = useState(true);
  const currentLine = 0; // Placeholder for now
  const progress = 0; // Placeholder for now
  const audioRef = useRef<HTMLAudioElement>(null);

  // TODO: Implement logic for syncing audio and lines, progress bar, etc.

  return (
    <div className="bg-slate-900 max-w-md mx-auto p-6 rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-300 border border-white/10 hover:border-transparent focus:border-transparent">
      {/* Solid background, no opacity or transparent gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-blue-400 via-purple-500 to-green-400" style={{ opacity: 0 }} />
      <div className="relative z-10 flex flex-col items-center">
        {/* Cover Image */}
        <img
          src={coverImage}
          alt={`${title} cover`}
          className="w-24 h-24 rounded-xl shadow-lg mb-4"
        />
        {/* Title & Level */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent mb-1">
          {title}
        </h2>
        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm mb-2">
          {level}
        </span>
        <div className="text-gray-300 text-sm mb-4">{audioInfo}</div>
        {/* Audio Controls */}
        <button
          className="ripple w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-2 focus:outline-none"
          aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
          onClick={() => setIsPlaying((p) => !p)}
        >
          {isPlaying ? (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
          ) : (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          )}
        </button>
        {/* Progress Bar */}
        <div className="w-full flex items-center gap-2 mb-4">
          <span className="text-xs text-gray-400">{/* current time */}</span>
          <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-gray-400">{/* total time */}</span>
        </div>
        {/* Story Line & Translation */}
        <div className="text-lg text-white mb-2 text-center">{lines[currentLine].original}</div>
        <button
          className="text-xs text-blue-300 underline mb-1"
          onClick={() => setShowTranslation((t) => !t)}
          aria-pressed={showTranslation}
        >
          {showTranslation ? 'Hide Translation' : 'Show Translation'}
        </button>
        {showTranslation && (
          <div className="text-sm text-blue-200 mb-4 text-center">
            {lines[currentLine].translation}
          </div>
        )}
        {/* CTA Buttons */}
        <div className="flex gap-3 mt-4">
          <button className="ripple bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full font-semibold text-white hover:scale-105 transition">
            Try Full Story
          </button>
          <button className="ripple border border-white/20 px-6 py-2 rounded-full font-semibold text-white hover:bg-white/5 transition">
            Sign Up
          </button>
        </div>
        {/* Toast/Inline Message (after demo ends) */}
        {/* <div className="mt-4 text-green-300">Like what you hear? Start learning now!</div> */}
      </div>
      {/* Audio element (hidden) */}
      <audio ref={audioRef} src={audioSrc} /* controls={false} */ />
    </div>
  );
};

export default InteractiveStoryDemo; 
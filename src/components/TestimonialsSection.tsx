import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MOBILE_VISIBLE = 1;
const DESKTOP_VISIBLE = 3;

const testimonials = [
  {
    name: 'Sofia Ramirez',
    role: 'Language Learner',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'StoryLingo made learning French fun and immersive. The stories kept me coming back every day!',
  },
  {
    name: 'Liam Chen',
    role: 'Polyglot & Educator',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    quote: 'The audio narration and line-by-line translation are game changers. My students love it!',
  },
  {
    name: 'Ava Müller',
    role: 'Travel Blogger',
    photo: 'https://randomuser.me/api/portraits/women/32.jpg',
    quote: 'I picked up Spanish so much faster with StoryLingo. The stories are engaging and the app is beautiful.',
  },
  {
    name: 'Noah Smith',
    role: 'App Reviewer',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    quote: 'A must-have for anyone serious about language learning. The community and support are top-notch.',
  },
  {
    name: 'Maya Patel',
    role: 'Student',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'The interactive stories made grammar and vocabulary stick. Highly recommended!',
  },
];

function useVisibleCount() {
  const [count, setCount] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768 ? MOBILE_VISIBLE : DESKTOP_VISIBLE
  );
  useEffect(() => {
    const onResize = () => {
      setCount(window.innerWidth < 768 ? MOBILE_VISIBLE : DESKTOP_VISIBLE);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return count;
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const visibleCount = useVisibleCount();
  const liveRegionRef = useRef<HTMLDivElement>(null);

  // Navigation logic
  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  };

  // Get visible testimonials
  const getVisibleTestimonials = () => {
    if (visibleCount === MOBILE_VISIBLE) {
      return [testimonials[current]];
    }
    const arr = [];
    for (let i = 0; i < DESKTOP_VISIBLE; i++) {
      arr.push(testimonials[(current + i) % testimonials.length]);
    }
    return arr;
  };

  // ARIA live region update
  useEffect(() => {
    if (liveRegionRef.current) {
      liveRegionRef.current.textContent = testimonials[current].quote;
    }
  }, [current]);

  return (
    <section
      className="relative z-10 px-4 sm:px-8 py-20 sm:py-32 bg-gradient-to-br from-[#18182F]/60 via-[#0B0B1F]/40 to-[#23234A]/60 bg-white/2 backdrop-blur-2xl backdrop-saturate-150 overflow-hidden"
      aria-label="Testimonials"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Accent blurred shapes */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#7B3FF2]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1FC8DB]/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#3A86FF]/20 rounded-full blur-3xl" />
      <div className="max-w-5xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#7B3FF2] to-[#3A86FF] bg-clip-text text-transparent drop-shadow-lg">
          What Our <span className="bg-gradient-to-r from-[#1FC8DB] to-[#7B3FF2] bg-clip-text text-transparent">Learners Say</span>
        </h2>
        <p className="text-xl text-gray-100 max-w-2xl mx-auto drop-shadow">
          Real stories from real users. See how StoryLingo is transforming language learning.
        </p>
        <div
          ref={liveRegionRef}
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        />
      </div>
      <div className="flex items-center justify-center gap-4 relative z-10">
        <button
          className="rounded-full p-3 bg-gradient-to-r from-[#7B3FF2] to-[#1FC8DB] text-white shadow-lg hover:scale-110 focus:ring-2 focus:ring-brand-blue active:scale-95 transition-all duration-200"
          aria-label="Previous testimonials"
          onClick={handlePrev}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="flex-1 flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
          <AnimatePresence initial={false}>
            {getVisibleTestimonials().map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#18182F]/80 backdrop-blur-lg border-2 border-[#7B3FF2]/40 rounded-2xl px-6 py-6 sm:px-8 sm:py-8 flex flex-col items-center shadow-2xl max-w-sm mx-auto min-w-[260px] min-h-[320px] transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-brand-blue active:scale-95"
                tabIndex={0}
                aria-label={`Testimonial from ${t.name}`}
              >
                <div className="relative mb-4">
                  <img
                    src={t.photo}
                    alt={`Photo of ${t.name}`}
                    className="w-20 h-20 rounded-full object-cover border-4 border-gradient-to-r from-[#1FC8DB] to-[#7B3FF2] shadow-lg relative z-10"
                  />
                  <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#7B3FF2] to-[#3A86FF] opacity-20 blur"></span>
                </div>
                <blockquote className="text-lg md:text-xl text-white font-semibold mb-4 flex flex-col items-center">
                  <svg className="w-8 h-8 text-[#1FC8DB] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4" /><path d="M15 17a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4" /></svg>
                  <span>“{t.quote}”</span>
                </blockquote>
                <div className="mt-auto text-center">
                  <div className="font-bold text-[#3A86FF] text-lg">{t.name}</div>
                  <div className="text-sm text-[#7B3FF2]">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <button
          className="rounded-full p-3 bg-gradient-to-r from-[#7B3FF2] to-[#1FC8DB] text-white shadow-lg hover:scale-110 focus:ring-2 focus:ring-brand-blue active:scale-95 transition-all duration-200"
          aria-label="Next testimonials"
          onClick={handleNext}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div className="flex justify-center mt-8 gap-2 relative z-10">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-4 rounded-full mx-1 transition-all duration-200 ${idx === current ? 'bg-gradient-to-r from-[#7B3FF2] to-[#1FC8DB] shadow-lg scale-110' : 'bg-white/20'}`}
            aria-label={`Go to testimonial ${idx + 1}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
} 
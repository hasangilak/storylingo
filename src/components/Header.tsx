import { useState } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 px-6 py-4 bg-black/60 backdrop-blur-md shadow-lg transition-all duration-300">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold logo-font">StoryLingo</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-blue-400 transition-colors scroll-smooth">Features</a>
          <a href="#stories" className="hover:text-blue-400 transition-colors scroll-smooth">Stories</a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors scroll-smooth">Pricing</a>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full hover:scale-105 transition-transform shadow-md">
            Download App
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            <a href="#features" className="block hover:text-blue-400 transition-colors scroll-smooth">Features</a>
            <a href="#stories" className="block hover:text-blue-400 transition-colors scroll-smooth">Stories</a>
            <a href="#pricing" className="block hover:text-blue-400 transition-colors scroll-smooth">Pricing</a>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-full shadow-md">
              Download App
            </button>
          </div>
        </div>
      )}
    </header>
  );
} 
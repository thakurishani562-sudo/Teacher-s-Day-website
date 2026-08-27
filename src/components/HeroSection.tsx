import React from 'react';
import { Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="text-center max-w-3xl mx-auto relative pt-4 pb-2">
      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FFF9C4]/70 text-[#954459] rounded-full text-xs font-semibold uppercase mb-6 tracking-[0.2em] border border-[#D9C1C4]/40 backdrop-blur-sm shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-[#A8C69F]" />
        <span>Teacher's Day 2026</span>
      </div>

      {/* Main Title with Heart */}
      <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-[#954459] mb-4 relative inline-block tracking-tight">
        Happy Teacher’s Day
        <span className="absolute -right-8 -top-3 text-[#4A6545] text-4xl md:text-5xl font-['Caveat'] opacity-80 select-none animate-pulse">
          ♡
        </span>
      </h1>

      {/* Subheading */}
      <p className="font-['Playfair_Display'] text-lg md:text-2xl text-[#534245] font-medium mb-3">
        1st Year • Mechanical Engineering
      </p>

      {/* Handwritten quote */}
      <p className="font-['Caveat'] text-2xl md:text-3xl text-[#954459]/90 mt-2 font-medium">
        "A little contribution, a lot of gratitude"
      </p>

      {/* Decorative center divider */}
      <div className="mt-8 flex justify-center opacity-70">
        <svg
          fill="none"
          height="32"
          viewBox="0 0 120 40"
          width="120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 20 Q 30 10 60 20 T 110 20"
            fill="none"
            stroke="#954459"
            strokeDasharray="2 4"
            strokeWidth="1.2"
          />
          <circle cx="60" cy="20" fill="#A8C69F" r="3.5" />
          <path d="M55 15 L 60 10 L 65 15" fill="none" stroke="#A8C69F" strokeWidth="1.2" />
          <path d="M55 25 L 60 30 L 65 25" fill="none" stroke="#A8C69F" strokeWidth="1.2" />
        </svg>
      </div>
    </section>
  );
};

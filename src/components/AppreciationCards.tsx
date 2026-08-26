import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GratitudeNote } from '../types';
import { INITIAL_GRATITUDE_NOTES } from '../data/mockData';

export const AppreciationCards: React.FC = () => {
  const [notes, setNotes] = useState<GratitudeNote[]>(INITIAL_GRATITUDE_NOTES);

  const handleLike = (id: string) => {
    setNotes(notes.map((n) => (n.id === id ? { ...n, likes: n.likes + 1 } : n)));
  };

  return (
    <section className="space-y-10 w-full pt-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="font-['Playfair_Display'] text-2xl md:text-4xl font-bold text-[#954459] mb-2">
          More Than a Teacher
        </h2>
        <p className="font-sans text-sm md:text-base text-[#867275]">
          Reflecting on the guidance, inspiration, and impact they've made on our lives.
        </p>
      </div>

      {/* 3 Main Reflection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Guided Us */}
        <div className="bg-[#FFF9C4]/75 backdrop-blur-sm p-8 rounded-2xl border border-[#D9C1C4]/40 relative group hover:bg-[#FFF8F1] transition-all shadow-[0px_6px_20px_rgba(149,68,89,0.04)] hover:-translate-y-1">
          <div className="text-[#4A6545] opacity-20 absolute top-4 right-5 text-5xl font-serif select-none">
            "
          </div>
          <h4 className="font-['Playfair_Display'] text-2xl font-bold text-[#954459] mb-3 flex items-center gap-2">
            <span>Guided Us</span>
          </h4>
          <p className="font-['Caveat'] text-xl text-[#954459]/90 relative z-10 leading-relaxed">
            Through complex algorithms and late-night debugging sessions, your patience never
            wavered.
          </p>
        </div>

        {/* Inspired Us */}
        <div className="bg-[#FFF9C4]/75 backdrop-blur-sm p-8 rounded-2xl border border-[#D9C1C4]/40 relative group hover:bg-[#FFF8F1] transition-all shadow-[0px_6px_20px_rgba(149,68,89,0.04)] hover:-translate-y-1">
          <div className="text-[#4A6545] opacity-20 absolute top-4 right-5 text-5xl font-serif select-none">
            "
          </div>
          <h4 className="font-['Playfair_Display'] text-2xl font-bold text-[#954459] mb-3 flex items-center gap-2">
            <span>Inspired Us</span>
          </h4>
          <p className="font-['Caveat'] text-xl text-[#954459]/90 relative z-10 leading-relaxed">
            To look beyond the code and understand the profound impact technology has on society.
          </p>
        </div>

        {/* Shaped Us */}
        <div className="bg-[#FFF9C4]/75 backdrop-blur-sm p-8 rounded-2xl border border-[#D9C1C4]/40 relative group hover:bg-[#FFF8F1] transition-all shadow-[0px_6px_20px_rgba(149,68,89,0.04)] hover:-translate-y-1">
          <div className="text-[#4A6545] opacity-20 absolute top-4 right-5 text-5xl font-serif select-none">
            "
          </div>
          <h4 className="font-['Playfair_Display'] text-2xl font-bold text-[#954459] mb-3 flex items-center gap-2">
            <span>Shaped Us</span>
          </h4>
          <p className="font-['Caveat'] text-xl text-[#954459]/90 relative z-10 leading-relaxed">
            From hesitant freshers to confident coders, your mentorship is our foundation.
          </p>
        </div>
      </div>

    </section>
  );
};

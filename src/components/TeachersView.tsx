import React, { useState } from 'react';
import { GraduationCap, Heart, Award, Sparkles, BookOpen, Quote } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TEACHERS_LIST } from '../data/mockData';
import { TeacherProfile } from '../types';

export const TeachersView: React.FC = () => {
  const [teachers] = useState<TeacherProfile[]>(TEACHERS_LIST);
  const [reactions, setReactions] = useState<Record<string, number>>({
    t1: 42,
    t2: 38,
    t3: 56,
    t4: 29,
    t5: 34,
  });

  const handleReact = (id: string) => {
    setReactions((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));

    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#D97B91', '#FFB1C1', '#A8C69F'],
    });
  };

  return (
    <div className="space-y-10 w-full">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF9C4]/70 text-[#954459] rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-[#D9C1C4]/40">
          <GraduationCap className="w-3.5 h-3.5 text-[#4A6545]" />
          <span>Department of Information Technology</span>
        </div>
        <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#954459] mb-3">
          Honoring Our Educators
        </h2>
        <p className="text-xs md:text-sm text-[#534245]">
          A heartfelt tribute to the professors, mentors, and lab guides who shape our minds and
          inspire our journey in IT.
        </p>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-[#D9C1C4]/40 shadow-[0px_6px_20px_rgba(149,68,89,0.05)] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group"
          >
            <div>
              {/* Header Profile */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-['Playfair_Display'] text-lg font-bold shadow-xs shrink-0 ${teacher.avatarColor}`}
                >
                  {teacher.initials}
                </div>
                <div>
                  <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#954459] group-hover:text-[#4A6545] transition-colors leading-snug">
                    {teacher.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#534245]">{teacher.designation}</p>
                  <p className="text-[11px] text-[#867275] flex items-center gap-1 mt-0.5">
                    <BookOpen className="w-3 h-3 text-[#4A6545]" />
                    <span>{teacher.subject}</span>
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="p-3.5 bg-[#FFF8F1] rounded-xl border border-[#D9C1C4]/30 my-3">
                <div className="flex items-start gap-1.5">
                  <Quote className="w-3.5 h-3.5 text-[#D97B91] shrink-0 mt-0.5 opacity-60" />
                  <p className="font-['Caveat'] text-lg text-[#1F1B15] leading-snug">
                    {teacher.quote}
                  </p>
                </div>
              </div>

              {/* Student Note */}
              <p className="text-xs text-[#534245] leading-relaxed mb-4">
                <strong className="text-[#954459]">Batch Tribute:</strong> {teacher.appreciationNote}
              </p>
            </div>

            {/* Footer Action */}
            <div className="pt-4 border-t border-[#EAE1D7] flex items-center justify-between">
              <span className="text-[10px] uppercase font-bold text-[#867275] tracking-wider">
                {teacher.yearsOfTeaching}+ Years Mentoring
              </span>

              <button
                onClick={() => handleReact(teacher.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FCE4EC] hover:bg-[#FFD9DF] text-[#954459] text-xs font-bold rounded-full transition-all shadow-2xs group/btn"
              >
                <Heart className="w-3.5 h-3.5 fill-current text-[#D97B91] group-hover/btn:scale-125 transition-transform" />
                <span>{reactions[teacher.id] || 0}</span>
                <span className="text-[10px] font-normal text-[#867275]">Respect</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

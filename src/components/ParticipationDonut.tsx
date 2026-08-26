import React from 'react';

interface ParticipationDonutProps {
  contributedCount: number;
  totalCount: number;
}

export const ParticipationDonut: React.FC<ParticipationDonutProps> = ({
  contributedCount,
  totalCount,
}) => {
  // If count is available from sheet, calculate percentage
<<<<<<< HEAD
  const actualTotal = totalCount || 50;
  const percentage = Math.min(100, Math.round((contributedCount / actualTotal) * 100));
=======
  const actualTotal = totalCount || 128;
  const percentage = Math.min(100, Math.round((contributedCount / actualTotal) * 100)) || 81;
>>>>>>> 3868df1 (Update website and add flower favicon)

  // SVG Circle calculations
  const radius = 15.9155;
  const circumference = 100;
  const strokeDashoffset = circumference - (percentage * circumference) / 100;

  return (
    <section className="bg-[#FCE4EC]/70 backdrop-blur-md rounded-2xl p-8 border border-[#D9C1C4]/40 shadow-[0px_8px_24px_rgba(149,68,89,0.05)] flex flex-col justify-center items-center text-center h-full">
      <h3 className="font-['Playfair_Display'] text-xl md:text-2xl font-bold text-[#954459] mb-6">
        Class Participation
      </h3>

      <div className="relative w-48 h-48 md:w-52 md:h-52 mb-6">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          {/* Background circle */}
          <path
            className="text-[#FBF2E8]"
            strokeWidth="3.8"
            stroke="currentColor"
            fill="none"
            d={`M18 2.0845 a ${radius} ${radius} 0 0 1 0 31.831 a ${radius} ${radius} 0 0 1 0 -31.831`}
          />
          {/* Animated fill circle */}
          <path
            className="text-[#954459] transition-all duration-1000 ease-out"
            strokeDasharray={`${percentage}, 100`}
            strokeWidth="3.4"
            strokeLinecap="round"
            stroke="currentColor"
            fill="none"
            d={`M18 2.0845 a ${radius} ${radius} 0 0 1 0 31.831 a ${radius} ${radius} 0 0 1 0 -31.831`}
          />
        </svg>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="font-['Inter'] text-4xl font-bold text-[#954459] tracking-tight">
            {percentage}%
          </span>
          <span className="text-[10px] font-sans font-bold text-[#4A6545] uppercase tracking-widest mt-0.5">
            Turnout
          </span>
        </div>
      </div>

      <p className="font-['Caveat'] text-2xl text-[#954459]/90 mb-2">
        "Our Class, Our Gratitude."
      </p>
      <p className="text-xs font-sans font-bold text-[#954459]/70 uppercase tracking-widest">
        {contributedCount}/{actualTotal} students contributed
      </p>
    </section>
  );
};

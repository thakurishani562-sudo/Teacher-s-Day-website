import React from 'react';

interface CollectiveProgressProps {
  totalAmount: number;
  goalAmount: number;
  percentage: number;
  studentsContributed: number;
  totalStudents: number;
  daysLeft: number;
}

export const CollectiveProgress: React.FC<CollectiveProgressProps> = ({
  totalAmount,
  goalAmount,
  percentage,
  studentsContributed,
  totalStudents,
  daysLeft,
}) => {
  const displayPercentage = Math.min(100, Math.round((totalAmount / goalAmount) * 100));

  return (
    <section className="bg-white/85 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-[#D9C1C4]/40 shadow-[0px_8px_30px_rgba(149,68,89,0.06)] w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
        <div>
          <h2 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-[#954459] mb-1 flex items-center gap-1.5">
            <span>Our Collective Gift</span>
            <span className="text-[#4A6545] text-2xl md:text-3xl font-['Caveat']">♡</span>
          </h2>
          <p className="font-sans text-sm text-[#534245]">
            Approaching our department goal to honor our respected educators.
          </p>
        </div>

        <div className="text-left sm:text-right">
          <span className="font-['Inter'] text-2xl md:text-3xl font-bold text-[#954459]">
            ₹ {totalAmount.toLocaleString('en-IN')}
          </span>
          <span className="font-sans text-sm text-[#867275] ml-2">
            / ₹ {goalAmount.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#FBF2E8] h-4 md:h-5 rounded-full overflow-hidden mb-3 border border-[#D9C1C4]/30 shadow-inner p-0.5">
        <div
          className="bg-gradient-to-r from-[#954459] via-[#D97B91] to-[#4A6545] h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${Math.max(5, displayPercentage)}%` }}
        />
      </div>

      {/* Progress Subtitle */}
      <div className="flex justify-between font-sans text-xs uppercase tracking-wider text-[#534245] mb-8 font-semibold">
        <span>₹ 0</span>
        <span className="text-[#4A6545] font-bold">
          {displayPercentage}% of our ₹ {goalAmount.toLocaleString('en-IN')} goal
        </span>
        <span>Goal</span>
      </div>

      {/* 3 Metric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#954459]/15">
        <div className="text-left">
          <div className="font-['Inter'] text-2xl md:text-3xl font-bold text-[#954459] mb-1">
            {studentsContributed}
          </div>
          <div className="text-[11px] font-sans font-bold text-[#954459]/70 uppercase tracking-widest">
            Students Contributed
          </div>
        </div>

        <div className="text-left">
          <div className="font-['Inter'] text-2xl md:text-3xl font-bold text-[#954459] mb-1">
            {totalStudents}
          </div>
          <div className="text-[11px] font-sans font-bold text-[#954459]/70 uppercase tracking-widest">
<<<<<<< HEAD
            Total IT Students
=======
            Total ME Students
>>>>>>> 3868df1 (Update website and add flower favicon)
          </div>
        </div>

        <div className="text-left">
          <div className="font-['Inter'] text-2xl md:text-3xl font-bold text-[#4A6545] mb-1">
            {daysLeft}
          </div>
          <div className="text-[11px] font-sans font-bold text-[#954459]/70 uppercase tracking-widest">
            Days Left (Sept 5)
          </div>
        </div>
      </div>
    </section>
  );
};

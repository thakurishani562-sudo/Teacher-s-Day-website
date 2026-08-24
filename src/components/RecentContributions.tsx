import React from 'react';
import { Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { ContributionItem } from '../types';
import { formatName } from '../utils/csvParser';

interface RecentContributionsProps {
  contributions: ContributionItem[];
  onViewAll: () => void;
}

export const RecentContributions: React.FC<RecentContributionsProps> = ({
  contributions,
  onViewAll,
}) => {
  // Show up to 4 latest items
  const displayItems = contributions.slice(0, 4);

  // Avatar color generator based on student name
  const getAvatarStyle = (index: number) => {
    const styles = [
      'bg-[#C2D9BB]/80 text-[#334D2F] border-[#A8C69F]',
      'bg-[#FFD9DF]/80 text-[#954459] border-[#FFB1C1]',
      'bg-[#EAE1D7]/80 text-[#534245] border-[#D9C1C4]',
      'bg-[#C9E8BF]/80 text-[#082007] border-[#A8C69F]',
    ];
    return styles[index % styles.length];
  };

  const getInitials = (name: string) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section className="bg-[#FFF9C4]/60 backdrop-blur-md rounded-2xl p-7 md:p-8 border border-[#D9C1C4]/40 shadow-[0px_8px_24px_rgba(149,68,89,0.05)] flex flex-col h-full justify-between">
      <div>
        <h3 className="font-['Playfair_Display'] text-xl md:text-2xl font-bold text-[#954459] mb-6 flex items-center gap-2.5">
          <Clock className="w-5 h-5 text-[#4A6545]" />
          <span>Recent Contributions</span>
        </h3>

        <div className="space-y-4">
          {displayItems.length === 0 ? (
            <p className="text-sm text-[#867275] py-8 text-center">
              Fetching contributions from Google Sheets...
            </p>
          ) : (
            displayItems.map((item, idx) => (
              <div
                key={`${item.rollNo}-${item.sNo}-${idx}`}
                className="flex items-center justify-between py-3 border-b border-[#954459]/15 group hover:bg-white/40 px-2 rounded-xl transition-all"
              >
                <div className="flex items-center gap-4">
                  {/* Initials Badge */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-xs border shrink-0 ${getAvatarStyle(
                      idx
                    )}`}
                  >
                    {getInitials(item.name)}
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-sans font-semibold text-sm text-[#1F1B15] group-hover:text-[#954459] transition-colors">
                        {formatName(item.name)}
                      </p>
                      <CheckCircle className="w-3.5 h-3.5 text-[#4A6545]" />
                    </div>
                    <p className="text-[11px] font-sans text-[#954459]/80 uppercase tracking-wider mt-0.5">
                      {item.year || '1ST YEAR'} {item.branch || 'IT'} • {item.dateOfPayment}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-['Inter'] text-lg font-bold text-[#954459]">
                    ₹ {item.amount.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[10px] text-[#534245] bg-[#FFF8F1] px-1.5 py-0.5 rounded border border-[#D9C1C4]/40 font-medium">
                    via {item.receiver}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <button
        onClick={onViewAll}
        className="mt-6 w-full py-3.5 px-4 bg-white/60 hover:bg-white border border-[#D9C1C4]/60 rounded-xl text-[#954459] font-semibold text-sm hover:text-[#4A6545] transition-all flex justify-center items-center gap-2 shadow-xs group"
      >
        <span>View All Contributions ({contributions.length})</span>
        <ArrowRight className="w-4 h-4 text-[#954459] group-hover:translate-x-1 transition-transform" />
      </button>
    </section>
  );
};

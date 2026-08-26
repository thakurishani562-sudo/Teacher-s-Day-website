import React from 'react';
import { Heart, Flower2, Users } from 'lucide-react';
import { ReceiverSummary } from '../types';

interface CollectorCardsProps {
  receivers: Record<string, ReceiverSummary>;
}

export const CollectorCards: React.FC<CollectorCardsProps> = ({ receivers }) => {
  // Ensure default receivers exist or fallback
<<<<<<< HEAD
  const aastha = receivers['Aastha'] || {
    name: "Aastha's Collection",
    roleDescription: 'Coordinating contributions from Section A',
    total: 0,
    today: 0,
    count: 0,
    section: 'Section A',
    icon: 'favorite',
  };

  const parash = receivers['Parash'] || {
    name: "Parash's Collection",
    roleDescription: 'Leading the outreach for Section B',
    total: 0,
    today: 0,
    count: 0,
    section: 'Section B',
=======
  const aastha = receivers['Kaya'] || {
    name: "Kaya's Collection",
    roleDescription: 'Coordinating contributions',
    total: 0,
    today: 0,
    count: 0,
    section: 'Coordinator',
    icon: 'favorite',
  };

  const parash = receivers['Ankit'] || {
    name: "Ankit's Collection",
    roleDescription: 'Leading the outreach',
    total: 0,
    today: 0,
    count: 0,
    section: 'Coordinator',
>>>>>>> 3868df1 (Update website and add flower favicon)
    icon: 'local_florist',
  };

  // Other receivers if any exist in the sheet
<<<<<<< HEAD
  const otherKeys = Object.keys(receivers).filter((k) => k !== 'Aastha' && k !== 'Parash');

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Aastha's Card */}
=======
  const otherKeys = Object.keys(receivers).filter((k) => k !== 'Kaya' && k !== 'Ankit');

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* Kaya's Card */}
>>>>>>> 3868df1 (Update website and add flower favicon)
      <div className="bg-[#FCE4EC]/90 backdrop-blur-md rounded-2xl p-7 border border-[#D9C1C4]/40 flex flex-col justify-between relative overflow-hidden shadow-[0px_8px_24px_rgba(149,68,89,0.06)] hover:-translate-y-1 transition-all duration-300 group">
        {/* Background icon watermark */}
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-15 transition-opacity text-[#954459] pointer-events-none">
          <Heart className="w-20 h-20 fill-current" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-sans text-xs font-bold text-[#534245] uppercase tracking-widest">
              {aastha.name}
            </h3>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/70 text-[#954459] border border-[#D9C1C4]/30">
              {aastha.count} Students
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-sans font-bold text-[#954459]/70 uppercase tracking-widest">
                Total Collected
              </p>
              <div className="font-['Inter'] text-3xl font-bold text-[#954459]">
                ₹ {aastha.total.toLocaleString('en-IN')}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-sans font-bold text-[#954459]/70 uppercase tracking-widest">
                Recent / Today
              </p>
              <div className="font-['Inter'] text-xl font-bold text-[#4A6545]">
                ₹ {aastha.today.toLocaleString('en-IN')}
              </div>
            </div>
          </div>
        </div>

        <p className="font-['Caveat'] text-lg text-[#954459]/80 mt-6 pt-4 border-t border-[#954459]/15">
          {aastha.roleDescription}
        </p>
      </div>

<<<<<<< HEAD
      {/* Parash's Card */}
=======
      {/* Ankit's Card */}
>>>>>>> 3868df1 (Update website and add flower favicon)
      <div className="bg-[#FCE4EC]/90 backdrop-blur-md rounded-2xl p-7 border border-[#D9C1C4]/40 flex flex-col justify-between relative overflow-hidden shadow-[0px_8px_24px_rgba(149,68,89,0.06)] hover:-translate-y-1 transition-all duration-300 group">
        {/* Background icon watermark */}
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-15 transition-opacity text-[#4A6545] pointer-events-none">
          <Flower2 className="w-20 h-20" />
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-sans text-xs font-bold text-[#534245] uppercase tracking-widest">
              {parash.name}
            </h3>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/70 text-[#4A6545] border border-[#A8C69F]/40">
              {parash.count} Students
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-sans font-bold text-[#954459]/70 uppercase tracking-widest">
                Total Collected
              </p>
              <div className="font-['Inter'] text-3xl font-bold text-[#954459]">
                ₹ {parash.total.toLocaleString('en-IN')}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-sans font-bold text-[#954459]/70 uppercase tracking-widest">
                Recent / Today
              </p>
              <div className="font-['Inter'] text-xl font-bold text-[#4A6545]">
                ₹ {parash.today.toLocaleString('en-IN')}
              </div>
            </div>
          </div>
        </div>

        <p className="font-['Caveat'] text-lg text-[#954459]/80 mt-6 pt-4 border-t border-[#954459]/15">
          {parash.roleDescription}
        </p>
      </div>

      {/* If any additional coordinators are added dynamically */}
      {otherKeys.length > 0 &&
        otherKeys.map((key) => {
          const item = receivers[key];
          return (
            <div
              key={key}
              className="md:col-span-2 bg-[#FFF8F1] rounded-2xl p-6 border border-[#D9C1C4]/40 flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C9E8BF]/50 text-[#4A6545] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#954459]">{item.name}</h4>
                  <p className="text-xs text-[#867275]">{item.roleDescription}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-right">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#867275] block">Total</span>
                  <span className="font-bold text-lg text-[#954459]">
                    ₹ {item.total.toLocaleString('en-IN')}
                  </span>
                </div>
                <span className="px-3 py-1 bg-[#C9E8BF]/50 text-[#4F6A49] text-xs font-bold rounded-full">
                  {item.count} Contributed
                </span>
              </div>
            </div>
          );
        })}
    </section>
  );
};

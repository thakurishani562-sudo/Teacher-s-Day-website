import React from 'react';
import { ShieldCheck, CheckCircle2, PieChart, Users, FileText, HelpCircle, Heart } from 'lucide-react';
import { TRANSPARENCY_EXPENSES } from '../data/mockData';

interface TransparencyViewProps {
  totalCollected: number;
  goalAmount: number;
}

export const TransparencyView: React.FC<TransparencyViewProps> = ({ totalCollected, goalAmount }) => {
  const totalEstimatedCost = TRANSPARENCY_EXPENSES.reduce((sum, e) => sum + e.estimatedCost, 0);

  return (
    <div className="space-y-10 w-full">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C9E8BF]/50 text-[#4F6A49] rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-[#A8C69F]/40">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>100% Student Verified & Audited</span>
        </div>
        <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-bold text-[#954459] mb-3">
          Transparency & Fund Allocation
        </h2>
        <p className="text-xs md:text-sm text-[#534245]">
          Every single rupee contributed by IT 1st Year students is publicly accounted for and dedicated
          solely to honor our teachers.
        </p>
      </div>

      {/* Budget Summary Banner */}
      <div className="bg-white/85 backdrop-blur-md rounded-2xl p-8 border border-[#D9C1C4]/40 shadow-xs grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <span className="text-[10px] font-sans font-bold text-[#954459]/70 uppercase tracking-widest block">
            Total Fund Collected (Live)
          </span>
          <div className="font-['Inter'] text-3xl font-bold text-[#954459] mt-1">
            ₹ {totalCollected.toLocaleString('en-IN')}
          </div>
          <p className="text-[11px] text-[#867275] mt-0.5">Synced real-time with Google Sheet</p>
        </div>

        <div>
          <span className="text-[10px] font-sans font-bold text-[#954459]/70 uppercase tracking-widest block">
            Target Budget Goal
          </span>
          <div className="font-['Inter'] text-3xl font-bold text-[#4A6545] mt-1">
            ₹ {goalAmount.toLocaleString('en-IN')}
          </div>
          <p className="text-[11px] text-[#867275] mt-0.5">Estimated celebration cost</p>
        </div>

        <div>
          <span className="text-[10px] font-sans font-bold text-[#954459]/70 uppercase tracking-widest block">
            Estimated Allocation Total
          </span>
          <div className="font-['Inter'] text-3xl font-bold text-[#534245] mt-1">
            ₹ {totalEstimatedCost.toLocaleString('en-IN')}
          </div>
          <p className="text-[11px] text-[#4A6545] mt-0.5 font-semibold">100% Itemized & Accounted</p>
        </div>
      </div>

      {/* Itemized Allocation List */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#D9C1C4]/50 shadow-sm space-y-6">
        <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#954459] flex items-center gap-2">
          <PieChart className="w-5 h-5 text-[#4A6545]" />
          <span>Planned Expense Breakdown</span>
        </h3>

        <div className="space-y-4">
          {TRANSPARENCY_EXPENSES.map((expense, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#FFF8F1] border border-[#D9C1C4]/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-[#F6ECE3]/40 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm text-[#1F1B15]">{expense.category}</h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#C9E8BF]/60 text-[#334D2F]">
                    {expense.percentage}%
                  </span>
                </div>
                <p className="text-xs text-[#534245] max-w-xl leading-relaxed">
                  {expense.description}
                </p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <div className="font-['Inter'] text-lg font-bold text-[#954459]">
                  ₹ {expense.estimatedCost.toLocaleString('en-IN')}
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#4A6545]">
                  <CheckCircle2 className="w-3 h-3" />
                  {expense.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coordinators Signed Declaration */}
      <div className="bg-[#FFF9C4]/60 backdrop-blur-md rounded-2xl p-8 border border-[#D9C1C4]/40 space-y-4">
        <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#954459] flex items-center gap-2">
          <Users className="w-5 h-5 text-[#4A6545]" />
          <span>Coordinators' Financial Pledge</span>
        </h3>
        <p className="text-xs md:text-sm text-[#534245] leading-relaxed">
          We, the elected student coordinators of the 1st Year IT Department, pledge that all collections
          are recorded transparently in the centralized Google Sheet. Physical purchase receipts and bills
          for the mementos, flowers, and event refreshments will be photographed and shared in the batch
          WhatsApp group immediately following the event.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#954459]/15">
          <div className="p-3 bg-white/80 rounded-xl border border-[#D9C1C4]/40">
<<<<<<< HEAD
            <p className="font-['Caveat'] text-2xl text-[#954459]">Aastha Kashyap</p>
            <p className="text-xs font-semibold text-[#1F1B15]">Student Coordinator (Section A)</p>
            <p className="text-[11px] text-[#867275]">IT 1st Year • Roll: 2511101</p>
          </div>

          <div className="p-3 bg-white/80 rounded-xl border border-[#D9C1C4]/40">
            <p className="font-['Caveat'] text-2xl text-[#954459]">Parash Kumar</p>
            <p className="text-xs font-semibold text-[#1F1B15]">Student Coordinator (Section B)</p>
            <p className="text-[11px] text-[#867275]">IT 1st Year • Roll: 2511132</p>
=======
            <p className="font-['Caveat'] text-2xl text-[#954459]">Kaya</p>
            <p className="text-xs font-semibold text-[#1F1B15]">Student Coordinator</p>
            <p className="text-[11px] text-[#867275]">ME 1st Year • Roll: 2511101</p>
          </div>

          <div className="p-3 bg-white/80 rounded-xl border border-[#D9C1C4]/40">
            <p className="font-['Caveat'] text-2xl text-[#954459]">Ankit</p>
            <p className="text-xs font-semibold text-[#1F1B15]">Student Coordinator</p>
            <p className="text-[11px] text-[#867275]">ME 1st Year • Roll: 2511132</p>
>>>>>>> 3868df1 (Update website and add flower favicon)
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white/80 rounded-2xl p-8 border border-[#D9C1C4]/40 space-y-4">
        <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#954459] flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#4A6545]" />
          <span>Frequently Asked Questions</span>
        </h3>

        <div className="space-y-3 text-xs text-[#534245]">
          <div className="p-3 bg-[#FFF8F1] rounded-xl">
            <p className="font-bold text-[#954459] mb-1">What if more funds are collected than needed?</p>
            <p>Any remaining surplus will be carried forward to the IT Department Student Welfare Fund or utilized for upcoming technical orientation events with full batch consensus.</p>
          </div>
          <div className="p-3 bg-[#FFF8F1] rounded-xl">
            <p className="font-bold text-[#954459] mb-1">How fast does my payment reflect in the sheet?</p>
            <p>Once paid to either coordinator, transactions are validated and updated in the official Google Sheet within 5-15 minutes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

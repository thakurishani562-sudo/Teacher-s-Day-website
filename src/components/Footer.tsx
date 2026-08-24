import React, { useState } from 'react';
import { ShieldCheck, Mail, X } from 'lucide-react';
import { GitHubOfficialLogo, LinkedInOfficialLogo } from './OfficialLogos';

interface FooterProps {
  lastUpdated: string;
}

export const Footer: React.FC<FooterProps> = ({ lastUpdated }) => {
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);

  return (
    <footer className="w-full py-12 px-4 md:px-10 border-t border-[#D9C1C4]/40 mt-auto bg-[#FFF8F3]/95 backdrop-blur-md relative z-20">
      {/* Top row: Transparency Banner */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <span className="text-xs font-bold text-[#4A6545] uppercase tracking-widest flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Transparency Report</span>
          </span>
          <span className="text-[#534245] text-xs border-l border-[#D9C1C4]/60 pl-6 hidden md:inline-block">
            Where We Stand: All funds collected go towards the centralized gift, bouquets, and teacher celebration.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[11px] font-bold text-[#954459]/70 uppercase tracking-widest">
            Last updated: {lastUpdated || 'Today, 8:42 PM'}
          </span>
        </div>
      </div>

      {/* Bottom row: Credits, Official Social Logos & Policy Links */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t border-[#D9C1C4]/30 text-xs">
        {/* Creator Credit with Heart */}
        <div className="flex items-center gap-2 text-[#534245]">
          <span>Made with</span>
          <span className="text-[#4A6545] font-['Caveat'] text-2xl font-bold align-middle">
            ♡
          </span>
          <span>by <strong className="text-[#954459] font-semibold">Ishani</strong></span>
        </div>

        {/* Official Social / Contact Logos */}
        <div className="flex items-center gap-5 my-4 md:my-0 text-[#954459]">
          {/* Official GitHub Logo */}
          <a
            href="https://github.com/thakurishani562-sudo"
            target="_blank"
            rel="noopener noreferrer"
            title="Ishani's GitHub Profile"
            className="text-[#954459] hover:text-[#4A6545] hover:scale-110 transition-all p-1"
          >
            <GitHubOfficialLogo className="w-5 h-5 fill-current" />
          </a>

          {/* Official LinkedIn Logo */}
          <a
            href="https://www.linkedin.com/in/ishani-thakur-438703385"
            target="_blank"
            rel="noopener noreferrer"
            title="Ishani's LinkedIn Profile"
            className="text-[#954459] hover:text-[#4A6545] hover:scale-110 transition-all p-1"
          >
            <LinkedInOfficialLogo className="w-5 h-5 fill-current" />
          </a>

          {/* Official Mail */}
          <a
            href="mailto:thakurishani562@gmail.com"
            title="Send Email to Ishani"
            className="text-[#954459] hover:text-[#4A6545] hover:scale-110 transition-all p-1"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Policy Links */}
        <div className="flex gap-6 uppercase tracking-widest text-[11px] font-bold text-[#954459]/80">
          <button
            onClick={() => setModalType('terms')}
            className="hover:text-[#4A6545] transition-colors cursor-pointer"
          >
            Terms
          </button>
          <button
            onClick={() => setModalType('privacy')}
            className="hover:text-[#4A6545] transition-colors cursor-pointer"
          >
            Privacy
          </button>
        </div>
      </div>

      {/* Terms / Privacy Modal Dialog */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-[#FFF8F3] rounded-2xl max-w-md w-full p-6 border border-[#D9C1C4]/60 shadow-2xl relative">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-[#867275] hover:text-[#954459] hover:bg-[#F6ECE3]"
            >
              <X className="w-4 h-4" />
            </button>
            <h4 className="font-['Playfair_Display'] text-xl font-bold text-[#954459] mb-3">
              {modalType === 'terms' ? 'Terms of Fund Contribution' : 'Privacy & Data Policy'}
            </h4>
            <div className="text-xs text-[#534245] space-y-2 leading-relaxed">
              {modalType === 'terms' ? (
                <>
                  <p>
                    1. All contributions are voluntary and made by students of the 1st Year Information Technology department.
                  </p>
                  <p>
                    2. Collected funds are strictly utilized for Teacher’s Day honor gifts, bouquets, cards, and celebration refreshments.
                  </p>
                  <p>
                    3. Records are audited via the official Google Sheet and publicly viewable to all batch members.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    1. Student roll numbers and names displayed on the ledger are sourced directly from the coordinator-maintained Google Sheet for transparency.
                  </p>
                  <p>
                    2. No private payment credentials or banking PINs are stored or transmitted by this portal.
                  </p>
                  <p>
                    3. For any correction requests in name spelling or payment records, contact coordinators Aastha Kashyap or Parash Kumar.
                  </p>
                </>
              )}
            </div>
            <button
              onClick={() => setModalType(null)}
              className="mt-6 w-full py-2 bg-[#954459] text-white text-xs font-bold rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

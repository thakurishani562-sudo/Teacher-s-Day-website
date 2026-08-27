import React from 'react';
import { GitHubOfficialLogo } from './OfficialLogos';

interface FooterProps {
  lastUpdated: string;
}

export const Footer: React.FC<FooterProps> = ({ lastUpdated }) => {
  return (
    <footer className="w-full py-10 px-4 md:px-10 border-t border-[#D9C1C4]/40 mt-auto bg-[#FFF8F3]/95 backdrop-blur-md relative z-20">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-5">

        {/* Made with Love */}
        <div className="flex items-center gap-2 text-[#534245]">
          <span>Made with</span>

          <span className="text-[#4A6545] font-['Caveat'] text-2xl font-bold">
            ♡
          </span>

          <span>
            by{' '}
            <strong className="text-[#954459] font-semibold">
              Ishani
            </strong>
          </span>
        </div>

        {/* GitHub Profile */}
        <a
          href="https://github.com/thakurishani562-sudo"
          target="_blank"
          rel="noopener noreferrer"
          title="Ishani's GitHub Profile"
          className="text-[#954459] hover:text-[#4A6545] hover:scale-110 transition-all p-1"
        >
          <GitHubOfficialLogo className="w-5 h-5 fill-current" />
        </a>

      </div>
    </footer>
  );
};
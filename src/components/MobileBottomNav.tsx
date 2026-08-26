import React from 'react';
<<<<<<< HEAD
import { LayoutDashboard, History, ShieldCheck } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: 'dashboard' | 'history' | 'transparency';
  setActiveTab: (tab: 'dashboard' | 'history' | 'transparency') => void;
=======
import { LayoutDashboard, History } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: 'dashboard' | 'history';
  setActiveTab: (tab: 'dashboard' | 'history') => void;
>>>>>>> 3868df1 (Update website and add flower favicon)
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
<<<<<<< HEAD
    { id: 'history', label: 'Ledger', icon: History },
    { id: 'transparency', label: 'Audit', icon: ShieldCheck },
=======
    { id: 'history', label: 'Contribution', icon: History },
>>>>>>> 3868df1 (Update website and add flower favicon)
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 w-full z-40 flex justify-around items-center px-4 py-2.5 md:hidden bg-[#FFF8F3]/95 backdrop-blur-md shadow-[0px_-4px_20px_rgba(149,68,89,0.08)] border-t border-[#D9C1C4]/40 rounded-t-2xl">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
              isActive
                ? 'text-[#954459] bg-[#C9E8BF]/50 font-bold scale-105'
                : 'text-[#534245] hover:text-[#4A6545]'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'text-[#954459]' : 'text-[#867275]'}`} />
            <span className="text-[10px] font-sans uppercase tracking-wider mt-1">
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

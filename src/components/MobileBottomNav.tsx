import React from 'react';
import { LayoutDashboard, History } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: 'dashboard' | 'history';
  setActiveTab: (tab: 'dashboard' | 'history') => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      id: 'history',
      label: 'Contributions',
      icon: History,
    },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#FFF8F3]/95 backdrop-blur-md border-t border-[#D9C1C4]/40">
      <div className="flex items-center justify-around px-4 py-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all ${
                isActive
                  ? 'text-[#4F6A49] bg-[#C9E8BF]/50'
                  : 'text-[#867275] hover:text-[#954459]'
              }`}
            >
              <Icon className="w-5 h-5" />

              <span className="text-[10px] font-semibold">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
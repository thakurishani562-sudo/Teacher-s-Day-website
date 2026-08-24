import React from 'react';
import { LayoutDashboard, History, ShieldCheck, Plus, RefreshCw, FileSpreadsheet } from 'lucide-react';

interface SidebarProps {
  activeTab: 'dashboard' | 'history' | 'transparency';
  setActiveTab: (tab: 'dashboard' | 'history' | 'transparency') => void;
  onOpenAddModal: () => void;
  onRefresh: () => void;
  isRefreshing: boolean;
  totalCollected: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  onOpenAddModal,
  onRefresh,
  isRefreshing,
  totalCollected,
}) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'history', label: 'History', icon: History },
    { id: 'transparency', label: 'Transparency', icon: ShieldCheck },
  ] as const;

  return (
    <aside
      id="main-sidebar"
      className="hidden md:flex flex-col h-[calc(100vh-4rem)] w-64 p-6 space-y-4 bg-[#FBF2E8]/60 backdrop-blur-md border-r border-[#D9C1C4]/30 fixed left-0 top-16 z-40"
    >
      {/* College & Department Brand */}
      <div className="mb-6 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-[#FFD9DF] to-[#C9E8BF] p-0.5 border border-[#D9C1C4]/40 flex items-center justify-center shadow-sm">
          <div className="w-full h-full rounded-full bg-[#FFF8F3] flex items-center justify-center">
            <span className="font-['Playfair_Display'] font-bold text-sm text-[#954459]">IT</span>
          </div>
        </div>
        <div>
          <h2 className="font-['Playfair_Display'] text-base font-bold text-[#954459] leading-tight">
            IT Dept 2026
          </h2>
          <p className="font-sans text-xs text-[#534245]">Teacher's Day Fund</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                isActive
                  ? 'bg-[#C9E8BF]/60 text-[#4F6A49] font-bold border border-[#A8C69F]/40 shadow-sm'
                  : 'text-[#534245] hover:bg-[#EAE1D7]/50 hover:text-[#954459]'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#4A6545]' : 'text-[#867275]'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Quick Add Contribution Button */}
      <button
        onClick={onOpenAddModal}
        className="w-full py-3 px-4 rounded-xl bg-[#F6ECE3] text-[#954459] font-semibold hover:bg-[#FFD9DF]/60 transition-all flex items-center justify-center gap-2 border border-[#D9C1C4]/50 shadow-sm hover:shadow"
      >
        <Plus className="w-4 h-4 text-[#954459]" />
        <span>Add Contribution</span>
      </button>

      {/* Google Sheet Live Source Box */}
      <div className="pt-4 border-t border-[#D9C1C4]/30 space-y-2">
        <a
          href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSsy-GGkmfUJ3hKu0s2psVNOAF_S3yfJrHgQeInDcsUkgMSRYR0ZXrwhdIhjTs39SdJktjGWdSppEXH/pub?gid=0&single=true&output=csv"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between text-[11px] text-[#4A6545] hover:text-[#954459] font-medium p-2 rounded-lg bg-[#FFF8F1] border border-[#A8C69F]/30"
          title="Open Google Sheet CSV in new tab"
        >
          <div className="flex items-center gap-1.5 truncate">
            <FileSpreadsheet className="w-3.5 h-3.5 text-[#4A6545] shrink-0" />
            <span className="truncate">Google Sheet Active</span>
          </div>
          <span className="text-[10px] bg-[#C9E8BF] text-[#082007] px-1.5 py-0.5 rounded font-bold">
            CSV
          </span>
        </a>

        <button
          onClick={onRefresh}
          disabled={isRefreshing}
          className="w-full flex items-center justify-center gap-1.5 text-[11px] text-[#867275] hover:text-[#954459] py-1"
        >
          <RefreshCw className={`w-3 h-3 ${isRefreshing ? 'animate-spin' : ''}`} />
          <span>{isRefreshing ? 'Refreshing data...' : 'Refresh Sheet Data'}</span>
        </button>
      </div>
    </aside>
  );
};

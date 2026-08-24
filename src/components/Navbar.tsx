import React, { useState } from 'react';
import { Heart, Bell, RefreshCw, Menu, X, CheckCircle2, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: 'dashboard' | 'teachers' | 'history' | 'transparency') => void;
  onOpenAddModal: () => void;
  onRefresh: () => void;
  isRefreshing: boolean;
  lastUpdated: string;
  totalContributors: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenAddModal,
  onRefresh,
  isRefreshing,
  lastUpdated,
  totalContributors,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const navLinks = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'teachers', label: 'Teachers' },
    { id: 'history', label: 'History' },
    { id: 'transparency', label: 'Transparency' },
  ] as const;

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-10 h-16 bg-[#FFF8F3]/90 backdrop-blur-md border-b border-[#D9C1C4]/40 transition-all">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-lg text-[#954459] hover:bg-[#F6ECE3]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <div
          onClick={() => setActiveTab('dashboard')}
          className="cursor-pointer flex items-center gap-2"
        >
          <span className="font-['Playfair_Display'] text-xl md:text-2xl font-bold text-[#954459] tracking-tight">
            IT Branch Honors
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-[#C9E8BF]/50 text-[#4F6A49] rounded-full border border-[#A8C69F]/40">
            2026
          </span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 items-center h-full">
        {navLinks.map((link) => {
          const isActive = activeTab === link.id;
          return (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`h-full flex items-center text-xs uppercase tracking-widest font-semibold transition-all border-b-2 px-1 ${
                isActive
                  ? 'text-[#954459] border-[#954459] font-bold'
                  : 'text-[#534245] border-transparent hover:text-[#4A6545]'
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </nav>

      {/* Action utilities */}
      <div className="flex items-center gap-3 text-[#954459]">
        {/* Sync status button */}
        <button
          onClick={onRefresh}
          disabled={isRefreshing}
          title={`Synced with Google Sheet. Last updated: ${lastUpdated}`}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#4A6545] bg-[#C9E8BF]/30 hover:bg-[#C9E8BF]/50 border border-[#A8C69F]/40 rounded-full transition-all"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-[#954459]' : ''}`} />
          <span className="text-[11px] font-sans">
            {isRefreshing ? 'Syncing Sheet...' : 'Live Sync'}
          </span>
        </button>

        {/* Quick Add CTA */}
        <button
          onClick={onOpenAddModal}
          className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-[#4A6545] hover:bg-[#954459] text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
        >
          <Heart className="w-3.5 h-3.5 fill-current" />
          <span>Contribute</span>
        </button>

        {/* Notifications Drawer Toggle */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-full text-[#954459] hover:bg-[#F6ECE3] transition-colors relative"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D97B91] ring-2 ring-[#FFF8F3]"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-[#D9C1C4]/40 p-4 z-50 text-left animate-in fade-in">
              <div className="flex justify-between items-center pb-2 border-b border-[#EAE1D7]">
                <h4 className="font-['Playfair_Display'] font-semibold text-sm text-[#954459]">
                  Live Activity Feed
                </h4>
                <span className="text-[10px] text-[#867275]">{totalContributors} contributors</span>
              </div>
              <div className="py-2 space-y-2 text-xs text-[#534245]">
                <div className="flex items-start gap-2 p-2 rounded-lg bg-[#FFF8F1]">
                  <CheckCircle2 className="w-4 h-4 text-[#4A6545] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1F1B15]">Google Sheet Synchronized</p>
                    <p className="text-[11px] text-[#867275]">Auto-syncing real-time contributions from Section A & B.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-[#FBF2E8] transition-colors">
                  <Sparkles className="w-4 h-4 text-[#D97B91] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1F1B15]">Teacher's Day is approaching!</p>
                    <p className="text-[11px] text-[#867275]">Centralized department gifts and celebration planning in progress.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Student Avatar */}
        <div className="w-8 h-8 rounded-full bg-[#EAE1D7] overflow-hidden border border-[#D9C1C4]/50 flex items-center justify-center text-xs font-bold text-[#954459]">
          IT
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#FFF8F3] border-b border-[#D9C1C4]/50 p-4 shadow-lg flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left px-4 py-3 rounded-lg text-sm font-semibold tracking-wider uppercase ${
                activeTab === link.id
                  ? 'bg-[#C9E8BF]/40 text-[#4F6A49] font-bold'
                  : 'text-[#534245] hover:bg-[#F6ECE3]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#EAE1D7] flex gap-2">
            <button
              onClick={() => {
                onOpenAddModal();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2.5 bg-[#4A6545] text-white text-xs font-semibold rounded-lg text-center"
            >
              + Add Contribution
            </button>
            <button
              onClick={() => {
                onRefresh();
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2.5 bg-[#F6ECE3] text-[#954459] text-xs font-medium rounded-lg flex items-center justify-center gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Sync
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState, useEffect, useCallback } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { HeroSection } from './components/HeroSection';
import { CollectorCards } from './components/CollectorCards';
import { CollectiveProgress } from './components/CollectiveProgress';
import { RecentContributions } from './components/RecentContributions';
import { ParticipationDonut } from './components/ParticipationDonut';
import { HistoryView } from './components/HistoryView';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { fetchGoogleSheetData, parseGoogleSheetCsv, FALLBACK_CSV } from './utils/csvParser';
import { CollectionSummary } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'history'>('dashboard');
  const [summary, setSummary] = useState<CollectionSummary>(() => parseGoogleSheetCsv(FALLBACK_CSV));
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  // Load data from Google Sheet
  const loadData = useCallback(async () => {
    setIsRefreshing(true);
    try {
      const data = await fetchGoogleSheetData();
      setSummary(data);
    } catch (err) {
      console.error('Error in loadData:', err);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    loadData();

    // Auto refresh every 30 seconds to catch live spreadsheet edits
    const interval = setInterval(() => {
      loadData();
    }, 30000);

    return () => clearInterval(interval);
  }, [loadData]);

  return (
    <div className="min-h-screen bg-[#FFF8F3] text-[#1F1B15] font-['Inter',sans-serif] relative overflow-x-hidden flex flex-col selection:bg-[#C9E8BF] selection:text-[#4F6A49]">
      {/* Background Animated Petals / Orbs */}
      <BackgroundCanvas />

      {/* Top Fixed Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onRefresh={loadData}
        isRefreshing={isRefreshing}
        lastUpdated={summary.lastUpdated}
        totalContributors={summary.totalStudentsContributed}
      />

      {/* Layout: Sidebar + Main Content */}
      <div className="flex flex-1 pt-16 relative">
        {/* Desktop Fixed Sidebar */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onRefresh={loadData}
          isRefreshing={isRefreshing}
          totalCollected={summary.totalAmount}
        />

        {/* Main Content Area */}
        <main className="flex-1 w-full md:pl-64 flex flex-col items-center relative z-10">
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pb-28 pt-8 space-y-12">
            {/* Tab: Dashboard */}
            {activeTab === 'dashboard' && (
              <div className="space-y-12 animate-in fade-in duration-300">
                {/* Hero section */}
                <HeroSection />

                {/* Coordinator Collection Cards */}
                <CollectorCards receivers={summary.receivers} />

                {/* Progress bar and metrics */}
                <CollectiveProgress
                  totalAmount={summary.totalAmount}
                  goalAmount={summary.goalAmount}
                  percentage={summary.percentage}
                  studentsContributed={summary.totalStudentsContributed}
                  totalStudents={summary.totalStudents}
                  daysLeft={summary.daysLeft}
                />

                {/* 2-Column: Recent Contributions & Participation Chart */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <RecentContributions
                      contributions={summary.recentContributions}
                      onViewAll={() => setActiveTab('history')}
                    />
                  </div>
                  <div className="lg:col-span-1">
                    <ParticipationDonut
                      contributedCount={summary.totalStudentsContributed}
                      totalCount={summary.totalStudents}
                    />
                  </div>
                </div>

            
              </div>
            )}

            {/* Tab: History */}
            {activeTab === 'history' && (
              <div className="animate-in fade-in duration-300">
                <HistoryView
                  items={summary.items}
                  onRefresh={loadData}
                  isRefreshing={isRefreshing}
                />
              </div>
            )}
          </div>

          {/* Footer */}
          <Footer lastUpdated={summary.lastUpdated} />
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

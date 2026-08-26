import React, { useState, useMemo } from 'react';
import { Search, Filter, Download, CheckCircle2, ArrowUpDown, RefreshCw, FileSpreadsheet } from 'lucide-react';
import { ContributionItem } from '../types';
import { formatName } from '../utils/csvParser';

interface HistoryViewProps {
  items: ContributionItem[];
  onRefresh: () => void;
  isRefreshing: boolean;
<<<<<<< HEAD
  onOpenAddModal: () => void;
=======
>>>>>>> 3868df1 (Update website and add flower favicon)
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  items,
  onRefresh,
  isRefreshing,
<<<<<<< HEAD
  onOpenAddModal,
=======
>>>>>>> 3868df1 (Update website and add flower favicon)
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [receiverFilter, setReceiverFilter] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'sNo' | 'amount' | 'name' | 'date'>('sNo');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Filtered & Sorted items
  const filteredItems = useMemo(() => {
    return items
      .filter((item) => {
        const matchesSearch =
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.dateOfPayment.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesReceiver =
          receiverFilter === 'ALL' ||
          item.receiver.toLowerCase().includes(receiverFilter.toLowerCase());

        return matchesSearch && matchesReceiver;
      })
      .sort((a, b) => {
        let comp = 0;
        if (sortBy === 'sNo') comp = a.sNo - b.sNo;
        else if (sortBy === 'amount') comp = a.amount - b.amount;
        else if (sortBy === 'name') comp = a.name.localeCompare(b.name);
        else if (sortBy === 'date') comp = a.dateOfPayment.localeCompare(b.dateOfPayment);
        return sortOrder === 'asc' ? comp : -comp;
      });
  }, [items, searchTerm, receiverFilter, sortBy, sortOrder]);

  const totalFilteredAmount = filteredItems.reduce((acc, curr) => acc + curr.amount, 0);

  const handleExportCsv = () => {
    const headers = ['S.NO', 'NAME', 'ROLL NO', 'BRANCH', 'YEAR', 'DATE OF PAYMENT', 'AMOUNT', 'RECEIVER'];
    const rows = filteredItems.map((item) => [
      item.sNo,
      `"${item.name}"`,
      item.rollNo,
      item.branch,
      item.year,
      item.dateOfPayment,
      item.amount,
      item.receiver,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
<<<<<<< HEAD
    link.setAttribute('download', `Teachers_Day_IT_Contributions_${new Date().toISOString().slice(0, 10)}.csv`);
=======
    link.setAttribute('download', `Teachers_Day_ME_Contributions_${new Date().toISOString().slice(0, 10)}.csv`);
>>>>>>> 3868df1 (Update website and add flower favicon)
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleSort = (type: 'sNo' | 'amount' | 'name' | 'date') => {
    if (sortBy === type) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(type);
      setSortOrder('asc');
    }
  };

  return (
    <div className="space-y-8 w-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C9E8BF]/50 text-[#4F6A49] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Public Ledger • Google Sheets Synced</span>
          </div>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#954459]">
            Contribution History
          </h2>
          <p className="text-xs md:text-sm text-[#534245]">
            Transparent audit record of all student contributions received for Teacher's Day 2026.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onRefresh}
            disabled={isRefreshing}
            className="px-3.5 py-2 bg-[#FFF8F1] hover:bg-[#F6ECE3] border border-[#D9C1C4]/60 rounded-xl text-xs font-semibold text-[#954459] flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{isRefreshing ? 'Syncing...' : 'Sync Sheet'}</span>
          </button>

          <button
            onClick={handleExportCsv}
            className="px-3.5 py-2 bg-[#FFF8F1] hover:bg-[#F6ECE3] border border-[#D9C1C4]/60 rounded-xl text-xs font-semibold text-[#4A6545] flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
<<<<<<< HEAD

          <button
            onClick={onOpenAddModal}
            className="px-4 py-2 bg-[#4A6545] hover:bg-[#954459] text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
          >
            + Add Contribution
          </button>
=======
>>>>>>> 3868df1 (Update website and add flower favicon)
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white/80 p-5 rounded-2xl border border-[#D9C1C4]/40 shadow-xs">
          <span className="text-[10px] font-sans font-bold text-[#954459]/70 uppercase tracking-widest block">
            Total Ledger Entries
          </span>
          <div className="font-['Inter'] text-2xl font-bold text-[#954459] mt-1">
            {filteredItems.length} <span className="text-xs text-[#867275] font-normal">of {items.length} total</span>
          </div>
        </div>

        <div className="bg-white/80 p-5 rounded-2xl border border-[#D9C1C4]/40 shadow-xs">
          <span className="text-[10px] font-sans font-bold text-[#954459]/70 uppercase tracking-widest block">
            Total Filtered Amount
          </span>
          <div className="font-['Inter'] text-2xl font-bold text-[#4A6545] mt-1">
            ₹ {totalFilteredAmount.toLocaleString('en-IN')}
          </div>
        </div>

        <div className="bg-white/80 p-5 rounded-2xl border border-[#D9C1C4]/40 shadow-xs">
          <span className="text-[10px] font-sans font-bold text-[#954459]/70 uppercase tracking-widest block">
            Standard Contribution
          </span>
          <div className="font-['Inter'] text-2xl font-bold text-[#954459] mt-1">
            ₹ 100 <span className="text-xs text-[#867275] font-normal">per student</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white/85 p-4 rounded-2xl border border-[#D9C1C4]/40 shadow-xs flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-[#867275] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by student name, roll no, date..."
            className="w-full text-xs pl-9 pr-4 py-2.5 bg-[#FFF8F3] rounded-xl border border-[#D9C1C4]/60 focus:outline-none focus:border-[#954459]"
          />
        </div>

        {/* Receiver Filter */}
        <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <span className="text-[11px] font-bold text-[#534245] uppercase mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[#4A6545]" /> Filter:
          </span>
<<<<<<< HEAD
          {(['ALL', 'Aastha', 'Parash'] as const).map((filter) => (
=======
          {(['ALL', 'Kaya', 'Ankit'] as const).map((filter) => (
>>>>>>> 3868df1 (Update website and add flower favicon)
            <button
              key={filter}
              onClick={() => setReceiverFilter(filter)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shrink-0 ${
                receiverFilter === filter
                  ? 'bg-[#954459] text-white shadow-2xs'
                  : 'bg-[#FFF8F1] text-[#534245] hover:bg-[#F6ECE3] border border-[#D9C1C4]/40'
              }`}
            >
              {filter === 'ALL' ? 'All Receivers' : `via ${filter}`}
            </button>
          ))}
        </div>
      </div>

      {/* Table Ledger */}
      <div className="bg-white rounded-2xl border border-[#D9C1C4]/50 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FFF8F1] border-b border-[#D9C1C4]/50 text-[11px] font-sans font-bold text-[#534245] uppercase tracking-wider">
                <th
                  onClick={() => toggleSort('sNo')}
                  className="py-3.5 px-4 cursor-pointer hover:text-[#954459]"
                >
                  <div className="flex items-center gap-1">
                    <span>S.No.</span>
                    <ArrowUpDown className="w-3 h-3 opacity-60" />
                  </div>
                </th>
                <th
                  onClick={() => toggleSort('name')}
                  className="py-3.5 px-4 cursor-pointer hover:text-[#954459]"
                >
                  <div className="flex items-center gap-1">
                    <span>Student Name</span>
                    <ArrowUpDown className="w-3 h-3 opacity-60" />
                  </div>
                </th>
                <th className="py-3.5 px-4">Roll No.</th>
                <th className="py-3.5 px-4">Branch & Year</th>
                <th
                  onClick={() => toggleSort('date')}
                  className="py-3.5 px-4 cursor-pointer hover:text-[#954459]"
                >
                  <div className="flex items-center gap-1">
                    <span>Date of Payment</span>
                    <ArrowUpDown className="w-3 h-3 opacity-60" />
                  </div>
                </th>
                <th
                  onClick={() => toggleSort('amount')}
                  className="py-3.5 px-4 cursor-pointer hover:text-[#954459] text-right"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Amount (₹)</span>
                    <ArrowUpDown className="w-3 h-3 opacity-60" />
                  </div>
                </th>
                <th className="py-3.5 px-4 text-center">Receiver</th>
                <th className="py-3.5 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE1D7]/60 text-xs">
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-10 text-center text-sm text-[#867275]">
                    No contributions match your current search filters.
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => (
                  <tr key={`${item.sNo}-${item.rollNo}`} className="hover:bg-[#FFF8F3] transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#867275]">{item.sNo}</td>
                    <td className="py-3 px-4 font-semibold text-[#1F1B15]">
                      {formatName(item.name)}
                    </td>
                    <td className="py-3 px-4 font-mono text-[#534245]">{item.rollNo || '-'}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded bg-[#F6ECE3] text-[#534245] font-medium text-[11px]">
                        {item.branch || 'IT'} • {item.year || '1ST'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-[#534245]">{item.dateOfPayment}</td>
                    <td className="py-3 px-4 font-['Inter'] font-bold text-[#954459] text-right">
                      ₹ {item.amount.toLocaleString('en-IN')}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
<<<<<<< HEAD
                          item.receiver.toLowerCase().includes('parash')
=======
                          item.receiver.toLowerCase().includes('ankit')
>>>>>>> 3868df1 (Update website and add flower favicon)
                            ? 'bg-[#C9E8BF]/60 text-[#334D2F] border border-[#A8C69F]/40'
                            : 'bg-[#FFD9DF]/60 text-[#954459] border border-[#FFB1C1]/40'
                        }`}
                      >
                        {item.receiver}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#4A6545]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified</span>
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

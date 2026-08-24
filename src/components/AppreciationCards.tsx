import React, { useState } from 'react';
import { Quote, Heart, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GratitudeNote } from '../types';
import { INITIAL_GRATITUDE_NOTES } from '../data/mockData';

export const AppreciationCards: React.FC = () => {
  const [notes, setNotes] = useState<GratitudeNote[]>(INITIAL_GRATITUDE_NOTES);
  const [showAddForm, setShowAddForm] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [teacherName, setTeacherName] = useState('All IT Faculty');
  const [message, setMessage] = useState('');

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !message.trim()) return;

    const newNote: GratitudeNote = {
      id: `g-${Date.now()}`,
      studentName: studentName.trim(),
      rollNo: rollNo.trim() || 'IT 1st Year',
      teacherName: teacherName.trim(),
      message: message.trim(),
      tag: 'Student Tribute',
      likes: 1,
      timestamp: 'Just now',
    };

    setNotes([newNote, ...notes]);
    setStudentName('');
    setRollNo('');
    setMessage('');
    setShowAddForm(false);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#D97B91', '#A8C69F', '#FFF9C4'],
    });
  };

  const handleLike = (id: string) => {
    setNotes(notes.map((n) => (n.id === id ? { ...n, likes: n.likes + 1 } : n)));
  };

  return (
    <section className="space-y-10 w-full pt-6">
      {/* Title */}
      <div className="text-center">
        <h2 className="font-['Playfair_Display'] text-2xl md:text-4xl font-bold text-[#954459] mb-2">
          More Than a Teacher
        </h2>
        <p className="font-sans text-sm md:text-base text-[#867275]">
          Reflecting on the guidance, inspiration, and impact they've made on our lives.
        </p>
      </div>

      {/* 3 Main Reflection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Guided Us */}
        <div className="bg-[#FFF9C4]/75 backdrop-blur-sm p-8 rounded-2xl border border-[#D9C1C4]/40 relative group hover:bg-[#FFF8F1] transition-all shadow-[0px_6px_20px_rgba(149,68,89,0.04)] hover:-translate-y-1">
          <div className="text-[#4A6545] opacity-20 absolute top-4 right-5 text-5xl font-serif select-none">
            "
          </div>
          <h4 className="font-['Playfair_Display'] text-2xl font-bold text-[#954459] mb-3 flex items-center gap-2">
            <span>Guided Us</span>
          </h4>
          <p className="font-['Caveat'] text-xl text-[#954459]/90 relative z-10 leading-relaxed">
            Through complex algorithms and late-night debugging sessions, your patience never
            wavered.
          </p>
        </div>

        {/* Inspired Us */}
        <div className="bg-[#FFF9C4]/75 backdrop-blur-sm p-8 rounded-2xl border border-[#D9C1C4]/40 relative group hover:bg-[#FFF8F1] transition-all shadow-[0px_6px_20px_rgba(149,68,89,0.04)] hover:-translate-y-1">
          <div className="text-[#4A6545] opacity-20 absolute top-4 right-5 text-5xl font-serif select-none">
            "
          </div>
          <h4 className="font-['Playfair_Display'] text-2xl font-bold text-[#954459] mb-3 flex items-center gap-2">
            <span>Inspired Us</span>
          </h4>
          <p className="font-['Caveat'] text-xl text-[#954459]/90 relative z-10 leading-relaxed">
            To look beyond the code and understand the profound impact technology has on society.
          </p>
        </div>

        {/* Shaped Us */}
        <div className="bg-[#FFF9C4]/75 backdrop-blur-sm p-8 rounded-2xl border border-[#D9C1C4]/40 relative group hover:bg-[#FFF8F1] transition-all shadow-[0px_6px_20px_rgba(149,68,89,0.04)] hover:-translate-y-1">
          <div className="text-[#4A6545] opacity-20 absolute top-4 right-5 text-5xl font-serif select-none">
            "
          </div>
          <h4 className="font-['Playfair_Display'] text-2xl font-bold text-[#954459] mb-3 flex items-center gap-2">
            <span>Shaped Us</span>
          </h4>
          <p className="font-['Caveat'] text-xl text-[#954459]/90 relative z-10 leading-relaxed">
            From hesitant freshers to confident coders, your mentorship is our foundation.
          </p>
        </div>
      </div>

      {/* Student Gratitude Board */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-[#D9C1C4]/40 shadow-xs">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#954459] flex items-center gap-2">
              <Quote className="w-4 h-4 text-[#4A6545]" />
              <span>Student Gratitude Notes</span>
            </h3>
            <p className="text-xs text-[#534245]">
              Personal thank you notes from IT 1st year students to our teachers
            </p>
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-4 py-2 bg-[#FCE4EC] hover:bg-[#FFD9DF] text-[#954459] font-semibold text-xs rounded-xl border border-[#D9C1C4]/50 transition-all flex items-center gap-1.5 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#4A6545]" />
            <span>{showAddForm ? 'Close Note Form' : '+ Leave a Note for Teachers'}</span>
          </button>
        </div>

        {/* Note Submission Form */}
        {showAddForm && (
          <form
            onSubmit={handleAddNote}
            className="mb-8 p-5 bg-[#FFF8F1] rounded-xl border border-[#D9C1C4]/50 space-y-4 animate-in fade-in"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-[#534245] uppercase mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="e.g. Aarav Sharma"
                  className="w-full text-xs p-2.5 bg-white rounded-lg border border-[#D9C1C4] focus:outline-none focus:border-[#954459]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#534245] uppercase mb-1">
                  Roll Number
                </label>
                <input
                  type="text"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  placeholder="e.g. 2511102"
                  className="w-full text-xs p-2.5 bg-white rounded-lg border border-[#D9C1C4] focus:outline-none focus:border-[#954459]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#534245] uppercase mb-1">
                  Dedicate To
                </label>
                <select
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                  className="w-full text-xs p-2.5 bg-white rounded-lg border border-[#D9C1C4] focus:outline-none focus:border-[#954459]"
                >
                  <option value="All IT Faculty">All IT Faculty & Mentors</option>
                  <option value="Dr. Ramesh Sharma (HOD)">Dr. Ramesh Sharma (HOD)</option>
                  <option value="Prof. Vikram Verma">Prof. Vikram Verma (1st Year Incharge)</option>
                  <option value="Prof. Ananya Sen">Prof. Ananya Sen</option>
                  <option value="Dr. Sunita Deshmukh">Dr. Sunita Deshmukh</option>
                  <option value="Prof. Rajesh Nair">Prof. Rajesh Nair</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#534245] uppercase mb-1">
                Your Gratitude Message *
              </label>
              <textarea
                required
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share a sweet memory, appreciation, or thank you note..."
                className="w-full text-xs p-2.5 bg-white rounded-lg border border-[#D9C1C4] focus:outline-none focus:border-[#954459]"
              />
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-3 py-1.5 text-xs text-[#867275] hover:text-[#1F1B15]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 bg-[#4A6545] hover:bg-[#954459] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Post Gratitude Note</span>
              </button>
            </div>
          </form>
        )}

        {/* Notes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((n) => (
            <div
              key={n.id}
              className="p-4 rounded-xl bg-[#FFF8F1] border border-[#D9C1C4]/40 flex flex-col justify-between hover:shadow-sm transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-[#4A6545] bg-[#C9E8BF]/50 px-2 py-0.5 rounded-full">
                    {n.teacherName}
                  </span>
                  <span className="text-[10px] text-[#867275]">{n.timestamp}</span>
                </div>
                <p className="font-['Caveat'] text-lg text-[#1F1B15] leading-snug my-2">
                  "{n.message}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#D9C1C4]/30 mt-2">
                <span className="text-xs font-semibold text-[#954459]">
                  {n.studentName}{' '}
                  {n.rollNo && (
                    <span className="text-[10px] text-[#867275] font-normal">({n.rollNo})</span>
                  )}
                </span>
                <button
                  onClick={() => handleLike(n.id)}
                  className="flex items-center gap-1 text-[11px] text-[#954459] hover:text-[#4A6545] transition-colors"
                >
                  <Heart className="w-3.5 h-3.5 fill-current text-[#D97B91]" />
                  <span>{n.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

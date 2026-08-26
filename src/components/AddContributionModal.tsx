import React, { useState } from 'react';
import { X, Copy, Check, QrCode, Phone, ShieldCheck, Heart, Sparkles, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GOOGLE_SHEET_CSV_URL } from '../utils/csvParser';

interface AddContributionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddContributionModal: React.FC<AddContributionModalProps> = ({ isOpen, onClose }) => {
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
<<<<<<< HEAD
    section: 'Section A',
    amount: '100',
    receiver: 'Aastha Kashyap',
=======
    section: 'Coordinator',
    amount: '100',
    receiver: 'Kaya',
>>>>>>> 3868df1 (Update website and add flower favicon)
    transactionId: '',
  });

  if (!isOpen) return null;

  const upiId = 'itdept2026@upi';

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#954459', '#A8C69F', '#FFF9C4', '#D97B91'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in">
      <div className="bg-[#FFF8F3] rounded-3xl max-w-lg w-full p-6 md:p-8 border border-[#D9C1C4]/60 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#867275] hover:text-[#954459] hover:bg-[#F6ECE3] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#C9E8BF] text-[#334D2F] flex items-center justify-center mx-auto shadow-inner">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#954459]">
              Contribution Registered!
            </h3>
            <p className="text-xs md:text-sm text-[#534245] max-w-xs mx-auto">
              Thank you, <strong className="text-[#954459]">{formData.name}</strong>! Your payment details
              have been recorded for coordinator verification in the official Google Sheet.
            </p>
            <div className="p-4 rounded-xl bg-[#FFF8F1] border border-[#D9C1C4]/40 text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#867275]">Name:</span>
                <span className="font-semibold text-[#1F1B15]">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#867275]">Roll No:</span>
                <span className="font-semibold text-[#1F1B15]">{formData.rollNo}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#867275]">Amount:</span>
                <span className="font-bold text-[#4A6545]">₹ {formData.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#867275]">Coordinator:</span>
                <span className="font-semibold text-[#954459]">{formData.receiver}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="w-full py-3 bg-[#4A6545] hover:bg-[#954459] text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors"
            >
              Done & Return to Dashboard
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Modal Header */}
            <div>
              <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#FFF9C4] text-[#954459] rounded-full text-[10px] font-bold uppercase tracking-widest border border-[#D9C1C4]/40 mb-2">
                <Sparkles className="w-3 h-3 text-[#4A6545]" />
                <span>Teacher's Day Fund 2026</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-[#954459]">
                Add Your Contribution
              </h3>
              <p className="text-xs text-[#534245] mt-1">
                Contribute ₹100 (or custom amount) towards gifts, flowers & department honors.
              </p>
            </div>

            {/* Step 1: Payment Methods / QR & UPI */}
            <div className="p-4 rounded-2xl bg-[#FCE4EC]/70 border border-[#D9C1C4]/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#954459] uppercase tracking-wider flex items-center gap-1.5">
                  <QrCode className="w-4 h-4 text-[#4A6545]" />
                  <span>Step 1: Scan / Pay via UPI</span>
                </span>
                <span className="text-[10px] bg-white/80 px-2 py-0.5 rounded-md text-[#4A6545] font-bold border border-[#A8C69F]/30">
                  PhonePe / GPay / Paytm
                </span>
              </div>

              {/* UPI ID copy box */}
              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#D9C1C4]/60">
                <div>
                  <span className="text-[10px] text-[#867275] uppercase block font-bold">Official UPI ID</span>
                  <span className="font-mono text-sm font-bold text-[#954459]">{upiId}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyUpi}
                  className="flex items-center gap-1 px-3 py-1.5 bg-[#F6ECE3] hover:bg-[#FFD9DF] text-[#954459] rounded-lg text-xs font-semibold transition-colors"
                >
                  {copiedUpi ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#4A6545]" />
                      <span className="text-[#4A6545]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy UPI</span>
                    </>
                  )}
                </button>
              </div>

              {/* Coordinator Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                <div className="p-2.5 bg-white/70 rounded-xl border border-[#D9C1C4]/40">
<<<<<<< HEAD
                  <p className="font-bold text-[#954459]">Aastha Kashyap</p>
                  <p className="text-[10px] text-[#867275]">Section A Coordinator</p>
=======
                  <p className="font-bold text-[#954459]">Kaya</p>
                  <p className="text-[10px] text-[#867275]">Coordinator</p>
>>>>>>> 3868df1 (Update website and add flower favicon)
                  <p className="text-[11px] font-mono text-[#4A6545] mt-1 flex items-center gap-1">
                    <Phone className="w-3 h-3" /> +91 98765 43210
                  </p>
                </div>
                <div className="p-2.5 bg-white/70 rounded-xl border border-[#D9C1C4]/40">
<<<<<<< HEAD
                  <p className="font-bold text-[#954459]">Parash Kumar</p>
                  <p className="text-[10px] text-[#867275]">Section B Coordinator</p>
=======
                  <p className="font-bold text-[#954459]">Ankit</p>
                  <p className="text-[10px] text-[#867275]">Coordinator</p>
>>>>>>> 3868df1 (Update website and add flower favicon)
                  <p className="text-[11px] font-mono text-[#4A6545] mt-1 flex items-center gap-1">
                    <Phone className="w-3 h-3" /> +91 91234 56789
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: Submission Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <span className="text-[11px] font-bold text-[#954459] uppercase tracking-wider block">
                Step 2: Confirm Your Payment Details
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#534245] uppercase mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ishani Thakur"
                    className="w-full text-xs p-2.5 bg-white rounded-xl border border-[#D9C1C4] focus:outline-none focus:border-[#954459]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#534245] uppercase mb-1">
                    Roll Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.rollNo}
                    onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                    placeholder="e.g. 2511118"
                    className="w-full text-xs p-2.5 bg-white rounded-xl border border-[#D9C1C4] focus:outline-none focus:border-[#954459]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-[#534245] uppercase mb-1">
                    Amount (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    min="50"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    className="w-full text-xs p-2.5 bg-white rounded-xl border border-[#D9C1C4] focus:outline-none focus:border-[#954459]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#534245] uppercase mb-1">
                    Section
                  </label>
                  <select
                    value={formData.section}
                    onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                    className="w-full text-xs p-2.5 bg-white rounded-xl border border-[#D9C1C4] focus:outline-none focus:border-[#954459]"
                  >
<<<<<<< HEAD
                    <option value="Section A">Section A</option>
                    <option value="Section B">Section B</option>
=======
                  <option value="Coordinator">Coordinator</option>
>>>>>>> 3868df1 (Update website and add flower favicon)
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#534245] uppercase mb-1">
                    Paid To
                  </label>
                  <select
                    value={formData.receiver}
                    onChange={(e) => setFormData({ ...formData, receiver: e.target.value })}
                    className="w-full text-xs p-2.5 bg-white rounded-xl border border-[#D9C1C4] focus:outline-none focus:border-[#954459]"
                  >
<<<<<<< HEAD
                    <option value="Aastha Kashyap">Aastha Kashyap</option>
                    <option value="Parash Kumar">Parash Kumar</option>
=======
                  <option value="Kaya">Kaya</option>
                  <option value="Ankit">Ankit</option>
>>>>>>> 3868df1 (Update website and add flower favicon)
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#534245] uppercase mb-1">
                  UPI Ref / UTR / Transaction ID (Optional)
                </label>
                <input
                  type="text"
                  value={formData.transactionId}
                  onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                  placeholder="e.g. 423589123456"
                  className="w-full text-xs p-2.5 bg-white rounded-xl border border-[#D9C1C4] focus:outline-none focus:border-[#954459]"
                />
              </div>

              <div className="flex items-center gap-2 text-[11px] text-[#4A6545] bg-[#C9E8BF]/30 p-2.5 rounded-xl border border-[#A8C69F]/30">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>All contributions are transparently audited and synced to Google Sheets.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#4A6545] hover:bg-[#954459] text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>Submit Contribution Notice</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

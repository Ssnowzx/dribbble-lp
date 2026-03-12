import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ShieldCheck, Mail, Sparkles } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-xl"
          />

          {/* Modal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[540px] glass rounded-[40px] overflow-hidden p-10 md:p-14 shadow-[0_32px_128px_rgba(0,0,0,0.8)]"
          >
            {/* Inner Glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 blur-[80px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 blur-[80px] rounded-full" />

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 w-10 h-10 glass rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center mx-auto mb-10 text-white">
                <Sparkles size={32} />
              </div>
              
              <h2 className="text-4xl font-medium mb-6 tracking-tight">Genesis Access</h2>
              <p className="text-white/50 text-lg mb-12 leading-relaxed">
                Join 10,000+ pioneers in the early access program. Reserved spots are allocated on a first-come basis.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white/60 transition-colors" size={20} />
                  <input 
                    type="email" 
                    placeholder="name@domain.com"
                    className="w-full bg-white/5 border border-white/10 rounded-full py-5 pl-16 pr-8 text-white outline-none focus:border-white/30 transition-all text-lg"
                  />
                </div>

                <button className="w-full relative group rounded-full p-[1px] bg-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                  <div className="relative rounded-full px-8 py-5 bg-white text-black font-bold flex items-center justify-center gap-3">
                    Request Early Access
                    <ArrowRight size={20} />
                  </div>
                </button>
              </form>

              <div className="mt-10 flex items-center justify-center gap-2 text-[11px] font-bold text-white/30 uppercase tracking-[0.2em]">
                <ShieldCheck size={14} className="text-green-500" />
                No Spam. Encrypted Connection.
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WaitlistModal;

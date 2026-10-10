import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const GlassModal = ({
  isOpen,
  onClose,
  title,
  children,
  className = ''
}) => {
  // Close on Escape keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Blurred Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/35 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className={`relative w-full max-w-4xl overflow-hidden rounded-2xl glass-panel p-6 shadow-2xl border border-slate-200/85 bg-white/95 animate-fade-in-up z-10 ${className}`}>
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <h3 className="font-heading text-xl font-bold text-slate-950 tracking-wide">
              {title}
            </h3>
          </div>
        )}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-6 right-6 z-20 text-slate-400 hover:text-slate-800 min-h-11 min-w-11 flex items-center justify-center"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Content */}
        <div className="relative max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GlassModal;

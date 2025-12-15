import { useState } from 'react';
import { Plus, FileText, Bell, Phone, AlertCircle } from 'lucide-react';

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: FileText, label: 'Add symptom log', color: 'bg-[#059669]' },
    { icon: Bell, label: 'Send alert', color: 'bg-[#F59E0B]' },
    { icon: Phone, label: 'Schedule call', color: 'bg-[#059669]' },
    { icon: AlertCircle, label: 'Emergency protocol', color: 'bg-[#EF4444]' },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Action Menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-50 space-y-3 animate-fade-in">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                className={`flex items-center gap-3 ${action.color} text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium whitespace-nowrap">{action.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-[#059669] to-[#10B981] text-white rounded-full shadow-lg hover:shadow-xl transition-all z-50 flex items-center justify-center ${
          isOpen ? 'rotate-45' : ''
        }`}
      >
        <Plus className="w-6 h-6" />
      </button>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in > * {
          animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </>
  );
}

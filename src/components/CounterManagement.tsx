import { ChevronLeft, Menu } from 'lucide-react';

interface CounterManagementProps {
  onBack: () => void;
}

export default function CounterManagement({ onBack }: CounterManagementProps) {
  const counters = [
    { number: '1', officer: 'Ahmed Ali', status: 'active', statusColor: 'bg-emerald-500' },
    { number: '2', officer: 'Fatima Khan', status: 'active', statusColor: 'bg-emerald-500' },
    { number: '3', officer: 'Hassan Raza', status: 'active', statusColor: 'bg-emerald-500' },
    { number: '4', officer: 'Ayesha Malik', status: 'active', statusColor: 'bg-emerald-500' },
    { number: '5', officer: 'Usman Sheikh', status: 'active', statusColor: 'bg-emerald-500' },
  ];

  return (
    <div className="w-full max-w-sm bg-slate-800 rounded-3xl shadow-lg overflow-hidden min-h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 p-4 flex items-center justify-between">
        <button onClick={onBack}>
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
        <h2 className="text-white font-semibold">Counter Management</h2>
        <Menu className="text-white w-6 h-6" />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-4">
        {/* Column Headers */}
        <div className="flex items-center text-sm text-gray-400 mb-2">
          <div className="w-24">Counter No</div>
          <div className="flex-1">Officer Name</div>
          <div className="w-20">Status</div>
        </div>

        {/* Counters List */}
        <div className="space-y-3">
          {counters.map((counter, index) => (
            <div key={index} className="flex items-center bg-slate-700 rounded-lg p-3">
              <div className="w-24 text-white font-semibold">{counter.number}</div>
              <div className="flex-1 text-white">{counter.officer}</div>
              <div className="w-20">
                <span className={`${counter.statusColor} text-white text-xs px-3 py-1 rounded-full`}>
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center text-xs text-gray-400 pt-8">
          <p>Date: {new Date().toLocaleDateString('en-GB')} | Time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
          <p className="mt-1">NADRA Center: Karachi</p>
        </div>
      </div>
    </div>
  );
}
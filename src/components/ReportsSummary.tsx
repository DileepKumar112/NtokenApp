import { ChevronLeft, Menu } from 'lucide-react';

interface ReportsSummaryProps {
  onBack: () => void;
}

export default function ReportsSummary({ onBack }: ReportsSummaryProps) {
  return (
    <div className="w-full max-w-sm bg-slate-800 rounded-3xl shadow-lg overflow-hidden min-h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 p-4 flex items-center justify-between">
        <button onClick={onBack}>
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
        <h2 className="text-white font-semibold">Reports / Summary</h2>
        <Menu className="text-white w-6 h-6" />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Stats */}
        <div className="space-y-4">
          <div className="bg-slate-700 rounded-lg p-4 flex items-center justify-between">
            <span className="text-gray-300">Total Tokens Today</span>
            <span className="text-white text-2xl font-bold">250</span>
          </div>

          <div className="bg-slate-700 rounded-lg p-4 flex items-center justify-between">
            <span className="text-gray-300">Average Waiting Time</span>
            <span className="text-white text-2xl font-bold">18 <span className="text-base">Min</span></span>
          </div>

          <div className="bg-slate-700 rounded-lg p-4 flex items-center justify-between">
            <span className="text-gray-300">Completed Services</span>
            <span className="text-white text-2xl font-bold">160</span>
          </div>
        </div>

        {/* Summary Text */}
        <div className="bg-slate-700 rounded-lg p-6">
          <h3 className="text-white font-semibold mb-4">HCI Summary</h3>
          <div className="text-gray-300 text-sm space-y-3">
            <p>
              This NADRA Token Management System is designed following HCI principles.
            </p>
            <p>
              The interface minimizes cognitive load using consistent colors and layouts.
            </p>
            <p>
              Large buttons improve accessibility and support both citizens and administrators efficiently.
            </p>
            <p>
              Real-time token feedback ensures visibility of system status.
            </p>
            <p>
              The design supports both citizens and administrators efficiently.
            </p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-xs text-gray-400">
          <p>Date: {new Date().toLocaleDateString('en-GB')} | Time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
          <p className="mt-1">NADRA Center: Karachi</p>
        </div>
      </div>
    </div>
  );
}

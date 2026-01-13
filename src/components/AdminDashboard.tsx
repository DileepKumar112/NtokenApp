import { ChevronLeft, Menu } from 'lucide-react';
import { Screen } from '../App';

interface AdminDashboardProps {
  onNavigate: (screen: Screen) => void;
}

export default function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const chartData = [
    { value: 45, label: '0' },
    { value: 30, label: '1' },
    { value: 65, label: '2' },
    { value: 50, label: '3' },
    { value: 40, label: '4' },
    { value: 55, label: '5' },
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="w-full max-w-sm bg-slate-800 rounded-3xl shadow-lg overflow-hidden min-h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 p-4 flex items-center justify-between">
        <button onClick={() => onNavigate('welcome')}>
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
        <h2 className="text-white font-semibold">Dashboard</h2>
        <Menu className="text-white w-6 h-6" />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Stats Cards */}
        <div className="flex gap-3">
          <div className="flex-1 bg-emerald-600 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-white">250</div>
            <div className="text-xs text-emerald-100 mt-1">Total</div>
          </div>
          <div className="flex-1 bg-orange-500 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-white">85</div>
            <div className="text-xs text-orange-100 mt-1">Served</div>
          </div>
          <div className="flex-1 bg-emerald-500 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-white">5</div>
            <div className="text-xs text-emerald-100 mt-1">Waiting</div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-slate-700 rounded-xl p-4">
          <div className="flex items-end justify-between h-40 gap-2 mb-2">
            {chartData.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex items-end justify-center flex-1">
                  <div
                    className="w-full bg-emerald-500 rounded-t"
                    style={{ height: `${(item.value / maxValue) * 100}%` }}
                  />
                </div>
                <span className="text-white text-xs">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onNavigate('token-management')}
            className="bg-slate-700 hover:bg-slate-600 text-white rounded-xl p-4 text-left transition-colors"
          >
            <div className="font-semibold mb-1">Token</div>
            <div className="text-xs text-gray-300">Management</div>
          </button>
          <button
            onClick={() => onNavigate('counter-management')}
            className="bg-slate-700 hover:bg-slate-600 text-white rounded-xl p-4 text-left transition-colors"
          >
            <div className="font-semibold mb-1">Counter</div>
            <div className="text-xs text-gray-300">Management</div>
          </button>
          <button
            onClick={() => onNavigate('reports-summary')}
            className="bg-slate-700 hover:bg-slate-600 text-white rounded-xl p-4 text-left transition-colors"
          >
            <div className="font-semibold mb-1">Reports</div>
            <div className="text-xs text-gray-300">Summary</div>
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white rounded-xl p-4 text-left transition-colors">
            <div className="font-semibold mb-1">Settings</div>
            <div className="text-xs text-gray-300">Configure</div>
          </button>
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
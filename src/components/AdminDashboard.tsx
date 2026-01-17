import { ChevronLeft, Menu } from 'lucide-react';
import { Screen } from '../App';

interface AdminDashboardProps {
  onNavigate: (screen: Screen) => void;
}

export default function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  // Weekly data - showing daily visitor counts for the past week
  const weeklyData = [
    { day: 'Mon', people: 145, label: '12 Jan' },
    { day: 'Tue', people: 189, label: '13 Jan' },
    { day: 'Wed', people: 220, label: '14 Jan' },
    { day: 'Thu', people: 195, label: '15 Jan' },
    { day: 'Fri', people: 175, label: '16 Jan' },
    { day: 'Sat', people: 250, label: '17 Jan' },
  ];

  const maxPeople = Math.max(...weeklyData.map(d => d.people));
  const totalWeekly = weeklyData.reduce((sum, d) => sum + d.people, 0);
  const averageDaily = Math.round(totalWeekly / weeklyData.length);

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
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-white font-semibold text-sm">Weekly Report</h3>
              <p className="text-gray-400 text-xs">Daily Visitor Count</p>
            </div>
            <div className="text-right">
              <div className="text-emerald-400 font-semibold text-sm">{totalWeekly}</div>
              <p className="text-gray-400 text-xs">Total</p>
            </div>
          </div>
          
          <div className="flex items-end justify-between h-40 gap-2 mb-2 relative">
            {weeklyData.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-2 group relative">
                <div className="w-full flex items-end justify-center flex-1 relative">
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    {item.people} people
                  </div>
                  
                  {/* Bar */}
                  <div
                    className="w-full bg-gradient-to-t from-emerald-600 to-emerald-500 rounded-t hover:from-emerald-500 hover:to-emerald-400 transition-all cursor-pointer relative"
                    style={{ height: `${(item.people / maxPeople) * 100}%` }}
                  >
                    {/* Value on bar for highest */}
                    {item.people === maxPeople && (
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-emerald-400 text-xs font-semibold">
                        {item.people}
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-white text-xs font-semibold">{item.day}</div>
                  <div className="text-gray-400 text-[10px]">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Average Line Indicator */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-orange-500"></div>
              <span className="text-gray-400 text-xs">Daily Avg: {averageDaily}</span>
            </div>
            <span className="text-gray-400 text-xs">Peak: Sat</span>
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
          <button 
            onClick={() => onNavigate('settings')}
            className="bg-slate-700 hover:bg-slate-600 text-white rounded-xl p-4 text-left transition-colors"
          >
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
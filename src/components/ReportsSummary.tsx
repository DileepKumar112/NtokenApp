import { ChevronLeft, Menu, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

interface ReportsSummaryProps {
  onBack: () => void;
}

export default function ReportsSummary({ onBack }: ReportsSummaryProps) {
  // Weekly visitor data
  const weeklyVisitors = [
    { day: 'Mon', count: 145, label: '12 Jan' },
    { day: 'Tue', count: 189, label: '13 Jan' },
    { day: 'Wed', count: 220, label: '14 Jan' },
    { day: 'Thu', count: 195, label: '15 Jan' },
    { day: 'Fri', count: 175, label: '16 Jan' },
    { day: 'Sat', count: 250, label: '17 Jan' },
  ];

  // Service-wise distribution
  const serviceData = [
    { name: 'CNIC', count: 85, color: 'bg-emerald-500' },
    { name: 'Birth Cert', count: 65, color: 'bg-blue-500' },
    { name: 'B-Form', count: 45, color: 'bg-purple-500' },
    { name: 'Death Cert', count: 30, color: 'bg-orange-500' },
    { name: 'Others', count: 25, color: 'bg-pink-500' },
  ];

  // Average waiting time per day (in minutes)
  const waitingTimeData = [
    { day: 'Mon', time: 15 },
    { day: 'Tue', time: 22 },
    { day: 'Wed', time: 28 },
    { day: 'Thu', time: 20 },
    { day: 'Fri', time: 18 },
    { day: 'Sat', time: 32 },
  ];

  const maxVisitors = Math.max(...weeklyVisitors.map(d => d.count));
  const maxWaitTime = Math.max(...waitingTimeData.map(d => d.time));
  const totalVisitors = weeklyVisitors.reduce((sum, d) => sum + d.count, 0);
  const maxServiceCount = Math.max(...serviceData.map(s => s.count));

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
      <div className="flex-1 p-6 space-y-5 overflow-y-auto">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-emerald-600 rounded-xl p-3 text-center">
            <Users className="w-5 h-5 text-white mx-auto mb-1" />
            <div className="text-2xl font-bold text-white">{totalVisitors}</div>
            <div className="text-xs text-emerald-100">Weekly Total</div>
          </div>
          <div className="bg-blue-600 rounded-xl p-3 text-center">
            <TrendingUp className="w-5 h-5 text-white mx-auto mb-1" />
            <div className="text-2xl font-bold text-white">+18%</div>
            <div className="text-xs text-blue-100">Growth</div>
          </div>
          <div className="bg-orange-600 rounded-xl p-3 text-center">
            <Clock className="w-5 h-5 text-white mx-auto mb-1" />
            <div className="text-2xl font-bold text-white">23</div>
            <div className="text-xs text-orange-100">Avg. Wait (min)</div>
          </div>
          <div className="bg-purple-600 rounded-xl p-3 text-center">
            <CheckCircle className="w-5 h-5 text-white mx-auto mb-1" />
            <div className="text-2xl font-bold text-white">94%</div>
            <div className="text-xs text-purple-100">Completion</div>
          </div>
        </div>

        {/* Weekly Visitors Graph */}
        <div className="bg-slate-700 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-white font-semibold text-sm">Daily Visitors</h3>
              <p className="text-gray-400 text-xs">Last 6 Days</p>
            </div>
            <div className="text-emerald-400 font-semibold text-sm">{totalVisitors}</div>
          </div>
          
          <div className="flex items-end justify-between h-32 gap-1.5 mb-2">
            {weeklyVisitors.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-1.5 group relative">
                <div className="w-full flex items-end justify-center flex-1 relative">
                  {/* Tooltip */}
                  <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    {item.count}
                  </div>
                  
                  {/* Bar */}
                  <div
                    className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t hover:from-emerald-500 hover:to-emerald-300 transition-all cursor-pointer"
                    style={{ height: `${(item.count / maxVisitors) * 100}%` }}
                  />
                </div>
                <div className="text-white text-[10px] font-semibold">{item.day}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Distribution */}
        <div className="bg-slate-700 rounded-xl p-4">
          <div className="mb-3">
            <h3 className="text-white font-semibold text-sm">Service Distribution</h3>
            <p className="text-gray-400 text-xs">This Week</p>
          </div>
          
          <div className="space-y-2.5">
            {serviceData.map((service, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-300">{service.name}</span>
                  <span className="text-white font-semibold">{service.count}</span>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-2 overflow-hidden">
                  <div
                    className={`${service.color} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${(service.count / maxServiceCount) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Average Waiting Time Graph */}
        <div className="bg-slate-700 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-white font-semibold text-sm">Avg. Waiting Time</h3>
              <p className="text-gray-400 text-xs">Minutes per Day</p>
            </div>
            <div className="text-orange-400 font-semibold text-sm">23 min</div>
          </div>
          
          <div className="flex items-end justify-between h-24 gap-1.5 mb-2">
            {waitingTimeData.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-1.5 group relative">
                <div className="w-full flex items-end justify-center flex-1 relative">
                  {/* Tooltip */}
                  <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    {item.time}m
                  </div>
                  
                  {/* Bar */}
                  <div
                    className="w-full bg-gradient-to-t from-orange-600 to-orange-400 rounded-t hover:from-orange-500 hover:to-orange-300 transition-all cursor-pointer"
                    style={{ height: `${(item.time / maxWaitTime) * 100}%` }}
                  />
                </div>
                <div className="text-white text-[10px] font-semibold">{item.day}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-xs text-gray-400 pt-2">
          <p>Date: {new Date().toLocaleDateString('en-GB')} | Time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
          <p className="mt-1">NADRA Center: Karachi</p>
        </div>
      </div>
    </div>
  );
}
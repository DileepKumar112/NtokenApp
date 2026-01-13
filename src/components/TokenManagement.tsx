import { ChevronLeft, Menu } from 'lucide-react';

interface TokenManagementProps {
  onBack: () => void;
}

export default function TokenManagement({ onBack }: TokenManagementProps) {
  const tokens = [
    { number: 'A-203', service: 'Present', status: 'active', statusColor: 'bg-emerald-500' },
    { number: 'A-202', service: 'Waiting', status: 'danger', statusColor: 'bg-red-500' },
    { number: 'A-205', service: 'Pending', status: 'danger', statusColor: 'bg-red-500' },
  ];

  const actions = [
    { name: 'View Token Details', status: 'Live', statusColor: 'bg-blue-500' },
    { name: 'Edit Token', status: 'Active', statusColor: 'bg-orange-500' },
    { name: 'Call Next', status: 'Ready', statusColor: 'bg-orange-500' },
    { name: 'Token Status', status: 'Live', statusColor: 'bg-orange-500' },
  ];

  return (
    <div className="w-full max-w-sm bg-slate-800 rounded-3xl shadow-lg overflow-hidden min-h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 p-4 flex items-center justify-between">
        <button onClick={onBack}>
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
        <h2 className="text-white font-semibold">Token Management</h2>
        <Menu className="text-white w-6 h-6" />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Tokens List */}
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-400 mb-2">
            <div className="w-20">Token No</div>
            <div className="flex-1">Service</div>
            <div className="w-20">Status</div>
          </div>
          
          {tokens.map((token, index) => (
            <div key={index} className="flex items-center bg-slate-700 rounded-lg p-3">
              <div className="w-20 text-white font-semibold">{token.number}</div>
              <div className="flex-1 text-white">{token.service}</div>
              <div className="w-20">
                <span className={`${token.statusColor} text-white text-xs px-3 py-1 rounded-full`}>
                  {token.status === 'active' ? 'Active' : 'Stop'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="space-y-3">
          {actions.map((action, index) => (
            <div key={index} className="flex items-center justify-between bg-slate-700 rounded-lg p-3">
              <span className="text-white text-sm">{action.name}</span>
              <span className={`${action.statusColor} text-white text-xs px-3 py-1 rounded-full`}>
                {action.status}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center text-xs text-gray-400 pt-4">
          <p>Date: {new Date().toLocaleDateString('en-GB')} | Time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
          <p className="mt-1">NADRA Center: Karachi</p>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Search } from 'lucide-react';

interface CheckTokenStatusProps {
  onBack: () => void;
}

export default function CheckTokenStatus({ onBack }: CheckTokenStatusProps) {
  const [tokenNumber, setTokenNumber] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleSearch = () => {
    if (tokenNumber) {
      setShowResult(true);
    }
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden min-h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-emerald-700 p-4 flex items-center justify-between">
        <button onClick={onBack} className="text-white text-xl">
          ←
        </button>
        <h2 className="text-white font-semibold">Check Token Status</h2>
        <div className="w-8"></div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter Token Number
          </label>
          <div className="relative">
            <input
              type="text"
              value={tokenNumber}
              onChange={(e) => setTokenNumber(e.target.value)}
              placeholder="e.g., A-203"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <button
          onClick={handleSearch}
          disabled={!tokenNumber}
          className="w-full bg-emerald-800 text-white py-3 rounded-lg font-semibold hover:bg-emerald-900 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed mb-6 shadow-md"
        >
          Check Status
        </button>

        {showResult && (
          <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-700 mb-2">{tokenNumber}</div>
              <div className="inline-block bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                In Queue
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Service:</span>
                <span className="font-semibold">CNIC Registration</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Counter:</span>
                <span className="font-semibold">Counter 3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Position:</span>
                <span className="font-semibold">5th in queue</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Est. Wait Time:</span>
                <span className="font-semibold">15-20 mins</span>
              </div>
            </div>

            <div className="text-xs text-gray-500 text-center pt-2">
              Current serving: A-198
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
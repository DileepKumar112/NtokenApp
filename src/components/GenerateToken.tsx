import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { TokenData } from '../App';

interface GenerateTokenProps {
  selectedService: string;
  onBack: () => void;
  onGenerate: (data: TokenData) => void;
}

export default function GenerateToken({ selectedService, onBack, onGenerate }: GenerateTokenProps) {
  const [city, setCity] = useState('');
  const [center, setCenter] = useState('');

  const handleGenerate = () => {
    if (city && center) {
      const tokenNumber = `A-${Math.floor(Math.random() * 900) + 100}`;
      const now = new Date();
      onGenerate({
        number: tokenNumber,
        service: selectedService,
        city,
        center,
        date: now.toLocaleDateString('en-GB'),
        time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
      });
    }
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden min-h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-emerald-800 p-4 flex items-center justify-between">
        <button onClick={onBack} className="text-white text-xl">
          ←
        </button>
        <h2 className="text-white font-semibold">Generate Token</h2>
        <div className="w-8 h-8 bg-emerald-700 rounded flex items-center justify-center text-white text-xs">
          ☰
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 p-6 flex flex-col gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Selected Service
          </label>
          <div className="relative">
            <div className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 font-medium">
              {selectedService}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select City
          </label>
          <div className="relative">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select City</option>
              <option>Karachi</option>
              <option>Lahore</option>
              <option>Islamabad</option>
              <option>Rawalpindi</option>
              <option>Peshawar</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Center
          </label>
          <div className="relative">
            <select
              value={center}
              onChange={(e) => setCenter(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select Center</option>
              <option>NADRA Center: Karachi</option>
              <option>NADRA Center: Gulshan</option>
              <option>NADRA Center: Clifton</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={!city || !center}
          className="w-full bg-emerald-800 text-white py-3 rounded-lg font-semibold hover:bg-emerald-900 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed mt-auto shadow-md"
        >
          Generate Token
        </button>
      </div>
    </div>
  );
}
import { TokenData } from '../App';

interface TokenSlipProps {
  tokenData: TokenData;
  onBack: () => void;
}

export default function TokenSlip({ tokenData, onBack }: TokenSlipProps) {
  return (
    <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden min-h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-emerald-800 p-4 flex items-center justify-between">
        <button onClick={onBack} className="text-white text-xl">
          ←
        </button>
        <h2 className="text-white font-semibold">Token Slip</h2>
        <div className="w-8"></div>
      </div>

      {/* Token Details */}
      <div className="flex-1 p-6 flex flex-col items-center">
        <div className="w-full bg-gray-50 rounded-2xl p-6 mb-6">
          <p className="text-sm text-gray-600 text-center mb-2">Your Token Number</p>
          <h1 className="text-5xl font-bold text-emerald-700 text-center mb-6">
            {tokenData.number}
          </h1>
          
          {/* QR Code */}
          <div className="w-48 h-48 mx-auto bg-white border-4 border-gray-200 rounded-lg flex items-center justify-center mb-6">
            <svg viewBox="0 0 100 100" className="w-full h-full p-2">
              {/* Simple QR code pattern */}
              <rect x="10" y="10" width="15" height="15" fill="black" />
              <rect x="30" y="10" width="5" height="5" fill="black" />
              <rect x="40" y="10" width="10" height="10" fill="black" />
              <rect x="55" y="10" width="5" height="5" fill="black" />
              <rect x="75" y="10" width="15" height="15" fill="black" />
              
              <rect x="10" y="30" width="5" height="5" fill="black" />
              <rect x="35" y="30" width="10" height="5" fill="black" />
              <rect x="50" y="30" width="5" height="10" fill="black" />
              <rect x="75" y="30" width="5" height="5" fill="black" />
              
              <rect x="10" y="40" width="10" height="10" fill="black" />
              <rect x="25" y="45" width="5" height="5" fill="black" />
              <rect x="60" y="40" width="10" height="10" fill="black" />
              <rect x="75" y="40" width="10" height="10" fill="black" />
              
              <rect x="10" y="55" width="5" height="5" fill="black" />
              <rect x="30" y="55" width="15" height="5" fill="black" />
              <rect x="50" y="55" width="5" height="15" fill="black" />
              <rect x="75" y="55" width="5" height="5" fill="black" />
              
              <rect x="10" y="75" width="15" height="15" fill="black" />
              <rect x="30" y="75" width="5" height="5" fill="black" />
              <rect x="40" y="80" width="10" height="10" fill="black" />
              <rect x="60" y="75" width="10" height="5" fill="black" />
              <rect x="75" y="75" width="15" height="15" fill="black" />
            </svg>
          </div>

          <div className="text-sm text-gray-600 space-y-1">
            <p><span className="font-medium">Date:</span> {tokenData.date} | <span className="font-medium">Time:</span> {tokenData.time}</p>
            <p className="font-medium">{tokenData.center}</p>
          </div>
        </div>

        <button className="w-full bg-emerald-800 text-white py-3 rounded-lg font-semibold hover:bg-emerald-900 transition-colors shadow-md">
          Download Slip
        </button>
      </div>
    </div>
  );
}
import { TokenData } from '../App';
import { useRef } from 'react';

interface TokenSlipProps {
  tokenData: TokenData;
  onBack: () => void;
}

export default function TokenSlip({ tokenData, onBack }: TokenSlipProps) {
  const slipRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!slipRef.current) return;

    try {
      // Dynamically import html2canvas
      const html2canvas = (await import('html2canvas')).default;
      
      // Capture the slip element
      const canvas = await html2canvas(slipRef.current, {
        backgroundColor: '#ffffff',
        scale: 2, // Higher quality
        logging: false,
      });

      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.download = `NADRA_Token_${tokenData.number}_${Date.now()}.png`;
          link.href = url;
          link.click();
          URL.revokeObjectURL(url);
        }
      }, 'image/png');
    } catch (error) {
      console.error('Error generating slip:', error);
      alert('Failed to download slip. Please try again.');
    }
  };

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
        {/* Slip Content - This will be captured */}
        <div ref={slipRef} className="w-full bg-gray-50 rounded-2xl p-6 mb-6">
          {/* NADRA Logo/Header */}
          <div className="text-center mb-4">
            <div className="flex items-center justify-center mb-2">
              {/* Pakistani Flag Colors & Crescent Moon Star */}
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-700 to-emerald-600 rounded-full flex items-center justify-center relative shadow-md">
                <div className="absolute right-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2l2.4 7.4h7.8l-6.3 4.6 2.4 7.4-6.3-4.6-6.3 4.6 2.4-7.4-6.3-4.6h7.8z" />
                  </svg>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="ml-1">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-emerald-800 text-lg">NADRA</h3>
            <p className="text-xs text-gray-600">National Database & Registration Authority</p>
          </div>

          <div className="border-t-2 border-dashed border-gray-300 my-4"></div>

          <p className="text-sm text-gray-600 text-center mb-2">Your Token Number</p>
          <h1 className="text-5xl font-bold text-emerald-700 text-center mb-6">
            {tokenData.number}
          </h1>
          
          {/* Service Info */}
          <div className="bg-white rounded-lg p-3 mb-4 border border-gray-200">
            <p className="text-xs text-gray-500 mb-1">Service</p>
            <p className="text-sm font-semibold text-gray-800">{tokenData.service}</p>
          </div>

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

          <div className="text-sm text-gray-600 space-y-1 text-center">
            <p><span className="font-medium">Date:</span> {tokenData.date} | <span className="font-medium">Time:</span> {tokenData.time}</p>
            <p className="font-medium text-emerald-800">{tokenData.center}</p>
            <p className="text-xs text-gray-500 mt-3">Please keep this slip for verification</p>
          </div>
        </div>

        <button 
          onClick={handleDownload}
          className="w-full bg-emerald-800 text-white py-3 rounded-lg font-semibold hover:bg-emerald-900 transition-colors shadow-md"
        >
          Download Slip
        </button>
      </div>
    </div>
  );
}
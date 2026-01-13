import { Screen } from '../App';

interface WelcomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function WelcomeScreen({ onNavigate }: WelcomeScreenProps) {
  return (
    <div className="w-full max-w-sm bg-emerald-800 rounded-3xl shadow-lg overflow-hidden min-h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-emerald-900 p-4 flex items-center justify-between">
        <div className="w-8"></div>
        <h2 className="text-white font-semibold">Welcome Screen</h2>
        <div className="w-8 h-8 bg-emerald-700 rounded flex items-center justify-center text-white text-xs">
          ☰
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gradient-to-b from-emerald-800 to-emerald-700">
        {/* NADRA Logo */}
        <div className="relative w-32 h-32 flex items-center justify-center mb-4">
          <svg viewBox="0 0 140 160" className="w-full h-full drop-shadow-2xl">
            {/* Outer shield shape */}
            <defs>
              <linearGradient id="shieldGradWhite" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#F0F0F0', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            
            {/* Main shield */}
            <path
              d="M70 15 L115 35 L118 90 Q118 125 70 145 Q22 125 22 90 L25 35 Z"
              fill="url(#shieldGradWhite)"
              stroke="#D4AF37"
              strokeWidth="2.5"
            />
            
            {/* Inner ornamental border */}
            <path
              d="M70 28 L102 43 L104 88 Q104 115 70 132 Q36 115 36 88 L38 43 Z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.5"
              opacity="0.6"
            />
            
            {/* Central emblem background circle */}
            <circle cx="70" cy="70" r="32" fill="#0A4D2E" />
            <circle cx="70" cy="70" r="32" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
            
            {/* Crescent moon */}
            <path
              d="M60 55 Q50 70 60 85 Q57 79 57 70 Q57 61 60 55 Z"
              fill="#FFFFFF"
            />
            
            {/* Five-pointed star */}
            <path
              d="M78 58 L80.5 65 L88 65.5 L82 70.5 L84 78 L78 73.5 L72 78 L74 70.5 L68 65.5 L75.5 65 Z"
              fill="#FFFFFF"
            />
            
            {/* Decorative wheat/laurel on left */}
            <g opacity="0.9">
              <path d="M42 95 Q40 100 41 105 L43 102 Q43 98 42 95 Z" fill="#D4AF37" />
              <path d="M44 90 Q42 95 43 100 L45 97 Q45 93 44 90 Z" fill="#D4AF37" />
              <path d="M46 85 Q44 90 45 95 L47 92 Q47 88 46 85 Z" fill="#D4AF37" />
            </g>
            
            {/* Decorative wheat/laurel on right */}
            <g opacity="0.9">
              <path d="M98 95 Q100 100 99 105 L97 102 Q97 98 98 95 Z" fill="#D4AF37" />
              <path d="M96 90 Q98 95 97 100 L95 97 Q95 93 96 90 Z" fill="#D4AF37" />
              <path d="M94 85 Q96 90 95 95 L93 92 Q93 88 94 85 Z" fill="#D4AF37" />
            </g>
            
            {/* Bottom ribbon */}
            <path d="M50 115 L90 115 L88 120 L52 120 Z" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="1" />
            
            {/* Corner decorations */}
            <circle cx="70" cy="25" r="3" fill="#D4AF37" />
            <circle cx="110" cy="50" r="2.5" fill="#D4AF37" opacity="0.6" />
            <circle cx="30" cy="50" r="2.5" fill="#D4AF37" opacity="0.6" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-white mb-8">NADRA</h1>
        
        {/* Curved white section */}
        <div className="w-full bg-white rounded-t-[3rem] mt-8 p-8 flex flex-col gap-4">
          <button
            onClick={() => onNavigate('select-service')}
            className="w-full bg-emerald-700 text-white py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors shadow-md"
          >
            Get Token
          </button>
          
          <button 
            onClick={() => onNavigate('check-status')}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
          >
            Check Token Status
          </button>
          
          <button
            onClick={() => onNavigate('admin-login')}
            className="w-full text-emerald-700 py-3 font-semibold hover:bg-gray-100 transition-colors"
          >
            Admin Login
          </button>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            Powered by NADRA Pakistan
          </p>
        </div>
      </div>
    </div>
  );
}
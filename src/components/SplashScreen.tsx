export default function SplashScreen() {
  return (
    <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg p-12 flex flex-col items-center justify-center min-h-[600px]">
      <div className="flex flex-col items-center gap-6">
        {/* NADRA Logo - Pakistani State Emblem Inspired */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg viewBox="0 0 140 160" className="w-full h-full drop-shadow-xl">
            {/* Outer shield shape */}
            <defs>
              <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#0A4D2E', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#0C5F3F', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            
            {/* Main shield */}
            <path
              d="M70 15 L115 35 L118 90 Q118 125 70 145 Q22 125 22 90 L25 35 Z"
              fill="url(#shieldGrad)"
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
            <circle cx="70" cy="70" r="32" fill="#0F7A52" />
            <circle cx="70" cy="70" r="32" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
            
            {/* Crescent moon (larger and more prominent) */}
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
              <path
                d="M42 95 Q40 100 41 105 L43 102 Q43 98 42 95 Z"
                fill="#D4AF37"
              />
              <path
                d="M44 90 Q42 95 43 100 L45 97 Q45 93 44 90 Z"
                fill="#D4AF37"
              />
              <path
                d="M46 85 Q44 90 45 95 L47 92 Q47 88 46 85 Z"
                fill="#D4AF37"
              />
            </g>
            
            {/* Decorative wheat/laurel on right */}
            <g opacity="0.9">
              <path
                d="M98 95 Q100 100 99 105 L97 102 Q97 98 98 95 Z"
                fill="#D4AF37"
              />
              <path
                d="M96 90 Q98 95 97 100 L95 97 Q95 93 96 90 Z"
                fill="#D4AF37"
              />
              <path
                d="M94 85 Q96 90 95 95 L93 92 Q93 88 94 85 Z"
                fill="#D4AF37"
              />
            </g>
            
            {/* Bottom ribbon/scroll */}
            <path
              d="M50 115 L90 115 L88 120 L52 120 Z"
              fill="#FFFFFF"
            />
            <path
              d="M50 115 L90 115 L88 120 L52 120 Z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1"
            />
            
            {/* Corner decorations */}
            <circle cx="70" cy="25" r="3" fill="#D4AF37" />
            <circle cx="110" cy="50" r="2.5" fill="#D4AF37" opacity="0.6" />
            <circle cx="30" cy="50" r="2.5" fill="#D4AF37" opacity="0.6" />
          </svg>
        </div>
        
        <div className="text-center">
          <h1 className="text-3xl font-bold text-emerald-800 mb-2">NADRA</h1>
          <p className="text-sm text-gray-600 font-medium">National Database &</p>
          <p className="text-sm text-gray-600 font-medium">Registration Authority</p>
        </div>
      </div>
      
      {/* Loading dots */}
      <div className="flex gap-2 mt-12">
        <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
}
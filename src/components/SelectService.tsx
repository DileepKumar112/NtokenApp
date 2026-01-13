import { FileText, Users, ClipboardList } from 'lucide-react';
import { Screen } from '../App';

interface SelectServiceProps {
  onNavigate: (screen: Screen) => void;
  onSelectService: (service: string) => void;
}

export default function SelectService({ onNavigate, onSelectService }: SelectServiceProps) {
  const services = [
    { id: 'birth', name: 'Birth Certificate\nRegistration', displayName: 'Birth Certificate Registration', icon: FileText, color: 'bg-emerald-50 text-emerald-700' },
    { id: 'death', name: 'Death Certificate\nRegistration', displayName: 'Death Certificate Registration', icon: FileText, color: 'bg-emerald-50 text-emerald-700' },
    { id: 'bform', name: 'B Forms', displayName: 'B Forms', icon: ClipboardList, color: 'bg-emerald-50 text-emerald-700' },
    { id: 'family', name: 'Family Registration\nCertificate', displayName: 'Family Registration Certificate', icon: Users, color: 'bg-emerald-50 text-emerald-700' },
    { id: 'cnic', name: 'CNIC Registration\nCertificate', displayName: 'CNIC Registration', icon: Users, color: 'bg-emerald-50 text-emerald-700' },
  ];

  return (
    <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg overflow-hidden min-h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-emerald-800 p-4 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('welcome')}
          className="text-white text-xl"
        >
          ←
        </button>
        <h2 className="text-white font-semibold">Select Service</h2>
        <div className="w-8 h-8 bg-emerald-700 rounded flex items-center justify-center text-white text-xs">
          ☰
        </div>
      </div>

      {/* Services Grid */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => onSelectService(service.displayName)}
              className="aspect-square bg-white border-2 border-emerald-200 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:border-emerald-600 hover:shadow-lg transition-all"
            >
              <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center`}>
                <service.icon className="w-8 h-8" />
              </div>
              <span className="text-xs text-center font-medium leading-tight whitespace-pre-line text-gray-700">
                {service.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
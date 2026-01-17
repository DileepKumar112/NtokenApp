import { ChevronLeft, Menu, Clock, Users, Bell, Shield, Database, Globe } from 'lucide-react';
import { useState } from 'react';

interface SettingsProps {
  onBack: () => void;
}

export default function Settings({ onBack }: SettingsProps) {
  const [operatingHours, setOperatingHours] = useState({ start: '08:00', end: '17:00' });
  const [dailyTokenLimit, setDailyTokenLimit] = useState('500');
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('English');
  const [autoCallNext, setAutoCallNext] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const settingsSections = [
    {
      icon: Clock,
      title: 'Operating Hours',
      description: 'Set office timing',
      component: (
        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-400 block mb-1">Opening Time</label>
            <input
              type="time"
              value={operatingHours.start}
              onChange={(e) => setOperatingHours({ ...operatingHours, start: e.target.value })}
              className="w-full bg-slate-600 text-white rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1">Closing Time</label>
            <input
              type="time"
              value={operatingHours.end}
              onChange={(e) => setOperatingHours({ ...operatingHours, end: e.target.value })}
              className="w-full bg-slate-600 text-white rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </div>
      )
    },
    {
      icon: Users,
      title: 'Token Settings',
      description: 'Configure token limits',
      component: (
        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-400 block mb-1">Daily Token Limit</label>
            <input
              type="number"
              value={dailyTokenLimit}
              onChange={(e) => setDailyTokenLimit(e.target.value)}
              className="w-full bg-slate-600 text-white rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-white">Auto Call Next Token</div>
              <div className="text-xs text-gray-400">Automatically display next token</div>
            </div>
            <button
              onClick={() => setAutoCallNext(!autoCallNext)}
              className={`w-12 h-6 rounded-full transition-colors ${
                autoCallNext ? 'bg-emerald-500' : 'bg-slate-600'
              } relative`}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  autoCallNext ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      )
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Alert preferences',
      component: (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-white">Enable Notifications</div>
              <div className="text-xs text-gray-400">Show system alerts</div>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-12 h-6 rounded-full transition-colors ${
                notifications ? 'bg-emerald-500' : 'bg-slate-600'
              } relative`}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  notifications ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-white">Sound Alerts</div>
              <div className="text-xs text-gray-400">Play sound for new tokens</div>
            </div>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`w-12 h-6 rounded-full transition-colors ${
                soundEnabled ? 'bg-emerald-500' : 'bg-slate-600'
              } relative`}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  soundEnabled ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      )
    },
    {
      icon: Globe,
      title: 'Language & Region',
      description: 'Set language preference',
      component: (
        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-400 block mb-1">Display Language</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-slate-600 text-white rounded-lg px-3 py-2 text-sm"
            >
              <option>English</option>
              <option>اردو (Urdu)</option>
              <option>سنڌي (Sindhi)</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1">Center Location</label>
            <select className="w-full bg-slate-600 text-white rounded-lg px-3 py-2 text-sm">
              <option>Karachi</option>
              <option>Lahore</option>
              <option>Islamabad</option>
              <option>Rawalpindi</option>
              <option>Faisalabad</option>
              <option>Multan</option>
              <option>Peshawar</option>
              <option>Quetta</option>
            </select>
          </div>
        </div>
      )
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Backup and restore',
      component: (
        <div className="space-y-3">
          <button className="w-full bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg px-4 py-3 text-sm transition-colors text-left">
            <div className="font-semibold">Backup Data</div>
            <div className="text-xs text-emerald-100">Export all system data</div>
          </button>
          <button className="w-full bg-slate-600 hover:bg-slate-500 text-white rounded-lg px-4 py-3 text-sm transition-colors text-left">
            <div className="font-semibold">Clear Old Records</div>
            <div className="text-xs text-gray-300">Remove data older than 90 days</div>
          </button>
          <div className="bg-slate-600 rounded-lg p-3">
            <div className="text-xs text-gray-400">Last Backup</div>
            <div className="text-sm text-white mt-1">15 Jan 2026, 10:30 AM</div>
          </div>
        </div>
      )
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Access & permissions',
      component: (
        <div className="space-y-3">
          <button className="w-full bg-slate-600 hover:bg-slate-500 text-white rounded-lg px-4 py-3 text-sm transition-colors text-left">
            <div className="font-semibold">Change Admin Password</div>
            <div className="text-xs text-gray-300">Update login credentials</div>
          </button>
          <button className="w-full bg-slate-600 hover:bg-slate-500 text-white rounded-lg px-4 py-3 text-sm transition-colors text-left">
            <div className="font-semibold">Manage User Roles</div>
            <div className="text-xs text-gray-300">Configure staff permissions</div>
          </button>
          <div className="bg-slate-600 rounded-lg p-3">
            <div className="text-xs text-gray-400">Session Timeout</div>
            <div className="text-sm text-white mt-1">30 minutes</div>
          </div>
        </div>
      )
    }
  ];

  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  return (
    <div className="w-full max-w-sm bg-slate-800 rounded-3xl shadow-lg overflow-hidden min-h-[600px] flex flex-col">
      {/* Header */}
      <div className="bg-slate-900 p-4 flex items-center justify-between">
        <button onClick={onBack}>
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
        <h2 className="text-white font-semibold">Settings</h2>
        <Menu className="text-white w-6 h-6" />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-3 overflow-y-auto">
        {/* System Info Card */}
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold">NADRA Token System</div>
              <div className="text-emerald-100 text-xs">Version 2.1.0</div>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        {settingsSections.map((section, index) => (
          <div key={index} className="bg-slate-700 rounded-xl overflow-hidden">
            <button
              onClick={() => setExpandedSection(expandedSection === index ? null : index)}
              className="w-full p-4 flex items-center gap-3 hover:bg-slate-600 transition-colors"
            >
              <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center">
                <section.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1 text-left">
                <div className="text-white font-semibold text-sm">{section.title}</div>
                <div className="text-gray-400 text-xs">{section.description}</div>
              </div>
              <div className={`text-white transition-transform ${expandedSection === index ? 'rotate-90' : ''}`}>
                →
              </div>
            </button>
            
            {expandedSection === index && (
              <div className="p-4 bg-slate-750 border-t border-slate-600">
                {section.component}
              </div>
            )}
          </div>
        ))}

        {/* Save Button */}
        <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl py-3 font-semibold transition-colors mt-4">
          Save Settings
        </button>

        {/* Footer Info */}
        <div className="text-center text-xs text-gray-400 pt-4">
          <p>Administrator: Ali Raza</p>
          <p className="mt-1">NADRA Center: Karachi</p>
        </div>
      </div>
    </div>
  );
}

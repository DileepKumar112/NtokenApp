import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import WelcomeScreen from './components/WelcomeScreen';
import SelectService from './components/SelectService';
import GenerateToken from './components/GenerateToken';
import TokenSlip from './components/TokenSlip';
import CheckTokenStatus from './components/CheckTokenStatus';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import TokenManagement from './components/TokenManagement';
import CounterManagement from './components/CounterManagement';
import ReportsSummary from './components/ReportsSummary';
import Settings from './components/Settings';

export type Screen = 
  | 'splash'
  | 'welcome'
  | 'select-service'
  | 'generate-token'
  | 'token-slip'
  | 'check-status'
  | 'admin-login'
  | 'admin-dashboard'
  | 'token-management'
  | 'counter-management'
  | 'reports-summary'
  | 'settings';

export interface TokenData {
  number: string;
  service: string;
  city: string;
  center: string;
  date: string;
  time: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [selectedService, setSelectedService] = useState<string>('CNIC Registration');

  // Auto-navigate from splash to welcome after 2 seconds
  useState(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('welcome');
      }, 2000);
      return () => clearTimeout(timer);
    }
  });

  const handleGenerateToken = (data: TokenData) => {
    setTokenData(data);
    setCurrentScreen('token-slip');
  };

  const handleSelectService = (service: string) => {
    setSelectedService(service);
    setCurrentScreen('generate-token');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {currentScreen === 'splash' && (
        <SplashScreen />
      )}
      {currentScreen === 'welcome' && (
        <WelcomeScreen onNavigate={setCurrentScreen} />
      )}
      {currentScreen === 'select-service' && (
        <SelectService onSelectService={handleSelectService} onNavigate={setCurrentScreen} />
      )}
      {currentScreen === 'generate-token' && (
        <GenerateToken 
          selectedService={selectedService}
          onBack={() => setCurrentScreen('select-service')}
          onGenerate={handleGenerateToken}
        />
      )}
      {currentScreen === 'token-slip' && tokenData && (
        <TokenSlip 
          tokenData={tokenData}
          onBack={() => setCurrentScreen('welcome')}
        />
      )}
      {currentScreen === 'check-status' && (
        <CheckTokenStatus onBack={() => setCurrentScreen('welcome')} />
      )}
      {currentScreen === 'admin-login' && (
        <AdminLogin onLogin={() => setCurrentScreen('admin-dashboard')} />
      )}
      {currentScreen === 'admin-dashboard' && (
        <AdminDashboard onNavigate={setCurrentScreen} />
      )}
      {currentScreen === 'token-management' && (
        <TokenManagement onBack={() => setCurrentScreen('admin-dashboard')} />
      )}
      {currentScreen === 'counter-management' && (
        <CounterManagement onBack={() => setCurrentScreen('admin-dashboard')} />
      )}
      {currentScreen === 'reports-summary' && (
        <ReportsSummary onBack={() => setCurrentScreen('admin-dashboard')} />
      )}
      {currentScreen === 'settings' && (
        <Settings onBack={() => setCurrentScreen('admin-dashboard')} />
      )}
    </div>
  );
}
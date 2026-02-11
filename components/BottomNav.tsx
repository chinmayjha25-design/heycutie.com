
import React from 'react';
import { AppScreen } from '../types';

interface BottomNavProps {
  currentScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const items = [
    { id: AppScreen.HOME, icon: 'home', label: 'Home' },
    { id: AppScreen.EXPLORE, icon: 'explore', label: 'Explore' },
    { id: 'tickets', icon: 'confirmation_number', label: '', special: true },
    { id: AppScreen.GUESTS, icon: 'stars', label: 'Guests' },
    { id: AppScreen.PROFILE, icon: 'person', label: 'Profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-background-dark/95 backdrop-blur-lg border-t border-white/5 px-8 py-4 flex justify-between items-center z-50">
      {items.map((item) => (
        item.special ? (
          <div key={item.id} className="relative -top-10">
            <button 
              onClick={() => onNavigate(AppScreen.HOME)}
              className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg neon-glow border-4 border-background-dark active:scale-95 transition-transform"
            >
              <span className="material-icons text-white text-3xl">confirmation_number</span>
            </button>
          </div>
        ) : (
          <button 
            key={item.id}
            onClick={() => onNavigate(item.id as AppScreen)}
            className={`flex flex-col items-center gap-1 transition-colors ${currentScreen === item.id ? 'text-primary' : 'text-white/50'}`}
          >
            <span className="material-icons">{item.icon}</span>
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        )
      ))}
    </nav>
  );
};

export default BottomNav;


import React, { useState } from 'react';
import { AppScreen } from './types';
import HomeScreen from './screens/HomeScreen';
import EventDetailsScreen from './screens/EventDetailsScreen';
import GuestsScreen from './screens/GuestsScreen';
import ApplyToPerformScreen from './screens/ApplyToPerformScreen';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.HOME);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const navigateToEvent = (id: string) => {
    setSelectedEventId(id);
    setCurrentScreen(AppScreen.EVENT_DETAILS);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case AppScreen.HOME:
        return <HomeScreen onEventClick={navigateToEvent} onApplyClick={() => setCurrentScreen(AppScreen.APPLY)} />;
      case AppScreen.GUESTS:
        return <GuestsScreen />;
      case AppScreen.EVENT_DETAILS:
        return <EventDetailsScreen eventId={selectedEventId} onBack={() => setCurrentScreen(AppScreen.HOME)} onApplyClick={() => setCurrentScreen(AppScreen.APPLY)} />;
      case AppScreen.APPLY:
        return <ApplyToPerformScreen onBack={() => setCurrentScreen(AppScreen.HOME)} />;
      default:
        return <HomeScreen onEventClick={navigateToEvent} onApplyClick={() => setCurrentScreen(AppScreen.APPLY)} />;
    }
  };

  return (
    <div className="max-w-md mx-auto relative min-h-screen bg-background-dark pb-24 overflow-x-hidden">
      {renderScreen()}
      <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
    </div>
  );
};

export default App;

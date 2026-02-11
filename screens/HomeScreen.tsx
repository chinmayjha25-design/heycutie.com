
import React from 'react';
import { EVENTS, UPCOMING } from '../constants';

interface HomeScreenProps {
  onEventClick: (id: string) => void;
  onApplyClick: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onEventClick, onApplyClick }) => {
  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center neon-glow">
            <span className="material-icons text-white text-xl">celebration</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">Free<span className="text-primary">Party</span></h1>
        </div>
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <span className="material-icons text-white">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
            <img alt="Profile" className="w-full h-full object-cover" src="https://picsum.photos/id/64/100/100" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-8">
        <h2 className="text-4xl font-bold leading-tight mb-4">India's Best <br/><span className="text-primary">Free Nights.</span></h2>
        <div className="relative mb-6">
          <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-white/50">location_on</span>
          <input 
            className="w-full bg-white/10 border-none rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:ring-2 focus:ring-primary" 
            placeholder="Search your city (Mumbai, Goa...)" 
            type="text"
          />
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar -mx-6 px-6">
          {['All India', 'Goa', 'Mumbai', 'Bangalore', 'Delhi'].map((city, idx) => (
            <button key={city} className={`${idx === 0 ? 'bg-primary shadow-lg neon-glow' : 'bg-white/10 border border-white/5'} text-white px-6 py-2 rounded-full font-medium whitespace-nowrap`}>
              {city}
            </button>
          ))}
        </div>
      </section>

      {/* Happening Now */}
      <section className="py-6">
        <div className="flex items-center justify-between px-6 mb-4">
          <h3 className="text-xl font-bold flex items-center gap-2">
            Happening Now
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          </h3>
          <button className="text-primary text-sm font-medium">See all</button>
        </div>
        <div className="flex gap-6 overflow-x-auto hide-scrollbar px-6">
          {EVENTS.map(event => (
            <div 
              key={event.id}
              onClick={() => onEventClick(event.id)}
              className="relative flex-shrink-0 w-80 h-96 rounded-xl overflow-hidden group cursor-pointer"
            >
              <img src={event.imageUrl} alt={event.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Live Now</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                {event.celebrityGuest && (
                  <div className="flex items-center gap-2 text-primary text-xs font-bold mb-1 uppercase tracking-tighter">
                    <span className="material-icons text-sm">stars</span> Celebrity Guest: {event.celebrityGuest}
                  </div>
                )}
                <h4 className="text-2xl font-bold mb-1">{event.title}</h4>
                <p className="text-white/70 text-sm mb-4">{event.venue}, {event.city}</p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <img key={i} className="w-8 h-8 rounded-full border-2 border-background-dark object-cover" src={`https://picsum.photos/id/${10+i}/50/50`} />)}
                    <div className="w-8 h-8 rounded-full border-2 border-background-dark bg-white/20 flex items-center justify-center text-[10px] font-bold">+{event.attending/1000}k</div>
                  </div>
                  <button className="bg-primary px-4 py-2 rounded-lg font-bold text-sm">Join Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artist CTA */}
      <section className="px-6 py-4">
        <div className="bg-gradient-to-r from-primary/30 to-primary/10 border border-primary/40 rounded-2xl p-6 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Are you an Artist?</h3>
            <p className="text-white/70 text-sm mb-4">Perform at India's biggest free parties and get discovered.</p>
            <button onClick={onApplyClick} className="bg-primary text-white font-bold py-2 px-6 rounded-lg text-sm shadow-lg active:scale-95 transition-transform">Apply to Perform</button>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-20">
            <span className="material-icons text-8xl rotate-12">mic_external_on</span>
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-6">
        <div className="flex items-center justify-between px-6 mb-4">
          <h3 className="text-xl font-bold">Upcoming Parties</h3>
          <button className="text-primary text-sm font-medium">Full Schedule</button>
        </div>
        <div className="px-6 space-y-4">
          {UPCOMING.map(item => (
            <div 
              key={item.id} 
              onClick={() => onEventClick(item.id)}
              className="flex gap-4 bg-white/5 border border-white/5 p-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors"
            >
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-between py-1 flex-grow">
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-base leading-tight">{item.title}</h4>
                    <span className="text-primary font-bold text-xs">FREE</span>
                  </div>
                  <p className="text-white/50 text-xs mt-1">{item.date} • {item.time} onwards</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1">
                    <span className="material-icons text-primary text-[14px]">people</span>
                    <span className="text-[10px] font-medium text-white/70">{item.attending} attending</span>
                  </div>
                  <div className="flex -space-x-1.5">
                    <img className="w-5 h-5 rounded-full border border-background-dark object-cover" src="https://picsum.photos/id/40/50/50" />
                    <img className="w-5 h-5 rounded-full border border-background-dark object-cover" src="https://picsum.photos/id/41/50/50" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Button */}
      <button className="fixed bottom-24 right-6 bg-white text-background-dark px-4 py-3 rounded-full flex items-center gap-2 font-bold shadow-2xl z-40 transform active:scale-95 hover:bg-slate-100 transition-all">
        <span className="material-icons text-primary">map</span>
        Map View
      </button>
    </div>
  );
};

export default HomeScreen;

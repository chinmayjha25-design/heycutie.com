
import React from 'react';
import { GUESTS_LIST } from '../constants';

const GuestsScreen: React.FC = () => {
  const headliner = GUESTS_LIST[0];
  const others = GUESTS_LIST.slice(1);

  return (
    <div className="animate-fadeIn pb-32">
      <header className="sticky top-0 z-50 px-5 py-4 bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-icons text-primary">stars</span>
            <h1 className="text-xl font-bold tracking-tight">Guest List</h1>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-primary/10 text-primary">
              <span className="material-icons">notifications</span>
            </button>
            <button className="p-2 rounded-full bg-primary/10 text-primary">
              <span className="material-icons">search</span>
            </button>
          </div>
        </div>
        <div className="flex gap-2 mt-5 overflow-x-auto hide-scrollbar">
          {['Mumbai', 'Bangalore', 'Delhi', 'Goa'].map((city, idx) => (
            <button key={city} className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap ${idx === 0 ? 'bg-primary text-white' : 'bg-primary/10 text-slate-400'}`}>
              {city}
            </button>
          ))}
        </div>
      </header>

      <main className="px-5 py-6 space-y-8">
        {/* Spotlight */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Spotlight Headliner</h2>
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shadow-primary/20">
            <img src={headliner.imageUrl} alt={headliner.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="bg-primary/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter text-white">{headliner.type}</span>
                <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full">
                  <span className="material-icons text-xs text-yellow-400">verified</span>
                  <span className="text-[10px] font-medium text-white">Verified Profile</span>
                </div>
              </div>
              <h3 className="text-3xl font-extrabold text-white">{headliner.name}</h3>
              <div className="flex items-center gap-4 text-sm text-slate-300">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-white">{headliner.followers}</span> <span>Followers</span>
                </div>
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                <div className="flex items-center gap-1">
                  <span className="material-icons text-sm">location_on</span> <span>{headliner.location}</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 gap-4">
                <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-3">
                  <p className="text-[10px] text-white/60 uppercase font-bold mb-1">Event Starts In</p>
                  <div className="flex gap-2 text-white">
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-bold">02</span>
                      <span className="text-[8px] opacity-60">DAYS</span>
                    </div>
                    <span className="text-lg font-bold text-primary">:</span>
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-bold">14</span>
                      <span className="text-[8px] opacity-60">HRS</span>
                    </div>
                    <span className="text-lg font-bold text-primary">:</span>
                    <div className="flex flex-col items-center">
                      <span className="text-lg font-bold">45</span>
                      <span className="text-[8px] opacity-60">MINS</span>
                    </div>
                  </div>
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white font-bold rounded-lg px-6 py-4 transition-all active:scale-95">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Appearances */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Upcoming Appearances</h2>
            <button className="text-sm font-medium text-primary">See All</button>
          </div>
          {others.map(guest => (
            <div key={guest.id} className="bg-background-dark/50 border border-primary/10 rounded-xl overflow-hidden flex flex-col shadow-lg">
              <div className="flex p-4 gap-4">
                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={guest.imageUrl} alt={guest.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-lg">{guest.name}</h4>
                      <button className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded">FOLLOW</button>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">{guest.type}</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded text-[10px]">
                      <span className="material-icons text-[12px] text-primary">group</span>
                      <span>{guest.followers}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded text-[10px]">
                      <span className="material-icons text-[12px] text-primary">play_circle</span>
                      <span>420K</span>
                    </div>
                  </div>
                </div>
              </div>
              {guest.upcomingEvent && (
                <div className="mx-4 p-3 bg-primary/5 rounded-lg border-t border-primary/10 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Attending Party</span>
                    <span className="text-[10px] font-bold text-primary flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> IN 5H : 20M
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-slate-800 overflow-hidden">
                      <img src={guest.upcomingEvent.imageUrl} alt="event" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{guest.upcomingEvent.title}</p>
                      <p className="text-[10px] text-slate-500">{guest.upcomingEvent.venue}, {guest.upcomingEvent.city}</p>
                    </div>
                    <button className="ml-auto w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <span className="material-icons text-sm">arrow_forward_ios</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default GuestsScreen;


import React, { useState } from 'react';
import { EVENTS, UPCOMING, SONGS_QUEUE } from '../constants';

interface EventDetailsScreenProps {
  eventId: string | null;
  onBack: () => void;
  onApplyClick: () => void;
}

const EventDetailsScreen: React.FC<EventDetailsScreenProps> = ({ eventId, onBack, onApplyClick }) => {
  const [songs, setSongs] = useState(SONGS_QUEUE);
  
  const event = [...EVENTS, ...UPCOMING].find(e => e.id === eventId) || EVENTS[0];

  const handleVote = (id: string) => {
    setSongs(prev => prev.map(s => s.id === id ? { ...s, votes: s.votes + 1 } : s).sort((a, b) => b.votes - a.votes));
  };

  return (
    <div className="bg-background-dark min-h-screen text-white pb-32 animate-slideUp">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center justify-between px-4 h-16 max-w-md mx-auto">
          <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
            <span className="material-icons">chevron_left</span>
          </button>
          <span className="font-semibold text-sm uppercase tracking-widest text-primary/80">Event Details</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30">
            <span className="material-icons text-sm">share</span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto pt-16">
        {/* Gallery */}
        <section className="px-4 mt-4">
          <div className="relative h-72 rounded-xl overflow-hidden group shadow-2xl">
            <img src={event.imageUrl} className="w-full h-full object-cover" alt={event.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div>
                <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase mb-2 inline-block">Free Entry</span>
                <h1 className="text-3xl font-bold text-white leading-tight">{event.title}</h1>
              </div>
              <div className="flex gap-1 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-2 overflow-x-auto hide-scrollbar pb-2">
            {[1,2,3].map(i => (
              <img key={i} className={`w-20 h-20 rounded-lg object-cover flex-shrink-0 ${i === 1 ? 'border-2 border-primary' : 'opacity-60'}`} src={`https://picsum.photos/id/${20+i}/200/200`} />
            ))}
            <div className="w-20 h-20 rounded-lg bg-primary/20 flex flex-col items-center justify-center flex-shrink-0 text-primary border border-primary/30">
              <span className="text-xs font-bold">+24</span>
              <span className="text-[8px] uppercase">Photos</span>
            </div>
          </div>
        </section>

        {/* Meta Info */}
        <section className="px-4 mt-6 grid grid-cols-2 gap-3">
          <div className="bg-primary/5 border border-primary/10 p-4 rounded-xl">
            <div className="flex items-center gap-2 text-primary mb-1">
              <span className="material-icons text-lg">calendar_today</span>
              <span className="text-xs font-bold uppercase tracking-wider">When</span>
            </div>
            <p className="text-sm font-medium">{event.date}</p>
            <p className="text-[10px] text-slate-400">{event.time} onwards</p>
          </div>
          <div className="bg-primary/5 border border-primary/10 p-4 rounded-xl">
            <div className="flex items-center gap-2 text-primary mb-1">
              <span className="material-icons text-lg">location_on</span>
              <span className="text-xs font-bold uppercase tracking-wider">Where</span>
            </div>
            <p className="text-sm font-medium">{event.venue}</p>
            <p className="text-[10px] text-slate-400">{event.city}</p>
          </div>
        </section>

        {/* Guest List */}
        <section className="mt-8">
          <div className="px-4 flex justify-between items-end mb-4">
            <div>
              <h2 className="text-lg font-bold">Guest List</h2>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest">{event.attending} people going now</span>
              </div>
            </div>
            <button className="text-xs font-bold text-primary">View All</button>
          </div>
          <div className="flex gap-4 px-4 overflow-x-auto hide-scrollbar">
            {['You', 'Riya', 'Arjun', 'Zara', 'Vikram'].map((name, i) => (
              <div key={name} className="flex-shrink-0 flex flex-col items-center gap-1">
                <div className={`w-14 h-14 rounded-full border-2 ${i === 0 ? 'border-primary' : 'border-primary/20'} p-0.5`}>
                  <img className="w-full h-full rounded-full object-cover" src={`https://picsum.photos/id/${50+i}/100/100`} />
                </div>
                <span className="text-[10px] font-medium">{name}</span>
              </div>
            ))}
            <div className="flex-shrink-0 flex flex-col items-center gap-1">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary border-2 border-dashed border-primary/30 cursor-pointer">
                <span className="material-icons text-xl">add</span>
              </div>
              <span className="text-[10px] font-medium">Invite</span>
            </div>
          </div>
        </section>

        {/* DJ Booth */}
        <section className="px-4 mt-8">
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 overflow-hidden relative shadow-inner">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-icons text-6xl rotate-12">music_note</span>
            </div>
            <h2 className="text-xl font-bold mb-1">DJ Booth</h2>
            <p className="text-xs text-slate-400 mb-4">Crowdsource the vibe. Add your track!</p>
            <div className="relative mb-6">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
                <span className="material-icons text-lg">search</span>
              </span>
              <input className="w-full pl-10 pr-4 py-2.5 bg-background-dark/50 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50 placeholder:text-slate-500" placeholder="Search song or artist..." type="text"/>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-primary mb-2">
                <span>Live Queue</span>
                <span>Votes</span>
              </div>
              {songs.map(song => (
                <div key={song.id} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-slate-800 flex-shrink-0 overflow-hidden">
                    <img className="w-full h-full object-cover" src={song.albumArt} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{song.title}</p>
                    <p className="text-[10px] text-slate-400 truncate">{song.artist}</p>
                  </div>
                  <button 
                    onClick={() => handleVote(song.id)}
                    className="flex items-center gap-1 bg-primary text-white px-2 py-1 rounded-md active:scale-90 transition-transform"
                  >
                    <span className="material-icons text-xs">thumb_up</span>
                    <span className="text-[10px] font-bold">{song.votes}</span>
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-primary text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-transform">
              <span className="material-icons text-lg">add_circle</span>
              Request a Song
            </button>
          </div>
        </section>

        {/* Artist CTA */}
        <section className="px-4 mt-8 mb-12">
          <div className="border-2 border-dashed border-primary/30 rounded-xl p-6 text-center bg-primary/5">
            <span className="material-icons text-3xl text-primary mb-2">mic_external_on</span>
            <h3 className="font-bold">Are you an Artist?</h3>
            <p className="text-xs text-slate-400 mb-4">We're looking for opening acts & performers.</p>
            <button onClick={onApplyClick} className="text-xs font-bold text-primary border border-primary px-4 py-2 rounded-full uppercase tracking-tighter hover:bg-primary/10 transition-colors">Apply to Perform</button>
          </div>
        </section>
      </main>

      {/* Bottom Actions */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-8 bg-background-dark/80 backdrop-blur-lg border-t border-primary/10">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <button className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300">
            <span className="material-icons">map</span>
          </button>
          <button className="flex-1 h-14 bg-primary text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary/40 active:scale-[0.98] transition-all">
            Join Guest List
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default EventDetailsScreen;

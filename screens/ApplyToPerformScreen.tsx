
import React from 'react';

interface ApplyToPerformScreenProps {
  onBack: () => void;
}

const ApplyToPerformScreen: React.FC<ApplyToPerformScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-background-dark min-h-screen text-white animate-slideUp pb-32">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-primary/10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="material-icons">chevron_left</span>
        </button>
        <h1 className="text-lg font-bold tracking-tight">Apply to Perform</h1>
        <div className="w-10"></div>
      </header>

      <main className="px-6 pt-20">
        <section className="mb-10">
          <div className="relative rounded-xl overflow-hidden mb-6 h-48 flex items-end p-6 shadow-xl">
            <img alt="DJ" className="absolute inset-0 w-full h-full object-cover" src="https://picsum.photos/id/158/800/400" />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full mb-2 uppercase tracking-widest">Global Stage</span>
              <h2 className="text-2xl font-bold text-white leading-tight">Elevate Your Career <br/>on India's Biggest Stage.</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-1">Why Perform With Us</h3>
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <span className="material-icons text-primary text-xl">groups</span>
              </div>
              <div>
                <h4 className="font-bold text-sm">50k+ Monthly Attendees</h4>
                <p className="text-xs text-slate-400 mt-1">Direct exposure to a massive audience across major cities.</p>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <span className="material-icons text-primary text-xl">stars</span>
              </div>
              <div>
                <h4 className="font-bold text-sm">Celebrity Networking</h4>
                <p className="text-xs text-slate-400 mt-1">Feature alongside industry leaders and celebrities.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-bold mb-6">Artist Details</h3>
          <form className="space-y-6">
            <div className="space-y-3">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Performance Category</label>
              <div className="flex flex-wrap gap-2">
                {['DJ', 'Singer', 'Band', 'Instrumentalist'].map((cat, i) => (
                  <button key={cat} type="button" className={`px-5 py-2.5 rounded-full text-sm font-medium border ${i === 0 ? 'bg-primary border-primary text-white' : 'border-primary/20 bg-primary/5 text-slate-300'}`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Portfolio / Link</label>
              <div className="relative">
                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">link</span>
                <input className="w-full pl-12 pr-4 py-4 rounded-xl bg-primary/5 border border-primary/20 focus:ring-2 focus:ring-primary outline-none text-sm transition-all text-white" placeholder="https://soundcloud.com/your-name" type="url"/>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Availability Range</label>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">calendar_today</span>
                  <input className="w-full pl-11 pr-4 py-4 rounded-xl bg-primary/5 border border-primary/20 text-sm outline-none text-white" placeholder="From Date" type="date"/>
                </div>
                <div className="relative">
                  <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">event</span>
                  <input className="w-full pl-11 pr-4 py-4 rounded-xl bg-primary/5 border border-primary/20 text-sm outline-none text-white" placeholder="To Date" type="date"/>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Artist Bio</label>
              <textarea className="w-full px-4 py-4 rounded-xl bg-primary/5 border border-primary/20 focus:ring-2 focus:ring-primary outline-none text-sm transition-all text-white" placeholder="Tell us about your style and previous experience..." rows={4}></textarea>
            </div>
          </form>
        </section>

        <section className="mb-10">
          <h3 className="text-xl font-bold mb-6">Artist Experiences</h3>
          <div className="flex overflow-x-auto gap-4 hide-scrollbar -mx-6 px-6 pb-4">
            <div className="min-w-[280px] bg-primary/10 p-6 rounded-xl border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <img className="w-12 h-12 rounded-full object-cover border-2 border-primary" src="https://picsum.photos/id/101/100/100" />
                <div>
                  <h5 className="font-bold text-sm">DJ Zenith</h5>
                  <p className="text-[10px] text-primary font-semibold uppercase tracking-wider">Techno Artist</p>
                </div>
              </div>
              <p className="text-xs italic text-slate-300 leading-relaxed">"Performing at the Mumbai Beach Gala changed everything. The energy of the 5,000+ crowd was unmatched!"</p>
            </div>
            <div className="min-w-[280px] bg-primary/10 p-6 rounded-xl border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <img className="w-12 h-12 rounded-full object-cover border-2 border-primary" src="https://picsum.photos/id/102/100/100" />
                <div>
                  <h5 className="font-bold text-sm">Rohan K.</h5>
                  <p className="text-[10px] text-primary font-semibold uppercase tracking-wider">Vocalist</p>
                </div>
              </div>
              <p className="text-xs italic text-slate-300 leading-relaxed">"Met three major producers after my set. This platform is a game-changer for independent artists."</p>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-dark to-transparent pt-10">
        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 flex items-center justify-center gap-2 transform active:scale-[0.98] transition-all">
          <span>Submit Application</span>
          <span className="material-icons text-sm">send</span>
        </button>
      </div>
    </div>
  );
};

export default ApplyToPerformScreen;

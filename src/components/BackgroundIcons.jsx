export default function BackgroundIcons() {
  // SVG Paths for our 3 main vehicles
  const SUV = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 lg:w-40 lg:h-40"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H8.3a2 2 0 0 0-1.6.8L4 11l-5.16.86a1 1 0 0 0-.84.99V16h3m10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/></svg>;
  const Bus = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 lg:w-40 lg:h-40"><path d="M8 6v6m4-6v6m4-6v6M4 15h16M4 18h16M6 21v-3M18 21v-3M5 6h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/></svg>;
  const Tempo = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 lg:w-40 lg:h-40"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect><circle cx="6" cy="18" r="2"></circle><circle cx="18" cy="18" r="2"></circle><path d="M2 12h20M6 6v6M18 6v6M12 6v6"></path></svg>;

  // We duplicate the array multiple times so the infinite scroll never runs out of icons
  const iconSet = [SUV, Bus, Tempo, SUV, Bus, Tempo, SUV, Bus, Tempo, SUV, Bus, Tempo, SUV, Bus, Tempo, SUV, Bus, Tempo];

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden flex flex-col justify-around opacity-[0.03] text-gray-900">
      
      {/* Top Row - Moving Left */}
      <div className="w-[200%] flex animate-scroll-left">
        <div className="flex justify-around w-full">
          {iconSet.map((icon, i) => <div key={i} className="px-12 lg:px-24">{icon}</div>)}
        </div>
      </div>

      {/* Middle Row - Moving Right */}
      <div className="w-[200%] flex animate-scroll-right">
        <div className="flex justify-around w-full">
          {iconSet.map((icon, i) => <div key={`mid-${i}`} className="px-12 lg:px-24">{icon}</div>)}
        </div>
      </div>

      {/* Bottom Row - Moving Left */}
      <div className="w-[200%] flex animate-scroll-left" style={{ animationDuration: '80s' }}>
        <div className="flex justify-around w-full">
          {iconSet.map((icon, i) => <div key={`bot-${i}`} className="px-12 lg:px-24">{icon}</div>)}
        </div>
      </div>

    </div>
  );
}
// src/components/HomeGrids.jsx
import { motion } from "framer-motion";
import { touristPlaces, devotionalTours, fleet, services, drivers, reviews } from "../data/siteData";

export default function HomeGrids() {
  return (
    <div className="w-full max-w-[95rem] mx-auto flex flex-col gap-24 mt-24 mb-24">
        {/* GRID 1: TRENDING TOURIST DESTINATIONS */}
        <div>
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8 px-6 lg:px-12">Trending Destinations</h3>
          <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-6 lg:px-12 hide-scrollbars snap-x snap-mandatory">
            {touristPlaces.map((tour, index) => (
              <motion.div key={index} whileTap={{ scale: 0.96 }} className="flex-shrink-0 w-80 lg:w-96 bg-pale-bg p-8 rounded-[40px] border-2 border-white snap-center cursor-grab active:cursor-grabbing" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-full border border-blue-100 mb-6">{tour.tag}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{tour.title}</h4>
                <p className="text-sm font-medium text-gray-500 leading-relaxed mb-6">{tour.desc}</p>
               {/* Updated Grid 1 Image Container */}
<div className="w-full h-64 bg-transparent rounded-2xl border border-white flex items-center justify-center overflow-hidden" style={{ boxShadow: "var(--shadow-soft-pressed)" }}>
  <img 
    src={`/${tour.image}`} 
    alt={tour.title} 
    className="w-full h-full object-contain hover:scale-110 transition-transform duration-500" 
  />
</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GRID 2: DEVOTIONAL TOURS */}
        <div>
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8 px-6 lg:px-12">Sacred Pilgrimages</h3>
          <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-6 lg:px-12 hide-scrollbars snap-x snap-mandatory">
            {devotionalTours.map((tour, index) => (
              <motion.div key={index} whileTap={{ scale: 0.96 }} className="flex-shrink-0 w-80 lg:w-96 bg-pale-bg p-8 rounded-[40px] border-2 border-white snap-center cursor-grab active:cursor-grabbing" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-orange-600 bg-orange-50 inline-block px-3 py-1 rounded-full border border-orange-100 mb-6">{tour.tag}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{tour.title}</h4>
                <p className="text-sm font-medium text-gray-500 leading-relaxed mb-6">{tour.desc}</p>
                {/* Updated Grid 2 Image Container */}
<div className="w-full h-64 bg-transparent rounded-2xl border border-white flex items-center justify-center overflow-hidden" style={{ boxShadow: "var(--shadow-soft-pressed)" }}>
  <img 
    src={`/${tour.image}`} 
    alt={tour.title} 
    className="w-full h-full object-contain hover:scale-110 transition-transform duration-500" 
  />
</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GRID 3: PREMIUM FLEET */}
        <div className="px-6 lg:px-12">
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8">Our Premium Fleet</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fleet.map((car, index) => (
              <motion.div key={index} whileHover={{ y: -5 }} className="bg-pale-bg p-8 rounded-[40px] border-2 border-white flex flex-col justify-between" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-gray-800">{car.name}</h4>
                    <span className="text-xs font-bold text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-100">{car.seats}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-500 mb-6">{car.type}</p>
                </div>
                <div className="flex justify-between items-center mt-6 pt-6 border-t-2 border-white/60">
                  <span className="text-lg font-black text-gray-900">{car.price}</span>
                  <button className="text-sm font-bold text-gray-900 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 outline-none">Book</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GRID 4: SPECIALIZED SERVICES */}
        <div className="px-6 lg:px-12">
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8">Specialized Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }} className="bg-pale-bg p-8 rounded-[40px] border-2 border-white flex items-center gap-6" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
                <div className="w-16 h-16 rounded-2xl bg-white flex-shrink-0 flex items-center justify-center border border-gray-100" style={{ boxShadow: "var(--shadow-soft-pressed)" }}>✦</div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h4>
                  <p className="text-sm font-medium text-gray-500">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GRID 5: MEET THE CAPTAINS */}
        <div>
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8 px-6 lg:px-12">Meet Your Captains</h3>
          <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-6 lg:px-12 hide-scrollbars snap-x snap-mandatory">
            {drivers.map((driver, index) => (
              <motion.div key={index} whileTap={{ scale: 0.96 }} className="flex-shrink-0 w-72 lg:w-80 bg-pale-bg p-8 rounded-[40px] border-2 border-white snap-center text-center cursor-grab active:cursor-grabbing" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
                <div className="w-24 h-24 mx-auto bg-white rounded-full border-[4px] border-pale-bg shadow-xl mb-4 flex items-center justify-center text-gray-300 font-bold" style={{ boxShadow: "var(--shadow-soft-pressed)" }}>[ Photo ]</div>
                <h4 className="text-xl font-bold text-gray-800 mb-1">{driver.name}</h4>
                <div className="text-xs font-bold text-gray-500 mb-4">{driver.exp} Experience • {driver.rating}</div>
                <p className="text-sm font-medium text-gray-500 italic">"{driver.desc}"</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GRID 6: VIDEO TESTIMONIALS */}
        <div>
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8 px-6 lg:px-12 flex items-center gap-3">
            Traveler Stories
            <span className="text-xs font-bold bg-red-50 text-red-500 border border-red-100 px-3 py-1 rounded-full uppercase tracking-widest">Video Reviews</span>
          </h3>
          <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-6 lg:px-12 hide-scrollbars snap-x snap-mandatory">
            {reviews.map((review, index) => (
              <motion.div key={index} whileTap={{ scale: 0.96 }} className="flex-shrink-0 w-64 lg:w-72 h-96 bg-pale-bg p-4 rounded-[40px] border-2 border-white snap-center cursor-grab active:cursor-grabbing relative overflow-hidden flex flex-col justify-end" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
                <div className="absolute inset-0 m-4 rounded-[30px] bg-white/50 border border-white flex items-center justify-center" style={{ boxShadow: "var(--shadow-soft-pressed)" }}>
                   <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg text-gray-800 text-xl backdrop-blur-md">▶</div>
                </div>
                <div className="relative z-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white mb-2 mx-2">
                  <h4 className="text-sm font-bold text-gray-800">{review.name}</h4>
                  <p className="text-xs font-semibold text-gray-500">{review.tour}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GRID 7: YOUTUBE AUTO-SYNC */}
        <div>
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8 px-6 lg:px-12 flex items-center gap-3">
            <span className="text-red-600 text-3xl">▶</span> Latest on YouTube
          </h3>
          <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-6 lg:px-12 hide-scrollbars snap-x snap-mandatory">
            {[1, 2, 3].map((video, index) => (
              <motion.div key={index} whileTap={{ scale: 0.96 }} className="flex-shrink-0 w-80 lg:w-[26rem] bg-pale-bg p-4 rounded-[40px] border-2 border-white snap-center cursor-grab active:cursor-grabbing" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
                <div className="w-full h-48 bg-gray-900 rounded-[28px] mb-4 relative overflow-hidden flex items-center justify-center border-4 border-gray-900">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-50 blur-sm"></div>
                  <div className="z-10 bg-red-600 text-white w-12 h-8 rounded-lg flex items-center justify-center font-bold text-xs shadow-lg">PLAY</div>
                </div>
                <h4 className="text-lg font-bold text-gray-800 line-clamp-2 leading-tight px-2">Exploring the Hidden Waterfalls of Araku Valley | Shanthibhaskar Travells</h4>
                <p className="text-xs font-bold text-gray-500 mt-2 px-2">2.4K views • 2 days ago</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GRID 8: INSTAGRAM FEED */}
        <div className="px-6 lg:px-12">
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-pink-500 text-3xl">📸</span> Instagram Live
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((post, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }} className="aspect-square bg-white rounded-3xl border-2 border-white relative overflow-hidden group" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 font-bold text-xs">[ IG Image ]</div>
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-bold text-sm">❤️ 124</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GRID 9: FACEBOOK POSTS */}
        <div className="px-6 lg:px-12">
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-blue-600 text-3xl">📘</span> Facebook Updates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((post, index) => (
              <motion.div key={index} whileHover={{ y: -5 }} className="bg-pale-bg p-6 rounded-[40px] border-2 border-white flex flex-col" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">SB</div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">Shanthibhaskar Travells</h4>
                    <p className="text-[10px] font-bold text-gray-400">2 hours ago</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-600 mb-4 line-clamp-3">We just added 3 brand new Innova Crystas to our premium fleet! Book your next family trip with maximum comfort. 🚙✨</p>
                <div className="w-full h-32 bg-gray-200 rounded-2xl mb-4 border border-white"></div>
                <div className="flex gap-4 text-xs font-bold text-gray-500 pt-2 border-t border-gray-200">
                  <span className="hover:text-blue-600 cursor-pointer">👍 48</span>
                  <span className="hover:text-blue-600 cursor-pointer">💬 12</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GRID 10: WHATSAPP-STYLE LIVE UPDATES */}
        <div className="px-6 lg:px-12">
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-green-500 text-3xl">💬</span> Live Dispatch Feed
          </h3>
          <div className="bg-white/60 backdrop-blur-md p-6 lg:p-10 rounded-[40px] border-2 border-white flex flex-col gap-4 max-w-3xl" style={{ boxShadow: "var(--shadow-soft-pressed)" }}>
            <div className="self-start max-w-[80%] bg-white p-4 rounded-2xl rounded-tl-sm border border-gray-100 shadow-sm relative">
              <p className="text-sm font-medium text-gray-700">🚨 Traffic Update: Heavy rain on the Ghat roads leading to Tirupati. All our drivers have been instructed to reduce speed. Expect a 30-min delay.</p>
              <span className="text-[9px] font-bold text-gray-400 absolute bottom-1 right-3">10:42 AM</span>
            </div>
            <div className="self-start max-w-[80%] bg-green-50 border border-green-100 p-4 rounded-2xl rounded-tl-sm shadow-sm relative mt-2">
              <p className="text-sm font-bold text-green-800">✅ Offer Claimed: The 15% discount on 26-seater Tempos is now fully booked for this weekend!</p>
              <span className="text-[9px] font-bold text-green-600 absolute bottom-1 right-3">11:15 AM</span>
            </div>
          </div>
        </div>

        {/* GRID 11: TRAVEL AGENCY GALLERY */}
        <div className="px-6 lg:px-12">
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8">Agency Gallery</h3>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <div className="bg-gray-300 w-full h-48 rounded-3xl border-2 border-white shadow-sm flex items-center justify-center text-gray-500 text-xs font-bold">[ Image ]</div>
            <div className="bg-gray-300 w-full h-64 rounded-3xl border-2 border-white shadow-sm flex items-center justify-center text-gray-500 text-xs font-bold">[ Image ]</div>
            <div className="bg-gray-300 w-full h-40 rounded-3xl border-2 border-white shadow-sm flex items-center justify-center text-gray-500 text-xs font-bold">[ Image ]</div>
            <div className="bg-gray-300 w-full h-72 rounded-3xl border-2 border-white shadow-sm flex items-center justify-center text-gray-500 text-xs font-bold">[ Image ]</div>
            <div className="bg-gray-300 w-full h-56 rounded-3xl border-2 border-white shadow-sm flex items-center justify-center text-gray-500 text-xs font-bold">[ Image ]</div>
            <div className="bg-gray-300 w-full h-48 rounded-3xl border-2 border-white shadow-sm flex items-center justify-center text-gray-500 text-xs font-bold">[ Image ]</div>
          </div>
        </div>

        {/* GRID 12: DAILY ADMIN HIGHLIGHT */}
        <div className="px-6 lg:px-12">
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8">Today's Highlight Route</h3>
          <div className="w-full bg-gray-900 rounded-[40px] p-8 lg:p-16 relative overflow-hidden border-4 border-white shadow-2xl flex flex-col justify-end min-h-[400px]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="relative z-10">
              <div className="bg-blue-600 text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full inline-block mb-4">Live from the road</div>
              <h4 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-tight">Sunrise at Nandi Hills</h4>
              <p className="text-gray-300 font-medium max-w-xl mb-6">Our Innova fleet successfully dropped 4 families this morning to witness this incredible view. Weather is perfectly clear!</p>
              <button className="bg-white text-gray-900 font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">Book This Route</button>
            </div>
          </div>
        </div>

        {/* GRID 13: LIVE VIEW & VISITOR STATS */}
        <div className="px-6 lg:px-12">
          <div className="bg-pale-bg rounded-[40px] border-2 border-white p-8 lg:p-12" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-200">
              <div className="flex flex-col items-center pt-4 md:pt-0">
                <div className="text-4xl lg:text-5xl font-black text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span> 42
                </div>
                <div className="text-xs font-extrabold text-gray-500 uppercase tracking-widest">People Looking Now</div>
              </div>
              <div className="flex flex-col items-center pt-8 md:pt-0">
                <div className="text-4xl lg:text-5xl font-black text-blue-600 mb-2">1,284</div>
                <div className="text-xs font-extrabold text-gray-500 uppercase tracking-widest">Visitors Today</div>
              </div>
              <div className="flex flex-col items-center pt-8 md:pt-0">
                <div className="text-4xl lg:text-5xl font-black text-emerald-500 mb-2">245K</div>
                <div className="text-xs font-extrabold text-gray-500 uppercase tracking-widest">Total Visitors</div>
              </div>
              <div className="flex flex-col items-center pt-8 md:pt-0">
                <div className="text-4xl lg:text-5xl font-black text-gray-900 mb-2">84,592</div>
                <div className="text-xs font-extrabold text-gray-500 uppercase tracking-widest">Total Trips Planned</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
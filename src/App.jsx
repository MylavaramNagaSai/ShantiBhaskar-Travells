import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import BackgroundIcons from "./components/BackgroundIcons";
import Footer from "./components/Footer";

function App() {
  const [currentView, setCurrentView] = useState("website"); 
  const [isCalcOpen, setIsCalcOpen] = useState(false);
  const [vehicle, setVehicle] = useState("small");
  const [distance, setDistance] = useState(350);
  const rates = { small: 14, ertiga: 18, innova: 21 };
  
  const calculatePrice = () => {
    const activeDistance = Math.max(Number(distance), 350);
    return activeDistance * rates[vehicle];
  };

  // --- MOCK DATA FOR THE 6 GRIDS ---
  const touristPlaces = [
    { title: "Munnar Hill Station", desc: "Cool breezes and tea gardens.", tag: "Nature" },
    { title: "Goa Coastal Drive", desc: "Smooth highway cruising to the beaches.", tag: "Popular" },
    { title: "Araku Valley", desc: "Scenic winding roads and waterfalls.", tag: "Adventure" },
  ];

  const devotionalTours = [
    { title: "Tirupati Darshan", desc: "Premium 2-day spiritual journey.", tag: "Bestseller" },
    { title: "Srisailam Yatra", desc: "Safe and comfortable forest ghat drives.", tag: "Sacred" },
    { title: "Shirdi Package", desc: "Complete family pilgrimage route.", tag: "Group" },
  ];

  const fleet = [
    { name: "Innova Crysta", type: "Premium SUV", seats: "7 Seater", price: "₹21/km" },
    { name: "Maruti Ertiga", type: "Family MUV", seats: "6 Seater", price: "₹18/km" },
    { name: "Swift Dzire", type: "Comfort Sedan", seats: "4 Seater", price: "₹14/km" },
    { name: "Tempo Traveller", type: "Group Travel", seats: "12 to 26 Seater", price: "Custom" },
  ];

  const services = [
    { title: "Wedding Transport", desc: "Luxury fleets for the bride, groom, and entire guest list." },
    { title: "Corporate Tie-ups", desc: "Monthly billing and dedicated vehicles for employee transit." },
    { title: "Airport Transfers", desc: "Punctual pick-ups and drop-offs with luggage assistance." },
    { title: "Local Daily Rentals", desc: "12-hour packages for city shopping and local business." },
  ];

  const drivers = [
    { name: "Rajesh Kumar", exp: "15+ Years", rating: "5.0 ★", desc: "Expert in hill stations and ghat roads." },
    { name: "Suresh M.", exp: "12 Years", rating: "4.9 ★", desc: "Specializes in multi-state devotional tours." },
    { name: "Vikram T.", exp: "8 Years", rating: "4.8 ★", desc: "Fluent in English, Hindi, and Telugu." },
    { name: "Anand R.", exp: "20 Years", rating: "5.0 ★", desc: "Our chief fleet captain. Flawless safety record." },
  ];

  const reviews = [
    { name: "Priya S.", tour: "Tirupati Tour", type: "Video" },
    { name: "Rahul V.", tour: "Corporate Event", type: "Video" },
    { name: "The Sharma Family", tour: "Kerala Trip", type: "Video" },
  ];

  if (currentView === "admin") {
    return (
      <AnimatePresence mode="wait">
        <Dashboard onExit={() => setCurrentView("website")} />
      </AnimatePresence>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center pt-48 pb-6 overflow-x-hidden relative">
      <Navbar />
      <BackgroundIcons />

      {/* --- HERO SECTION --- */}
      <div className="flex flex-col items-center justify-center w-full max-w-[95rem] mx-auto min-h-[50vh] px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 z-10 flex flex-col items-center w-full max-w-4xl text-center"
        >
          {/* Tape Quote */}
          <motion.div 
            initial={{ opacity: 0, rotate: -2 }}
            animate={{ opacity: 1, rotate: -1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-[#E5DCC5] px-6 py-2 rotate-[-1deg] mb-8 shadow-md rounded-sm font-bold text-gray-800 tracking-wide text-sm lg:text-base border-b-2 border-black/5"
            style={{ boxShadow: "3px 3px 10px rgba(0,0,0,0.1)" }}
          >
            Your Journey Is In My Hands 🚙
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
            Where will your <br className="lg:hidden"/> journey take you?
          </h2>
          
          <p className="text-base lg:text-lg text-gray-500 max-w-md lg:max-w-2xl mx-auto font-medium mb-8">
            Premium travel experiences, temple tours, and corporate fleet services across India since 2001.
          </p>

          {/* Memories Quote */}
          <p className="text-xl lg:text-2xl italic font-serif text-gray-700 mb-12">
            "May your travels be filled with amazing memories 🎉"
          </p>
        </motion.div>

        <motion.button
          onClick={() => setIsCalcOpen(true)}
          whileTap={{ scale: 0.94, boxShadow: "var(--shadow-soft-pressed)" }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="relative px-10 py-5 lg:py-6 lg:text-xl rounded-3xl bg-pale-bg text-gray-800 font-extrabold text-lg w-full max-w-sm lg:max-w-md border border-white z-10 outline-none"
          style={{ boxShadow: "var(--shadow-soft-pop)" }}
        >
          Calculate Your Fare
        </motion.button>
      </div>

      <div className="w-full max-w-[95rem] mx-auto flex flex-col gap-24 mt-24 mb-24">
        
        {/* GRID 1: TRENDING TOURIST DESTINATIONS (Horizontal Swipe) */}
        <div>
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8 px-6 lg:px-12">Trending Destinations</h3>
          <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-6 lg:px-12 hide-scrollbars snap-x snap-mandatory">
            {touristPlaces.map((tour, index) => (
              <motion.div key={index} whileTap={{ scale: 0.96 }} className="flex-shrink-0 w-80 lg:w-96 bg-pale-bg p-8 rounded-[40px] border-2 border-white snap-center cursor-grab active:cursor-grabbing" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-full border border-blue-100 mb-6">{tour.tag}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{tour.title}</h4>
                <p className="text-sm font-medium text-gray-500 leading-relaxed mb-6">{tour.desc}</p>
                <div className="w-full h-32 bg-white/50 rounded-2xl border border-white flex items-center justify-center text-gray-300 font-bold" style={{ boxShadow: "var(--shadow-soft-pressed)" }}>[ Landscape Image ]</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GRID 2: DEVOTIONAL TOURS (Horizontal Swipe) */}
        <div>
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8 px-6 lg:px-12">Sacred Pilgrimages</h3>
          <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-6 lg:px-12 hide-scrollbars snap-x snap-mandatory">
            {devotionalTours.map((tour, index) => (
              <motion.div key={index} whileTap={{ scale: 0.96 }} className="flex-shrink-0 w-80 lg:w-96 bg-pale-bg p-8 rounded-[40px] border-2 border-white snap-center cursor-grab active:cursor-grabbing" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-orange-600 bg-orange-50 inline-block px-3 py-1 rounded-full border border-orange-100 mb-6">{tour.tag}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{tour.title}</h4>
                <p className="text-sm font-medium text-gray-500 leading-relaxed mb-6">{tour.desc}</p>
                <div className="w-full h-32 bg-white/50 rounded-2xl border border-white flex items-center justify-center text-gray-300 font-bold" style={{ boxShadow: "var(--shadow-soft-pressed)" }}>[ Temple Image ]</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GRID 3: PREMIUM FLEET (Vertical Grid) */}
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

        {/* GRID 4: SPECIALIZED SERVICES (Vertical Grid) */}
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

        {/* GRID 5: MEET THE CAPTAINS (Horizontal Swipe) */}
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

        {/* GRID 6: VIDEO TESTIMONIALS (Horizontal Swipe) */}
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
        {/* ================= NEW EXPANSION GRIDS ================= */}

        {/* GRID 7: YOUTUBE AUTO-SYNC (Horizontal Swipe) */}
        <div>
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8 px-6 lg:px-12 flex items-center gap-3">
            <span className="text-red-600 text-3xl">▶</span> Latest on YouTube
          </h3>
          <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-6 lg:px-12 hide-scrollbars snap-x snap-mandatory">
            {[1, 2, 3].map((video, index) => (
              <motion.div key={index} whileTap={{ scale: 0.96 }} className="flex-shrink-0 w-80 lg:w-[26rem] bg-pale-bg p-4 rounded-[40px] border-2 border-white snap-center cursor-grab active:cursor-grabbing" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
                {/* Simulated Auto-playing iFrame Placeholder */}
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

        {/* GRID 8: INSTAGRAM FEED (Masonry/Grid) */}
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

        {/* GRID 9: FACEBOOK POSTS (Standard Grid) */}
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

        {/* GRID 10: WHATSAPP-STYLE LIVE UPDATES (Vertical Feed) */}
        <div className="px-6 lg:px-12">
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-green-500 text-3xl">💬</span> Live Dispatch Feed
          </h3>
          <div className="bg-white/60 backdrop-blur-md p-6 lg:p-10 rounded-[40px] border-2 border-white flex flex-col gap-4 max-w-3xl" style={{ boxShadow: "var(--shadow-soft-pressed)" }}>
            
            {/* Mock Message 1 */}
            <div className="self-start max-w-[80%] bg-white p-4 rounded-2xl rounded-tl-sm border border-gray-100 shadow-sm relative">
              <p className="text-sm font-medium text-gray-700">🚨 Traffic Update: Heavy rain on the Ghat roads leading to Tirupati. All our drivers have been instructed to reduce speed. Expect a 30-min delay.</p>
              <span className="text-[9px] font-bold text-gray-400 absolute bottom-1 right-3">10:42 AM</span>
            </div>

            {/* Mock Message 2 */}
            <div className="self-start max-w-[80%] bg-green-50 border border-green-100 p-4 rounded-2xl rounded-tl-sm shadow-sm relative mt-2">
              <p className="text-sm font-bold text-green-800">✅ Offer Claimed: The 15% discount on 26-seater Tempos is now fully booked for this weekend!</p>
              <span className="text-[9px] font-bold text-green-600 absolute bottom-1 right-3">11:15 AM</span>
            </div>

          </div>
        </div>

        {/* GRID 11: TRAVEL AGENCY GALLERY (Masonry Layout) */}
        <div className="px-6 lg:px-12">
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8">Agency Gallery</h3>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {/* Random heights to simulate Masonry Grid */}
            <div className="bg-gray-300 w-full h-48 rounded-3xl border-2 border-white shadow-sm flex items-center justify-center text-gray-500 text-xs font-bold">[ Image ]</div>
            <div className="bg-gray-300 w-full h-64 rounded-3xl border-2 border-white shadow-sm flex items-center justify-center text-gray-500 text-xs font-bold">[ Image ]</div>
            <div className="bg-gray-300 w-full h-40 rounded-3xl border-2 border-white shadow-sm flex items-center justify-center text-gray-500 text-xs font-bold">[ Image ]</div>
            <div className="bg-gray-300 w-full h-72 rounded-3xl border-2 border-white shadow-sm flex items-center justify-center text-gray-500 text-xs font-bold">[ Image ]</div>
            <div className="bg-gray-300 w-full h-56 rounded-3xl border-2 border-white shadow-sm flex items-center justify-center text-gray-500 text-xs font-bold">[ Image ]</div>
            <div className="bg-gray-300 w-full h-48 rounded-3xl border-2 border-white shadow-sm flex items-center justify-center text-gray-500 text-xs font-bold">[ Image ]</div>
          </div>
        </div>

        {/* GRID 12: DAILY ADMIN HIGHLIGHT (Hero Card) */}
        <div className="px-6 lg:px-12">
          <h3 className="text-2xl lg:text-4xl font-black text-gray-900 mb-8">Today's Highlight Route</h3>
          <div className="w-full bg-gray-900 rounded-[40px] p-8 lg:p-16 relative overflow-hidden border-4 border-white shadow-2xl flex flex-col justify-end min-h-[400px]">
             {/* Background Image Placeholder */}
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

        {/* GRID 13: LIVE VIEW & VISITOR STATS (Floating Metrics) */}
        <div className="px-6 lg:px-12">
          <div className="bg-pale-bg rounded-[40px] border-2 border-white p-8 lg:p-12" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
            {/* FIX: Changed md:grid-cols-3 to md:grid-cols-4 to fit the new metric */}
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

              {/* NEW SECTION: TOTAL VISITORS */}
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

      <Footer onAdminClick={() => setCurrentView("admin")} />

      {/* --- THE CALCULATOR MODAL (Unchanged) --- */}
      <AnimatePresence>
        {isCalcOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsCalcOpen(false)} className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-auto" />
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="relative w-full bg-pale-bg rounded-t-[40px] sm:rounded-[40px] p-8 pb-12 sm:pb-8 border sm:border-white shadow-2xl pointer-events-auto sm:max-w-md sm:m-4" style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}>
              <div className="w-16 h-1.5 bg-gray-300 rounded-full mx-auto mb-8 sm:hidden" />
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-left">Quick Estimate</h3>
              <div className="flex gap-4 mb-6 overflow-x-auto pb-4 hide-scrollbars">
                {[{ id: "small", label: "Small Cars", desc: "Etios/Swift" }, { id: "ertiga", label: "Ertiga", desc: "6 Seater" }, { id: "innova", label: "Innova", desc: "Premium" }].map((car) => (
                  <motion.button key={car.id} onClick={() => setVehicle(car.id)} whileTap={{ scale: 0.95 }} className={`flex-shrink-0 p-4 rounded-2xl border-2 text-left transition-colors duration-200 outline-none ${ vehicle === car.id ? "border-gray-800 bg-gray-800 text-white" : "border-transparent text-gray-800 bg-pale-bg" }`} style={{ boxShadow: vehicle === car.id ? "var(--shadow-soft-pressed)" : "var(--shadow-soft-pop)" }}>
                    <div className="font-bold">{car.label}</div><div className={`text-xs mt-1 ${vehicle === car.id ? "text-gray-300" : "text-gray-500"}`}>{car.desc}</div>
                  </motion.button>
                ))}
              </div>
              <div className="mb-8 text-left">
                <label className="block text-sm font-bold text-gray-700 mb-3">Estimated Distance (Km)</label>
                <div className="relative">
                  <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)} className="w-full bg-pale-bg p-5 rounded-2xl outline-none font-bold text-xl text-gray-800 border border-white" style={{ boxShadow: "var(--shadow-soft-pressed)" }} />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-bold tracking-wide">Min 350 Km</div>
                </div>
              </div>
              <div className="flex justify-between items-center bg-pale-bg p-6 rounded-3xl border border-white" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Estimated Total</div>
                  <div className="text-3xl font-extrabold text-gray-900 tracking-tight">₹{calculatePrice().toLocaleString()}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Toll Included</div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
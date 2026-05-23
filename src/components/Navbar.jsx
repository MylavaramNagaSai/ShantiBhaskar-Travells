import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [desktopActiveDropdown, setDesktopActiveDropdown] = useState(null);

  const navItems = [
    { title: "Our Fleet", items: ["Toyota Etios Liva", "Swift Dzire", "Maruti Suzuki Ertiga", "Innova Crysta", "Tempo Travels (AC)", "Mini Buses"] },
    { title: "Tourist Places", items: ["Hill Stations", "Historical Sites", "Beaches", "Wildlife Sanctuaries", "Waterfalls", "Custom Packages"] },
    { title: "Devotional Tours", items: ["Temple Darshan", "Pilgrimage Routes", "Group Pooja Deals", "Route Maps", "Special Assistance"] },
    { title: "Services", items: ["Local Rentals", "Outstation Trips", "Airport Transfers", "Corporate Tie-ups", "Wedding Transport"] },
    { title: "Pricing", items: ["Fare Calculator", "Base Rates", "Toll Tax Info", "Inter-State Permits"] },
    { title: "About", items: ["Established 2001", "Meet the 20 Drivers", "Safety Standards", "Gallery"] },
    { title: "Contact", items: ["24/7 Helpline", "WhatsApp Group", "Office Location", "Quick Book"] }
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-none px-4 lg:px-8 py-6">
        <div className="flex items-center justify-between max-w-[95rem] mx-auto gap-4">
          
          {/* 1. SEPARATE INDIVIDUAL LOGO SECTION - FIXED ALIGNMENT & SIZE */}
          <motion.div 
            whileTap={{ scale: 0.95 }} 
            /* Added flex, items-center, justify-center to perfectly center the logo mathematically */
            /* Changed to rounded-full and adjusted padding to make it a tight, sleek pill */
            className="pointer-events-auto cursor-pointer flex-shrink-0 z-50 bg-white/50 backdrop-blur-xl rounded-full px-4 lg:px-6 py-2 border-2 border-white/80 flex items-center justify-center"
            style={{ boxShadow: "var(--shadow-soft-pop)" }}
          >
            <img 
              src="/logo.png" 
              alt="Santhibhaskar Logo" 
              /* Massively increased height to h-20 (mobile) and h-28 (desktop) */
              className="h-20 lg:h-28 w-auto object-contain drop-shadow-xl transition-all duration-300" 
            />
          </motion.div>

          {/* 2. THE FLOATING NAVIGATION PILL (Desktop) */}
          <div 
            className="hidden xl:flex pointer-events-auto items-center bg-white/60 backdrop-blur-xl rounded-full px-3 py-2 border-2 border-white" 
            style={{ boxShadow: "var(--shadow-soft-pop)" }}
          >
            {navItems.map((category, index) => (
              <div 
                key={index} 
                className="relative"
                onMouseEnter={() => setDesktopActiveDropdown(index)}
                onMouseLeave={() => setDesktopActiveDropdown(null)}
              >
                <button className="px-5 py-2.5 text-[13px] font-extrabold text-gray-700 hover:text-gray-900 transition-all rounded-full hover:bg-white/80 outline-none uppercase tracking-wide">
                  {category.title}
                </button>
                
                <AnimatePresence>
                  {desktopActiveDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-white z-50 overflow-hidden"
                      style={{ boxShadow: "var(--shadow-soft-pop)" }}
                    >
                      <div className="py-2">
                        {category.items.map((subItem, subIndex) => (
                          <a 
                            key={subIndex} 
                            href={`#${subItem.replace(/\s+/g, '-').toLowerCase()}`}
                            className="block px-6 py-3 text-xs font-bold text-gray-500 hover:bg-pale-bg hover:text-gray-900 transition-colors"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* 3. FLOATING HAMBURGER PILL (Mobile / Tablet) */}
          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.85, boxShadow: "var(--shadow-soft-pressed)" }}
            className="xl:hidden pointer-events-auto w-14 h-14 flex flex-col items-center justify-center gap-1.5 rounded-full bg-white/80 backdrop-blur-xl border-2 border-white z-50 relative outline-none"
            style={{ boxShadow: isOpen ? "var(--shadow-soft-pressed)" : "var(--shadow-soft-pop)" }}
          >
            <motion.div animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} className="w-6 h-0.5 bg-gray-800 rounded-full origin-center transition-all duration-300" />
            <motion.div animate={{ opacity: isOpen ? 0 : 1 }} className="w-6 h-0.5 bg-gray-800 rounded-full transition-all duration-300" />
            <motion.div animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} className="w-6 h-0.5 bg-gray-800 rounded-full origin-center transition-all duration-300" />
          </motion.button>
        </div>
      </div>

      {/* MOBILE FULL SCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-pale-bg/90 pt-36 px-6 pb-20 overflow-y-auto hide-scrollbars xl:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              {navItems.map((category, index) => (
                <div key={index} className="flex flex-col">
                  <motion.button
                    onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                    whileTap={{ scale: 0.97 }}
                    className="flex justify-between items-center p-5 rounded-3xl bg-white/50 border-2 border-white text-left font-bold text-gray-800 outline-none"
                    style={{ boxShadow: activeDropdown === index ? "var(--shadow-soft-pressed)" : "var(--shadow-soft-pop)" }}
                  >
                    <span className="text-lg">{category.title}</span>
                    <motion.span animate={{ rotate: activeDropdown === index ? 180 : 0 }} className="text-xl text-gray-400">↓</motion.span>
                  </motion.button>
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden ml-4 mr-2 mt-2"
                      >
                        <div className="flex flex-col py-2 bg-white/30 rounded-2xl border border-white">
                          {category.items.map((subItem, subIndex) => (
                            <motion.a key={subIndex} href={`#`} className="px-6 py-4 text-sm font-bold text-gray-600 active:bg-white/50 rounded-2xl outline-none transition-colors">{subItem}</motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
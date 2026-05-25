// src/components/FareCalculatorModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { rates } from "../data/siteData";

export default function FareCalculatorModal({ isCalcOpen, setIsCalcOpen, vehicle, setVehicle, distance, setDistance }) {
  const calculatePrice = () => {
    const activeDistance = Math.max(Number(distance), 350);
    return activeDistance * rates[vehicle];
  };

  return (
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
  );
}
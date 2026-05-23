import { useState } from "react";
import { motion } from "framer-motion";

export default function Dashboard({ onExit }) {
  const [updateText, setUpdateText] = useState("");

  // Mock Business Data
  const fleetStatus = [
    { name: "Innova Crysta", total: 8, available: 3, onTrip: 4, maintenance: 1 },
    { name: "Ertiga", total: 10, available: 6, onTrip: 4, maintenance: 0 },
    { name: "Tempo Travels", total: 5, available: 2, onTrip: 3, maintenance: 0 },
  ];

  const drivers = [
    { name: "Rajesh K.", status: "Driving", car: "Innova (AP-09-1234)", eta: "2h" },
    { name: "Suresh M.", status: "Available", car: "None", eta: "-" },
    { name: "Vikram T.", status: "Resting", car: "None", eta: "-" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="min-h-screen bg-pale-bg pt-28 pb-12 px-6 lg:px-12 w-full max-w-[95rem] mx-auto"
    >
      {/* Header Area */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <div className="w-16 h-1 bg-gray-300 rounded-full mb-4" style={{ boxShadow: "var(--shadow-soft-pressed)" }} />
          <h1 className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tight">Command Center</h1>
          <p className="text-gray-500 font-bold mt-2">Welcome back, Admin.</p>
        </div>
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={onExit}
          className="px-6 py-3 rounded-full font-bold text-sm text-gray-600 border-2 border-white bg-pale-bg outline-none"
          style={{ boxShadow: "var(--shadow-soft-pop)" }}
        >
          Exit to Website
        </motion.button>
      </div>

      {/* Responsive Masonry Grid for Tiles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        
        {/* TILE 1: Universal Broadcaster */}
        <div className="bg-pale-bg p-8 rounded-[40px] border-2 border-white xl:col-span-2" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></span>
            Universal Broadcaster
          </h2>
          <textarea 
            value={updateText}
            onChange={(e) => setUpdateText(e.target.value)}
            placeholder="Type a new offer or route update here to instantly push to the live website..."
            className="w-full h-32 bg-pale-bg p-6 rounded-3xl outline-none font-medium text-gray-700 resize-none border border-white"
            style={{ boxShadow: "var(--shadow-soft-pressed)" }}
          />
          <div className="flex justify-end mt-6">
            <motion.button 
              whileTap={{ scale: 0.95, boxShadow: "var(--shadow-soft-pressed)" }}
              className="px-8 py-4 rounded-full bg-gray-900 text-white font-extrabold outline-none"
              style={{ boxShadow: "var(--shadow-soft-pop)" }}
            >
              Push to Live Site
            </motion.button>
          </div>
        </div>

        {/* TILE 2: Live Fleet Status */}
        <div className="bg-pale-bg p-8 rounded-[40px] border-2 border-white row-span-2" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
          <h2 className="text-xl font-bold text-gray-800 mb-8">Live Fleet Status</h2>
          <div className="flex flex-col gap-8">
            {fleetStatus.map((fleet, index) => (
              <div key={index}>
                <div className="flex justify-between font-bold text-sm mb-3">
                  <span className="text-gray-800">{fleet.name}</span>
                  <span className="text-gray-500">{fleet.available} / {fleet.total} Available</span>
                </div>
                <div className="h-4 w-full bg-pale-bg rounded-full border border-white overflow-hidden flex" style={{ boxShadow: "var(--shadow-soft-pressed)" }}>
                  {/* Green = Available, Amber = On Trip, Red = Maintenance */}
                  <div style={{ width: `${(fleet.available / fleet.total) * 100}%` }} className="bg-emerald-400 h-full"></div>
                  <div style={{ width: `${(fleet.onTrip / fleet.total) * 100}%` }} className="bg-amber-400 h-full"></div>
                  <div style={{ width: `${(fleet.maintenance / fleet.total) * 100}%` }} className="bg-red-400 h-full"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Legend */}
          <div className="flex gap-4 mt-8 text-xs font-bold text-gray-500 justify-center">
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Available</div>
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400"></span> On Trip</div>
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400"></span> Garage</div>
          </div>
        </div>

        {/* TILE 3: Driver Roster */}
        <div className="bg-pale-bg p-8 rounded-[40px] border-2 border-white" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
          <h2 className="text-xl font-bold text-gray-800 mb-6">Active Dispatch</h2>
          <div className="flex flex-col gap-4">
            {drivers.map((driver, index) => (
              <motion.div 
                whileTap={{ scale: 0.98 }}
                key={index} 
                className="p-4 rounded-2xl bg-pale-bg border border-white flex justify-between items-center cursor-pointer"
                style={{ boxShadow: "var(--shadow-soft-pop)" }}
              >
                <div>
                  <div className="font-bold text-gray-800">{driver.name}</div>
                  <div className="text-xs font-semibold text-gray-500 mt-1">{driver.car}</div>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-extrabold px-3 py-1 rounded-full border ${
                    driver.status === 'Driving' ? 'text-amber-600 bg-amber-50 border-amber-100' : 
                    driver.status === 'Available' ? 'text-emerald-600 bg-emerald-50 border-emerald-100' : 
                    'text-gray-500 bg-gray-100 border-gray-200'
                  }`}>
                    {driver.status}
                  </div>
                  {driver.eta !== "-" && <div className="text-[10px] text-gray-400 font-bold mt-1">ETA: {driver.eta}</div>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TILE 4: Feedback Video Queue */}
        <div className="bg-pale-bg p-8 rounded-[40px] border-2 border-white" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center justify-between">
            Pending Videos
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">2 New</span>
          </h2>
          <div className="flex gap-4 overflow-x-auto hide-scrollbars pb-4">
            {[1, 2].map((video) => (
              <div key={video} className="flex-shrink-0 w-32 h-48 bg-gray-200 rounded-2xl relative border border-white" style={{ boxShadow: "var(--shadow-soft-pressed)" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center pl-1 text-xs">▶</div>
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex gap-2">
                  <button className="flex-1 bg-emerald-500 text-white text-[10px] font-bold py-1.5 rounded-lg shadow-lg">Approve</button>
                  <button className="flex-1 bg-white text-red-500 text-[10px] font-bold py-1.5 rounded-lg shadow-lg">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
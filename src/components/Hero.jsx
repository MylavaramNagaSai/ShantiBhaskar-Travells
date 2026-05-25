// src/components/Hero.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quotes } from "../data/siteData";

export default function Hero({ setIsCalcOpen }) {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[95rem] mx-auto min-h-[50vh] px-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12 z-10 flex flex-col items-center w-full max-w-4xl text-center"
      >
        <div className="w-24 h-1 bg-gray-300 rounded-full mb-8" style={{ boxShadow: "var(--shadow-soft-pressed)" }} />

        <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6 leading-tight">
          Where will your <br className="lg:hidden"/> journey take you?
        </h2>
        
        <p className="text-base lg:text-lg text-gray-500 max-w-md lg:max-w-2xl mx-auto font-medium mb-12">
          Premium travel experiences, temple tours, and corporate fleet services across India since 2001.
        </p>

        <div className="h-20 flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={quoteIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-lg lg:text-xl italic font-serif text-gray-700"
            >
              "{quotes[quoteIndex]}"
            </motion.p>
          </AnimatePresence>
        </div>
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
  );
}
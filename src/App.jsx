// src/App.jsx
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Components
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import BackgroundIcons from "./components/BackgroundIcons";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HomeGrids from "./components/HomeGrids";
import FareCalculatorModal from "./components/FareCalculatorModal";

function App() {
  // Global State
  const [currentView, setCurrentView] = useState("website");
  const [isCalcOpen, setIsCalcOpen] = useState(false);
  const [vehicle, setVehicle] = useState("small");
  const [distance, setDistance] = useState(350);

  // Admin View Rendering
  if (currentView === "admin") {
    return (
      <AnimatePresence mode="wait">
        <Dashboard onExit={() => setCurrentView("website")} />
      </AnimatePresence>
    );
  }

  // Main Website Rendering
  return (
    <div className="min-h-screen flex flex-col items-center pt-48 pb-6 overflow-x-hidden relative">
      <Navbar />
      <BackgroundIcons />

      <Hero setIsCalcOpen={setIsCalcOpen} />

      <HomeGrids />

      <Footer onAdminClick={() => setCurrentView("admin")} />

      <FareCalculatorModal
        isCalcOpen={isCalcOpen}
        setIsCalcOpen={setIsCalcOpen}
        vehicle={vehicle}
        setVehicle={setVehicle}
        distance={distance}
        setDistance={setDistance}
      />
    </div>
  );
}

export default App;
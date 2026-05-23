import { motion } from "framer-motion";

export default function Footer({ onAdminClick }) {
  return (
    <footer className="w-full max-w-[95rem] mx-auto px-6 lg:px-12 mt-24 mb-12 relative z-20">
      
      {/* Premium Neumorphic Container */}
      <div 
        className="bg-pale-bg rounded-[40px] border-2 border-white p-8 lg:p-16 flex flex-col" 
        style={{ boxShadow: "var(--shadow-soft-pop)" }}
      >
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-start">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/50 backdrop-blur-md p-4 rounded-3xl mb-6 border border-white" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
              <img src="/logo.png" alt="Shanthibhaskar Logo" className="h-16 w-auto object-contain drop-shadow-md" />
            </motion.div>
            <h3 className="text-2xl font-black mb-2 text-gray-900">ShanthiBhaskar</h3>
            <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-xs">
              Premium travel experiences, temple tours, and corporate fleet services across India since 2001. Your journey, our responsibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-6 text-gray-900">Explore</h4>
            <ul className="space-y-4 font-bold text-gray-500 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Our Premium Fleet</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Trending Destinations</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Devotional Tours</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Corporate Services</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Meet the Drivers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-black mb-6 text-gray-900">Contact Us</h4>
            <ul className="space-y-5 font-bold text-gray-500 text-sm">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-gray-100 shadow-sm text-lg">📍</div>
                <span className="mt-1">123 Business Highway<br/>Transport Hub, City 500001</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-gray-100 shadow-sm text-lg">📞</div>
                <span className="text-gray-900 font-black text-base">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-gray-100 shadow-sm text-lg">✉️</div>
                <span>bookings@shanthibhaskar.com</span>
              </li>
            </ul>
          </div>

          {/* Business Dev / Socials */}
          <div>
            <h4 className="text-lg font-black mb-6 text-gray-900">Connect With Us</h4>
            <div className="flex flex-col gap-3">
              
              {/* WhatsApp */}
              <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#" className="bg-pale-bg border-2 border-white text-gray-700 font-bold py-3.5 px-6 rounded-2xl flex items-center gap-3 text-sm transition-colors hover:text-green-500 group" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-green-500 transition-colors">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Join WhatsApp Group
              </motion.a>

              {/* Instagram */}
              <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#" className="bg-pale-bg border-2 border-white text-gray-700 font-bold py-3.5 px-6 rounded-2xl flex items-center gap-3 text-sm transition-colors hover:text-pink-500 group" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-pink-500 transition-colors">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram Page
              </motion.a>

              {/* YouTube */}
              <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#" className="bg-pale-bg border-2 border-white text-gray-700 font-bold py-3.5 px-6 rounded-2xl flex items-center gap-3 text-sm transition-colors hover:text-red-500 group" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-red-500 transition-colors">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
                YouTube Channel
              </motion.a>

              {/* Facebook */}
              <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#" className="bg-pale-bg border-2 border-white text-gray-700 font-bold py-3.5 px-6 rounded-2xl flex items-center gap-3 text-sm transition-colors hover:text-blue-600 group" style={{ boxShadow: "var(--shadow-soft-pop)" }}>
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-blue-600 transition-colors">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Facebook Page
              </motion.a>
            </div>
          </div>
        </div>

        {/* --- CUSTOM BOTTOM BAR --- */}
        <div className="border-t-2 border-white/80 pt-8 flex flex-col xl:flex-row justify-between items-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
          
          {/* LEFT: Copyrights */}
          <div className="flex items-center text-center xl:text-left gap-2">
            <span>© 2026 Shanthibhaskar Travells.</span>
            <span className="hidden md:inline">All Rights Reserved.</span>
          </div>

          {/* CENTER: Developer Credit */}
          <div 
            className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-white text-gray-500 flex items-center gap-2"
            style={{ boxShadow: "var(--shadow-soft-pop)" }}
          >
            Designed & Developed by <span className="text-blue-600 font-black tracking-normal text-sm ml-1">Mylavaram Naga Sai</span>
          </div>

          {/* RIGHT: Legal & Admin */}
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Legal</a>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            {/* The secret admin button */}
            <button 
              onClick={onAdminClick}
              className="text-gray-300 hover:text-gray-900 transition-colors outline-none"
            >
              Admin Portal
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
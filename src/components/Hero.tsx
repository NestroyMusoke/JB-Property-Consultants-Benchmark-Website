import { motion } from "motion/react";
import { MapPin, Check, Home, Star, Globe, ChevronDown, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-site-black">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradients */}
        <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-brand-gold/10 blur-[120px] rounded-full" />
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-brand-green/20 blur-[100px] rounded-full" />
        
        {/* Blueprint Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#C9922A 1px, transparent 1px), linear-gradient(90deg, #C9922A 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Diagonal Line */}
        <div className="absolute top-0 right-[10%] w-[1px] h-full bg-brand-gold/25 transform rotate-[15deg] origin-top" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col items-start">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/5 mb-8"
          >
            <MapPin className="w-3 h-3 text-brand-gold" />
            <span className="font-outfit text-[10px] font-semibold text-brand-gold tracking-[0.15em] uppercase">
              Kampala, Uganda — Est. in Excellence
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="flex flex-col mb-8">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.8 }}
              className="font-playfair font-bold italic text-5xl md:text-7xl lg:text-8xl text-warm-ivory leading-[1.05]"
            >
              We Don't Just
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.0 }}
              className="font-playfair font-bold italic text-5xl md:text-7xl lg:text-8xl text-warm-ivory leading-[1.05]"
            >
              Find Properties.
            </motion.span>
            <div className="flex flex-col mt-2">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.2 }}
                className="font-playfair font-bold italic text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-brand-gold to-bright-gold bg-clip-text text-transparent leading-[1.05]"
              >
                We Deliver
              </motion.span>
              <div className="relative inline-block">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 3.4 }}
                  className="font-playfair font-bold italic text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-brand-gold to-bright-gold bg-clip-text text-transparent leading-[1.05]"
                >
                  Certainty.
                </motion.span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 4.5, ease: "easeInOut" }}
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-brand-gold origin-left"
                />
              </div>
            </div>
          </h1>

          {/* Subcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.6 }}
            className="font-outfit text-muted-ivory text-lg md:text-xl leading-relaxed max-w-[520px] mb-10"
          >
            Uganda's most trusted property consultancy — connecting families, investors, and diaspora clients with verified land, premium homes, and seamless transactions across every corner of the country.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.8 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-brand-gold to-bright-gold text-site-black font-outfit font-semibold rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <span className="relative z-10">Explore Our Services</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="absolute -inset-4 bg-bright-gold/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
            <button className="flex items-center gap-2 px-8 py-4 border border-brand-gold text-brand-gold font-outfit font-semibold rounded-sm hover:bg-brand-gold/10 transition-all duration-300">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.0 }}
            className="flex flex-wrap gap-6"
          >
            {[
              "Licensed & Registered",
              "Transparent Fees",
              "100% Legal"
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-gold/60" />
                <span className="font-outfit text-xs text-brand-gold/60 tracking-wide uppercase">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Illustration */}
        <div className="hidden lg:block relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -12, 0]
            }}
            transition={{ 
              opacity: { duration: 1, delay: 4.2 },
              scale: { duration: 1, delay: 4.2 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative z-10"
          >
            {/* Blueprint House SVG */}
            <svg viewBox="0 0 500 400" className="w-full h-auto drop-shadow-[0_0_30px_rgba(245,240,232,0.1)]">
              {/* House Outline */}
              <path d="M100 350 V200 L250 100 L400 200 V350 H100" stroke="#F5F0E8" strokeWidth="1.5" fill="none" />
              <path d="M250 100 V350" stroke="#F5F0E8" strokeWidth="0.5" strokeDasharray="4 4" />
              {/* Windows */}
              <rect x="140" y="230" width="60" height="60" stroke="#F5F0E8" strokeWidth="1" fill="none" />
              <rect x="300" y="230" width="60" height="60" stroke="#F5F0E8" strokeWidth="1" fill="none" />
              {/* Door */}
              <rect x="220" y="280" width="60" height="70" stroke="#F5F0E8" strokeWidth="1" fill="none" />
              {/* Trees */}
              <path d="M50 350 L80 280 L110 350 Z" stroke="#1B4332" strokeWidth="1" fill="none" />
              <path d="M390 350 L420 280 L450 350 Z" stroke="#1B4332" strokeWidth="1" fill="none" />
            </svg>

            {/* Floating Stat Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4.5 }}
              className="absolute top-[10%] -right-8 glass-card p-4 rounded-sm border-l-[3px] border-l-brand-gold shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <Home className="w-5 h-5 text-brand-gold" />
                <div>
                  <p className="text-sm font-bold text-warm-ivory">500+ Properties</p>
                  <p className="text-[10px] text-muted-ivory uppercase tracking-wider">Handled</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4.7 }}
              className="absolute top-[40%] -left-12 glass-card p-4 rounded-sm border-l-[3px] border-l-brand-gold shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-brand-gold" />
                <div>
                  <p className="text-sm font-bold text-warm-ivory">98% Satisfaction</p>
                  <p className="text-[10px] text-muted-ivory uppercase tracking-wider">Client Rated</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.9 }}
              className="absolute bottom-[10%] right-12 glass-card p-4 rounded-sm border-l-[3px] border-l-brand-gold shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-brand-gold" />
                <div>
                  <p className="text-sm font-bold text-warm-ivory">All Uganda</p>
                  <p className="text-[10px] text-muted-ivory uppercase tracking-wider">National Coverage</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-warm-ivory/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

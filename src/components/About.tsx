import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-deep-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Side - Illustration */}
        <div className="relative order-2 lg:order-1">
          <motion.div style={{ y }} className="relative z-10">
            {/* Cityscape SVG */}
            <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-[0_0_20px_rgba(201,146,42,0.15)]">
              {/* Sun/Moon */}
              <circle cx="300" cy="80" r="50" fill="#C9922A" fillOpacity="0.1" />
              <circle cx="300" cy="80" r="40" fill="#C9922A" fillOpacity="0.05" />
              
              {/* Buildings */}
              <rect x="50" y="150" width="80" height="150" stroke="#F5F0E8" strokeWidth="1" fill="none" strokeOpacity="0.4" />
              <rect x="150" y="100" width="100" height="200" stroke="#F5F0E8" strokeWidth="1" fill="none" strokeOpacity="0.4" />
              <rect x="270" y="180" width="60" height="120" stroke="#F5F0E8" strokeWidth="1" fill="none" strokeOpacity="0.4" />
              
              {/* Trees */}
              <circle cx="80" cy="280" r="20" fill="#1B4332" fillOpacity="0.2" />
              <circle cx="320" cy="280" r="25" fill="#1B4332" fillOpacity="0.2" />
            </svg>
          </motion.div>
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />
        </div>

        {/* Right Side - Copy */}
        <div className="order-1 lg:order-2">
          <span className="font-outfit text-[10px] font-bold text-brand-gold tracking-[0.3em] uppercase mb-4 block">
            06 / ABOUT US
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold italic text-warm-ivory mb-8 leading-tight">
            Who We Are
          </h2>
          
          <p className="font-playfair font-bold italic text-2xl text-warm-ivory mb-8">
            "More than brokers. We are your partners."
          </p>

          <div className="font-outfit text-muted-ivory text-lg leading-relaxed space-y-6 mb-10">
            <p>
              JB Property Consultants Ltd was founded on a simple conviction: that every Ugandan — whether purchasing their first plot of land, finding a family home, or growing a property portfolio — deserves expert, honest, and deeply personal service.
            </p>
            <p>
              We are not a marketplace. We are a consultancy. That distinction matters. We take the time to understand your goals, your concerns, and your timeline — and then we walk alongside you through every stage of the transaction, long after most agencies would have moved on.
            </p>
            <p className="text-warm-ivory font-medium">
              Rooted in Uganda. Committed to excellence. Measured only by your complete satisfaction.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 px-5 py-3 border border-brand-gold/20 bg-brand-gold/5 rounded-sm">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span className="font-outfit font-semibold text-xs text-brand-gold uppercase tracking-wider">
                Registered Business — Uganda
              </span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 border border-brand-gold/20 bg-brand-gold/5 rounded-sm">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span className="font-outfit font-semibold text-xs text-brand-gold uppercase tracking-wider">
                Licensed Property Consultancy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

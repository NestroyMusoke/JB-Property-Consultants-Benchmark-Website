import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[10000] bg-site-black flex flex-col items-center justify-center"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Icon Animation */}
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Roof Gable */}
              <motion.path
                d="M10 60 L50 20 L90 60"
                stroke="#C9922A"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {/* Lightning Bolt */}
              <motion.path
                d="M50 25 L45 40 L55 40 L50 55"
                stroke="#C9922A"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              />
              {/* Horizontal Lines */}
              <motion.path
                d="M30 70 H70"
                stroke="#C9922A"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.path
                d="M35 78 H65"
                stroke="#C9922A"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.0 }}
              />
              <motion.path
                d="M40 86 H60"
                stroke="#C9922A"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </svg>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-6 font-cormorant italic text-brand-gold text-xl tracking-wide"
            >
              Your Dream Home, Our Priority
            </motion.p>

            {/* Loading Bar */}
            <div className="mt-8 w-[180px] h-[2px] bg-brand-gold/10 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-full h-full bg-brand-gold"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    title: "Initial Consultation",
    description: "You tell us your needs, preferred location, budget, and timeline. We listen carefully. No pressure, no scripts, no predetermined answers."
  },
  {
    title: "Search & Shortlist",
    description: "We work through our verified listings and trusted partner network to bring you curated options that genuinely match your brief. No irrelevant listings. No time-wasting."
  },
  {
    title: "Due Diligence",
    description: "We conduct a thorough title search, verify ownership chains, check for caveats, and confirm the property is legally clean — before you commit a single shilling."
  },
  {
    title: "Completion & Handover",
    description: "We handle negotiations, facilitate legal paperwork, coordinate between all parties, and walk you through to final handover. Then we follow up — because our relationship doesn't end at the signature."
  }
];

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-24 bg-site-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <span className="font-outfit text-[10px] font-bold text-brand-gold tracking-[0.3em] uppercase mb-4 block">
            03 / THE PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold italic text-warm-ivory mb-6">
            From First Call to Final Keys
          </h2>
          <p className="font-outfit text-muted-ivory text-lg max-w-2xl mx-auto leading-relaxed">
            A process designed around your comfort, not our convenience.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] -translate-y-1/2 overflow-hidden pointer-events-none">
            <motion.div
              style={{ scaleX: pathLength }}
              className="w-full h-full bg-brand-gold/30 origin-left border-t border-dashed border-brand-gold"
            />
          </div>

          {/* Mobile Connecting Line */}
          <div className="lg:hidden absolute top-0 left-4 w-[1px] h-full pointer-events-none">
            <motion.div
              style={{ scaleY: pathLength }}
              className="w-full h-full bg-brand-gold/30 origin-top border-l border-dashed border-brand-gold"
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative group"
              >
                {/* Watermark Number */}
                <div className="absolute -top-10 -left-6 pointer-events-none select-none opacity-[0.12] z-0">
                  <span className="font-cormorant text-8xl text-brand-gold font-bold">
                    {i + 1}
                  </span>
                </div>

                <div className="relative z-10 pl-10 lg:pl-0">
                  {/* Top Accent Bar */}
                  <div className="w-10 h-[3px] bg-brand-gold mb-6" />
                  
                  <h3 className="text-xl font-playfair font-semibold text-warm-ivory mb-4 group-hover:text-brand-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-outfit text-muted-ivory text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

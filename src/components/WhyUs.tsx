import { motion, useScroll, useTransform, useSpring, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Check } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const startTime = performance.now();

      const updateCount = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Decelerating curve
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const currentCount = Math.floor(easeOutQuad * end);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function WhyUs() {
  const stats = [
    { value: 10, suffix: "+", label: "Years of Combined Experience" },
    { value: 500, suffix: "+", label: "Properties Transacted" },
    { value: 3, suffix: "", label: "Regions of Active Operations" },
    { value: 100, suffix: "%", label: "Legal & Fully Transparent" }
  ];

  const proofs = [
    "Registered and licensed property consultancy in Uganda",
    "Deep local knowledge across all major districts",
    "In-house network of lawyers, surveyors, and Lands Ministry liaisons",
    "Transparent fees — no hidden charges, ever",
    "Post-transaction support included as standard",
    "Diaspora-friendly — remote transactions handled completely end-to-end"
  ];

  return (
    <section className="py-24 bg-deep-forest relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Stats */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-16">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col border-l border-brand-gold/20 pl-6">
              <span className="font-cormorant font-bold text-brand-gold text-6xl md:text-8xl leading-none mb-4">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="font-outfit font-medium text-warm-ivory text-sm tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div>
          <span className="font-outfit text-[10px] font-bold text-brand-gold tracking-[0.3em] uppercase mb-4 block">
            02 / WHY JB
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold italic text-warm-ivory mb-8 leading-tight">
            Built on Trust. Powered by Results.
          </h2>
          <p className="font-outfit text-muted-ivory text-lg leading-relaxed mb-10">
            In Uganda's property market, the difference between a great deal and a devastating loss often comes down to who is in your corner. JB Property Consultants was founded on the belief that every client — whether you're buying your first plot in Mukono, building your family home in Naalya, or managing a portfolio from the diaspora — deserves the same level of care and professionalism we would give our own family.
          </p>

          <div className="grid gap-4">
            {proofs.map((proof, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1">
                  <Check className="w-4 h-4 text-brand-gold" />
                </div>
                <span className="font-outfit text-warm-ivory/90 text-sm leading-snug">
                  {proof}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

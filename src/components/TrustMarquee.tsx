import { motion } from "motion/react";

export default function TrustMarquee() {
  const row1 = [
    "✦ Residential Sales",
    "✦ Land Brokerage",
    "✦ Title Deed Processing",
    "✦ Property Valuation",
    "✦ Construction Supervision",
    "✦ Investment Advisory",
    "✦ Diaspora Services",
    "✦ Commercial Properties",
  ];

  const row2 = [
    "— Kampala",
    "— Entebbe",
    "— Jinja",
    "— Mbarara",
    "— Gulu",
    "— Wakiso",
    "— Mukono",
    "— Fort Portal",
    "— Mbale",
    "— All Uganda",
  ];

  return (
    <section className="bg-deep-forest border-y border-brand-gold/20 py-6 overflow-hidden">
      <div className="flex flex-col gap-4">
        {/* Row 1 */}
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center"
          >
            {[...row1, ...row1].map((item, i) => (
              <span
                key={i}
                className="font-outfit font-semibold text-xs md:text-sm text-brand-gold uppercase tracking-[0.2em]"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex whitespace-nowrap">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center"
          >
            {[...row2, ...row2].map((item, i) => (
              <span
                key={i}
                className="font-outfit font-semibold text-xs md:text-sm text-brand-gold uppercase tracking-[0.2em]"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

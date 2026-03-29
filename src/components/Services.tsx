import { motion } from "motion/react";
import { Home, Map, BarChart3, FileText, HardHat, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Property Sales",
    description: "We match buyers with their ideal homes and guide sellers to maximum value — with honest, patient support from first viewing to final handover."
  },
  {
    icon: Map,
    title: "Land Brokerage",
    description: "Verified plots across Kampala, Wakiso, Entebbe, Mukono, and every major district. We confirm ownership, boundaries, and title before you spend a shilling."
  },
  {
    icon: BarChart3,
    title: "Property Valuation",
    description: "Certified market valuations for mortgage, insurance, resale, taxation, or legal proceedings. Accurate, official, and fully defensible."
  },
  {
    icon: FileText,
    title: "Title Deed Processing",
    description: "We navigate the Lands Ministry process completely on your behalf — fast turnarounds, zero surprises, everything above board and fully documented."
  },
  {
    icon: HardHat,
    title: "Construction Supervision",
    description: "On-site project management ensuring your build meets quality standards, respects your budget, and runs on schedule — from foundation to finishing."
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Data-driven guidance for serious real estate investors. We identify high-yield assets, flag risks early, and help your capital work harder in Uganda's growing market."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-site-black relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-20 left-10 pointer-events-none select-none opacity-[0.05]">
        <span className="font-cormorant text-[15rem] text-brand-gold leading-none">01</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16">
          <span className="font-outfit text-[10px] font-bold text-brand-gold tracking-[0.3em] uppercase mb-4 block">
            01 / WHAT WE DO
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold italic text-warm-ivory mb-6">
            Complete Property Solutions, Under One Roof
          </h2>
          <p className="font-outfit text-muted-ivory text-lg max-w-2xl leading-relaxed">
            From the first site visit to the final signature — we handle every step so you can focus on what matters: moving in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-card-bg border border-brand-gold/5 hover:border-brand-gold/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Icon Container */}
              <div className="relative w-14 h-14 mb-8">
                <div className="absolute inset-0 bg-brand-gold/10 rounded-sm" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-brand-gold" />
                </div>
              </div>

              {/* Accent Line */}
              <div className="w-10 h-[2px] bg-brand-gold mb-6" />

              <h3 className="text-xl font-playfair font-semibold text-warm-ivory mb-4 group-hover:text-brand-gold transition-colors">
                {service.title}
              </h3>
              <p className="font-outfit text-muted-ivory text-sm leading-relaxed mb-8">
                {service.description}
              </p>

              <button className="flex items-center gap-2 font-outfit text-xs font-semibold text-brand-gold uppercase tracking-widest group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>

              {/* Hover Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

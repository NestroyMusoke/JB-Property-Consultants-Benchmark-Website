import { motion } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";

const properties = [
  {
    tag: "FOR SALE",
    type: "RESIDENTIAL",
    title: "Modern Family Home",
    location: "Ntinda, Kampala",
    specs: "3 Bed · 2 Bath · 150 sqm"
  },
  {
    tag: "PRIME LAND",
    type: "LAND",
    title: "Lake View Plot",
    location: "Entebbe Road",
    specs: "0.5 Acres · Titled · Ready to Build"
  },
  {
    tag: "FEATURED",
    type: "COMMERCIAL",
    title: "Premium Office Space",
    location: "Kololo, Kampala",
    specs: "500 sqm · Parking · High Security"
  }
];

export default function FeaturedProperties() {
  return (
    <section id="properties" className="py-24 bg-site-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="font-outfit text-[10px] font-bold text-brand-gold tracking-[0.3em] uppercase mb-4 block">
            04 / PROPERTIES
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold italic text-warm-ivory mb-6">
            A Taste of What We Handle
          </h2>
          <p className="font-outfit text-muted-ivory text-lg max-w-2xl leading-relaxed">
            Every listing is personally vetted by our team before it reaches you.
          </p>
        </div>

        {/* Property Grid / Carousel */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-8 pb-8 lg:pb-0 snap-x snap-mandatory scrollbar-hide">
          {properties.map((property, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group min-w-[300px] md:min-w-[350px] lg:min-w-0 snap-center bg-card-bg border border-brand-gold/5 hover:border-brand-gold/30 transition-all duration-500 rounded-sm overflow-hidden"
            >
              {/* Blueprint Image Area */}
              <div className="h-[220px] bg-gradient-to-b from-deep-navy to-site-black relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `linear-gradient(#C9922A 1px, transparent 1px), linear-gradient(90deg, #C9922A 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                </div>
                
                {/* Ghost House SVG */}
                <svg viewBox="0 0 200 150" className="w-40 h-auto drop-shadow-[0_0_15px_rgba(245,240,232,0.2)]">
                  <path d="M40 120 V60 L100 20 L160 60 V120 H40" stroke="#F5F0E8" strokeWidth="1" fill="none" strokeOpacity="0.5" />
                  <rect x="60" y="75" width="25" height="25" stroke="#F5F0E8" strokeWidth="0.5" fill="none" strokeOpacity="0.3" />
                  <rect x="115" y="75" width="25" height="25" stroke="#F5F0E8" strokeWidth="0.5" fill="none" strokeOpacity="0.3" />
                  <rect x="90" y="95" width="20" height="25" stroke="#F5F0E8" strokeWidth="0.5" fill="none" strokeOpacity="0.3" />
                </svg>

                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-brand-gold text-site-black font-outfit font-bold text-[10px] tracking-widest rounded-full">
                  {property.tag}
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-gold/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="font-outfit text-[10px] font-bold text-brand-gold tracking-[0.2em] uppercase mb-2 block">
                  {property.type}
                </span>
                <h3 className="text-xl font-playfair font-semibold text-warm-ivory mb-2 group-hover:text-brand-gold transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-ivory mb-4">
                  <MapPin className="w-3 h-3 text-brand-gold" />
                  <span className="font-outfit text-xs">{property.location}</span>
                </div>
                <p className="font-outfit text-dimmed-text text-[10px] tracking-widest uppercase mb-6">
                  {property.specs}
                </p>

                <button className="flex items-center gap-2 font-outfit text-xs font-semibold text-brand-gold uppercase tracking-widest group/btn">
                  Enquire About This
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* Hover Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-outfit italic text-muted-ivory text-sm">
            "We handle a wide range of properties across Uganda. Contact us to discuss your specific needs — we almost certainly have what you're looking for."
          </p>
        </div>
      </div>
    </section>
  );
}

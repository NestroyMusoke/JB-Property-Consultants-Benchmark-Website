import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-deep-forest relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16">
          <span className="font-outfit text-[10px] font-bold text-brand-gold tracking-[0.3em] uppercase mb-4 block">
            07 / GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold italic text-warm-ivory mb-6">
            Let's Make It Happen
          </h2>
          <p className="font-outfit text-muted-ivory text-lg max-w-2xl leading-relaxed">
            Your next property is one conversation away. We respond within 24 hours — usually much faster.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Details */}
          <div className="flex flex-col">
            <div className="grid gap-8 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-gold" />
                </div>
                <span className="font-outfit text-muted-ivory">+256 752 955 662</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-brand-gold" />
                </div>
                <span className="font-outfit text-muted-ivory">jbpropertyconsultants@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                </div>
                <span className="font-outfit text-muted-ivory">P.O. Box 68334, Kampala (U)</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-gold" />
                </div>
                <span className="font-outfit text-muted-ivory">Mon – Sat · 8:00 AM – 6:00 PM EAT</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a 
                href="https://wa.me/256752955662"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white font-outfit font-bold rounded-sm hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a 
                href="mailto:jbpropertyconsultants@gmail.com"
                className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-brand-gold to-bright-gold text-site-black font-outfit font-bold rounded-sm hover:opacity-90 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                Send Us an Email
              </a>
              <p className="font-outfit italic text-muted-ivory text-xs text-center mt-2">
                Prefer a call? We're available Monday to Saturday, 8AM–6PM East Africa Time.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-site-black/40 backdrop-blur-sm border border-brand-gold/10 p-8 md:p-10 rounded-sm"
          >
            <form className="grid gap-8">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-muted-ivory/30 py-3 font-outfit text-warm-ivory placeholder:text-dimmed-text focus:outline-none focus:border-brand-gold transition-colors"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-focus-within:w-full" />
              </div>

              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Phone Number (+256...)"
                  className="w-full bg-transparent border-b border-muted-ivory/30 py-3 font-outfit text-warm-ivory placeholder:text-dimmed-text focus:outline-none focus:border-brand-gold transition-colors"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-focus-within:w-full" />
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-muted-ivory/30 py-3 font-outfit text-warm-ivory placeholder:text-dimmed-text focus:outline-none focus:border-brand-gold transition-colors"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-focus-within:w-full" />
              </div>

              <div className="relative group">
                <select 
                  className="w-full bg-transparent border-b border-muted-ivory/30 py-3 font-outfit text-warm-ivory focus:outline-none focus:border-brand-gold transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-site-black">I'm Interested In...</option>
                  <option value="land" className="bg-site-black">Land for Sale</option>
                  <option value="residential" className="bg-site-black">Residential Home</option>
                  <option value="commercial" className="bg-site-black">Commercial Property</option>
                  <option value="valuation" className="bg-site-black">Property Valuation</option>
                  <option value="title" className="bg-site-black">Title Deed Assistance</option>
                  <option value="investment" className="bg-site-black">Investment Advisory</option>
                  <option value="other" className="bg-site-black">Other</option>
                </select>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-focus-within:w-full" />
              </div>

              <div className="relative group">
                <textarea 
                  placeholder="Tell us what you're looking for, your budget range, and preferred location..."
                  rows={4}
                  className="w-full bg-transparent border-b border-muted-ivory/30 py-3 font-outfit text-warm-ivory placeholder:text-dimmed-text focus:outline-none focus:border-brand-gold transition-colors resize-none"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-focus-within:w-full" />
              </div>

              <button className="group relative w-full py-5 bg-gradient-to-r from-brand-gold to-bright-gold text-site-black font-outfit font-bold text-lg rounded-sm overflow-hidden flex items-center justify-center gap-3 transition-all hover:-translate-y-1">
                <span className="relative z-10">Send My Enquiry</span>
                <Send className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <p className="text-[10px] text-dimmed-text text-center uppercase tracking-widest">
                Your information is kept strictly confidential and never shared with third parties.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

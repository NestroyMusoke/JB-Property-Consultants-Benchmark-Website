import Logo from "./Logo";
import { MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#04070A] pt-20 pb-10 border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="font-cormorant italic text-brand-gold text-lg">
              Your Dream Home, Our Priority.
            </p>
            <p className="font-outfit text-dimmed-text text-sm leading-relaxed">
              Uganda's trusted property consultancy — committed to honest service and lasting results.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-site-black transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Navigate */}
          <div>
            <h4 className="font-outfit font-bold text-warm-ivory text-[10px] tracking-[0.3em] uppercase mb-8">
              NAVIGATE
            </h4>
            <ul className="flex flex-col gap-4">
              {["Home", "Services", "About", "Properties", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="font-outfit text-muted-ivory text-sm hover:text-brand-gold hover:translate-x-1 transition-all inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="font-outfit font-bold text-warm-ivory text-[10px] tracking-[0.3em] uppercase mb-8">
              OUR SERVICES
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                "Residential Sales",
                "Land Brokerage",
                "Property Valuation",
                "Title Deed Processing",
                "Construction Supervision",
                "Investment Advisory"
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="font-outfit text-muted-ivory text-sm hover:text-brand-gold hover:translate-x-1 transition-all inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-outfit font-bold text-warm-ivory text-[10px] tracking-[0.3em] uppercase mb-8">
              CONTACT US
            </h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-gold mt-0.5" />
                <span className="font-outfit text-muted-ivory text-sm">+256 752 955 662</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-gold mt-0.5" />
                <span className="font-outfit text-muted-ivory text-sm">jbpropertyconsultants@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold mt-0.5" />
                <span className="font-outfit text-muted-ivory text-sm">P.O. Box 68334, Kampala (U)</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-gold mt-0.5" />
                <span className="font-outfit text-muted-ivory text-sm">Mon–Sat: 8AM – 6PM EAT</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-gold/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-outfit text-dimmed-text text-[10px] tracking-wider">
            © 2025 JB Property Consultants Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-outfit text-dimmed-text text-[10px] tracking-wider">
              Kampala, Uganda 🇺🇬 · Registered Business
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

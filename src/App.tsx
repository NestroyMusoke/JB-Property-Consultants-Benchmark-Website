import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustMarquee from "./components/TrustMarquee";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import FeaturedProperties from "./components/FeaturedProperties";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="relative min-h-screen bg-site-black selection:bg-brand-gold/30 selection:text-bright-gold overflow-x-hidden">
      <CustomCursor />
      <Preloader />
      
      <Navbar />
      
      <div className="flex flex-col">
        <Hero />
        <TrustMarquee />
        <Services />
        <WhyUs />
        <Process />
        <FeaturedProperties />
        <Testimonials />
        <About />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}

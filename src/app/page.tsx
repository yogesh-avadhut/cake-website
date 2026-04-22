import AboutSection from "@/components/AboutSection";
import CakeCatalog from "@/components/CakeCatalog";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/ProductsSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CakeCatalog />
        <ProductsSection />
        <AboutSection />
        <MapSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

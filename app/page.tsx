import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProductSection } from "@/components/product-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

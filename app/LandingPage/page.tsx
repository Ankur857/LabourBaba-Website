import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import BottomCTA from "@/components/BottomCTA";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#F8FAFC] pb-32">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Features */}
      <Features />

      {/* How It Works */}
      <HowItWorks />

      {/* Footer */}
      <Footer />

      {/* Sticky CTA */}
      <BottomCTA />
    </main>
  );
}
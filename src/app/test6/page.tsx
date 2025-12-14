"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { AuroraBackground, HeroParallax } from "@/components/animations";

// Test 6: Add Hero section with backgrounds
export default function Test6Page() {
  return (
    <main className="min-h-screen bg-brand-black text-white">
      <Navigation />

      <HeroParallax>
        <section className="min-h-[75vh] flex flex-col justify-center px-6 pt-32 pb-16 relative">
          <AuroraBackground />
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-6">Test 6: Hero</h1>
            <p className="text-gray-400 mb-4">
              If you see this with aurora background, hero works.
            </p>
            <a href="/" className="text-brand-blue underline">
              Try Homepage
            </a>
          </div>
        </section>
      </HeroParallax>

      <Footer />
    </main>
  );
}

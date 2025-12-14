import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Test 5: Add Footer component
export default function Test5Page() {
  return (
    <main className="min-h-screen bg-brand-black text-white">
      <Navigation />
      <div className="pt-32 p-10">
        <h1 className="text-4xl font-bold mb-6">Test 5: Footer</h1>
        <p className="text-gray-400 mb-4">
          If you see this with nav + footer, both work.
        </p>
        <a href="/test6" className="text-brand-blue underline">
          Next: Test 6 (Homepage Hero)
        </a>
      </div>
      <Footer />
    </main>
  );
}

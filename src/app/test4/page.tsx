import Navigation from "@/components/Navigation";

// Test 4: Add Navigation component
export default function Test4Page() {
  return (
    <main className="min-h-screen bg-brand-black text-white">
      <Navigation />
      <div className="pt-32 p-10">
        <h1 className="text-4xl font-bold mb-6">Test 4: Navigation</h1>
        <p className="text-gray-400 mb-4">
          If you see this with the nav bar, Navigation works.
        </p>
        <a href="/test5" className="text-brand-blue underline">
          Next: Test 5 (Footer)
        </a>
      </div>
    </main>
  );
}

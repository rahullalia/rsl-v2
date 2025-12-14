// Test 2: Add Tailwind CSS + basic layout (no client components)
export default function Test2Page() {
  return (
    <main className="min-h-screen bg-brand-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Test 2: Tailwind CSS</h1>
      <p className="text-gray-400 mb-4">
        If you see this styled correctly, Tailwind works on mobile.
      </p>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
        <h2 className="text-2xl text-brand-blue mb-2">Glass Card Test</h2>
        <p className="text-gray-400">This tests backdrop blur and borders.</p>
      </div>
      <a href="/test3" className="text-brand-blue underline">
        Next: Test 3 (Navigation)
      </a>
    </main>
  );
}

"use client";

import { useState } from "react";

// Test 3: Add useState (client component)
export default function Test3Page() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-brand-black text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Test 3: Client Component</h1>
      <p className="text-gray-400 mb-4">
        If you see this, useState works on mobile.
      </p>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
        <p className="text-2xl mb-4">Count: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-brand-blue text-white px-6 py-3 rounded-full"
        >
          Increment
        </button>
      </div>
      <a href="/test4" className="text-brand-blue underline">
        Next: Test 4 (Navigation Component)
      </a>
    </main>
  );
}

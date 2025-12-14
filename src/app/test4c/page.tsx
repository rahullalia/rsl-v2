"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// Test 4c: Add lucide-react icons (NO Image)
export default function Test4cPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-brand-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black border-b border-white/10 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">RSL/A</Link>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {isOpen && (
            <div className="fixed inset-0 bg-brand-black flex flex-col items-center justify-center gap-8 md:hidden">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl">Home</Link>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-32 p-10">
        <h1 className="text-4xl font-bold mb-6">Test 4c: Lucide Icons</h1>
        <p className="text-gray-400 mb-4">Added Menu/X from lucide-react</p>
        <a href="/test4d" className="text-brand-blue underline">Next: Test 4d (add backdrop-blur)</a>
      </div>
    </main>
  );
}

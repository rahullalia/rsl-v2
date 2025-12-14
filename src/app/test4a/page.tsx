"use client";

import { useState } from "react";
import Link from "next/link";

// Test 4a: Navigation WITHOUT Image and WITHOUT lucide icons
export default function Test4aPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-brand-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black border-b border-white/10 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">RSL/A</Link>

          <div className="hidden md:flex gap-6">
            <Link href="/" className="text-gray-400">Home</Link>
            <Link href="/work" className="text-gray-400">Work</Link>
          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {isOpen && (
            <div className="fixed inset-0 bg-brand-black flex flex-col items-center justify-center gap-8 md:hidden">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl">Home</Link>
              <Link href="/work" onClick={() => setIsOpen(false)} className="text-2xl">Work</Link>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-32 p-10">
        <h1 className="text-4xl font-bold mb-6">Test 4a: Simple Nav</h1>
        <p className="text-gray-400 mb-4">No Image, no lucide icons, no backdrop-blur</p>
        <a href="/test4b" className="text-brand-blue underline">Next: Test 4b (add Image)</a>
      </div>
    </main>
  );
}

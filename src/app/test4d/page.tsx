"use client";

import { useState } from "react";
import Link from "next/link";

// Test 4d: Add backdrop-blur (NO Image, NO lucide)
export default function Test4dPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-brand-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/10 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">RSL/A</Link>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {isOpen && (
            <div className="fixed inset-0 bg-brand-black flex flex-col items-center justify-center gap-8 md:hidden">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl">Home</Link>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-32 p-10">
        <h1 className="text-4xl font-bold mb-6">Test 4d: Backdrop Blur</h1>
        <p className="text-gray-400 mb-4">Added bg-brand-black/80 backdrop-blur-md</p>
        <a href="/" className="text-brand-blue underline">Back to Homepage</a>
      </div>
    </main>
  );
}

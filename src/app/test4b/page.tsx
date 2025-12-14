"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Test 4b: Add next/image
export default function Test4bPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-brand-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black border-b border-white/10 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/lockup.png"
              alt="RSL/A"
              width={350}
              height={93}
              className="h-16 w-auto"
              priority
            />
          </Link>

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
        <h1 className="text-4xl font-bold mb-6">Test 4b: With Image</h1>
        <p className="text-gray-400 mb-4">Added next/image for logo</p>
        <a href="/test4c" className="text-brand-blue underline">Next: Test 4c (add lucide)</a>
      </div>
    </main>
  );
}

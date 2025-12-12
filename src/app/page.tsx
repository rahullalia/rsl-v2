"use client";

import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowRight, Cpu, Globe, Rocket, Terminal } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Home() {
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = cursorGlowRef.current;
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    const handleMouseLeave = () => {
      glow.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      glow.style.opacity = "1";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <main className="min-h-screen bg-brand-black text-white selection:bg-brand-blue selection:text-white">
      <div className="gradient-overlay" />
      <div ref={cursorGlowRef} className="cursor-glow" />

      <Navigation />

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 relative overflow-hidden z-10">
        <div className="max-w-[1200px]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-brand-blue font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow"></span>
            </span>
            Accepting New Systems Clients for Q1 2026
          </div>

          <h1 className="hero-heading font-display font-bold mb-10">
            We build<br />
            <span className="text-gradient">intelligent</span><br />
            marketing systems
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-[600px] leading-relaxed font-light mb-12">
            Smart marketing meets AI automation. We build the infrastructure that scales your revenue, automates your fulfillment, and organizes your chaos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-brand-blue hover:text-white transition-all group"
            >
              Build My System
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white text-lg font-medium rounded-full hover:bg-white/10 transition-all"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Animated line */}
        <div className="line-container">
          <div className="line-progress"></div>
        </div>
      </section>

      {/* CORE DISCIPLINES */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">Core Disciplines</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Engineering Growth.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-8 rounded-2xl group hover:border-brand-blue/50 transition-colors">
              <Globe className="w-10 h-10 text-brand-blue mb-6" />
              <h4 className="text-xl font-bold mb-3">Smart Websites</h4>
              <p className="text-gray-400 leading-relaxed">
                High-performance architecture. Built for SEO domination and conversion, not just aesthetics.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl group hover:border-brand-blue/50 transition-colors">
              <Rocket className="w-10 h-10 text-brand-blue mb-6" />
              <h4 className="text-xl font-bold mb-3">Paid Acquisition</h4>
              <p className="text-gray-400 leading-relaxed">
                Meta & Google ecosystems engineered to print ROI. We track every dollar back to revenue.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl group hover:border-brand-blue/50 transition-colors">
              <Cpu className="w-10 h-10 text-brand-blue mb-6" />
              <h4 className="text-xl font-bold mb-3">AI Automation</h4>
              <p className="text-gray-400 leading-relaxed">
                Replicate your best employee. We build AI agents that handle bookings, support, and sales 24/7.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl group hover:border-brand-blue/50 transition-colors">
              <Terminal className="w-10 h-10 text-brand-blue mb-6" />
              <h4 className="text-xl font-bold mb-3">CRM Infrastructure</h4>
              <p className="text-gray-400 leading-relaxed">
                The backbone of your business. Automated pipelines, database reactivation, and lead nurturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <span className="text-3xl font-display font-bold block mb-6">RSL/A</span>
            <p className="text-gray-500 max-w-sm">
              Architecting the future of marketing with intelligence and precision.
            </p>
            <div className="mt-8 text-gray-600 text-sm">
              &copy; 2025 RSL Media Hub, LLC. All rights reserved.
            </div>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h5 className="font-bold text-white">Company</h5>
              <Link href="/about" className="text-gray-400 hover:text-brand-blue">About</Link>
              <Link href="/work" className="text-gray-400 hover:text-brand-blue">Work</Link>
              <Link href="/contact" className="text-gray-400 hover:text-brand-blue">Contact</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="font-bold text-white">Connect</h5>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-brand-blue">LinkedIn</Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-brand-blue">Twitter</Link>
              <Link href="mailto:hello@rsla.io" className="text-gray-400 hover:text-brand-blue">Email</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

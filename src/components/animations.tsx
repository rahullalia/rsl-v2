"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * ANIMATIONS WITH ClientOnly PATTERN
 *
 * All components that use framer-motion wait until after hydration
 * before rendering any animated content. This prevents hydration
 * mismatches that cause crashes on iOS Safari with React 19 + Next.js 15+.
 *
 * Pattern: hasMounted state starts false, becomes true after useEffect.
 * During SSR and initial hydration, render static fallback.
 * After mount, render animated version.
 */

// 1. 3D CARD TILT
export function Card3D({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [hasMounted, setHasMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 30 });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Static fallback during SSR/hydration
  if (!hasMounted) {
    return <div className={`relative ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}

// 2. MAGNETIC BUTTON
export function MagneticButton({
  children,
  className = "",
  href
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const [hasMounted, setHasMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Static fallback during SSR/hydration
  if (!hasMounted) {
    const content = <div className={className}>{children}</div>;
    if (href) {
      return <a href={href}>{content}</a>;
    }
    return content;
  }

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }
  return content;
}

// 3. TEXT SCRAMBLE - Simple hover effect (no motion needed)
export function TextScramble({ text, className = "" }: { text: string; className?: string }) {
  const [hasMounted, setHasMounted] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const scramble = () => {
    if (isScrambling || !hasMounted) return;
    setIsScrambling(true);
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iteration += 1 / 3;
      if (iteration >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, 30);
  };

  return (
    <span className={`cursor-pointer ${className}`} onMouseEnter={scramble}>
      {displayText}
    </span>
  );
}

// 4. NUMBER COUNTER - Intersection Observer based (no framer-motion)
export function NumberCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

// 5. PARALLAX BACKGROUND - Pure CSS, no framer-motion
export function ParallaxBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#0070f3]/10 blur-3xl opacity-30" />
      <div className="absolute top-1/2 -left-32 w-[300px] h-[300px] rounded-full bg-[#00c6ff]/10 blur-3xl opacity-30" />
    </div>
  );
}

// 6. PARALLAX DIVIDER - Pure CSS, no framer-motion
export function ParallaxDivider() {
  return (
    <div className="relative h-32 overflow-hidden">
      <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
      <div className="absolute bottom-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

// 7. HERO PARALLAX - Pure CSS, no framer-motion
export function HeroParallax({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#0070f3]/15 blur-[80px]" />
        <div className="absolute top-1/3 -left-24 w-[350px] h-[350px] rounded-full bg-[#00c6ff]/10 blur-[60px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-[#7928ca]/8 blur-[60px]" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// 8. AURORA BACKGROUND - Pure CSS, no framer-motion
export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(0,112,243,0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(121,40,202,0.08) 0%, transparent 40%),
            radial-gradient(ellipse at 40% 80%, rgba(0,198,255,0.08) 0%, transparent 40%)
          `,
        }}
      />
    </div>
  );
}

// 9. LIQUID TEXT - Pure CSS, no framer-motion
export function LiquidText({ text, className = "" }: { text: string; className?: string }) {
  return <span className={`inline-block ${className}`}>{text}</span>;
}

// 10. GLITCH TEXT - Pure CSS, no framer-motion
export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return <span className={`inline-block ${className}`}>{text}</span>;
}

// 11. INFINITE MARQUEE - With ClientOnly pattern
export function InfiniteMarquee({
  children,
  speed = 20,
  direction = "left"
}: {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right"
}) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Static fallback during SSR/hydration
  if (!hasMounted) {
    return (
      <div className="overflow-hidden whitespace-nowrap">
        <span className="inline-flex items-center">{children}</span>
      </div>
    );
  }

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-flex"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        <span className="inline-flex items-center">{children}</span>
        <span className="inline-flex items-center">{children}</span>
      </motion.div>
    </div>
  );
}

// 12. SPOTLIGHT CARD - Pure CSS, no framer-motion
export function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`relative overflow-hidden ${className}`}>{children}</div>;
}

// Additional exports for compatibility - all pure CSS/HTML

export function ParallaxLayer({
  children,
  className = ""
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  return <div className={`relative ${className}`}>{children}</div>;
}

export function MorphingBlob({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute bg-gradient-to-r from-[#0070f3] to-[#00c6ff] opacity-30 blur-3xl rounded-full ${className}`} />
  );
}

export function FloatingGrid() {
  return null;
}

export function RevealText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function TypewriterText({ text, className = "" }: { text: string; className?: string; speed?: number; delay?: number }) {
  return <span className={className}>{text}</span>;
}

export function ExplodeOnClick({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`relative ${className}`}>{children}</div>;
}

export function PerspectiveSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function NeonButton({
  children,
  className = "",
  href
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const content = (
    <div className={`relative px-8 py-4 rounded-full font-bold cursor-pointer border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors ${className}`}>
      {children}
    </div>
  );
  if (href) {
    return <a href={href}>{content}</a>;
  }
  return content;
}

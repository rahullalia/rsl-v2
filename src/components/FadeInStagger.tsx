'use client';

import { ReactNode, useRef, Children, isValidElement, cloneElement, ReactElement, CSSProperties, useState, useEffect } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface FadeInStaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
  style?: CSSProperties;
}

/**
 * FadeInStagger component with ClientOnly pattern to prevent hydration mismatches.
 * On first render (SSR + hydration), renders a static div.
 * After mount, renders the animated version with staggered children.
 */
export default function FadeInStagger({
  children,
  staggerDelay = 0.1,
  className = '',
  once = true,
  style,
}: FadeInStaggerProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // During SSR and initial hydration, render a static div
  // This prevents hydration mismatch errors
  if (!hasMounted) {
    return <div className={className} style={style}>{children}</div>;
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return (
            <motion.div variants={itemVariants}>
              {cloneElement(child as ReactElement)}
            </motion.div>
          );
        }
        return child;
      })}
    </motion.div>
  );
}

'use client';

import { useState, useEffect, ReactNode } from 'react';

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * ClientOnly wrapper - ensures children only render after hydration is complete.
 * This prevents hydration mismatches with framer-motion on React 19 / Next.js 15+.
 *
 * The fallback (if provided) renders during SSR and initial hydration,
 * then children render after the component mounts on the client.
 */
export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return fallback;
  }

  return <>{children}</>;
}

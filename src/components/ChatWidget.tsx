'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Script from 'next/script';

export default function ChatWidget() {
  const pathname = usePathname();
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check if user has made a cookie choice
    const checkConsent = () => {
      const consent = localStorage.getItem('cookie-consent');
      setHasConsent(!!consent);
    };

    // Check immediately
    checkConsent();

    // Listen for storage changes (cross-tab)
    const handleStorage = () => checkConsent();
    window.addEventListener('storage', handleStorage);

    // Listen for custom event (same-tab consent)
    const handleConsentChange = () => checkConsent();
    window.addEventListener('cookie-consent-changed', handleConsentChange);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('cookie-consent-changed', handleConsentChange);
    };
  }, []);

  const hideChatWidget = pathname === '/rahul' || pathname === '/sid' || pathname === '/insider';

  // Don't render chat widget on business card/insider pages or before cookie consent
  if (hideChatWidget || !hasConsent) {
    return null;
  }

  return (
    <Script
      src="https://beta.leadconnectorhq.com/loader.js"
      data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6924d98920fcaa4ee73ce9db"
      strategy="lazyOnload"
    />
  );
}

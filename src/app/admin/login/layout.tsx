import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | RSL/A Admin',
  description: 'RSL/A Admin Login',
  robots: 'noindex, nofollow',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center">
      {children}
    </div>
  );
}

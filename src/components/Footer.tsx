import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 py-6 md:py-8 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Desktop: Single row */}
                <div className="hidden md:flex items-center justify-between">
                    <Link href="/" className="group">
                        <img
                            src="/lockup.png"
                            alt="RSL/A"
                            className="h-10 w-auto opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                        />
                    </Link>

                    <div className="flex items-center gap-6 text-sm text-white/30">
                        <Link
                            href="/privacy-policy"
                            className="hover:text-white/60 transition-colors duration-300"
                        >
                            Privacy
                        </Link>
                        <span className="text-white/10">·</span>
                        <Link
                            href="/terms"
                            className="hover:text-white/60 transition-colors duration-300"
                        >
                            Terms
                        </Link>
                        <span className="text-white/10 ml-2">© {currentYear} RSL/A</span>
                    </div>
                </div>

                {/* Mobile: Stacked, centered */}
                <div className="md:hidden flex flex-col items-center gap-5">
                    <Link href="/" className="group">
                        <img
                            src="/lockup.png"
                            alt="RSL/A"
                            className="h-8 w-auto opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                        />
                    </Link>

                    <div className="flex items-center gap-4 text-xs text-white/30">
                        <Link
                            href="/privacy-policy"
                            className="hover:text-white/60 transition-colors duration-300"
                        >
                            Privacy
                        </Link>
                        <span className="text-white/10">·</span>
                        <Link
                            href="/terms"
                            className="hover:text-white/60 transition-colors duration-300"
                        >
                            Terms
                        </Link>
                    </div>

                    <p className="text-xs text-white/20">
                        © {currentYear} RSL/A
                    </p>
                </div>
            </div>
        </footer>
    );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ZoomIn } from "lucide-react";

interface ImageLightboxProps {
    src: string;
    alt: string;
    caption?: string;
    className?: string;
    size?: "small" | "medium" | "large" | "full";
}

export default function ImageLightbox({
    src,
    alt,
    caption,
    className = "",
    size = "medium"
}: ImageLightboxProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const closeModal = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 200); // Match animation duration
    }, []);

    // Keyboard support - Escape key to close
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            // Prevent body scroll when modal is open
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, closeModal]);

    const sizeClasses = {
        small: "max-w-sm",
        medium: "max-w-lg",
        large: "max-w-2xl",
        full: "w-full"
    };

    return (
        <>
            {/* Thumbnail */}
            <div className={`${className} ${size !== "full" ? sizeClasses[size] + " mx-auto" : ""}`}>
                <button
                    onClick={() => setIsOpen(true)}
                    className="block w-full cursor-zoom-in group text-left relative"
                >
                    <img
                        src={src}
                        alt={alt}
                        className="rounded-xl border border-white/10 w-full h-auto transition-all duration-300 group-hover:opacity-90 group-hover:border-brand-blue/50 group-hover:shadow-lg group-hover:shadow-brand-blue/10"
                    />
                    {/* Zoom indicator */}
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                </button>
                {caption && (
                    <p className="text-sm text-gray-500 text-center mt-3">{caption}</p>
                )}
            </div>

            {/* Lightbox Modal */}
            {isOpen && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8 transition-opacity duration-200 ${
                        isClosing ? "opacity-0" : "opacity-100"
                    }`}
                    onClick={closeModal}
                    style={{ animation: isClosing ? "none" : "fadeIn 0.2s ease-out" }}
                >
                    {/* Close button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all z-10"
                        aria-label="Close (or press Escape)"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>

                    {/* Click outside hint */}
                    <p className={`absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-500 transition-opacity duration-200 ${
                        isClosing ? "opacity-0" : "opacity-100"
                    }`}>
                        Press Escape or click anywhere to close
                    </p>

                    {/* Image container */}
                    <div
                        className={`relative max-w-[90vw] max-h-[85vh] transition-all duration-200 ${
                            isClosing ? "opacity-0 scale-95" : "opacity-100 scale-100"
                        }`}
                        style={{ animation: isClosing ? "none" : "zoomIn 0.2s ease-out" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={src}
                            alt={alt}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                        />
                        {caption && (
                            <p className="text-sm text-gray-400 text-center mt-4">{caption}</p>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

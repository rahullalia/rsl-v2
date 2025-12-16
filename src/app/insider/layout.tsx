import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Insider | RSL/A",
    description: "Get weekly automation insights delivered to your inbox.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function InsiderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

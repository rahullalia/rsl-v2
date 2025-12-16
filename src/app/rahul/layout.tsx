import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rahul Lalia | RSL/A",
    description: "Contact Rahul Lalia, Founder & CEO of RSL/A.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function RahulLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

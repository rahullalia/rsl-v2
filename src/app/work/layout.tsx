import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies | RSL/A",
    description: "Explore our case studies showcasing AI automation, marketing systems, and CRM implementations that have saved clients over $300K annually.",
    alternates: {
        canonical: "https://rsla.io/work",
    },
    openGraph: {
        title: "Case Studies | RSL/A",
        description: "Explore our case studies showcasing AI automation, marketing systems, and CRM implementations that have saved clients over $300K annually.",
        url: "https://rsla.io/work",
        siteName: "RSL/A",
        type: "website",
    },
};

export default function WorkLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

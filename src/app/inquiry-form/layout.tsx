import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Get in Touch | RSL/A",
    description: "Contact RSL/A to discuss your marketing automation, AI systems, or CRM needs. Fill out our inquiry form and we'll get back to you shortly.",
    alternates: {
        canonical: "https://rsla.io/inquiry-form",
    },
    openGraph: {
        title: "Get in Touch | RSL/A",
        description: "Contact RSL/A to discuss your marketing automation, AI systems, or CRM needs.",
        url: "https://rsla.io/inquiry-form",
        siteName: "RSL/A",
        type: "website",
    },
};

export default function InquiryFormLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

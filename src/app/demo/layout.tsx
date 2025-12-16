import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Animation Demos | RSL/A",
    description: "Interactive animation demonstrations for RSL/A website.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function DemoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

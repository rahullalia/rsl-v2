import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Studio | RSL/A",
    description: "Sanity Studio for RSL/A content management.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

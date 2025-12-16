import type { Metadata } from "next";
import SpiceOnASliceContent from "./SpiceOnASliceContent";

export const metadata: Metadata = {
    title: "From 14 to 132 Google Reviews and $25K in 60 Days | RSL/A",
    description: "Spice on a Slice, a neighborhood pizza shop, transformed its online visibility to generate over 100 new reviews and $25,000 in extra business in just two months.",
    alternates: {
        canonical: "https://rsla.io/work/spice-on-a-slice",
    },
    openGraph: {
        title: "Restaurant Marketing Case Study: From 14 to 132 Google Reviews and $25K in 60 Days",
        description: "Spice on a Slice, a neighborhood pizza shop, transformed its online visibility to generate over 100 new reviews and $25,000 in extra business in just two months.",
        url: "https://rsla.io/work/spice-on-a-slice",
        siteName: "RSL/A",
        type: "article",
    },
};

export default function SpiceOnASlicePage() {
    return <SpiceOnASliceContent />;
}

import type { Metadata } from "next";
import CasagrandeContent from "./CasagrandeContent";

export const metadata: Metadata = {
    title: "$600 in Meta Ads Drove $36K in Rental Income for Casagrande Salon | RSL/A",
    description: "Manhattan-based Casagrande Salon leveraged unused space and RSL/A's targeted advertising to generate $36,000 in passive annual revenue.",
    openGraph: {
        title: "$600 in Meta Ads Drove $36K in Rental Income for Casagrande Salon",
        description: "Manhattan-based Casagrande Salon leveraged unused space and RSL/A's targeted advertising to generate $36,000 in passive annual revenue.",
        url: "https://rsla.io/work/casagrande-salon",
        siteName: "RSL/A",
        type: "article",
    },
};

export default function Page() {
    return <CasagrandeContent />;
}

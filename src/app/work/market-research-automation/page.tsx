import type { Metadata } from "next";
import MarketResearchContent from "./MarketResearchContent";

export const metadata: Metadata = {
    title: "Automation Platform Saving $136K Annually for Market Research Firm | RSL/A",
    description: "How we built a distributed web scraping and OCR automation platform on AWS, reducing a 4-month manual process to 2 weeks and saving $136,000 per year.",
    alternates: {
        canonical: "https://rsla.io/work/market-research-automation",
    },
    openGraph: {
        title: "Automation Platform Saving $136K Annually for Market Research Firm",
        description: "How we built a distributed web scraping and OCR automation platform on AWS, reducing a 4-month manual process to 2 weeks and saving $136,000 per year.",
        url: "https://rsla.io/work/market-research-automation",
        siteName: "RSL/A",
        type: "article",
    },
};

export default function Page() {
    return <MarketResearchContent />;
}

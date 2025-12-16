import type { Metadata } from "next";
import AIMediaContent from "./AIMediaContent";

export const metadata: Metadata = {
    title: "Founding Engineer: AI Automation Systems for Media Company | RSL/A",
    description: "How we built production AI systems as Founding Engineer for a Singapore media company, reducing manual workload by 70% through video QC automation, content generation pipelines, and analytics tools.",
    alternates: {
        canonical: "https://rsla.io/work/ai-media-automation-founding-engineer",
    },
    openGraph: {
        title: "Founding Engineer: AI Automation Systems for Media Company",
        description: "As Founding Engineer for CrazyTok Media (Singapore), we architected and deployed three production AI systems that reduced manual content operations workload by 70%.",
        url: "https://rsla.io/work/ai-media-automation-founding-engineer",
        siteName: "RSL/A",
        type: "article",
    },
};

export default function Page() {
    return <AIMediaContent />;
}

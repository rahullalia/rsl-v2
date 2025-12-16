import type { Metadata } from "next";
import ProposalGeneratorContent from "./ProposalGeneratorContent";

export const metadata: Metadata = {
    title: "AI Proposal Generator Saves $22K Annually for RSL/A | Case Study",
    description: "RSL/A automated proposal creation with AI, reducing production time from 2 hours to 10 minutes and recovering 165 hours annually through Make.com, Claude AI, and Google Docs integration.",
    alternates: {
        canonical: "https://rsla.io/work/proposal-generator-automation",
    },
    openGraph: {
        title: "AI Proposal Generator Saves $22K Annually and Recovers 165 Hours Per Year",
        description: "RSL/A automated proposal creation with AI, reducing production time from 2 hours to 10 minutes per proposal. Built with Make.com, Claude AI, and Google Docs.",
        url: "https://rsla.io/work/proposal-generator-automation",
        siteName: "RSL/A",
        type: "article",
    },
};

export default function ProposalGeneratorAutomationPage() {
    return <ProposalGeneratorContent />;
}

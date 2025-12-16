import type { Metadata } from "next";
import EmailIceBreakerContent from "./EmailIceBreakerContent";

export const metadata: Metadata = {
    title: "AI Cold Email Personalization Saves 325 Hours Annually | RSL/A Case Study",
    description: "RSL/A automated cold email personalization with AI, reducing email research and writing time from 8 minutes to 30 seconds per email. Built with Make.com, OpenAI, and Google Sheets for LinkedIn-enriched outreach at scale.",
    keywords: "AI cold email personalization, automated email icebreakers, cold email automation, Make.com email automation, personalized cold outreach, B2B email automation, LinkedIn email personalization, sales email automation",
    alternates: {
        canonical: "https://rsla.io/work/email-ice-breaker-automation",
    },
    openGraph: {
        title: "AI Cold Email Personalization Saves 325 Hours Annually and Scales Outreach 10X",
        description: "RSL/A automated cold email personalization with AI, reducing email writing time from 8 minutes to 30 seconds per email using LinkedIn enrichment data.",
        url: "https://rsla.io/work/email-ice-breaker-automation",
        siteName: "RSL/A",
        type: "article",
    },
};

export default function Page() {
    return <EmailIceBreakerContent />;
}

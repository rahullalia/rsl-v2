import type { Metadata } from "next";
import EmailAutoresponderContent from "./EmailAutoresponderContent";

export const metadata: Metadata = {
    title: "AI Email Auto-Responder That Actually Reads Messages | RSL/A Case Study",
    description: "RSL/A built an intelligent AI email auto-responder that personalizes replies based on message content, responding in 24 seconds vs 24 hours. Built with Make.com and OpenAI for 24/7 lead capture.",
    keywords: "AI email auto responder, intelligent email automation, personalized auto reply, 24/7 email response, email automation Make.com, AI customer service, automated email replies, smart email responder",
    openGraph: {
        title: "Never Lose Another Lead: AI Auto-Responder That Actually Reads Your Message",
        description: "RSL/A built an intelligent AI email auto-responder that personalizes replies by reading message content and responding in 24 seconds instead of 24 hours.",
        url: "https://www.rsla.io/work/email-autoresponder-automation",
        siteName: "RSL/A",
        type: "article",
    },
};

export default function EmailAutoresponderAutomationPage() {
    return <EmailAutoresponderContent />;
}

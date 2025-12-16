import type { Metadata } from "next";
import FacebookAdsContent from "./FacebookAdsContent";

export const metadata: Metadata = {
    title: "Facebook Ads Reporting Automation Saves 990+ Hours Annually | RSL/A",
    description: "How we automated a 4-hour daily Facebook Ads reporting process down to 10 minutes using Google Sheets and custom scripts, saving $18K annually and boosting conversions by 4%.",
    openGraph: {
        title: "Facebook Ads Reporting Automation Saves 990+ Hours Annually",
        description: "How we automated a 4-hour daily Facebook Ads reporting process down to 10 minutes using Google Sheets and custom scripts, saving $18K annually and boosting conversions by 4%.",
        url: "https://rsla.io/work/facebook-ads-reporting-automation",
        siteName: "RSL/A",
        type: "article",
    },
};

export default function Page() {
    return <FacebookAdsContent />;
}

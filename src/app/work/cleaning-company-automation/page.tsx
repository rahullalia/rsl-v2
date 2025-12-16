import type { Metadata } from "next";
import CleaningCompanyContent from "./CleaningCompanyContent";

export const metadata: Metadata = {
    title: "Rebuilt Entire Operations With AI and Housecall Pro Sync | RSL/A",
    description: "How a cleaning company consolidated 100% of operations into GoHighLevel with AI automation and Housecall Pro integration, saving 2 employees worth of workload.",
    openGraph: {
        title: "Rebuilt Entire Operations With AI and Housecall Pro Sync",
        description: "How a cleaning company consolidated 100% of operations into GoHighLevel with AI automation and Housecall Pro integration, saving 2 employees worth of workload.",
        url: "https://rsla.io/work/cleaning-company-automation",
        siteName: "RSL/A",
        type: "article",
    },
};

export default function Page() {
    return <CleaningCompanyContent />;
}

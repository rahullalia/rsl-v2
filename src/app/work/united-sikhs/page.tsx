import type { Metadata } from "next";
import UnitedSikhsContent from "./UnitedSikhsContent";

export const metadata: Metadata = {
    title: "Automated Volunteer Onboarding, Saving $40K a Year for United Sikhs | RSL/A",
    description: "How United Sikhs unified 100% of their volunteer database and automated onboarding workflows, eliminating $40,000 in annual administrative costs.",
    openGraph: {
        title: "Automated Volunteer Onboarding, Saving $40K a Year for United Sikhs",
        description: "How United Sikhs unified 100% of their volunteer database and automated onboarding workflows, eliminating $40,000 in annual administrative costs.",
        url: "https://rsla.io/work/united-sikhs",
        siteName: "RSL/A",
        type: "article",
    },
};

export default function Page() {
    return <UnitedSikhsContent />;
}

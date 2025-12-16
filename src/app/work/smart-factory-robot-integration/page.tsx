import type { Metadata } from "next";
import SmartFactoryContent from "./SmartFactoryContent";

export const metadata: Metadata = {
    title: "Real-Time Robot Tracking for Automotive Manufacturing | RSL/A",
    description: "How we engineered MQTT + REST API integration for autonomous mobile robots with digital twin platform, enabling 10Hz real-time tracking across manufacturing plants.",
    openGraph: {
        title: "Real-Time Robot Tracking for Automotive Manufacturing",
        description: "How we engineered MQTT + REST API integration for autonomous mobile robots with digital twin platform, enabling 10Hz real-time tracking across manufacturing plants.",
        url: "https://rsla.io/work/smart-factory-robot-integration",
        siteName: "RSL/A",
        type: "article",
    },
};

export default function Page() {
    return <SmartFactoryContent />;
}

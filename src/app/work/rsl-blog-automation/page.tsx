import type { Metadata } from "next";
import RSLBlogContent from "./RSLBlogContent";

export const metadata: Metadata = {
    title: "Saved $18K a Year with Make.com and ChatGPT | RSL/A",
    description: "Facing high copywriting costs, RSL/A built an internal automation system to consistently publish high-quality, SEO-optimized blog content, saving $18,000 annually.",
    openGraph: {
        title: "Blog Automation Case Study: How RSL/A Saved $18K a Year with Make.com and ChatGPT",
        description: "Facing high copywriting costs, RSL/A built an internal automation system to consistently publish high-quality, SEO-optimized blog content, saving $18,000 annually.",
        url: "https://www.rsla.io/work/rsl-blog-automation",
        siteName: "RSL/A",
        type: "article",
    },
};

export default function RSLBlogAutomationPage() {
    return <RSLBlogContent />;
}

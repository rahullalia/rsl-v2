import Navigation from "@/components/Navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    slug: "market-research-automation",
    tag: "Python Automation & AWS",
    title: "Market Research Automation",
    description: "How we built a distributed web scraping and OCR automation platform, saving $136K annually.",
    stats: "$136K Saved",
  },
  {
    slug: "united-sikhs",
    tag: "Nonprofit CRM & Volunteer Management",
    title: "United Sikhs",
    description: "Automated volunteer onboarding and unified 2,000+ volunteers, saving $40K annually.",
    stats: "$40K Saved",
  },
  {
    slug: "email-ice-breaker-automation",
    tag: "AI Automation & Cold Email",
    title: "Cold Email Personalization",
    description: "AI-powered LinkedIn-enriched icebreakers that save 325 hours and $43K annually.",
    stats: "$43K Saved",
  },
  {
    slug: "proposal-generator-automation",
    tag: "AI Automation & Workflow",
    title: "AI Proposal Generator",
    description: "Automated proposal creation from 2 hours to 10 minutes, saving $22K annually.",
    stats: "$22K Saved",
  },
  {
    slug: "spice-on-a-slice",
    tag: "Local SEO & Customer Nurture",
    title: "Spice on a Slice",
    description: "From 14 to 132 Google reviews and $25K in extra revenue in 60 days.",
    stats: "$25K Revenue",
  },
  {
    slug: "facebook-ads-reporting-automation",
    tag: "Marketing Automation",
    title: "Facebook Ads Reporting",
    description: "Automated 4-hour daily reporting to 10 minutes, saving $18K annually.",
    stats: "$18K Saved",
  },
  {
    slug: "rsl-blog-automation",
    tag: "AI Automation & Content",
    title: "Blog Automation",
    description: "AI content engine with Make.com and ChatGPT, saving $18K annually.",
    stats: "$18K Saved",
  },
  {
    slug: "ai-media-automation-founding-engineer",
    tag: "AI Engineering & Content",
    title: "AI Media Automation",
    description: "Three production AI systems reducing content operations workload by 70%.",
    stats: "70% Reduction",
  },
  {
    slug: "cleaning-company-automation",
    tag: "GoHighLevel Operations",
    title: "Cleaning Company Ops",
    description: "100% operations consolidated with AI and Housecall Pro sync, saving 2 employees.",
    stats: "2 FTEs Saved",
  },
  {
    slug: "email-autoresponder-automation",
    tag: "AI Email Intelligence",
    title: "AI Auto-Responder",
    description: "Intelligent email auto-responder that reads messages and personalizes replies in 24 seconds.",
    stats: "24sec Response",
  },
  {
    slug: "smart-factory-robot-integration",
    tag: "IoT & Industrial Automation",
    title: "Smart Factory Robots",
    description: "MQTT + REST API integration for autonomous mobile robots with 10Hz real-time tracking.",
    stats: "10Hz Streaming",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-brand-black text-white selection:bg-brand-blue selection:text-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Proven <br /> <span className="text-gradient">Performance.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            We don&apos;t sell promises. We sell engineered outcomes. Here is the proof.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group relative flex flex-col h-[320px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-brand-blue/50 transition-all duration-300 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-brand-blue/20 text-brand-blue rounded-full">
                    {study.tag}
                  </span>
                  <span className="text-sm font-bold text-brand-blue">
                    {study.stats}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-blue transition-colors">
                  {study.title}
                </h3>

                <p className="text-gray-400 text-sm flex-grow">
                  {study.description}
                </p>

                <div className="flex items-center text-white font-semibold text-sm mt-4 group-hover:text-brand-blue transition-colors">
                  View Case Study <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to be the next <span className="text-brand-blue">case study?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s build you an intelligent marketing system that delivers measurable results.
          </p>
          <Link
            href="/inquiry-form"
            className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-semibold text-lg shadow-[0_0_30px_rgba(0,112,243,0.4)] hover:shadow-[0_0_50px_rgba(0,112,243,0.6)] hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Project <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}

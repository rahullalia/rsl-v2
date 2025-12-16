"use client";

import CaseStudyLayout from "@/components/CaseStudyLayout";
import ImageLightbox from "@/components/ImageLightbox";
import Link from "next/link";

export default function CasagrandeContent() {
    const stats = [
        { value: "+60X", label: "Return on Ad Spend" },
        { value: "$36,000", label: "Annual Rental Income" },
        { value: "2", label: "Suites Rented (Long-Term)" },
    ];

    return (
        <CaseStudyLayout
            tag="Digital Marketing & Automated Lead Nurture"
            title="$600 in Meta Ads Drove $36K in Rental Income for Casagrande Salon"
            description="Manhattan-based Casagrande Salon leveraged unused space and RSL/A's targeted advertising to generate $36,000 in passive annual revenue."
            stats={stats}
        >
            <h2>The Challenge: Idle Space, Failed Efforts</h2>
            <p>
                Laiz, the owner of Casagrande Salon in Manhattan, found herself with two newly vacant stylist suites. While the space was premium, leaving it idle was turning it into a significant financial strain rather than the asset it should be.
            </p>
            <p>
                For nearly two years, Laiz attempted to rent the rooms herself, trying social media posts, running unfocused ads, and relying on word-of-mouth. None of these efforts yielded the consistent, quality leads needed, leaving the vacancies open and the associated financial stress mounting.
            </p>

            {/* Key Takeaway Box */}
            <div className="key-takeaway-box">
                <h3>Key Takeaway from Challenge</h3>
                <p>
                    The core problem was <strong>the lack of targeted outreach and a streamlined nurturing process</strong>, a clear indicator that a custom system was needed to convert local professionals into long-term tenants.
                </p>
                <Link href="/#contact" className="btn-cta">
                    Apply This Insight to Your Business
                </Link>
            </div>

            <h2>The RSL Solution: The Strategy Applied</h2>
            <p>
                Our approach began with aligning our success with Laiz&apos;s via a performance-based model: Laiz covered the modest ad spend, and RSL/A would only earn the first month&apos;s rent upon successfully securing new tenants on a one-year lease.
            </p>

            <h3>Phase 1: Targeted Advertising & CRM Setup</h3>
            <ul>
                <li>
                    We designed a <strong>hyper-targeted Meta Ads campaign</strong> focused specifically on stylists, barbers, and beauty professionals within a tight radius of the Manhattan salon.
                </li>
                <li>
                    All generated leads flowed instantly into <strong>RSL/A</strong> (our white-label CRM).
                </li>
                <li>
                    Automated follow-ups, appointment reminders, and qualification questions were immediately implemented, ensuring every lead received prompt, professional attention.
                </li>
            </ul>

            <ImageLightbox
                src="/images/case-studies/casagrande-salon/ghl-workflow-example.png"
                alt="GoHighLevel CRM workflow setup for Casagrande Salon"
                caption="Automated CRM workflow in GoHighLevel (click to enlarge)"
                className="my-12"
                size="medium"
            />

            <h3>Phase 2: Hands-Free Nurture & Conversion</h3>
            <p>
                This automated pipeline meant the process ran <strong>hands-free</strong> for Laiz. The system tracked conversations, scheduled tours, and managed all communication until the stylists were ready to book an appointment. This eliminated the previous issue of scattered notes and missed messages, ensuring high-value leads were consistently converted.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
                <ImageLightbox
                    src="/images/case-studies/casagrande-salon/sms-workflow-example.png"
                    alt="Automated SMS follow-up sequence"
                    caption="Automated SMS sequence (click to enlarge)"
                    size="full"
                />
                <ImageLightbox
                    src="/images/case-studies/casagrande-salon/email-workflow-example.png"
                    alt="Automated email follow-up sequence"
                    caption="Automated email sequence (click to enlarge)"
                    size="full"
                />
            </div>

            <h2>The Results: $36,000 in Predictable Revenue</h2>

            {/* Proof Box */}
            <div className="proof-box">
                <h3>Client Testimonial</h3>

                <div className="my-8 max-w-[350px] mx-auto">
                    <div className="relative w-full" style={{ paddingTop: '177.78%' }}>
                        <iframe
                            src="https://fast.wistia.net/embed/iframe/hr0yfppjnl?seo=false&videoFoam=true"
                            title="Casagrande Salon Testimonial"
                            allow="autoplay; fullscreen"
                            className="absolute top-0 left-0 w-full h-full rounded-xl"
                        ></iframe>
                    </div>
                </div>

                <p className="mt-6">
                    — &quot;I tried for years to rent my salon space and nothing worked. After Rahul and RSL/A, in just a few months both my rooms were filled. Now I don&apos;t stress about rent anymore.&quot;
                </p>
            </div>

            <p>
                The campaign resulted in two high-quality, long-term stylists renting the suites within three months. With a combined rental income of $3,000/month secured on one-year leases, the salon generated a predictable <strong>$36,000 in annual revenue</strong>.
            </p>

            <ul>
                <li>
                    Achieved a <strong>60X Return on Ad Spend</strong>, turning a $600 investment into $36,000 in annual income.
                </li>
                <li>
                    Converted empty, stress-inducing space into a <strong>reliable, passive revenue stream</strong>.
                </li>
                <li>
                    Laiz moved from worrying about covering expenses to enjoying significant, predictable surplus revenue.
                </li>
            </ul>

            {/* CTA Section */}
            <div className="cta-section">
                <h2>Save time and money like this client</h2>
                <p>
                    If you&apos;re dealing with similar bottlenecks, let&apos;s discuss how a custom RSL/A system can drive predictable growth and cut costs in your business.
                </p>
                <Link href="/#contact" className="btn-cta">
                    Show Me How to Save
                </Link>
            </div>
        </CaseStudyLayout>
    );
}

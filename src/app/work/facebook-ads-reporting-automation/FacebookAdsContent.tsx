"use client";

import CaseStudyLayout from "@/components/CaseStudyLayout";
import Link from "next/link";

export default function FacebookAdsContent() {
    const stats = [
        { value: "96%", label: "Time Reduction" },
        { value: "+4%", label: "Conversion Lift" },
        { value: "$18K", label: "Annual Savings" },
    ];

    return (
        <CaseStudyLayout
            tag="Marketing Automation & Google Sheets"
            title="Facebook Ads Reporting Automation Saves 990+ Hours Annually"
            description="A growing digital marketing agency was losing nearly 4 hours every day to manual Facebook Ads data tracking. We built a Google Sheets automation system with custom scripts that reduced this to 10 minutes, freeing up the lead marketer to focus on strategy and client growth."
            stats={stats}
        >
            <h2>The Challenge: 4 Hours Daily on Manual Data Entry</h2>
            <p>
                A digital marketing agency managing Facebook Ads campaigns for multiple clients faced a growing operational bottleneck. Their lead marketer, who should have been focused on campaign strategy and optimization, was instead spending nearly 4 hours every single day on manual data tracking.
            </p>
            <p>
                The process involved:
            </p>
            <ul>
                <li><strong>Exporting data from Facebook Ads Manager:</strong> Multiple accounts, multiple campaigns, daily</li>
                <li><strong>Copying metrics into spreadsheets:</strong> Spend, impressions, clicks, conversions, CPL, ROAS</li>
                <li><strong>Calculating derived metrics:</strong> Week-over-week changes, running averages, client-specific KPIs</li>
                <li><strong>Formatting client reports:</strong> Each client needed their data in a specific format</li>
                <li><strong>Cross-referencing with landing page data:</strong> Manual lookup of conversion events</li>
            </ul>
            <p>
                This wasn&apos;t just tedious, it was expensive. A senior marketer&apos;s time was being consumed by data entry instead of the strategic work that actually moves the needle for clients.
            </p>

            <div className="key-takeaway-box">
                <h3>Key Takeaway from Challenge</h3>
                <p>
                    When your highest-paid team members are doing repetitive data work, you&apos;re not just wasting their salary, you&apos;re losing the strategic insights and client attention that drives real growth. Automation isn&apos;t about replacing people; it&apos;s about letting them do work that matters.
                </p>
                <Link href="/#contact" className="btn-cta">
                    Free Up Your Team&apos;s Time
                </Link>
            </div>

            <h2>The Solution: Google Sheets Automation with Custom Scripts</h2>
            <p>
                We designed and implemented a comprehensive automation system using Google Sheets and custom Google Apps Script that pulled, processed, and visualized Facebook Ads data automatically. The system was built to scale with the agency&apos;s growing client base.
            </p>

            <h3>Phase 1: Automated Data Ingestion</h3>
            <ul>
                <li>Built custom scripts to pull Facebook Ads data via API connections</li>
                <li>Created automated scheduling to refresh data every morning before the team arrived</li>
                <li>Implemented error handling and alerts for failed data pulls</li>
                <li>Set up multi-account support to handle all clients in a single dashboard</li>
            </ul>

            <h3>Phase 2: Intelligent Data Processing</h3>
            <ul>
                <li>Automated calculation of derived metrics (CPL, ROAS, week-over-week changes)</li>
                <li>Built dynamic date range comparisons (7-day, 30-day, MTD, QTD)</li>
                <li>Created conditional formatting to highlight anomalies and opportunities</li>
                <li>Implemented data validation to catch API inconsistencies</li>
            </ul>

            <h3>Phase 3: New Tracking Metrics for Landing Pages</h3>
            <ul>
                <li>Identified gaps in existing landing page tracking during the automation build</li>
                <li>Implemented additional conversion tracking events that weren&apos;t being captured</li>
                <li>Created funnel visualization showing drop-off points</li>
                <li>Built A/B test tracking into the automated reporting system</li>
            </ul>
            <p>
                This proactive addition of new tracking metrics led directly to optimization opportunities the team hadn&apos;t seen before.
            </p>

            <h3>Phase 4: Documentation and Team Enablement</h3>
            <ul>
                <li>Authored comprehensive SOPs for using and maintaining the automation system</li>
                <li>Created training materials for onboarding future team members</li>
                <li>Built troubleshooting guides for common issues</li>
                <li>Established processes for adding new client accounts to the system</li>
            </ul>

            <div className="proof-box">
                <h3>Working Relationship</h3>
                <p>
                    Over five months of collaboration, we transformed how the agency handled data operations. The lead marketer went from dreading the daily reporting grind to having mornings free for client strategy calls. The automation system we built became a core part of their operations, handling data for all client accounts and scaling seamlessly as they added new business.
                </p>
                <p className="text-sm text-gray-500 mt-4">
                    The documentation and SOPs created during this engagement are still in use today, ensuring continuity as the team grows.
                </p>
            </div>

            <h2>The Results: 96% Time Reduction, +4% Conversions, $18K Saved</h2>
            <p>
                The automation system delivered immediate and measurable impact:
            </p>
            <ul>
                <li><strong>96% time reduction:</strong> 4-hour daily process reduced to 10 minutes of review</li>
                <li><strong>990+ hours saved annually:</strong> Nearly 20 hours per week returned to strategic work</li>
                <li><strong>$18,000 annual savings:</strong> Lead marketer time reallocated to revenue-generating activities</li>
                <li><strong>+4% conversion rate improvement:</strong> New tracking metrics revealed optimization opportunities</li>
                <li><strong>Zero manual data entry:</strong> Completely eliminated copy-paste workflows</li>
                <li><strong>Scalable system:</strong> New clients onboarded in minutes instead of adding to workload</li>
                <li><strong>Documented processes:</strong> SOPs enabled smooth team transitions and growth</li>
            </ul>

            <div className="key-takeaway-box">
                <h3>Key Takeaway from Results</h3>
                <p>
                    The 4% conversion lift wasn&apos;t from a fancy new tool. It came from finally having visibility into metrics that were always available but never tracked. Sometimes the biggest wins come from automating the boring stuff so you can pay attention to what actually matters.
                </p>
                <Link href="/#contact" className="btn-cta">
                    Discover What You&apos;re Missing
                </Link>
            </div>

            <h2>Technical Implementation</h2>
            <ul>
                <li><strong>Platform:</strong> Google Sheets with Google Apps Script</li>
                <li><strong>Data Source:</strong> Facebook Ads API integration</li>
                <li><strong>Automation:</strong> Time-based triggers for daily data refresh</li>
                <li><strong>Additional Tools:</strong> Landing page tracking (HTML, CSS, JS), Systeme.io integration</li>
                <li><strong>Documentation:</strong> Notion-based SOPs and training materials</li>
            </ul>

            <h2>Additional Contributions</h2>
            <p>
                Beyond the core automation project, the engagement included:
            </p>
            <ul>
                <li><strong>Landing page development:</strong> Built and optimized conversion-focused pages</li>
                <li><strong>Email and WhatsApp automation:</strong> Set up nurture sequences for leads</li>
                <li><strong>Bug identification:</strong> Found and reported critical issues in internal ad-tracking software</li>
                <li><strong>Payment integration:</strong> Assisted with Razorpay gateway setup for client projects</li>
            </ul>

            <div className="cta-section">
                <h2>Save time and money like this client</h2>
                <p>
                    If your marketers are spending hours on data entry instead of strategy, you&apos;re leaving money on the table. We build automation systems that free up your best people to do their best work.
                </p>
                <Link href="/#contact" className="btn-cta">
                    Show Me How to Save
                </Link>
            </div>
        </CaseStudyLayout>
    );
}

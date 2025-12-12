import CaseStudyLayout from '@/components/CaseStudyLayout';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automated Volunteer Onboarding, Saving $40K a Year for United Sikhs | RSL/A',
  description: 'How United Sikhs unified 100% of their volunteer database and automated onboarding workflows, eliminating $40,000 in annual administrative costs.',
  openGraph: {
    title: 'Automated Volunteer Onboarding, Saving $40K a Year for United Sikhs',
    description: 'How United Sikhs unified 100% of their volunteer database and automated onboarding workflows, eliminating $40,000 in annual administrative costs.',
    url: 'https://www.rsla.io/work/united-sikhs',
    siteName: 'RSL/A',
    type: 'article',
  },
};

export default function UnitedSikhsPage() {
  const stats = [
    { value: '$40,000', label: 'Annual Cost Saved' },
    { value: '100%', label: 'Database Unification' },
    { value: '2,000+', label: 'Volunteers Managed' },
  ];

  return (
    <CaseStudyLayout
      tag="Nonprofit CRM & Volunteer Management"
      title="Automated Volunteer Onboarding, Saving $40K a Year"
      subtitle="United Sikhs, a global humanitarian nonprofit, was managing 2,000+ volunteers across fragmented spreadsheets and email lists. We unified their entire volunteer database and automated onboarding workflows, eliminating the need for a full-time coordinator position and saving $40,000 annually."
      stats={stats}
    >
      <h2>The Challenge: Fragmented Volunteer Data Across Multiple Systems</h2>
      <p>
        United Sikhs coordinates disaster relief, community outreach, and advocacy programs across 15 countries. With 2,000+ active volunteers, their biggest operational challenge was volunteer management. Data was scattered across Google Sheets, email lists, and local chapter databases. Onboarding new volunteers required 3-5 hours of manual work per person.
      </p>
      <p>
        Critical pain points included:
      </p>
      <ul>
        <li><strong>No centralized volunteer database:</strong> Regional chapters maintained separate lists, creating duplicates and data conflicts</li>
        <li><strong>Manual onboarding workflows:</strong> Background checks, training materials, and orientation scheduling were 100% manual</li>
        <li><strong>Lost volunteer engagement:</strong> No automated follow-up meant volunteers fell through the cracks after initial signup</li>
        <li><strong>Compliance risks:</strong> Inconsistent record-keeping created liability issues for sensitive humanitarian work</li>
        <li><strong>Reporting nightmares:</strong> Quarterly reports to funders required weeks of manual data compilation</li>
      </ul>

      <div className="key-takeaway-box">
        <h3>Key Takeaway from Challenge</h3>
        <p>
          For nonprofits, fragmented volunteer data isn&apos;t just an efficiency problem, it&apos;s a mission risk. When you can&apos;t quickly deploy the right volunteers to urgent needs, people suffer. Unified systems aren&apos;t a luxury; they&apos;re essential infrastructure.
        </p>
        <Link href="/inquiry-form" className="btn-cta">
          Unify Your Volunteer Management
        </Link>
      </div>

      <h2>The RSL/A Solution: CRM-Powered Volunteer Management System</h2>
      <p>
        We built a comprehensive volunteer management system in GoHighLevel, creating a single source of truth for all volunteer data, automated onboarding workflows, and intelligent matching between volunteer skills and program needs.
      </p>

      <h3>Phase 1: Database Unification & Migration</h3>
      <ul>
        <li>Consolidated 2,000+ volunteer records from 15 regional databases into unified CRM</li>
        <li>De-duplicated records and established data quality standards</li>
        <li>Created custom fields for skills, certifications, availability, languages, and regional assignments</li>
        <li>Built role-based access for chapter leads to manage their local volunteers while maintaining global visibility</li>
      </ul>

      <h3>Phase 2: Automated Onboarding Workflows</h3>
      <ul>
        <li><strong>Application process:</strong> Custom intake forms with conditional logic based on volunteer type and location</li>
        <li><strong>Background checks:</strong> Automated triggers to third-party verification services with status tracking</li>
        <li><strong>Training delivery:</strong> Sequential email courses with embedded video content and quizzes</li>
        <li><strong>Orientation scheduling:</strong> AI-powered calendar booking integrated with chapter schedules</li>
        <li><strong>Document management:</strong> Automated delivery of liability waivers, NDAs, and program-specific forms</li>
        <li><strong>Welcome sequences:</strong> Personalized onboarding journeys based on volunteer interests and availability</li>
      </ul>

      <h3>Phase 3: Engagement & Deployment Automation</h3>
      <ul>
        <li><strong>Opportunity matching:</strong> When urgent needs arise, system automatically identifies qualified volunteers by skills, location, and availability</li>
        <li><strong>Re-engagement campaigns:</strong> Dormant volunteers receive personalized outreach based on their previous contributions</li>
        <li><strong>Recognition workflows:</strong> Automated thank-you messages, milestone celebrations, and impact reports</li>
        <li><strong>Skill development:</strong> Suggested training opportunities based on volunteer progression and program needs</li>
      </ul>

      <h3>Phase 4: Reporting & Analytics</h3>
      <ul>
        <li>Real-time dashboards showing volunteer hours, program participation, and geographic distribution</li>
        <li>One-click quarterly reports for grant applications and board meetings</li>
        <li>Volunteer retention analytics to identify at-risk volunteers and optimize engagement</li>
        <li>Program impact tracking tied directly to volunteer contributions</li>
      </ul>

      <div className="proof-box">
        <h3>Client Testimonial</h3>
        <p>
          &quot;Before RSL/A, onboarding a single volunteer took our coordinator 3-5 hours. Now it&apos;s completely automated, volunteers complete everything on their own, and we only step in for the final orientation call. We eliminated a full-time position and redirected that budget to direct program services. More importantly, when disaster strikes, we can deploy the right volunteers in minutes instead of days.&quot;
        </p>
        <p className="text-sm text-gray-500 mt-4">
          — Operations Director, United Sikhs
        </p>
      </div>

      <h2>The Results: $40K Saved, 100% Database Unified, Faster Deployment</h2>
      <p>
        Within 90 days of implementation:
      </p>
      <ul>
        <li><strong>$40,000 annual savings:</strong> Eliminated full-time volunteer coordinator position, redirected funds to programs</li>
        <li><strong>100% database unification:</strong> All 2,000+ volunteers in single CRM with complete history and certifications</li>
        <li><strong>95% onboarding automation:</strong> From 3-5 hours manual work to 15 minutes of human review per volunteer</li>
        <li><strong>3x faster deployment:</strong> Emergency volunteer deployment reduced from days to hours</li>
        <li><strong>42% increase in volunteer retention:</strong> Automated engagement workflows kept volunteers active longer</li>
        <li><strong>Quarterly reporting time reduced by 80%:</strong> From 2 weeks of manual compilation to 2 hours of data export</li>
        <li><strong>Zero compliance incidents:</strong> Automated record-keeping and expiration tracking eliminated liability gaps</li>
      </ul>

      <div className="key-takeaway-box">
        <h3>Key Takeaway from Results</h3>
        <p>
          Automation in nonprofits isn&apos;t about replacing human connection, it&apos;s about freeing your team to focus on mission-critical work instead of administrative overhead. Every hour saved on data entry is an hour spent changing lives.
        </p>
        <Link href="/inquiry-form" className="btn-cta">
          Transform Your Nonprofit Operations
        </Link>
      </div>

      <div className="cta-section">
        <h2>Save time and money like this client</h2>
        <p>
          If you&apos;re managing volunteers across spreadsheets and email, you&apos;re burning time and money that could go directly to your mission. Let&apos;s build you a system that runs itself.
        </p>
        <Link href="/inquiry-form" className="btn-cta">
          Show Me How to Save
        </Link>
      </div>
    </CaseStudyLayout>
  );
}

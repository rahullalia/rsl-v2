import CaseStudyLayout from '@/components/CaseStudyLayout';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rebuilt Entire Operations With AI and Housecall Pro Sync | RSL/A',
  description: 'How a cleaning company consolidated 100% of operations into GoHighLevel with AI automation and Housecall Pro integration, saving 2 employees worth of workload.',
  openGraph: {
    title: 'Rebuilt Entire Operations With AI and Housecall Pro Sync',
    description: 'How a cleaning company consolidated 100% of operations into GoHighLevel with AI automation and Housecall Pro integration, saving 2 employees worth of workload.',
    url: 'https://www.rsla.io/work/cleaning-company-automation',
    siteName: 'RSL/A',
    type: 'article',
  },
};

export default function CleaningCompanyAutomationPage() {
  const stats = [
    { value: '100%', label: 'Operations Consolidated' },
    { value: '2 Employees', label: 'Workload Saved' },
    { value: '24/7', label: 'Automated Support' },
  ];

  return (
    <CaseStudyLayout
      tag="GoHighLevel Business Operations"
      title="Rebuilt Entire Operations With AI and Housecall Pro Sync"
      subtitle="A residential and commercial cleaning company was drowning in manual workflows, juggling scheduling software, text messages, spreadsheets, and email. We consolidated everything into GoHighLevel with AI-powered automation and Housecall Pro integration, eliminating the need for 2 full-time employees."
      stats={stats}
    >
      <h2>The Challenge: Operations Chaos Across Multiple Platforms</h2>
      <p>
        White Glove Cleaning had grown to 50+ recurring clients, but their operations were scattered. They used Housecall Pro for job scheduling, Google Sheets for customer notes, manual texts for follow-ups, and email for invoicing reminders. The owner was spending 20+ hours a week on administrative tasks, and they had hired 2 employees just to handle communications and scheduling.
      </p>
      <p>
        Critical issues included:
      </p>
      <ul>
        <li><strong>No centralized customer view:</strong> Customer history was split across 4 different systems</li>
        <li><strong>Manual follow-up workflows:</strong> Employees manually texted customers for confirmations, reviews, and rebookings</li>
        <li><strong>Scheduling conflicts:</strong> Double-bookings happened weekly because scheduling wasn&apos;t synced with communication</li>
        <li><strong>Lost revenue opportunities:</strong> No automated upsell or rebooking sequences</li>
      </ul>

      <div className="key-takeaway-box">
        <h3>Key Takeaway from Challenge</h3>
        <p>
          When operations are scattered across multiple platforms, you don&apos;t just lose efficiency, you lose visibility into your business. Every disconnected system creates blind spots that cost you time, money, and customer satisfaction.
        </p>
        <Link href="/inquiry-form" className="btn-cta">
          Consolidate Your Operations Today
        </Link>
      </div>

      <h2>The RSL/A Solution: GoHighLevel as the Central Operations Hub</h2>
      <p>
        We rebuilt their entire operations infrastructure in GoHighLevel, creating a single source of truth for all customer interactions, scheduling, and communications. The key was bidirectional sync with Housecall Pro, they could keep using their familiar scheduling tool while GoHighLevel handled everything else.
      </p>

      <h3>Phase 1: Housecall Pro Integration & Customer Migration</h3>
      <ul>
        <li>Built custom API integration between Housecall Pro and GoHighLevel using Make.com</li>
        <li>Migrated all customer data, job history, and notes into unified GoHighLevel contacts</li>
        <li>Set up bidirectional sync: jobs scheduled in Housecall Pro automatically create opportunities in GoHighLevel</li>
        <li>Created custom fields to track service type, frequency, property size, and preferences</li>
      </ul>

      <h3>Phase 2: AI-Powered Communication Workflows</h3>
      <ul>
        <li><strong>Appointment confirmations:</strong> Automated SMS/email 48 hours before, 24 hours before, and morning-of</li>
        <li><strong>Review requests:</strong> AI-generated personalized review requests sent 2 hours after job completion</li>
        <li><strong>Rebooking sequences:</strong> Smart workflows that reach out based on service frequency (weekly, bi-weekly, monthly)</li>
        <li><strong>AI chat widget:</strong> Answers common questions, books estimates, and qualifies leads 24/7</li>
        <li><strong>Emergency requests:</strong> After-hours inquiries trigger instant responses with next-available slots</li>
      </ul>

      <h3>Phase 3: Operational Dashboards & Reporting</h3>
      <ul>
        <li>Custom pipeline views for New Leads, Active Jobs, Follow-Ups, and Recurring Clients</li>
        <li>Daily digest emails showing jobs scheduled, completions, review scores, and revenue</li>
        <li>Automated reporting on customer lifetime value, rebooking rates, and service profitability</li>
        <li>Team task automation for quality checks and special requests</li>
      </ul>

      <div className="proof-box">
        <h3>Client Testimonial</h3>
        <p>
          &quot;We went from needing 2 people just to answer phones and schedule jobs to having everything run automatically. I get a morning email showing exactly what&apos;s happening that day, and I can see our entire business in one place. The AI chat even books estimates while I&apos;m sleeping. This paid for itself in the first month.&quot;
        </p>
        <p className="text-sm text-gray-500 mt-4">
          — Owner, White Glove Cleaning
        </p>
      </div>

      <h2>The Results: 100% Consolidation, Zero Additional Staff</h2>
      <p>
        Within 60 days of go-live:
      </p>
      <ul>
        <li><strong>100% operations consolidated:</strong> All customer data, communications, and workflows in one system</li>
        <li><strong>2 employees redeployed:</strong> Admin staff moved to field work, increasing service capacity</li>
        <li><strong>99% confirmation rate:</strong> Automated appointment reminders virtually eliminated no-shows</li>
        <li><strong>24/7 lead capture:</strong> AI chat widget captured 37 new leads in first month, 18 converted to paying customers</li>
        <li><strong>Review growth:</strong> From 14 Google reviews to 132 in 60 days (automated review requests)</li>
        <li><strong>Recurring revenue increase:</strong> Rebooking workflows brought back 23 dormant clients worth $15K annually</li>
      </ul>

      <div className="key-takeaway-box">
        <h3>Key Takeaway from Results</h3>
        <p>
          The right operations platform doesn&apos;t just save time, it unlocks revenue. By automating the routine tasks, you free your team to focus on high-value work that actually grows the business.
        </p>
        <Link href="/inquiry-form" className="btn-cta">
          See How We Can Automate Your Operations
        </Link>
      </div>

      <div className="cta-section">
        <h2>Save time and money like this client</h2>
        <p>
          If you&apos;re managing your business across multiple platforms, you&apos;re leaving money on the table. Let&apos;s build you a centralized operations hub that runs 24/7.
        </p>
        <Link href="/inquiry-form" className="btn-cta">
          Show Me How to Save
        </Link>
      </div>
    </CaseStudyLayout>
  );
}

import CaseStudyLayout from '@/components/CaseStudyLayout';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Founding Engineer: AI Automation Systems for Media Company | RSL/A',
  description: 'How we built production AI systems as Founding Engineer for a Singapore media company, reducing manual workload by 70% through video QC automation, content generation pipelines, and analytics tools.',
  openGraph: {
    title: 'Founding Engineer: AI Automation Systems for Media Company',
    description: 'As Founding Engineer for CrazyTok Media (Singapore), we architected and deployed three production AI systems that reduced manual content operations workload by 70%.',
    url: 'https://www.rsla.io/work/ai-media-automation-founding-engineer',
    siteName: 'RSL/A',
    type: 'article',
  },
};

export default function AIMediaAutomationFoundingEngineerPage() {
  const stats = [
    { value: '70%', label: 'Workload Reduction' },
    { value: '83-92%', label: 'QC Time Saved' },
    { value: '3', label: 'Production AI Systems' },
  ];

  return (
    <CaseStudyLayout
      tag="AI Engineering & Content Automation"
      title="Founding Engineer: AI Automation Systems for Media Company"
      subtitle="As Founding Engineer for CrazyTok Media (Singapore), we architected and deployed three production AI systems that reduced manual content operations workload by 70%. From Netflix-level video quality control to AI-powered content generation pipelines, these tools transformed how the media team operates at scale."
      stats={stats}
    >
      <h2>The Challenge: Manual Content Operations Bottlenecks at Scale</h2>
      <p>
        CrazyTok Media, a Singapore-based content company, was scaling rapidly but drowning in manual operations. Video quality control took 60+ minutes per video, social media content required hours of manual writing and formatting, and YouTube analytics data lived in fragmented dashboards with no cross-platform insights.
      </p>
      <p>
        Critical operational bottlenecks:
      </p>
      <ul>
        <li><strong>60+ minute video QC process:</strong> Manual review of every frame for text overlays, audio quality, and brand compliance</li>
        <li><strong>Labor-intensive content repurposing:</strong> Transforming longform podcasts into Twitter threads, blogs, and short-form clips required 4-6 hours per episode</li>
        <li><strong>Analytics data silos:</strong> YouTube performance metrics spread across multiple dashboards, making PRE/POST treatment analysis nearly impossible</li>
        <li><strong>Inconsistent quality standards:</strong> No automated enforcement of Netflix-level video quality requirements</li>
        <li><strong>Zero scalability:</strong> Every new video or content piece required proportional increases in manual labor</li>
      </ul>

      <div className="key-takeaway-box">
        <h3>Key Takeaway from Challenge</h3>
        <p>
          Media companies face a brutal choice: scale your team proportionally with content volume, or build AI systems that automate the repetitive work. Manual operations that take hours per asset aren&apos;t sustainable at 100+ pieces per month.
        </p>
        <Link href="/inquiry-form" className="btn-cta">
          Automate Your Content Operations
        </Link>
      </div>

      <h2>The Solution: Three Production AI Systems Built as Founding Engineer</h2>
      <p>
        As Founding Engineer, we architected and deployed three distinct AI automation systems, each solving a critical operational bottleneck. All systems are running in production and have become core infrastructure for the media team.
      </p>

      <h3>System 1: AI-Powered Video QC with Netflix-Level Standards</h3>
      <ul>
        <li>Built LLM-based text detection system to automatically identify on-screen text overlays, spelling errors, and brand violations</li>
        <li>Engineered multi-stage analysis pipeline: frame extraction → OCR → LLM interpretation → compliance scoring</li>
        <li>Integrated industry-standard quality checks used by major streaming platforms</li>
        <li><strong>Result:</strong> Reduced video QC time from 60+ minutes to 5-10 minutes (83-92% efficiency gain)</li>
      </ul>

      <h3>System 2: Longform Podcast → Social Content Generation Pipeline</h3>
      <ul>
        <li>Architected 4-stage AI workflow: chunking → interpretation → tweetification → editing</li>
        <li>Engineered 500+ line LLM prompts for consistent brand voice and formatting</li>
        <li>Built AirTable integration for content management and team review workflows</li>
        <li>Automated transformation of 60-minute podcasts into Twitter threads, blog posts, and short-form video scripts</li>
        <li><strong>Result:</strong> Reduced content repurposing time from 4-6 hours to 20 minutes</li>
      </ul>

      <h3>System 3: YouTube Analytics Chrome Extension</h3>
      <ul>
        <li>Developed Chrome extension for YouTube Studio with automated PRE/POST treatment comparison</li>
        <li>Built 35-column data export covering views, CTR, watch time, traffic sources, and engagement metrics</li>
        <li>Created cross-platform metrics aggregation to compare performance across YouTube, Twitter, and LinkedIn</li>
        <li><strong>Result:</strong> Reduced analytics reporting from 2+ hours to 5 minutes, enabling data-driven content decisions</li>
      </ul>

      <h3>Additional AI-Powered Tools</h3>
      <ul>
        <li><strong>Profile matching:</strong> Image recognition using Playwright and Pillow to match guest profiles across platforms</li>
        <li><strong>Headline generators:</strong> LLM-powered title and thumbnail text optimization for maximum CTR</li>
        <li><strong>Content workflow automation:</strong> End-to-end pipelines from raw footage to multi-platform distribution</li>
      </ul>

      <div className="proof-box">
        <h3>Technical Approach: Production-Ready AI Engineering</h3>
        <p>
          These weren&apos;t prototypes or demos, they&apos;re production systems running daily operations for a media company. Every system was built with error handling, quality validation, and team workflows in mind. The 70% workload reduction freed the content team to focus on creative work instead of administrative tasks.
        </p>
      </div>

      <h2>The Results: 70% Workload Reduction, 3 Production AI Systems</h2>
      <p>
        All three systems launched between August 2024 and present, now running as core operational infrastructure:
      </p>
      <ul>
        <li><strong>70% manual workload reduction:</strong> Content team freed from hours of repetitive QC, repurposing, and analytics work</li>
        <li><strong>83-92% video QC efficiency gain:</strong> From 60+ minutes to 5-10 minutes per video</li>
        <li><strong>4-6 hours → 20 minutes content repurposing:</strong> Podcast-to-social automation pipeline</li>
        <li><strong>35-column analytics in 5 minutes:</strong> YouTube Studio extension replaced 2+ hours of manual data compilation</li>
        <li><strong>Multi-platform publishing at scale:</strong> Single longform asset now generates 10+ content pieces automatically</li>
        <li><strong>Netflix-level quality standards:</strong> Automated enforcement of professional video quality requirements</li>
        <li><strong>Data-driven content strategy:</strong> Real-time analytics enable rapid iteration on content performance</li>
      </ul>

      <div className="key-takeaway-box">
        <h3>Key Takeaway from Results</h3>
        <p>
          AI automation isn&apos;t about replacing creative teams, it&apos;s about eliminating the grunt work so they can focus on what humans do best: strategy, creativity, and storytelling. A 70% workload reduction doesn&apos;t mean 70% fewer people; it means 10x more output with the same team.
        </p>
        <Link href="/inquiry-form" className="btn-cta">
          Build Your AI Content Systems
        </Link>
      </div>

      <h2>Technical Stack</h2>
      <ul>
        <li><strong>AI & LLMs:</strong> OpenAI GPT-4, 500+ line prompt engineering, multi-stage AI workflows</li>
        <li><strong>Computer Vision:</strong> Playwright, Pillow (PIL), OCR for image recognition and text detection</li>
        <li><strong>Automation:</strong> Python, AirTable API, Chrome Extension development (JavaScript)</li>
        <li><strong>Content Processing:</strong> Video frame extraction, audio transcription, text chunking and transformation</li>
        <li><strong>Analytics:</strong> YouTube Studio API, cross-platform metrics aggregation, data export automation</li>
      </ul>

      <div className="cta-section">
        <h2>Save time and money like this client</h2>
        <p>
          If your content team is drowning in manual QC, repurposing, or analytics work, we can build custom AI systems that run in production and deliver real workload reductions. Not demos, production tools.
        </p>
        <Link href="/inquiry-form" className="btn-cta">
          Show Me How to Save
        </Link>
      </div>
    </CaseStudyLayout>
  );
}

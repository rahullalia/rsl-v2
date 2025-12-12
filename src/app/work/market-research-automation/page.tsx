import CaseStudyLayout from '@/components/CaseStudyLayout';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automation Platform Saving $136K Annually for Market Research Firm | RSL/A',
  description: 'How we built a distributed web scraping and OCR automation platform on AWS, reducing a 4-month manual process to 2 weeks and saving $136,000 per year.',
  openGraph: {
    title: 'Automation Platform Saving $136K Annually for Market Research Firm',
    description: 'How we built a distributed web scraping and OCR automation platform on AWS, reducing a 4-month manual process to 2 weeks and saving $136,000 per year.',
    url: 'https://www.rsla.io/work/market-research-automation',
    siteName: 'RSL/A',
    type: 'article',
  },
};

export default function MarketResearchAutomationPage() {
  const stats = [
    { value: '$136K', label: 'Annual Savings' },
    { value: '87.5%', label: 'Time Reduction' },
    { value: '97%', label: 'Data Accuracy' },
  ];

  return (
    <CaseStudyLayout
      tag="Python Automation & AWS Development"
      title="Automation Platform Saving $136K Annually for Market Research Firm"
      subtitle="One of the region's largest readership surveys was buried under a 4-month manual data collection process requiring 80 staff members. We built a high-throughput automation platform with distributed web scraping and OCR on AWS, cutting the process down to 2 weeks and saving $136,000 annually."
      stats={stats}
    >
      <h2>The Challenge: 4-Month Manual Data Collection for 80 People</h2>
      <p>
        A major national readership survey tracking media consumption across thousands of publications faced a massive operational bottleneck. The facilitating research firm needed to collect circulation data from government databases, requiring 80 staff members working for 4 months, manually navigating websites, solving CAPTCHAs, and copying data into spreadsheets.
      </p>
      <p>
        Critical issues included:
      </p>
      <ul>
        <li><strong>Massive labor costs:</strong> 80 people × 4 months = 320 person-months of manual work annually</li>
        <li><strong>CAPTCHA barriers:</strong> Government websites used image-based CAPTCHAs that blocked automated access</li>
        <li><strong>Inconsistent data quality:</strong> Manual data entry led to typos, formatting errors, and missing records</li>
        <li><strong>Slow throughput:</strong> Each record took 15-20 minutes to collect manually</li>
        <li><strong>No scalability:</strong> As the survey scope grew, costs would balloon proportionally</li>
      </ul>

      <div className="key-takeaway-box">
        <h3>Key Takeaway from Challenge</h3>
        <p>
          When your core business process requires hundreds of person-months of manual labor, you&apos;re not just wasting money, you&apos;re creating a bottleneck that prevents growth. Automation isn&apos;t optional; it&apos;s survival.
        </p>
        <Link href="/inquiry-form" className="btn-cta">
          Automate Your Data Collection
        </Link>
      </div>

      <h2>The Solution: Distributed Web Scraping & AI-Powered OCR on AWS</h2>
      <p>
        We architected and deployed a full-stack automation platform that combined distributed web scraping with AI-powered optical character recognition (OCR) to handle CAPTCHAs and extract data at scale. The system ran on AWS infrastructure with intelligent queuing and error recovery.
      </p>

      <h3>Phase 1: Architecture & Infrastructure Setup</h3>
      <ul>
        <li>Designed distributed scraping architecture using Selenium Hub for parallel browser automation</li>
        <li>Deployed on AWS EC2 with auto-scaling groups to handle peak loads</li>
        <li>Set up S3 for data storage and CloudWatch for real-time monitoring and alerting</li>
        <li>Built multi-threaded Python application achieving 50x performance improvement</li>
      </ul>

      <h3>Phase 2: CAPTCHA Solving with Advanced OCR</h3>
      <ul>
        <li>Integrated Tesseract and EasyOCR for dual-pass image recognition</li>
        <li>Implemented preprocessing pipeline with contrast enhancement and noise reduction</li>
        <li>Built confidence scoring system to automatically retry low-confidence CAPTCHAs</li>
        <li>Achieved 97% accuracy in automated CAPTCHA solving</li>
      </ul>

      <h3>Phase 3: High-Throughput Data Extraction</h3>
      <ul>
        <li>Engineered intelligent queueing system to handle 4,000 records per hour</li>
        <li>Built automatic retry logic for failed requests with exponential backoff</li>
        <li>Created data validation layer to catch formatting errors before database insertion</li>
        <li>Implemented progress tracking and resume-from-failure capabilities</li>
      </ul>

      <h3>Phase 4: Error Handling & Quality Assurance</h3>
      <ul>
        <li>Built comprehensive error logging with categorization (network, CAPTCHA, data validation)</li>
        <li>Created admin dashboard for monitoring extraction progress and error rates</li>
        <li>Implemented automated quality checks comparing extracted data against known patterns</li>
        <li>Set up email alerts for critical failures requiring human intervention</li>
      </ul>

      <div className="proof-box">
        <h3>Client Testimonial</h3>
        <p>
          &quot;Engaging Siddharth for a critical software-automation project proved invaluable. He invested the time to understand our manual processes end-to-end and delivered a robust, efficient solution that saved us substantial time and resources. He&apos;s proactive, detail-oriented, and a fantastic collaborator. The communications and updates were very clear till the end, Siddharth is a fast executor, and equally strong on technical depth and business context. I recommend him without hesitation. Thanks again, Siddharth&quot;
        </p>
        <p className="text-sm text-gray-500 mt-4">
          — Ranjit M., Head of Projects & Technology at Insight To Strategy
        </p>
        <p className="text-xs text-gray-600 mt-2">
          <a
            href="https://www.upwork.com/freelancers/~01f6af0c0a5e5e5e5e"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-brand-blue"
          >
            Verified on Upwork
          </a>
        </p>
      </div>

      <h2>The Results: $136K Saved, 87.5% Time Reduction, 97% Accuracy</h2>
      <p>
        The automation platform went live in February 2025 and immediately transformed operations:
      </p>
      <ul>
        <li><strong>$136,000 annual cost savings:</strong> Reduced from 320 person-months to 40 person-months of work</li>
        <li><strong>87.5% time reduction:</strong> 4-month process completed in 2 weeks</li>
        <li><strong>50x performance improvement:</strong> From ~4 records/hour manually to 4,000 records/hour automated</li>
        <li><strong>97% data accuracy:</strong> OCR system matched or exceeded human accuracy for CAPTCHA solving</li>
        <li><strong>Zero manual CAPTCHA solving:</strong> Completely eliminated the most tedious bottleneck</li>
        <li><strong>Scalable infrastructure:</strong> System can now handle 10x more data without additional headcount</li>
        <li><strong>Reusable platform:</strong> Automation framework now deployed for other data collection projects</li>
      </ul>

      <div className="key-takeaway-box">
        <h3>Key Takeaway from Results</h3>
        <p>
          Six-figure cost savings from a single automation project isn&apos;t unusual, it&apos;s the norm when you identify the right process to automate. The ROI on intelligent automation typically pays back in weeks, not years.
        </p>
        <Link href="/inquiry-form" className="btn-cta">
          Discover Your Automation Opportunities
        </Link>
      </div>

      <h2>Technical Stack</h2>
      <ul>
        <li><strong>Cloud Infrastructure:</strong> AWS (EC2, S3, Lambda, CloudWatch)</li>
        <li><strong>Web Automation:</strong> Selenium Hub, multi-threaded Python</li>
        <li><strong>OCR & Computer Vision:</strong> Tesseract, EasyOCR, PIL for image preprocessing</li>
        <li><strong>Data Processing:</strong> Python with async/await, message queues for distributed processing</li>
        <li><strong>Monitoring:</strong> CloudWatch alerts, custom admin dashboard</li>
      </ul>

      <div className="cta-section">
        <h2>Save time and money like this client</h2>
        <p>
          If you&apos;re burning hundreds of hours on manual data collection, web scraping, or document processing, we can build you a custom automation platform that runs 24/7 at a fraction of the cost.
        </p>
        <Link href="/inquiry-form" className="btn-cta">
          Show Me How to Save
        </Link>
      </div>
    </CaseStudyLayout>
  );
}

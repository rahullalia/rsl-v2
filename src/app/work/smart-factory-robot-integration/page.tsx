import CaseStudyLayout from '@/components/CaseStudyLayout';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real-Time Robot Tracking for Automotive Manufacturing | RSL/A',
  description: 'How we engineered MQTT + REST API integration for autonomous mobile robots with digital twin platform, enabling 10Hz real-time tracking across manufacturing plants.',
  openGraph: {
    title: 'Real-Time Robot Tracking for Automotive Manufacturing',
    description: 'How we engineered MQTT + REST API integration for autonomous mobile robots with digital twin platform, enabling 10Hz real-time tracking across manufacturing plants.',
    url: 'https://www.rsla.io/work/smart-factory-robot-integration',
    siteName: 'RSL/A',
    type: 'article',
  },
};

export default function SmartFactoryRobotIntegrationPage() {
  const stats = [
    { value: '10Hz', label: 'Real-Time Data Streaming' },
    { value: 'Multi-Plant', label: 'Enterprise Scalability' },
    { value: 'OAuth 2.0', label: 'Secure Authentication' },
  ];

  return (
    <CaseStudyLayout
      tag="IoT & Industrial Automation"
      title="Real-Time Robot Tracking for Automotive Manufacturing"
      subtitle="One of the region's leading automotive manufacturers needed real-time visibility into autonomous mobile robots (AMRs) operating across their manufacturing facilities. We engineered a robust MQTT + REST API integration with their digital twin platform, enabling 10Hz position data streaming, multi-plant support, and secure per-device authentication."
      stats={stats}
    >
      <h2>The Challenge: No Real-Time Visibility into Factory Floor Robots</h2>
      <p>
        Factories of Future, a smart manufacturing solutions provider, was deploying autonomous mobile robots (AMRs) for one of the region&apos;s largest automotive manufacturers. The AMRs handled material transport across factory floors, but there was no centralized monitoring system. Operations teams had no real-time visibility into robot positions, status, or performance.
      </p>
      <p>
        Critical gaps included:
      </p>
      <ul>
        <li><strong>Zero real-time tracking:</strong> No way to monitor where robots were or what they were doing</li>
        <li><strong>Siloed vendor systems:</strong> AMR vendor&apos;s proprietary interface couldn&apos;t integrate with the manufacturer&apos;s digital twin platform (Twinzo)</li>
        <li><strong>Multi-plant complexity:</strong> The manufacturer operates multiple facilities with different coordinate systems and layouts</li>
        <li><strong>Security requirements:</strong> Enterprise-grade authentication needed for production floor IoT devices</li>
        <li><strong>Performance demands:</strong> Factory monitoring required near-instantaneous updates (10Hz data streaming)</li>
      </ul>

      <div className="key-takeaway-box">
        <h3>Key Takeaway from Challenge</h3>
        <p>
          In smart manufacturing, real-time visibility isn&apos;t a nice-to-have, it&apos;s the foundation of operational efficiency. When you can&apos;t see what&apos;s happening on your factory floor in real-time, you&apos;re flying blind.
        </p>
        <Link href="/inquiry-form" className="btn-cta">
          Integrate Your Industrial IoT Systems
        </Link>
      </div>

      <h2>The Solution: MQTT + REST API Integration with Digital Twin Platform</h2>
      <p>
        We engineered a bidirectional integration between the Hi-tech AMR vendor&apos;s control system and the manufacturer&apos;s Twinzo digital twin platform, using MQTT for real-time data streaming and REST APIs for command-and-control operations. The system supported multi-plant deployments with secure, per-device authentication.
      </p>

      <h3>Phase 1: Protocol Design & Architecture</h3>
      <ul>
        <li>Designed hybrid MQTT + REST architecture: MQTT for high-frequency position data, REST for control commands</li>
        <li>Collaborated with Hi-tech AMR vendor to understand their data format and API capabilities</li>
        <li>Architected message broker infrastructure for 10Hz real-time position streaming</li>
        <li>Built failover mechanisms for network interruptions and broker downtime</li>
      </ul>

      <h3>Phase 2: OAuth 2.0 Authentication & Multi-Plant Support</h3>
      <ul>
        <li>Implemented OAuth 2.0 per-device authentication for secure AMR-to-platform communication</li>
        <li>Created credential management system for onboarding and rotating device tokens</li>
        <li>Built plant-specific configuration layer for different coordinate systems and layouts</li>
        <li>Designed coordinate transformation pipeline to map AMR positions to digital twin coordinates</li>
      </ul>

      <h3>Phase 3: Real-Time Data Streaming & Visualization</h3>
      <ul>
        <li>Engineered MQTT subscriber handling 10Hz position updates from multiple AMRs simultaneously</li>
        <li>Built data normalization layer to handle vendor-specific message formats</li>
        <li>Integrated with Twinzo platform for real-time visualization of robot positions on factory layout</li>
        <li>Implemented status tracking for battery levels, task assignments, and error states</li>
      </ul>

      <h3>Phase 4: Documentation & Vendor Onboarding</h3>
      <ul>
        <li>Created comprehensive API integration documentation for AMR vendors</li>
        <li>Wrote onboarding guides with step-by-step setup instructions and code examples</li>
        <li>Developed troubleshooting playbook for common integration issues</li>
        <li>Conducted technical training sessions with client operations team and AMR vendor engineers</li>
      </ul>

      <div className="proof-box">
        <h3>Project Impact</h3>
        <p>
          This integration became the foundation for the manufacturer&apos;s smart factory monitoring infrastructure, enabling real-time oversight of material transport operations across multiple plants. The OAuth-based authentication system and comprehensive documentation reduced vendor onboarding time from weeks to days, making it easier to scale AMR deployments.
        </p>
      </div>

      <h2>The Results: Real-Time Factory Floor Visibility at Scale</h2>
      <p>
        The integration went live in August 2024 and is now running in production at the manufacturer&apos;s facilities:
      </p>
      <ul>
        <li><strong>10Hz real-time tracking:</strong> Position data updated 10 times per second for instantaneous visibility</li>
        <li><strong>Multi-plant deployment:</strong> Single platform monitoring AMRs across multiple facilities</li>
        <li><strong>Zero downtime:</strong> Built-in failover mechanisms ensure continuous monitoring even during network issues</li>
        <li><strong>Secure device authentication:</strong> OAuth 2.0 per-device tokens eliminate security vulnerabilities</li>
        <li><strong>Vendor-agnostic architecture:</strong> Documentation enables onboarding of new AMR vendors in days instead of weeks</li>
        <li><strong>Scalable infrastructure:</strong> System supports adding new robots and plants without code changes</li>
      </ul>

      <div className="key-takeaway-box">
        <h3>Key Takeaway from Results</h3>
        <p>
          Industrial IoT integration isn&apos;t just about connecting devices, it&apos;s about building scalable, secure infrastructure that works in the real world. Good architecture and documentation pay dividends every time you add a new plant or vendor.
        </p>
        <Link href="/inquiry-form" className="btn-cta">
          Build Your Industrial IoT Integration
        </Link>
      </div>

      <h2>Technical Stack</h2>
      <ul>
        <li><strong>Communication Protocols:</strong> MQTT for real-time streaming, REST APIs for control commands</li>
        <li><strong>Authentication:</strong> OAuth 2.0 per-device token management</li>
        <li><strong>Integration Platform:</strong> Twinzo digital twin platform</li>
        <li><strong>Data Processing:</strong> Real-time coordinate transformation, multi-threaded message handling</li>
        <li><strong>Vendor Collaboration:</strong> Hi-tech AMR systems, automotive manufacturing operations infrastructure</li>
      </ul>

      <div className="cta-section">
        <h2>Save time and money like this client</h2>
        <p>
          If you&apos;re deploying IoT devices, robots, or sensors on your factory floor but can&apos;t monitor them in real-time, we can build the integration infrastructure you need. Secure, scalable, and production-ready.
        </p>
        <Link href="/inquiry-form" className="btn-cta">
          Show Me How to Save
        </Link>
      </div>
    </CaseStudyLayout>
  );
}

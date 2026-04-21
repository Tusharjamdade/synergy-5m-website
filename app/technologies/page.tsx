import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { TechnologyCard } from '@/components/TechnologyCard';
import { CTASection } from '@/components/CTASection';
import {
  Code2,
  Zap,
  Cloud,
  Shield,
  Gauge,
  Layers,
  CheckCircle2,
  GitBranch,
  Server,
  Lock,
} from 'lucide-react';

export const metadata = {
  title: 'Technologies We Use - Synergy 5M',
  description: 'Discover the modern technology stack powering Synergy 5M solutions: .NET, React, and Azure.',
};

const technologies = [
  {
    icon: Code2,
    name: '.NET Framework',
    shortDesc: 'Enterprise Backend Development',
    longDesc: 'Built on Microsoft.NET, our backend solutions provide enterprise-grade reliability, scalability, and performance. We leverage the latest .NET technologies to build robust, secure applications that meet the most demanding business requirements.',
    features: [
      'ASP.NET Core for modern APIs',
      'Entity Framework for data access',
      'Azure integration',
      'Microservices architecture',
      'Advanced security frameworks',
      'High-performance computing',
    ],
  },
  {
    icon: Zap,
    name: 'React',
    shortDesc: 'Modern Frontend Development',
    longDesc: 'React powers our frontend solutions with efficient, responsive user interfaces. Our React expertise enables us to build fast, intuitive, and accessible applications that provide exceptional user experiences across all devices.',
    features: [
      'Component-based architecture',
      'Server-side rendering',
      'State management',
      'Progressive web apps',
      'Real-time data updates',
      'Responsive design',
    ],
  },
  {
    icon: Cloud,
    name: 'Microsoft Azure',
    shortDesc: 'Cloud Infrastructure & Services',
    longDesc: 'Azure cloud infrastructure provides our solutions with global scalability, reliability, and security. We leverage Azure&apos;s comprehensive services for deployment, management, and optimization of enterprise applications.',
    features: [
      'Global data center presence',
      'App Service hosting',
      'Database services',
      'AI and machine learning',
      'Security and compliance',
      'Cost optimization tools',
    ],
  },
];

const capabilities = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security with encryption, authentication, and compliance standards.',
  },
  {
    icon: Gauge,
    title: 'Performance',
    description: 'Optimized applications delivering fast load times and responsive user experiences.',
  },
  {
    icon: Layers,
    title: 'Scalability',
    description: 'Solutions designed to grow with your business from startup to enterprise scale.',
  },
  {
    icon: GitBranch,
    title: 'DevOps Ready',
    description: 'CI/CD pipelines for rapid deployment and continuous improvement.',
  },
  {
    icon: Server,
    title: 'Reliability',
    description: 'Built-in redundancy and disaster recovery for maximum uptime.',
  },
  {
    icon: Lock,
    title: 'Compliance',
    description: 'Meeting industry standards and regulations for data protection.',
  },
];

const supportingTechs = [
  { name: 'Azure DevOps', category: 'CI/CD & Deployment' },
  { name: 'Docker & Kubernetes', category: 'Containerization' },
  { name: 'TypeScript', category: 'Type-Safe Development' },
  { name: 'Next.js', category: 'Advanced React Framework' },
  { name: 'Tailwind CSS', category: 'UI/UX Design' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Caching & Performance' },
  { name: 'GraphQL', category: 'API Development' },
];

export default function TechnologiesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Modern Technology Stack"
          subtitle="Built for Enterprise Excellence"
          description="Discover the cutting-edge technologies that power Synergy 5M solutions. We use industry-leading tools and frameworks to deliver high-performance, scalable, and secure applications."
          primaryCta={{ label: 'View Our Stack', href: '#stack' }}
        />

        {/* Main Technologies */}
        <section id="stack" className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Our Core Technologies</h2>
              <p className="text-lg text-muted-foreground text-balance">
                Three pillars of our technical excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <TechnologyCard
                  key={index}
                  icon={tech.icon}
                  name={tech.name}
                  shortDesc={tech.shortDesc}
                  longDesc={tech.longDesc}
                  features={tech.features}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-12 sm:py-16 lg:py-20 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Technical Capabilities</h2>
              <p className="text-lg text-muted-foreground text-balance">
                What our technology stack enables us to deliver
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div key={index} className="bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{capability.title}</h3>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Supporting Technologies */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Supporting Technologies</h2>
              <p className="text-lg text-muted-foreground text-balance">
                Additional tools and frameworks that enhance our solutions
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {supportingTechs.map((tech, index) => (
                <div
                  key={index}
                  className="bg-primary/5 border border-primary/20 rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
                >
                  <h3 className="font-bold text-lg mb-1">{tech.name}</h3>
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                    {tech.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why These Technologies */}
        <section className="py-12 sm:py-16 lg:py-20 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold">Why These Technologies?</h2>
                <p className="text-lg text-muted-foreground text-balance">
                  We choose our technology stack based on proven performance, industry adoption, and future scalability.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: '.NET for Reliability',
                    description: 'The .NET ecosystem provides battle-tested frameworks, comprehensive security features, and exceptional performance for mission-critical applications.',
                  },
                  {
                    title: 'React for User Experience',
                    description: 'React&apos;s component-based architecture enables us to build responsive, interactive interfaces that users love, with exceptional development efficiency.',
                  },
                  {
                    title: 'Azure for Global Scale',
                    description: 'Azure&apos;s global infrastructure, AI capabilities, and integration with Microsoft products provide the foundation for enterprise-grade solutions that grow with your business.',
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-background border border-border rounded-lg p-6 flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Leverage Modern Technology?"
          description="Let&apos;s discuss how our technology expertise can drive your business transformation."
          primaryButtonLabel="Start a Project"
          primaryButtonHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { WhyUsSection } from '@/components/WhyUsSection';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import {
  Users,
  Cog,
  Package,
  Zap,
  TrendingUp,
  Award,
  Lightbulb,
  Handshake,
  Target,
  Rocket,
  Check,
} from 'lucide-react';

export const metadata = {
  title: 'Synergy 5M - Comprehensive Business Solutions',
  description: 'Synergy 5M specializes in Manpower, Machinery, Materials, Methods, and Money. Delivering excellence across all dimensions of your business.',
};

export default function Home() {
  const whyUsItems = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: 'Years of experience across multiple industries and markets.',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes and ROI.',
    },
    {
      icon: Handshake,
      title: 'Partnership Approach',
      description: 'We work closely with you as true partners in success.',
    },
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'Cutting-edge solutions tailored to your unique needs.',
    },
  ];

  const servicesPreview = [
    {
      icon: Users,
      title: 'Manpower',
      description: 'Strategic staffing and talent management solutions',
      details: ['Recruitment and selection', 'Team building', 'Training programs'],
    },
    {
      icon: Cog,
      title: 'Machinery',
      description: 'Equipment and technology optimization',
      details: ['Equipment selection', 'Maintenance planning', 'Tech integration'],
    },
    {
      icon: Package,
      title: 'Materials',
      description: 'Supply chain and material management',
      details: ['Procurement solutions', 'Inventory management', 'Quality assurance'],
    },
    {
      icon: Zap,
      title: 'Methods',
      description: 'Process improvement and optimization',
      details: ['Workflow analysis', 'Best practices', 'Efficiency gains'],
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Synergy 5M: Your Complete Business Solution"
          subtitle="Excellence Through the Five M&apos;s"
          description="Optimize every dimension of your business through integrated solutions in Manpower, Machinery, Materials, Methods, and Money. We provide comprehensive strategies that drive sustainable growth."
          primaryCta={{ label: 'Explore Services', href: '/services' }}
          secondaryCta={{ label: 'Learn More', href: '/about' }}
        />

        {/* Why Us Section */}
        <WhyUsSection
          title="Why Choose Synergy 5M?"
          description="We bring together the expertise and resources you need to succeed."
          items={whyUsItems}
        />

        {/* Services Preview */}
        <section className="py-12 sm:py-16 lg:py-20 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Our Services</h2>
              <p className="text-lg text-muted-foreground text-balance">
                Comprehensive solutions across all dimensions of business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesPreview.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  details={service.details}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/services"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
              >
                View all services <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ERP Solution Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 sm:p-10 lg:p-12 overflow-hidden relative">
              <div className="relative z-10">
                <div className="max-w-3xl">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
                    MSME ERP SYN-8
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    A practical, user-friendly ERP solution designed specifically for modern businesses. Launch under your own brand with full data ownership and deep customization.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm sm:text-base">Full data ownership on your Azure cloud</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm sm:text-base">One-time licensing, no subscriptions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm sm:text-base">White-label branding</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm sm:text-base">6 comprehensive modules</span>
                    </div>
                  </div>

                  <a href="/erp" className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity">
                    Explore ERP Solution <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Technologies We Use</h2>
              <p className="text-lg text-muted-foreground text-balance">
                Built on the most reliable and modern technology stack
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">.NET Framework</h3>
                <p className="text-muted-foreground">
                  Robust backend development with enterprise-grade reliability and scalability.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">React</h3>
                <p className="text-muted-foreground">
                  Modern frontend development for responsive and intuitive user experiences.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Azure Cloud</h3>
                <p className="text-muted-foreground">
                  Cloud-based solutions ensuring reliability, security, and global scalability.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="/technologies"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
              >
                Explore our tech stack <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Transform Your Business?"
          description="Let&apos;s work together to unlock your full potential across all dimensions of your operations."
          primaryButtonLabel="Get in Touch"
          primaryButtonHref="/contact"
          secondaryButtonLabel="Schedule a Consultation"
          secondaryButtonHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}

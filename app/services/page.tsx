import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { ServiceCard } from '@/components/ServiceCard';
import { CTASection } from '@/components/CTASection';
import {
  Users,
  Cog,
  Package,
  Zap,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Shield,
  Clipboard,
  DollarSign,
} from 'lucide-react';

export const metadata = {
  title: 'Our Services - Synergy 5M',
  description: 'Explore our comprehensive services across Manpower, Machinery, Materials, Methods, and Money.',
};

const services = [
  {
    id: 'manpower',
    icon: Users,
    title: 'Manpower Solutions',
    shortDescription: 'Strategic staffing and talent management',
    fullDescription: 'Our manpower solutions are designed to optimize your human capital. We provide comprehensive recruitment, training, and development programs to build high-performing teams that drive your business forward.',
    features: [
      'Executive recruitment and placement',
      'Talent acquisition and selection',
      'Training and development programs',
      'Team building and culture development',
      'Performance management systems',
      'Workforce planning and forecasting',
    ],
  },
  {
    id: 'machinery',
    icon: Cog,
    title: 'Machinery & Equipment',
    shortDescription: 'Equipment optimization and technology integration',
    fullDescription: 'We provide expert guidance on machinery selection, maintenance, and optimization. Our solutions ensure your equipment operates at peak efficiency while minimizing downtime and extending asset lifespan.',
    features: [
      'Equipment selection and procurement',
      'Preventive maintenance planning',
      'Technology integration and automation',
      'Asset lifecycle management',
      'Efficiency audits and optimization',
      'Emergency support and troubleshooting',
    ],
  },
  {
    id: 'materials',
    icon: Package,
    title: 'Materials Management',
    shortDescription: 'Supply chain and inventory optimization',
    fullDescription: 'Our materials management services optimize your supply chain from procurement to delivery. We implement systems that reduce costs, improve quality, and ensure timely availability of all resources.',
    features: [
      'Supplier sourcing and management',
      'Procurement strategy optimization',
      'Inventory management systems',
      'Quality assurance and control',
      'Logistics and distribution planning',
      'Cost reduction initiatives',
    ],
  },
  {
    id: 'methods',
    icon: Zap,
    title: 'Process & Methods',
    shortDescription: 'Operational excellence and continuous improvement',
    fullDescription: 'We analyze and optimize your business processes to eliminate waste, improve quality, and enhance productivity. Our methods-driven approach ensures sustainable operational improvements.',
    features: [
      'Process mapping and analysis',
      'Lean and Six Sigma implementation',
      'Workflow optimization',
      'Quality improvement initiatives',
      'Standard operating procedures',
      'Continuous improvement programs',
    ],
  },
  {
    id: 'money',
    icon: DollarSign,
    title: 'Financial Management',
    shortDescription: 'Strategic financial planning and optimization',
    fullDescription: 'Our financial management services help you optimize capital allocation, improve cash flow, and maximize profitability. We provide strategic financial planning that aligns with your business goals.',
    features: [
      'Financial planning and analysis',
      'Cost optimization strategies',
      'Budget management and forecasting',
      'Cash flow management',
      'Investment analysis',
      'ROI maximization',
    ],
  },
];

export default function ServicesPage() {
  const benefits = [
    {
      icon: CheckCircle2,
      title: 'Proven Results',
      description: 'Deliver tangible improvements across all operational dimensions',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven',
      description: 'Make informed decisions backed by thorough analysis and metrics',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business needs',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identify and mitigate risks across all operations',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Comprehensive Service Solutions"
          subtitle="The Five M&apos;s of Business Excellence"
          description="Explore our full range of services designed to optimize every aspect of your operations and drive sustainable growth."
          primaryCta={{ label: 'Get Started', href: '/contact' }}
        />

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Service Benefits</h2>
              <p className="text-lg text-muted-foreground text-balance">
                What you gain from partnering with Synergy 5M
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div key={service.id} id={service.id} className="scroll-mt-20">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                    {/* Content */}
                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                          <service.icon className="h-7 w-7 text-primary" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold">{service.title}</h2>
                      </div>

                      <p className="text-lg text-muted-foreground">{service.fullDescription}</p>

                      <div className="space-y-3">
                        <h3 className="font-bold text-lg">Key Features:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Visual Card */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-12 flex flex-col items-center justify-center min-h-[400px]">
                        <service.icon className="h-24 w-24 text-primary opacity-20 mb-6" />
                        <h3 className="text-2xl font-bold text-center text-muted-foreground">
                          {service.title}
                        </h3>
                        <p className="text-center text-muted-foreground mt-2">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < services.length - 1 && (
                    <div className="my-16 border-t border-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Optimize Your Operations?"
          description="Let&apos;s discuss how our services can help you achieve excellence across all dimensions of your business."
          primaryButtonLabel="Schedule Consultation"
          primaryButtonHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}

'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import {
  BarChart3,
  Check,
  CheckCircle2,
  Cloud,
  Database,
  Lock,
  Package,
  ShoppingCart,
  Users,
  Zap,
  TrendingUp,
  Shield,
  Building2,
} from 'lucide-react';

export default function ERPPage() {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Sales & Distribution',
      description: 'Complete warehouse inventory management with order processing and dispatch tracking.',
      modules: ['Sales Orders', 'Invoicing', 'Warehouse Management', 'Zone-wise Analytics'],
    },
    {
      icon: Package,
      title: 'Materials Management',
      description: 'Raw materials inventory control with purchase orders and supplier management.',
      modules: ['Purchase Orders', 'Inventory Tracking', 'Vendor Management', 'RFQ Processing'],
    },
    {
      icon: Zap,
      title: 'Production Management',
      description: 'Production planning and execution with semi-finished inventory and machine utilization tracking.',
      modules: ['Production Planning', 'Machine Settings', 'Capacity Planning', 'BOM Management'],
    },
    {
      icon: CheckCircle2,
      title: 'Quality Control',
      description: 'Comprehensive QC processes for inward, outward, and semi-finished products.',
      modules: ['Inward QC', 'Outward QC', 'Product Standards', 'Testing Records'],
    },
    {
      icon: Users,
      title: 'Human Resource Management',
      description: 'Employee management with attendance tracking and payroll processing.',
      modules: ['Employee Masters', 'Attendance Tracking', 'Payroll Management', 'Department Analytics'],
    },
    {
      icon: BarChart3,
      title: 'Accounts & Finance',
      description: 'Financial management and accounting with comprehensive reporting capabilities.',
      modules: ['General Ledger', 'Financial Reports', 'GST Management', 'Bank Reconciliation'],
    },
  ];

  const benefits = [
    {
      icon: Building2,
      title: 'Fully Customizable Workflows',
      description: 'Tailor the ERP system to match your specific business operations and processes without limitations.',
    },
    {
      icon: Shield,
      title: 'White Label Branding',
      description: 'Launch the ERP under your own brand name and logo for a seamless branded experience.',
    },
    {
      icon: TrendingUp,
      title: 'One-Time Cost Model',
      description: 'Simple licensing with one-time fees—no recurring subscription charges or hidden costs.',
    },
    {
      icon: Lock,
      title: 'Data Ownership & Security',
      description: 'Your business data is stored on your own Azure cloud account. You retain full control and ownership.',
    },
    {
      icon: Cloud,
      title: 'Hybrid Infrastructure',
      description: 'Software runs from our dedicated servers for performance, while your data stays with you securely.',
    },
    {
      icon: Check,
      title: 'Industry Expertise',
      description: 'Developed by professionals with 30+ years of cross-sector experience and practical knowledge.',
    },
  ];

  const comparison = [
    { feature: 'Branding', synergy: 'Fully under your brand', saas: 'Vendor-branded' },
    { feature: 'Customization', synergy: 'Deep customization possible', saas: 'Limited customization' },
    { feature: 'Data Ownership', synergy: 'Full control over data', saas: 'Data on vendor servers' },
    { feature: 'Deployment', synergy: 'On-premise or private cloud', saas: 'Vendor hosted' },
    { feature: 'Pricing', synergy: 'One-time or tailored', saas: 'Monthly/yearly subscription' },
    { feature: 'Scalability', synergy: 'Custom-scaled to your needs', saas: 'Standard packages' },
    { feature: 'Integration', synergy: 'Easy legacy system integration', saas: 'Limited API access' },
    { feature: 'Compliance', synergy: 'Localized compliance', saas: 'Generic compliance' },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroSection
          title="MSME ERP SYN-8"
          subtitle="Enterprise Resource Planning for Your Business"
          description="A practical, user-friendly, and business-centric ERP solution developed by Synergy 5M. Empower your business with a fully customized ERP under your own brand—no generic fit."
        />

        {/* Key Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance">
                Comprehensive ERP Modules
              </h2>
              <p className="text-lg text-muted-foreground">
                Six integrated modules covering all aspects of your business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group rounded-xl border border-border bg-card p-5 sm:p-6 lg:p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.modules.map((module, idx) => (
                        <li key={idx} className="text-sm flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                Why Choose MSME ERP SYN-8?
              </h2>
              <p className="text-lg text-muted-foreground">
                A white-label ERP solution designed for modern businesses that demand control and flexibility.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mx-auto sm:mx-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-base sm:text-lg font-bold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance">
                MSME ERP SYN-8 vs Standard SaaS ERP
              </h2>
              <p className="text-lg text-muted-foreground">
                See how our solution compares to traditional SaaS ERP platforms.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-secondary">
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">Feature</th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base text-primary">
                      MSME ERP SYN-8
                    </th>
                    <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">
                      SaaS ERP
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-secondary/20'}>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-sm sm:text-base">{row.feature}</td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-primary font-semibold">
                        {row.synergy}
                      </td>
                      <td className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-muted-foreground">
                        {row.saas}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Features Highlight */}
        <section className="py-12 sm:py-16 lg:py-20 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                Core Features
              </h2>
              <p className="text-lg text-muted-foreground">
                Built with the business owner&apos;s perspective in mind.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  title: 'Simplified Interface',
                  description: 'Industry-friendly language with no jargon. Easy for any staff to understand and use.',
                },
                {
                  title: 'Master-Driven Flexibility',
                  description: 'Define and manage master data structures the way your business operates.',
                },
                {
                  title: 'Owner-Centric Design',
                  description: 'Built prioritizing visibility, efficiency, control, and ease of use for business owners.',
                },
                {
                  title: 'Security & Compliance',
                  description: 'Role-based access control, on-premise/private cloud hosting, industry-specific compliance.',
                },
                {
                  title: 'Scalable Architecture',
                  description: 'Grows with your business. Custom-scaled to match your operational requirements.',
                },
                {
                  title: '30+ Years Expertise',
                  description: 'Developed by professionals with decades of cross-sector industry knowledge.',
                },
              ].map((feature, index) => (
                <div key={index} className="bg-background rounded-lg border border-border p-5 sm:p-6 lg:p-8">
                  <h3 className="text-base sm:text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-balance">
                Ready to Transform Your Business?
              </h2>
              <p className="text-base sm:text-lg opacity-90">
                Discover how MSME ERP SYN-8 can empower your organization with industry-leading features and unparalleled control.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4 w-full">
                <a href="/contact" className="w-full sm:w-auto">
                  <Button
                    className="w-full sm:w-auto bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
                  >
                    Schedule a Demo
                  </Button>
                </a>
                <a href="https://maps.app.goo.gl/eJxBstuCEfvShpAp7?g_st=aw" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base"
                  >
                    Visit Our Office
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="text-center mb-10 sm:mb-12 lg:mb-16 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Common questions about our ERP solution.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  q: 'Is the ERP fully customizable?',
                  a: 'Yes, MSME ERP SYN-8 offers deep customization to match your specific business workflows and requirements. You can tailor workflows, reports, and modules exactly as needed.',
                },
                {
                  q: 'Who owns the data?',
                  a: 'You do. All your business data is stored on your own Azure cloud account, giving you complete ownership and control. The software runs from our servers for optimal performance.',
                },
                {
                  q: 'What about compliance and security?',
                  a: 'The ERP includes role-based access control, industry-specific compliance features, and can be deployed on-premise or on a private cloud. Security is built-in at every level.',
                },
                {
                  q: 'Is it a subscription service?',
                  a: 'No. MSME ERP SYN-8 uses a one-time licensing model. After the initial fee, there are no recurring subscription charges—keeping your costs predictable and budget-friendly.',
                },
                {
                  q: 'Can we integrate with existing systems?',
                  a: 'Yes. The ERP is designed for easy integration with legacy systems and existing business applications, ensuring smooth migration.',
                },
                {
                  q: 'Do we need specialized staff?',
                  a: 'No. The interface uses simple, industry-friendly language with no technical jargon. Any business staff can learn and use it without expensive training.',
                },
              ].map((faq, index) => (
                <div key={index} className="border border-border rounded-lg p-5 sm:p-6 lg:p-8">
                  <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-primary">{faq.q}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

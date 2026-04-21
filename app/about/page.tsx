import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { CTASection } from '@/components/CTASection';
import {
  Target,
  Heart,
  Zap,
  Users,
  TrendingUp,
  CheckCircle2,
  Award,
  Globe,
  Handshake,
} from 'lucide-react';

export const metadata = {
  title: 'About Synergy 5M',
  description: 'Learn more about Synergy 5M, our mission, values, and commitment to business excellence.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We pursue perfection in everything we do, setting high standards and continuously improving.',
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'We believe in collaborative relationships where your success is our success.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace new ideas and technologies to stay ahead of industry trends.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We operate with transparency and honesty in all our dealings and commitments.',
    },
  ];

  const achievements = [
    {
      number: '500+',
      label: 'Successful Projects',
      description: 'Delivered across multiple industries',
    },
    {
      number: '50+',
      label: 'Industry Experts',
      description: 'On our dedicated team',
    },
    {
      number: '20+',
      label: 'Years of Experience',
      description: 'In business optimization',
    },
    {
      number: '95%',
      label: 'Client Satisfaction',
      description: 'Consistent excellence',
    },
  ];

  const teamRoles = [
    'Strategic Management',
    'Technical Architecture',
    'Project Management',
    'Quality Assurance',
    'Business Analysis',
    'Solution Design',
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroSection
          title="About Synergy 5M"
          subtitle="Our Story"
          description="Synergy 5M was founded on the belief that business success comes from optimizing all five critical dimensions: Manpower, Machinery, Materials, Methods, and Money. For over two decades, we've been helping organizations achieve operational excellence."
        />

        {/* Mission & Vision */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Target className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      To empower organizations to achieve sustainable growth and competitive advantage by optimizing all dimensions of their business operations. We partner with our clients to implement comprehensive, integrated solutions that drive measurable results.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Globe className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      To be the leading provider of integrated business solutions globally, recognized for our expertise, innovation, and impact. We envision a world where every organization can unlock its full potential through strategic optimization of all five M's.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-12 sm:py-16 lg:py-20 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Our Core Values</h2>
              <p className="text-lg text-muted-foreground text-balance">
                These principles guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-background rounded-lg p-6 border border-border hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">By The Numbers</h2>
              <p className="text-lg text-muted-foreground text-balance">
                Our proven track record of success
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6">
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <p className="font-semibold text-lg mb-2">{achievement.label}</p>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-12 sm:py-16 lg:py-20 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Our Team</h2>
              <p className="text-lg text-muted-foreground text-balance">
                Experienced professionals dedicated to your success
              </p>
            </div>

            <div className="bg-background rounded-2xl p-8 sm:p-12 border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start gap-4">
                  <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Expert Leadership</h3>
                    <p className="text-muted-foreground">
                      Our leadership team brings decades of combined experience across industries, ensuring strategic direction and exceptional execution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Certified Professionals</h3>
                    <p className="text-muted-foreground">
                      All team members hold relevant certifications and maintain continuous professional development to stay current with industry best practices.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4">Our Expertise</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {teamRoles.map((role, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Why Partner With Us?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: 'Proven Results',
                  description: 'We deliver measurable improvements in efficiency, profitability, and growth.',
                },
                {
                  icon: Target,
                  title: 'Tailored Solutions',
                  description: 'Our approach is customized to your unique business needs and goals.',
                },
                {
                  icon: Zap,
                  title: 'Rapid Implementation',
                  description: 'We work efficiently to minimize disruption and maximize quick wins.',
                },
                {
                  icon: Heart,
                  title: 'Long-term Support',
                  description: 'Your success doesn&apos;t end at project completion. We&apos;re here for the journey.',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Let's Work Together"
          description="Ready to transform your business? Get in touch with our team today."
          primaryButtonLabel="Contact Us"
          primaryButtonHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}

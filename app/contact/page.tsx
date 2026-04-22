'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const metadata = {
  title: 'Contact Us - Synergy 5M',
  description: 'Get in touch with Synergy 5M. We&apos;re here to help with your business optimization needs.',
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`New Contact Request from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
      );
      
      // Open default email client
      window.location.href = `mailto:info@synergy5m.com?subject=${subject}&body=${body}`;
      
      // Show success message
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Get in Touch"
          subtitle="We&apos;d Love to Hear From You"
          description="Have questions about our services? Want to discuss how we can help optimize your business? Reach out to our team today."
        />

        {/* Contact Information & Form */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
              {/* Contact Info Cards */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a
                  href="mailto:info@synergy5m.com"
                  className="text-primary hover:underline font-semibold text-sm sm:text-base break-all sm:break-normal"
                >
                  info@synergy5m.com
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  We&apos;ll respond within 24 hours
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <a
                  href="tel:+919423579446"
                  className="text-primary hover:underline font-semibold text-sm sm:text-base"
                >
                  +91 9423579446
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Available for consultations
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-sm font-semibold mb-2">
                  Pimple Saudagar, Pune
                </p>
                <a
                  href="https://maps.app.goo.gl/eJxBstuCEfvShpAp7?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold text-sm"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto px-0">
              <div className="bg-secondary/50 rounded-xl p-6 sm:p-8 border border-border">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                {submitted && (
                  <div className="mb-6 p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary">
                    <p className="font-semibold">
                      Thank you! Your message has been sent. We&apos;ll be in touch soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business needs..."
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base font-semibold gap-2"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-6">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-8 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Visit Our Office</h2>
              <p className="text-lg text-muted-foreground text-balance">
                Located at a convenient location for easy access
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg border border-border h-64 sm:h-80 lg:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.2411223849726!2d77.19050097353663!3d28.627088675820697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd288b37c8bf%3A0x6e1d4f13d5f1d5f1!2sNew%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://maps.app.goo.gl/eJxBstuCEfvShpAp7?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
              >
                Open in Google Maps <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Quick Response Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">Why Reach Out?</h2>
              <p className="text-lg text-muted-foreground">
                Whether you&apos;re exploring solutions for the first time or ready to implement comprehensive business optimization, we&apos;re here to help.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {[
                  {
                    title: 'Quick Response',
                    description: 'Expect to hear back from us within 24 hours',
                  },
                  {
                    title: 'Expert Consultation',
                    description: 'Get insights from our experienced business consultants',
                  },
                  {
                    title: 'Tailored Solutions',
                    description: 'We develop customized approaches for your specific needs',
                  },
                ].map((item, index) => (
                  <div key={index} className="p-6">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

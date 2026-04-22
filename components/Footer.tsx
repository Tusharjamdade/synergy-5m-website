'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Synergy 5M Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-bold">Synergy 5M</span>
            </div>
            <p className="text-sm opacity-90">
              Excellence in Manpower, Machinery, Materials, Methods, and Money.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm hover:opacity-80 transition-opacity">
                Home
              </Link>
              <Link href="/services" className="text-sm hover:opacity-80 transition-opacity">
                Services
              </Link>
              <Link href="/erp" className="text-sm hover:opacity-80 transition-opacity">
                ERP Solution
              </Link>
              <Link href="/technologies" className="text-sm hover:opacity-80 transition-opacity">
                Technologies
              </Link>
              <Link href="/about" className="text-sm hover:opacity-80 transition-opacity">
                About Us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/services#manpower" className="text-sm hover:opacity-80 transition-opacity">
                Manpower
              </Link>
              <Link href="/services#machinery" className="text-sm hover:opacity-80 transition-opacity">
                Machinery
              </Link>
              <Link href="/services#materials" className="text-sm hover:opacity-80 transition-opacity">
                Materials
              </Link>
              <Link href="/services#methods" className="text-sm hover:opacity-80 transition-opacity">
                Methods
              </Link>
              <Link href="/services#money" className="text-sm hover:opacity-80 transition-opacity">
                Money
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="flex flex-col gap-2">
              <a href="mailto:info@synergy5m.com" className="text-sm hover:opacity-80 transition-opacity">
                info@synergy5m.com
              </a>
              <a href="tel:+919423579446" className="text-sm hover:opacity-80 transition-opacity">
                +91 9423579446
              </a>
              <a
                href="https://maps.app.goo.gl/eJxBstuCEfvShpAp7?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:opacity-80 transition-opacity"
              >
                Pune, India
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20" />

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <p>&copy; {currentYear} Synergy 5M. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

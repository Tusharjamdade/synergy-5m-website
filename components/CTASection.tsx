import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryButtonLabel?: string;
  primaryButtonHref?: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
  centered?: boolean;
}

export function CTASection({
  title,
  description,
  primaryButtonLabel = 'Get Started',
  primaryButtonHref = '/contact',
  secondaryButtonLabel,
  secondaryButtonHref,
  centered = true,
}: CTASectionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className={`${centered ? 'text-center max-w-3xl mx-auto' : ''} space-y-6`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{title}</h2>
          {description && <p className="text-lg opacity-90 text-balance">{description}</p>}

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <Link href={primaryButtonHref}>
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-12 px-8 text-base gap-2">
                {primaryButtonLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            {secondaryButtonLabel && secondaryButtonHref && (
              <Link href={secondaryButtonHref}>
                <Button
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 h-12 px-8 text-base"
                >
                  {secondaryButtonLabel}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

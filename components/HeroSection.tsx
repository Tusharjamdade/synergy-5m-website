import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen sm:min-h-[600px] flex items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text readability */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/40" />
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center w-full">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {/* Subtitle/Tagline */}
          {subtitle && (
            <p className="text-primary text-base sm:text-lg font-semibold">{subtitle}</p>
          )}

          {/* Main Title */}
          <h1 className={`${backgroundImage ? 'text-white' : 'text-foreground'} text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance`}>
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className={`text-base sm:text-lg ${backgroundImage ? 'text-white/90' : 'text-muted-foreground'} max-w-2xl mx-auto text-balance`}>
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              {primaryCta && (
                <Link href={primaryCta.href} className="w-full sm:w-auto">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base gap-2 w-full sm:w-auto">
                    {primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className={`h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto ${backgroundImage ? 'border-white text-white hover:bg-white/10' : ''}`}
                  >
                    {secondaryCta.label}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

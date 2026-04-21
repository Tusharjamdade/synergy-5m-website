import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface WhyUsItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface WhyUsSectionProps {
  title: string;
  description?: string;
  items: WhyUsItem[];
}

export function WhyUsSection({ title, description, items }: WhyUsSectionProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
          {description && <p className="text-lg text-muted-foreground text-balance">{description}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

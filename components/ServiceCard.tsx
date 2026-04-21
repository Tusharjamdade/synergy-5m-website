import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details?: string[];
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  details,
}: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow border-0 bg-card">
      <CardHeader className="pb-3">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-base mt-2">{description}</CardDescription>
      </CardHeader>
      {details && details.length > 0 && (
        <CardContent>
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary font-bold mt-1">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
}

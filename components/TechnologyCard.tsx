import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface TechnologyCardProps {
  icon: LucideIcon;
  name: string;
  shortDesc: string;
  longDesc: string;
  features?: string[];
}

export function TechnologyCard({
  icon: Icon,
  name,
  shortDesc,
  longDesc,
  features,
}: TechnologyCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow border-0 bg-card hover:border-primary/20">
      <CardHeader className="pb-3">
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold text-center">{name}</CardTitle>
        <CardDescription className="text-center text-base mt-2">{shortDesc}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{longDesc}</p>
        {features && features.length > 0 && (
          <div className="space-y-2 pt-2 border-t">
            <p className="text-sm font-semibold">Key Features:</p>
            <ul className="space-y-1">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

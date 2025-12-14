import { StalledTasksSection } from '@/components/StalledTasksSection';
import { HolidaySettings } from '@/components/HolidaySettings';
import { BarChart3 } from 'lucide-react';

export const Analytics = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <BarChart3 className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">Analytics</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Monitor task progress and identify bottlenecks in your workflow
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Stalled Tasks Section */}
        <StalledTasksSection />

        {/* Admin Options - Holiday Settings */}
        <HolidaySettings />
      </div>
    </div>
  );
};

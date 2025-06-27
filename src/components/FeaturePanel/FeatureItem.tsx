import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the FeatureItem component.
 */
interface FeatureItemProps {
  /**
   * The icon component to display. Should be a lucide-react icon.
   */
  icon: React.ElementType;
  /**
   * The text content for the feature item.
   */
  children: React.ReactNode;
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * A single feature item component displaying an icon and a text description.
 * It is designed to be used within a FeatureList.
 */
const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, children, className }) => {
  return (
    // Layout based on requirements: flex-row, items-center, gap-4
    <div className={cn("flex flex-row items-center gap-4", className)}>
      <Icon className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
      <span className="text-sm text-muted-foreground">
        {children}
      </span>
    </div>
  );
};

export default FeatureItem;

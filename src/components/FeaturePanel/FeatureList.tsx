import React from 'react';
import { cn } from '@/lib/utils';
import { CodeXml, Database, Globe, Sidebar } from 'lucide-react';
import FeatureItem from './FeatureItem';

/**
 * Type definition for a single feature.
 */
interface Feature {
  readonly id: number;
  readonly icon: React.ElementType;
  readonly text: string;
}

// Data for the features list.
// Note: "Connect Supabase for backend" is inferred from the partially visible text in the reference image.
const featuresData: readonly Feature[] = [
  {
    id: 1,
    icon: Database,
    text: "Connect Supabase for backend",
  },
  {
    id: 2,
    icon: CodeXml,
    text: "Collaborate at source, via GitHub",
  },
  {
    id: 3,
    icon: Globe,
    text: "Deploy when you're ready",
  },
  {
    id: 4,
    icon: Sidebar, // The icon in the image resembles a sidebar or panel.
    text: "Chat with AI in the sidebar",
  },
];

/**
 * Props for the FeatureList component.
 */
interface FeatureListProps {
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * A component that renders a vertical list of features.
 * It uses the FeatureItem component to display each feature.
 */
const FeatureList: React.FC<FeatureListProps> = ({ className }) => {
  return (
    // Layout based on requirements: flex-col, items-start, gap-4, py-2
    <div className={cn("flex flex-col items-start gap-4 py-2", className)}>
      {featuresData.map((feature) => (
        <FeatureItem key={feature.id} icon={feature.icon}>
          {feature.text}
        </FeatureItem>
      ))}
    </div>
  );
};

export default FeatureList;

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
 * Animation variants for each feature item.
 * Defines the hidden (initial) and visible (animated) states.
 */
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

/**
 * A single feature item component displaying an icon and a text description.
 * It is designed to be used within a FeatureList.
 * This component is now animated using framer-motion.
 */
const FeatureItem: React.FC<FeatureItemProps> = ({ icon: Icon, children, className }) => {
  return (
    // This is now a motion component, inheriting animation controls from its parent.
    <motion.div
      className={cn("flex flex-row items-center gap-4 w-full", className)}
      variants={itemVariants}
    >
      <Icon className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
      <span className="text-sm text-muted-foreground">
        {children}
      </span>
    </motion.div>
  );
};

export default FeatureItem;
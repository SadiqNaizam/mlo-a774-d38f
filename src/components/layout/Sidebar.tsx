import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the Sidebar component.
 * Extends standard HTML aside attributes.
 */
interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The content to be displayed within the sidebar.
   */
  children: React.ReactNode;
}

/**
 * A reusable Sidebar layout component for the Feature Panel UI.
 * It provides a consistent container for sidebar content, adhering to the
 * project's layout and styling requirements. It is designed to be responsive,
 * hiding on smaller screens by default.
 */
const Sidebar: React.FC<SidebarProps> = ({ children, className, ...props }) => {
  return (
    <aside
      className={cn(
        // Responsive visibility: hidden on small screens, flex on medium and up.
        "hidden md:flex flex-col",
        // Sizing from layout requirements.
        "w-64", 
        // Style for a full-height sidebar.
        "h-screen",
        // Theming from tailwind config.
        "bg-background", 
        // A border to separate from main content.
        "border-r border-border",
        // Padding for the content within the sidebar.
        "p-4",
        className
      )}
      {...props}
    >
      {children}
    </aside>
  );
};

export default Sidebar;

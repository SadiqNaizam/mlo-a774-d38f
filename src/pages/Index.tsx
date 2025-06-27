import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import FeatureList from '../components/FeaturePanel/FeatureList';
import { motion } from 'framer-motion';

/**
 * The main page component for the Feature Panel UI application.
 * 
 * This page demonstrates the primary layout, consisting of a sidebar that contains the
 * feature panel and a main content area. Both sections are now animated on load.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* 
        The Sidebar component acts as the container for our feature list,
        adhering to the specified layout requirements (e.g., width, responsive visibility).
      */}
      <Sidebar>
        {/* 
          The FeatureList component is the core of the feature panel, rendering the list
          of individual features with a staggered animation.
        */}
        <FeatureList />
      </Sidebar>

      {/* The main content area, now animated to fade in after the sidebar. */}
      <motion.main
        className="flex-1 p-6 md:p-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex h-full items-center justify-center rounded-lg border-2 border-dashed border-border bg-card">
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-primary-foreground">
              Feature Panel UI
            </h1>
            <p className="mt-2 text-muted-foreground">
              The feature list is displayed in the sidebar to your left.
            </p>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default IndexPage;
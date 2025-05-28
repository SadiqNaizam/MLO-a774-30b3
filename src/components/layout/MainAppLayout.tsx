import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';
import Sidebar from './Sidebar';

interface MainAppLayoutProps {
  children: React.ReactNode;
  rightSidebarContent?: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, rightSidebarContent }) => {
  const mainContentMrClass = rightSidebarContent ? 'mr-80' : ''; // Corresponds to w-80 for right sidebar

  return (
    <div className="min-h-screen bg-background">
      <Header /> {/* Fixed, h-16 (4rem via TopHeader), z-30 */}

      {/* Container for content below the fixed header */}
      {/* pt-16 offsets content for the h-16 header */}
      <div className="flex h-screen pt-16">
        
        {/* Left Sidebar Area */}
        {/* Fixed width: w-64 (16rem) */}
        {/* Height: Full height below header (calc(100vh - 4rem)) */}
        {/* Position: Fixed to the left, below header */}
        {/* z-20 to be below header but above main content if needed, though typically not overlapping */}
        <aside className="fixed top-16 left-0 z-20 w-64 h-[calc(100vh-4rem)]">
          <Sidebar /> {/* Sidebar renders SidebarNav which has bg-card, flex-col, h-full, overflow-auto */}
        </aside>

        {/* Main Content Area */}
        {/* This div takes the remaining flexible space and handles its own scrolling */}
        {/* Margin left: w-64 (for fixed left sidebar) */}
        {/* Margin right: w-80 (if right sidebar is present and fixed) */}
        {/* h-full ensures it uses the available height within the pt-16 flex container */}
        {/* overflow-y-auto allows main content to scroll independently */}
        <div className={cn(
          "flex-1 h-full overflow-y-auto ml-64",
           mainContentMrClass
        )}>
          {/* Layout Requirements for mainContent: padding p-6 */}
          {/* Layout Requirements for mainContent.container: flex flex-col gap-6 */}
          {/* min-w-0 is crucial for flex items that might otherwise overflow */}
          <main className="min-w-0 p-6">
            <div className="flex flex-col gap-6">
              {children}
            </div>
          </main>
        </div>

        {/* Right Sidebar Area */}
        {rightSidebarContent && (
          // Fixed width: w-80 (20rem)
          // Height: Full height below header (calc(100vh - 4rem))
          // Position: Fixed to the right, below header
          // bg-card as per layout requirements (bg-surface)
          // border-l for separation
          <aside className="fixed top-16 right-0 z-20 w-80 h-[calc(100vh-4rem)] border-l border-border bg-card">
            {/* Inner div handles padding and scrolling for right sidebar content */}
            {/* Layout requirements for rightSidebar: flex flex-col, scrollable, bg-surface. h-screen is conceptual. */}
            <div className="h-full flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-muted p-4 space-y-6">
              {rightSidebarContent}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default MainAppLayout;

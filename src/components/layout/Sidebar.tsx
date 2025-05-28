import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // The parent <aside> in MainAppLayout controls width (w-64).
  // SidebarNav component is responsible for its own width (w-64), background (bg-card),
  // layout (flex flex-col), height (h-full), and scrolling (overflow-y-auto).
  return (
    <div className={cn(
      'h-full w-full', // Sidebar component itself fills its allocated space
      className
    )}>
      <SidebarNav />
    </div>
  );
};

export default Sidebar;

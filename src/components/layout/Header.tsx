import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Dashboard/TopHeader';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // TopHeader component defines its height, background, text color, flex properties, padding, and shadow.
  // This Header component wrapper ensures fixed positioning and z-index as per layout requirements.
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-30',
        className
      )}
    >
      <TopHeader />
    </header>
  );
};

export default Header;

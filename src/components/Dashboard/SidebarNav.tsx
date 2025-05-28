import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Newspaper,
  MessageSquare,
  PlaySquare,
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  UserCheck,
  HeartHandshake,
  ChevronDown,
  PlusCircle,
  Settings
} from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href?: string;
  isActive?: boolean;
  isNested?: boolean;
  count?: number;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, href = '#', isActive, isNested, count, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-muted hover:text-foreground',
        isActive ? 'bg-primary/10 text-primary' : 'text-foreground/70',
        isNested ? 'pl-8' : ''
      )}
    >
      <Icon className={cn('h-5 w-5', isActive ? 'text-primary' : 'text-foreground/60')} />
      <span>{label}</span>
      {count && (
        <span className="ml-auto inline-block px-2 py-0.5 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
          {count}
        </span>
      )}
    </a>
  );
};

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const user = { name: 'Olenna Mason', avatarUrl: 'https://i.pravatar.cc/150?u=olenna' };

  const primaryNavItems = [
    { icon: Newspaper, label: 'News Feed', isActive: true },
    { icon: MessageSquare, label: 'Messenger', count: 3 },
    { icon: PlaySquare, label: 'Watch' },
    { icon: Store, label: 'Marketplace' },
  ];

  const shortcuts = [{ icon: Gamepad2, label: 'FarmVille 2' }];

  const exploreItems = [
    { icon: CalendarDays, label: 'Events' },
    { icon: Flag, label: 'Pages' },
    { icon: Users, label: 'Groups' },
    { icon: UserCheck, label: 'Friend Lists' },
    { icon: HeartHandshake, label: 'Fundraisers' },
  ];

  const createItems = [
    { label: 'Ad' },
    { label: 'Page' },
    { label: 'Group' },
    { label: 'Event' },
    { label: 'Fundraiser' },
  ];

  const [showMoreExplore, setShowMoreExplore] = React.useState(false);

  return (
    <nav className={cn('w-64 bg-card text-card-foreground flex flex-col p-3 space-y-1 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-muted', className)}>
      {/* User Profile Link */}
      <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-muted mb-2">
        <Avatar className="h-7 w-7">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>{user.name.substring(0, 1)}</AvatarFallback>
        </Avatar>
        <span className="font-semibold text-sm text-foreground">{user.name}</span>
      </a>

      {/* Primary Navigation */}
      {primaryNavItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}

      {/* Shortcuts Section */}
      <div className="pt-4">
        <h3 className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Shortcuts</h3>
        {shortcuts.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </div>

      {/* Explore Section */}
      <div className="pt-4">
        <h3 className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Explore</h3>
        {exploreItems.slice(0, showMoreExplore ? exploreItems.length : 5).map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
        <Button variant="ghost" onClick={() => setShowMoreExplore(!showMoreExplore)} className="w-full justify-start px-3 text-foreground/70 hover:text-foreground">
          <ChevronDown className={cn('h-5 w-5 mr-3 transition-transform', showMoreExplore && 'rotate-180')} />
          {showMoreExplore ? 'See Less' : 'See More...'}
        </Button>
      </div>

      {/* Create Section */}
      <div className="pt-4 mt-auto">
        <h3 className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Create</h3>
        <div className="flex flex-wrap gap-1 px-3 py-2">
          {createItems.map((item) => (
            <a key={item.label} href="#" className="text-xs text-primary hover:underline">
              {item.label}
            </a>
          ))}
        </div>
      </div>
      
      {/* Footer placeholder for settings/etc if needed */}
      <div className="mt-auto border-t border-border pt-2">
        <NavItem icon={Settings} label="Settings & Privacy" />
      </div>
    </nav>
  );
};

export default SidebarNav;

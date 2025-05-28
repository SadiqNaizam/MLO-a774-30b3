import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Facebook,
  Search,
  Home,
  Users,
  MessageCircle,
  Bell,
  HelpCircle,
  ChevronDown,
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  const user = { name: 'Olenna', avatarUrl: 'https://i.pravatar.cc/150?u=olenna' };

  return (
    <header
      className={cn(
        'h-16 bg-primary text-primary-foreground flex items-center justify-between px-4 shadow-md',
        className
      )}
    >
      {/* Left Section: Logo and Search */}
      <div className="flex items-center space-x-2">
        <Facebook className="h-10 w-10 text-primary-foreground" />
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search"
            className="bg-primary-foreground/20 placeholder:text-primary-foreground/70 text-primary-foreground border-0 focus-visible:ring-primary-foreground h-9 pl-10 pr-3 w-60 rounded-full"
          />
        </div>
      </div>

      {/* Middle Section: Navigation Links (simplified version of FB's icon-based navigation) */}
      <nav className="flex items-center space-x-2">
        {/* Placeholder for main navigation icons like Home, Watch, Marketplace, Groups, Gaming */}
        {/* For this clone, using Home as an example link from screenshot */}
        <Button variant="ghost" className="hover:bg-primary-foreground/10 px-6 py-2 h-full rounded-md">
          <Home className="h-6 w-6" />
        </Button>
         {/* Additional icons can be added here based on a more detailed spec */}
      </nav>

      {/* Right Section: User, Quick Links, and Action Icons */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" className="hover:bg-primary-foreground/10 rounded-full p-0 flex items-center space-x-2 h-auto px-2 py-1">
          <Avatar className="h-7 w-7">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium pr-1">{user.name}</span>
        </Button>
        <Button variant="ghost" className="hover:bg-primary-foreground/10 rounded-full p-2">
            Home
        </Button>
        <Button variant="ghost" className="hover:bg-primary-foreground/10 rounded-full p-2">
            Find Friends
        </Button>
        
        {/* Action Icons */}
        {[ { icon: Users, count: 8, ariaLabel: 'Friend requests' },
          { icon: MessageCircle, count: 0, ariaLabel: 'Messages' }, // Count 0 to not show badge initially if it's distracting
          { icon: Bell, count: 36, ariaLabel: 'Notifications' } ].map((item, index) => (
            <Button key={index} variant="ghost" className="relative hover:bg-primary-foreground/10 rounded-full p-2" aria-label={item.ariaLabel}>
              <item.icon className="h-5 w-5" />
              {item.count > 0 && (
                 <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] p-1 text-xs flex items-center justify-center rounded-full bg-destructive text-destructive-foreground">
                   {item.count > 99 ? '99+' : item.count}
                 </Badge>
              )}
            </Button>
        ))}
        <Button variant="ghost" className="hover:bg-primary-foreground/10 rounded-full p-2" aria-label="Help">
          <HelpCircle className="h-5 w-5" />
        </Button>
        <Button variant="ghost" className="hover:bg-primary-foreground/10 rounded-full p-2" aria-label="Account menu">
          <ChevronDown className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default TopHeader;

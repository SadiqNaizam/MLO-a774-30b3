import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  MessageSquare,
  Search,
  Settings,
  Users,
  Video,
  Edit2, // For New Message
  Circle, // For status indicator
} from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  avatarUrl: string;
  status: 'online' | 'offline' | 'busy';
  lastMessage?: string;
  unreadCount?: number;
}

interface ChatModuleProps {
  className?: string;
}

const ChatModule: React.FC<ChatModuleProps> = ({ className }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const contactsData: Contact[] = [
    { id: '1', name: 'Alice Johnson', avatarUrl: 'https://i.pravatar.cc/150?u=alicej', status: 'online' as const, lastMessage: 'Hey, how are you?', unreadCount: 2 },
    { id: '2', name: 'Bob Williams', avatarUrl: 'https://i.pravatar.cc/150?u=bobw', status: 'offline' as const, lastMessage: 'See you tomorrow!' },
    { id: '3', name: 'Charlie Brown', avatarUrl: 'https://i.pravatar.cc/150?u=charlieb', status: 'busy' as const, lastMessage: 'In a meeting.' },
    { id: '4', name: 'Diana Davis', avatarUrl: 'https://i.pravatar.cc/150?u=dianad', status: 'online' as const, lastMessage: 'Can you send the file?' },
  ];

  const filteredContacts = contactsData.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: 'online' | 'offline' | 'busy') => {
    if (status === 'online') return 'fill-green-500 text-green-500';
    if (status === 'busy') return 'fill-red-500 text-red-500';
    return 'fill-gray-400 text-gray-400';
  };

  return (
    <Card className={cn('w-full shadow-sm flex flex-col h-[calc(100vh-10rem)] max-h-[500px]', className)}> {/* Example height, adjust as needed */}
      <CardHeader className="flex flex-row items-center justify-between p-3 border-b border-border">
        <div className="flex items-center space-x-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            <CardTitle className="text-base font-semibold">Chat</CardTitle>
        </div>
        <div className="flex items-center space-x-0.5">
          <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-foreground">
            <Edit2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-foreground">
            <Users className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-foreground">
            <Video className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-foreground">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <div className="p-3 border-b border-border">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-9 pl-8 pr-3 w-full rounded-md bg-muted/50 border-border focus-visible:ring-primary"
          />
        </div>
      </div>
      <CardContent className="p-0 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-muted">
        {filteredContacts.length > 0 ? (
          <ul className="divide-y divide-border">
            {filteredContacts.map((contact) => (
              <li key={contact.id}>
                <Button variant="ghost" className="w-full h-auto justify-start p-3 rounded-none space-x-3">
                  <div className="relative">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={contact.avatarUrl} alt={contact.name} />
                      <AvatarFallback>{contact.name.substring(0, 1)}</AvatarFallback>
                    </Avatar>
                    <Circle className={cn('absolute bottom-0 right-0 h-2.5 w-2.5 stroke-2 stroke-card', getStatusColor(contact.status))} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-foreground truncate">{contact.name}</p>
                    {contact.lastMessage && <p className="text-xs text-muted-foreground truncate">{contact.lastMessage}</p>}
                  </div>
                  {contact.unreadCount && contact.unreadCount > 0 && (
                    <span className="text-xs bg-primary text-primary-foreground font-semibold rounded-full px-1.5 py-0.5">
                      {contact.unreadCount}
                    </span>
                  )}
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-4 text-sm text-muted-foreground text-center">No contacts found.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default ChatModule;

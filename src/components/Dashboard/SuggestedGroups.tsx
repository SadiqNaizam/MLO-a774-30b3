import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { UserPlus, X } from 'lucide-react';

interface Group {
  id: string;
  name: string;
  members: number;
  bannerUrl: string;
  memberAvatars: string[];
}

interface SuggestedGroupsProps {
  className?: string;
}

const SuggestedGroups: React.FC<SuggestedGroupsProps> = ({ className }) => {
  const initialGroupsData: Group[] = [
    {
      id: '1',
      name: 'Mad Men (MADdicts)',
      members: 6195,
      bannerUrl: 'https://picsum.photos/seed/madmen/300/100',
      memberAvatars: Array.from({ length: 5 }, (_, i) => `https://i.pravatar.cc/40?u=madmen${i}`),
    },
    {
      id: '2',
      name: 'Dexter Morgan Fans',
      members: 6984,
      bannerUrl: 'https://picsum.photos/seed/dexter/300/100',
      memberAvatars: Array.from({ length: 6 }, (_, i) => `https://i.pravatar.cc/40?u=dexter${i}`),
    },
    {
      id: '3',
      name: 'Tech Innovators Hub',
      members: 12030,
      bannerUrl: 'https://picsum.photos/seed/tech/300/100',
      memberAvatars: Array.from({ length: 4 }, (_, i) => `https://i.pravatar.cc/40?u=tech${i}`),
    },
  ];

  const [groups, setGroups] = React.useState<Group[]>(initialGroupsData);

  const handleDismiss = (groupId: string) => {
    setGroups(prevGroups => prevGroups.filter(group => group.id !== groupId));
  };

  const handleJoin = (groupId: string) => {
    console.log(`Joined group ${groupId}`);
    // Add logic to change button state to 'Joined' or remove group from list
  };

  if (groups.length === 0) {
    return null; // Or a placeholder message
  }

  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader className="flex flex-row items-center justify-between p-3 border-b border-border">
        <CardTitle className="text-base font-semibold">Suggested Groups</CardTitle>
        <Button variant="link" className="text-xs text-primary p-0 h-auto hover:underline">
          See All
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="divide-y divide-border">
          {groups.map((group) => (
            <li key={group.id} className="p-3 hover:bg-muted/50">
              <div className="flex items-start space-x-3">
                <div className="relative w-full h-20 rounded-md overflow-hidden mb-2">
                  <img src={group.bannerUrl} alt={`${group.name} banner`} className="w-full h-full object-cover" />
                  <div className="absolute bottom-1 left-1 flex -space-x-2">
                    {group.memberAvatars.slice(0, 5).map((avatarUrl, index) => (
                      <Avatar key={index} className="h-6 w-6 border-2 border-card">
                        <AvatarImage src={avatarUrl} />
                        <AvatarFallback>{group.name[0]}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                   <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-1 right-1 h-6 w-6 bg-black/30 hover:bg-black/50 text-white rounded-full"
                    onClick={() => handleDismiss(group.id)}
                    aria-label={`Dismiss ${group.name}`}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div>
                  <a href="#" className="font-semibold text-sm text-foreground hover:underline">
                    {group.name}
                  </a>
                  <p className="text-xs text-muted-foreground">
                    {group.members.toLocaleString()} members
                  </p>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-2 text-sm" onClick={() => handleJoin(group.id)}>
                <UserPlus className="h-4 w-4 mr-1.5" /> Join
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SuggestedGroups;

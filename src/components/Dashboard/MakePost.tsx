import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Edit3, // For Make Post
  ImageUp, // For Photo/Video Album
  Video, // For Live Video
  ListOrdered, // For List button
  Image as ImageIcon, // For Photo/Video button
  UserPlus, // For Tag Friends button
  Smile, // For Feeling/Activity
  MapPin, // For Check In
  MoreHorizontal, // For More Options
} from 'lucide-react';

interface MakePostProps {
  className?: string;
}

const MakePost: React.FC<MakePostProps> = ({ className }) => {
  const user = { name: 'Olenna', avatarUrl: 'https://i.pravatar.cc/150?u=olenna' };
  const [postText, setPostText] = React.useState('');

  const postOptions = [
    { icon: Edit3, label: 'Make Post', active: true },
    { icon: ImageUp, label: 'Photo/Video Album' },
    { icon: Video, label: 'Live Video' },
  ];

  const actionButtons = [
    { icon: ListOrdered, label: 'List', color: 'text-orange-500' },
    { icon: ImageIcon, label: 'Photo/Video', color: 'text-green-500' },
    { icon: UserPlus, label: 'Tag Friends', color: 'text-blue-500' },
    // { icon: Smile, label: 'Feeling/Activity', color: 'text-yellow-500' }, // Optional, not in direct screenshot
    // { icon: MapPin, label: 'Check in', color: 'text-red-500' }, // Optional
  ];

  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader className="p-0">
        <div className="flex border-b border-border">
          {postOptions.map((option, index) => (
            <Button
              key={index}
              variant="ghost"
              className={cn(
                'flex-1 justify-start items-center space-x-2 px-4 py-3 rounded-none font-semibold',
                option.active ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground',
                'hover:bg-muted'
              )}
            >
              <option.icon className={cn('h-5 w-5', option.active ? 'text-primary' : 'text-muted-foreground')} />
              <span>{option.label}</span>
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <Textarea
            placeholder={`What's on your mind, ${user.name}?`}
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="min-h-[60px] flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none text-base p-2"
          />
        </div>
        <Separator className="my-3" />
        <div className="flex justify-between items-center">
          <div className="flex space-x-1">
            {actionButtons.map((action, index) => (
              <Button key={index} variant="ghost" className="text-muted-foreground hover:bg-muted px-3">
                <action.icon className={cn('h-5 w-5 mr-1.5', action.color)} />
                {action.label}
              </Button>
            ))}
          </div>
          <Button variant="ghost" className="text-muted-foreground hover:bg-muted p-2">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MakePost;

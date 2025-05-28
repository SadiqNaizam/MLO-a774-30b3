import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  PlusCircle,
  Archive,
  Settings,
} from 'lucide-react';

interface Story {
  id: string;
  user: {
    name: string;
    avatarUrl: string;
  };
  storyImageUrl: string;
  viewed?: boolean;
}

interface StoriesModuleProps {
  className?: string;
}

const StoriesModule: React.FC<StoriesModuleProps> = ({ className }) => {
  const currentUser = { name: 'Olenna', avatarUrl: 'https://i.pravatar.cc/150?u=olenna' };

  const storiesData: Story[] = [
    { id: '1', user: { name: 'Jane Doe', avatarUrl: 'https://i.pravatar.cc/150?u=jane' }, storyImageUrl: 'https://picsum.photos/seed/story1/200/300' },
    { id: '2', user: { name: 'John Smith', avatarUrl: 'https://i.pravatar.cc/150?u=john' }, storyImageUrl: 'https://picsum.photos/seed/story2/200/300', viewed: true },
    { id: '3', user: { name: 'Alice Brown', avatarUrl: 'https://i.pravatar.cc/150?u=alice' }, storyImageUrl: 'https://picsum.photos/seed/story3/200/300' },
    { id: '4', user: { name: 'Bob Green', avatarUrl: 'https://i.pravatar.cc/150?u=bob' }, storyImageUrl: 'https://picsum.photos/seed/story4/200/300' },
  ];

  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader className="flex flex-row items-center justify-between p-3 border-b border-border">
        <CardTitle className="text-lg font-semibold">Stories</CardTitle>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:bg-muted">
            <Archive className="h-4 w-4 mr-1" /> Archive
          </Button>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:bg-muted">
            <Settings className="h-4 w-4 mr-1" /> Settings
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-3">
        <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-muted">
          {/* Add to Your Story Card */}
          <div className="flex-shrink-0 w-28 h-44 rounded-lg overflow-hidden relative group cursor-pointer border border-border">
            <Avatar className="h-full w-full rounded-none">
              <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} className="object-cover filter brightness-75 group-hover:brightness-100 transition-all" />
              <AvatarFallback className="bg-muted">{currentUser.name.substring(0,1)}</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent text-center">
                <div className="mx-auto h-8 w-8 bg-primary rounded-full flex items-center justify-center border-2 border-card mb-1 group-hover:scale-110 transition-transform">
                    <PlusCircle className="h-5 w-5 text-primary-foreground" />
                </div>
                <p className="text-xs font-medium text-white">Add to Story</p>
            </div>
          </div>

          {/* Existing Stories */}
          {storiesData.map((story) => (
            <div key={story.id} className="flex-shrink-0 w-28 h-44 rounded-lg overflow-hidden relative group cursor-pointer">
              <img src={story.storyImageUrl} alt={`${story.user.name}'s story`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className={cn(
                  'absolute top-2 left-2 p-0.5 rounded-full',
                  story.viewed ? 'bg-gray-400' : 'bg-primary'
              )}>
                <Avatar className="h-8 w-8 border-2 border-card">
                  <AvatarImage src={story.user.avatarUrl} alt={story.user.name} />
                  <AvatarFallback>{story.user.name.substring(0,1)}</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-xs font-medium text-white truncate drop-shadow-md">{story.user.name}</p>
              </div>
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StoriesModule;

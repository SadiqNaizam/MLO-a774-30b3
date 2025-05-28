import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Users,
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  Globe
} from 'lucide-react';

interface PostCardProps {
  post: PostData;
  className?: string;
}

interface PostUserData {
  name: string;
  avatarUrl: string;
}

interface PostData {
  id: string;
  user: PostUserData;
  timestamp: string;
  privacy: 'public' | 'friends' | 'only_me';
  content?: string;
  imageUrl?: string;
  location?: string;
  likes: number;
  comments: number;
  shares: number;
  likedBy: string[];
}

const PostCard: React.FC<PostCardProps> = ({ post, className }) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  const handleLike = () => setIsLiked(!isLiked);
  const handleBookmark = () => setIsBookmarked(!isBookmarked);

  const getPrivacyIcon = () => {
    switch (post.privacy) {
      case 'public': return <Globe className="h-3.5 w-3.5 text-muted-foreground" />;
      case 'friends': return <Users className="h-3.5 w-3.5 text-muted-foreground" />;
      default: return <Users className="h-3.5 w-3.5 text-muted-foreground" />; // Default to friends or a generic icon
    }
  };

  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.user.avatarUrl} alt={post.user.name} />
              <AvatarFallback>{post.user.name.substring(0, 1)}</AvatarFallback>
            </Avatar>
            <div>
              <a href="#" className="font-semibold text-sm text-foreground hover:underline">
                {post.user.name}
                {post.location && <span className="font-normal text-muted-foreground"> is in <span className='font-medium text-foreground'>{post.location}</span>.</span>}
              </a>
              <div className="text-xs text-muted-foreground flex items-center space-x-1">
                <span>{post.timestamp}</span>
                <span>&middot;</span>
                {getPrivacyIcon()}
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted rounded-full h-8 w-8">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-4 pt-0 pb-2">
        {post.content && <p className="text-sm text-foreground mb-3 whitespace-pre-wrap">{post.content}</p>}
        {post.imageUrl && (
          <div className="rounded-lg overflow-hidden border border-border aspect-video bg-muted flex items-center justify-center">
            <img src={post.imageUrl} alt="Post content" className="w-full h-full object-cover" />
          </div>
        )}
      </CardContent>
      <div className="px-4 pb-2">
        { (post.likes > 0 || post.comments > 0 || post.shares > 0) &&
            <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
                <div>
                    {post.likes > 0 && <span>{post.likedBy[0]} {post.likedBy.length > 1 ? `and ${post.likes -1} others` : ''}</span>}
                </div>
                <div className="flex space-x-2">
                    {post.comments > 0 && <span>{post.comments} comments</span>}
                    {post.shares > 0 && <span>{post.shares} shares</span>}
                </div>
            </div>
        }
        <Separator/>
      </div>
      <CardFooter className="p-2 px-4 flex justify-around">
        <Button variant="ghost" onClick={handleLike} className={cn('flex-1 text-muted-foreground hover:bg-muted', isLiked && 'text-primary')}>
          <ThumbsUp className={cn('h-5 w-5 mr-1.5', isLiked && 'fill-primary')} /> Like
        </Button>
        <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-muted">
          <MessageSquare className="h-5 w-5 mr-1.5" /> Comment
        </Button>
        <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-muted">
          <Share2 className="h-5 w-5 mr-1.5" /> Share
        </Button>
        {post.imageUrl && (
             <Button variant="ghost" onClick={handleBookmark} className={cn('flex-1 text-muted-foreground hover:bg-muted hidden sm:flex', isBookmarked && 'text-primary')}>
                <Bookmark className={cn('h-5 w-5 mr-1.5', isBookmarked && 'fill-primary')} /> Save
             </Button>
        )}
      </CardFooter>
    </Card>
  );
};

// Example Usage (usually this would be in a page component that fetches and passes data)
// const SamplePostCardWrapper = () => {
//   const samplePost: PostData = {
//     id: '1',
//     user: { name: 'Julia Fillory', avatarUrl: 'https://i.pravatar.cc/150?u=julia' },
//     timestamp: '2 hrs ago',
//     privacy: 'friends' as const,
//     content: 'Checking out some new stores downtown!',
//     imageUrl: 'https://via.placeholder.com/600x400.png?text=Raleigh+NC+Map+View',
//     location: 'Raleigh, North Carolina',
//     likes: 120,
//     comments: 15,
//     shares: 7,
//     likedBy: ['Bryan Durand', 'John Doe']
//   };
//   return <PostCard post={samplePost} />;
// }

export default PostCard;

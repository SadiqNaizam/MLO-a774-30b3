import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import MakePost from '../components/Dashboard/MakePost';
import PostCard from '../components/Dashboard/PostCard';
import StoriesModule from '../components/Dashboard/StoriesModule';
import SuggestedGroups from '../components/Dashboard/SuggestedGroups';
import ChatModule from '../components/Dashboard/ChatModule';

// Define PostData interface as it's not exported from PostCard.tsx in the provided context
// This is necessary for defining dummy data on this page.
interface PostUserData {
  name: string;
  avatarUrl: string;
}

export interface PostData { // Exporting for clarity or potential use by other page-specific HOCs/utils
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

const SocialMediaDashboardPage: React.FC = () => {
  const postsData: PostData[] = [
    {
      id: 'post1_julia_fillory',
      user: { name: 'Julia Fillory', avatarUrl: 'https://i.pravatar.cc/150?u=julia' },
      timestamp: '2 hrs ago',
      privacy: 'friends' as const,
      content: 'Checking out some new stores downtown! It was a fantastic experience, found some great deals and unique items. Highly recommend visiting the new artisan market on Elm Street. The atmosphere was buzzing!',
      imageUrl: 'https://picsum.photos/seed/raleigh_downtown/800/450',
      location: 'Raleigh, North Carolina',
      likes: 128,
      comments: 17,
      shares: 6,
      likedBy: ['Bryan Durand', 'Olenna Mason', 'Alice Quinn'],
    },
    {
      id: 'post2_kady_orloff',
      user: { name: 'Kady Orloff-Diaz', avatarUrl: 'https://i.pravatar.cc/150?u=kady' },
      timestamp: '5 hrs ago',
      privacy: 'public' as const,
      content: 'Just finished an amazing book: "The Invisible Life of Addie LaRue" by V.E. Schwab. Absolutely captivating from start to finish. What are your current favorite reads? Looking for recommendations! #booklover #readinglist',
      likes: 92,
      comments: 25,
      shares: 3,
      likedBy: ['Quentin Coldwater', 'Penny Adiyodi'],
    },
    {
      id: 'post3_eliot_waugh',
      user: { name: 'Eliot Waugh', avatarUrl: 'https://i.pravatar.cc/150?u=eliot' },
      timestamp: '1 day ago',
      privacy: 'public' as const,
      content: 'Throwback to this incredible sunset view from last month\'s trip. Missing those serene moments. #travel #adventure #sunsetmagic',
      imageUrl: 'https://picsum.photos/seed/sunset_view/800/600',
      location: 'Brakebills South Cliffs',
      likes: 312,
      comments: 58,
      shares: 22,
      likedBy: ['Margo Hanson', 'Fen', 'Josh Hoberman'],
    },
    {
      id: 'post4_alice_quinn',
      user: { name: 'Alice Quinn', avatarUrl: 'https://i.pravatar.cc/150?u=aliceq' },
      timestamp: '3 days ago',
      privacy: 'friends' as const,
      content: 'Deep in thought and coffee, working on a fascinating new magical theory. It\'s complex but the potential breakthroughs are exciting! Wish me luck. ☕📚✨',
      imageUrl: 'https://picsum.photos/seed/magic_study/700/400',
      likes: 175,
      comments: 33,
      shares: 11,
      likedBy: ['Penny Adiyodi', 'Julia Fillory', 'Professor Mayakovsky'],
    },
  ];

  const rightSidebarContent = (
    <>
      <StoriesModule />
      <SuggestedGroups />
      <ChatModule />
    </>
  );

  return (
    <MainAppLayout rightSidebarContent={rightSidebarContent}>
      <MakePost />
      {postsData.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </MainAppLayout>
  );
};

export default SocialMediaDashboardPage;

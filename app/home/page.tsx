'use client';

import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  published: boolean;
  authorId: number;
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setLoading(true);
    async function fetchPosts() {
      const response = await fetch('/api/posts');
      let posts = await response.json();
      setPosts(posts);
    }
    try {
      fetchPosts();
    } catch (error) {
      console.error(error);
    }finally {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <h1>Create a New Post</h1>
      {loading && <p>Loading...</p>}
      {!loading && posts?.map((post: Post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
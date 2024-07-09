import { PrismaClient } from '@prisma/client';
import { useState } from 'react';

const prisma = new PrismaClient();

// Define the type for a Post
interface Post {
  id: number;
  title: string;
  published: boolean;
  authorId: number;
}

export default async function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch posts from Prisma
  const fetchPosts = async () => {
    const posts = await prisma.post.findMany();
    setPosts(posts);
  };

  const addPost = async (formData: FormData) => {
    'use server';

    try {
      await prisma.post.create({
        data: {
          title: formData.get('title') as string,
          published: true,
          author: { connect: { email: 'felidevjs@gmail.com' } },
        },
      });

      // Refetch posts after adding a new one
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch posts when the component mounts
  fetchPosts();

  return (
    <div>
      <h1>Create a New Post</h1>
      <form action={addPost}>
        <label>
          Title
          <input type="text" name="title" />
        </label>
        <button type="submit">Submit</button>
      </form>
      {posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

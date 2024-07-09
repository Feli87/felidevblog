
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function Home() {
  const posts = await prisma.post.findMany();


  const addPost = async (formData: FormData)=>{
    'use server'

    try {
      await prisma.post.create({
        data: {
          title: formData.get('title') as string,
          published: true,
          author: { connect: { email: 'felidevjs@gmail.com' } },
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
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

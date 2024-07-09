
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()
interface Post {
  id: number;
  title: string;
  published: boolean;
  authorId: number;
}

export default async function Admin() {


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
      revalidatePath('/home')   

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
    </div>
  );
}

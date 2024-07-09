
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export default async function Page({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: { id: parseInt(params.id)},
  });

  return <div>My Post: {post?.title}</div>
}
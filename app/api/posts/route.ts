import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export async function GET() {
  const posts = await prisma.post.findMany()
  console.log("🚀 ~ GET ~ posts:", posts)

  const res = posts

  return Response.json(res)
}
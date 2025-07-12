import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request: Request) {
  const { id, name, points } = await request.json();

  const goal = await prisma.goal.create({
    data: {
      id,
      name,
      points,
    },
  });

  return NextResponse.json(goal);
}

export async function GET() {
  const goals = await prisma.goal.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(goals);
}

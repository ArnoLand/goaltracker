import { NextResponse } from "next/server";
import prisma from "C:/Users/arnie/Desktop/project/goaltracker/lib/prisma";

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
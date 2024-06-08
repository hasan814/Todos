import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import User from "@/models/User";
import connectDB from "@/utils/connectDB";

export async function POST(req) {
  try {
    await connectDB();
    const { title, status } = await req.json();

    const session = await getServerSession(req);
    if (!session)
      return NextResponse.json(
        { error: "Please log in to your account" },
        { status: 401 }
      );

    const email = session.user.email;
    const user = await User.findOne({ email });
    if (!user)
      return NextResponse.json(
        { error: "User doesn't exist!" },
        { status: 404 }
      );

    if (!title || !status)
      return NextResponse.json({ error: "Invalid data!" }, { status: 400 });

    user.todos.push({ title, status });
    await user.save();

    return NextResponse.json({ message: "Todo created!" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An error has occurred in the DB" },
      { status: 500 }
    );
  }
}

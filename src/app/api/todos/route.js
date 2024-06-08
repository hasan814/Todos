import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import User from "@/models/User";
import connectDB from "@/utils/connectDB";

export async function POST(req) {
  try {
    await connectDB();

    const { title, status } = await req.json();

    const session = await getServerSession(req);
    const email = session.user.email;
    if (!session)
      return NextResponse.json(
        { error: "Please enter into Your Account" },
        { status: 401 }
      );
    const user = await User.findOne({ email });
    if (!user)
      return NextResponse.json(
        { error: "User dosent Exist!" },
        { status: 404 }
      );
    if (!title || !status)
      return NextResponse.json({ error: "Invalid data!" }, { status: 401 });
    user.todos.push({ title, status });
    user.save();
    return NextResponse.json({ message: "Todo Created!" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An Eroor has been occured in DB" },
      { status: 500 }
    );
  }
}

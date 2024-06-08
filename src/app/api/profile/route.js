import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

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

    const { name, lastName, password } = await req.json();
    const isValid = await verifyPassword(password, user.password);
    if (isValid)
      return NextResponse.json(
        { error: "message is incorect" },
        { status: 422 }
      );
    user.name = name;
    user.lastName = lastName;
    await user.save();
    return NextResponse.json(
      { data: { name, lastName, email } },
      { status: "success" }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An error has occurred in the DB" },
      { status: 500 }
    );
  }
}
export async function GET(req) {
  try {
    await connectDB();

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

    const { password } = await req.json();
    const isValid = await verifyPassword(password, user.password);
    if (isValid)
      return NextResponse.json(
        { error: "message is incorect" },
        { status: 422 }
      );

    return NextResponse.json(
      { data: { name: user.name, lastName: user.lastName, email: user.email } },
      { status: "success" }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An error has occurred in the DB" },
      { status: 500 }
    );
  }
}

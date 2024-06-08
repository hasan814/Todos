import { hashPassword } from "@/utils/auth";
import { NextResponse } from "next/server";

import connectDB from "@/utils/connectDB";
import User from "@/models/User";

export const POST = async (req) => {
  try {
    await connectDB();

    const { email, password } = await req.json();
    if (!email || !password)
      return NextResponse.json(
        { error: "Please enter a valid data" },
        { status: 422 }
      );

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return NextResponse.json(
        { error: "this account has already exist" },
        { status: 422 }
      );

    const hashedPassword = await hashPassword(password);
    await User.create({ email, password: hashedPassword });
    return NextResponse.json({ message: "user created!" }, { status: 201 });
  } catch (error) {
    console.log(error);
    NextResponse.json(
      { error: "An error has already happened in DB" },
      { status: 500 }
    );
  }
};

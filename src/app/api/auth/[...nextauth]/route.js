import { verifyPassword } from "@/utils/auth";

import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/utils/connectDB";
import NextAuth from "next-auth";
import User from "@/models/User";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("A problem has been occured in DB");
        }

        if (!email || !password) throw new Error("Please enter Valid Data");

        const user = await User.findOne({ email });
        if (!user) throw new Error("Please create Account");

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("email or password is wrong!");

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

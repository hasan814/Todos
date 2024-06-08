"use client";

import { signIn, useSession } from "next-auth/react";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Loader from "@/elements/Loader";
import Link from "next/link";

const SignInPage = () => {
  // ============ Router =============
  const router = useRouter();

  // ============ State =============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  // ============ Session =============
  const { status } = useSession();

  // ============ Effect =============
  useEffect(() => {
    if (status === "authenticated") router.replace("/");
  }, [router, status]);
  // ============ Function =============
  const loginHandler = async () => {
    setLoader(true);
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoader(false);
    if (!response.error) toast.success("Sign In"), router.push("/");
    else toast.error(response.error);
  };

  // ============ Rendering =============
  return (
    <div className="signin-form">
      <Toaster />
      <h3>Login Form</h3>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Passowrd"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {loader ? <Loader /> : <button onClick={loginHandler}>Login</button>}

      <div>
        <p>Create an account?</p>
        <Link href={"/signup"}>Sign Up</Link>
      </div>
    </div>
  );
};

export default SignInPage;

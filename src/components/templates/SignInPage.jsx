"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

import Loader from "@/elements/Loader";
import Link from "next/link";

const SignInPage = () => {
  // ============ Router =============
  const router = useRouter();

  // ============ State =============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  // ============ Function =============
  const loginHandler = () => {};

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

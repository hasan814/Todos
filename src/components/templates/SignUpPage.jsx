"use client";

import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Link from "next/link";
import Loader from "@/elements/Loader";

const SignUpPage = () => {
  // ============ Router ============
  const router = useRouter();

  // ============ State ============
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  // ============ Function ============
  const submitHandler = async () => {
    setLoader(true);
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setLoader(false);
    if (data.error) toast.error(data.eror);
    else toast.success(data.message), router.push("/signin");
  };

  // ============ Rendering ============
  return (
    <div className="signin-form">
      <Toaster />
      <h3>Registration Form</h3>
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
      {loader ? <Loader /> : <button onClick={submitHandler}>Register</button>}

      <div>
        <p>Have an account?</p>
        <Link href={"signin"}>Sign In</Link>
      </div>
    </div>
  );
};

export default SignUpPage;

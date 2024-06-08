"use client";

import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import ProfileForm from "@/modules/ProfileForm";

const ProfilePage = () => {
  // ============= State ==============
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  // ============= Function ==============
  const submitHandler = async () => {
    const response = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify({ name, lastName, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
  };

  // ============= Rendeing ==============
  return (
    <div className="profile-form">
      <h2>
        <CgProfile /> Profile
      </h2>
      <ProfileForm
        name={name}
        lastName={lastName}
        password={password}
        setName={setName}
        setLastName={setLastName}
        setPassword={setPassword}
        submitHandler={submitHandler}
      />
    </div>
  );
};

export default ProfilePage;

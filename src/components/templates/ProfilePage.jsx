"use client";

import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";

import ProfileForm from "@/modules/ProfileForm";
import ProfileData from "@/modules/ProfileData";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  // ============= Router ==============
  const router = useRouter();

  // ============= State ==============
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(false);

  // ============= Effect ==============
  useEffect(() => {
    fetchProfile();
  }, []);

  // ============= Function ==============
  const fetchProfile = async () => {
    const response = await fetch("/api/profile");
    const data = await response.json();

    if (data && data.data.name && data.data.lastName) setData(data.data);
  };

  const submitHandler = async () => {
    setLoader(true);
    const response = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify({ name, lastName, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (data) toast.success("Data Added!"), router.refresh();
    setLoader(false);
  };

  // ============= Rendeing ==============
  return (
    <div className="profile-form">
      <Toaster />
      <h2>
        <CgProfile /> Profile
      </h2>
      {data ? (
        <ProfileData data={data} />
      ) : (
        <ProfileForm
          name={name}
          data={data}
          lastName={lastName}
          password={password}
          loader={loader}
          setName={setName}
          setLastName={setLastName}
          setPassword={setPassword}
          submitHandler={submitHandler}
        />
      )}
    </div>
  );
};

export default ProfilePage;

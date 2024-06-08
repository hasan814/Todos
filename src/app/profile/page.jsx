import ProfilePage from "@/templates/ProfilePage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Profile = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
    return null;
  }
  return <ProfilePage />;
};

export default Profile;

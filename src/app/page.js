import HomePage from "@/templates/HomePage";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signin");
    return null;
  }
  return <HomePage />;
};

export default Home;

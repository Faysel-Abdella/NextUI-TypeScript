import HomeHeader from "@/components/HomeHeader";
import Post from "@/components/Post";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <section className="">
      <HomeHeader />
      <Profile />
      <Post />
    </section>
  );
}

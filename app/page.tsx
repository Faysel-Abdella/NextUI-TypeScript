import HomeHeader from "@/components/HomeHeader";
import Posts from "@/components/Posts";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <section className="">
      <HomeHeader />
      <Profile />

      <Posts />
    </section>
  );
}

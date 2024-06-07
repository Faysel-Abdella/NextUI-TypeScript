import Image from "next/image";

import images from "@/assets/images";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";

import { Button, ButtonGroup } from "@nextui-org/button";
import icons from "@/assets/icons";
import HomeHeader from "@/components/HomeHeader";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <section className="">
      <HomeHeader />
      <Profile />
    </section>
  );
}

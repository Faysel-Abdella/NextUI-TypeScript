import React from "react";

import { Avatar } from "@nextui-org/avatar";

import Image from "next/image";

import images from "@/assets/images";

const HomeHeader = () => {
  return (
    <div className="relative">
      <Image
        src={images.mainbg}
        alt="main-background"
        className="object-cover w-full h-96"
      />

      <div className="absolute flex flex-col justify-center items-center bottom-[-150px] right-1/2 translate-x-1/2">
        <Avatar
          isBordered
          color="success"
          src={images.profile.src}
          className="w-64 h-64 "
        />
      </div>
    </div>
  );
};

export default HomeHeader;

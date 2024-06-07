import React from "react";

import { Button } from "@nextui-org/button";

import Link from "next/link";

import icons from "@/assets/icons";

import Image from "next/image";

const Profile = () => {
  return (
    <section>
      <article className="mt-40  flex flex-col justify-center items-center">
        <h2 className="mt-2 font-bold font-Montserrat  text-3xl">
          Kalvin John
        </h2>

        <Button
          color="secondary"
          className="mt-4 font-Rubik font-semibold text-lg mb-3"
        >
          Join Me Now!
        </Button>

        <div className="flex justify-center items-center gap-3">
          <Link href="#">
            <Image src={icons.instagram} alt="Instagram icon" />
          </Link>
          <Link href="#">
            <Image src={icons.twitter} alt="Twitter icon" />
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Profile;

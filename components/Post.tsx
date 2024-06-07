import React from "react";
import Image from "next/image";
import { Divider, Link, Image as ImageUI, Avatar } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import images from "@/assets/images";
import icons from "@/assets/icons";

interface PostProps {
  title: string;
  subtitle: string;
  description: string;
  like: string;
  comment: string;
}

const Post = ({ title, subtitle, description, like, comment }: PostProps) => {
  return (
    <Card className="max-w-[600px] font-Montserrat">
      <CardHeader className="flex gap-3">
        <Avatar isBordered color="secondary" src={images.profile.src} />
        <div className="flex flex-col">
          <p className="text-md font-semibold">{title}</p>
          <p className="text-small text-default-500 font-semibold">
            {subtitle}
          </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="font-Rubik">{description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex  justify-between items-center">
          <div className="flex gap-6">
            <div className="flex gap-1.5 justify-center items-center">
              <Link href="#">
                <Image src={icons.like} alt="Like icon" className="w-7 h-7" />
              </Link>
              <span className="text-default-500 font-semibold ">{like}</span>
            </div>

            <div className="flex gap-1.5 justify-center items-center">
              <Link href="#">
                <Image
                  src={icons.comment}
                  alt="Like icon"
                  className="w-5 h-7"
                />
              </Link>
              <span className="text-default-500 font-semibold ">{comment}</span>
            </div>

            <Link href="#">
              <Image src={icons.share} alt="Like icon" className="w-5 h-7" />
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Post;

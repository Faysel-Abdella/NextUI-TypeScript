import React from "react";

import { Input } from "@nextui-org/input";

import Image from "next/image";
import icons from "@/assets/icons";
import posts from "@/constants/posts";
import Post from "./Post";

const Posts = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-24 pb-16">
      <div className="font-Rubik mb-4 ">
        <Input
          isClearable
          radius="lg"
          classNames={{
            label: " text-black/50 dark:text-white/90",
            input: [
              "text-[16px]",
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-slate-200 dark:bg-default/60",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
              "border-2 border-solid border-black/10 dark:border-white/10",
            ],
          }}
          className="w-[400px] h-[50px] max-md:w-[250px] "
          placeholder="Type to search..."
          startContent={
            <Image
              src={icons.search}
              alt="search icon"
              className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"
            />
          }
        />
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            subtitle={post.subtitle}
            description={post.description}
            like={post.like}
            comment={post.comment}
          />
        ))}
      </div>
    </section>
  );
};

export default Posts;

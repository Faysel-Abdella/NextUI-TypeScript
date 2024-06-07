import React from "react";
import { Divider } from "@nextui-org/react";

interface CategoryProps {
  category: string;
  setCategory: (category: string) => void;
}

const Category = ({ category, setCategory }: CategoryProps) => {
  return (
    <section className="mt-10 flex flex-col justify-center items-center">
      <div className=" flex gap-10 justify-center items-center">
        <h2
          className="text-lg font-semibold font-Montserrat cursor-pointer"
          onClick={() => setCategory("posts")}
        >
          Explore My Posts
        </h2>
        <h2
          className="text-lg font-semibold font-Montserrat cursor-pointer"
          onClick={() => setCategory("products")}
        >
          Explore My Products
        </h2>
      </div>
      <Divider className="w-[80%] h-[2px] bg-black/10 mt-2" />
    </section>
  );
};

export default Category;

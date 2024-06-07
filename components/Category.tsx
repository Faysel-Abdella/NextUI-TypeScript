import React from "react";
import { Divider } from "@nextui-org/react";

interface CategoryProps {
  setCategory: (category: string) => void;
}

const Category = ({ setCategory }: CategoryProps) => {
  return (
    <section className="mt-10 flex flex-col justify-center items-center">
      <div className=" flex gap-10 justify-center items-center">
        <button onClick={() => setCategory("posts")}>
          <h2 className="text-lg font-semibold font-Montserrat cursor-pointer">
            Explore My Posts
          </h2>
        </button>

        <button onClick={() => setCategory("products")}>
          <h2 className="text-lg font-semibold font-Montserrat cursor-pointer">
            Explore My Products
          </h2>
        </button>
      </div>
      <Divider className="w-[80%] h-[2px] bg-black/10 mt-2" />
    </section>
  );
};

export default Category;

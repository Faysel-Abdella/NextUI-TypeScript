import React from "react";
import Product from "./Product";

const Products = () => {
  const arr = [1, 2, 3, 4];
  return (
    <section className="mt-24 pb-16 flex flex-col gap-9 items-center justify-center">
      {arr.map((item) => (
        <div key={item} className="flex  items-center justify-center">
          <Product />
        </div>
      ))}
    </section>
  );
};

export default Products;

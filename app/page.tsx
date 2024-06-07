"use client";

import { useState } from "react";

import Category from "@/components/Category";
import HomeHeader from "@/components/HomeHeader";
import Posts from "@/components/Posts";
import Profile from "@/components/Profile";
import Products from "@/components/Products";

export default function Home() {
  const [category, setCategory] = useState("products");

  return (
    <section className="">
      <HomeHeader />
      <Profile />
      <Category category={category} setCategory={setCategory} />
      {category === "products" ? <Products /> : <Posts />}
    </section>
  );
}

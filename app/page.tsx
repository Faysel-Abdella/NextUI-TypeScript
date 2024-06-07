"use client";

import { useState } from "react";

import Category from "@/components/Category";
import HomeHeader from "@/components/HomeHeader";
import Posts from "@/components/Posts";
import Profile from "@/components/Profile";
import Products from "@/components/Products";

export default function Home() {
  const [category, setCategory] = useState("posts");

  return (
    <section className="">
      <HomeHeader />
      <Profile />
      <Category setCategory={setCategory} />
      {category === "products" ? <Products /> : <Posts />}
    </section>
  );
}

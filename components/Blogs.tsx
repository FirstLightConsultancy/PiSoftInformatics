"use client";
import * as React from "react";
import BlogCarousel from "./BlogCarousalHome/BlogCarousel";

const posts = [
  {
    title: "Best IT Company",
    description: "Expert guidance to optimize your IT infrastructure and improve overall performance.",
    image: "/assets/images/blog.jpg",
  },
  {
    title: "Second Blog Post",
    description: "This is the second blog post description.",
    image: "/assets/images/blog.jpg",
  },
  {
    title: "Third Blog Post",
    description: "This is the third blog post description.",
    image: "/assets/images/blog.jpg",
  },
];

export function Blogs() {
  return (
    <div className="text-center font-bold lg:p-28 bg-gradient-to-r from-blue-500 to-blue-200 text-white">
      <h1 className="font-extrabold text-[10px] md:text-[40px] leading-10 md:leading-normal">
        Blogs
      </h1>

      <p className=" text-xl md:text-2xl font-bold pb-10">
        Know relevant updates, before its too late
      </p>
      <BlogCarousel posts={posts} />

    </div>
  );
}

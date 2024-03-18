"use client";

import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
            _id,
            title,
            slug,
            mainImage {
                asset -> {
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  });
  return (
    <>
      <section className="px-5 2xl:max-w-7xl 2xl:mx-auto">
        <h1 className="font-bold text-4xl mt-5 mb-10 tracking-widest text-[#4168B7] dark:text-[#A77700] text-center md:text-6xl">
          Blog Page
        </h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug.current}>
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                width={500}
                height={500}
                className="m-auto max-w-[100%]"
              />
              <h4 className="font-semibold text-lg my-2">{post.title}</h4>
              <Link href={`/blog/${post.slug.current}`} className="">
                <Button variant="custom">Read full Article</Button>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPage;

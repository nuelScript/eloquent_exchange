import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getPosts } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

const BlogPage = async () => {
  const posts = await getPosts();
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

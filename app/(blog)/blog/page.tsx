import { getPosts } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

const BlogPage = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className="w-full">
      <div className="flex flex-col space-y-6 items-center bg-gradient-to-b from-[#4168B7] to-white dark:from-[#A77700] dark:to-black/50">
        {posts.map((post) => (
          <article key={post.slug.current}>
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              width={400}
              height={400}
            />
            <h4>{post.title}</h4>
            <Link href={`/blog/${post.slug.current}`}>Read Full Article</Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

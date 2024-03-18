import { Button } from "@/components/ui/button";
import { getPost } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

type Props = {
  params: {
    slug: string;
  };
};

const BlogPages = async ({ params }: Props) => {
  const slug = params.slug;
  const post = await getPost(slug);

  const components: {
    types: {
      code: React.FC<{ node: { language: string; code: string } }>;
    };
  } = {
    types: {
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };
  return (
    <>
      <section className="px-5 xl:max-w-6xl mx-auto pb-20 space-y-10">
        <h1 className="font-bold text-4xl mt-5 mb-10 tracking-widest text-[#4168B7] dark:text-[#A77700] text-center md:text-6xl uppercase">
          {post.title}
        </h1>
        <div className="flex flex-col items-center justify-center space-y-10">
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            width={800}
            height={800}
          />
          <div className="max-w-[50rem] flex flex-col w-full space-y-2">
            <p className="font-semibold text-lg">Author: {post.authorName}</p>
            <div className="block__content py-10">
              {/* @ts-ignore */}
              <PortableText value={post.body} components={components} />
            </div>
            <Link href="/blog" className="">
              <Button variant="custom">Read more blog posts</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPages;

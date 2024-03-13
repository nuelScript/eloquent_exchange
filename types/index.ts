import { Image } from "sanity";

type slug<T> = T;

export type Author = {
  name: string;
  slug: slug<string>;
  image: Image;
  bio: string[];
};

export type Post = {
  title: string;
  slug: string;
  author: Author;
  mainImage: Image;
  categories: Category[];
  publishedAt: Date;
  body: string;
};

export type Category = {
  title: string;
  description: string;
};

import { Image } from "sanity";

type slug<T> = T;

export type Author = {
  name: string;
  slug: string;
  image: Image;
  bio: string[];
};

export type Post = {
  title: string;
  slug: {
    current: string;
    _type: slug<string>;
  };
  authorName: string;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
  categories: Category[];
  publishedAt: Date;
  body: string;
};

export type Category = {
  title: string;
  description: string;
};

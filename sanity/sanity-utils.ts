import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Category, Post, Author } from "@/types";

export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"] {
            _id,
            title,
            slug,
            body, 
            mainImage {
                asset -> {
                    _id,
                    url
                },
                alt
            }
        }`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
            title,
            slug,
            body, 
            mainImage {
                asset -> {
                    _id,
                    url 
                },
                alt
            },
            "authorName": author -> name,
        }`,
    { slug }
  );
}

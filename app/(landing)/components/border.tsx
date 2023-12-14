"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

const Seperation = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="w-full pt-16">
      <Image
        width={1920}
        height={1080}
        src={resolvedTheme === "dark" ? "/Layer-dark.svg" : "/Layer.svg"}
        alt="image"
        className="object-cover object-center transition"
      />
    </div>
  );
};

export default Seperation;

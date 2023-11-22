"use client";

import { cn } from "@/lib/utils";
import Link from "@/node_modules/next/link";
import { useTheme } from "next-themes";
import { PT_Sans } from "next/font/google";
import Image from "next/image";

const font = PT_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

const Footer = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="relative flex flex-col items-center space-y-20">
      <a href="eloquent.ior">
        {" "}
        <Image
          src={
            resolvedTheme === "light"
              ? "/contact-light.svg"
              : "/contact-dark.svg"
          }
          width={600}
          height={600}
          alt="contact-image"
          className="object-cover object-center"
        />
      </a>
      <div className="w-full text-center absolute border-[0.5px] rounded-lg bottom-[166px] border-primary"></div>
      <footer
        className={cn("text-lg mb-3 font-normal text-center", font.className)}
      >
        Copyright @ Eloquent Exchange 2023. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Footer;

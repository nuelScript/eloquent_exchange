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
    <div className="relative w-50 h-50 my-0 mt-6 flex flex-col items-center space-y-20">
      <a href="eloquent.ior">
        {" "}
        <Image
          src={
            resolvedTheme === "light"
              ? "/contact-light.svg"
              : "/contact-dark.svg"
          }
          width={450}
          height={450}
          alt="contact-image"
          className="object-cover mt-2 object-centerb"
        />
      </a>
      <div className="w-full text-center absolute border-[0.6px] rounded-lg bottom-[150px] border-primary"></div>
      <footer
        className={cn(
          "text-lg mb-4 -mt-6 font-normal text-center",
          font.className
        )}
      >
        Copyright @ Eloquent Exchange 2023. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Footer;

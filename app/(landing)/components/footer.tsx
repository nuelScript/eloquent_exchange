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
<<<<<<< HEAD
    <div className="relative w-50 h-50 my-0 mt-6 flex flex-col items-center space-y-20">
=======
    <div className="relative flex flex-col items-center space-y-20">
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
      <a href="eloquent.ior">
        {" "}
        <Image
          src={
            resolvedTheme === "light"
              ? "/contact-light.svg"
              : "/contact-dark.svg"
          }
<<<<<<< HEAD
          width={450}
          height={450}
          alt="contact-image"
          className="object-cover mt-2 object-centerb"
        />
      </a>
      <div className="w-full text-center absolute border-[0.6px] rounded-lg bottom-[150px] border-primary"></div>
=======
          width={600}
          height={600}
          alt="contact-image"
          className="object-cover object-center"
        />
      </a>
      <div className="w-full text-center absolute border-[0.5px] rounded-lg bottom-[166px] border-primary"></div>
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
      <footer
        className={cn("text-lg mb-3 font-normal text-center", font.className)}
      >
        Copyright @ Eloquent Exchange 2023. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Footer;

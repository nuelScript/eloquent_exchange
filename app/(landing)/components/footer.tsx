"use client";

import { cn } from "@/lib/utils";
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
      <Image
        src={
          resolvedTheme === "light" ? "/contact-light.svg" : "/contact-dark.svg"
        }
        width={600}
        height={600}
        alt="contact-image"
        className="object-cover object-center"
      />
      <div className="w-full absolute border-[0.5px] rounded-lg bottom-[166px] border-primary"></div>
      <footer className={cn("text-xl font-normal", font.className)}>
        Copyright @ Eloquent Exchange 2023. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Footer;

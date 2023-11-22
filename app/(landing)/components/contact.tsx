"use client";

import Image from "next/image";
import ContactForm from "./contact-form";
import { useTheme } from "next-themes";

const ContactSection = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div id="contact" className="flex flex-col space-y-12 px-10">
      <div className="flex min-[912px]:flex-row flex-col min-[912px]:justify-between items-center min-[912px]:space-y-0 space-y-8">
        <div className="flex flex-col min-[912px]:items-start items-center space-y-2 text-primary min-[912px]:text-left text-center">
          <h3 className="font-semibold sm:text-3xl md:text-6xl">
            Get in touch with{" "}
            <span className="text-[#4168B7] dark:text-[#A77700]">Us.</span>
          </h3>
          <p className="font-light text-md min-[912px]:w-full w-3/4 leading-normal">
            Effective communication fosters understanding, cooperation, and
            positive outcomes for all.
          </p>
        </div>
        <Image
          src={
            resolvedTheme === "dark"
              ? "/contact-image-dark.svg"
              : "/contact-image.svg"
          }
          width={400}
          height={400}
          alt="contactimage"
          className="object-cover object-center"
        />
      </div>
      <div className="flex justify-center items-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;

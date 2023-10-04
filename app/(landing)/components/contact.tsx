"use client";

import Image from "next/image";
import ContactForm from "./contact-form";
import { useTheme } from "next-themes";

const ContactSection = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div id="contact" className="flex flex-col space-y-12 px-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-2 text-primary">
          <h3 className="font-semibold text-3xl">
            Get in touch with{" "}
            <span className="text-[#4168B7] dark:text-[#A77700]">Us.</span>
          </h3>
          <p className="font-light text-sm">
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

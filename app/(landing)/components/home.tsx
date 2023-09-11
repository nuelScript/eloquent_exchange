"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";
import { Bitcoin, Chart, Courthouse, UserOctagon } from "iconsax-react";
import { Revalia } from "next/font/google";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { companies } from "./companies";

const font = Revalia({
  subsets: ["latin"],
  weight: ["400"],
});

const HomeSection = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div id="#home" className="flex flex-col space-y-8 px-10 pt-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-y-4">
          <h3 className="font-medium text-primary text-3xl leading-snug">
            <TypewriterComponent
              options={{
                strings: [
                  "Start trading in crypto in an",
                  "Enjoy the best market rates with",
                  "Instant Trades: Secure Your",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 150,
              }}
            />
            <span className="text-[#4168B7] dark:text-[#A77700]">
              <TypewriterComponent
                options={{
                  strings: ["instant.", "Eloquent Exchange.", "Investments !"],
                  autoStart: true,
                  loop: true,
                  delay: 200,
                  deleteSpeed: 300,
                }}
              />
            </span>
          </h3>
          <p className="text-primary font-normal">
            Join the world&apos;s biggest and trusted exchange. Trade in
            Bitcoin, Etherum, dodge and many more currencies.
          </p>
          <div>
            <Button
              variant="custom"
              className="rounded-br-none rounded-tl-none rounded-tr-lg rounded-bl-lg"
            >
              Trade Crypto
              <Bitcoin className="h-6 w-6 ml-2 rotate-45" />
            </Button>
          </div>
        </div>
        <Image
          src={resolvedTheme === "dark" ? "/home-dark.svg" : "/home.svg"}
          width={300}
          height={300}
          alt="Image"
          className="object-cover object-center"
        />
      </div>
      <div className={cn("text-center text-primary", font.className)}>
        <TypewriterComponent
          options={{
            strings:
              "Welcome to Eloquent Exchange. Your one stop community for all cryptocurrencies 🚀.",
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="flex space-x-12 justify-center items-center">
        {companies.map((company) => (
          <Image
            key={company.src}
            src={company.src}
            alt={company.alt}
            className={company.className}
            width={100}
            height={100}
          />
        ))}
      </div>
      <div className="flex flex-col space-y-8 pt-20">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-8">
            <h3 className="font-semibold text-2xl">
              Start Trading with Eloquent <br /> Exchange in a few steps
            </h3>
            <div>
              <Button
                variant="custom"
                className="rounded-br-none rounded-tl-none rounded-tr-lg rounded-bl-lg"
                disabled
              >
                Trade Crypto <Bitcoin className="h-6 w-6 ml-2 rotate-45" />
              </Button>
            </div>
          </div>
          {/* <Image
            src="/rocket-straight.svg"
            width={100}
            height={100}
            alt="rocket"
            className="object-cover object-center"
          /> */}
          <div className="flex p-8 items-center border border-primary rounded-br-none rounded-tl-none rounded-tr-2xl rounded-bl-2xl">
            <UserOctagon className="h-10 w-10 mr-4" />
            <div className="flex flex-col space-y-2 text-primary">
              <h2 className="font-semibold text-lg">Create Account</h2>
              <p className="font-normal text-sm">
                Sign up with your{" "}
                <span className="text-[#4168B7] dark:text-[#A77700]">
                  email
                </span>{" "}
                within <br /> minutes, and{" "}
                <span className="text-[#4168B7] dark:text-[#A77700]">
                  verify identity.
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex p-8 items-center border border-primary rounded-br-none rounded-tl-none rounded-tr-2xl rounded-bl-2xl">
            <Courthouse className="h-10 w-10 mr-4" />
            <div className="flex flex-col space-y-2 text-primary">
              <h2 className="font-semibold text-lg">Verify payment mode</h2>
              <p className="font-normal text-sm">
                Verify your mode of{" "}
                <span className="text-[#4168B7] dark:text-[#A77700]">
                  payment
                </span>{" "}
                in an <br /> easy way.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <div className="flex p-8 items-center border border-primary rounded-br-none rounded-tl-none rounded-tr-2xl rounded-bl-2xl">
            <Chart className="h-10 w-10 mr-4" />
            <div className="flex flex-col space-y-2 text-primary">
              <h2 className="font-semibold text-lg">Start trading instantly</h2>
              <p className="font-normal text-sm">
                <span className="text-[#4168B7] dark:text-[#A77700]">
                  Buy & sell
                </span>{" "}
                variety of top coins at <br /> the best prices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;

"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import {
  I24Support,
  MoneySend,
  MonitorMobbile,
  ShieldTick,
} from "iconsax-react";
const AboutSection = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div id="about" className="flex flex-col w-full space-y-8 px-10 mb-10">
      <div className="flex min-[912px]:flex-row flex-col-reverse justify-between min-[912px]:space-y-0 space-y-8 mb-20">
        <Image
          src={resolvedTheme === "dark" ? "/about-dark.svg" : "/about.svg"}
          alt="about-image"
          width={450}
          height={450}
          className="object-cover object-center  min-[912px]:flex hidden"
        />
        <div className="flex flex-col space-y-6 justify-center min-[912px]:items-end items-center">
          <p className="min-[912px]:text-xl text-base font-normal text-primary">
            Join our crypto exchange
          </p>
          <h3 className="min-[912px]:text-5xl text-2xl min-[912px]:font-medium font-normal min-[912px]:text-left text-center text-primary leading-normal">
            Best way to buy and sell{" "}
            <span className="text-[#4168B7] dark:text-[#A77700]">crypto.</span>
          </h3>
          <Image
            src={resolvedTheme === "dark" ? "/about-dark.svg" : "/about.svg"}
            alt="about-image"
            width={450}
            height={450}
            className="object-scale-down object-center  min-[912px]:hidden block"
          />
          <p className="min-[912px]:text-xl text-sm min-[912px]:text-right text-center font-normal min-[912px]:w-2/5 w-full">
            Eloquent exchange is the community-run technology powering the
            cryptocurrency, and thousands of decentralized applications.
          </p>
        </div>
      </div>
      <div className="flex flex-col min-[912px]:space-y-12 space-y-4 items-center">
        <div className="flex min-[912px]:flex-row flex-col min-[912px]:space-x-4 min-[912px]:space-y-0 space-x-0 space-y-4">
<<<<<<< HEAD
          <div className="flex flex-col  hover:dark:bg-[#A77700] hover:dark:text-[#000000] hover:dark:border-[#A77700] border-2 border-white border-b-0 bg-gradient-to-b  dark:from-gray-700 hover:dark:from-[#ffffff] hover:from-[#ffffff] p-4 rounded-3xl space-y-6 min-[912px]:w-[500px] w-full">
            <div className="flex min-[912px]:flex-col flex-row min-[912px]:space-x-0 space-x-4 min-[912px]:space-y-2 space-y-0 min-[912px]:items-start items-center">
              <ShieldTick className="min-[912px]:w-10 w-8 min-[912px]:h-10 h-8" />
              <h3 className="text-xl min-[912px]:font-semibold font-normal">
                Safe and Secure
              </h3>
            </div>
            <p className="text-base font-normal">
=======
          <div className="flex flex-col border-2 border-white border-b-0 bg-gradient-to-b from-[#FFFFFF] dark:from-[#000000] dark:to-[#FFFFFF] p-4 rounded-3xl space-y-6 min-[912px]:w-[500px] w-full">
            <div className="flex min-[912px]:flex-col flex-row min-[912px]:space-x-0 space-x-4 min-[912px]:space-y-2 space-y-0 min-[912px]:items-start items-center">
              <ShieldTick className="min-[912px]:w-10 w-8 min-[912px]:h-10 h-8" />
              <h3 className="text-primary text-xl min-[912px]:font-semibold font-normal">
                Safe and Secure
              </h3>
            </div>
            <p className="text-primary text-base font-normal">
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
              Your data is safe and secured with us. None of your data is shared
              with a third party company.
            </p>
          </div>
<<<<<<< HEAD
          <div className="flex flex-col  hover:dark:bg-[#A77700] hover:dark:text-[#000000] hover:dark:border-[#A77700] border-2 border-white border-b-0 bg-gradient-to-b  dark:from-gray-700 hover:dark:from-[#ffffff] hover:from-[#ffffff] p-4 rounded-3xl space-y-6 min-[912px]:w-[500px] w-full">
            <div className="flex min-[912px]:flex-col flex-row min-[912px]:space-x-0 space-x-4 min-[912px]:space-y-2 space-y-0 min-[912px]:items-start items-center">
              <MonitorMobbile className="min-[912px]:w-10 w-8 min-[912px]:h-10 h-8" />
              <h3 className=" text-xl min-[912px]:font-semibold font-normal">
                User-friendly interface
              </h3>
            </div>
            <p className=" text-base font-normal">
=======
          <div className="flex flex-col border-2 border-white border-b-0 bg-gradient-to-b from-[#FFFFFF] dark:from-[#000000] dark:to-[#FFFFFF] p-4 rounded-3xl space-y-6 min-[912px]:w-[500px] w-full">
            <div className="flex min-[912px]:flex-col flex-row min-[912px]:space-x-0 space-x-4 min-[912px]:space-y-2 space-y-0 min-[912px]:items-start items-center">
              <MonitorMobbile className="min-[912px]:w-10 w-8 min-[912px]:h-10 h-8" />
              <h3 className="text-primary text-xl min-[912px]:font-semibold font-normal">
                User-friendly interface
              </h3>
            </div>
            <p className="text-primary text-base font-normal">
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
              The platform is designed to be as simple as possible so our users
              can trade with ease.
            </p>
          </div>
        </div>
        <div className="flex min-[912px]:flex-row flex-col min-[912px]:space-x-4 min-[912px]:space-y-0 space-x-0 space-y-4">
<<<<<<< HEAD
          <div className="flex flex-col  hover:dark:bg-[#A77700] hover:dark:text-[#000000] hover:dark:border-[#A77700] border-2 border-white border-b-0 bg-gradient-to-b  dark:from-gray-700 hover:dark:from-[#ffffff] hover:from-[#ffffff] p-4 rounded-3xl space-y-6 min-[912px]:w-[500px] w-full">
            <div className="flex min-[912px]:flex-col flex-row min-[912px]:space-x-0 space-x-4 min-[912px]:space-y-2 space-y-0 min-[912px]:items-start items-center">
              <MoneySend className="min-[912px]:w-10 w-8 min-[912px]:h-10 h-8" />
              <h3 className="text-xl min-[912px]:font-semibold font-normal">
                Friendly rates
              </h3>
            </div>
            <p className="text-base font-normal">
=======
          <div className="flex flex-col border-2 border-white border-b-0 bg-gradient-to-b from-[#FFFFFF] dark:from-[#000000] dark:to-[#FFFFFF] p-4 rounded-3xl space-y-6 min-[912px]:w-[500px] w-full">
            <div className="flex min-[912px]:flex-col flex-row min-[912px]:space-x-0 space-x-4 min-[912px]:space-y-2 space-y-0 min-[912px]:items-start items-center">
              <MoneySend className="min-[912px]:w-10 w-8 min-[912px]:h-10 h-8" />
              <h3 className="text-primary text-xl min-[912px]:font-semibold font-normal">
                Friendly rates
              </h3>
            </div>
            <p className="text-primary text-base font-normal">
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
              Whenever you buy or sell on Eloquent exchange you receive best
              market rates.
            </p>
          </div>
<<<<<<< HEAD
          <div className="flex flex-col  hover:dark:bg-[#A77700] hover:dark:text-[#000000] hover:dark:border-[#A77700] border-2 border-white border-b-0 bg-gradient-to-b  dark:from-gray-700 hover:dark:from-[#ffffff] hover:from-[#ffffff] p-4 rounded-3xl space-y-6 min-[912px]:w-[500px] w-full">
            <div className="flex min-[912px]:flex-col flex-row min-[912px]:space-x-0 space-x-4 min-[912px]:space-y-2 space-y-0 min-[912px]:items-start items-center">
              <I24Support className="min-[912px]:w-10 w-8 min-[912px]:h-10 h-8" />
              <h3 className="text-xl min-[912px]:font-semibold font-normal">
=======
          <div className="flex flex-col border-2 border-white border-b-0 bg-gradient-to-b from-[#FFFFFF] dark:from-[#000000] dark:to-[#FFFFFF] p-4 rounded-3xl space-y-6 min-[912px]:w-[500px] w-full">
            <div className="flex min-[912px]:flex-col flex-row min-[912px]:space-x-0 space-x-4 min-[912px]:space-y-2 space-y-0 min-[912px]:items-start items-center">
              <I24Support className="min-[912px]:w-10 w-8 min-[912px]:h-10 h-8" />
              <h3 className="text-primary text-xl min-[912px]:font-semibold font-normal">
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
                {" "}
                24/7 Customer Service
              </h3>
            </div>
<<<<<<< HEAD
            <p className="text-base font-normal">
=======
            <p className="text-primary text-base font-normal">
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
              Our customer service representatives are always available to
              attend to your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

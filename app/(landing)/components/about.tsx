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
    <div className="flex flex-col w-full space-y-8 px-10 mb-10">
      <div className="flex justify-between mb-20">
        <Image
          src={resolvedTheme === "dark" ? "/about-dark.svg" : "/about.svg"}
          alt="about-image"
          width={500}
          height={500}
          className="object-cover object-center w-auto h-auto"
        />
        <div className="flex flex-col space-y-2 justify-center items-end">
          <p className="text-lg font-normal text-primary">
            Join our crypto exchange
          </p>
          <h3 className="text-3xl font-semibold text-primary">
            Best way to buy and sell{" "}
            <span className="text-[#4168B7] dark:text-[#A77700]">crypto.</span>
          </h3>
          <p className="text-xl text-right font-normal w-2/5">
            Eloquent exchange is the community-run technology powering the
            cryptocurrency, and thousands of decentralized applications.
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-12 items-center">
        <div className="flex space-x-4">
          <div className="flex flex-col border-2 border-white border-b-0 bg-gradient-to-b from-[#FFFFFF] dark:from-[#000000] dark:to-[#FFFFFF] p-4 rounded-3xl space-y-6 w-[500px]">
            <ShieldTick className="w-10 h-10" />
            <div className="flex flex-col space-y-4">
              <h3 className="text-primary text-xl font-semibold">
                Safe and Secure
              </h3>
              <p className="text-primary text-base font-normal">
                Your data is safe and secured with us. None of your data is
                shared with a third party company.
              </p>
            </div>
          </div>
          <div className="flex flex-col border-2 border-white border-b-0 bg-gradient-to-b from-[#FFFFFF] dark:from-[#000000] dark:to-[#FFFFFF] p-4 rounded-3xl space-y-6 w-[500px]">
            <MonitorMobbile className="w-10 h-10" />
            <div className="flex flex-col space-y-4">
              <h3 className="text-primary text-xl font-semibold">
                User-friendly interface
              </h3>
              <p className="text-primary text-base font-normal">
                The platform is designed to be as simple as possible so our
                users can trade with ease.
              </p>
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex flex-col border-2 border-white border-b-0 bg-gradient-to-b from-[#FFFFFF] dark:from-[#000000] dark:to-[#FFFFFF] p-4 rounded-3xl space-y-6 w-[500px]">
            <MoneySend className="w-10 h-10" />
            <div className="flex flex-col space-y-4">
              <h3 className="text-primary text-xl font-semibold">
                Friendly rates
              </h3>
              <p className="text-primary text-base font-normal">
                Whenever you buy or sell on Eloquent exchange you receive best
                market rates.
              </p>
            </div>
          </div>
          <div className="flex flex-col border-2 border-white border-b-0 bg-gradient-to-b from-[#FFFFFF] dark:from-[#000000] dark:to-[#FFFFFF] p-4 rounded-3xl space-y-6 w-[500px]">
            <I24Support className="w-10 h-10" />
            <div className="flex flex-col space-y-4">
              <h3 className="text-primary text-xl font-semibold">
                {" "}
                24/7 Customer Service
              </h3>
              <p className="text-primary text-base font-normal">
                Our customer service representatives are always available to
                attend to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

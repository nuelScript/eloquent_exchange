"use client";

import { Button } from "@/components/ui/button";
import { Data } from "iconsax-react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ReferralSection = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex flex-col space-y-10 px-10 pt-5">
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-6">
          <Image
            src="/logo-and-text.png"
            alt="text-and-logo"
            width={350}
            height={350}
          />
          <h3 className="font-medium text-5xl leading-normal">
            <span className="text-[#4168B7] dark:text-[#A77700]">Refer</span>{" "}
            and earn big <br /> rewards
          </h3>
          <p className="font-normal text-xl text-primary w-3/5">
            Referrals is a powerful way to strengthen and expand our network and
            a wonderful way for you to earn rewards.
          </p>
          <div>
            <Button
              variant="custom"
              className="rounded-br-none rounded-tl-none rounded-tr-lg rounded-bl-lg"
            >
              Refer Now <Data className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
        <Image src="/referral.png" alt="referral" width={500} height={500} />
      </div>
      <div className="flex justify-center">
        <Image
          src={resolvedTheme === "dark" ? "/roadmap-dark.png" : "/roadmap.png"}
          alt="roadmap"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <div className="flex justify-between items-center">
          <h3 className="text-5xl font-medium leading-normal">
            Here are some{" "}
            <span className="text-[#4168B7] dark:text-[#A77700]">
              acceptable
            </span>{" "}
            <br /> payment method on <br />{" "}
            <span className="text-[#4168B7] dark:text-[#A77700]">
              Eloquent Exchange.
            </span>
          </h3>
          <Image
            src="/credit_card_dark.png"
            alt="credit_card_payment"
            width={500}
            height={500}
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/demo_card_dark.svg"
            alt="demo_card"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default ReferralSection;

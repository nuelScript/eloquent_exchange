"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import isAuth from "@/components/isAuth";
import { DirectRight } from "iconsax-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BuyPage = () => {
  return (
    <div className="flex min-[1000px]:flex-row -mt-5 justify-center h-full w-full my-auto flex-col min-[1000px]:justify-between min-[1000px]:items-start items-center pt-12 px-10 relative min-h-screen bg-none bg-center bg-no-repeat bg-contain bg-fixed">
      <div className="flex-col items-start my-auto gap-y-3 min-[1000px]:flex hidden">
        <Image
          src="/buy.svg"
          alt="Buy Crypto"
          width={400}
          height={400}
          className="ml-8 animate-pulse"
        />
      </div>
      <div className="flex flex-col my-auto space-y-3 min-[912px]:w-[500px] w-full">
        <div className="text-center space-y-5 flex flex-col items-center">
          <h1 className="lg:text-[56px] font-normal text-2xl">
            Buy Transaction!
          </h1>
          <p className="mt-[8px] lg:text-[20px] w-[432px]">
            Buying #amt worth of Litecoin at ₦84600 Kindly provide your wallet
            address
          </p>
        </div>
        <div>
          <form className="space-y-8 flex flex-col">
            <div className="grid w-full h-full py-3 max-w-lg items-center gap-1.5">
              <Label htmlFor="network">Network</Label>
              <Input
                style={{ padding: "30px 10px" }}
                type="text"
                id="network"
                className="w-full rounded-lg p-2 py-2  mt-1"
                placeholder="Network"
              />
            </div>

            <div className="grid w-full max-w-lg items-center gap-1.5">
              <Label htmlFor="wallet">Wallet Address</Label>
              <Input
                style={{ padding: "30px 10px" }}
                type="text"
                id="wallet"
                className="w-full rounded-lg p-2 py-2  mt-1"
                placeholder="Wallet"
              />
            </div>
            <Button
              style={{ borderRadius: "30px" }}
              className="w-full text-white rounded-lg bg-[#4168B7] hover:bg-primary text-lg dark:bg-[#A77700] dark:hover:bg-primary py-8 hover:text-white dark:hover:text-black"
              variant="default"
            >
              Continue
              <DirectRight className="w-5 h-5 ml-2" variant="Linear" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default isAuth(BuyPage);

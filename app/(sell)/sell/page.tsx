"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import isAuth from "@/components/isAuth";
import { DirectRight } from "iconsax-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SellPage = () => {
  return (
    <div className="flex min-[1000px]:flex-row justify-center h-full w-full -mt-5 my-auto flex-col min-[1000px]:justify-between min-[1000px]:items-start items-center pt-12 px-10 relative min-h-screen  bg-[length:200px_150px] bg-none bg-center bg-no-repeat bg-fixed">
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
        <div className="text-left space-y-5 flex flex-col">
          <h1 className="lg:text-[56px] font-bold text-2xl">
            Sell Transaction!
          </h1>
          <p className="mt-[8px]  text-left lg:text-[16px] w-[432px]">
            Selling #amt worth of Litecoin at ₦84600
          </p>
          <p className="-mt-[8px]">Kindly provide your wallet address</p>
        </div>
        <div>
          {/* <Form> */}
          <form className="space-y-8 flex flex-col">
            <div className="grid w-full h-full py-3 max-w-lg items-center gap-1.5">
              <Label htmlFor="bank">Bank Name</Label>
              <Input
                style={{ padding: "30px 10px" }}
                type="text"
                id="bank"
                className="w-full rounded-lg p-2 py-2  mt-1"
                placeholder="Bank Name"
              />
            </div>

            <div className="grid w-full max-w-lg items-center gap-1.5">
              <Label htmlFor="number">Account Number</Label>
              <Input
                style={{ padding: "30px 10px" }}
                type="number"
                id="number"
                className="w-full rounded-lg p-2 py-2  mt-1"
                placeholder="Account Number"
              />
            </div>

            <Button
              className="w-full text-white rounded-[30px] bg-[#4168B7] hover:bg-primary text-lg dark:bg-[#A77700] dark:hover:bg-primary py-8 hover:text-white dark:hover:text-black"
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
export default isAuth(SellPage);

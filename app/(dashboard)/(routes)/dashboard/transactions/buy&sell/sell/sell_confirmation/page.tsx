"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import isAuth from "@/components/isAuth";

const SellConfirmation = () => {
  return (
    <Card className="flex flex-col items-center justify-center bg-transparent border-none">
      <CardHeader className="text-4xl text-center min-[912px]:text-center">
        Kindly pay into the following wallet addresses
      </CardHeader>
      <CardContent className="flex flex-col min-[912px]:w-[500px] w-full space-y-8">
        <div className="flex flex-col w-full max-w-sm items-start gap-4">
          <Label htmlFor="email" className="text-base font-semibold">
            Bitcoin Address
          </Label>
          <div className="flex flex-col w-full space-y-2">
            <Input
              readOnly
              value="1EUXRwoj2X8ztZWzM75yDHKr2zE7Z9wR8v"
              className="bg-transparent"
            />
            <h3 className="font-semibold text-[#4168B7] dark:text-[#A77700]">
              Network: Trc20
            </h3>
          </div>
          <Label htmlFor="email" className="text-base font-semibold">
            USDT Address
          </Label>
          <div className="flex flex-col w-full space-y-2">
            <Input
              readOnly
              value="TVCbaWjWuv5QycfzUiRBwqf2cWqypTc8Bu"
              className="bg-transparent"
            />
            <h3 className="font-semibold text-[#4168B7] dark:text-[#A77700]">
              Network: Eth(ERC20)
            </h3>
          </div>

          <Label htmlFor="email" className="text-base font-semibold">
            Ethereum Address
          </Label>
          <div className="flex flex-col w-full space-y-2">
            <Input
              readOnly
              value="0xc45c25871242c2fdf5567a13972678f1e0b6d6f0"
              className="bg-transparent"
            />
            <h3 className="font-semibold text-[#4168B7] dark:text-[#A77700]">
              Network: Bitcoin (BTC)
            </h3>
          </div>

          <Label htmlFor="email" className="text-base font-semibold">
            BNB Smart Chain Address
          </Label>
          <div className="flex flex-col w-full space-y-2">
            <Input
              readOnly
              value="0xc45c25871242c2fdf5567a13972678f1e0b6d6f0"
              className="bg-transparent"
            />
            <h3 className="font-semibold text-[#4168B7] dark:text-[#A77700]">
              Network: BNB (BEP20)
            </h3>
          </div>
          <Label htmlFor="email" className="text-base font-semibold">
            Doge Address
          </Label>
          <div className="flex flex-col w-full space-y-2">
            <Input
              readOnly
              value="DDma8P1im4FUaMvXHuj4yriqr35Mo4kMuk"
              className="bg-transparent"
            />
            <h3 className="font-semibold text-[#4168B7] dark:text-[#A77700]">
              Network: Doge
            </h3>
          </div>
        </div>
        <div className="flex flex-col justify-start spa">
          <h3 className="font-semibold">
            Kindly send receipt of payment alongside your{" "}
            <span className="text-[#4168B7] dark:text-[#A77700]">
              Bank Name{" "}
            </span>
            and{" "}
            <span className="text-[#4168B7] dark:text-[#A77700]">
              Account Number
            </span>{" "}
            to the following email address
          </h3>
          <Link href="mailto:support@eloquentexchange.com">
            <span className="text-[#4168B7] dark:text-[#A77700] hover:underline cursor-pointer">
              support@eloquentexchange.com
            </span>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default isAuth(SellConfirmation);

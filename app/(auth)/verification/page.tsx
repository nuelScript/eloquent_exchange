"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshSquare } from "iconsax-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

let currentOTPIndex = 0;

const VerificationPage = () => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);

    if (!value) setActiveOTPIndex(currentOTPIndex - 1);
    else setActiveOTPIndex(currentOTPIndex + 1);

    setOtp(newOTP);
  };

  const handleOnKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index;
    if (key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  return (
    <main className="flex justify-between px-10 pt-20">
      <div className="flex flex-col space-y-8">
        <Image
          src={
            resolvedTheme === "light" ? "/verify-light.svg" : "/verify-dark.svg"
          }
          alt="verify"
          width={400}
          height={400}
          className="object-cover"
        />
        <Image src="/coin.svg" alt="coin" width={80} height={80} />
      </div>
      <div className="flex my-auto flex-col space-y-6">
        <h1 className="text-[48px] text-primary font-normal">
          Input the verification code.
        </h1>
        <div className="flex flex-col space-y-6 items-center">
          <p className="text-left text-primary text-sm font-medium w-full">
            Verification plays a pivotal role in safeguarding your online
            presence and shielding you <br /> from the perils of cybercrimes.
          </p>
          <div className="flex space-x-4">
            {otp.map((data, index) => {
              return (
                <div key={index}>
                  <Input
                    ref={index === activeOTPIndex ? inputRef : null}
                    onChange={handleOnChange}
                    onKeyDown={(e) => handleOnKeyDown(e, index)}
                    value={otp[index]}
                    className="w-12 h-12 border-2 rounded-lg bg-transparent outline-none text-center text-primary font-semibold text-xl border-muted-foreground focus:border-gray-700 focus:text-primary transition spin-button-none"
                  />
                </div>
              );
            })}
          </div>
          <div className="text-center text-primary text-sm font-medium">
            Didn&apos;t receive a code?
          </div>
          <Button
            style={{ borderRadius: "30px" }}
            type="button"
            className="w-5/6 text-white rounded-lg bg-[#4168B7] hover:bg-primary text-lg dark:bg-[#A77700] dark:hover:bg-primary py-8 hover:text-white dark:hover:text-black"
            variant="custom"
            onClick={router.refresh}
          >
            <RefreshSquare className="mr-2" /> Resend..
          </Button>
        </div>
      </div>
    </main>
  );
};

export default VerificationPage;

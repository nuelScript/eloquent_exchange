"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { DirectRight } from "iconsax-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TermsPage = () => {
  return (
    <div className="flex min-[1000px]:flex-row justify-center h-full w-full flex-col min-[1000px]:justify-between min-[1000px]:items-start items-center pt-12 px-10 relative min-h-screen bg-[length:200px_150px] bg-none bg-center bg-no-repeat bg-fixed">
      <div className="flex-col items-start  gap-y-3 min-[1000px]:flex hidden">
        <Image
          src="/terms.svg"
          alt="Terms & Condition"
          width={500}
          height={500}
          className="ml-8 animate-pulse"
        />
      </div>
      <div className="flex flex-col space-y-3 min-[912px]:w-[600px] w-full">
        <div className="text-center space-y-5 flex flex-col items-center">
          <h1 className="lg:text-[56px] mb-4 font-bold text-2xl">
            Terms of Contract!
          </h1>
        </div>
        <div className="space-y-8">
          <ul className="flex list-disc flex-col space-y-8">
            <li>
              Third party payments are not allowed. Payments must be made from
              your personal account, matching your verified name on your
              eloquent profile.
            </li>

            <li>
              For a successful transaction, do not enter any crypto related
              terms (BTC, USDT, etc.) in your payment narration.{" "}
            </li>

            <li>Opening orders without making payment is not allowed. </li>

            <li>
              Failure to comply with the above stated terms leads to limitation
              on your Eloquent exchange account and total loss of paid amount.{" "}
            </li>
          </ul>
          <div className="items-center  flex">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 ml-2 leading-none">
              <label
                htmlFor="terms1"
                className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p className="text-sm text-muted-foreground">
                I agree to the instructions above and want to proceed to payment
                section
              </p>
            </div>
          </div>
          <Link href="/dashboard">
            <Button
              className="w-full text-white py-8 rounded-[30px] bg-[#4168B7] hover:bg-primary text-lg dark:bg-[#A77700] dark:hover:bg-primary hover:text-white dark:hover:text-black"
              variant="default"
            >
              Continue
              <DirectRight className="w-5 h-5 ml-2" variant="Linear" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TermsPage;

"use client";

import { getRefferalRoute } from "@/lib/helpers";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useEffect, useState } from "react";
import { getCookie } from "@/lib/utils";
import isAuth from "@/components/isAuth";
import Image from "next/image";

const ReferPage = () => {
  const [referralId, setReferralId] = useState<string | null>();
  useEffect(() => {
    const fetchdata = async () => {
      const accessToken = getCookie("access_token");
      console.log("Access Token: ", accessToken);

      if (accessToken) {
        try {
          const response = await axios.get(getRefferalRoute, {
            headers: {
              Authorization: `JWT ${accessToken}`,
              "Content-Type": "application/json",
            },
          });
          const responseData = response.data;
          const referralCode = responseData;
          if (referralCode) {
            setReferralId(referralCode);
          }
        } catch (error) {
          console.error("Error", error);
        }
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full items-center my-auto mx-auto justify-between">
      <div className="flex justify-center  sm:mb-4 my-auto w-full h-full items-center">
        <Image
          src="/refer.svg"
          alt="Referal"
          width={400}
          height={400}
          className="ml-8 !sm:h-[250px] !sm:w-[250px] animate-pulse"
        />
      </div>
      <div className="flex flex-col justify-center my-auto mx-auto w-full h-full items-center">
        <h1 className="font-semibold text-primary text-5xl">$0.00</h1>
        <p className="font-normal mt-2 text-lg text-primary min-[450px]:text-left text-left min-[450px]:p-0 px-4">
          Refer your friends and earn 0.05% on all trades
        </p>
        <div className="flex mt-2 sm:w-full mx-auto lg:w-[450px] flex-col space-y-6 sm:px-4 px-6">
          <div className="flex flex-col items-start space-y-4">
            <Label htmlFor="your referral id">Your Referral ID</Label>
            <Input
              style={{ padding: "30px 10px" }}
              className="w-full  mx-auto bg-transparent text-left rounded-lg p-2 py-2  mt-1"
              readOnly
              value={referralId || ""}
            />
          </div>
          <div className="flex mt-2 flex-col items-start space-y-4">
            <Label htmlFor="total number of referrals">
              Total Number of Referrals
            </Label>
            <Input
              style={{ padding: "30px 10px" }}
              readOnly
              value="0"
              className="w-full mx-auto bg-transparent text-left rounded-lg p-2 py-2  mt-1"
            />
          </div>
          <div className="flex mt-2 flex-col items-start space-y-4">
            <Label htmlFor="balance and total earnings">
              Balance and Total Earnings
            </Label>
            <Input
              style={{ padding: "30px 10px" }}
              readOnly
              value="$0"
              className="w-full  mx-auto bg-transparent text-left rounded-lg p-2 py-2  mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default isAuth(ReferPage);

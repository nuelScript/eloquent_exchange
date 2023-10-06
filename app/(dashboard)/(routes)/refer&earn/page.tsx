"use client";

import { getRefferalRoute } from "@/routes/route";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useEffect, useState } from "react";

const ReferPage = () => {
  const [referralId, setReferralId] = useState<string | null>();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(getRefferalRoute);
        const responseData = response.data;
        const referralCodes = responseData.referral_codes;
        if (referralCodes && referralCodes.length > 0) {
          setReferralId(referralCodes[0]);
        }
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <main className="flex flex-col space-y-8 items-center pt-12">
      <h1 className="font-semibold text-primary text-5xl">$0.00</h1>
      <p className="font-normal text-lg text-primary min-[450px]:text-left text-center min-[450px]:p-0 px-4">
        Refer your friends and earn 0.05% on all trades
      </p>
      <div className="flex flex-col space-y-6 min-[450px]:p-0 px-4">
        <div className="flex flex-col items-start space-y-4">
          <Label htmlFor="your referral id">Your Referral ID</Label>
          <Input
            readOnly
            value={referralId || ""}
            className="bg-transparent text-center "
          />
        </div>
        <div className="flex flex-col items-start space-y-4">
          <Label htmlFor="total number of referrals">
            Total Number of Referrals
          </Label>
          <Input readOnly value="$0" className="bg-transparent text-center" />
        </div>
        <div className="flex flex-col items-start space-y-4">
          <Label htmlFor="balance and total earnings">
            Balance and Total Earnings
          </Label>
          <Input readOnly value="$0" className="bg-transparent text-center" />
        </div>
      </div>
    </main>
  );
};

export default ReferPage;

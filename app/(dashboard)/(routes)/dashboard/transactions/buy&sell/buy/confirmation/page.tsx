"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import * as z from "zod";
import { formSchema } from "../page";
import { Button } from "@/components/ui/button";
import { BitcoinRefresh } from "iconsax-react";
import { useRouter } from "next/navigation";

const ConfirmationPage = () => {
  const [formData, setFormData] = useState<z.infer<typeof formSchema> | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    const storedBuyFormData = localStorage.getItem("buyFormData");
    if (storedBuyFormData) {
      const parsedFormData = JSON.parse(storedBuyFormData);
      setFormData(parsedFormData);
    }
  }, []);
  return (
    <Card className="flex flex-col items-center justify-center bg-transparent border-none">
      <CardHeader className="text-4xl text-center min-[912px]:text-center">
        Kindly confirm the following details of your trasaction.
      </CardHeader>
      <CardContent className="flex flex-col min-[912px]:items-start items-center min-[912px]:w-[500px] w-full space-y-8">
        {formData && (
          <div className="flex flex-col w-full max-w-sm items-start space-y-8">
            <div className="flex flex-col w-full space-y-2">
              <h3 className="font-semibold ">Amount: {formData?.amount}</h3>
            </div>
            <div className="flex flex-col w-full space-y-2">
              <h3 className="font-semibold capitalize">
                Coin Type: {formData?.coin_type}
              </h3>
            </div>
            <div className="flex flex-col w-full space-y-2">
              <h3 className="font-semibold capitalize">
                Network: {formData?.network}
              </h3>
            </div>
            <div className="flex flex-col w-full space-y-2">
              <h3 className="font-semibold">
                Wallet Address: {formData?.wallet_address}
              </h3>
            </div>
            <Button
              style={{ padding: "30px 10px" }}
              type="submit"
              variant="custom"
              className="w-full"
              onClick={() => router.push("/dashboard/transactions/payment")}
            >
              Continue <BitcoinRefresh className="ml-2" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ConfirmationPage;

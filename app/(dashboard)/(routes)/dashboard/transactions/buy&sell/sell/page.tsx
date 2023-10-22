"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OFFICIAL_RATES } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowSwapHorizontal, BitcoinRefresh } from "iconsax-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import isAuth from "@/components/isAuth";
import axios from "axios";
import { sellRoute } from "@/lib/helpers";
import { getCookie } from "@/lib/utils";
import { useState } from "react";

const formSchema = z.object({
  bankName: z.string().min(1, { message: "Please provide your bank name" }),
  accountNumber: z
    .string()
    .min(1, { message: "Please provide your account number" }),
  coinType: z.string().min(1, {
    message: "Coin type is required",
  }),
  amount: z.coerce.number().min(0, { message: "Amount cannot be negative" }),
});

const Sellpage = () => {
  const router = useRouter();
  const [enteredAmount, setEnteredAmount] = useState<number | undefined>(
    undefined
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coinType: "",
      bankName: "",
      accountNumber: "",
      amount: 0,
    },
  });

  const accessToken = getCookie("access_token");

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await axios
        .post(sellRoute, data, {
          headers: {
            Authorization: `JWT ${accessToken}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          const responseData = response.data;
          const paymentLink = responseData.data.link;
          localStorage.setItem("link", paymentLink);
        })
        .then(() => router.push("/dashboard/transactions/payment"));
      setEnteredAmount(data.amount);
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };
  return (
    <div className="flex justify-center flex-col space-y-8 items-center py-12">
      <p className="text-primary font-medium min-[450px]:text-left text-center ">
        Kindly provide your bank number and account number
      </p>
      <Card className="bg-transparent border-none shadow-none w-[400px]">
        <CardContent className="py-2">
          <Form {...form}>
            <form
              className="space-y-10 min-[450px]:p-0 px-6"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="coinType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal text-primary text-base">
                      Coin Type
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full bg-transparent dark:border-primary">
                          <SelectValue
                            className="text-primary"
                            placeholder="Select coin name"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="bitcoin">Bitcoin</SelectItem>
                          <SelectItem value="ethereum">Ethereum</SelectItem>
                          <SelectItem value="usdt">USDT</SelectItem>
                          <SelectItem value="dodge">Dodge</SelectItem>
                          <SelectItem value="bnb">BNB</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="font-normal flex justify-between">
                      <span>Amount</span>{" "}
                      <span className="text-muted-foreground">
                        Rate: {OFFICIAL_RATES} / %
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-transparent border border-white"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="flex justify-between">
                      <span className="font-normal text-primary">
                        Amount: 0.0
                      </span>
                      <span className="text-[#4168B7] dark:text-[#A77700] font-normal flex items-center">
                        Set by Naira{" "}
                        <ArrowSwapHorizontal className="ml-2 w-6 h-6" />
                      </span>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bankName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal text-primary text-base">
                      Bank Name
                    </FormLabel>
                    <Input
                      className="text-primary text-left font-medium dark:border-primary bg-transparent"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="accountNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal text-primary text-base">
                      Account Number
                    </FormLabel>
                    <Input
                      className="text-primary text-left font-medium dark:border-primary bg-transparent"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" variant="custom" className="w-full">
                Continue <BitcoinRefresh className="ml-2" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default isAuth(Sellpage);

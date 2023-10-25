"use client";

import { buyRoute, getCoinList, getWalletListRoute } from "@/lib/helpers";
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
import axios from "axios";
import { ArrowSwapHorizontal, BitcoinRefresh } from "iconsax-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import isAuth from "@/components/isAuth";
import { useEffect, useState } from "react";
import { getCookie } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const formSchema = z.object({
  network: z.string().min(1, { message: "Select a network" }),
  wallet_address: z
    .string()
    .min(24, { message: "Enter a valid wallet address" })
    .max(62, { message: "Enter a valid wallet address" }),
  coin_type: z.string().min(1, {
    message: "Coin type is required",
  }),
  amount: z.coerce.number().min(0, { message: "Amount cannot be negative" }),
});

const Buypage = () => {
  const router = useRouter();
  const [enteredAmount, setEnteredAmount] = useState<number | undefined>(
    undefined
  );
  const [coinlist, setCoinList] = useState<any[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      network: "",
      wallet_address: "",
      coin_type: "",
      amount: 0,
    },
  });
  const accessToken = getCookie("access_token");

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await axios.get(getCoinList);
        const coinList = response.data;
        setCoinList(coinList);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchCoinData();
  }, [form]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await axios
        .post(buyRoute, data, {
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
      <p className="text-primary font-medium">
        Kindly provide your wallet address
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
                name="coin_type"
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
                      <span className="text-primary font-semibold ">
                        <ScrollArea className="w-36 h-5 items-center whitespace-nowrap rounded-md">
                          <div className="w-fit space-x-8 p-0">
                            {coinlist.map((coin) => (
                              <span
                                key={coin.id}
                                className="flex-1 text-muted-foreground overflow-hidden "
                              >
                                {coin.name} : {coin.buy_rate}
                              </span>
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
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
                name="network"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal text-primary text-base">
                      Network
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full bg-transparent dark:border-primary">
                          <SelectValue
                            className="text-primary"
                            placeholder="Select coin network"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="mtn mobile money">
                            Trc20
                          </SelectItem>
                          <SelectItem value="skrill">Eth(ERC20)</SelectItem>
                          <SelectItem value="orange mobile money">
                            Bitcoin (BTC)
                          </SelectItem>
                          <SelectItem value="neteller">BNB (BEP20)</SelectItem>
                          <SelectItem value="airtel mobile money">
                            Doge
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="wallet_address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-normal text-primary text-base">
                      Wallet Address
                    </FormLabel>
                    <Input
                      placeholder="Paste"
                      className="text-primary text-right font-medium dark:border-primary bg-transparent"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="custom"
                className="w-full"
                onSubmit={() => router.push("/dashboard/transactions/checkout")}
              >
                Continue <BitcoinRefresh className="ml-2" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default isAuth(Buypage);

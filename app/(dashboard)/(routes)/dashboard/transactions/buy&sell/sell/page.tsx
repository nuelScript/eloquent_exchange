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
import Image from "next/image";
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
import { getCoinList, sellRoute } from "@/lib/helpers";
import { getCookie } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
  const [initial, setInitial] = useState([]);
  const [enteredAmount, setEnteredAmount] = useState<number | undefined>(
    undefined
  );
  const [coinlist, setCoinList] = useState<any[]>([]);
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

  useEffect(() => {
    const fetchNewsdata = async () => {
      try {
        const response = await axios.get("https://api.coincap.io/v2/assets", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        let responseData = response.data.data;
        console.log(responseData);
        const coinn = responseData.slice(0, 10);
        console.log(coinn);
        setInitial(coinn);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchNewsdata();
  }, []);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    router.push("/dashboard/transactions/buy&sell/sell/sell_confirmation");
  };
  return (
    <div className="flex min-[1000px]:flex-row -mt-5 justify-center h-full w-full my-auto flex-col min-[1000px]:justify-between min-[1000px]:items-start items-center pt-12 px-10 relative min-h-screen  bg-[length:200px_150px] bg-none bg-center bg-no-repeat bg-contain bg-fixed">
      <div className="flex-col items-start my-auto gap-y-3 min-[1000px]:flex hidden">
        <Image
          src="/buy.svg"
          alt="sell Crypto"
          width={400}
          height={400}
          className="ml-8 animate-pulse"
        />
      </div>
      <div className="flex flex-col my-auto space-y-3 min-[912px]:w-[500px] w-full">
        <div className="text-center space-y-5 flex flex-col items-center">
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
                              <SelectTrigger
                                style={{ padding: "30px 10px" }}
                                className="w-full bg-transparent dark:border-primary"
                              >
                                <SelectValue
                                  className="text-primary"
                                  placeholder="Select coin name"
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="bitcoin">Bitcoin</SelectItem>
                                <SelectItem value="ethereum">
                                  Ethereum
                                </SelectItem>
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
                                      {coin.name} : {coin.sell_rate}
                                    </span>
                                  ))}
                                </div>
                                <ScrollBar orientation="horizontal" />
                              </ScrollArea>
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              style={{ padding: "30px 10px" }}
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
                            Payment Name
                          </FormLabel>
                          <Input
                            style={{ padding: "30px 10px" }}
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
                            style={{ padding: "30px 10px" }}
                            className="text-primary text-left font-medium dark:border-primary bg-transparent"
                            {...field}
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      style={{ padding: "30px 10px" }}
                      type="submit"
                      variant="custom"
                      className="w-full"
                    >
                      Continue <BitcoinRefresh className="ml-2" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <table className="table-auto rounded-lg text-center border-2 p-3 px-4">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Last Price</th>
            <th>24 chg(%)</th>
          </tr>
        </thead>
        <tbody className="my-auto border-3 py-3 mx-auto px-auto">
          {initial.map((ini: any, i) => (
            <tr className="border-2" key={i}>
              <td className="border-r-2 p-4 text-center mb-2">{i + 1}</td>
              <td className="border-r-2 p-4 text-center mb-2">{ini.name}</td>
              <td className="border-r-2 p-4 text-center mb-2">
                {Math.round(ini.priceUsd * 100) / 100}
              </td>
              <td className="border-r-2 p-4 text-center mb-2">
                <span
                  className={
                    ini.changePercent24Hr.substring(0, 1) == "-"
                      ? cn("bg-red-500 text-white p-2 rounded")
                      : cn("bg-green-500 text-white p-2 rounded")
                  }
                >
                  {" "}
                  {Math.round(ini.changePercent24Hr * 100) / 100}{" "}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default isAuth(Sellpage);

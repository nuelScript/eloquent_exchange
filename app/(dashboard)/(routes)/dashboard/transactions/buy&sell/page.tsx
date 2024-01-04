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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OFFICIAL_RATES } from "@/constants";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowSwapHorizontal, BitcoinRefresh } from "iconsax-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import isAuth from "@/components/isAuth";

const formSchema = z.object({
  coinType: z.string().min(1, {
    message: "Coin type is required",
  }),

  amount: z.coerce.number().min(0, { message: "Amount cannot be negative" }),
});

const BuyandSellPage = () => {
  const [initial, setInitial] = useState([]);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coinType: "",
      amount: 0,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

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

  const buyRoute = () => {
    router.push("/dashboard/transactions/buy&sell/buy");
  };

  const sellRoute = () => {
    router.push("/dashboard/transactions/buy&sell/sell");
  };
  return (
    <div className="flex min-[1000px]:flex-row -mt-5 justify-center h-full w-full my-auto flex-col min-[1000px]:justify-between min-[1000px]:items-start items-center pt-12 px-10 relative min-h-screen  bg-[length:200px_150px] bg-none bg-center bg-no-repeat bg-contain bg-fixed">
      <div className="flex-col items-start my-auto gap-y-3 min-[1000px]:flex hidden">
        <Image
          src="/buyy.svg"
          alt="Buy Crypto"
          width={400}
          height={400}
          className="ml-8 animate-pulse"
        />
      </div>
      <div className="flex flex-col my-auto space-y-3 min-[912px]:w-[500px] w-full">
        <div className="text-center space-y-5 flex flex-col items-center">
          <div className="flex w-full justify-center items-center pt-10 ">
            <Tabs defaultValue="Buy Crypto" className=" my-3 w-[400px]">
              <TabsList className="grid w-full my-3 grid-cols-2 gap-x-8 bg-transparent">
                <TabsTrigger
                  value="Buy Crypto"
                  className="bg-transparent py-4 font-normal text-black dark:border-white dark:text-white data-[state=active]:bg-[#4168B7] data-[state=active]:text-white dark:data-[state=active]:bg-[#A77700] border border-black data-[state=active]:border-none transition"
                >
                  Buy Crypto
                </TabsTrigger>
                <TabsTrigger
                  value="Sell Crypto"
                  className="bg-transparent py-4 text-black dark:text-white border border-black dark:border-white font-normal data-[state=active]:bg-[#4168B7] data-[state=active]:text-white dark:data-[state=active]:bg-[#A77700] data-[state=active]:border-none transition"
                >
                  Sell Crypto
                </TabsTrigger>
              </TabsList>
              <TabsContent value="Buy Crypto">
                <Card className="bg-transparent border-none shadow-none">
                  <CardContent className="py-2">
                    <Form {...form}>
                      <form
                        className="space-y-12"
                        onSubmit={form.handleSubmit(onSubmit)}
                      >
                        <FormField
                          control={form.control}
                          name="coinType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-normal">
                                Coin Type
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger
                                    style={{ padding: "30px 10px" }}
                                    className="w-full bg-transparent"
                                  >
                                    <SelectValue placeholder="Select coin name" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="bitcoin">
                                      Bitcoin
                                    </SelectItem>
                                    <SelectItem value="ethereum">
                                      Ethereum
                                    </SelectItem>
                                    <SelectItem value="usdt">USDT</SelectItem>
                                    <SelectItem value="dodge">Dodge</SelectItem>
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
                                  style={{ padding: "30px 10px" }}
                                  className="bg-transparent"
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
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          style={{ borderRadius: "30px" }}
                          className="w-full text-white py-8 rounded-lg bg-[#4168B7] hover:bg-primary text-lg dark:bg-[#A77700] dark:hover:bg-primary py-8 hover:text-white dark:hover:text-black"
                          variant="custom"
                          onSubmit={buyRoute}
                        >
                          Buy Crypto <BitcoinRefresh className="ml-2" />
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="Sell Crypto">
                <Card className="bg-transparent border-none shadow-none">
                  <CardContent className="py-2">
                    <Form {...form}>
                      <form
                        className="space-y-12"
                        onSubmit={form.handleSubmit(onSubmit)}
                      >
                        <FormField
                          control={form.control}
                          name="coinType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-normal">
                                Coin Type
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger
                                    style={{ padding: "30px 10px" }}
                                    className="w-full bg-transparent"
                                  >
                                    <SelectValue placeholder="Select coin name" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="bitcoin">
                                      Bitcoin
                                    </SelectItem>
                                    <SelectItem value="ethereum">
                                      Ethereum
                                    </SelectItem>
                                    <SelectItem value="usdt">USDT</SelectItem>
                                    <SelectItem value="dodge">Dodge</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
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
                              <Input
                                style={{ padding: "30px 10px" }}
                                className="bg-transparent"
                                type="number"
                                {...field}
                              />
                              <FormDescription className="flex justify-between">
                                <span className="font-normal text-primary">
                                  Amount: 0.0
                                </span>
                                <span className="text-[#4168B7] dark:text-[#A77700] font-normal flex items-center">
                                  Set by Naira{" "}
                                  <ArrowSwapHorizontal className="ml-2 w-6 h-6" />
                                </span>
                              </FormDescription>
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          style={{ borderRadius: "30px" }}
                          className="w-full text-white py-8 rounded-lg bg-[#4168B7] hover:bg-primary text-lg dark:bg-[#A77700] dark:hover:bg-primary py-8 hover:text-white dark:hover:text-black"
                          variant="custom"
                          onSubmit={sellRoute}
                        >
                          Sell Crypto <BitcoinRefresh className="ml-2" />
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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

export default BuyandSellPage;

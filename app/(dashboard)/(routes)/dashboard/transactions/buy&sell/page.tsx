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
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowSwapHorizontal, BitcoinRefresh } from "iconsax-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import isAuth from "@/components/isAuth";

const formSchema = z.object({
  coinType: z.string().min(1, {
    message: "Coin type is required",
  }),
  amount: z.coerce.number().min(0, { message: "Amount cannot be negative" }),
});

const BuyandSellPage = () => {
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

  const buyRoute = () => {
    router.push("/dashboard/transactions/buy&sell/buy");
  };

  const sellRoute = () => {
    router.push("/dashboard/transactions/buy&sell/sell");
  };
  return (
    <div className="flex w-full justify-center items-center pt-10 ">
      <Tabs defaultValue="Buy Crypto" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 gap-x-8 bg-transparent">
          <TabsTrigger
            value="Buy Crypto"
            className="bg-transparent font-normal text-black dark:border-white dark:text-white data-[state=active]:bg-[#4168B7] data-[state=active]:text-white dark:data-[state=active]:bg-[#A77700] border border-black data-[state=active]:border-none transition"
          >
            Buy Crypto
          </TabsTrigger>
          <TabsTrigger
            value="Sell Crypto"
            className="bg-transparent text-black dark:text-white border border-black dark:border-white font-normal data-[state=active]:bg-[#4168B7] data-[state=active]:text-white dark:data-[state=active]:bg-[#A77700] data-[state=active]:border-none transition"
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
                        <FormLabel className="font-normal">Coin Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full bg-transparent">
                              <SelectValue placeholder="Select coin name" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="bitcoin">Bitcoin</SelectItem>
                              <SelectItem value="ethereum">Ethereum</SelectItem>
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
                    variant="custom"
                    className="w-full"
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
                        <FormLabel className="font-normal">Coin Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full bg-transparent">
                              <SelectValue placeholder="Select coin name" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="bitcoin">Bitcoin</SelectItem>
                              <SelectItem value="ethereum">Ethereum</SelectItem>
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
                    variant="custom"
                    className="w-full"
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
  );
};

export default isAuth(BuyandSellPage);

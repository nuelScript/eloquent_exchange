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

interface BuyProps {}

const formSchema = z.object({
  network: z.string().min(1, { message: "Select a network" }),
  walletAddress: z
    .string()
    .min(24, { message: "Enter a valid wallet address" })
    .max(62, { message: "Enter a valid wallet address" }),
  coinType: z.string().min(1, {
    message: "Coin type is required",
  }),
  amount: z.coerce.number().min(0, { message: "Amount cannot be negative" }),
});

const onPaste = () => {
  navigator.clipboard.readText().then((text) => {
    if (text) {
      formSchema.parse(text);
    }
  });
};

const Buypage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      network: "",
      walletAddress: "",
      coinType: "",
      amount: 0,
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    // router.push("/dashboard/transactions/checkout");
    // router.refresh();
  };
  return (
    <div className="flex justify-center flex-col space-y-8 items-center py-12">
      <p className="text-primary font-medium text-lg min-[454px]:text-left text-center">
        Buying <span className="font-semibold">$10000</span> worth of Litecoin
        at <span className="font-semibold">₦84600000.00</span>
      </p>
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
                            MTN Mobile Money
                          </SelectItem>
                          <SelectItem value="skrill">Skrill</SelectItem>
                          <SelectItem value="orange mobile money">
                            Orange Mobile Money
                          </SelectItem>
                          <SelectItem value="neteller">NETELLER</SelectItem>
                          <SelectItem value="airtel mobile money">
                            Airtel Mobile Money
                          </SelectItem>
                          <SelectItem value="bank transfer">
                            Bank Transfer
                          </SelectItem>
                          <SelectItem value="wise">Wise</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="walletAddress"
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

export default Buypage;

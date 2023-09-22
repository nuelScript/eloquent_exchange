"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
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
import { zodResolver } from "@hookform/resolvers/zod";
import { BitcoinRefresh } from "iconsax-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  network: z.string().min(1, { message: "Select a network" }),
  walletAddress: z
    .string()
    .min(24, { message: "Enter a valid wallet address" })
    .max(62, { message: "Enter a valid wallet address" }),
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
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    // router.push("/dashboard/transactions/checkout");
    // router.refresh();
  };
  return (
    <div className="flex justify-center flex-col space-y-8 items-center pt-12">
      <p className="text-primary font-medium text-lg">
        Selling <span className="font-semibold">$10000</span> worth of Litecoin
        at <span className="font-semibold">₦84600000.00</span>
      </p>
      <p className="text-primary font-medium">
        Kindly provide your wallet address
      </p>
      <Card className="bg-transparent border-none shadow-none w-[400px]">
        <CardContent className="py-2">
          <Form {...form}>
            <form className="space-y-12" onSubmit={form.handleSubmit(onSubmit)}>
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

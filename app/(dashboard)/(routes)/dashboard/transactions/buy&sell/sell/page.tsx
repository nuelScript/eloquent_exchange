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
  coinType: z.string().min(1),
  bankName: z
    .string({
      required_error: "Please provide your bank name",
    })
    .min(1),
  accountNumber: z
    .string({ required_error: "Please provide your account number" })
    .min(1),
});

const onPaste = () => {
  navigator.clipboard.readText().then((text) => {
    if (text) {
      formSchema.parse(text);
    }
  });
};

const Sellpage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coinType: "",
      bankName: "",
      accountNumber: "",
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
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

export default Sellpage;

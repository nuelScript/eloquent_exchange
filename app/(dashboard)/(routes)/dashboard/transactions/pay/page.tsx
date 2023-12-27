"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
import { useForm } from "react-hook-form";
import * as z from "zod";
import isAuth from "@/components/isAuth";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  paymentMethod: z.string({
    required_error: "Please select a payment method",
  }),
});

const PaymentPage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = () => {
    const paymentLink = localStorage.getItem("link");
    const flutterwaveLink = paymentLink?.toString();

    const paymentMethod = form.getValues("paymentMethod");

    if (paymentMethod === "card") {
      router.push(flutterwaveLink || "");
    } else {
      router.push("/dashboard/transactions/payment/mobile_money");
    }
  };
  return (
    <div className="flex justify-center items-center pt-12">
      <Card className="w-[450px] border-none bg-transparent shadow-none">
        <CardHeader className="text-3xl text-primary font-semibold text-center">
          Payment method
        </CardHeader>
        <CardDescription className="text-lg text-primary font-medium text-center pb-4">
          Kindly select your preferred payment method
        </CardDescription>
        <CardContent className="flex flex-col space-y-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-4"
            >
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">
                      Select Payment Method
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-transparent">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="card">Card</SelectItem>
                          <SelectItem value="bank transfer">
                            Mobile Money (Bank Transfer)
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant="custom" type="submit">
                Buy Crypto <BitcoinRefresh className="ml-2 w-6 h-6" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default isAuth(PaymentPage);

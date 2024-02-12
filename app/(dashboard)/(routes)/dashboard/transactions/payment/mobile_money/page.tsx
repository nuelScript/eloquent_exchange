"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
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
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import isAuth from "@/components/isAuth";

const formSchema = z.object({
  country: z.string({
    required_error: "Please select a payment method",
  }),
});

const MobileMoneypage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const selectedPaymentMethod = form.watch("country");
  const [mobileMoneyDetails, setMobileMoneyDetails] = useState<
    { name: string; number: string }[]
  >([]);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const mobileMoneyInfo = {
      ghana: [
        {
          name: "Bosco Grand ventures",
          number: "0598615278(machant) (MTN)",
        },
      ],
      liberia: [
        {
          name: "DARLINGTON ONWUEMODO ",
          number: "0887053886 (MTN MOBILE MONEY)",
        },
        {
          name: "DARLINGTON ONWUEMODO ",
          number: "0770206889 (ORANGE MOBILE MONEY)",
        },
      ],
      kenya: [
        {
          name: "Ali ",
          number: "+254782334227 (Airtel)",
        },
        {
          name: "Ali (Equity Bank)",
          number: "1870184558348",
        },
      ],
      nigeria: [
        {
          name: "Monipoint macrofinace bank ",
          number: "6331783431",
        },
      ],
    };
    if (selectedPaymentMethod in mobileMoneyInfo) {
      setMobileMoneyDetails(
        mobileMoneyInfo[selectedPaymentMethod as keyof typeof mobileMoneyInfo]
      );
      setMessage(true);
    } else {
      setMobileMoneyDetails([]);
    }
  }, [selectedPaymentMethod]);
  return (
    <div className="flex justify-center items-center pt-12">
      <Card className="w-[450px] border-none bg-transparent shadow-none">
        <CardHeader className="text-3xl text-primary font-semibold text-center">
          Payment method
        </CardHeader>
        <CardContent className="flex flex-col space-y-8">
          <Form {...form}>
            <form className="flex flex-col space-y-4">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">
                      Select a Country
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-transparent font-bold text-white">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="kenya">Kenya</SelectItem>
                          <SelectItem value="ghana">Ghana</SelectItem>
                          <SelectItem value="liberia">Liberia</SelectItem>
                          <SelectItem value="nigeria">Nigeria</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {mobileMoneyDetails && (
                <div>
                  {mobileMoneyDetails.map((info, index) => (
                    <div className="flex flex-col space-y-4" key={index}>
                      <div className="flex flex-col space-y-3">
                        <Label
                          htmlFor="name"
                          className="text-base font-semibold"
                        >
                          Name
                        </Label>
                        <div className="flex flex-col w-full space-y-2">
                          <Input
                            readOnly
                            value={info.name}
                            className="bg-transparent"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col space-y-3">
                        <Label
                          htmlFor="number"
                          className="text-base font-semibold"
                        >
                          Number
                        </Label>
                        <div className="flex flex-col w-full space-y-2">
                          <Input
                            readOnly
                            value={info.number}
                            className="bg-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {message && (
                <div className="flex flex-col justify-start spa">
                  <h3 className="font-semibold">
                    <strong>NOTE:</strong> Kindly send a screenshot or receipt
                    of payment through the live chat feature. It&apos;s located
                    at the lower right corner of the screen.
                  </h3>
                  {/* <Link href="mailto:support@eloquentexchange.com">
                    <span className="text-[#4168B7] dark:text-[#A77700] hover:underline cursor-pointer">
                      support@eloquentexchange.com
                    </span>
                  </Link> */}
                </div>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default isAuth(MobileMoneypage);

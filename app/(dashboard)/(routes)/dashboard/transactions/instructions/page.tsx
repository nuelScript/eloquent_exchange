"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BitcoinRefresh } from "iconsax-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  checked: z.literal(true, {
    errorMap: () => ({ message: "Please check the box" }),
  }),
});

const CheckoutInstructionsPage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      checked: true,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    router.push("/dashboard/transactions/payment");
  };
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex flex-col space-y-6 items-center pt-12">
      <Image
        src={
          resolvedTheme === "dark"
            ? "/instruction-dark.svg"
            : "/instruction-light.svg"
        }
        alt="instruction-logo"
        width={300}
        height={300}
        className="object-cover"
      />
      <p className="font-normal text-2xl text-primary text-center">
        Please read the instructions below
      </p>
      <ul className="text-lg text-primary w-[600px] list-disc space-y-8">
        <li className="leading-tight">
          Third party payments are not allowed. Payments must be made from your
          personal account, matching your verified name on your eloquent
          profile.
        </li>
        <li className="leading-tight">
          For a successful transaction, do not enter any crypto related terms
          (BTC, USDT, etc.) in your payment narration.
        </li>
        <li className="leading-tight">
          Opening orders without making payment is not allowed.
        </li>
        <li className="leading-tight">
          Failure to comply with the above stated terms leads to limitation on
          your Eloquent exchange account and total loss of paid amount.
        </li>
      </ul>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex flex-col items-center"
        >
          <FormField
            control={form.control}
            name="checked"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center space-x-3 space-y-0">
                <div className="flex space-x-2 items-center justify-center">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-muted-foreground font-normal text-lg">
                    I agree to the instructions above and want to proceed to
                    payment section
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-3/4 flex justify-center">
            <Button type="submit" className="w-full" variant="custom">
              Continue
              <BitcoinRefresh className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CheckoutInstructionsPage;

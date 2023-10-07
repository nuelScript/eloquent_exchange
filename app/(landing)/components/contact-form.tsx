"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { sendEmailRoute } from "@/routes/route";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Data } from "iconsax-react";
import { PT_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

const font = PT_Sans({
  subsets: ["cyrillic-ext", "latin"],
  weight: ["400", "700"],
});

const formSchema = z.object({
  name: z.string().min(3, { message: "Enter your name" }),
  email: z.string().email({ message: "Enter your email address" }),
  message: z.string().min(1, { message: "Enter your message" }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post(sendEmailRoute, data);
      toast.success("Message sent successfully");
      form.reset();
    } catch (err: any) {
      if (err.response) {
        console.error("Server responded with status:", err.response.status);
        console.error("Response data:", err.response.data);
      } else if (err.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error:", err.message);
      }
      toast.error("Something went wrong");
    } finally {
      router.refresh();
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <div className="flex w-full space-x-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel className="text-primary font-normal text-sm">
                  Your name
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Name"
                    className="bg-gradient-to-b from-[#4168B7] dark:from-[#A77700] border-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 placeholder:text-primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel className="text-primary font-normal text-sm">
                  Your email
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Email"
                    className="bg-gradient-to-b from-[#4168B7] dark:from-[#A77700] border-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 placeholder:text-primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-normal text-sm">
                Your message
              </FormLabel>
              <FormControl>
                <Textarea
                  disabled={isLoading}
                  placeholder="Message"
                  className="resize-none bg-gradient-to-b from-[#4168B7] dark:from-[#A77700] placeholder:text-primary border-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                  rows={10}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button
            variant="custom"
            className={cn(
              "font-normal text-xl opacity-60 hover:opacity-100",
              font.className
            )}
          >
            Send
            <Data className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;

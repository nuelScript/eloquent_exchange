"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Apple, DirectRight } from "iconsax-react";
import { Revalia } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import * as z from "zod";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Input your password",
  }),
});

const font = Revalia({ subsets: ["latin"], weight: ["400"] });

const SignInPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const url = "http://localhost:8000/auth/jwt/create/";

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post(url, data);
      toast.success("Login Success");
      form.reset();
    } catch (error: any) {
      toast.error("Login Failed");
    } finally {
      router.refresh();
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <div className="flex justify-between pt-12 px-10 relative min-h-screen bg-[url('/rockets.svg')] bg-center bg-no-repeat bg-contain bg-fixed">
      <div className="flex flex-col items-start gap-y-8">
        <Image
          src="/coin.svg"
          alt="LiteCoin"
          width={80}
          height={80}
          className="ml-8 animate-pulse"
        />
        <h1 className="text-5xl font-medium text-primary leading-snug">
          Sign in to <br /> your account.
        </h1>
        <p className="font-medium text-base">
          If you don&apos;t have an account, you can{" "}
          <Link
            href="/sign-up"
            className="text-[#4168B7] dark:text-[#A77700] hover:underline"
          >
            Register Here.
          </Link>
        </p>
      </div>
      <div className="flex flex-col space-y-8 w-[500px]">
        <h1 className="text-4xl font-semibold text-primary">Welcome Back!</h1>
        <p className="text-muted-foreground">
          Enter your credentials to access your account.
        </p>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 flex flex-col"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        disabled={isLoading}
                        placeholder="Email Address"
                        className="border-t-0 font-medium text-primary rounded-none border-x-0 dark:border-b-[#A77700] border-b-[#F7931A80] border-b-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent bg-transparent focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Password"
                        type="password"
                        className="border-t-0 font-medium text-primary rounded-none border-x-0 dark:border-b-[#A77700] border-b-[#F7931A80] border-b-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent bg-transparent focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link
                href=""
                className="text-muted-foreground w-full flex justify-end items-center hover:underline"
              >
                Recover Password
              </Link>
              <Button
                className="w-full text-white bg-[#4168B7] hover:bg-primary text-lg dark:bg-[#A77700] dark:hover:bg-primary hover:text-white dark:hover:text-black"
                variant="default"
              >
                Sign-in
                <DirectRight className="w-5 h-5 ml-2" variant="Linear" />
              </Button>
            </form>
          </Form>
        </div>
        <p
          className={cn(
            "text-lg font-medium uppercase text-center",
            font.className
          )}
        >
          - or continue with
        </p>
        <div className="flex gap-x-8 justify-center">
          <div
            onClick={() => {}}
            className="w-10 h-10 rounded-lg border-[#A77700] border flex items-center justify-center cursor-pointer group"
          >
            <FcGoogle className="w-6 h-6 group-hover:scale-110" />
          </div>
          <div
            onClick={() => {}}
            className="w-10 h-10 rounded-lg border-[#A77700] border flex items-center justify-center cursor-pointer group "
          >
            <Apple variant="Bold" className="w-6 h-6 group-hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

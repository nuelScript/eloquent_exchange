"use client";

import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Apple, DirectRight } from "iconsax-react";
import { Revalia } from "next/font/google";
import { cn } from "@/lib/utils";
import { FcGoogle } from "react-icons/fc";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters long",
  }),
  email: z
    .string()
    .min(3, {
      message: "Enter a valid mail!",
    })
    .email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  terms: z.boolean({
    required_error: "Please agree to the terms and policy",
  }),
});

const font = Revalia({ subsets: ["latin"], weight: ["400"] });

const AuthPage = () => {
  const [variant, setVariant] = useState("register");
  const [isMounted, setIsMounted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  const toggleVariant = useCallback(() => {
    setVariant((prev) => (prev === "login" ? "register" : "login"));
  }, []);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="flex justify-between pt-12 px-10 relative min-h-screen bg-[url('/rockets.svg')] bg-center bg-no-repeat bg-contain bg-fixed">
      <div className="flex flex-col items-start gap-y-8">
        <Image
          src="/coin.svg"
          alt="LiteCoin"
          width={80}
          height={80}
          className="ml-8"
        />
        <h1 className="text-5xl font-medium text-primary">
          {variant === "login" ? (
            <p className="leading-snug">
              Sign in to <br /> your account.
            </p>
          ) : (
            <p className="leading-snug">
              Sign up with <br /> Eloquent
            </p>
          )}
        </h1>
        <p className="font-normal text-base">
          {variant === "login" ? (
            <p className="font-medium text-base">
              If you don&apos;t have an account, you can{" "}
              <span
                onClick={toggleVariant}
                className="text-[#4168B7] dark:text-[#A77700] cursor-pointer hover:underline"
              >
                Register Here.
              </span>{" "}
            </p>
          ) : (
            <p className="font-medium text-base">
              Already have an account? click here to{" "}
              <span
                onClick={toggleVariant}
                className="text-[#4168B7] dark:text-[#A77700] cursor-pointer hover:underline"
              >
                Sign in.
              </span>
            </p>
          )}
        </p>
      </div>
      <div className="flex flex-col space-y-8 w-[500px]">
        <h1 className="text-4xl font-semibold text-primary">
          {variant === "login" ? "Welcome Back!" : "Create Account"}
        </h1>
        <p className="text-muted-foreground">
          {variant === "login"
            ? "Enter your credentials to access your account."
            : "Enter your credentials to create an account."}
        </p>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 flex flex-col"
            >
              {variant === "register" && (
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          placeholder="Full name"
                          className="border-t-0 font-medium text-primary rounded-none border-x-0 border-b-[#A77700] border-b-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
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
                        className="border-t-0 font-medium text-primary rounded-none border-x-0 border-b-[#A77700] border-b-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
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
                        className="border-t-0 font-medium text-primary rounded-none border-x-0 border-b-[#A77700] border-b-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {variant === "register" ? (
                <div className="flex items-center w-full justify-end">
                  <FormField
                    name="terms"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-center space-x-3 space-y-0">
                        <div className="flex items-center space-x-3">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-muted-foreground text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            I agree to the{" "}
                            <Link href="/terms" className="underline">
                              terms & policy
                            </Link>
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ) : (
                <Link
                  href=""
                  className="text-muted-foreground w-full flex justify-end items-center hover:underline"
                >
                  Recover Password
                </Link>
              )}
              <Button
                className="w-full text-white bg-[#4168B7] hover:bg-primary text-lg dark:bg-[#A77700] dark:hover:bg-primary hover:text-white dark:hover:text-black"
                variant="default"
              >
                {variant === "login" ? "Sign-in" : "Create Account"}
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

export default AuthPage;

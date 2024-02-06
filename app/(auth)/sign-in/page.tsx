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
import { cn, setCookie } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { DirectRight } from "iconsax-react";
import { Revalia } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { googleOAuth, signInRoute } from "@/lib/helpers";
import * as z from "zod";
import React, { useEffect, useRef, useState } from "react";
// import { useState, useEffect } from "React";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Input your password",
  }),
});

const font = Revalia({ subsets: ["latin"], weight: ["400"] });

const SignInPage = () => {
  const [buttonText, setButtonText] = useState("Sign In");
  const { resolvedTheme } = useTheme();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post(signInRoute, data);
      toast.success("Login Success");
      const { refresh, access } = response.data;
      setCookie("access_token", access, 7);
      form.reset();
      router.push("/dashboard");
      setButtonText("Sign In");
    } catch (err: any) {
      if (err.response) {
        console.error("Server responded with status:", err.response.status);
        console.error("Response data:", err.response.data);
        setButtonText("Sign In");
      } else if (err.request) {
        console.error("No response received from the server");
        setButtonText("Sign In");
      } else {
        console.error("Error:", err.message);
        setButtonText("Sign In");
      }
      toast.error("Login Failed");
    } finally {
      router.refresh();
    }
  };

  const isLoading = form.formState.isSubmitting;

  // const [buttonText, setButtonText] = useState("Next");
  // const changeText = (text: any) => setButtonText(text);

  function handleClick() {
    setButtonText("Authenticating....");
  }

  // return (
  //   <div>
  //     <button onClick={handleClick}>{buttonText}</button>
  //   </div>

  const googleCallback = async () => {
    try {
      const response = await axios.get(googleOAuth);
      const googleResponse = response.data;
      const authorizationUrl: string = googleResponse.authorization_url;
      const urlParams = new URLSearchParams(authorizationUrl);
      const state = urlParams.get("state");
      localStorage.setItem("state", state || "");
      router.push(authorizationUrl);
    } catch (error: any) {
      toast.error("Unable to sign in. Try Again");
      setButtonText("Sign In");
    }
  };

  return (
    <div className="flex min-[1000px]:flex-row flex-col min-[1000px]:justify-between min-[1000px]:items-start items-center pt-12 px-10 relative min-h-screen  min-[912px]:bg-[url('/rockets.svg')] bg-[length:240px_150px] bg-none bg-center bg-no-repeat bg-contain bg-fixed">
      <div className="flex-col items-start gap-y-8 min-[1000px]:flex hidden">
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
        <p className="font-medium text-gray-500 text-[24px] leading-snug w-[397px] text-base">
          If you don&apos;t have an account, click here to{" "}
          <Link
            href="/sign-up"
            className="text-[#4168B7] dark:text-[#A77700] hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
      <div className="flex flex-col space-y-8 min-[912px]:w-[500px] w-full">
        <div className="flex flex-col space-y-8 min-[912px]:items-start items-center">
          <h3 className="min-[912px]:text-2xl min-[912px]:hidden text-2xl font-semibold text-primary">
            Sign In
          </h3>
          <h1 className="min-[912px]:text-[56px] text-3xl font-semibold text-primary">
            Welcome Back
            <span className="text-[#4168B7] dark:text-[#A77700]">!</span>
          </h1>
          <div className="flex justify-center">
            <Image
              src={resolvedTheme === "dark" ? "planedark.svg" : "plane.svg"}
              width={120}
              height={120}
              alt="signup_logo"
              className="min-[1000px]:hidden block"
            />
          </div>
          <p className="min-[912px]:text-muted-foreground -mt-4 max-[912px]:hidden text-primary">
            Enter your credentials to access your account.
          </p>
        </div>
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
                onClick={handleClick}
                style={{ borderRadius: "30px" }}
                className="w-full text-white py-8 rounded-lg bg-[#4168B7] hover:bg-primary text-lg dark:bg-[#A77700] dark:hover:bg-primary py-8 hover:text-white dark:hover:text-black"
                variant="default"
              >
                {buttonText}
                <DirectRight className="w-5 h-5 ml-2" variant="Linear" />
              </Button>
            </form>
            {/* <div className="text-center mb-4 mt-3 flex flex-col items-center">
              <p className="mb-2 font-bold dark:text-white">
                -OR CONTINUE WITH-
              </p>
              <div className="flex flex-row cursor-pointer border-4 p-2 px-3 border-gray-800 dark:border-gray-100 rounded items-center">
                <Image
                  onClick={() => googleCallback()}
                  src="/googlepng.png"
                  alt="Google"
                  width={30}
                  height={30}
                />
              </div>
            </div> */}
          </Form>
        </div>
        {/* <p
          className={cn(
            "text-lg font-medium uppercase text-center",
            font.className
          )}
        >
          - or continue with
        </p>
        <div className="flex justify-center">
          <div
            onClick={() => googleCallback()}
            className="w-full h-10 rounded-lg border-[#A77700] border flex items-center justify-center cursor-pointer group"
          >
            <FcGoogle className="w-6 h-6 group-hover:scale-110" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SignInPage;

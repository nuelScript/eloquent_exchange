"use client";

import Image from "next/image";
import Link from "next/link";
import { Revalia } from "next/font/google";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DirectRight } from "iconsax-react";
import { cn } from "@/lib/utils";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { googleOAuth, signUpRoute } from "@/lib/helpers";
import { useEffect } from "react";
<<<<<<< HEAD
import React, { useRef, useState } from "react";
=======
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c

const formSchema = z
  .object({
    first_name: z.string().min(3, { message: "Please enter your first name" }),
    last_name: z.string().min(3, { message: "Please enter your last name" }),
    email: z.string().email(),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    re_password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
  })
<<<<<<< HEAD

  .refine((data: any) => data.password === data.re_password, {
=======
  .refine((data) => data.password === data.re_password, {
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const font = Revalia({ subsets: ["latin"], weight: ["400"] });

const SignUpPage = () => {
<<<<<<< HEAD
  const [buttonText, setButtonText] = useState("Create Account");
=======
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
  const { resolvedTheme } = useTheme();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      re_password: "",
    },
  });

  const router = useRouter();

<<<<<<< HEAD
  function handleClick() {
    setButtonText("Autheticating...");
  }

=======
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post(signUpRoute, data);
      toast.success(
        "Account created successfully, Please check your mail for further details."
      );
      router.push("/sign-in");
      form.reset();
<<<<<<< HEAD
      setButtonText(" Create Account");
    } catch (err: any) {
      if (err?.response?.status === 400) {
        toast.error("Email already exists.");
        setButtonText(" Create Account");
      } else if (err?.response?.status === 500) {
        toast.error("Something went wrong");
        setButtonText(" Create Account");
      } else if (err?.request) {
        console.error("No response received from the server");
        setButtonText(" Create Account");
      } else {
        console.error("Error:", err.message);
        setButtonText(" Create Account");
=======
    } catch (err: any) {
      if (err?.response?.status === 400) {
        toast.error("Email already exists.");
      } else if (err?.response?.status === 500) {
        toast.error("Something went wrong");
      } else if (err?.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error:", err.message);
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
      }
    } finally {
      router.refresh();
    }
  };

  const isLoading = form.formState.isSubmitting;

  const googleCallback = async () => {
    try {
      const response = await axios.get(googleOAuth);
      const googleResponse = response.data;
      const authorizationUrl: string = googleResponse.authorization_url;
      const urlParams = new URLSearchParams(authorizationUrl);
      const state = urlParams.get("state");
      localStorage.setItem("state", state || "");
      router.push(authorizationUrl);
<<<<<<< HEAD
      setButtonText(" Create Account");
    } catch (error: any) {
      toast.error("Unable to  Create Account. Please try Again");
      setButtonText(" Create Account");
=======
    } catch (error: any) {
      toast.error("Unable to sign up. Please try Again");
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
    }
  };

  return (
<<<<<<< HEAD
    <div className="flex min-[1000px]:flex-row flex-col min-[1000px]:justify-between min-[1000px]:items-start items-center pt-12 px-10 relative min-h-screen min-[912px]:bg-[url('/rockets.svg')]  bg-[length:260px_150px] bg-none bg-center bg-no-repeat bg-contain bg-fixed">
=======
    <div className="flex min-[1000px]:flex-row flex-col min-[1000px]:justify-between min-[1000px]:items-start items-center pt-12 px-10 relative min-h-screen min-[912px]:bg-[url('/rockets.svg')] bg-none bg-center bg-no-repeat bg-contain bg-fixed">
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
      <div className="flex-col items-start gap-y-8 min-[1000px]:flex hidden">
        <Image
          src="/coin.svg"
          alt="LiteCoin"
          width={80}
          height={80}
          className="ml-8 animate-pulse"
        />
        <h1 className="text-5xl font-medium text-primary leading-snug">
<<<<<<< HEAD
          Create Account with <br /> Eloquent
=======
          Sign up with <br /> Eloquent
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
        </h1>
        <p className="font-medium text-base">
          Already have an account? click here to{" "}
          <Link
            href="/sign-in"
            className="text-[#4168B7] dark:text-[#A77700] hover:underline"
          >
            Sign in.
          </Link>
        </p>
      </div>
      <div className="flex flex-col space-y-8 min-[912px]:w-[500px] w-full">
<<<<<<< HEAD
        {/* <div className="flex justify-center">
=======
        <div className="flex justify-center">
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
          <Image
            src={
              resolvedTheme === "dark"
                ? "/signup-dark.svg"
                : "/signup-light.svg"
            }
            width={120}
            height={120}
            alt="signup_logo"
            className="min-[1000px]:hidden block"
          />
<<<<<<< HEAD
        </div> */}
        <div className="flex flex-col space-y-8 min-[912px]:items-start items-center">
          <h3 className="min-[912px]:text-2xl text-2xl font-semibold text-primary">
            Register
          </h3>
          <h1 className="text-4xl font-semibold text-primary min-[1000px]:block hidden">
            Create Account
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
          <p className="text-muted-foreground   min-[1000px]:block">
            Enter your credentials to create an account.
          </p>
        </div>
=======
        </div>
        <h1 className="text-4xl font-semibold text-primary min-[1000px]:block hidden">
          Create Account
        </h1>
        <p className="text-muted-foreground min-[1000px]:block hidden">
          Enter your credentials to create an account.
        </p>
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-8 min-[1000px]:p-0 px-4"
            >
              <div className="flex min-[912px]:flex-row flex-col min-[912px]:space-x-8 min-[912px]:space-y-0 space-y-8">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          placeholder="First name"
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
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          disabled={isLoading}
                          placeholder="Last name"
<<<<<<< HEAD
                          className="border-t-0 font-medium text-primary rounded-none border-x-0 dark:border-b-[#A77700] border-b-[#F7931A80] w-full border-b-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent bg-transparent focus-visible:ring-offset-0"
=======
                          className="border-t-0 font-medium text-primary rounded-none border-x-0 dark:border-b-[#A77700] border-b-[#F7931A80] border-b-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent bg-transparent focus-visible:ring-offset-0"
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
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
              <FormField
                control={form.control}
                name="re_password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Confirm Password"
                        type="password"
                        className="border-t-0 font-medium text-primary rounded-none border-x-0 dark:border-b-[#A77700] border-b-[#F7931A80] border-b-2 outline-none focus-visible:ring-0 focus-visible:ring-transparent bg-transparent focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center w-full justify-end"></div>
              <Button
<<<<<<< HEAD
                onClick={handleClick}
                style={{ borderRadius: "30px" }}
                className="w-full text-white py-8 rounded-lg bg-[#4168B7] hover:bg-primary text-lg dark:bg-[#A77700] dark:hover:bg-primary py-8 hover:text-white dark:hover:text-black"
                variant="default"
              >
                {buttonText}
                <DirectRight className="w-5 h-5 ml-2" variant="Linear" />
              </Button>
            </form>
            <div className="text-center mb-4 mt-3 flex flex-col items-center">
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
            </div>
=======
                className="w-full text-white bg-[#4168B7] hover:bg-primary text-lg dark:bg-[#A77700] dark:hover:bg-primary hover:text-white dark:hover:text-black"
                variant="default"
              >
                Create Account
                <DirectRight className="w-5 h-5 ml-2" variant="Linear" />
              </Button>
            </form>
>>>>>>> 8fd29388e9d31c807186c0f278798cbae48e893c
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

export default SignUpPage;

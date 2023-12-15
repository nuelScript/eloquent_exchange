"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserTag } from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import isAuth from "@/components/isAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import { getUsers } from "@/lib/helpers";
import Image from "next/image";
import { getCookie } from "@/lib/utils";

const formSchema = z.object({
  email: z.string().email(),
  name: z.string(),
});

const ProfilePage = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    const fetchdata = async () => {
      const accessToken = getCookie("access_token");
      if (accessToken) {
        try {
          const response = await axios.get(getUsers, {
            headers: {
              Authorization: `JWT ${accessToken}`,
              "Content-Type": "application/json",
            },
          });
          const responseData = response.data;
          const userEmail = responseData[0].email;
          const userFirstName = responseData[0].first_name;
          const userLastName = responseData[0].last_name;
          if (userEmail) {
            setEmail(userEmail);
          }
          if (userFirstName && userLastName) {
            setFullName(userLastName + " " + userFirstName);
          }
        } catch (error) {
          console.error("Error", error);
        }
      }
    };

    fetchdata();
  }, []);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen  w-full items-center my-auto mx-auto justify-between">
      <div className="flex  sm:mb-4 justify-center my-auto w-full h-full items-center">
        <Image
          src="/profile.svg"
          alt="Profile"
          width={400}
          height={400}
          className="ml-8 !sm:h-[250px]  !sm:w-[250px] animate-pulse"
        />
      </div>
      <div className="flex justify-center my-auto w-full h-full items-center">
        <Card className="bg-transparent w-full shadow-md border-none">
          <CardHeader className="text-primary text-5xl font-medium text-center">
            My Profile
          </CardHeader>
          <CardContent className="flex w-full flex-col space-y-4">
            <Form {...form}>
              <form className="flex flex-col space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <FormLabel className="text-muted-foreground font-medium">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          style={{ padding: "30px 10px" }}
                          className="w-full mx-auto bg-transparent  rounded-lg p-2 py-2  mt-1"
                          readOnly
                          value={email}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-4">
                      <FormLabel className="text-muted-foreground font-medium">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          style={{ padding: "30px 10px" }}
                          className="w-full mx-auto bg-transparent  rounded-lg p-2 py-2  mt-1"
                          readOnly
                          value={fullName}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Link href={"/profile/reset-password"}>
                  <p className="text-right text-xs text-[#4168B7] dark:text-[#A77700] hover:underline hover:text-primary dark:hover:text-primary">
                    Change Password
                  </p>
                </Link>

                <Button
                  style={{ borderRadius: "30px" }}
                  className="w-full text-white py-8 rounded-lg bg-[#4168B7] hover:bg-primary text-lg dark:bg-[#A77700] dark:hover:bg-primary py-8 hover:text-white dark:hover:text-black"
                  variant="custom"
                >
                  Update <UserTag className="ml-2" />
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default isAuth(ProfilePage);

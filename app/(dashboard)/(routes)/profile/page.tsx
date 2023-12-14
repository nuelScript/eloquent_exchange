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
    <div className="flex justify-center">
      <Card className="bg-transparent shadow-none border-none w-[400px]">
        <CardHeader className="text-primary text-5xl font-medium text-center">
          My Profile
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
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
                        className="bg-transparent"
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
                        className="bg-transparent"
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
                variant="custom"
                onClick={() => router.push("/profile/update-profile")}
              >
                Update <UserTag className="ml-2" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default isAuth(ProfilePage);

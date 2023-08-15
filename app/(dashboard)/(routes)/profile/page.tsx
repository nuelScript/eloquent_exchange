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
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z.string().email(),
  name: z.string(),
});

const ProfilePage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

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
                        value="eloquentexchange.ioa.co.wxa.zzyzk"
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
                        value="Idan of the crypto exchange world"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Link href={""}>
                <p className="text-right text-xs text-[#4168B7] dark:text-[#A77700] hover:underline hover:text-primary dark:hover:text-primary">
                  Change Password
                </p>
              </Link>
              <Button variant="custom">
                Update <UserTag className="ml-2" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;

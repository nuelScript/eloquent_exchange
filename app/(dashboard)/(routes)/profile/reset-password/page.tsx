"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { formSchema } from "../components/new-password-form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserTag } from "iconsax-react";
import { absoluteUrl } from "@/lib/utils";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const ResetPasswordPage = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      new_password: "",
      re_new_password: "",
    },
  });
  const reset_password_url = absoluteUrl("/auth/users/reset_password_confirm/");

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const req = await axios.post(reset_password_url, data);
      toast.success("Password changed successfully");
      form.reset;
      console.log(req);
      //   router.push("/profile");
    } catch (error: any) {
      toast.error("Something went wrong!");
      console.error(error);
    } finally {
      router.refresh();
    }
  };
  return (
    <div className="flex justify-center">
      <Card className="bg-transparent shadow-none border-none w-[400px]">
        <CardHeader className="text-primary text-4xl font-medium text-center">
          Reset Password
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col space-y-4"
            >
              <FormField
                control={form.control}
                name="new_password"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-primary font-medium">
                      New Password
                    </FormLabel>
                    <FormControl>
                      <div className="flex space-x-2 items-center border-input border px-3 py-2 rounded-md ring-offset-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ring">
                        <Input
                          type={visible ? "text" : "password"}
                          className="bg-transparent border-0 p-0 ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                          {...field}
                        />
                        <div onClick={() => setVisible(!visible)}>
                          {visible ? <Eye /> : <EyeOff />}
                        </div>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="re_new_password"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-primary font-medium">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <div className="flex space-x-2 items-center border-input border px-3 py-2 rounded-md ring-offset-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none focus-visible:ring-ring">
                        <Input
                          type={visible ? "text" : "password"}
                          className="bg-transparent border-0 p-0 ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                          {...field}
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button variant="custom">
                Update <UserTag className="ml-2" />{" "}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPasswordPage;

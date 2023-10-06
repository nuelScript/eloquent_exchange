"use client";

import { resetEmailRoute } from "@/routes/route";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

const formSchema = z.object({
  current_password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
  new_email: z.string().email({ message: "Enter a valid mail" }),
});

const UpdateProfile = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      current_password: "",
      new_email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await axios.post(resetEmailRoute, data);
      toast.success("Email Updated");
      form.reset();
      router.push("/profile");
    } catch (error: any) {
      if (error?.response?.status === 401) {
        toast.error("Login to continue");
      } else if (error.response) {
        console.error("Server responded with status:", error.response.status);
        console.error("Response data:", error.response.data);
        toast.error(error.response.data.detail);
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error", error.message);
      }
    }
  };
  return (
    <div className="flex justify-center">
      <Card className="bg-transparent shadow-none border-none w-[400px]">
        <CardHeader className="text-primary text-5xl font-medium text-center">
          Update Profile
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <Form {...form}>
            <form
              className="flex flex-col space-y-6"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="current_password"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-muted-foreground font-medium">
                      Enter Current Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="bg-transparent"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="new_email"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-muted-foreground font-medium">
                      Enter New Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="bg-transparent"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant="custom">
                Save Changes <Save className="ml-2" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateProfile;

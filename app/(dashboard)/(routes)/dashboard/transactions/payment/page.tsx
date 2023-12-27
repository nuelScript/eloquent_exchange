"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
// import Link from "@/node_modules/next/link";
import { DirectRight } from "iconsax-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import isAuth from "@/components/isAuth";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

// const formSchema = z.object({
//   paymentMethod: z.string({
//     required_error: "Please select a payment method",
//   }),
// });

const PaymentPage = () => {
  const [date, setDate] = useState<Date>();

  return (
    <div className="flex min-[1000px]:flex-row my-auto justify-center h-full w-full flex-col min-[1000px]:justify-between min-[1000px]:items-start items-center pt-12 px-10 relative min-h-screen bg-[length:200px_150px] bg-none bg-center bg-no-repeat bg-contain bg-fixed">
      <div className="flex-col items-start my-auto gap-y-3 min-[1000px]:flex hidden">
        <Image
          src="/terms.svg"
          alt="Terms & Condition"
          width={500}
          height={500}
          className="ml-8 animate-pulse"
        />
      </div>
      <div className="flex flex-col my-auto space-y-3 min-[912px]:w-[600px] w-full">
        <div className="text-center space-y-5 flex flex-col items-center">
          <h1 className="lg:text-[56px] mb-4 font-bold text-2xl">
            Payment Method
          </h1>
        </div>

        <div className="grid grid-cols-3 w-full max-w-lg gap-4 mx-auto space-x-4">
          {/* <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card> */}

          <Link href={localStorage.getItem("link")}>
            <Card className="items-center my-auto py-auto text-left px-auto">
              <CardHeader>
                {/* <CardTitle>Card Title</CardTitle> */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="text-center  dark:fill-[#ffffff] dark:fill-white   fill-current "
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 4H0V3.25C0 2.56 0.448 2 1 2H15C15.552 2 16 2.56 16 3.25V4ZM16 6.5V13C16 13.2652 15.8946 13.5196 15.7071 13.7071C15.5196 13.8946 15.2652 14 15 14H1C0.734784 14 0.48043 13.8946 0.292893 13.7071C0.105357 13.5196 0 13.2652 0 13V6.5H16ZM4 10C3.73478 10 3.48043 10.1054 3.29289 10.2929C3.10536 10.4804 3 10.7348 3 11C3 11.2652 3.10536 11.5196 3.29289 11.7071C3.48043 11.8946 3.73478 12 4 12H5C5.26522 12 5.51957 11.8946 5.70711 11.7071C5.89464 11.5196 6 11.2652 6 11C6 10.7348 5.89464 10.4804 5.70711 10.2929C5.51957 10.1054 5.26522 10 5 10H4Z"
                    fill="#020202"
                  />
                </svg>

                <CardDescription>Card</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/dashboard/transactions/payment/mobile_money">
            <Card className="items-center text-center  my-auto py-auto  px-auto">
              <CardHeader className="text-center dark:fill-[#ffffff] items-center">
                <svg
                  className="text-center dark:fill-[#ffffff] dark:fill-white items-center"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="text-center  dark:fill-[#ffffff] dark:fill-white   fill-current "
                    d="M20.8547 11.6684H2.97934C2.02599 11.6684 1.24146 10.8838 1.24146 9.93047V6.63345C1.24146 5.95815 1.70818 5.27294 2.33382 5.02467L11.2715 1.44961C11.6489 1.30065 12.1852 1.30065 12.5626 1.44961L21.5003 5.02467C22.1259 5.27294 22.5926 5.96809 22.5926 6.63345V9.93047C22.5926 10.8838 21.8081 11.6684 20.8547 11.6684ZM11.917 2.82006C11.8773 2.82006 11.8376 2.82001 11.8178 2.82994L2.88994 6.40506C2.83035 6.43485 2.73107 6.56393 2.73107 6.63345V9.93047C2.73107 10.0695 2.84031 10.1787 2.97934 10.1787H20.8547C20.9938 10.1787 21.103 10.0695 21.103 9.93047V6.63345C21.103 6.56393 21.0137 6.43485 20.9441 6.40506L12.0064 2.82994C11.9866 2.82001 11.9568 2.82006 11.917 2.82006Z"
                    fill="black"
                  />
                  <path
                    className="text-center  dark:fill-[#ffffff] dark:fill-white   fill-current "
                    d="M21.8478 22.5928H1.98626C1.5791 22.5928 1.24146 22.2551 1.24146 21.848V18.8687C1.24146 17.9154 2.02599 17.1309 2.97934 17.1309H20.8547C21.8081 17.1309 22.5926 17.9154 22.5926 18.8687V21.848C22.5926 22.2551 22.255 22.5928 21.8478 22.5928ZM2.73107 21.1032H21.103V18.8687C21.103 18.7297 20.9938 18.6205 20.8547 18.6205H2.97934C2.84031 18.6205 2.73107 18.7297 2.73107 18.8687V21.1032Z"
                    fill="black"
                  />
                  <path
                    className="text-center  dark:fill-[#ffffff] dark:fill-white   fill-current "
                    d="M3.97235 18.6208C3.56519 18.6208 3.22754 18.2832 3.22754 17.876V10.9245C3.22754 10.5173 3.56519 10.1797 3.97235 10.1797C4.37951 10.1797 4.71716 10.5173 4.71716 10.9245V17.876C4.71716 18.2832 4.37951 18.6208 3.97235 18.6208Z"
                    fill="black"
                  />
                  <path
                    className="text-center  dark:fill-[#ffffff] dark:fill-white   fill-current "
                    d="M7.94452 18.6208C7.53735 18.6208 7.19971 18.2832 7.19971 17.876V10.9245C7.19971 10.5173 7.53735 10.1797 7.94452 10.1797C8.35168 10.1797 8.68932 10.5173 8.68932 10.9245V17.876C8.68932 18.2832 8.35168 18.6208 7.94452 18.6208Z"
                    fill="black"
                  />
                  <path
                    className="text-center  dark:fill-[#ffffff] dark:fill-white   fill-current "
                    d="M11.9169 18.6208C11.5098 18.6208 11.1721 18.2832 11.1721 17.876V10.9245C11.1721 10.5173 11.5098 10.1797 11.9169 10.1797C12.3241 10.1797 12.6617 10.5173 12.6617 10.9245V17.876C12.6617 18.2832 12.3241 18.6208 11.9169 18.6208Z"
                    fill="black"
                  />
                  <path
                    className="text-center  dark:fill-[#ffffff] dark:fill-white   fill-current "
                    d="M15.8893 18.6208C15.4822 18.6208 15.1445 18.2832 15.1445 17.876V10.9245C15.1445 10.5173 15.4822 10.1797 15.8893 10.1797C16.2965 10.1797 16.6341 10.5173 16.6341 10.9245V17.876C16.6341 18.2832 16.2965 18.6208 15.8893 18.6208Z"
                    fill="black"
                  />
                  <path
                    className="text-center  dark:fill-[#ffffff] dark:fill-white   fill-current "
                    d="M19.8615 18.6208C19.4543 18.6208 19.1167 18.2832 19.1167 17.876V10.9245C19.1167 10.5173 19.4543 10.1797 19.8615 10.1797C20.2687 10.1797 20.6063 10.5173 20.6063 10.9245V17.876C20.6063 18.2832 20.2687 18.6208 19.8615 18.6208Z"
                    fill="black"
                  />
                  <path
                    className="text-center  dark:fill-[#ffffff] dark:fill-white   fill-current "
                    d="M22.8408 22.5931H0.993099C0.585937 22.5931 0.248291 22.2555 0.248291 21.8483C0.248291 21.4412 0.585937 21.1035 0.993099 21.1035H22.8408C23.248 21.1035 23.5856 21.4412 23.5856 21.8483C23.5856 22.2555 23.248 22.5931 22.8408 22.5931Z"
                    fill="black"
                  />
                  <path
                    className="text-center  dark:fill-[#ffffff] dark:fill-white   fill-current "
                    d="M11.917 9.18565C10.6856 9.18565 9.68262 8.18264 9.68262 6.95122C9.68262 5.71981 10.6856 4.7168 11.917 4.7168C13.1485 4.7168 14.1515 5.71981 14.1515 6.95122C14.1515 8.18264 13.1485 9.18565 11.917 9.18565ZM11.917 6.20641C11.5099 6.20641 11.1722 6.54406 11.1722 6.95122C11.1722 7.35838 11.5099 7.69603 11.917 7.69603C12.3242 7.69603 12.6618 7.35838 12.6618 6.95122C12.6618 6.54406 12.3242 6.20641 11.917 6.20641Z"
                    fill="black"
                  />
                </svg>

                {/* <CardTitle>Card Title</CardTitle> */}

                <CardDescription>Bank Transfer</CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/dashboard/transactions/payment/mobile_money">
            <Card className="items-center text-center  my-auto py-auto  px-auto">
              <CardHeader>
                {/* <CardTitle>Card Title</CardTitle> */}
                <CardDescription>Mobile Money</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <div className="space-y-8">
          <form className="w-full max-w-lg mx-auto">
            <Label htmlFor="card-number-input">Card number: </Label>
            <div className="relative">
              <Input
                type="text"
                id="card-number-input"
                style={{ padding: "30px 10px" }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="4242 4242 4242 4242"
                pattern="^4[0-9]{12}(?:[0-9]{3})?$"
                required
              />
              <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                <svg
                  fill="none"
                  className="h-6 text-[#1434CB] dark:text-white"
                  viewBox="0 0 36 21"
                >
                  <path
                    fill="currentColor"
                    d="M23.315 4.773c-2.542 0-4.813 1.3-4.813 3.705 0 2.756 4.028 2.947 4.028 4.332 0 .583-.676 1.105-1.832 1.105-1.64 0-2.866-.73-2.866-.73l-.524 2.426s1.412.616 3.286.616c2.78 0 4.966-1.365 4.966-3.81 0-2.913-4.045-3.097-4.045-4.383 0-.457.555-.957 1.708-.957 1.3 0 2.36.53 2.36.53l.514-2.343s-1.154-.491-2.782-.491zM.062 4.95L0 5.303s1.07.193 2.032.579c1.24.442 1.329.7 1.537 1.499l2.276 8.664h3.05l4.7-11.095h-3.043l-3.02 7.543L6.3 6.1c-.113-.732-.686-1.15-1.386-1.15H.062zm14.757 0l-2.387 11.095h2.902l2.38-11.096h-2.895zm16.187 0c-.7 0-1.07.37-1.342 1.016L25.41 16.045h3.044l.589-1.68h3.708l.358 1.68h2.685L33.453 4.95h-2.447zm.396 2.997l.902 4.164h-2.417l1.515-4.164z"
                  />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-3 mx-auto space-x-4 gap-4 my-4">
              <div className="relative max-w-lg col-span-2">
                <Label htmlFor="card-expiration-input">
                  Card expiration date:
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      style={{ padding: "30px 10px" }}
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "MM/yy") : <span>MM//YY</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="col-span-1">
                <Label htmlFor="cvv-input">Card CVV:</Label>
                <Input
                  type="number"
                  max="3"
                  style={{ padding: "30px 10px" }}
                  id="cvv-input"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="CVV"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 items-center max-w-lg mx-auto space-x-2 mx-auto my-4">
              <div className="w-full max-w-lg">
                <Label htmlFor="cvv-input"> Country </Label>
                <Select>
                  <SelectTrigger style={{ padding: "30px 10px" }}>
                    <SelectValue placeholder="Select Your Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Africa</SelectLabel>
                      <SelectItem value="Nigeria">Nigeria</SelectItem>
                      <SelectItem value="Liberia">Liberia</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full max-w-lg">
                <Label htmlFor="postal"> Postal Code</Label>
                <Input
                  type="number"
                  max="8"
                  style={{ padding: "30px 10px" }}
                  id="postal"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="CVV"
                  required
                />
              </div>
            </div>
            <Link href={localStorage.getItem("link")}>
              <Button
                style={{ borderRadius: "30px" }}
                className="w-full text-white py-8 rounded-lg bg-[#4168B7] hover:bg-primary text-lg dark:bg-[#A77700] dark:hover:bg-primary py-8 hover:text-white dark:hover:text-black"
                variant="default"
              >
                Continue
                <DirectRight className="w-5 h-5 ml-2" variant="Linear" />
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default isAuth(PaymentPage);

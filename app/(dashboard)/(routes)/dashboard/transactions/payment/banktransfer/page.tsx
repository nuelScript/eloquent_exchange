"use client";

import isAuth from "@/components/isAuth";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BanktransferPage = () => {
  return (
    <div className="flex min-[1000px]:flex-row my-auto justify-center h-full w-full flex-col min-[1000px]:justify-between min-[1000px]:items-start items-center pt-12 px-10 relative min-h-screen  bg-[length:200px_150px] bg-none bg-center bg-no-repeat bg-contain bg-fixed">
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
          <Card className="items-center text-[30px] cursor-pointer text-center  my-auto py-auto  px-auto">
            <CardHeader>
              {/* <CardTitle>Card Title</CardTitle> */}
              <CardDescription>
                <p>
                  {" "}
                  <strong>Account Name:</strong> DARLINGTON ONWUEMODO{" "}
                </p>{" "}
                <p>
                  {" "}
                  <strong>Bank Name:</strong> Accesss Bank{" "}
                </p>{" "}
                <br />
                <p>
                  {" "}
                  <strong>Account Number: </strong>6331783431
                </p>
                <br />
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default isAuth(BanktransferPage);

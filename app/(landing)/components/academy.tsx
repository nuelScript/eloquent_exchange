"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Chart, Data, Diagram, StatusUp } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { PT_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { getPackageListRoute } from "@/lib/helpers";

const font = PT_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

interface ProPackage {
  name: string;
  price: string;
}

interface BeginnerPackage {
  name: string;
  price: string;
}

interface IntermediatePackage {
  name: string;
  price: string;
}

const AcademySection = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [beginner, setBeginner] = useState<BeginnerPackage | null>();
  const [intermediate, setIntermediate] =
    useState<IntermediatePackage | null>();
  const [pro, setPro] = useState<ProPackage | null>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(getPackageListRoute);
        const responseData = response.data;
        const packageArray = responseData;
        if (packageArray && packageArray.length > 0) {
          setBeginner(packageArray[0]);
        }
        if (packageArray && packageArray.length > 0) {
          setIntermediate(packageArray[1]);
        }
        if (packageArray && packageArray.length > 0) {
          setPro(packageArray[2]);
        }
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      id="academy"
      className="flex min-w-2xl flex-col space-y-32 px-10 mb-20"
    >
      <div className="flex md:flex-row-reverse flex-col-reverse justify-between items-center">
        <Image
          src={theme === "dark" ? "/academy-dark.svg" : "/academy-light.png"}
          width={400}
          height={400}
          alt="images"
          className="w-auto h-auto object-cover object-center md:block hidden"
        />
        <div className="flex flex-col md:space-y-2 space-y-6 md:items-start items-center">
          <h3 className="text-primary md:text-5xl text-3xl md:font-semibold font-normal leading-snug  md:text-left text-center">
            Eloquent{" "}
            <span className="text-[#4168B7] mt-4 flex flex-row dark:text-[#A77700]">
              Trading Academy.
            </span>
          </h3>
          <Image
            src={theme === "dark" ? "/academy-dark.svg" : "/academy-light.png"}
            width={300}
            height={300}
            alt="images"
            className="object-cover object-center md:hidden block"
          />
          <p className="text-primary text-md font-normal w-3/4  md:text-left text-center">
            Unlock the secrets of successful trading at our cutting-edge Trading
            Academy! Join our community of skilled traders, master market
            trends, and elevate your financial potential to new heights.
            Let&apos;s trade, learn, and profit together!
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col -mt-4 justify-between items-center">
        <Image
          src={theme === "dark" ? "/teaching-dark.svg" : "/teaching-light.png"}
          width={400}
          height={400}
          alt="images"
          className="w-auto h-auto object-cover object-center"
        />
        <div className="flex flex-col sm:mt-3 sm:pt-4 sm:text-center space-y-2 md:items-end items-center">
          <h3 className="text-primary  sm:mt-3 sm:pt-4 sm:text-center  md:text-5xl text-3xl font-semibold leading-snug uppercase min-[912px]:w-2/3 w-full min-[912px]:text-right text-left">
            <span className="text-[#4168B7] dark:text-[#A77700]">200+</span>{" "}
            Students trust us
          </h3>
          <p className="text-primary sm:text-center text-lg font-normal">
            Be part of the next set of students Eloquent academy enrolls.
          </p>
        </div>
      </div>
      <div className="flex min-[912px]:flex-row   flex-col min-[912px]:space-x-10 min-[912px]:space-y-0 space-y-8 justify-center items-center">
        <div className="flex flex-col h-[240px] hover:dark:bg-[#A77700] hover:dark:text-[#000000] hover:dark:border-[#A77700] border-2 border-white border-b-0 bg-gradient-to-b  dark:from-gray-700 hover:dark:from-[#ffffff] hover:from-[#ffffff]    p-6 rounded-3xl space-y-6 w-[300px]">
          <div className="flex min-[912px]:flex-col  flex-row min-[912px]:space-x-0 space-x-4 min-[912px]:space-y-2 space-y-0 min-[912px]:items-start items-center">
            <StatusUp className="w-10 h-10" />
            <h3 className=" hover:dark:text-[#000000] text-xl font-semibold hover:dark:text-[#000000]">
              Defi Trading
            </h3>
            <div className="w-[40px] min-[912px]:block hidden border border-[#4168B7] dark:border-[#A77700]"></div>
          </div>
          <div className="flex  hover:dark:text-[#000000] flex-col space-y-4">
            <p className=" hover:dark:text-[#000000] text-base hover:dark:text-[#000000] font-normal">
              Your data is safe and secured with us. None of your data is shared
              with a third party company.
            </p>{" "}
          </div>
        </div>
        <div className="flex flex-col h-[240px] hover:dark:bg-[#A77700] hover:dark:text-[#000000] hover:dark:border-[#A77700] border-2 border-white border-b-0 bg-gradient-to-b hover:dark:from-[#ffffff] dark:from-gray-700 hover:from-[#ffffff]  p-6 rounded-3xl space-y-6 w-[300px]">
          <div className="flex min-[912px]:flex-col  hover:dark:text-[#000000] flex-row min-[912px]:space-x-0 space-x-4 min-[912px]:space-y-2 space-y-0 min-[912px]:items-start items-center">
            <Chart className="w-10 h-10" />

            <span className="text-xl  font-semibold hover:dark:text-[#]">
              P2P Trading
            </span>
            <div className="w-[40px] min-[912px]:block hidden  hover:dark:text-[#000000] border border-[#4168B7] dark:border-[#A77700]"></div>
          </div>
          <div className="flex  hover:dark:text-[#000000] flex-col space-y-4">
            <span className=" text-base hover:dark:text-[#000000] font-normal">
              The platform is designed to be as simple as possible so our users
              can trade with ease.
            </span>
          </div>
        </div>
        <div className="flex flex-col h-[240px] hover:dark:bg-[#A77700] hover:dark:text-[#000000] hover:dark:border-[#A77700] border-2 border-white border-b-0 bg-gradient-to-b dark:from-gray-700 hover:dark:from-[#ffffff] hover:from-[#ffffff]   p-6 rounded-3xl space-y-6 w-[300px]">
          <div className="flex min-[912px]:flex-col  flex-row min-[912px]:space-x-0 space-x-4 min-[912px]:space-y-2 space-y-0 min-[912px]:items-start items-center">
            <Diagram className="w-10 h-10" />
            <h3 className=" text-xl hover:dark:text-[#000000] font-semibold">
              Futures Trading
            </h3>
            <div className="w-[40px] min-[912px]:block hidden  hover:dark:text-[#000000] border border-[#4168B7] dark:border-[#A77700]"></div>
          </div>
          <div className="flex flex-col space-y-4">
            <p className=" hover:dark:text-[#000000] text-base font-normal">
              The platform is designed to be as simple as possible so our users
              can trade with ease.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-8">
        <div className="flex min-[912px]:flex-row flex-col justify-between items-center">
          <div className="flex flex-col space-y-8 min-[912px]:items-start items-center">
            <h3 className="font-medium  min-[912px]:text-5xl text-xl min-[912px]:w-7/12 w-full leading-normal min-[912px]:text-left text-center">
              Become a{" "}
              <span className="text-[#4168B7] dark:text-[#A77700]">
                certified trader
              </span>{" "}
              with eloquent exchange.
            </h3>
            <Image
              src="/certificate.png"
              alt="certificate"
              width={300}
              height={300}
              className="w-auto h-auto object-cover object-center min-[912px]:hidden block"
            />
            <p className="font-normal text-xl min-[912px]:w-[55%] w-full min-[912px]:text-left text-center">
              Get details about Eloquent Exchange&apos;s next session of classes
              and enroll.
            </p>
            {/* <div>
              <Button
                variant="custom"
                className={cn(
                  "rounded-tl-none rounded-br-none opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out min-[912px]:flex hidden",
                  font.className
                )}
                onClick={() => router.push("/dashboard/buy&sell/")}
                disabled
              >
                Enroll <Data className="ml-2 h-4 w-4" />
              </Button>
            </div> */}
          </div>
          <Image
            src="/certificate.png"
            alt="certificate"
            width={300}
            height={300}
            className="w-auto h-auto object-cover object-center min-[912px]:flex hidden"
          />
        </div>
      </div>
      <div className="flex min-[912px]:flex-row flex-col min-[9122px]:space-y-0 space-y-10  justify-center items-center">
        <div className="flex flex-col space-y-8 relative items-center">
          <div className="flex space-x-4">
            <h3 className="min-[912px]:hidden block text-3xl font-normal">1</h3>
            <h3 className="text-2xl font-normal z-10">Become a member</h3>
          </div>{" "}
          <p className="block bg-gradient-to-b from-black dark:from-white text-transparent bg-clip-text max-[912px]:hidden lg:text-4xl text-3xl mb-2 font-bold">
            1
          </p>
          <div className="min-[912px]:absolute hidden bg-gradient-to-b from-black dark:from-white text-transparent bg-clip-text font-bold text-6xl z-0">
            1
          </div>
          <p className="font-normal text-sm lg:w-1/2 text-center">
            Join with a subscription to get instant access to your student
            dashboard and begin your lessons.{" "}
          </p>
        </div>
        <div className="flex flex-col space-y-8 min-[912px]:relative items-center">
          <div className="flex space-x-4">
            <h3 className="min-[912px]:hidden block text-3xl font-normal">2</h3>
            <h3 className="text-2xl font-normal z-10">Watch the lesson</h3>
          </div>
          <p className="block bg-gradient-to-b from-black dark:from-white text-transparent bg-clip-text max-[912px]:hidden lg:text-4xl text-3xl mb-2 font-bold">
            2
          </p>
          <div className="min-[912px]:absolute hidden bg-gradient-to-b from-black dark:from-white text-transparent bg-clip-text font-bold text-6xl z-0">
            2
          </div>
          <p className="font-normal text-sm lg:w-1/2 text-center">
            Acquire the knowledge by watching & practicing the video lessons
            library in the eloquent course.
          </p>
        </div>
        <div className="flex flex-col space-y-8 relative items-center">
          <div className="flex space-x-4">
            <h3 className="min-[912px]:hidden block text-3xl font-normal">3</h3>
            <h3 className="text-2xl font-normal z-10">Community legend</h3>
          </div>
          <p className="block bg-gradient-to-b from-black dark:from-white text-transparent bg-clip-text max-[912px]:hidden lg:text-4xl text-3xl mb-2 font-bold">
            3
          </p>
          <div className="min-[912px]:absolute hidden bg-gradient-to-b from-black dark:from-white text-transparent bg-clip-text font-bold text-6xl z-0">
            3
          </div>
          <p className="font-normal text-sm lg:w-1/2 text-center">
            Watch the Eloquent Service market breakdowns & participate in our
            community on the Trade Floor
          </p>
        </div>
        <Button
          variant="custom"
          className={cn(
            "rounded-tl-none rounded-br-none opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out min-[912px]:hidden flex",
            font.className
          )}
        >
          Enroll <Data className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={theme === "dark" ? "/tabs-dark.png" : "/tabs.svg"}
          alt="tabs"
          width={300}
          height={300}
          className="w-auto h-auto object-cover object-center"
        />
      </div>
      <div className="flex justify-center items-center">
        <Link href="/sign-up">
          <Button
            variant="custom"
            className={cn(
              "rounded-tl-none rounded-br-none opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out",
              font.className
            )}
            onClick={() => router.push("/dashboard/buy&sell/")}
          >
            Start Now <Data className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AcademySection;

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
      <div className="flex min-[912px]:flex-row flex-col min-[912px]:space-y-0 justify-center space-y-4 md:space-x-5 items-center">
        <div className="flex hover:fill-black hover:text-black flex-col space-y-6 p-8 border-4 border-b-0 rounded-3xl items-center border-white bg-transparent bg-gradient-to-b from-white dark:from-black">
          <svg
            width="29"
            height="30"
            viewBox="0 0 29 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="hover:fill-black"
              d="M18.9552 23.4434C15.5756 21.6008 14.3299 17.3683 16.1736 13.9898C16.2966 13.7645 16.4305 13.5486 16.5743 13.342C15.6945 15.4743 15.9514 17.8469 17.1261 19.7109C16.6371 17.8672 17.4053 15.4473 20.405 14.8888C23.4887 14.3152 27.0308 16.1288 26.2802 17.8905C26.2802 17.8905 31.4574 14.6261 26.0768 12.2083C25.3537 11.8834 24.6286 11.5922 23.836 11.5746C22.5928 11.546 22.325 10.6724 20.6344 10.0719C20.6344 10.0719 23.3247 9.87464 24.6878 11.533C26.9234 9.59798 22.1288 6.02632 19.0066 5.27835C16.4855 4.67468 14.3138 4.76811 13.1049 4.72555C12.4415 4.70219 12.0818 4.45615 12.0818 4.45615C12.3834 5.91108 14.593 6.48465 14.593 6.48465C7.81409 6.79401 5.75964 13.4162 5.75964 13.4162C6.54913 12.4284 8.72556 11.6478 8.72556 11.6478C6.36642 14.2841 5.18815 16.9209 4.61459 19.0932C4.22062 17.8703 4.00677 16.5664 4.00677 15.2122C4.00677 8.23493 9.71074 2.54549 16.6911 2.56002C21.0953 2.56936 24.9706 4.82728 27.2306 8.24583C24.7656 3.75594 19.9918 0.712158 14.5058 0.712158C6.491 0.712158 -0.0330937 7.2622 0.000126304 15.2739C0.0255603 21.4295 3.88894 26.6793 9.32196 28.7581C7.06716 24.6773 6.97061 19.8489 8.81899 15.7691C7.43673 19.6356 7.96046 24.1001 10.6103 27.6302C11.1491 28.3475 11.7491 28.9907 12.3979 29.5596C13.0862 29.6597 13.79 29.7122 14.5058 29.7122C15.8253 29.7122 17.1032 29.5357 18.3178 29.2061C15.9275 26.6533 14.552 23.3194 14.4119 19.8645C14.8432 23.3677 16.7311 26.6336 19.7634 28.7301C22.9006 27.5098 25.5074 25.2311 27.1455 22.3316C25.0117 24.3996 21.7011 24.9409 18.9552 23.4434Z"
              fill="#4168B7"
            />
          </svg>

          {/* <Image
            src={
              theme === "dark"
                ? "/small-logo-dark.svg"
                : "/small-logo-light.svg"
            }
            alt="logo"
            width={100}
            height={100}
            className="w-auto h-auto object-cover object-center"
          /> */}
          <ul className="list-disc space-y-4 text-sm font-normal text-primary">
            <li>The Zero To Funded Course</li>
            <li>The Eloquent Service</li>
            <li>The Trading Floor (Discord)</li>
            <li>130+ Video Lessons</li>
            <li>70+ Hours of Step By Step Training</li>
            <li>Chart Exercises + Walkthroughs</li>
            <li>24/7 Support</li>
            <li>Daily Chart Analysis + Markups</li>
            <li>Trade Recap Videos</li>
            <li>Daily Session Recap Videos</li>
            <li>Plug & Play Spreadsheets & Tools</li>
            <li>Lifetime Price Guarantee</li>
            <li>Cancel Anytime</li>
            <li>Billed Annually</li>
          </ul>
          <p className="flex flex-col items-center">
            <span className="font-bold text-xl">{pro?.name} Package</span>
            <span className="font-bold text-lg">${pro?.price}</span>
          </p>
        </div>
        <div className="flex hover:fill-black hover:text-black flex-col space-y-6 p-8 border-4 border-b-0 rounded-3xl items-center border-white bg-transparent bg-gradient-to-b from-white dark:from-black">
          <svg
            width="29"
            height="30"
            viewBox="0 0 29 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="hover:fill-black"
              d="M18.9552 23.4434C15.5756 21.6008 14.3299 17.3683 16.1736 13.9898C16.2966 13.7645 16.4305 13.5486 16.5743 13.342C15.6945 15.4743 15.9514 17.8469 17.1261 19.7109C16.6371 17.8672 17.4053 15.4473 20.405 14.8888C23.4887 14.3152 27.0308 16.1288 26.2802 17.8905C26.2802 17.8905 31.4574 14.6261 26.0768 12.2083C25.3537 11.8834 24.6286 11.5922 23.836 11.5746C22.5928 11.546 22.325 10.6724 20.6344 10.0719C20.6344 10.0719 23.3247 9.87464 24.6878 11.533C26.9234 9.59798 22.1288 6.02632 19.0066 5.27835C16.4855 4.67468 14.3138 4.76811 13.1049 4.72555C12.4415 4.70219 12.0818 4.45615 12.0818 4.45615C12.3834 5.91108 14.593 6.48465 14.593 6.48465C7.81409 6.79401 5.75964 13.4162 5.75964 13.4162C6.54913 12.4284 8.72556 11.6478 8.72556 11.6478C6.36642 14.2841 5.18815 16.9209 4.61459 19.0932C4.22062 17.8703 4.00677 16.5664 4.00677 15.2122C4.00677 8.23493 9.71074 2.54549 16.6911 2.56002C21.0953 2.56936 24.9706 4.82728 27.2306 8.24583C24.7656 3.75594 19.9918 0.712158 14.5058 0.712158C6.491 0.712158 -0.0330937 7.2622 0.000126304 15.2739C0.0255603 21.4295 3.88894 26.6793 9.32196 28.7581C7.06716 24.6773 6.97061 19.8489 8.81899 15.7691C7.43673 19.6356 7.96046 24.1001 10.6103 27.6302C11.1491 28.3475 11.7491 28.9907 12.3979 29.5596C13.0862 29.6597 13.79 29.7122 14.5058 29.7122C15.8253 29.7122 17.1032 29.5357 18.3178 29.2061C15.9275 26.6533 14.552 23.3194 14.4119 19.8645C14.8432 23.3677 16.7311 26.6336 19.7634 28.7301C22.9006 27.5098 25.5074 25.2311 27.1455 22.3316C25.0117 24.3996 21.7011 24.9409 18.9552 23.4434Z"
              fill="#4168B7"
            />
          </svg>

          <ul className="list-disc space-y-4 text-sm font-normal text-primary">
            <li>The Zero To Funded Course</li>
            <li>The Eloquent Service</li>
            <li>The Trading Floor (Discord)</li>
            <li>130+ Video Lessons</li>
            <li>70+ Hours of Step By Step Training</li>
            <li>Chart Exercises + Walkthroughs</li>
            <li>24/7 Support</li>
            <li>Daily Chart Analysis + Markups</li>
            <li>Trade Recap Videos</li>
            <li>Daily Session Recap Videos</li>
            <li>Plug & Play Spreadsheets & Tools</li>
            <li>Lifetime Price Guarantee</li>
            <li>Cancel Anytime</li>
            <li>Billed Annually</li>
          </ul>
          <p className="flex flex-col items-center">
            <span className="font-bold text-xl">
              {intermediate?.name} Package
            </span>
            <span className="font-bold text-lg">${intermediate?.price}</span>
          </p>
        </div>
        <div className="flex hover:fill-black hover:text-black flex-col space-y-6 p-8 border-4 border-b-0 rounded-3xl items-center border-white bg-transparent bg-gradient-to-b from-white dark:from-black">
          <svg
            width="29"
            height="30"
            viewBox="0 0 29 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="hover:fill-black"
              d="M18.9552 23.4434C15.5756 21.6008 14.3299 17.3683 16.1736 13.9898C16.2966 13.7645 16.4305 13.5486 16.5743 13.342C15.6945 15.4743 15.9514 17.8469 17.1261 19.7109C16.6371 17.8672 17.4053 15.4473 20.405 14.8888C23.4887 14.3152 27.0308 16.1288 26.2802 17.8905C26.2802 17.8905 31.4574 14.6261 26.0768 12.2083C25.3537 11.8834 24.6286 11.5922 23.836 11.5746C22.5928 11.546 22.325 10.6724 20.6344 10.0719C20.6344 10.0719 23.3247 9.87464 24.6878 11.533C26.9234 9.59798 22.1288 6.02632 19.0066 5.27835C16.4855 4.67468 14.3138 4.76811 13.1049 4.72555C12.4415 4.70219 12.0818 4.45615 12.0818 4.45615C12.3834 5.91108 14.593 6.48465 14.593 6.48465C7.81409 6.79401 5.75964 13.4162 5.75964 13.4162C6.54913 12.4284 8.72556 11.6478 8.72556 11.6478C6.36642 14.2841 5.18815 16.9209 4.61459 19.0932C4.22062 17.8703 4.00677 16.5664 4.00677 15.2122C4.00677 8.23493 9.71074 2.54549 16.6911 2.56002C21.0953 2.56936 24.9706 4.82728 27.2306 8.24583C24.7656 3.75594 19.9918 0.712158 14.5058 0.712158C6.491 0.712158 -0.0330937 7.2622 0.000126304 15.2739C0.0255603 21.4295 3.88894 26.6793 9.32196 28.7581C7.06716 24.6773 6.97061 19.8489 8.81899 15.7691C7.43673 19.6356 7.96046 24.1001 10.6103 27.6302C11.1491 28.3475 11.7491 28.9907 12.3979 29.5596C13.0862 29.6597 13.79 29.7122 14.5058 29.7122C15.8253 29.7122 17.1032 29.5357 18.3178 29.2061C15.9275 26.6533 14.552 23.3194 14.4119 19.8645C14.8432 23.3677 16.7311 26.6336 19.7634 28.7301C22.9006 27.5098 25.5074 25.2311 27.1455 22.3316C25.0117 24.3996 21.7011 24.9409 18.9552 23.4434Z"
              fill="#4168B7"
            />
          </svg>

          <ul className="list-disc space-y-4 text-sm font-normal text-primary">
            <li>The Zero To Funded Course</li>
            <li>The Eloquent Service</li>
            <li>The Trading Floor (Discord)</li>
            <li>130+ Video Lessons</li>
            <li>70+ Hours of Step By Step Training</li>
            <li>Chart Exercises + Walkthroughs</li>
            <li>24/7 Support</li>
            <li>Daily Chart Analysis + Markups</li>
            <li>Trade Recap Videos</li>
            <li>Daily Session Recap Videos</li>
            <li>Plug & Play Spreadsheets & Tools</li>
            <li>Lifetime Price Guarantee</li>
            <li>Cancel Anytime</li>
            <li>Billed Annually</li>
          </ul>
          <p className="flex flex-col items-center">
            <span className="font-bold text-xl">{beginner?.name} Package</span>
            <span className="font-bold text-lg">${beginner?.price}</span>
          </p>
        </div>
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

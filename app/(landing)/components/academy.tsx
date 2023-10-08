"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Chart, Data, Diagram, StatusUp } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { PT_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = PT_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
});

const AcademySection = () => {
  const { theme } = useTheme();

  return (
    <div id="academy" className="flex flex-col space-y-32 px-10 mb-20">
      <div className="flex min-[912px]:flex-row-reverse flex-col-reverse justify-between items-center">
        <Image
          src={theme === "dark" ? "/academy-dark.svg" : "/academy-light.png"}
          width={300}
          height={300}
          alt="images"
          className="w-auto h-auto object-cover object-center min-[912px]:block hidden"
        />
        <div className="flex flex-col min-[912px]:space-y-2 space-y-6 min-[912px]:items-start items-center">
          <h3 className="text-primary min-[912px]:text-3xl text-2xl min-[912px]:font-semibold font-normal leading-snug min-[912px]:w-1/4 w-3/4 min-[912px]:text-left text-center">
            Eloquent{" "}
            <span className="text-[#4168B7] dark:text-[#A77700]">
              Trading Academy.
            </span>
          </h3>
          <Image
            src={theme === "dark" ? "/academy-dark.svg" : "/academy-light.png"}
            width={300}
            height={300}
            alt="images"
            className="object-cover object-center min-[912px]:hidden block"
          />
          <p className="text-primary text-sm font-normal min-[912px]:w-2/4 w-full min-[912px]:text-left text-center">
            Unlock the secrets of successful trading at our cutting-edge Trading
            Academy! Join our community of skilled traders, master market
            trends, and elevate your financial potential to new heights.
            Let&apos;s trade, learn, and profit together!
          </p>
        </div>
      </div>
      <div className="flex min-[912px]:flex-row flex-col justify-between items-center">
        <Image
          src={theme === "dark" ? "/teaching-dark.svg" : "/teaching-light.png"}
          width={300}
          height={300}
          alt="images"
          className="w-auto h-auto object-cover object-center"
        />
        <div className="flex flex-col space-y-2 min-[912px]:items-end items-center">
          <h3 className="text-primary min-[912px]:text-3xl text-2xl font-semibold leading-snug uppercase min-[912px]:w-2/3 w-full min-[912px]:text-right text-left">
            <span className="text-[#4168B7] dark:text-[#A77700]">200+</span>{" "}
            Students trust us
          </h3>
          <p className="text-primary text-sm font-normal">
            Be part of the next set of students Eloquent academy enrolls.
          </p>
        </div>
      </div>
      <div className="flex min-[912px]:flex-row flex-col min-[912px]:space-x-10 min-[912px]:space-y-0 space-y-8 justify-center items-center">
        <div className="flex flex-col h-[240px] border-2 border-white border-b-0 bg-gradient-to-b from-[#FFFFFF] dark:from-[#000000] dark:to-[#FFFFFF] p-6 rounded-3xl space-y-6 w-[300px]">
          <div className="flex min-[912px]:flex-col flex-row min-[912px]:space-x-0 space-x-4 min-[912px]:space-y-2 space-y-0 min-[912px]:items-start items-center">
            <StatusUp className="w-10 h-10" />
            <h3 className="text-primary text-xl font-semibold">Defi Trading</h3>
            <div className="w-[40px] min-[912px]:block hidden border border-[#4168B7] dark:border-[#A77700]"></div>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-primary text-base font-normal">
              Your data is safe and secured with us. None of your data is shared
              with a third party company.
            </p>{" "}
          </div>
        </div>
        <div className="flex flex-col border-2 border-white border-b-0 bg-gradient-to-b from-[#FFFFFF] dark:from-[#000000] dark:to-[#FFFFFF] p-6 rounded-3xl space-y-6 w-[300px]">
          <div className="flex min-[912px]:flex-col flex-row min-[912px]:space-x-0 space-x-4 min-[912px]:space-y-2 space-y-0 min-[912px]:items-start items-center">
            <Chart className="w-10 h-10" />
            <h3 className="text-primary text-xl font-semibold">P2P Trading</h3>
            <div className="w-[40px] min-[912px]:block hidden border border-[#4168B7] dark:border-[#A77700]"></div>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-primary text-base font-normal">
              The platform is designed to be as simple as possible so our users
              can trade with ease.
            </p>
          </div>
        </div>
        <div className="flex flex-col border-2 border-white border-b-0 bg-gradient-to-b from-[#FFFFFF] dark:from-[#000000] dark:to-[#FFFFFF] p-6 rounded-3xl space-y-6 w-[300px]">
          <div className="flex min-[912px]:flex-col flex-row min-[912px]:space-x-0 space-x-4 min-[912px]:space-y-2 space-y-0 min-[912px]:items-start items-center">
            <Diagram className="w-10 h-10" />
            <h3 className="text-primary text-xl font-semibold">
              Futures Trading
            </h3>
            <div className="w-[40px] min-[912px]:block hidden border border-[#4168B7] dark:border-[#A77700]"></div>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-primary text-base font-normal">
              The platform is designed to be as simple as possible so our users
              can trade with ease.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-8">
        <div className="flex min-[912px]:flex-row flex-col justify-between items-center">
          <div className="flex flex-col space-y-8 min-[912px]:items-start items-center">
            <h3 className="font-medium min-[912px]:text-5xl text-xl min-[912px]:w-7/12 w-full leading-normal min-[912px]:text-left text-center">
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
            <div>
              <Button
                variant="custom"
                className={cn(
                  "rounded-tl-none rounded-br-none opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out min-[912px]:flex hidden",
                  font.className
                )}
              >
                Enroll <Data className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <Image
            src="/certificate.png"
            alt="certificate"
            width={300}
            height={300}
            className="w-auto h-auto object-cover object-center min-[912px]:flex hidden"
          />
          <Button
            variant="custom"
            className={cn(
              "rounded-tl-none rounded-br-none opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out min-[912px]:flex hidden",
              font.className
            )}
          >
            Enroll <Data className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex min-[912px]:flex-row flex-col min-[9122px]:space-y-0 space-y-10 justify-between items-center">
        <div className="flex flex-col space-y-8 relative items-center">
          <div className="flex space-x-4">
            <h3 className="min-[912px]:hidden block text-3xl font-normal">1</h3>
            <h3 className="text-2xl font-normal z-10">Become a member</h3>
          </div>{" "}
          <div className="min-[912px]:absolute hidden bg-gradient-to-b from-black dark:from-white text-transparent bg-clip-text font-bold text-6xl z-0">
            1
          </div>
          <p className="font-normal text-sm lg:w-1/2 text-center">
            Join with a subscription to get instant access to your student
            dashboard and begin your lessons.{" "}
          </p>
        </div>
        <div className="flex flex-col space-y-8 relative items-center">
          <div className="flex space-x-4">
            <h3 className="min-[912px]:hidden block text-3xl font-normal">2</h3>
            <h3 className="text-2xl font-normal z-10">Watch the lesson</h3>
          </div>
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
      <div className="flex min-[912px]:flex-row flex-col min-[912px]:space-y-0 space-y-8 justify-between items-center">
        <div className="flex flex-col space-y-6 p-8 border-4 border-b-0 rounded-3xl items-center border-white bg-transparent bg-gradient-to-b from-white dark:from-black">
          <Image
            src={
              theme === "dark"
                ? "/small-logo-dark.svg"
                : "/small-logo-light.svg"
            }
            alt="logo"
            width={100}
            height={100}
            className="w-auto h-auto object-cover object-center"
          />
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
            <span className="font-bold text-xl">Pro Package</span>
            <span className="font-bold text-lg">$300</span>
          </p>
        </div>
        <div className="flex flex-col space-y-6 p-8 border-4 border-b-0 rounded-3xl items-center border-white bg-transparent bg-gradient-to-b from-white dark:from-black">
          <Image
            src={
              theme === "dark"
                ? "/small-logo-dark.svg"
                : "/small-logo-light.svg"
            }
            alt="logo"
            width={100}
            height={100}
            className="w-auto h-auto object-cover object-center"
          />
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
            <span className="font-bold text-xl">Intermediate Package</span>
            <span className="font-bold text-lg">$270</span>
          </p>
        </div>
        <div className="flex flex-col space-y-6 p-8 border-4 border-b-0 rounded-3xl items-center border-white bg-transparent bg-gradient-to-b from-white dark:from-black">
          <Image
            src={
              theme === "dark"
                ? "/small-logo-dark.svg"
                : "/small-logo-light.svg"
            }
            alt="logo"
            width={100}
            height={100}
            className="w-auto h-auto object-cover object-center"
          />
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
            <span className="font-bold text-xl">Beginners Package</span>
            <span className="font-bold text-lg">$150</span>
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
          >
            Start Now <Data className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AcademySection;

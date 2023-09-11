import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Crown1 } from "iconsax-react";
import { ModeToggle } from "./mode-toggle";

const routes = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Academy",
    href: "#academy",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const LandingNavbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4">
      <div className="flex space-x-8 items-center">
        <div className="w-5 h-5 border-2 dark:border-[#A77700] border-[#4168B7] rounded-full"></div>
        <div className="flex gap-x-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-base min-[912px]:flex hidden font-medium cursor-pointer"
            >
              <div className="flex ">
                <div className="hover:text-[#4168B7] dark:hover:text-[#A77700] transition">
                  {route.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-x-4">
        <Link href="/sign-up">
          <Button className="bg-[#4168B7] dark:hover:bg-primary text-white dark:bg-[#A77700] active:text-primary hover:text-white dark:hover:text-black active:bg-secondary dark:active:bg-primary text-base font-normal group transition">
            Get Started
            <Crown1 className="h-6 w-6 text-white ml-2 dark:group-hover:text-black transition" />
          </Button>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default LandingNavbar;

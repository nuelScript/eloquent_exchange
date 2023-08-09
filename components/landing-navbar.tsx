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
        <div className="w-5 h-5 border-2 dark:border-[#FFCC66] border-[#4168B7] rounded-full"></div>
        <div className="flex gap-x-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-base min-[912px]:flex hidden font-medium cursor-pointer"
            >
              <div className="flex ">
                <div className="hover:text-[#4168B7] dark:hover:text-[#FFCC66] transition">
                  {route.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-x-4">
        <Button className="bg-[#4168B7] text-primary dark:bg-[#FFCC66] active:text-primary hover:text-primary active:bg-secondary dark:active:bg-primary text-base font-normal">
          Get Started
          <Crown1 className="h-6 w-6 text-white ml-2" />
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
};

export default LandingNavbar;

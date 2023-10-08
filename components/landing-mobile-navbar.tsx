import { Crown1, Firstline } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import { routes } from "./landing-navbar";
import { ModeToggle } from "./mode-toggle";
import MobileSidebar from "./mobile-navbar";

const MobileLandingNavbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Sheet>
      <SheetTrigger>
        <Button className="min-[912px]:hidden flex" size="icon" variant="ghost">
          <Firstline variant="Outline" className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0" side="right">
        <div className="flex flex-col justify-between items-center px-10 min-[912px]:py-4 py-8">
          <div className="space-x-8 items-center hidden min-[912px]:flex">
            <div className="hidden min-[912px]:flex w-5 h-5 border-2 dark:border-[#A77700] border-[#4168B7] rounded-full"></div>
            <div className="flex gap-x-8">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="text-base min-[912px]:flex hidden font-medium cursor-pointer"
                  onClick={handleScroll}
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
            <Link href="/sign-up" className="min-[912px]:flex hidden">
              <Button className="bg-[#4168B7] dark:hover:bg-primary text-white dark:bg-[#A77700] active:text-primary hover:text-white dark:hover:text-black active:bg-secondary dark:active:bg-primary text-base font-normal group transition">
                Get Started
                <Crown1 className="h-6 w-6 text-white ml-2 dark:group-hover:text-black transition" />
              </Button>
            </Link>
            <ModeToggle />
            <MobileSidebar />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileLandingNavbar;

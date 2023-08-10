"use client";

import { cn } from "@/lib/utils";
import { Building4, Moneys, UserTag, LogoutCurve } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import MobileSidebar from "@/components/mobile-navbar";
import { useTheme } from "next-themes";

export const routes = [
  {
    label: "Dashboard",
    icon: Building4,
    href: "/dashboard",
  },
  {
    label: "Refer and Earn",
    icon: Moneys,
    href: "/refer&earn",
  },
  {
    label: "Profile",
    icon: UserTag,
    href: "/profile",
  },
  {
    label: "Sign out",
    icon: LogoutCurve,
    onclick: () => {},
    href: "",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const { setTheme } = useTheme();
  return (
    <div className="w-full flex justify-between items-center px-4 min-[912px]:px-8 py-4">
      <Link href="/dashboard">
        <div className="">
          <Image
            src="/logo.svg"
            width={180}
            height={180}
            alt="Logo"
            className="object-contain bg-"
          />
        </div>
      </Link>
      <div className="flex gap-x-8 ">
        {routes.map((route) => (
          <Link
            href={route.href}
            onClick={route.onclick}
            key={route.href}
            className="text-base min-[912px]:flex hidden font-medium cursor-pointer"
          >
            <div className="flex flex-1 items-center">
              <route.icon
                variant="Outline"
                className={cn(
                  "w-6 h-6 mr-2",
                  pathname === route.href
                    ? "text-[#4168B7] dark:text-[#FFCC66]"
                    : "text-primary"
                )}
              />
              <div className="hover:text-[#4168B7] dark:hover:text-[#FFCC66] transition">
                {route.label}
              </div>
            </div>
          </Link>
        ))}
        <MobileSidebar />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import { cn } from "@/lib/utils";
import {
  Building4,
  Moneys,
  UserTag,
  LogoutCurve,
  ArrowLeft2,
} from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import MobileSidebar from "@/components/mobile-navbar";
import { useTheme } from "next-themes";

export const routes = [
  {
    label: "Dashboard",
    icon: Building4,
    href:
      "/dashboard" ||
      "/dashboard/transactions" ||
      "/dashboard/transactions/buy&sell" ||
      "/dashboard/transactions/checkout" ||
      "/dashboard/transactions/instructions" ||
      "/dashboard/transactions/payment",
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
];

const Navbar = () => {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  return (
    <div className="w-full flex justify-between items-center px-4 min-[915px]:px-8 min-[450px]:py-4 py-8">
      <div>
        <div className="min-[450px]:block flex items-center min-[450px]:space-x-0 space-x-32">
          <ArrowLeft2
            className="h-6 w-6 min-[450px]:hidden block cursor-pointer"
            onClick={router.back}
          />
          <Link href="/dashboard" className="min-[450px]:block hidden">
            <Image
              src={resolvedTheme === "dark" ? "/logo.svg" : "/logo2.svg"}
              width={200}
              height={200}
              alt="Logo"
              className="object-cover min-[450px]:block hidden"
            />
          </Link>
          <Image
            src={
              resolvedTheme === "dark"
                ? "/smal-logo-dark.svg"
                : "/small-logo.svg"
            }
            width={40}
            height={40}
            alt="small_logo"
            className="object-cover min-[450px]:hidden block"
          />
        </div>
      </div>

      <div className="flex gap-x-8">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className="text-base min-[912px]:flex hidden font-medium cursor-pointer"
          >
            <div className="flex flex-1 items-center">
              <route.icon
                variant="Outline"
                className={cn(
                  "w-6 h-6 mr-2",
                  pathname.startsWith(route.href)
                    ? "text-[#4168B7] dark:text-[#A77700]"
                    : "text-primary"
                )}
              />
              <div className="hover:text-[#4168B7] dark:hover:text-[#A77700] transition">
                {route.label}
              </div>
            </div>
          </Link>
        ))}
        <div
          className="flex-1 items-center hover:cursor-pointer text-base min-[912px]:flex hidden font-medium"
          onClick={() => redirect("/")}
        >
          <LogoutCurve
            variant="Outline"
            className="w-6 h-6 mr-2 text-primary"
          />
          <div className="hover:text-[#4168B7] dark:hover:text-[#A77700] transition">
            Sign out
          </div>
        </div>
        <MobileSidebar />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;

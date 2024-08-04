"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Firstline, LogoutCurve } from "iconsax-react";
import { Button } from "@/components/ui/button";
import { routes } from "./navbar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const MobileSidebar = () => {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Sheet>
      <SheetTrigger>
        <Button className="min-[912px]:hidden" size="icon" variant="ghost">
          <Firstline variant="Outline" className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0" side="right">
        <div className="flex items-center justify-start pt-16 px-8">
          <Link href="/dashboard">
            <Image
              src={resolvedTheme === "dark" ? "/logo.svg" : "/logo2.svg"}
              alt="Logo"
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div className="flex px-8 pt-12 gap-y-8 flex-col">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-base font-medium cursor-pointer"
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
            className="flex-1 items-center hover:cursor-pointer text-base min-[912px]:hidden flex font-medium"
            onClick={() => router.push("/")}
          >
            <LogoutCurve
              variant="Outline"
              className="w-6 h-6 mr-2 text-primary"
            />
            <div className="hover:text-[#4168B7] dark:hover:text-[#A77700] transition">
              Sign out
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

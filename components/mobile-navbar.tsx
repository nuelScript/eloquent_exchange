import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Firstline } from "iconsax-react";
import { Button } from "./ui/button";
import { routes } from "./navbar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const MobileSidebar = () => {
  const pathname = usePathname();

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
      <SheetContent className="p-0" side="left">
        <div className="flex items-center justify-start pt-16 px-8">
          <Link href="/dashboard">
            <Image src="/logo.png" alt="Logo" width={180} height={180} />
          </Link>
        </div>
        <div className="flex px-8 pt-12 gap-y-8 flex-col">
          {routes.map((route) => (
            <Link
              href={route.href}
              onClick={route.onclick}
              key={route.href}
              className="text-base font-medium cursor-pointer"
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
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

const CheckoutInstructionsPage = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex flex-col space-y-4 items-center">
      <Image
        src={
          resolvedTheme === "dark"
            ? "/instruction-dark.svg"
            : "/instruction-light.svg"
        }
        alt="instruction-logo"
        width={300}
        height={300}
        className="object-cover"
      />
    </div>
  );
};

export default CheckoutInstructionsPage;

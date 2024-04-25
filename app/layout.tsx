import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Poppins } from "next/font/google";
import ToasterProvider from "./providers/toast-provider";
import { CrispProvider } from "@/components/crisp-provider";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Eloquent Exchange",
  description:
    "Welcome to Eloquent Exchange. Your one stop community for all cryptocurrencies 🚀.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Analytics />
          <CrispProvider />
          <ToasterProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import { LandingNavbar } from "@/components/landing-navbar";

export default function CryptoPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[url('/light.svg')] bg-center bg-no-repeat bg-cover bg-fixed dark:bg-[url('/dark.svg')]">
      <LandingNavbar />
      {children}
    </div>
  );
}

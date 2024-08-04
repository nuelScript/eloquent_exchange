import { LandingNavbar } from "@/components/landing-navbar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[url('/light.svg')] bg-center bg-no-repeat bg-cover bg-fixed dark:bg-[url('/dark.svg')] transition-all">
      <LandingNavbar />
      {children}
    </div>
  );
}

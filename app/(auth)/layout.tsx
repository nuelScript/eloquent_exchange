import LandingNavbar from "@/components/landing-navbar";

export default function AuthPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[url('/light.svg')] bg-center bg-no-repeat bg-cover bg-fixed dark:bg-[url('/dark.svg')]">
      <div className="bg-[url('/rockets.svg')] bg-center bg-no-repeat bg-contain bg-fixed ">
        <LandingNavbar />
        {children}
      </div>
    </div>
  );
}

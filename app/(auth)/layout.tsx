import LandingNavbar from "@/components/landing-navbar";

export default function AuthPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <LandingNavbar />
      {children}
    </div>
  );
}

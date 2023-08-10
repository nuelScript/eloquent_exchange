import Navbar from "@/components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[url('/light.svg')] bg-center bg-no-repeat bg-cover bg-fixed dark:bg-[url('/dark.svg')] transition-all">
      <Navbar />
      {children}
    </div>
  );
}

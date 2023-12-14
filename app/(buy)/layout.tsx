import Navbar from "@/components/navbar";

export default function BuyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[url('/light.svg')] bg-center bg-no-repeat bg-cover bg-fixed dark:bg-[url('/dark.svg')]">
      <Navbar />
      {children}
    </div>
  );
}

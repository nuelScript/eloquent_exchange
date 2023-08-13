import Link from "next/link";
import { Payment, columns } from "./components/columns";
import { DataTable } from "./components/data-table.";
import { Button } from "@/components/ui/button";

function getData(): Payment[] {
  return [
    {
      order_id: "728ed52f",
      date: "2021-08-01",
      amount: 100,
      status: "Pending",
      transaction_type: "Bought",
    },
    {
      order_id: "728ed52f",
      date: "2021-08-01",
      amount: 100,
      status: "Rejected",
      transaction_type: "Bought",
    },
    {
      order_id: "728ed52f",
      date: "2021-08-01",
      amount: 100,
      status: "Success",
      transaction_type: "Bought",
    },
    {
      order_id: "728ed52f",
      date: "2021-08-01",
      amount: 100,
      status: "Success",
      transaction_type: "Bought",
    },
    {
      order_id: "728ed52f",
      date: "2021-08-01",
      amount: 100,
      status: "Success",
      transaction_type: "Bought",
    },
  ];
}

const DashboardPage = () => {
  const data = getData();
  return (
    <div className="w-full h-screen flex flex-col gap-y-20 px-10 py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-normal">Welcome back, nd3r4a</h1>
        <div className="flex flex-col gap-y-4">
          <Link href="/buy">
            <Button
              variant="outline"
              className="border border-[#4168B7] dark:border-[#A77700] items-center justify-center text-base font-normal text-primary dark:text-muted-foreground px-8 text-center py-5"
            >
              Buy Crypto
            </Button>
          </Link>
          <Link href="/sell">
            <Button
              variant="outline"
              className="border border-black dark:border-white items-center justify-center text-base font-normal text-primary dark:text-muted-foreground px-8 text-center py-5"
            >
              Sell Crypto
            </Button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto py-10 space-y-10">
        <div className="flex justify-between items-center">
          <p className="text-primary text-lg font-medium">
            Transaction History
          </p>
          <div className="flex gap-x-4">
            <Button
              variant="outline"
              className="border dark:border-[#A77700] border-[#4168B7] text-base font-normal text-primary dark:text-muted-foreground px-8 py-5"
            >
              All
            </Button>
            <Button
              variant="outline"
              className="border dark:border-primary border-primary text-base font-normal text-primary dark:text-muted-foreground px-8 py-5"
            >
              Buy
            </Button>
            <Button
              variant="outline"
              className="border dark:border-primary border-primary text-base font-normal text-primary dark:text-muted-foreground px-8 py-5"
            >
              Sell
            </Button>
          </div>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default DashboardPage;

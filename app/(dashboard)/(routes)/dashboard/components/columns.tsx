"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  order_id: string;
  date: string;
  amount: number;
  status: "Success" | "Pending" | "Rejected";
  transaction_type: "Bought" | "Sold";
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order_id",
    header: "Order ID",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "transaction_type",
    header: "Transaction Type",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

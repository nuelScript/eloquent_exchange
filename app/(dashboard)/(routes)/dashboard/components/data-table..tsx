"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import Image from "next/image";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <div>
      {table.getRowModel().rows?.length ? (
        <div className="border border-[#4168B7] dark:border-[#A77700]">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  className="border-[#4168B7] dark:border-[#A77700]"
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    className="border-[#4168B7] dark:border-[#A77700]"
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No Results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col space-y-3">
          <p>You have not had any transaction with us yet</p>
          <Image
            src="/dash.svg"
            alt="Referal"
            width={200}
            height={200}
            className="ml-8 !sm:h-[250px] !sm:w-[250px] animate-pulse"
          />
          <div className="flex flex-row min-[912px]:gap-y-4 gap-x-4">
            <Link href="/dashboard/transactions/buy&sell/buy">
              <Button
                variant="outline"
                className="border bg-[#4168B7] text-white dark:bg-[#A77700] items-center justify-center font-normal  px-8 text-center py-5"
              >
                Buy Crypto
              </Button>
            </Link>
            <Link href="/dashboard/transactions/buy&sell/sell">
              <Button
                variant="outline"
                className="border border-black dark:border-white items-center justify-center text-base font-normal  dark:text-muted-foreground px-8 text-center py-5"
              >
                Sell Crypto
              </Button>
            </Link>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

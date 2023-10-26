"use client";

import Link from "next/link";
import { Payment, columns } from "./components/columns";
import { DataTable } from "./components/data-table.";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "@/lib/utils";
import axios from "axios";
import {
  getBoughtCrypto,
  getCrypto,
  getSoldCrypto,
  getUsers,
  googleOAuth,
  postGoogleOAuth,
} from "@/lib/helpers";
import isAuth from "@/components/isAuth";

// function getData(): Transactions[] {
//   return [
//     // {
//     //   order_id: "728ed52f",
//     //   date: "2021-08-01",
//     //   amount: 100,
//     //   status: "Pending",
//     //   transaction_type: "Bought",
//     // },
//     // {
//     //   order_id: "728ed52f",
//     //   date: "2021-08-01",
//     //   amount: 100,
//     //   status: "Rejected",
//     //   transaction_type: "Bought",
//     // },
//     // {
//     //   order_id: "728ed52f",
//     //   date: "2021-08-01",
//     //   amount: 100,
//     //   status: "Success",
//     //   transaction_type: "Bought",
//     // },
//     // {
//     //   order_id: "728ed52f",
//     //   date: "2021-08-01",
//     //   amount: 100,
//     //   status: "Success",
//     //   transaction_type: "Bought",
//     // },
//     // {
//     //   order_id: "728ed52f",
//     //   date: "2021-08-01",
//     //   amount: 100,
//     //   status: "Success",
//     //   transaction_type: "Bought",
//     // },
//   ];
// }

const DashboardPage = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchCallBackUrl = () => {
      const url = window.location.href;
      const urlParams = new URLSearchParams(url);
      console.log(urlParams);
      const code = urlParams.get("code");
      console.log(code);
      const state = localStorage.getItem("state");
      console.log(state);
      if (code && state) {
        const fetchAccessToken = async () => {
          try {
            await axios
              .post(postGoogleOAuth, {
                state: state,
                code: code,
              })
              .then((response) => {
                const responseData = response.data;
                console.log(responseData);
                const accessToken = responseData.access_token;
                const refreshToken = responseData.refresh_token;
                console.log(accessToken);
                if (accessToken) {
                  setCookie("access_token", accessToken, 7);
                  setCookie("refresh_token", refreshToken, 7);
                }
              });
          } catch (error) {
            console.error("Error", error);
          }
        };

        fetchAccessToken();
      }
    };

    fetchCallBackUrl();
  }, []);

  useEffect(() => {
    const fetchdata = async () => {
      const accessToken = getCookie("access_token");
      if (accessToken) {
        try {
          const response = await axios.get(getUsers, {
            headers: {
              Authorization: `JWT ${accessToken}`,
              "Content-Type": "application/json",
            },
          });
          const responseData = response.data;
          const userName = responseData[0].first_name;
          if (userName) {
            setName(userName);
          }
        } catch (error) {
          console.error("Error", error);
        }
      }
    };

    fetchdata();
  }, []);

  useEffect(() => {
    const fetchCrypto = async () => {
      const accessToken = getCookie("access_token");
      if (accessToken) {
        try {
          const response = await axios.get(getSoldCrypto, {
            headers: {
              Authorization: `JWT ${accessToken}`,
              "Content-Type": "application/json",
            },
          });
          const responseData: Payment[] = response.data;
          if (responseData) {
            setData(responseData);
          }
        } catch (error) {
          console.error("Error", error);
        }
      }
    };

    fetchCrypto();
  }, []);

  // const data = getData();
  return (
    <div className="w-full h-screen flex flex-col gap-y-20 px-10 py-8">
      <div className="flex min-[912px]:flex-row min-[912px]:space-y-0 space-y-8 flex-col justify-between items-center">
        <h1 className="text-2xl font-normal min-[912px]:text-5xl">
          Welcome back, {name}
        </h1>
        <div className="flex min-[912px]:flex-col flex-row min-[912px]:gap-y-4 gap-x-4">
          <Link href="/dashboard/transactions/buy&sell/buy">
            <Button
              variant="outline"
              className="border border-[#4168B7] dark:border-[#A77700] items-center justify-center text-base font-normal text-primary dark:text-muted-foreground px-8 text-center py-5"
            >
              Buy Crypto
            </Button>
          </Link>
          <Link href="/dashboard/transactions/buy&sell/sell">
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
        <div className="flex min-[912px]:flex-row flex-col justify-between min-[912px]:items-center items-start min-[912px]:space-y-0 space-y-4">
          <p className="text-primary text-lg min-[912px]:text-lg font-medium text-start">
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

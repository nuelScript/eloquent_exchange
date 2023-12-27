"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Footer from "@/components/footer";
// import Ticker from "reac

const CryptoPage = () => {
  const [initial, setInitial] = useState([]);

  useEffect(() => {
    const fetchNewsdata = async () => {
      try {
        const response = await axios.get("https://api.coincap.io/v2/assets", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        let responseData = response.data.data;
        console.log(responseData);
        const coinn = responseData.slice(0, 20);
        console.log(coinn);
        setInitial(coinn);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchNewsdata();
  }, []);

  return (
    <main>
      <section className="container px-10 mx-auto">
        <div className="flex flex-col space-y-8 pt-20">
          <h1 className="min-[912px]:font-semibold w-full text-center min-h-full leading-[60px] min-[912px]:text-[30px] text-3xl font-normal">
            Get Accurate Crypto Currency Pricing list
          </h1>
          <table className="table-auto rounded-lg text-center border-2 p-3 px-4">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Last Price</th>
                <th>24 chg(%)</th>
              </tr>
            </thead>
            <tbody className="my-auto border-3 py-3 mx-auto px-auto">
              {initial.map((ini: any, i) => (
                <tr className="border-2" key={i}>
                  <td className="border-r-2 p-4 text-center mb-2">{i + 1}</td>
                  <td className="border-r-2 p-4 text-center mb-2">
                    {ini.name}
                  </td>
                  <td className="border-r-2 p-4 text-center mb-2">
                    {Math.round(ini.priceUsd * 100) / 100}
                  </td>
                  <td className="border-r-2 p-4 text-center mb-2">
                    <span
                      className={
                        ini.changePercent24Hr.substring(0, 1) == "-"
                          ? cn("bg-red-500 text-white p-2 rounded")
                          : cn("bg-green-500 text-white p-2 rounded")
                      }
                    >
                      {" "}
                      {Math.round(ini.changePercent24Hr * 100) / 100}{" "}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
};

export default CryptoPage;

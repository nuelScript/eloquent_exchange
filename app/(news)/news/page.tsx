"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshSquare } from "iconsax-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Footer from "@/components/footer";
import Seperation from "@/components/border";
import { DirectRight } from "iconsax-react";
// import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Link from "@/node_modules/next/link";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [initial, setInitial] = useState([]);

  // useEffect(() => {
  //   // Intercom code snippet
  //   var APP_ID = "4376545hd";

  //   (function () {
  //     var w = window;
  //     var ic = w.Intercom;
  //     if (typeof ic === "function") {
  //       ic("reattach_activator");
  //       ic("update", w.intercomSettings);
  //     } else {
  //       var d = document;
  //       var i = function () {
  //         i.c(arguments);
  //       };
  //       i.q = [];
  //       i.c = function (args) {
  //         i.q.push(args);
  //       };
  //       w.Intercom = i;
  //       var l = function () {
  //         var s = d.createElement("script");
  //         s.type = "text/javascript";
  //         s.async = true;
  //         s.src = "https://widget.intercom.io/widget/" + APP_ID;
  //         var x = d.getElementsByTagName("script")[0];
  //         x.parentNode.insertBefore(s, x);
  //       };
  //       if (document.readyState === "complete") {
  //         l();
  //       } else if (w.attachEvent) {
  //         w.attachEvent("onload", l);
  //       } else {
  //         w.addEventListener("load", l, false);
  //       }
  //     }
  //   })();
  //   // Call boot method
  //   (window as any).Intercom("boot", {
  //     app_id: "4376545hd",
  //   });
  // }, []);

  useEffect(() => {
    const fetchNewsdata = async () => {
      try {
        const response = await axios.get(
          "https://newsdata.io/api/1/news?apikey=pub_34818ece74443573c4556ec3186740b2f3239&q=cryptocurrency",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseData = response.data.results;

        const responseNew = responseData.slice(0, 4);
        const resp = responseData[0];
        const respp = responseData.slice(0, 1);
        console.log(resp);

        console.log(responseNew);
        // const responseData = response.data;
        // const userName = responseData[0].first_name;
        if (responseNew) {
          setNews(responseNew);
          setInitial(respp);
        }
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchNewsdata();
  }, []);

  const { resolvedTheme } = useTheme();
  return (
    <main className="w-full">
      <div className="text-center h-[300px] flex items-center justify-center bg-gradient-to-b from-[#4168B7] to-white dark:from-[#A77700]   w-full space-y-10">
        <div className="px-10 md:mt-3 mt-32 sm:pt-10 items-center py-20">
          <p className="lg:text-[58px]  mt-5 text-3xl text-white flex flex-col  font-bold text-center my-auto  item-center">
            Your Gateway to the Future of Finance!
          </p>
          <p className="text-md mt-5 text-center mx-auto px-auto w-full max-w-[1000px]">
            In the ever-evolving world of cryptocurrencies, staying ahead is not
            just an advantage; it is the key to unlocking the vast potential of
            digital asset.
          </p>
          <div className="flex my-5 pt-3 mx-auto px-auto w-full max-w-sm items-center space-x-2">
            <Input className="p-4" type="email" placeholder="Email" />
            <Button className="py-2" type="submit">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {initial.map((items: any, i) => {
        return (
          <section
            key={items.article_id}
            className=" mt-24 px-3 md:px-6 lg:px-10 "
          >
            <div className="my-4 space-y-3">
              <h2 className="text-[#4168B7] font-medium lg:text-3xl text-2xl dark:text-[#A77700]">
                |TOP STORY.|
              </h2>

              <p className="lg:text-[40px] md:leading-[50px] leading-[24px] text-xl font-bold">
                {items.title}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto px-0 items-center md:space-x-5 lg:space-x-8">
              <div>
                <div className="w-full max-[992px]:hidden">
                  <Image
                    src="block.svg"
                    alt="referral"
                    width={700}
                    height={500}
                    className="max-w-[1000] max-h-[500px]"
                  />
                </div>

                <div className="md:hidden">
                  <Image
                    src="blocksm.svg"
                    alt="referral"
                    width={500}
                    height={400}
                    className="max-h-[400px] mb-3"
                  />
                </div>
              </div>

              <div className="flex flex-col col-span-2 space-y-8">
                <p className="indent-4 line-clamp-4 md:line-clamp-none md:line-clamp-0">
                  {items.content}
                </p>
                {/* <p className="indent-4">
                  However, during peak times, both of these chains grapple with
                  sluggish transaction speeds and steep fees. Developers from
                  several L1 networks are working to improve layer one scaling
                  through methods like increasing block size, sharding, and
                  introducing proof-of-stake consensus.
                </p>
                <p className="indent-4">
                  However, substantial layer one upgrades require coordination
                  among node operators and can take years to implement. Some
                  blockchains intend to use L2 protocols as either a temporary
                  or long-term solution. Bitcoin’s Lightning Network (LN) is a
                  second-layer scaling solution designed to facilitate faster,
                  low-cost transactions on the Bitcoin blockchain (L1). It
                  operates on top of Bitcoin’s base layer, allowing for instant
                  payments by circumventing the need for block confirmations.
                </p> */}
              </div>
            </div>
            <div className="mt-5 space-y-5">
              <h3 className="text-[#4168B7] mb-4 font-medium lg:text-2xl text-xl dark:text-[#A77700]">
                Brief on Lightining network Blockchain
              </h3>
              <p className="indent-4">
                Transactions on the Lightning Network occur off-chain in payment
                channels between users. Only channel open and close transactions
                are recorded on the Bitcoin blockchain. Participants can
                transact multiple times within these channels, reducing
                congestion and fees on L1.
              </p>
              <p className="indent-4">
                Critics target LN for its prevalent use of custodial wallets, as
                these demand users place trust in third parties to handle their
                money. Moreover, the off-chain method poses a risk: if nodes
                lack proper backup, it could trigger an irrevocable loss of
                funds. Loopring uses zero-knowledge rollups (ZK-rollups) to
                batch hundreds of transactions off-chain and generate a
                cryptographic proof verifying their validity. This proof is
                submitted to layer one (Ethereum), avoiding the need to process
                each transaction on-chain. Polygon ZKEVM also uses ZK-rollup
                technology to offer high throughput Ethereum transactions with
                lower fees. On the risk side, some believe that relying heavily
                on ZK-rollups can introduce centralization risks as validators
                and sequencers become key to the system
              </p>
            </div>
          </section>
        );
      })}

      <section className="lg:px-10 px-3 w-full md:px-6 py-10 mx-auto">
        <div className="grid items-center my-4 gap-3 md:space-x-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-[#4168B7] mb-4 font-medium lg:text-3xl text-2xl dark:text-[#A77700]">
              |TOP STORY.|
            </h2>

            {initial.map((items: any, i) => {
              return (
                <div key={items.article_id}>
                  <div>
                    {/* <Image
                src="news.svg"
                alt="referral"
                width={800}
                height={400}
                className=""
              /> */}

                    <img
                      src={items.image_url}
                      className="rounded-lg bg-[#4168B7] dark:bg-[#A77700]"
                      width="100%"
                      height="400px"
                      alt="crypto image"
                    />
                  </div>

                  <div>
                    <small className="my-3 py-2 space-x-2  flex flex-row">
                      <Image
                        src="calender.svg"
                        alt="calender"
                        width={20}
                        height={20}
                        className=""
                      />

                      <span>{items.pubDate} |</span>
                    </small>

                    <div>
                      <h3 className="text-[#4168B7] font-medium lg:text-3xl text-2xl dark:text-[#A77700]">
                        {items.title}
                      </h3>

                      <p className="font-[19px] line-clamp-3 pr-2  my-2 leading-[25px] font-normal">
                        {items.content}
                      </p>
                    </div>
                    <div className="author flex flex-row justify-between px-1">
                      <div className="flex flex-row space-x-2 items-center">
                        <img
                          src={items.image_url}
                          className="rounded-lg bg-[#4168B7] dark:bg-[#A77700]"
                          width="20px"
                          height="20px"
                          alt="crypto image"
                        />
                        {/* <Image
                        className="rounded-lg bg-[#4168B7] dark:bg-[#A77700]"
                        src=""
                        alt="author"
                        width={20}
                        height={20}
                      /> */}
                        <span>
                          {items.creator != null
                            ? items.creator ?? items.creator
                            : "Samuel"}
                        </span>
                      </div>

                      <div>
                        <Link href={items.link}>
                          <Button
                            style={{ borderRadius: "10px" }}
                            className="w-full text-white py-4 rounded-lg bg-[#4168B7] hover:bg-primary text-lg dark:bg-[#A77700] dark:hover:bg-primary  hover:text-white dark:hover:text-black"
                            variant="default"
                          >
                            Read More
                            <DirectRight
                              className="w-5 h-5 ml-2"
                              variant="Linear"
                            />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex ml-0 pl-0 w-full mx-auto px-auto flex-col ">
            <h2 className="text-[#4168B7] mt-4 pt-5 md:mt-0  text-center md:text-right mb-4 font-bold lg:text-3xl text-2xl dark:text-[#A77700]">
              More News
            </h2>

            {news.map((items: any, i) => {
              return (
                <div
                  key={items.article_id}
                  className="flex flex-row mb-3 lg:mb-4 space-x-2 items-start"
                >
                  <img
                    src={items.image_url}
                    width="100px"
                    height="70px"
                    alt="crypto image"
                  />
                  {/* <Image
                    src="morenews.svg"
                    alt="author"
                    width={100}
                    height={70}
                  /> */}

                  <div>
                    <h4 className="text-left mb-2 font-bold  text-[16px]">
                      {items.title}
                    </h4>
                    <p className="w-[245px] my-2 truncate ... line-clamp-2 text-13px">
                      {items.description != null
                        ? items.description
                        : items.content}
                    </p>
                    <Link href={items.link}>
                      <Button
                        style={{ borderRadius: "3px" }}
                        className="w-full my-2 text-[6px] text-white py-2 rounded-lg bg-[#4168B7] hover:bg-primary text-lg dark:bg-[#A77700] dark:hover:bg-primary mx-auto px-auto  hover:text-white dark:hover:text-black"
                        variant="default"
                      >
                        Read More
                        <DirectRight
                          className="w-5 h-5 ml-2"
                          variant="Linear"
                        />
                      </Button>
                    </Link>
                    <small className="py-3">
                      {items.creator != null
                        ? items.creator[0] ?? items.creator
                        : "Sammy"}{" "}
                      - {items.pubDate}
                    </small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Seperation />
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default NewsPage;

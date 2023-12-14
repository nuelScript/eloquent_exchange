"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshSquare } from "iconsax-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Footer from "@/components/footer";
import Seperation from "@/components/border";
// import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const NewsPage = () => {
  const { resolvedTheme } = useTheme();
  return (
    <main className="w-full">
      <div className="text-center h-[300px] flex items-center justify-center bg-gradient-to-b from-[#4168B7] to-white dark:from-[#A77700]   w-full space-y-10">
        <div className="px-10  items-center py-20">
          <p className="lg:text-[58px] text-3xl text-white flex flex-col  font-bold text-center my-auto  item-center">
            Your Gateway to the Future of Finance!
          </p>
          <p className="text-md mt-5 text-center mx-auto px-auto w-full max-w-[1000px]">
            In the ever-evolving world of cryptocurrencies, staying ahead is not
            just an advantage; its the key to unlocking the vast potential of
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

      <section className="px-10">
        <div className="my-4 space-y-3">
          <h2 className="text-[#4168B7] font-medium lg:text-3xl text-2xl dark:text-[#A77700]">
            |TOP STORY.|
          </h2>
          <p className="lg:text-[40px] leading-[50px] text-xl font-bold">
            The Scalability Solution: Understanding Layer One vs. Layer Two
            Blockchains
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-5 lg:space-x-10">
          <div className="w-full max-[992px]:hidden">
            <Image
              src="block.svg"
              alt="referral"
              width={500}
              height={400}
              className="max-w-[500] max-h-[400px]"
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

          <div className="flex flex-col space-y-8">
            <p className="indent-4">
              Layer one or L1 refers to a base blockchain protocol like Bitcoin
              or Ethereum. These networks operate on a decentralized ledger
              secured by proof-of-work (PoW) mining or proof-of-stake (PoS)
              staking. L1 chains such as Bitcoin and Ethereum offer unparalleled
              security.
            </p>
            <p className="indent-4">
              However, during peak times, both of these chains grapple with
              sluggish transaction speeds and steep fees. Developers from
              several L1 networks are working to improve layer one scaling
              through methods like increasing block size, sharding, and
              introducing proof-of-stake consensus.
            </p>
            <p className="indent-4">
              However, substantial layer one upgrades require coordination among
              node operators and can take years to implement. Some blockchains
              intend to use L2 protocols as either a temporary or long-term
              solution. Bitcoin’s Lightning Network (LN) is a second-layer
              scaling solution designed to facilitate faster, low-cost
              transactions on the Bitcoin blockchain (L1). It operates on top of
              Bitcoin’s base layer, allowing for instant payments by
              circumventing the need for block confirmations.
            </p>
          </div>
        </div>
        <div className="mt-5 space-y-5">
          <p className="indent-4">
            Transactions on the Lightning Network occur off-chain in payment
            channels between users. Only channel open and close transactions are
            recorded on the Bitcoin blockchain. Participants can transact
            multiple times within these channels, reducing congestion and fees
            on L1.
          </p>
          <p className="indent-4">
            Critics target LN for its prevalent use of custodial wallets, as
            these demand users place trust in third parties to handle their
            money. Moreover, the off-chain method poses a risk: if nodes lack
            proper backup, it could trigger an irrevocable loss of funds.
            Loopring uses zero-knowledge rollups (ZK-rollups) to batch hundreds
            of transactions off-chain and generate a cryptographic proof
            verifying their validity. This proof is submitted to layer one
            (Ethereum), avoiding the need to process each transaction on-chain.
            Polygon ZKEVM also uses ZK-rollup technology to offer high
            throughput Ethereum transactions with lower fees. On the risk side,
            some believe that relying heavily on ZK-rollups can introduce
            centralization risks as validators and sequencers become key to the
            system
          </p>
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

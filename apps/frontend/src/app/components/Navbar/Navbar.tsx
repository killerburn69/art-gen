import React from "react";
import Layout from "../Layouts/Layout";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import { sliceWalletAddress } from "@/lib/utils";

const linkNavbar = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Gen Art",
    link: "/gen",
  },
  {
    title: "Marketplace",
    link: "/marketplace",
  },
  {
    title: "About",
    link: "/about",
  },
];
const Navbar = () => {
  const { openConnectModal } = useConnectModal();
  const { address } = useAccount();
  const {disconnect} = useDisconnect()
  return (
    <div className="h-[80px] leading-[80px] px-3 fixed w-full top-0 left-0 z-[999999] bg-white">
      <Layout>
        <div className="flex items-center justify-between">
          <div>
            <Image
              src={"/images/logo-crop.png"}
              alt="logo"
              width={150}
              height={50}
            />
          </div>
          <div className="flex items-center gap-[50px]">
            <ul className="flex items-center gap-[50px]">
              {linkNavbar.map((item, index) => (
                <li>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
            {!address ? (
              <Button
                onClick={openConnectModal}
                className="bg-[#F6BE2B] cursor-pointer hover:bg-[#ffe194] text-black text-base py-[20px]"
              >
                Connect Wallet
              </Button>
            ) : (
              <Button
                onClick={()=>disconnect()}
                className="bg-[#F6BE2B] cursor-pointer hover:bg-[#ffe194] text-black text-base py-[20px]"
              >
                {sliceWalletAddress(address,7,6)}
              </Button>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Navbar;

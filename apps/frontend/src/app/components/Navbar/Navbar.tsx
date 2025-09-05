import React, { useEffect, useRef, useState } from "react";
import Layout from "../Layouts/Layout";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import { sliceWalletAddress } from "@/lib/utils";
import { CircleX, Menu } from "lucide-react";
import gsap from "gsap";

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
  const { disconnect } = useDisconnect();
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sidebarRef.current && overlayRef.current) {
      if (open) {
        gsap.to(sidebarRef.current, {
          x: 0,
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.to(overlayRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power3.out",
        });
      } else {
        gsap.to(sidebarRef.current, {
          x: "100%",
          duration: 0.3,
          ease: "power3.in",
        });
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
        });
      }
    }
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="h-[80px] leading-[80px] px-3 fixed w-full top-0 left-0 z-[999999] bg-white flex items-center">
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
          <div className=" items-center gap-[50px] hidden md:flex">
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
                onClick={() => disconnect()}
                className="bg-[#F6BE2B] cursor-pointer hover:bg-[#ffe194] text-black text-base py-[20px]"
              >
                {sliceWalletAddress(address, 7, 6)}
              </Button>
            )}
          </div>
          <div className="flex md:hidden items-center">
            <Button
              className="size-[50px] bg-[#F6BE2B] hover:bg-[#F6BE2B] cursor-pointer!"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-[35px]" />
            </Button>
          </div>
        </div>
        {open && (
          <>
            {/* Overlay */}
            <div
              ref={overlayRef}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 z-40"
              style={{ opacity: 0 }}
            ></div>

            {/* Sidebar */}
            <div
              ref={sidebarRef}
              className="fixed top-0 right-0 h-full w-[250px] p-2.5 bg-amber-100 shadow flex flex-col md:hidden z-50"
              style={{ transform: "translateX(100%)" }} // start offscreen
            >
              <div className="flex justify-end" onClick={() => setOpen(false)}>
                <CircleX className="size-[35px] cursor-pointer" />
              </div>
              <ul className="flex flex-col items-center">
                {linkNavbar.map((item, index) => (
                  <li key={index}>
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
                  onClick={() => disconnect()}
                  className="bg-[#F6BE2B] cursor-pointer hover:bg-[#ffe194] text-black text-base py-[20px]"
                >
                  {sliceWalletAddress(address, 7, 6)}
                </Button>
              )}
            </div>
          </>
        )}
      </Layout>
    </div>
  );
};

export default Navbar;

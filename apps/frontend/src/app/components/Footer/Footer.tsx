import React from "react";
import Layout from "../Layouts/Layout";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-[40px]">
      <Layout>
        <div>
          <div className="grid grid-cols-4 justify-items-center">
            <div className="flex flex-col gap-3">
              <div>
                <Image
                  src={"/images/logo-crop.png"}
                  alt="logo"
                  width={150}
                  height={50}
                />
              </div>
              <p className="text-[#343434]">Get the latest ArtGen.io updates</p>
              <div className="h-[60px] flex items-center border w-fit rounded-lg">
                <Input
                  className="h-full w-[300px] border-none shadow-none focus-visible:ring-transparent"
                  placeholder="Enter Your Email"
                />
                <Button className="size-[60px] bg-[#FFCA42] hover:bg-[#FFCA42]">
                  <ArrowRight className="size-[30px]" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-semibold text-xl">Marketplace</h6>
              <ul className="flex flex-col gap-1.5">
                <li>All NFT’s</li>
                <li>Virtual World</li>
                <li>Collectibles</li>
                <li>Domain Names</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-semibold text-xl">Community</h6>
              <ul className="flex flex-col gap-1.5">
                <li>Become a Partners</li>
                <li>FAQ</li>
                <li>Support</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h6  className="font-semibold text-xl">Follow Us</h6>
              <ul className="flex items-center gap-5">
                <li>
                  <Image
                    src={"/images/facebook.svg"}
                    alt="facebook"
                    width={15}
                    height={15}
                  />
                </li>
                <li>
                  <Image
                    src={"/images/insta.svg"}
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </li>
                <li>
                  <Image src={"/images/X.svg"} alt="X" width={20} height={20} />
                </li>
                <li>
                  <Image
                    src={"/images/weibo.svg"}
                    alt="weibo"
                    width={20}
                    height={20}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;

import React from "react";
import Layout from "../Layouts/Layout";
import { Button } from "@/components/ui/button";
import CardSwap, { Card } from "@/reactbits/CardSwap/CardSwap";
import Image from "next/image";
const ShowTheBest = () => {
  return (
    <div className="relative pt-[40px] pb-[100px]">
      <Layout>
        <div className="grid grid-cols-2 items-center">
          <div className="flex flex-col items-center gap-2.5 max-w-xl mx-auto">
            <h2 className="text-[48px] font-semibold">
              The Best And Coolest Art
            </h2>
            <p className="text-lg text-[#808080] text-center">
              animation, video, art, music, and the like are all here, at
              affordable prices and the best community for the best work, lets
              bid now
            </p>
            <Button className="bg-transparent hover:bg-[#F6BE2B] hover:text-white cursor-pointer text-black border-[1px] py-[20px]">
              Explore
            </Button>
          </div>
          <div className="relative h-[500px]">
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card className="bg-white overflow-hidden">
                <div className="w-full h-full">
                  <Image
                    src={"/images/nft1.jpg"}
                    alt="nft"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
              <Card className="bg-white overflow-hidden">
                <div className="w-full h-full">
                  <Image
                    src={"/images/nft2.jpg"}
                    alt="nft"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
              <Card className="bg-white overflow-hidden">
                <div className="w-full h-full">
                  <Image
                    src={"/images/nft3.jpg"}
                    alt="nft"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>
      </Layout>
      <div className="absolute w-[425px] h-[425px] left-[-246px] top-[100px] bg-[#DFFFB9] blur-[160px]">

      </div>
      <div className="absolute w-[425px] h-[425px] right-[-246px] top-[442px] bg-[#DFFFB9] blur-[160px]">

      </div>
    </div>
  );
};

export default ShowTheBest;

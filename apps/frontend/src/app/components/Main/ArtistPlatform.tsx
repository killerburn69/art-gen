import React from "react";
import Layout from "../Layouts/Layout";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ArtistPlatform = () => {
  return (
    <div className="relative py-[80px] z-[10]">
      <Layout>
        <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10 md:gap-1.5 items-center">
          <div className="max-w-xl mx-auto flex flex-col gap-2.5">
            <div className="bg-[#F8FBFD] hover:bg-[#F6BE2B] transition-all duration-150 rounded-2xl shadow px-5 py-3 flex items-center gap-2.5">
              <div className="size-[55px] md:size-[70px] rounded-full overflow-hidden">
                <Image
                  src={"/images/imgHero.jpg"}
                  alt="image"
                  width={500}
                  height={500}
                  className="w-full h-full"
                />
              </div>
              <div className="flex gap-1 flex-col">
                <h6 className="text-base md:text-xl font-semibold">Willam Maher</h6>
                <p className="text-sm text-[#808080]">Rank #1</p>
              </div>
            </div>
            <div className="bg-[#F8FBFD] hover:bg-[#F6BE2B] transition-all duration-150 rounded-2xl shadow px-5 py-3 flex items-center gap-2.5">
              <div className="size-[55px] md:size-[70px] rounded-full overflow-hidden">
                <Image
                  src={"/images/imgHero.jpg"}
                  alt="image"
                  width={500}
                  height={500}
                  className="w-full h-full"
                />
              </div>
              <div className="flex gap-1 flex-col">
                <h6 className="text-base md:text-xl font-semibold">Willam Maher</h6>
                <p className="text-sm text-[#808080]">Rank #1</p>
              </div>
            </div>
            <div className="bg-[#F8FBFD] hover:bg-[#F6BE2B] transition-all duration-150 rounded-2xl shadow px-5 py-3 flex items-center gap-2.5">
              <div className="size-[55px] md:size-[70px] rounded-full overflow-hidden">
                <Image
                  src={"/images/imgHero.jpg"}
                  alt="image"
                  width={500}
                  height={500}
                  className="w-full h-full"
                />
              </div>
              <div className="flex gap-1 flex-col">
                <h6 className="text-base md:text-xl font-semibold">Willam Maher</h6>
                <p className="text-sm text-[#808080]">Rank #1</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2.5 max-w-xl mx-auto">
            <h2 className="text-[25px] md:text-[40px] lg:text-[48px] font-semibold">
              +2000 Artist In Platform
            </h2>
            <p className="text-sm md:text-lg text-[#808080] text-center">
              I am very happy to be this collector platform, where their work is
              very interesting and at the right price, with a fair and very fun
            </p>
            <Button className="bg-transparent hover:bg-[#F6BE2B] hover:text-white cursor-pointer text-black border-[1px] py-[20px]">
              All Rating
            </Button>
          </div>
        </div>
      </Layout>
      <div className="absolute w-[150px] h-[150px]  md:w-[425px] md:h-[425px] left-[-20px] md:left-[-246px] top-[500px] bg-[#DFFFB9] blur-[160px] z-[-1]"></div>
      <div className="absolute w-[150px] h-[150px]  md:w-[425px] md:h-[425px] right-[-20px]  md:right-[-246px] top-[700px] bg-[#DFFFB9] blur-[160px] z-[-1]"></div>
    </div>
  );
};

export default ArtistPlatform;

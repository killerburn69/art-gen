import React from "react";
import Layout from "../Layouts/Layout";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center relative">
      <Layout>
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-[15px]">
            <h5 className="text-[#F6BE2B] font-semibold text-[20px]">Ethereum Currency</h5>
            <h1 className="text-6xl font-semibold w-[455px] leading-[80px]">
              Collect Rare Digital <span className="-skew-x-12 bg-[#FFCA42] inline-block text-white">Artworks</span>
            </h1>
            <p className="text-[#2D200B] mt-[10px]">+100,000 of the best works that will spoil your eyes</p>
            <div className="flex items-center gap-[10px]">
              <Button className="bg-[#F6BE2B] hover:bg-[#ffe194] py-[20px] text-black cursor-pointer">Discover</Button>
              <Button className="bg-transparent hover:bg-transparent py-[20px] text-black border cursor-pointer">Create</Button>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-[20px]">
              <div className="w-[160px] h-[600px] rounded-2xl overflow-hidden shadow-[12px_12px_36px_#FFE9D9]">
                <Image
                  src={"/images/imgHero.jpg"}
                  alt="icon hero"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[140px] h-[600px] rounded-2xl overflow-hidden -translate-y-[120px] shadow-[12px_12px_36px_#FFE9D9]">
                <Image
                  src={"/images/imgHero.jpg"}
                  alt="icon hero"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[140px] h-[600px] rounded-2xl overflow-hidden -translate-y-[60px] shadow-[12px_12px_36px_#FFE9D9]">
                <Image
                  src={"/images/imgHero.jpg"}
                  alt="icon hero"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Image src={"/images/line.svg"} alt="line" width={400} height={100} className="absolute top-0 left-0"/>
      <Image src={"/images/line.svg"} alt="line" width={400} height={100} className="absolute bottom-0 right-0 rotate-180"/>

      <Image src={"/images/star.svg"} alt="star" width={30} height={30} className="absolute top-[40px] left-[200px]"/>
      <Image src={"/images/star.svg"} alt="star" width={150} height={150} className="absolute top-[100px] left-[600px]"/>
      <Image src={"/images/star.svg"} alt="star" width={100} height={100} className="absolute top-[40px] right-[200px]"/>
      <Image src={"/images/star.svg"} alt="star" width={50} height={50} className="absolute bottom-[100px] right-[300px]"/>
      <Image src={"/images/star.svg"} alt="star" width={100} height={100} className="absolute bottom-[100px] left-[800px]"/>

      <Image src={"/images/dotPurple.svg"} alt="dot" width={50}  height={50} className="absolute top-[40px] right-1/2"/>
      <Image src={"/images/dotPurple.svg"} alt="dot" width={50}  height={50} className="absolute bottom-[300px] right-[55%]"/>
      <div className="absolute w-[425px] h-[425px] left-[-246px] top-[442px] bg-[#DFFFB9] blur-[160px]">

      </div>
      <div className="absolute w-[425px] h-[425px] right-[-246px] top-[442px] bg-[#DFFFB9] blur-[160px]">

      </div>
    </div>
  );
};

export default Hero;

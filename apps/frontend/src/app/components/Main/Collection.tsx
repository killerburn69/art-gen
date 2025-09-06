import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Collection = () => {
  return (
    <div className="py-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[555px] w-full">
        <div className="bg-[#2D200B] flex items-center justify-center relative  z-[10] p-3.5 md:p-0">
          <div className="flex flex-col gap-2.5 md:gap-5">
            <h4 className="text-[25px] md:text-[40px] lg:text-[48px] font-semibold text-white leading-[50px]">
              Start your own collection today
            </h4>
            <p className="text-[#EBEEF0] text-sm md:text-lg">
              interesting jobs you can have and sell at the <br />
              price you want, make more friends and get various
              <br />
              events in it. please upload your work
            </p>
            <Button className="bg-[#F6BE2B] py-[25px]! px-[39px] text-sm md:text-[18px] font-semibold w-fit text-[#252525] hover:bg-[#F6BE2B]">
              Upload Now
            </Button>
          </div>
          <Image
            src={"/images/line.svg"}
            alt="line"
            width={400}
            height={100}
            className="absolute top-0 left-0 z-[-1]"
          />
          <Image
            src={"/images/line.svg"}
            alt="line"
            width={400}
            height={100}
            className="absolute bottom-0 right-0 rotate-180 z-[-1]"
          />

          <Image
            src={"/images/star.svg"}
            alt="star"
            width={30}
            height={30}
            className="absolute top-[40px] left-[200px] z-[-1]"
          />
          <Image
            src={"/images/star.svg"}
            alt="star"
            width={50}
            height={50}
            className="absolute bottom-[100px] right-[300px] z-[-1]"
          />
         
        </div>
        <div className="w-full h-full">
            <Image src={"/images/imgHero.jpg"} alt="image" width={500} height={500} className="w-full h-[555px] object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default Collection;

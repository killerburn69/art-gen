import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import React from "react";
import Layout from "../Layouts/Layout";
import Image from "next/image";

const Review = () => {
  return (
    <div className="py-[80px]">
      <Layout>
        <Carousel className="w-full">
          <CarouselContent className="">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="h-[400px] bg-transparent! shadow-none! border-none!">
                    <CardContent className="h-full">
                      <div className="flex justify-end w-full h-full">
                        <div className="relative w-[65%] h-full bg-[#F3F5F7] flex flex-col items-center justify-center rounded-4xl shadow-lg">
                          <div className="w-[400px]">
                            <span className="text-[#F6BE2B] text-[20px] font-medium">
                              Top #1 3D Artist
                            </span>
                            <h4 className="text-[48px] font-bold">
                              William Maher
                            </h4>
                            <p className="text-[18px] text-[#808080]">
                              the best platform I've ever visited, here I can
                              reach a wider market and with attractive
                              competitors. the many communities here make the
                              platform more lively. and more importantly.
                            </p>
                          </div>
                          <div className="size-[80px] rounded-2xl bg-[#F6BE2B] flex items-center justify-center absolute -top-6 right-40">
                            <Image
                              src={"/images/tick.svg"}
                              alt="icon"
                              width={40}
                              height={40}
                            />
                          </div>
                          <div className="size-[400px] rounded-2xl bg-[#F6BE2B] absolute -top-7 -left-[300px] overflow-hidden">
                            <Image
                              src={"/images/imgHero.jpg"}
                              alt="icon"
                              width={500}
                              height={500}
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Layout>
    </div>
  );
};

export default Review;

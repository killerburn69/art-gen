import Image from "next/image";
import Layout from "./components/Layouts/Layout";
import Hero from "./components/Main/Hero";
import Excess from "./components/Main/Excess";
import ShowTheBest from "./components/Main/ShowTheBest";
import ArtistPlatform from "./components/Main/ArtistPlatform";
import Review from "./components/Main/Review";
import Collection from "./components/Main/Collection";

export default function Home() {
  return (
    <div className="pt-[80px] overflow-hidden">
      <Hero/>
      <Excess/>
      <ShowTheBest/>
      <ArtistPlatform/>
      <Review/>
      <Collection/>
    </div>
  );
}

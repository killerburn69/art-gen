import React from "react";
import Layout from "../Layouts/Layout";
import {
  CircleStop,
  Coins,
  Image,
  ImageIcon,
  Share2,
  Upload,
  Wallet,
} from "lucide-react";
import clsx from "clsx";
const features = [
  {
    icon: <ImageIcon className="w-8 h-8" />,
    title: "Image HD Resolution",
    desc: "Enjoy sharp, crystal-clear graphics with HD image support.",
  },
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "Many Choices Of Wallets",
    desc: "Metamask, Paypal, CryptoFI, Tokocrypto, LinkAja.",
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Cheap Gas Fee",
    desc: "Save more with lower transaction fees for every trade.",
  },
  {
    icon: <Coins className="w-8 h-8" />,
    title: "Use ETH Currency",
    desc: "Transact seamlessly using Ethereum as your main currency.",
  },
];
const Excess = () => {
  return (
    <div className="relative py-[20px] md:py-[80px]  z-[10]">
      <Layout>
        <div className="flex flex-col gap-[20px]">
          <h2 className="text-center text-[25px] sm:text-[40px] md:text-[48px] font-semibold md:leading-[50px]">
            Excess <br /> Our Platforms
          </h2>
          <div className="flex gap-6 p-6 justify-center flex-wrap">
            {features.map((f, i) => (
              <div
                key={i}
                className="group w-64 rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              >
                <div
                  className={clsx(
                    "flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300",
                    "bg-gray-200 text-gray-700 group-hover:bg-yellow-400 group-hover:text-white"
                  )}
                >
                  {f.icon}
                </div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                {f.desc && (
                  <p className="mt-2 text-sm text-gray-500">{f.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Layout>
      <div className="absolute w-[150px] h-[150px]  md:w-[425px] md:h-[425px] left-[-20px] md:left-[-246px] top-[500px] bg-[#DFFFB9] blur-[160px] z-[-1]"></div>
      <div className="absolute w-[150px] h-[150px]  md:w-[425px] md:h-[425px] right-[-20px]  md:right-[-246px] top-[700px] bg-[#DFFFB9] blur-[160px] z-[-1]"></div>
    </div>
  );
};

export default Excess;

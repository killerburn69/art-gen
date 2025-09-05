'use client'
import React from "react";
import { WagmiProvider } from "wagmi";
import { configRainbowKit } from "./config/configRainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import Navbar from "./components/Navbar/Navbar";
import '@rainbow-me/rainbowkit/styles.css';
import Footer from "./components/Footer/Footer";

interface IApp {
  children: React.ReactNode;
}
const App = ({ children }: IApp) => {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={configRainbowKit}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Navbar/>
          {children}
          {/* <Footer/> */}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;

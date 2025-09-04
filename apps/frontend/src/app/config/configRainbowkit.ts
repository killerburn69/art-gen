import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {sepolia} from "wagmi/chains"
export const configRainbowKit = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: '545c76469579692736ee8ef08b67e1d3',
    chains: [sepolia],
    ssr: true, // If your dApp uses server side rendering (SSR)
  });
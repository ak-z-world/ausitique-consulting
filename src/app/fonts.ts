import { Roboto, Lora, Poppins, Bricolage_Grotesque,Inter } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const BricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ['400'],
  variable: "--font-Bricolage_Grotesque",
  display: "swap",
  style:'normal'
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ['400'],
  variable: "--font-inter",
  display: "swap",
  style:'normal'
});
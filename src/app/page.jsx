"use client";

import { NextUIProvider } from "@nextui-org/react";
import Image from "next/image";
import condoms from "/public/condoms.png";
import { Montserrat } from "next/font/google";
import { Cabin } from "next/font/google";
import { motion } from "framer-motion";
const montserrat = Montserrat({ subsets: ["latin"] });
const cabin = Cabin({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <NextUIProvider>
      <main
        className="relative flex flex-row min-h-screen w-screen md:max-w-[900px] lg:max-w-[1376px] justify-start items-start md:items-center mt-36 md:mt-0 text-[#F3F3F3]"
        // style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        {/* <div className="absolute z-0 opacity-20 blur-[5px]">
          <Image src={condoms} alt="offices" loading="lazy"></Image>
        </div> */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.15 }}
          className="z-10 flex flex-col md:flex-row max-w-full"
        >
          <h1
            className={`${montserrat.className} p-8 z-10 text-6xl lg:text-8xl 2xl:text-9xl font-black max-w-[1376px]`}
          >
            MARTINA GONZALEZ ORLANDO
          </h1>
          <div className="relative z-0 opacity-20 blur-[5px]">
            <Image src={condoms} alt="offices" loading="lazy" className="hidden md:visible"></Image>
          </div>
        </motion.div>
      </main>
    </NextUIProvider>
  );
}

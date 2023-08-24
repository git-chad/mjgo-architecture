"use client";
import { Montserrat } from "next/font/google";
import { Cabin } from "next/font/google";
import WaveText from "../components/about-txt-animation";

const montserrat = Montserrat({ subsets: ["latin"] });
const cabin = Cabin({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <main
      className="relative dark flex flex-row min-h-screen md:min-w-[900px] xl:min-w-[1376px] justify-center items-center"
    >
      <div>
        <WaveText/>
      </div>
    </main>
  );
}

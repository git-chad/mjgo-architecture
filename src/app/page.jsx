"use client";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Cabin } from "next/font/google";
import building1 from "/public/building-1.png";
import { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

const montserrat = Montserrat({ subsets: ["latin"] });
const cabin = Cabin({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    const animText = new SplitType("#anim-h1");
    const timeline = gsap.timeline();
    const h1Tag = document.querySelector("h1.animated");

    timeline
      .set(".char", { opacity: 0 })
      .set(h1Tag, { opacity: 0 })
      .to(".char", {
        opacity: 1,
        y: 0,
        delay: 0.5,
        duration: 0.2,
        stagger: 0.05,
      })
      .to(h1Tag, { opacity: 1 });
  }, []);

  return (
    <main className="grid-bg h-screen w-screen flex flex-col justify-center items-center">
      <h1
        id="anim-h1"
        className={`animated ${montserrat.className} font-black text-start sm:fixed left-8 bottom-[50vh] text-6xl sm:text-[16rem] leading-none`}
      >
        portfolio.
      </h1>
      <h2
        className={`${cabin.className} sm:fixed left-8 bottom-8 text-2xl sm:text-6xl font-semibold text-center sm:text-start`}
      >
        Martina J. Gonzalez
        <br />
        Orlando
      </h2>

      <div className="header-img w-[60vw] sm:w-[50vw] fixed bottom-0 right-0">
        <Image src={building1} />
      </div>
    </main>
  );
}

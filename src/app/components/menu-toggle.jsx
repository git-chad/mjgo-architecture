"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import mgoLogo from "/public/mgo-logo.png"
import Image from "next/image";
import DarkToggle from "./dark-toggle";

const MenuToggle = () => {
  useEffect(() => {
    const menuToggle = document.querySelector("a.menu-toggle");
    const menuToggleText = menuToggle.querySelector("span");
    const bodyTag = document.querySelector("body");
    const blurBackdrop = document.querySelector("div.blur-backdrop")

    menuToggle.addEventListener("click", function () {
      bodyTag.classList.toggle("nav-toggle");
      blurBackdrop.classList.toggle("nav-toggle")

      if (bodyTag.classList.contains("nav-toggle")) {
        menuToggleText.innerHTML = "Close";

        gsap.to(".burger-top", { rotation: 45, transformOrigin: "50% 50%", y: 8})
        gsap.to(".burger-mid", {width: 0, duration: 0.1})
        gsap.to(".burger-bottom", {rotation: -45, transformOrigin: "50% 50%", y: -8})

      } else {
        menuToggleText.innerHTML = "Menu";

        gsap.to(".burger-top", {rotation: 0, y: 0})
        gsap.to(".burger-mid", {width: 28})
        gsap.to(".burger-bottom", {rotation: 0, y: 0})
      }
    });
  }, []);

  return (
    <div>
    <Image height={32} src={mgoLogo} className="fixed top-8 left-8"/>
      <a
        href="#"
        className="menu-toggle fixed top-8 right-8 flex items-center z-30"
      >
        <span className="text-2xl mr-1 font-bold">Menu</span>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect className="burger-top" x="6" y="10" width="28" height="4" fill="black" />
          <rect className="burger-mid" x="6" y="18" width="28" height="4" fill="black" />
          <rect className="burger-bottom" x="6" y="26" width="28" height="4" fill="black" />
        </svg>
      </a>

      <nav className="fixed fake-back top-0 right-0 w-full max-w-[600px] h-full"></nav>
      <nav className="fixed fake-mid top-0 right-0 w-full max-w-[600px] h-full"></nav>
      <div className="blur-backdrop fixed blur top-0 right-0 w-screen h-full pointer-events-none"></div>

      <nav className="fixed flex flex-col justify-between top-0 right-0 w-full max-w-[600px] h-full p-12">
        <div className="internal-links flex flex-col flex-1 justify-center text-5xl font-black space-y-6">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
        </div>

        <div className="external-links flex flex-col justify-center text-2xl space-y-3 mb-16">
          <a href="https://www.linkedin.com/in/martina-julieta-gonzalez-orlando-1214a518b/" target="_blank">Linkedin</a>
          <a href="mailto:mjgo.orlando@gmail.com" target="_blank">Email</a>
        </div>
        <DarkToggle/>
      </nav>
    </div>
  );
};

export default MenuToggle;

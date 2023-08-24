"use client";
import React, { useState } from "react";
import Image from "next/image";
import mgoLogo from "/public/mgo-logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { Cabin } from "next/font/google";
import { motion } from "framer-motion";

const cabin = Cabin({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      position="static"
      className="w-screen md:max-w-[900px] lg:max-w-[1376px] bg-transparent"
    >
      <Link href="/" className="">
        <Image
          src={mgoLogo}
          alt="martina gonzalez orlando initials"
          width={42}
        ></Image>
      </Link>

      <NavbarContent
        className="sm:flex gap-10 hidden md:visible"
        justify="center"
      >
        <NavbarItem
          className={`${cabin.className} hover:text-green-400 transition-colors text-xl`}
        >
          <Link href="/">Home</Link>
        </NavbarItem>

        <NavbarItem
          className={`${cabin.className} hover:text-green-400 transition-colors text-xl`}
        >
          <Link href="/projects">Projects</Link>
        </NavbarItem>

        <NavbarItem
          className={`${cabin.className} hover:text-green-400 transition-colors text-xl`}
        >
          <Link href="/about">About me</Link>
        </NavbarItem>
      </NavbarContent>

      {/* Hamburger menu for small devices */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Responsive menu */}
      <NavbarMenu
        className={`absolute right-0 bg-[#1e1e1c] opacity-100 overflow-hidden ${
          cabin.className
        } ${isMenuOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col justify-center text-end h-full">
          <motion.div
          initial={{opacity: 0, x: 200}}
          animate={{opacity: 1,  x: 0}}
          transition={{duration: 0.5}}
          className=""
          >
            <NavbarMenuItem>
              <a
                href="/"
                className="text-4xl hover:text-green-400 transition-colors focus:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <a
                href="/projects"
                className="text-4xl hover:text-green-400 transition-colors focus:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <a
                href="/about"
                className="text-4xl hover:text-green-400 transition-colors focus:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About me
              </a>
            </NavbarMenuItem>
          </motion.div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default navbar;

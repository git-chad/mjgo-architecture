"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";

const DarkToggle = () => {
  useEffect(() => {
    const darkModeToggle = document.querySelector("a.darkmode-btn");
    const darkModeToggleText = darkModeToggle.querySelector("span");
    const bodyTag = document.querySelector("body");

    const applyDarkMode = () => {
      bodyTag.classList.add("dark-mode");
      darkModeToggleText.innerHTML = "Light mode";
      gsap.to("g.toggle-circle", { x: 43 });
      saveThemeToLocalStorage("dark");
    };

    const applyLightMode = () => {
      bodyTag.classList.remove("dark-mode");
      darkModeToggleText.innerHTML = "Dark mode";
      gsap.to("g.toggle-circle", { x: 19 });
      saveThemeToLocalStorage("light");
    };

    const saveThemeToLocalStorage = (theme) => {
      localStorage.setItem("theme", theme);
    };

    const toggleTheme = () => {
      if (!bodyTag.classList.contains("dark-mode")) {
        applyDarkMode();
      } else {
        applyLightMode();
      }
    };

    const initializeTheme = () => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        applyDarkMode();
      } else if (savedTheme === "light") {
        applyLightMode();
      } else {
        const mqDark = window.matchMedia("(prefers-color-scheme: dark)");
        if (mqDark.matches) {
          applyDarkMode();
        } else {
          applyLightMode();
        }
      }
    };

    // Initialize theme on component mount
    initializeTheme();

    darkModeToggle.addEventListener("click", toggleTheme);

    return () => {
      darkModeToggle.removeEventListener("click", toggleTheme);
    };
  }, []);

  return (
    <div>
      <a href="#" className="darkmode-btn flex items-center">
        <svg
          width="64"
          height="40"
          viewBox="0 0 64 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8"
            y="9"
            width="46"
            height="22"
            rx="11"
            stroke="black"
            stroke-width="2"
          />
          <circle cx="19" cy="20" r="6" fill="black" fill-opacity="0.5" />
          <g transform="translate(19, 20)" className="toggle-circle">
            <circle cx="0" cy="0" r="6" fill="black" />
          </g>
          <circle cx="43" cy="20" r="6" fill="black" fill-opacity="0.5" />
        </svg>

        <span>Dark mode</span>
      </a>

      <div className="wiper-screen"></div>
    </div>
  );
};

export default DarkToggle;

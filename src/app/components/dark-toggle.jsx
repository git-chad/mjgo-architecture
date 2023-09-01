"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";

const DarkToggle = () => {
  useEffect(() => {
    const mqDark = window.matchMedia("(prefers-color-scheme: dark)");
    const darkModeToggle = document.querySelector("a.darkmode-btn");
    const darkModeToggleText = darkModeToggle.querySelector("span");
    const bodyTag = document.querySelector("body");

    // adds/removes dark-mode classname to the body as well as listens to system preference
    const updateSpan = () => {
      if (mqDark.matches) {
        bodyTag.classList.add("dark-mode");
        darkModeToggleText.innerHTML = "Light mode";

        gsap.to("g.toggle-circle", { x: 43 });
      } else {
        bodyTag.classList.remove("dark-mode");
        darkModeToggleText.innerHTML = "Dark mode";

        gsap.to("g.toggle-circle", { x: 19 });
      }
    };

    updateSpan();

    // changes the span mode indicator if its clicked
    darkModeToggle.addEventListener("click", function () {
      if (!bodyTag.classList.contains("dark-mode")) {
        darkModeToggleText.innerHTML = "Light mode";

        gsap.to("g.toggle-circle", { x: 43 });
      } else {
        darkModeToggleText.innerHTML = "Dark mode";

        gsap.to("g.toggle-circle", { x: 19 });
      }

      const timeline = gsap.timeline();

      timeline
        .set("div.wiper-screen", { height: "0%", top: "0%" })
        .to("div.wiper-screen", { height: "100%" })
        .add(function () {
          bodyTag.classList.toggle("dark-mode");
        })
        .to("div.wiper-screen", { height: "0%", top: "100%" });
    });

    mqDark.addEventListener("change", updateSpan);

    return () => {
      mqDark.removeEventListener("change", updateSpan);
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

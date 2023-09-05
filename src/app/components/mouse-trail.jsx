"use client";
import React, { useEffect } from "react";

const MouseTrail = () => {
  useEffect(() => {
    const svg = document.querySelector("svg.trail");
    const path = svg.querySelector("path");
    let drawPoints = [];
    let segments = 15;
    let mouse = {
      x: 0,
      y: 0,
    };

    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      mouse.x = x;
      mouse.y = y;

      if (drawPoints.length === 0) {
        for (let i = 0; i < segments; i++) {
          drawPoints.push({
            x: x,
            y: y,
          });
        }
      }
    };

    const anim = () => {
      let px = mouse.x;
      let py = mouse.y;

      drawPoints.forEach((p, index) => {
        p.x = px;
        p.y = py;

        let n = drawPoints[index + 1];

        if (n) {
          px = px - (p.x - n.x) * 0.5;
          py = py - (p.y - n.y) * 0.5;
        }
      });

      path.setAttribute(
        "d",
        `M ${drawPoints.map((p) => `${p.x} ${p.y}`).join(` L `)}`
      );

      requestAnimationFrame(anim);
    };

    const resize = () => {
      const ww = window.innerWidth;
      const wh = window.innerHeight;

      svg.style.width = ww + "px";
      svg.style.height = wh + "px";

      svg.setAttribute("viewBox", `0 0 ${ww} ${wh}`);
    };

    document.addEventListener("mousemove", move);
    window.addEventListener("resize", resize);

    anim();
    resize();
  }, []);

  return (
    <div>
      <svg className="trail" viewBox="0 0 1 1">
        <path d="" />
      </svg>
    </div>
  );
};

export default MouseTrail;

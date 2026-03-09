"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Heart {
  id: number;
  x: number;
  y: number;
  drift: number;
  size: number;
}

export default function EasterEggs() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [mounted, setMounted] = useState(false);

  // Console easter egg
  useEffect(() => {
    console.log(
      "%c\n" +
      "██████╗ ██╗   ██╗██████╗  ██████╗███████╗██╗██╗  ██╗\n" +
      "██╔══██╗██║   ██║██╔══██╗██╔════╝██╔════╝██║██║ ██╔╝\n" +
      "██████╔╝██║   ██║██████╔╝██║     ███████╗██║█████╔╝ \n" +
      "██╔══██╗██║   ██║██╔══██╗██║     ╚════██║██║██╔═██╗ \n" +
      "██████╔╝╚██████╔╝██║  ██║╚██████╗███████║██║██║  ██╗\n" +
      "╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚══════╝╚═╝╚═╝  ╚═╝\n",
      "color: #b87333; font-family: monospace; line-height: 1.2;"
    );
    console.log(
      "%c👋 Hey, you opened DevTools.\nYou're exactly the kind of person Jesse wants to meet.\n\n📧 jesse@burcsik.ca",
      "color: #1a1a1a; font-size: 13px; font-family: sans-serif; line-height: 1.8;"
    );
  }, []);

  // Triple-click hearts
  useEffect(() => {
    setMounted(true);
    let clicks = 0;
    let lastX = 0;
    let lastY = 0;
    let timer: ReturnType<typeof setTimeout>;

    const handleClick = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      clicks++;
      clearTimeout(timer);
      timer = setTimeout(() => { clicks = 0; }, 600);

      if (clicks >= 3) {
        clicks = 0;
        const newHearts: Heart[] = Array.from({ length: 7 }, (_, i) => ({
          id: Date.now() + i,
          x: lastX + (Math.random() - 0.5) * 80,
          y: lastY,
          drift: (Math.random() - 0.5) * 40,
          size: 14 + Math.random() * 10,
        }));
        setHearts((prev) => [...prev, ...newHearts]);
        setTimeout(() => {
          setHearts((prev) =>
            prev.filter((h) => !newHearts.find((nh) => nh.id === h.id))
          );
        }, 1400);
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      clearTimeout(timer);
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart-particle"
          style={{
            left: heart.x,
            top: heart.y,
            fontSize: heart.size,
            "--drift": `${heart.drift}px`,
          } as React.CSSProperties}
        >
          ♥
        </span>
      ))}
    </>,
    document.body
  );
}

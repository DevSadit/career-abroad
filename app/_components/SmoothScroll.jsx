"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    window.lenis = lenis;

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    lenis.on("scroll", ScrollTrigger.update);

    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });

    resizeObserver.observe(document.body);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      resizeObserver.disconnect();
      window.lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}

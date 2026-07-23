import { useEffect } from "react";
import Lenis from "lenis";

let lenis;

export function useLenis() {
  useEffect(() => {
     lenis = new Lenis({
      duration: 1.8,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
   
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}

export function scrollTo(target) {
  lenis?.scrollTo(target, {
    duration: 1.8,
    offset: -30,
  });
}
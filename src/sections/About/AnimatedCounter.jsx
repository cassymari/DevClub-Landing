import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1600,
}) {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, {
    once: true,
    amount: 0.7,
  });

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let animationFrame;
    let startTime;

    function animate(currentTime) {
      if (!startTime) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = end * easedProgress;

      setValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    }

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <strong ref={counterRef}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </strong>
  );
}
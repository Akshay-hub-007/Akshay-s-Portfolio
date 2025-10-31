'use client'
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 400, damping: 40 });
  const springY = useSpring(y, { stiffness: 400, damping: 40 });

  useEffect(() => {
    const moveCursor = (e) => {
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-[#64ffda] pointer-events-none mix-blend-difference z-50"
      style={{ translateX: springX, translateY: springY }}
    />
  );
}

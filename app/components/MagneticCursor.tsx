"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticCursor() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const springX = useSpring(mouseX, { stiffness: 380, damping: 28, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 380, damping: 28, mass: 0.4 });

  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovered(!!t.closest("button, a, [data-cursor-hover], input, textarea, select"));
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  const ringSize = clicking ? 16 : hovered ? 54 : 30;
  const ringOffset = ringSize / 2;

  return (
    <>
      {/* Outer ring — spring-eased */}
      <motion.div
        className="fixed pointer-events-none z-[9995]"
        style={{ left: springX, top: springY, marginLeft: -ringOffset, marginTop: -ringOffset }}
      >
        <motion.div
          className="rounded-full border"
          animate={{
            width: ringSize,
            height: ringSize,
            borderColor: hovered ? "#E53935" : clicking ? "#E53935" : "rgba(255,255,255,0.4)",
            backgroundColor: hovered ? "rgba(229,57,53,0.09)" : "transparent",
            boxShadow: hovered
              ? "0 0 24px rgba(229,57,53,0.35), inset 0 0 12px rgba(229,57,53,0.1)"
              : "none",
          }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          style={{ width: 30, height: 30 }}
        />
      </motion.div>

      {/* Inner dot — direct follow */}
      <motion.div
        className="fixed pointer-events-none z-[9996] rounded-full"
        style={{ left: mouseX, top: mouseY, marginLeft: -4, marginTop: -4 }}
        animate={{
          width: hovered ? 0 : clicking ? 10 : 8,
          height: hovered ? 0 : clicking ? 10 : 8,
          opacity: hovered ? 0 : 1,
          backgroundColor: hovered ? "#E53935" : "#ffffff",
        }}
        transition={{ duration: 0.1 }}
        initial={{ width: 8, height: 8, backgroundColor: "#ffffff", opacity: 1 }}
      />
    </>
  );
}

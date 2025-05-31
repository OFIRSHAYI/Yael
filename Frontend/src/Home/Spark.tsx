// components/Spark.tsx
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

interface SparkProps {
  x: number;
  y: number;
  size: number;
  color: string;
  angle: number;
  distance: number;
  duration: number;
}

export const Spark: React.FC<SparkProps> = ({ x, y, size, color, angle, distance, duration }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // Trigger animation on next tick
    requestAnimationFrame(() => setActive(true));
  }, []);

  const rad = (angle * Math.PI) / 180;
  const dx = Math.cos(rad) * distance;
  const dy = Math.sin(rad) * distance;

  return (
    <Box
      sx={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: "50%",
        bgcolor: color,
        transform: active ? `translate(${dx}px, ${dy}px)` : "translate(0, 0)",
        opacity: active ? 0 : 1,
        transition: `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`,
        zIndex: 1500,
        pointerEvents: "none",
      }}
    />
  );
};

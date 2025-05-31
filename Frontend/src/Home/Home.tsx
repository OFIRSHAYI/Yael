// pages/HomePage.tsx
import { Box, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Spark } from "./Spark";

interface SparkData {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  angle: number;
  distance: number;
  duration: number;
}

export const Home: FC = () => {
  const [sparks, setSparks] = useState<SparkData[]>([]);

  useEffect(() => {
    const colors = ["gold", "deepskyblue", "hotpink", "lime", "orange", "violet"];
    const newSparks: SparkData[] = [];

    for (let i = 0; i < 500; i++) {
      newSparks.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * 360,
        distance: Math.random() * 100 + 50,
        duration: 1000 + Math.random() * 1000,
      });
    }

    setSparks(newSparks);

    const timeout = setTimeout(() => setSparks([]), 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box>
      {sparks.map((spark) => (
        <Spark key={spark.id} {...spark} />
      ))}

      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}>
        <Typography variant="h1" fontWeight="bold" paddingTop={20} color="white">
          השנה הכי טובה בחיים שלי
        </Typography>
        <Typography variant="h4" fontWeight="bold" paddingTop={5} color="white">
          תודה שאת שלי ילדה
        </Typography>
      </Box>
    </Box>
  );
};

import { Gallery } from "../Gallery/Gallery";
import { Home } from "../Home/";
import { Letters } from "../Letters";
import { MemoryGame } from "../MemoryGame";
import { Plans } from "../Plans";
import { TimelinePage } from "../Timeline";
export const routes = [
    {
        name: "✨",
        path: "/",
        element: <Home />,
        isShown: true,
    },
    {
        name: "📅",
        path: "/Timeline",
        element: <TimelinePage />,
        isShown: true,
    },
    {
        name: "🖼️",
        path: "/Gallery",
        element: <Gallery />,
        isShown: true,
    },
    {
        name: "💌",
        path: "/Letters",
        element: <Letters />,
        isShown: true,
    },
    {
        name: "📍",
        path: "/Plans",
        element: <Plans />,
        isShown: true,
    },
    {
        name: "🃏",
        path: "/MemoryGame",
        element: <MemoryGame />,
        isShown: true,
    },
    {
        name: "📖",
        path: "/Story",
        element: <></>,
        isShown: true,
    }
];

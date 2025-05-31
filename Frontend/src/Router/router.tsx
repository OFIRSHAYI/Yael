import { Gallery } from "../Gallery/Gallery";
import { Home } from "../Home/";
import { Letters } from "../Letters";
import { Plans } from "../Plans";
import { TimelinePage } from "../Timeline";
export const routes = [
    {
        name: "זיקוקים",
        path: "/",
        element: <Home />,
        isShown: true,
    },
    {
        name: "השנה שלנו ביחד",
        path: "/Timeline",
        element: <TimelinePage />,
        isShown: true,
    },
    {
        name: "גלריה",
        path: "/Gallery",
        element: <Gallery />,
        isShown: true,
    },
    {
        name: "מכתבים",
        path: "/Letters",
        element: <Letters />,
        isShown: true,
    },
    {
        name: "תוכניות לעתיד",
        path: "/Plans",
        element: <Plans />,
        isShown: true,
    },
];

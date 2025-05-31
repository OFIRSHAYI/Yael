import { Box } from "@mui/material";
import { FC } from "react";
import { Album } from "./Album";

export const Gallery: FC = () => {
    return (
        <Box sx={{
            direction: "ltr",
            width: "80vw",
            display: "flex",
            gap: "40px",
            justifyContent: "center",
            flexWrap: "wrap",
        }}>
            <Album albumName="התמונה הראשונה" />
            <Album albumName="ארגנטינה" />
            <Album albumName="יום הולדת לי" />
            <Album albumName="ים המלח" />
            <Album albumName="פאר טסי" />
            <Album albumName="יום הולדת לך" />
            <Album albumName="הפעם הראשונה שלי במלאכי (נראה לי)" />
            <Album albumName="רודוסססס" />
            <Album albumName="גיוסס" />
            <Album albumName="🩸" />
            <Album albumName="חצי שנה" />
            <Album albumName="סתם מול הים" />
            <Album albumName="נהריה" />
            <Album albumName="סתם אהבתי" />
        </Box>
    )
}
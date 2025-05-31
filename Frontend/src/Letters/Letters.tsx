import { Box } from "@mui/material";
import { FC } from "react";
import { Letter } from "./Letter";

export const Letters: FC = () => {
    return (
        <>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                gap: "50px",
                flexWrap: "wrap",
            }}>
                <Letter letterName="חצי שנה.txt" />
                <Letter letterName="יום הולדת.txt" />
                <Letter letterName="31.10.txt" />
                <Letter letterName="פעילות בצבא.txt" />
            </Box>
            <Letter letterName="חצי שנה.txt" isGold={true}/>    
        </>
    )
}
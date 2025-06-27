import { FC, useState } from "react";
import memoryCardImage from '/Memory/MemoryCard.png';
import { Box } from "@mui/material";

interface cardProps {
    imgSource: string;
    makeTurn: (imgSource: string, hideCard: () => void) => void;
}

export const Card: FC<cardProps> = ({imgSource, makeTurn}) => {
    const [isRevealed, setIsRevealed] = useState<boolean>(false);
    const width: number = 120;
    const height: number = 150;

    const hideCard = () => {
        setIsRevealed(false);
    }

    return (
        <Box
        sx={{
            width: {
                xs: width / 2,
                md: width
            },
            height: {
                xs: height / 2,
                md: height
            },
            display: "flex",
            alignItems: "center",
        }}
        onClick={() => {      
            if (!isRevealed) {
                setIsRevealed(true);
                makeTurn(imgSource, hideCard);
            }
        } 
            }>
            <Box component="img" src={isRevealed ? imgSource : memoryCardImage} sx={{
                height: "100%",
                width: "100%"
            }} borderRadius="12px" />
        </Box>
    )
}
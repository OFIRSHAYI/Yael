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
            width: width,
            height: height,
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
            <Box component="img" src={isRevealed ? imgSource : memoryCardImage} height={height} width={width} borderRadius="12px" />
        </Box>
    )
}
import { Box, Modal, Typography } from "@mui/material";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { Card } from "./Card";
import { Fullscreen } from "@mui/icons-material";

interface modalProps {
    open: boolean;
    handleClose: () => void;
}
export const GameModal: FC<modalProps> = ({open, handleClose, }) => {
    const [cards, setCards] = useState<ReactNode[]>([]);
    const [turn, setTurn] = useState<boolean>(true);
    const turnRef = useRef<boolean>(true);
    const [yaelScore, setYaelScore] = useState<number>(0);
    const [shayScore, setShayScore] = useState<number>(0);
    const [couplesLeft, setCouplesLeft] = useState<number>(15);
    const [winnerString, setWinnerString] = useState<string>("");
    
    useEffect(() => {
        if (couplesLeft === 0) {
            setTimeout(() => {
                setWinnerString("יעללל!!!!!");
            }, 1000);
        }
    }, [couplesLeft]);
    
    const firstCardRef = useRef<string | null>(null);
    const hideFirstCardRef = useRef<(() => void) | null>(null);

const makeTurn = (imgSource: string, hideCard: () => void) => {
    if (firstCardRef.current === null) {
        firstCardRef.current = imgSource;
        hideFirstCardRef.current = hideCard;
    } else {
        if (firstCardRef.current === imgSource) {
            if (turnRef.current) {
                setYaelScore(prev => prev + 1);
            } else {
                setShayScore(prev => prev + 1);
            }

            setCouplesLeft(left => left - 1)
            firstCardRef.current = null;
            hideFirstCardRef.current = null;
        } else {
            setTimeout(() => {
                hideFirstCardRef.current?.();
                hideCard();

                firstCardRef.current = null;
                hideFirstCardRef.current = null;
            }, 1000);
        }

        setTurn(prev => !prev);
        turnRef.current = !turnRef.current;
    }
};

    useEffect(() => {
        const getImages = async () => {
            const res = await fetch(`/Memory/images.json`);
            
            if (res.ok) {
                const data = await res.json();
                const images = data.map((path: string) => `/Memory/${path}`);
                const array: ReactNode[] = images.map((path: string, index: number) => (
                    <Card key={index} imgSource={path} makeTurn={makeTurn}/>))
                const finalArray = array.concat(images.map((path: string, index: number) => (
                            <Card key={`${index}${index}${index}`} imgSource={path} makeTurn={makeTurn}/>)));
                setCards(shuffleArray(finalArray));
            }
        }

        const shuffleArray = (array: ReactNode[]): ReactNode[] => {
            const arr = array.slice();
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            console.log(arr);
            return arr;
        };

        
        getImages();
        
    }, [])

    return (
        <Modal
        open={open}
        onClose={handleClose}
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center"
        }}
    >
        <Box sx={{
            width: "99vw",
            height: "99vh",
            backgroundColor: "#E5CBF4",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflowY: "auto",
            outline: 'none',
            border: 'none',
            paddingTop: "50px"
        }}>
            <Fullscreen 
            onClick={handleClose}
            sx={{
                fontSize: "36px",
                position: "absolute",
                top: "2%",
                right: "2%"
            }} />
            <Box sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "50%"
            }}>
                <Box>
                    <Typography variant="h4">יעל</Typography>
                    <Typography variant="h5">{yaelScore}</Typography>
                    {(turn) && <Box sx={{width:"100%", height: "10px", backgroundColor: "#74c1fc", borderRadius:"10px"}}></Box>}
                </Box>
                <Box>
                    <Typography variant="h4">שי</Typography>
                    <Typography variant="h5">{shayScore}</Typography>
                    {(!turn) && <Box sx={{width:"100%", height: "10px", backgroundColor: "#74c1fc", borderRadius:"10px"}}></Box>}
                </Box>
            </Box>
            <Box sx={{ 
                display: "flex",
                justifyContent: "center",
                gap: {
                    xs: "10px",
                    md: "20px"
                },
                flexWrap: "wrap",
                padding: "20px"
                }}>
                {cards}
                {couplesLeft === 0 && 
                    <Modal
                    open={true}
                    onClose={() => {}}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    >
                        <Box sx={{
                            width: "50vw",
                            height: "70vh",
                            backgroundColor: "white",
                            border: "none",
                            outline: "none",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                        }}>
                            <Typography variant="h4">
                                והמנצח הואאאא.... היאאאאאא.... הםםםםםםם....
                            </Typography>
                            <Typography variant="h1">
                                {winnerString}
                            </Typography>
                        </Box>
                    </Modal>}
            </Box>
        </Box>
    </Modal>
    )
}
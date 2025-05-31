import { Box, Modal, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import './letter.css';

interface letterProps {
    letterName: string;
    isGold?: boolean;
}

export const Letter: FC<letterProps> = ({ letterName, isGold=false }) => {
    const [text, setText] = useState<string>("");
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const fetchLetterText = async () => {
            const response = await fetch(`/Letters/${letterName}`);
            if (response.ok) {
                const text = await response.text();
                setText(text);
            }
        };
        fetchLetterText();
    }, [letterName]);

    return (
        <>
            <Box
                className={isGold ? "glowing-gold" : ""}
                sx={{
                    margin: "20px",
                    borderRadius: "10px",
                    height: isGold ? "300px" : "250px",
                    width: isGold ? "250px" : "200px",
                    boxShadow: isGold
                        ? `
        0 0 10px 2px rgba(255, 105, 180, 0.8),  /* hot pink */
        0 0 20px 6px rgba(255, 182, 193, 0.6),  /* light pink */
        0 0 30px 12px rgba(255, 192, 203, 0.4), /* soft pink */
        0 0 40px 20px rgba(255, 240, 245, 0.2)`
                        : `0px 0px 20px rgba(255, 255, 255, 0.8)`,

                    position: "relative",
                    backgroundImage: `repeating-linear-gradient(
                        to bottom,
                        transparent,
                        transparent 36px,
                        rgba(0, 0, 0, 0.2) 37px
                    )`,
                    backgroundRepeat: "repeat",
                    backgroundAttachment: "local",
                    fontSize: "1.2rem",
                    lineHeight: "2.3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                onClick={handleOpen}
            >

                <Typography textAlign="center" variant="h5" fontFamily="GveretLevin">
                    {letterName.slice(0, letterName.indexOf('.txt'))}
                </Typography>
            </Box>

            <Modal open={open} onClose={handleClose} sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                top: "100px"
            }}>
                <Box
                    className={isGold ? "glowing-gold" : ""}
                    sx={{
                    width: {
                        xs: "80vw",
                        md: "50vw"
                    },
                    maxHeight: "80vh",
                    overflowY: "auto",
                    backgroundColor: "pink",
                    padding: "40px",
                    borderRadius: 2,
                    position: "relative",
                    backgroundImage: `repeating-linear-gradient(
                        to bottom,
                        transparent,
                        transparent 36px,
                        rgba(0, 0, 0, 0.2) 37px
                    )`,
                    backgroundRepeat: "repeat",
                    backgroundAttachment: "local",
                    fontSize: "1.2rem",
                    lineHeight: "2.3rem",
                    scrollbarWidth: 'none',
                    border: "none",
                    outline: "none"
                    }}
                >
                    {text.split("\n").map((line, i) => (
                    <Typography key={i} sx={{ lineHeight: "37px", fontFamily: "GveretLevin", }}>
                        {line}
                    </Typography>
                    ))}
                </Box>
            </Modal>
        </>
    );
};

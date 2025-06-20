import { Box, Typography } from "@mui/material";
import { FC, useState } from "react";
import { GameModal } from "./GameModal";

export const MemoryGame: FC = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <Box sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "200px"
        }}> 
            <Box
            onClick={() => {
                handleOpen();
            }}
            sx={{
                height: "200px",
                display: "flex",
                justifyContent: "center",
                cursor: 'pointer',
            }}>
                <Typography variant="h4">תלחצי פה מכוערת</Typography>
            </Box>
            <GameModal open={open} handleClose={handleClose} />
        </Box>
    )
}
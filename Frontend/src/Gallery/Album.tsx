import { Box, Modal, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Image } from "./Image";

interface galleryProps {
    albumName: string;
}

export const Album: FC<galleryProps> = ({albumName}) => {
    const [images, setImages] = useState<string[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const getImages = async () => {
            const res = await fetch(`/Albums/${albumName}/images.json`);
            
            if (res.ok) {
                const data = await res.json();
                setImages(data);
            }
        }
        
        getImages();
    }, [albumName]);

    return (
        <>
            <Box 
                sx={{
                    width: {
                        sx: "100px",
                        md: "150px"
                    }
                }}
                onClick={handleOpen}>
                <Box sx={{
                    borderTopRightRadius: "5px",
                    borderTopLeftRadius: "5px",
                    backgroundColor: "white",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                }}>
                    <Typography>{albumName}</Typography>
                </Box>
                <Box sx={{
                    borderBottomRightRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    height: "145px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <img src={`/Albums/${albumName}/${images[0]}`} width={130} style={{borderRadius: "5px", maxHeight: "130px"}} />
                </Box>
            </Box>
            <Modal
            open={open}
            onClose={handleClose}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                direction: "ltr"
            }}
            >
                <Box sx={{
                    backgroundColor: "white",
                    outline: 'none',
                    border: 'none',
                    borderRadius: "5px",
                    width: {
                        xs: "90vw",
                        md: "70vw"
                    },
                    maxHeight: {
                        xs: "60vh",
                        md:"80vh"
                    },
                    padding: "50px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "50px",
                    flexWrap: "wrap",
                    overflowY: "auto",
                    scrollbarWidth: "none"
                }}>
                    {
                        images.map(image => (
                            <Image path={`/Albums/${albumName}/${image}`} />
                        ))
                    }
                </Box>
            </Modal>
        </>
    );
}

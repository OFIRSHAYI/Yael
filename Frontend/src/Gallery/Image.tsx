import { Box, Modal, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import * as exifr from 'exifr';

interface imageProps {
    path: string;
}

export const Image: FC<imageProps> = ({path}) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [date, setDate] = useState<string | null>(null);

  useEffect(() => {
    const fetchExif = async () => {
      try {
        const res = await fetch(path);
        const blob = await res.blob();
        const metadata = await exifr.parse(blob, ['DateTimeOriginal']);
        if (metadata?.DateTimeOriginal) {
            const date = metadata.DateTimeOriginal;
            const formatted = `${date.getDate().toString().padStart(2, '0')}/` +
                  `${(date.getMonth() + 1).toString().padStart(2, '0')}/` +
                  `${date.getFullYear().toString().slice(-2)} ` +
                  `${date.getHours().toString().padStart(2, '0')}:` +
                  `${date.getMinutes().toString().padStart(2, '0')}:` +
                  `${date.getSeconds().toString().padStart(2, '0')}`;
            setDate(formatted);

        } else {
          setDate("");
        }
      } catch (err) {
        console.error("Failed to load EXIF data", err);
        setDate("");
      }
    };

    fetchExif();
  }, [path]);

    return (
        <>
            <Box
            onClick={handleOpen}>
                <Box
                component="img"
                src={path}
                sx={{
                    height: { xs: 100, md: 200 },
                    borderRadius: "5px",
                }}
                />
                <Typography textAlign="center" sx={{
                    fontSize: {
                        xs: "10px",
                        md: "14px"
                    }
                }}>{date}</Typography>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
                >
                <Box component="img" src={path} sx={{
                    borderRadius: "5px", 
                    border: "none", 
                    outline: "none", 
                    maxWidth: {
                        xs: "80vw",
                        md: "60vw"
                    },
                    maxHeight: "80vh"
                }}
                    />
            </Modal>
        </>
    )
}
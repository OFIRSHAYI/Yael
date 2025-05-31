import { FC, useEffect, useRef, useState } from "react";
import { IconButton } from "@mui/material";
import { VolumeUp, VolumeOff } from "@mui/icons-material";

export const BackgroundMusic: FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio.play().catch(() => {
        // ברוב הדפדפנים נדרש אינטראקציה מהמשתמש
        setIsPlaying(false);
        togglePlay();
      });
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/song.mp3" type="audio/mpeg" />
        הדפדפן שלך לא תומך בניגון אודיו.
      </audio>

      <IconButton
        onClick={togglePlay}
        sx={{ position: "fixed", top: 20, left: 20, zIndex: 999 }}
      >
        {isPlaying ? <VolumeUp /> : <VolumeOff />}
      </IconButton>
    </>
  );
};

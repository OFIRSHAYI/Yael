import { CheckCircleOutline, CircleOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { FC, useState } from "react";

interface PlanProps {
    title: string,
    isDone: boolean,
}

export const Plan: FC<PlanProps> = ({title, isDone}) => {
    const [isDoneState, setIsDone ] = useState<boolean>(isDone);
    
    const completeMission = () => {
        setIsDone(!isDoneState);
        //TODO: create server and send status
    }

    return (
        <Box sx={{
                width: {
                    xs: "80vw",
                    md: "40vw"
                },
                height: "100px",
                backgroundColor: "white",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Box sx={{
                    width: 'calc(100% - 10px)',
                    height: 'calc(100% - 10px)',
                    border: "2px solid pink",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    padding: "20px"
                }}>
                    <Typography variant="h6">{ title }</Typography>
                    {isDoneState  ?
                    <CheckCircleOutline
                    onClick={completeMission}
                    sx={{
                        marginRight: "auto", 
                        height: "40px",
                        width: "40px"
                        }} />
                    :
                    <CircleOutlined 
                    onClick={completeMission}
                    sx={{
                        marginRight: "auto", 
                        height: "40px",
                        width: "40px"
                        }}/> 
                    }
                </Box>
        </Box>
    )
}
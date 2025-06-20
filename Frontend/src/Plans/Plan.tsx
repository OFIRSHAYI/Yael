import { CheckCircleOutline, CircleOutlined, Delete } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import planService from "../api/planService";

interface PlanProps {
    id: number
    title: string,
    isDone: boolean,
    deleteFunction: (id: number) => void;
}

export const Plan: FC<PlanProps> = ({id, title, isDone, deleteFunction}) => {
    const [isDoneState, setIsDone ] = useState<boolean>(isDone);
    
    const completeMission = async () => {
        planService.changePlanStatus(id, !isDoneState);
        setIsDone(!isDoneState);
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
                    <Delete 
                    onClick={() => deleteFunction(id)}
                    sx={{
                        marginLeft: "10px"
                    }}/>
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
import { Box, Input } from "@mui/material";
import { FC, ReactNode, useState } from "react";
import { Plan } from "./Plan";
import { AddCircle } from "@mui/icons-material";

export const Plans: FC = () => {
    const [plans, setPlans] = useState<ReactNode[]>([]);
    const [title, setTitle] = useState<string>("");

    const addPlan = (title: string) => {
        setPlans(plans.concat(<Plan title={title} isDone={false} />));
        setTitle("");
    }
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: {
                xs: "90vw",
                md: "70vw",
            },
            paddingTop: "30px",
            gap: "20px",
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px"
            }}> 
                <Input 
                placeholder="תהיי החלטית ותכתבי כבר משהו..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disableUnderline={true}
                inputProps={{ style: {paddingRight: "10px"}}}
                sx={{
                    width: {
                        xs: "70vw",
                        md: "30vw",
                    },
                    height: "50px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    textAlign: "center"
                }}/>
                <AddCircle 
                onClick={() => addPlan(title)}
                sx={{width: "40px", height: "40px"}} />
            </Box>
            <Plan isDone={true} title="לראות את המונדיאל"/>
            {plans}
        </Box>
    );
}

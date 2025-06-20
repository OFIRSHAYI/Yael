import { Box, Input } from "@mui/material";
import { FC, isValidElement, ReactNode, useEffect, useState } from "react";
import { Plan } from "./Plan";
import { AddCircle } from "@mui/icons-material";
import { useGetAllPlans } from "../api/hooks/useGetAllPlans";
import planService from "../api/planService";
import { toast } from 'react-toastify';
import { HttpStatusCode } from "axios";

export const Plans: FC = () => {
    let plansFetch = useGetAllPlans();
    const [plans, setPlans] = useState<ReactNode[]>([]);
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        setPlans(plansFetch.map((plan) =>(
            <Plan id={plan.id} title={plan.title} isDone={plan.isDone} deleteFunction={deletePlan} key={plan.id} />
        )))
    }, [plansFetch]);

    const addPlan = async (title: string) => {
        try {
            const response = await planService.createPlan(title);

            if (response.status === HttpStatusCode.Ok) {
                        const id = response.data;
                        setPlans(plans.concat(<Plan id={id} title={title} isDone={false} deleteFunction={deletePlan} key={id}/>));
                        toast.success("נוספה תוכנית שנעשה עוד שנתיים");
                        setTitle("");
            } else {
                toast.error("הייתה שגיאה, כנראה שלא בא לי");
            }
        } catch {
            toast.error("הייתה שגיאה, כנראה שלא בא לי");
        }
    }

    const deletePlan = async (id: number,) => {
        await planService.deletePlan(id);
        setPlans(plans.filter((plan) => 
                    isValidElement(plan) && plan.key !== id.toString()))
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
            {plans}
        </Box>
    );
}

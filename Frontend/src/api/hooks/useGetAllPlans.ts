import { useEffect, useState } from "react";
import { plan } from "../../../types/plan";
import planService from "../planService"

export const useGetAllPlans = (): plan[] => {
    const [ plans, setPlans ] = useState<plan[]>([]);

    useEffect(() => {
        const fetchPlans = async () => {
            const plans = await planService.getAllPlans();
            setPlans(plans.data);
        }

        fetchPlans();
    }, []);

    return plans;
}

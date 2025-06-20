import axiosInstance from './axiosInstance';

const planService = {
  getAllPlans: async () => await axiosInstance.get('/plans'),
  changePlanStatus: async (planId: number, isDone: boolean) => 
    await axiosInstance.patch(`/plans/${planId}/status`, {isDone: isDone}),
  createPlan: async (title: string) =>
    await axiosInstance.post('/plans', {title: title}),
  deletePlan: async (id: number) => 
    await axiosInstance.delete(`/plans/${id}`),
};

export default planService;
import { Router } from 'express';
import { Repository } from 'typeorm';
import { Plan } from '../entities/Plan.Entity';
import dataSource from '../db/DataSource';

const router = Router()

const repository: Repository<Plan> = dataSource.getRepository(Plan);

router.get('/', async (
    _, 
    res
) => {
    try {
        const plans =  await repository.find({
            order: {
                isDone: "ASC",
                id: "ASC",
            }
        });
        res.send(plans);
    } catch (error: unknown) {
        res.status(500).send(error);
    }
});

router.post('/', async (
    req,
    res
) => {
    try {
        const plan: Plan = await repository.save({title: req.body.title})
        res.send(plan.id);
    } catch(error: unknown) {
        res.status(500).send(error);
    }
});

router.delete('/:id', async(
    req,
    res
) => {
    try {
        await repository.delete({id: req.params.id});
        res.send("Plan deleted successfully");
    } catch (error: unknown) {
        res.status(500).send(error);
    }
});

router.patch('/:id/status', async (
    req,
    res
) => {
    try {
        await repository.update(req.params.id, req.body)
    } catch (error: unknown) {
        res.status(500).send(error);
    }
});

export default router;
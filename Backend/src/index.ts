import express from 'express';
import dataSource from "./db/DataSource";
import "reflect-metadata"; 
import cors from 'cors';
import plansRouter from './Routers/plan.router';

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());
app.use('/', (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next(); // pass control to the next middleware
  });

app.use('/plans', plansRouter)

dataSource.initialize()
    .then(() => {
        app.listen(PORT, (error) =>{
            if (!error) {
                console.log("Server is Successfully Running on port "+ PORT)
            }
        });
    })

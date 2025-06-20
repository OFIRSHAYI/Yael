
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { DataSource } from 'typeorm';
import dotenv from "dotenv";
import { Plan } from '../entities/Plan.Entity';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.PGHOST,
  port: +process.env.PGPORT!,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  schema: 'yael',
  entities: [Plan],
  synchronize: false,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
  ssl: {
    rejectUnauthorized: false, // required for Render
  },
});

export default AppDataSource;

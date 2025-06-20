import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "plans"})
export class Plan {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    title: string;

    @Column({ nullable: false })
    isDone: boolean;
}
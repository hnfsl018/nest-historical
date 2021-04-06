import { BaseEntity, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('todo')
export class TodoEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column()
    public note: string;

    @BeforeUpdate()
    handleBeforeUpdate() {
        console.log("handleBeforeUpdate: :")
    }
}

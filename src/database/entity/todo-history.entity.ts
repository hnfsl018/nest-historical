import { HistoryActionColumn, HistoryActionType, HistoryEntityInterface } from "@anchan828/typeorm-history";
import { Column, Entity } from "typeorm";
import { TodoEntity } from "./todo.entity";

@Entity('todo_history')
export class TodoHistoryEntity extends TodoEntity implements HistoryEntityInterface {
    @Column()
    public originalID!: number;

    @HistoryActionColumn()
    public action!: HistoryActionType;
}

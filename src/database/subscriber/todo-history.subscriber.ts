import { HistoryEntitySubscriber } from "@anchan828/typeorm-history";
import { EventSubscriber } from "typeorm";
import { TodoHistoryEntity } from "../entity/todo-history.entity";
import { TodoEntity } from "../entity/todo.entity";

@EventSubscriber()
export class TodoHistoryEntitySubscriber extends HistoryEntitySubscriber<TodoEntity, TodoHistoryEntity> {
    public get entity() {
        return TodoEntity;
    }
    public get historyEntity() {
        return TodoHistoryEntity;
    }

    public beforeUpdateHistory(history: TodoHistoryEntity): TodoHistoryEntity | Promise<TodoHistoryEntity> {
        console.log(" beforeUpdateHistory ")
        return history;
    }

}
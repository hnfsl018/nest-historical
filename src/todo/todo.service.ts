import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from 'src/database/entity/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>
  ) {

  }
  async createAndUpdateEntity() {
    // Insert
    const testEntity = await TodoEntity.create({ note: "test" }).save();

    // Update
    testEntity.note = "updated";
    await testEntity.save();

    // Remove
    await testEntity.remove();
    await this.todoRepository.update({ id: 1 }, { note: 'updated' });

    return testEntity;
  }

  async updateEntityWhereIdIsOne() {
    const entity = await this.todoRepository.findOne({ where: { id: 1 } });
    entity.note = 'Note updated';
    await entity.save();
  }


}
